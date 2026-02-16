import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const NavTop = () => {
  return (
    <div className="bg-amber-400 py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">

        {/* LEFT SIDE */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center">
          <ul className="flex flex-col sm:flex-row items-center sm:space-x-4">

            {/* Email */}
            <li className="flex items-center text-zinc-950 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="px-2" />
              <a href="mailto:info@enjoyholidays.co.in">
                info@enjoyholidays.co.in
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-center mt-2 sm:mt-0 text-zinc-950 hover:text-white transition duration-300">
              <FontAwesomeIcon icon={faMobileAlt} className="px-2" />
              <a href="tel:+916366700432">+91-63667 00432</a>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE — SOCIAL */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-2 sm:mt-0">
          <ul className="flex items-center space-x-4">

            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/enjoyy_holidays"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-950 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/share/1AgJFuA9Jd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-950 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/916366700432"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-950 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default NavTop;
