"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container_nav bg-zinc-900 flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="logo">
        <Image src={logo} alt="Logo da Empresa" height={50} />
      </div>

      {/* Links de navegação */}
      <div
        className={`nav_links ${
          menuOpen ? "open" : ""
        } text-white flex items-center gap-8`}
      >
        <ul className="flex gap-6 list-none m-0 p-0">
          <li><a href="#" className="hover:text-zinc-400 transition">Home</a></li>
          <li><a href="#sobre" className="hover:text-zinc-400 transition">Quem Somos</a></li>
          <li><a href="#galeria" className="hover:text-zinc-400 transition">Galeria</a></li>
          <li><a href="#contato" className="hover:text-zinc-400 transition">Contato</a></li>
        </ul>

        {/* Botão */}
        <div className="nav_button ml-6">
          <a href="#contato">
            <button className="bnt border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-zinc-900 transition">
              Solicite um Orçamento
            </button>
          </a>
        </div>
      </div>

      {/* Menu toggle (mobile) */}
      <div
        className="menu_toggle flex flex-col gap-1 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar w-6 h-0.5 bg-white"></span>
        <span className="bar w-6 h-0.5 bg-white"></span>
        <span className="bar w-6 h-0.5 bg-white"></span>
      </div>
    </div>
  );
}
