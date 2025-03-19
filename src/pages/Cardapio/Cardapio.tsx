import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Header from "../Home/components/Header/Header";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";
import img1 from "../../assets/IMG_2023 (2).jpg";
import img2 from "../../assets/IMG_2024 (1).jpg";
import img3 from "../../assets/IMG_2025 (1).jpg";
import img4 from "../../assets/IMG_2027 (1).jpeg";
import img5 from "../../assets/IMG_2026 (1).jpeg";
import "./Cardapio.css";

const Cardapio: React.FC = () => {
  const [imgCard, setImgCard] = useState(img1);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(img1);
  const images = [img1, img2, img3, img4, img5];

  const changeCardModalRight = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const nextIndex = (index + 1) % images.length;
    setModalImg(images[nextIndex]);
    setIndex(nextIndex);
  };

  const changeCardModalLeft = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const prevIndex = (index - 1 + images.length) % images.length;
    setModalImg(images[prevIndex]);
    setIndex(prevIndex);
  };

  const changeCardRight = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const nextIndex = (index + 1) % images.length;
    setImgCard(images[nextIndex]);
    setIndex(nextIndex);
  };

  const changeCardLeft = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const prevIndex = (index - 1 + images.length) % images.length;
    setImgCard(images[prevIndex]);
    setIndex(prevIndex);
  };

  const openModal = (img: string) => {
    setModalImg(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchStartX.current - touchEndX.current;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          changeCardModalRight(new Event("") as any);
        } else {
          changeCardModalLeft(new Event("") as any);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="cardapio-container">
      <Header />
      <main className="cardapio-main">
        <section className="cardapio-hero">
          <div className="cardapio-content">
            <h1 className="section-title">Nosso Cardápio</h1>
            <p className="cardapio-description">
              Prepare-se para explorar uma deliciosa seleção de sabores! Nossas
              pizzas artesanais são feitas com ingredientes frescos e
              cuidadosamente escolhidos, assadas no tradicional forno a lenha
              para garantir aquele sabor único e inconfundível.
            </p>
          </div>
        </section>

        <section className="cardapio-gallery">
          <div className="gallery-container">
            <button className="gallery-nav prev" onClick={changeCardLeft}>
              <FaChevronLeft />
            </button>
            <div className="gallery-image" onClick={() => openModal(imgCard)}>
              <img src={imgCard} alt="Pizza" />
            </div>
            <button className="gallery-nav next" onClick={changeCardRight}>
              <FaChevronRight />
            </button>
          </div>
        </section>

        <section className="cardapio-categories">
          <div className="category-grid">
            <div className="category-card">
              <h3>Pizzas Tradicionais</h3>
              <ul>
                <li>
                  Pequena <span>R$ 39,00</span>
                </li>
                <li>
                  Media <span>R$ 49,00</span>
                </li>
                <li>
                  Grande <span>R$ 67,00</span>
                </li>
              </ul>
            </div>
            <div className="category-card">
              <h3>Pizzas Especiais</h3>
              <ul>
                <li>
                  Pequena <span>R$ 48,00</span>
                </li>
                <li>
                  Media <span>R$ 60,00</span>
                </li>
                <li>
                  Grande <span>R$ 90,00</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img src={modalImg} alt="Pizza" className="modal-img" />
            <div className="modal-nav">
              <button
                className="modal-nav-btn prev"
                onClick={changeCardModalLeft}
              >
                <FaChevronLeft />
              </button>
              <button
                className="modal-nav-btn next"
                onClick={changeCardModalRight}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardapio;
