import Header from "../Home/components/Header/Header";
import "./Contato.css";
import instagramLogo from "../../assets/icons8-instagram-logo-300.png";
import whatsappLogo from "../../assets/icons8-whatsapp-logo-300.png";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";
export default function Contato() {
  return (
    <>
      <div className="Contato">
        <Header />
        <main>
          <div id="mainContatoContainer">
            <div id="contactImg">
              <ul>
                <li className="IconsClass">
                  <p>Instagram</p>
                  <a
                    href="https://www.instagram.com/pizzaria1000graus/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagramLogo} alt="icon ig" />
                  </a>
                </li>
                <li className="IconsClass">
                  <p>WhatsApp</p>
                  <a
                    href="https://api.whatsapp.com/message/U374E6HHWC7WC1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatsappLogo} alt="icon wpp" />
                  </a>
                </li>
              </ul>
            </div>
            <section>
              <div id="sectionContactContainer">
                <h1>Nossos contatos!</h1>
                <p>
                  Quer fazer um pedido, tirar dúvidas ou enviar sugestões?
                  Estamos aqui para ouvir você! Entre em contato conosco pelo
                  telefone ou Instagram. Ficaremos felizes em atende-lo!
                </p>
              </div>
            </section>
          </div>
        </main>
        <FloatingButton />
      </div>
    </>
  );
}
