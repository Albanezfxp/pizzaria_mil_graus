import { useState, useEffect } from "react";
import logoHeader from "../../../../assets/fa4d9ccd-23e0-46c5-b267-7601c1a965e3.webp";
import LiNav from "./components/LiNav/LiNav";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src={logoHeader} alt="Logo Pizzaria" className="logo-image" />
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <LiNav link="/pizzaria_mil_graus" page="Home" />
            <LiNav link="/cardapio" page="Cardápio" />
            <LiNav link="/localizacao" page="Localização" />
            <LiNav link="/promocoes" page="Promoções" />
            <LiNav link="/contato" page="Contato" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
