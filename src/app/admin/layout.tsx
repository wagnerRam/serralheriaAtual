"use client";  // 👈 Adicione isso no topo

import { ReactNode, useState } from "react";
import { FaFileAlt, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100 md:flex-row">
      {/* Botão mobile */}
      <div className="md:hidden flex items-center justify-between bg-zinc-900 text-white p-4">
        <span className="text-lg font-bold">Serralheria Atual</span>
        <button onClick={() => setOpen(!open)} className="text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu lateral */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-zinc-900 text-white p-6 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="text-2xl font-bold mb-8">
          <img src="/logo.png" alt="Serralheria Atual" className="mb-4" />
        </div>
        <nav className="space-y-6 text-lg">
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaFileAlt /> Orçamentos
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaUser /> Clientes
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <FaCog /> Configurações
          </div>
        </nav>
      </aside>

      {/* Conteúdo da página */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>

      {/* Fundo escurecido ao abrir o menu mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}
