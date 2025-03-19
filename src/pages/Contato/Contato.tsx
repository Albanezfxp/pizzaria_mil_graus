import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Header from "../Home/components/Header/Header";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";
import "./Contato.css";

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log("Dados do formulário:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contato-container">
      <Header />
      <main className="contato-main">
        <section className="contato-hero">
          <div className="contato-content">
            <h1 className="section-title">Entre em Contato</h1>
            <p className="contato-description">
              Estamos aqui para atender você! Entre em contato conosco através
              dos canais abaixo.
            </p>
          </div>
        </section>

        <section className="contato-grid">
          <div className="contato-info">
            <h2>Informações de Contato</h2>
            <div className="info-cards">
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

              <div className="info-card">
                <FaPhone className="info-icon" />
                <h3>Telefone</h3>
                <a href="tel:11999999999">(83) 99329-1827</a>
              </div>

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
              </div>
            </div>

            <div className="social-links">
              <h3>Siga-nos nas Redes Sociais</h3>
              <div className="social-icons">
                <a
                  href="https://instagram.com/pizzaria1000graus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FU374E6HHWC7WC1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYxpQIMmphCQJh7GlFVJUQpaPAoHeeEUKw4QY90OMH8pCAE09kNTL41-k0_aem_zZSHjqqzkO7siAEviizVGw&e=AT29-Rhi6UWmfhMpIVO1nmh0EHmUn0tBOzbfxSjbKDyZKv4E302xFNgRgNrP84FCmuXEmgtcYmB086-YVeM3nl4YAaoQIWDYyIsV5WHw0suuUFm4RqrWYYg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <div className="contato-form">
            <h2>Deseja trabalhar conosco?</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                <FaEnvelope /> Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Contato;
