import "./Footer.css";
import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Pizzaria Mil Graus</h2>
          <p className="tagline">🍕 Pede Pizza! Pede 1000graus!</p>
          <p className="description">
            A melhor pizzaria da cidade, com pizzas artesanais e ingredientes
            frescos selecionados.
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contato</h2>
          <div className="contact-info">
            <a
              href="https://instagram.com/pizzaria1000graus"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <FaInstagram className="icon" />
              <span>@pizzaria1000graus</span>
            </a>
            <a href="tel:83993291827" className="contact-item">
              <FaPhone className="icon" />
              <span>(83) 99329-1827</span>
            </a>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>
                58100-261, Praça Getúlio Vargas, 60 - A - Camalaú, Cabedelo -
                PB, 58100-261
              </span>
            </div>
          </div>
        </div>

        <div className="footer-section hours">
          <h2>Horário de Funcionamento</h2>
          <div className="hours-info">
            <p>Segunda a Sexta: 18h às 23h</p>
            <p>Sábado e Domingo: 18h às 23:30h</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Pizzaria Mil Graus | Todos os
          direitos reservados
        </p>
      </div>
    </footer>
  );
}
