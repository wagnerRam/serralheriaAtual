
import Image from "next/image";// Atualize com sua imagem real
import { FaPaperPlane } from "react-icons/fa";
import imagemContato from "../../../public/serralheiro2.avif"

export function Contato() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 pt-0 " id="contato">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16" id="contato">

        {/* Imagem à esquerda */}
        <div className="w-full lg:w-1/2">
          <Image
            src={imagemContato}
            alt="Trabalhador serralheiro"
            className="w-full h-auto object-cover rounded-md border-2 border-red-500"
            priority
          />
        </div>

        {/* Formulário à direita */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <p className=" font-semibold text-sm mb-1">⚡ ENTRE EM CONTATO</p>
          <h2 className="text-2xl font-bold mb-6 text-red-500">Solicite um Orçamento</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Telefone"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows={4}
              placeholder="O que você precisa?"
              className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane /> ENVIAR SOLICITAÇÃO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
