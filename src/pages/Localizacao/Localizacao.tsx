import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import Header from "../Home/components/Header/Header";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";
import "./Localizacao.css";

const Localizacao: React.FC = () => {
  return (
    <div className="localizacao-container">
      <Header />
      <main className="localizacao-main">
        <section className="localizacao-hero">
          <div className="localizacao-content">
            <h1 className="section-title">Nossa Localização</h1>
            <p className="localizacao-description">
              Venha nos visitar! Estamos localizados em um ponto estratégico
              para melhor atendê-lo.
            </p>
          </div>
        </section>

        <section className="localizacao-grid">
          <div className="localizacao-info">
            <h2>Informações</h2>
            <div className="info-cards">
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <h3>Endereço</h3>
                <p>Praça Getúlio Vargas, Centro</p>
                <p>Cabedelo - PB</p>
              </div>

              <div className="info-card">
                <FaClock className="info-icon" />
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 11h às 23h</p>
                <p>Sábado e Domingo: 11h às 23:30h</p>
                <p>Fechada: Terça</p>
              </div>

              <div className="info-card">
                <FaPhone className="info-icon" />
                <h3>Telefone</h3>
                <a href="tel:11999999999">(83) 99329-1827</a>
              </div>

              <div className="info-card">
                <FaWhatsapp className="info-icon" />
                <h3>WhatsApp</h3>
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FU374E6HHWC7WC1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYxpQIMmphCQJh7GlFVJUQpaPAoHeeEUKw4QY90OMH8pCAE09kNTL41-k0_aem_zZSHjqqzkO7siAEviizVGw&e=AT29-Rhi6UWmfhMpIVO1nmh0EHmUn0tBOzbfxSjbKDyZKv4E302xFNgRgNrP84FCmuXEmgtcYmB086-YVeM3nl4YAaoQIWDYyIsV5WHw0suuUFm4RqrWYYg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (83) 99329-1827
                </a>
              </div>
            </div>
          </div>

          <div className="localizacao-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.0309265163794!2d-34.83752129488199!3d-6.971074410112802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad206d8767280b%3A0x3f00184f84d32eee!2sPra%C3%A7a%20Get%C3%BAlio%20Vargas%2C%2060%20-%20a%20-%20Camala%C3%BA%2C%20Cabedelo%20-%20PB%2C%2058100-261!5e0!3m2!1spt-BR!2sbr!4v1732118851663!5m2!1spt-BR!2sbr"
              width="350"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Localizacao;
