import "./FloatingButton.css";
import deliveryIcon from "../../../../assets/icons8-pizza-100.png";

export default function FloatingButton() {
  return (
    <>
      <a href="https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=558393291827&text=Ol%C3%A1%2C+boa+noite%21+Gostaria+de+fazer+um+pedido%21%F0%9F%98%86%F0%9F%A5%B0" target="_blank" className="floatingButton" id="floatingButton">
        <img src={deliveryIcon} alt="iconPizza" />
        Pedir agora
      </a>
      <a href="https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=558393291827&text=Ol%C3%A1%2C+boa+noite%21+Gostaria+de+fazer+um+pedido%21%F0%9F%98%86%F0%9F%A5%B0" target="_blank"className="floatingButton" id="floatingButtonIcon">
        <img src={deliveryIcon} alt="iconPizza" />
      </a>
    </>
  );
}
