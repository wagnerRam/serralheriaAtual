import Image from "next/image";
import Link from "next/link";

import image1 from "../../../public/serralheiro.jpg"

export function Sobre() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 mb-30">
      {/* Imagem do portão */}
      <div className="relative h-80 md:h-auto" id="sobre">
        <Image
          src={image1} // Substitua com o caminho correto da imagem
          alt="Portão Automático"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Conteúdo textual */}
      <div className="bg-zinc-900 text-white flex flex-col justify-center p-8 md:p-16">
        <h2 className="text-sm text-zinc-400 mb-1">Sobre </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4" >
          Serralheria Atual
        </h1>

        <p className="mb-4">
          Localizada na região do Grande ABC, a empresa se orgulha de ser o parceiro de confiança de seus clientes, priorizando excelência em cada projeto.
        </p>

        <p className="mb-4">
          Nossa equipe altamente qualificada está comprometida em entender as necessidades específicas de cada cliente, entregando portões robustos, 
          funcionais e esteticamente agradáveis. Na Real Portões Automáticos, você encontra inovação, segurança e atendimento personalizado, sempre 
          focando na satisfação e tranquilidade de quem confia em nossos produtos.
        </p>

        <p className="mb-6">
          Escolha a Real Portões Automáticos e garanta um portão que combina tecnologia avançada, durabilidade e design elegante.
        </p>

        <Link
          href="#contato"
          className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-2 rounded-md w-fit"
        >
          Saiba mais
        </Link>
      </div>
      <div></div>
    </main>
  );
}
