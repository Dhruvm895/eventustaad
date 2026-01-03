import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919833310150";
  const message =
    "Hi! I would like to know more about your event planning services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-[#25D366] hover:bg-[#1EBE5D]
        shadow-xl hover:shadow-green-500/40
        transition-all duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp size={30} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
