"use client";
import Image from "next/image";

export default function ImagePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Modelo Lógico do Banco de Dados</h1>

      <Image
        src="/image.png"           // 👈 caminho da imagem (dentro de /public)
        alt="Modelo lógico do banco de dados"
        width={1000}                       // 👈 largura da imagem
        height={600}                       // 👈 altura da imagem
        className="rounded-lg shadow-md border border-gray-300"
      />
    </main>
  );
}
