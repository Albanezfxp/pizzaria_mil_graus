import "./FloatingButton.css";
import deliveryIcon from "../../../../assets/icons8-pizza-100.png";

export default function FloatingButton() {
  return (
    <>
      <a href="/" className="floatingButton">
        <img src={deliveryIcon} alt="iconPizza" />
        Pedir agora
      </a>
    </>
  );
}
