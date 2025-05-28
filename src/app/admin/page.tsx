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

  // ✅ URL do backend corrigida
  useEffect(() => {
    async function fetchOrcamentos() {
      try {
        const res = await fetch("https://serralheria-backend.vercel.app/api/contatos", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Erro ao buscar contatos");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setOrcamentos(data);
        } else {
          setOrcamentos([]);
        }
      } catch (error) {
        console.error("Erro no fetch:", error);
        setOrcamentos([]);
      }
    }

    fetchOrcamentos();
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja deletar este orçamento?")) return;

    try {
      const res = await fetch(`/api/contatos/${id}`, {
        method: "DELETE",
      });

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
    <div className="flex min-h-screen bg-gray-100">
      <nav className="w-60 bg-white shadow-md flex flex-col">
        <div className="p-6 font-bold text-xl border-b">Painel Admin</div>
        <button
          onClick={() => setMenuAtivo("orcamentos")}
          className={`text-left px-6 py-3 border-l-4 ${
            menuAtivo === "orcamentos"
              ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
              : "border-transparent hover:bg-gray-100"
          }`}
        >
          Orçamentos
        </button>
      </nav>

      <main className="flex-1 p-6">
        {menuAtivo === "orcamentos" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Orçamentos Recebidos</h1>
            <div className="bg-white shadow-md rounded-xl overflow-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-4 py-2">Nome</th>
                    <th className="px-4 py-2">Telefone</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Data</th>
                    <th className="px-4 py-2 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {orcamentos.map((orc) => (
                    <React.Fragment key={orc.id}>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap">{orc.nome}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{orc.telefone}</td>
                        <td className="px-4 py-2 whitespace-nowrap">{orc.email}</td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          {new Date(orc.criado_em).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-center flex justify-center gap-2">
                          <button
                            onClick={() =>
                              setMensagemAbertaId(mensagemAbertaId === orc.id ? null : orc.id)
                            }
                            className="bg-zinc-900 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
                          >
                            Detalhes
                          </button>
                          <button
                            onClick={() => handleDelete(orc.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
                          >
                            Excluir
                          </button>
                        </td>
                      </tr>
                      {mensagemAbertaId === orc.id && (
                        <tr>
                          <td
                            colSpan={5}
                            className="bg-gray-100 p-4 whitespace-pre-line text-gray-700"
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
