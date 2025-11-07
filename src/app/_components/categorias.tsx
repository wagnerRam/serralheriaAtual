"use client";

import Image, { StaticImageData } from "next/image";
// Certifique-se de que os caminhos e os nomes dos arquivos de imagem estão corretos
import portaoTubularImg from "../../../public/sobre1IMG.png";
import portaoChapaImg from "../../../public/sobre2IMG.png";
import escada from "../../../public/escada de metal.webp";
import portao from "../../../public/portao.jpg";
import portaoAutomatico from "../../../public/portao_automatico.jpg";
import mezanino from "../../../public/mezanino.jpg";
import estruturaTeto from "../../../public/estruturaTeto.webp";
import portaoAberto from "../../../public/portaoAberto.webp";

interface Galeria {
  id: number;
  titulo: string;
  imagem: StaticImageData;
  href?: string;
}

const categorias: Galeria[] = [
  {
    id: 1,
    titulo: "Portão de Aço",
    imagem: portaoTubularImg,
  },
  {
    id: 2,
    titulo: "Estrutura de Aço",
    imagem: portaoChapaImg,
  },
  {
    id: 3,
    titulo: "Escada de Metal",
    imagem: escada,
  },
  {
    id: 4,
    titulo: "Portão Simples",
    imagem: portao,
  },
  {
    id: 5,
    titulo: "Portão Automático",
    imagem: portaoAutomatico,
  },
  {
    id: 6,
    titulo: "Mezanino Estrutural",
    imagem: mezanino,
  },
  {
    id: 7,
    titulo: "Estrutura para Teto",
    imagem: estruturaTeto,
  },
  {
    id: 8,
    titulo: "Portão Articulado",
    imagem: portaoAberto,
  }
];

export function Categorias() {
  // Função que será chamada ao clicar na imagem/botão.
  const selecionarProdutoParaOrcamento = (tituloProduto: string) => {
    // 1. Armazena o título na chave 'produto_selecionado' no Local Storage
    localStorage.setItem("produto_selecionado", tituloProduto);

    // 2. Rolagem suave para o formulário de contato (elemento com id="contato")
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

    console.log(`Produto selecionado: ${tituloProduto}. Rolando para o contato.`);
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 mb-16"
      id="galeria"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-red-500">Galeria</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categorias.map((item) => (
          <article
            key={item.id}
            className="flex flex-col bg-white shadow-lg rounded-3xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            onClick={() => selecionarProdutoParaOrcamento(item.titulo)}
          >
            <div className="relative w-full h-52 md:h-48 lg:h-44">
              <Image
                src={item.imagem}
                alt={item.titulo}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="flex-grow p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">
                {item.titulo}
              </h3>

              {/* Botão de seleção (o e.stopPropagation impede o clique duplo) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  selecionarProdutoParaOrcamento(item.titulo);
                }}
                className="inline-block w-full text-center px-4 py-3 rounded-md bg-red-500 hover:bg-red-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
              >
                Saiba mais
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
