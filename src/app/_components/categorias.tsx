import Image, { StaticImageData } from "next/image";

interface Galeria {
  id: number;
  titulo: string;
  imagem: StaticImageData;
  href?: string;
}


import portaoTubularImg from "../../../public/sobre1IMG.png";
import portaoChapaImg from "../../../public/sobre2IMG.png";
import escada from "../../../public/escada de metal.webp"
import portao from "../../../public/portao.jpg"
import portaoAutomatico from "../../../public/portão automatico.jpg"
import mezanino from "../../../public/mezanino.jpg"
import estruturaTeto from "../../../public/estruturaTeto.webp"
import portaoAberto from "../../../public/portaoAberto.webp"

const categorias: Galeria[] = [
  {
    id: 1,
    titulo: "Portão com Chapa de Aço",
    imagem: portaoTubularImg,
  },
  {
    id: 2,
    titulo: "Estrutura em Aço",
    imagem: portaoChapaImg,
  },
  {
    id: 3,
    titulo: "Escada em Metal",
    imagem: escada,
  },
  {
    id: 4,
    titulo: "Portão com Detalhes em Madeira",
    imagem: portao,
  },
  {
    id: 5,
    titulo: "Portão Automatico",
    imagem: portaoAutomatico,
  },
  {
    id: 6,
    titulo: "Imagem 6",
    imagem: mezanino,
  },
  {
    id: 7,
    titulo: "imagem 7",
    imagem: estruturaTeto,
  },
    {
    id: 8,
    titulo: "imagem 7",
    imagem: portaoAberto,
  }
];

export function Categorias() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="galeria">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-500" >Galeria</h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categorias.map((item) => (
          <article
            key={item.id}
            className="flex flex-col bg-white shadow-lg rounded-3xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl"
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

              <a
                href={item.href ?? "#contato"}
                className="inline-block w-full text-center px-4 py-3 rounded-md bg-red-500 hover:bg-red-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
              >
                Saiba mais
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
