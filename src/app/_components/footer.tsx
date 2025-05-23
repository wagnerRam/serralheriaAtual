import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        {/* Informações */}
        <div className="flex-1">
          <p className="text-sm text-gray-700 font-medium mb-2">Serralheria Atual</p>
          <h2 className=" text-red-500 text-3xl font-bold border-l-4 border-red-600 pl-2 mb-8">Nossos meios de contato</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-600 text-xl mt-1" />
              <div className="text-white">
                <p className="font-semibold ">Endereço</p>
                <p>Av. Parada Pinto, 1002 Bairro: Vila nova cachoeirinha Cep: 02611-002</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-red-600 text-xl mt-1" />
              <div className="text-white">
                <p className="font-semibold">E-mail</p>
                <p>Serralheria_atual_fj@.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-red-600 text-xl mt-1" />
              <div className="text-white">
                <p className="font-semibold">Telefone</p>
                <p>(011) 94029-7369</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaWhatsapp className="text-red-600 text-xl mt-1" />
              <div className="text-white">
                <p className="font-semibold">WhatsApp</p>
                <p>(011) 94029-7369</p>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="mt-10 text-white">
            <p className="font-semibold mb-2">Nos siga nas redes sociais!</p>
            <div className="flex gap-4 text-2xl text-gray-700">
              <a href="#" className="hover:text-red-600 text-white">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-red-600 text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="flex-1">
          <iframe
            title="Mapa Real Portões"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.7380380781815!2d-46.663332523916985!3d-23.46991195824034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef76f89987a57%3A0x23cd725a0e6798ea!2sAv.%20Parada%20Pinto%2C%201002%20-%20Vila%20Nova%20Cachoeirinha%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002611-002!5e0!3m2!1spt-BR!2sbr!4v1747789380047!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            className="rounded-md w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}