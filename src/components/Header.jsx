import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      {/* Logo */}
      <div className="header-logo">
        <img src="/images/logo-zen-blanco-sin-fondo.png" alt="Logo Zen" className="logo-image" />
        <img src="/images/logo_letra_negro-sin-fondo.png" alt="Psicoterapia Durango" className="logo-letras" />
      </div>

      {/* Botón del menú móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menú estándar */}
      <nav className="header-menu" >
        <ul>
          <li className="menu-item"><HashLink smooth to="/#inicio">Inicio</HashLink></li>
          <li className="menu-item"><HashLink smooth to="/#servicios">Servicios</HashLink></li>
          <li className="menu-item"><HashLink smooth to="/la-terapia">La Terapia</HashLink></li>
          <li className="menu-item"><HashLink smooth to="/descubre">Descúbrete</HashLink></li>
          <li className="menu-item"><HashLink smooth to="/sobre-mi">Sobre mí</HashLink></li>
          <li className="menu-item"><HashLink smooth to="/contacto">Contacto</HashLink></li>
        </ul>
      </nav>

      {/* Botón Reservar Cita */}
      <HashLink smooth to="/contacto" className="btn-reservar">
        Reservar Cita
      </HashLink>

      {/* Menú móvil */}
      {isMenuOpen && (
        <nav className="mobile-menu menu-open">
          <ul>
            <li className="menu-item"><HashLink smooth to="/#inicio" onClick={closeMenu}>Inicio</HashLink></li>
            <li className="menu-item"><HashLink smooth to="/#servicios" onClick={closeMenu}>Servicios</HashLink></li>
            <li className="menu-item"><HashLink smooth to="/la-terapia" onClick={closeMenu}>La Terapia</HashLink></li>
            <li className="menu-item"><HashLink smooth to="/descubre" onClick={closeMenu}>Descúbrete</HashLink></li>
            <li className="menu-item"><HashLink smooth to="/sobre-mi" onClick={closeMenu}>Sobre mí</HashLink></li>
            <li className="menu-item"><HashLink smooth to="/contacto" onClick={closeMenu}>Contacto</HashLink></li>
          </ul>
        </nav>
      )}


    </header>
  );
};

export default Header;
