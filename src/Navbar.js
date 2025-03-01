import './Navbar.css'
import './NavbarMobile.css'

import React, { useState } from "react";
import "./App.css";

function Navbar() {
  // O estado do tema: "light" ou "dark"
  const [theme, setTheme] = useState("dark");

  // Função para trocar o tema
  const toggleTheme = (event) => {
    setTheme(event.target.checked ? "dark" : "light");
  };

  // Lógica para o menu hambúrguer
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Adicionando uma classe ao body para controlar os estilos com base no tema
  React.useEffect(() => {
    document.body.className = theme; // Define a classe 'light' ou 'dark' no body
  }, [theme]);

  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Impede o comportamento padrão do link
  
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className='navbar'>
      
      {/* Barra de navegação */}
      <nav className="menu-hamburguer">
        {/* Botão do menu hambúrguer */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Menu de navegação */}
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#Sobre" onClick={(e) => handleScroll(e, "Sobre")}>
              Sobre</a>
            </li>
            <li>
              <a href="#Habilidades" onClick={(e) => handleScroll(e, "Habilidades")}>Habilidades</a>
            </li>
            <li>
              <a href="#Projetos" onClick={(e) => handleScroll(e, "Projetos")}>Projetos</a>
            </li>
            <li>
              <a href="#Contato" onClick={(e) => handleScroll(e, "Contato")}>Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <h1 className='titulo'>Portfólio</h1>

      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>

    </div>
  );
}

export default Navbar;
