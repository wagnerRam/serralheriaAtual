"use client";

import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import imagemContato from "../../../public/serralheiro2.avif";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContatoComponent() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");
  const [interesse, setInteresse] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const interesseParam = searchParams.get("interesse");
    if (interesseParam) {
      setInteresse(interesseParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Redirecionando para o WhatsApp...");

    try {
      await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, telefone, email, mensagem, interesse }),
      });
    } catch (err) {
      console.error("Falha ao salvar o contato, mas continuando para o WhatsApp:", err);
    }

    const telefoneDestino = "5511986814147";
    let mensagemFormatada = `Olá! Gostaria de fazer um orçamento.

*Nome:* ${nome}
*Telefone:* ${telefone}
*Email:* ${email}`;

    if (interesse) {
      mensagemFormatada += `

*Tenho interesse em:* ${interesse}`;
    }

    mensagemFormatada += `

*Mensagem:*
${mensagem}`;

    const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(
      mensagemFormatada
    )}`;

    window.open(url, "_blank");

    setNome("");
    setTelefone("");
    setEmail("");
    setMensagem("");
    setInteresse(""); // Limpa o interesse após o envio
    setStatus("Abra o WhatsApp para concluir o envio!");
  };

  return (
    <section className="bg-white text-gray-800 py-10 md:py-16 px-4" id="contato">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2">
          <Image
            src={imagemContato}
            alt="Trabalhador serralheiro"
            className="w-full h-auto object-cover rounded-md border-2 border-red-500"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <p className="font-semibold text-sm mb-1">⚡ ENTRE EM CONTATO</p>
          <h2 className="text-2xl font-bold mb-6 text-red-500">
            Solicite um Orçamento
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {interesse && (
              <div className="p-3 bg-red-100 border border-red-300 rounded-md text-center">
                <p className="text-sm font-medium text-red-800">
                  Interesse selecionado: <strong>{interesse}</strong>
                </p>
              </div>
            )}
            <input
              type="text"
              placeholder="Seu Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows={4}
              placeholder="O que você precisa?"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane /> ENVIAR SOLICITAÇÃO
            </button>

            {status && (
              <p className="mt-4 text-center text-sm text-green-600 font-semibold">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


export function Contato() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ContatoComponent />
    </Suspense>
  );
}
