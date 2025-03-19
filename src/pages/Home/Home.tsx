import React, { useState, useEffect } from "react";
import "./Home.css";
import bannerHome from "../../assets/ai-generated-delicious-pepperoni-pizza-with-melted-cheese-png__1_-removebg-preview.png";
import Header from "./components/Header/Header";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import img1 from "../../assets/IMG_2023 (2).jpg";
import img2 from "../../assets/IMG_2024 (1).jpg";
import img3 from "../../assets/IMG_2025 (1).jpg";
import img4 from "../../assets/IMG_2027 (1).jpeg";
import img5 from "../../assets/IMG_2026 (1).jpeg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      } else if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!isModalOpen) return;
      const touch = e.touches[0];
      const startX = touch.clientX;
      const startY = touch.clientY;

      const handleTouchMove = (e: TouchEvent) => {
        if (!isModalOpen) return;
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          e.preventDefault();
          if (deltaX > 100) {
            setCurrentImageIndex(
              (prev) => (prev - 1 + images.length) % images.length
            );
          } else if (deltaX < -100) {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
          }
        }
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isModalOpen, images.length]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      <Header />
      <main className="home-main">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Bem-vindo à <span className="highlight">1000</span>
              <span className="highlight-orange">Graus</span>
            </h1>
            <p className="hero-description">
              Descubra o sabor inconfundível de nossas pizzas artesanais, feitas
              com ingredientes frescos e assadas em forno a lenha, garantindo
              uma crocância e aroma únicos.
            </p>
            <button className="cta-button" onClick={openModal}>
              Ver Cardápio
            </button>
          </div>
          <div className="hero-image">
            <img
              src={bannerHome}
              alt="Pizza Deliciosa"
              className="pizza-image"
            />
          </div>
        </div>

        <section className="features-section">
          <div className="feature-card">
            <i className="fas fa-pizza-slice"></i>
            <h3>Pizzas Artesanais</h3>
            <p>Feitas com massa fresca e ingredientes selecionados</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-fire"></i>
            <h3>Forno a Lenha</h3>
            <p>Assadas no forno tradicional para sabor autêntico</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>Entrega Rápida</h3>
            <p>Entregamos em toda região com qualidade</p>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Cardápio"
              className="modal-img"
            />
            <div className="modal-nav">
              <button className="modal-nav-btn prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              <button className="modal-nav-btn next" onClick={nextImage}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}

      <FloatingButton />
      <Footer />
    </div>
  );
}
