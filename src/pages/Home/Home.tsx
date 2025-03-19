import "./Home.css";
import bannerHome from "../../assets/ai-generated-delicious-pepperoni-pizza-with-melted-cheese-png__1_-removebg-preview.png";
import Header from "./components/Header/Header";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";

export default function Home() {
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
            <button className="cta-button">Ver Cardápio</button>
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
      <FloatingButton />
      <Footer />
    </div>
  );
}
