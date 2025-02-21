import { useState } from "react";
import logoHeader from "../../../../assets/fa4d9ccd-23e0-46c5-b267-7601c1a965e3.webp";
import LiNav from "./components/LiNav/LiNav";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsHeaderOpen(!isHeaderOpen);
  };

  return (
    <>
      <header>
        <div id="headerContainer" className={isHeaderOpen ? "headerOpen" : ""}>
          <div id="logoHeaderContainer">
            <img src={logoHeader} alt="Logo-Imagem" id="imgLogoItem"/>
          </div>
          <button className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <nav id="navMenu">
            <div id="navContainer">
              <ul>
                <LiNav link="/pizzaria_mil_graus" page="Home" />
                <p>|</p>
                <LiNav link="/cardapio" page="Cardapio" /> <p>|</p>
                <LiNav link="/localizacao" page="Localização" /> <p>|</p>
                <LiNav link="/promocoes" page="Promoções" /> <p>|</p>
                <LiNav link="/contato" page="Contato" />
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <nav id={isMenuOpen ? "navMenuOpen" : "navMenuClose"}>
        <div id="navMenuOpenContainer">
          <ul>
           <LiNav link="/pizzaria_mil_graus" page="Home" />
            <LiNav link="/cardapio" page="Cardapio" />
            <LiNav link="/localizacao" page="Localização" />
            <LiNav link="/promocoes" page="Promoções" />
            <LiNav link="/contato" page="Contato" />
          </ul>
        </div>
      </nav>
    </>
  );
}
