import "./FloatingButton.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
  const whatsappLink =
    "https://api.whatsapp.com/message/U374E6HHWC7WC1?autoload=1&app_absent=0";

  return (
    <div className="floating-buttons">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button desktop"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span>Pedir Agora</span>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button mobile"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
}
