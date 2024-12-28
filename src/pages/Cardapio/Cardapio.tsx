import "./Cadapio.css";
import Header from "../Home/components/Header/Header";
import img1 from "../../assets/IMG_2023 (2).jpg";
import img2 from "../../assets/IMG_2024 (1).jpg";
import img3 from "../../assets/IMG_2025 (1).jpg";
import img4 from "../../assets/IMG_2027 (1).jpeg";
import img5 from "../../assets/IMG_2026 (1).jpeg";
import { useState } from "react";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";

export default function Cardapio() {
  const [imgCard, setImgCard] = useState(img1);
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  function changeCardRight(ev: React.MouseEvent) {
    ev.preventDefault();

    setTimeout(() => {
      const nextIndex = (index + 1) % images.length;
      setImgCard(images[nextIndex]);
      setIndex(nextIndex);
    }, 300);
  }

  function changeCardLeft(ev: React.MouseEvent) {
    ev.preventDefault();

    setTimeout(() => {
      const prevIndex = (index - 1 + images.length) % images.length;
      setImgCard(images[prevIndex]);
      setIndex(prevIndex);
    }, 300);
  }
  return (
    <div className="Cardapio">
      <Header />
      <main>
        <div id="mainCardapioContainer">
          <div id="textCardapioContainer">
            <h1>Nosso Cardápio</h1>
            <p>
              Prepare-se para explorar uma deliciosa seleção de sabores! Nossas
              pizzas artesanais são feitas com ingredientes frescos e
              cuidadosamente escolhidos, assadas no tradicional forno a lenha
              para garantir aquele sabor único e inconfundível. Oferecemos desde
              os clássicos como Mussarela, Calabresa e Portuguesa, até
              combinações especiais e exclusivas que vão surpreender o seu
              paladar. E para os apaixonados por doces, temos opções
              irresistíveis de pizzas doces que são verdadeiras sobremesas!
            </p>
          </div>
          <div id="imgCardapioContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              fill="#fafafa"
              onClick={changeCardLeft}
              style={{ cursor: "pointer" }}
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <path d="M28.373,13.546c-0.803-0.758-2.068-0.722-2.827,0.081c-0.758,0.803-0.722,2.069,0.081,2.827L42.087,32l-16.46,15.546 c-0.803,0.758-0.839,2.024-0.081,2.827C25.939,50.79,26.469,51,27,51c0.493,0,0.986-0.181,1.373-0.546l18-17 C46.773,33.076,47,32.55,47,32s-0.227-1.076-0.627-1.454L28.373,13.546z" />
              <path d="M32,0C23.453,0,15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.33,16.583,9.374,22.626 C15.417,60.671,23.453,64,32,64s16.583-3.329,22.626-9.373C60.671,48.583,64,40.547,64,32s-3.33-16.583-9.374-22.626 C48.583,3.329,40.547,0,32,0z M51.797,51.798C46.509,57.087,39.479,60,32,60s-14.509-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32 s2.913-14.51,8.203-19.798C17.491,6.913,24.521,4,32,4s14.509,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32 S57.087,46.51,51.797,51.798z" />
            </svg>
            <div id="imgContainerCard">
              <img src={imgCard} id="imgCardapioItem" alt="Cardápio" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              fill="#fafafa"
              onClick={changeCardRight}
              style={{ cursor: "pointer" }}
            >
              <path d="M28.373,13.546c-0.803-0.758-2.068-0.722-2.827,0.081c-0.758,0.803-0.722,2.069,0.081,2.827L42.087,32l-16.46,15.546 c-0.803,0.758-0.839,2.024-0.081,2.827C25.939,50.79,26.469,51,27,51c0.493,0,0.986-0.181,1.373-0.546l18-17 C46.773,33.076,47,32.55,47,32s-0.227-1.076-0.627-1.454L28.373,13.546z" />
              <path d="M32,0C23.453,0,15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.33,16.583,9.374,22.626 C15.417,60.671,23.453,64,32,64s16.583-3.329,22.626-9.9C60.671,48.583,64,40.547,64,32s-3.33-16.583-9.374-22.626 C48.583,3.329,40.547,0,32,0z M51.797,51.798C46.509,57.087,39.479,60,32,60s-14.509-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32 s2.913-14.51,8.203-19.798C17.491,6.913,24.521,4,32,4s14.509,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32 S57.087,46.51,51.797,51.798z" />
            </svg>
          </div>
        </div>
      </main>
      <FloatingButton />
    </div>
  );
}
