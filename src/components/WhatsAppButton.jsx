import React from "react";
import "./WhatsAppButton.css";

const phoneNumber = "918084668414";
const message = "Hey, I would love to connect with you!";

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-cta" onClick={handleClick} title="Connect on WhatsApp">
      <div className="whatsapp-bounce">
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </div>
      <span className="whatsapp-msg">Connect with us!</span>
    </div>
  );
}