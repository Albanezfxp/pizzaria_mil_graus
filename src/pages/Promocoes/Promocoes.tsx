import Header from "../Home/components/Header/Header";
import "./Promocoes.css";
import imgPizza from "../../assets/pizza.png";
import { useState } from "react";
import FloatingButton from "../Home/components/FloatingButton/FloatingButton";

export default function Promocoes() {
  const [backgroundColor, setBackgroundColor] = useState("#ffcb6b");
  const [displaySecondPromo, setDisplaySecondPromo] = useState("none");
  const [displayFirstPromo, setDisplayFirstPromo] = useState("flex");
  const [animationState, setAnimationState] = useState("");

  function chageRightPromo(ev: any) {
    ev.preventDefault();
    setAnimationState("mainPromocoesContainer-enter");
    setTimeout(() => {
      setBackgroundColor("#fd3e3e");
      setDisplaySecondPromo("flex");
      setDisplayFirstPromo("none");
      setAnimationState("mainPromocoesContainer-active");
    }, 500);
  }

  function chageLeftPromo(ev: any) {
    ev.preventDefault();
    setAnimationState("mainPromocoesContainer-exit");

    setTimeout(() => {
      setDisplaySecondPromo("none");
      setDisplayFirstPromo("flex");
      setBackgroundColor("#ffcb6b");
      setAnimationState("mainPromocoesContainer-active");
    }, 500);
  }

  return (
    <>
      <div className="Promocoes" style={{ backgroundColor: backgroundColor }}>
        <Header />
        <main>
          <div
            id="onePromo"
            className={`mainPromocoesContainer ${animationState}`}
            style={{ display: displayFirstPromo }}
          >
            <div id="textPromocoesContainer">
              <h1>Promoção Casadinha</h1>
              <p>
                Na compra de 2 pizzas grandes, você ganha 1 pizza pequena doce
                como cortesia! Aproveite essa oportunidade deliciosa e peça
                agora mesmo pelo nosso delivery.
              </p>
            </div>
            <div id="imgPromocoesContainer">
              <img src={imgPizza} alt="ImagemPizza" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              fill="#fafafa"
              onClick={chageRightPromo}
              style={{ cursor: "pointer" }}
            >
              <path d="M28.373,13.546c-0.803-0.758-2.068-0.722-2.827,0.081c-0.758,0.803-0.722,2.069,0.081,2.827L42.087,32l-16.46,15.546 c-0.803,0.758-0.839,2.024-0.081,2.827C25.939,50.79,26.469,51,27,51c0.493,0,0.986-0.181,1.373-0.546l18-17 C46.773,33.076,47,32.55,47,32s-0.227-1.076-0.627-1.454L28.373,13.546z" />
              <path d="M32,0C23.453,0,15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.33,16.583,9.374,22.626 C15.417,60.671,23.453,64,32,64s16.583-3.329,22.626-9.9C60.671,48.583,64,40.547,64,32s-3.33-16.583-9.374-22.626 C48.583,3.329,40.547,0,32,0z M51.797,51.798C46.509,57.087,39.479,60,32,60s-14.509-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32 s2.913-14.51,8.203-19.798C17.491,6.913,24.521,4,32,4s14.509,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32 S57.087,46.51,51.797,51.798z" />
            </svg>
          </div>
          <div
            id="secondPromo"
            className={`mainPromocoesContainer ${animationState}`}
            style={{ display: displaySecondPromo }}
          >
            <div id="textPromocoesContainer">
              <h1>Promoção Pizza G + Pizza P</h1>
              <p>
                1 Pizza Grande + 1 Pizza Pequena por apenas R$ 79,99! <br />{" "}
                Sabor e economia em um só combo! Não deixe passar essa chance de
                aproveitar com quem você ama.
                <br />
                !Não é valido para sabores especias!
              </p>
            </div>
            <div id="imgPromocoesContainer">
              <img src={imgPizza} alt="ImagemPizza" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              fill="#fafafa"
              onClick={chageLeftPromo}
              style={{ cursor: "pointer" }}
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <path d="M28.373,13.546c-0.803-0.758-2.068-0.722-2.827,0.081c-0.758,0.803-0.722,2.069,0.081,2.827L42.087,32l-16.46,15.546 c-0.803,0.758-0.839,2.024-0.081,2.827C25.939,50.79,26.469,51,27,51c0.493,0,0.986-0.181,1.373-0.546l18-17 C46.773,33.076,47,32.55,47,32s-0.227-1.076-0.627-1.454L28.373,13.546z" />
              <path d="M32,0C23.453,0,15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.33,16.583,9.374,22.626 C15.417,60.671,23.453,64,32,64s16.583-3.329,22.626-9.9C60.671,48.583,64,40.547,64,32s-3.33-16.583-9.374-22.626 C48.583,3.329,40.547,0,32,0z M51.797,51.798C46.509,57.087,39.479,60,32,60s-14.509-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32 s2.913-14.51,8.203-19.798C17.491,6.913,24.521,4,32,4s14.509,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32 S57.087,46.51,51.797,51.798z" />
            </svg>
          </div>
        </main>
        <FloatingButton />
      </div>
    </>
  );
}
