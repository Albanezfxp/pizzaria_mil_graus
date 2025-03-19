import React from "react";
import { FaWhatsapp, FaTag, FaPercent } from "react-icons/fa";
import Header from "../Home/components/Header/Header";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";
import "./Promocoes.css";

const Promocoes: React.FC = () => {
  return (
    <div className="promocoes-container">
      <Header />
      <main className="promocoes-main">
        <section className="promocoes-hero">
          <div className="promocoes-content">
            <h1 className="section-title">Promoções Especiais</h1>
            <p className="promocoes-description">
              Aproveite nossas ofertas exclusivas e peça já sua pizza favorita!
            </p>
          </div>
        </section>

        <section className="promocoes-grid">
          <div className="promocao-card">
            <div className="promocao-header">
              <FaTag className="promocao-icon" />
              <span className="promocao-tag">Promoção Casadinha</span>
            </div>
            <div className="promocao-content">
              <h3>2 Pizzas Grandes e 1 Pizza Pequena Doce</h3>
              <p>
                Na compra de 2 pizzas grandes, você ganha 1 pizza pequena doce
                como cortesia! Aproveite essa oportunidade deliciosa e peça
                agora mesmo pelo nosso delivery.
              </p>
              <ul className="promocao-detalhes">
                <li>Pizzas tamanho grande</li>
                <li>Pizza tamanho pequeno</li>
                <li>Sabores tradicionais</li>
                <li>Válido para retirada</li>
              </ul>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FU374E6HHWC7WC1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYxpQIMmphCQJh7GlFVJUQpaPAoHeeEUKw4QY90OMH8pCAE09kNTL41-k0_aem_zZSHjqqzkO7siAEviizVGw&e=AT29-Rhi6UWmfhMpIVO1nmh0EHmUn0tBOzbfxSjbKDyZKv4E302xFNgRgNrP84FCmuXEmgtcYmB086-YVeM3nl4YAaoQIWDYyIsV5WHw0suuUFm4RqrWYYg"
                target="_blank"
                rel="noopener noreferrer"
                className="promocao-botao"
              >
                <FaWhatsapp /> Pedir Agora
              </a>
            </div>
          </div>
          <div className="promocao-card">
            <div className="promocao-header">
              <FaPercent className="promocao-icon" />
              <span className="promocao-tag">Combo Família</span>
            </div>
            <div className="promocao-content">
              <h3>Pizza Grande + Pizza Pequena</h3>
              <p>
                Sabor e economia em um só combo! Não deixe passar essa chance de
                aproveitar com quem você ama.
              </p>
              <ul className="promocao-detalhes">
                <li>1 Pizza tamanho grande</li>
                <li>1 Pizza tamanho pequeno</li>
                <li>Sabores tradicionais</li>
              </ul>
              <div className="promocao-preco">
                <span className="preco-antigo">R$ 106,00</span>
                <span className="preco-atual">R$ 79,99</span>
                <span className="preco-desconto">-25%</span>
              </div>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FU374E6HHWC7WC1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYxpQIMmphCQJh7GlFVJUQpaPAoHeeEUKw4QY90OMH8pCAE09kNTL41-k0_aem_zZSHjqqzkO7siAEviizVGw&e=AT29-Rhi6UWmfhMpIVO1nmh0EHmUn0tBOzbfxSjbKDyZKv4E302xFNgRgNrP84FCmuXEmgtcYmB086-YVeM3nl4YAaoQIWDYyIsV5WHw0suuUFm4RqrWYYg"
                target="_blank"
                rel="noopener noreferrer"
                className="promocao-botao"
              >
                <FaWhatsapp /> Pedir Agora
              </a>
            </div>
          </div>
        </section>

        <section className="promocoes-info">
          <div className="info-container">
            <h2>Informações Importantes</h2>
            <ul className="info-lista">
              <li>As promoções não são cumulativas</li>
              <li>Válido enquanto durarem os estoques</li>
              <li>Preços podem variar sem aviso prévio</li>
              <li>Consulte o cardápio para disponibilidade dos sabores</li>
              <li>Taxa de entrega não incluída nas promoções</li>
            </ul>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Promocoes;
