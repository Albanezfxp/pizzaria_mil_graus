import FloatingButton from "../Home/components/FloatingButton/FloatingButton";
import Header from "../Home/components/Header/Header";
import "./Localizacao.css";
export default function Localizacao() {
  return (
    <>
      <div className="Localizacao">
        <Header />
        <main>
          {" "}
          <div id="mainLocalizacaoContainer">
            <div id="textLocalizacaoContainer">
              <h1>Nossa Localização</h1>
              <p>
                A pizzaria está localizada no centro de Cabedelo, na Praça
                Getúlio Vargas, 60 - A. Fica em uma região de fácil acesso, em
                frente à praça, oferecendo um ambiente acolhedor e uma ótima
                opção para quem busca uma boa refeição na cidade. O endereço é
                próximo a pontos de referência importantes, garantindo
                praticidade e conveniência para os clientes.
              </p>
            </div>
            <div id="mapLocalizacaoContainer">
              <p id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.0309265163794!2d-34.83752129488199!3d-6.971074410112802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad206d8767280b%3A0x3f00184f84d32eee!2sPra%C3%A7a%20Get%C3%BAlio%20Vargas%2C%2060%20-%20a%20-%20Camala%C3%BA%2C%20Cabedelo%20-%20PB%2C%2058100-261!5e0!3m2!1spt-BR!2sbr!4v1732118851663!5m2!1spt-BR!2sbr"
                  width="350"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </p>
              <a href="https://www.google.com.br/maps/place/Pra%C3%A7a+Get%C3%BAlio+Vargas,+60+-+Camala%C3%BA,+Cabedelo+-+PB,+58100-261/@-6.9712062,-34.8382926,19z/data=!3m1!4b1!4m6!3m5!1s0x7ad206d8767280b:0xd6ac56ec975ea8e8!8m2!3d-6.9712075!4d-34.8371392!16s%2Fg%2F11j7vts5t3?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D">
                Praça Getúlio Vargas, 60 - Camalaú, Cabedelo
              </a>
            </div>
          </div>
        </main>
        <FloatingButton />
      </div>
    </>
  );
}
