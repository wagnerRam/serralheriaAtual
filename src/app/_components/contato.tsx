"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import imagemContato from "../../../public/serralheiro2.avif"; 

export function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const [interesseSelecionado, setInteresseSelecionado] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {

      const storedInteresse = localStorage.getItem("produto_selecionado");
      setInteresseSelecionado(storedInteresse);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const produtoSelecionado = interesseSelecionado;

    const dadosParaEnvio = {
      nome,
      telefone,
      email,
      mensagem,
      interesse: produtoSelecionado || 'Não Selecionado na Galeria'
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnvio),
      });

      if (res.ok) {
        setStatus("success");
        setNome("");
        setTelefone("");
        setEmail("");
        setMensagem("");

        if (typeof window !== 'undefined') {
          localStorage.removeItem("produto_selecionado");
        }
        setInteresseSelecionado(null);

      } else {
        setStatus("error");
        console.error("Erro na resposta do servidor:", await res.json());
      }
    } catch (err) {
      console.error("Erro ao enviar o formulário (Rede/Servidor):", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 py-16" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-red-500 mb-12">
          Solicite um Orçamento
        </h2>
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white">

          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <Image
              src={imagemContato}
              alt="Serralheiro trabalhando"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-red-800 opacity-20"></div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-red-500 mb-6">
              Preencha para Entrarmos em Contato
            </h3>

          
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  placeholder="Nome"
                  id="nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <input
                  type="tel"
                  placeholder="Telefone"
                  id="telefone"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Detalhes do Projeto (O que você precisa?)</label>
                <textarea
                  id="mensagem"
                  placeholder="O que você precisa?"
                  rows={4}
                  required
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg transition-all duration-300 transform 
                                    ${status === "sending"
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 active:scale-95 text-white focus:outline-none focus:ring-4 focus:ring-red-300"}`
                }
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando Solicitação...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2 h-4 w-4" />
                    Solicitar Orçamento
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="text-green-600 font-semibold text-center mt-4">Orçamento enviado com sucesso! Entraremos em contato o mais breve possível.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold text-center mt-4">Erro ao enviar. Por favor, verifique sua conexão ou entre em contato pelo telefone.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
