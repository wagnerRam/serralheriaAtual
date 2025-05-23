"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container_nav bg-zinc-900">
      <div className="logo">
        <Image src={logo} alt="Logo da Empresa" height={50} />
      </div>

      <div className={`nav_links ${menuOpen ? "open" : ""} text-white `}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#sobre">Quem Somos</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className="nav_button ">
          <a href="#contato"><button className="bnt">Solicite um Orçamento</button></a>
        </div>
      </div>

      <div className="menu_toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}
