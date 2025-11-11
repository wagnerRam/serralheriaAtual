"use client";

import React, { useState, useEffect } from "react";

interface Orcamento {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
  criado_em: string;
}

export default function AdminPanel() {
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([]);
  const [mensagemAbertaId, setMensagemAbertaId] = useState<number | null>(null);
  const [menuAtivo, setMenuAtivo] = useState<"orcamentos">("orcamentos");
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    async function fetchOrcamentos() {
      const res = await fetch("/api/contatos", { cache: "no-store" });
      const data = await res.json();
      if (Array.isArray(data)) setOrcamentos(data);
    }
    fetchOrcamentos();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja deletar este orçamento?")) return;
    try {
      const res = await fetch(`/api/contatos/${id}`, { method: "DELETE" });
      if (res.ok) {
        setOrcamentos((prev) => prev.filter((orc) => orc.id !== id));
        if (mensagemAbertaId === id) setMensagemAbertaId(null);
      } else {
        alert("Erro ao deletar orçamento.");
      }
    } catch (error) {
      alert("Erro ao deletar orçamento.");
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* 🔹 Cabeçalho Mobile */}
      <div className="flex md:hidden items-center justify-between bg-zinc-900 text-white p-4">
        <span className="font-bold text-lg">Painel Admin</span>
        <button onClick={() => setMenuAberto(!menuAberto)} className="text-xl">
          ☰
        </button>
      </div>

      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {menuAtivo === "orcamentos" && (
          <>
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
              Orçamentos Recebidos
            </h1>

            <div className="bg-white shadow-md rounded-xl overflow-x-auto">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-gray-200 text-gray-700 text-xs sm:text-sm">
                  <tr>
                    <th className="px-4 py-2 whitespace-nowrap">Nome</th>
                    <th className="px-4 py-2 whitespace-nowrap">Telefone</th>
                    <th className="px-4 py-2 whitespace-nowrap">Email</th>
                    <th className="px-4 py-2 whitespace-nowrap">Data</th>
                    <th className="px-4 py-2 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {orcamentos.map((orc) => (
                    <React.Fragment key={orc.id}>
                      <tr className="border-t hover:bg-gray-50 text-xs sm:text-sm">
                        <td className="px-4 py-2">{orc.nome}</td>
                        <td className="px-4 py-2">{orc.telefone}</td>
                        <td className="px-4 py-2">{orc.email}</td>
                        <td className="px-4 py-2">
                          {new Date(orc.criado_em).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-2 text-center">
                          <div className="flex flex-col sm:flex-row justify-center gap-2">
                            <button
                              onClick={() =>
                                setMensagemAbertaId(
                                  mensagemAbertaId === orc.id ? null : orc.id
                                )
                              }
                              className="bg-zinc-900 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                            >
                              Detalhes
                            </button>
                            <button
                              onClick={() => handleDelete(orc.id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                            >
                              Excluir
                            </button>
                          </div>
                        </td>
                      </tr>

                      {mensagemAbertaId === orc.id && (
                        <tr>
                          <td
                            colSpan={5}
                            className="bg-gray-100 p-4 whitespace-pre-line text-gray-700 text-sm"
                          >
                            {orc.mensagem}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>

              {orcamentos.length === 0 && (
                <p className="p-4 text-center text-gray-500">
                  Nenhum orçamento recebido ainda.
                </p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
