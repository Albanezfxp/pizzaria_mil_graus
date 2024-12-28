import logoHeader from "../../../../assets/fa4d9ccd-23e0-46c5-b267-7601c1a965e3.webp";
import LiNav from "./components/LiNav/LiNav";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <div id="headerContainer">
          <div id="logoHeaderContainer">
            <img src={logoHeader} alt="Logo-Imagem" id="imgLogoItem" />
          </div>
          <nav>
            <div id="mobile-menu">
              <div id="line1"></div>
              <div id="line2"></div>
              <div id="line3"></div>
            </div>
            <div id="navContainer">
              <ul>
                <LiNav link="/cardapio" page="Cardapio" />
                <p>|</p>
                <LiNav link="/localizacao" page="Localização" /> <p>|</p>
                <LiNav link="/promocoes" page="Promoções" /> <p>|</p>
                <LiNav link="/contato" page="Contato" />
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
