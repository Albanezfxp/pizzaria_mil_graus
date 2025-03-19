import "./FloatingButton.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
  const whatsappLink =
    "https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FU374E6HHWC7WC1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYxpQIMmphCQJh7GlFVJUQpaPAoHeeEUKw4QY90OMH8pCAE09kNTL41-k0_aem_zZSHjqqzkO7siAEviizVGw&e=AT29-Rhi6UWmfhMpIVO1nmh0EHmUn0tBOzbfxSjbKDyZKv4E302xFNgRgNrP84FCmuXEmgtcYmB086-YVeM3nl4YAaoQIWDYyIsV5WHw0suuUFm4RqrWYYg";

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
