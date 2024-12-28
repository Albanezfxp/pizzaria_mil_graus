import "./Home.css";
import bannerHome from "../../assets/ai-generated-delicious-pepperoni-pizza-with-melted-cheese-png__1_-removebg-preview.png";
import Header from "./components/Header/Header";
import FloatingButton from "./components/FloatingButton/FloatingButton";
export default function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <main>
          <div id="homeMainContainer">
            <div id="bannerHome">
              <img src={bannerHome} alt="Pizza" />
            </div>
            <section>
              <div id="sectionContainer">
                <h1>
                  Bem-vindo à <span id="mil">1000</span>
                  <span id="graus">Graus</span>!
                </h1>
                <p>
                  Descubra o sabor inconfundível de nossas pizzas artesanais,
                  feitas com ingredientes frescos e assadas em forno a lenha,
                  garantindo uma crocância e aroma únicos. Venha nos visitar e
                  aproveite uma experiência gastronômica que une tradição e
                  qualidade em cada fatia.
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
