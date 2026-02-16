import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FloatingSocialMedia = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 flex flex-col space-y-3 z-50">

      {/* Call */}
      <a
        href="tel:+919845956633"
        aria-label="Call us"
        className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <span className="text-xl">📞</span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1AgJFuA9Jd/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook"
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/enjoyy_holidays?utm_source=qr&igsh=MWRxcTU0NGl1OXZvdg=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram"
        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-lg hover:opacity-90 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919845956633"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={20} />
      </a>

    </div>
  );
};

export default FloatingSocialMedia;
