import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/serralheiro.jpg";

export function Sobre() {
  return (
    <main
      id="sobre"
      className="grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-20 scroll-mt-36"
    >
      <div className="relative h-80 md:h-auto">
        <Image
          src={image1}
          alt="Portão Automático"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="bg-zinc-900 text-white flex flex-col justify-center p-8 md:p-16">
        <h2 className="text-sm text-zinc-400 mb-1">Sobre</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
          Serralheria Atual
        </h1>

        <p className="mb-4">
          A serralheria teve origem em um ferro-velho, onde eram realizados pequenos serviços no bairro e na cidade. 
          Com o passar do tempo, a qualidade dos serviços prestados gerou um aumento significativo da demanda, impulsionado por recomendações dos próprios clientes. 
          Essa expansão evidenciou a necessidade de um espaço maior para atender aos pedidos. 
          Assim, em 2001, foi fundada a Serralheria Atual no bairro Vila Nova Cachoeirinha, em São Paulo, especializada na fabricação de portões, grades, estruturas metálicas e artefatos de ferro.
        </p>

        <p className="mb-4">
          A Serralheria Atual nasceu com o compromisso de oferecer soluções personalizadas e de alta qualidade para seus clientes. 
          A empresa se destaca pela dedicação em compreender as necessidades específicas de cada projeto. 
          Especializada na produção de portões robustos, funcionais e esteticamente agradáveis, a Serralheria Atual combina inovação, segurança e 
          atendimento personalizado, garantindo a satisfação e a tranquilidade de seus clientes.
        </p>

        <Link
          href="#contato"
          className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-2 rounded-md w-fit"
        >
          Saiba mais
        </Link>
      </div>
    </main>
  );
}
