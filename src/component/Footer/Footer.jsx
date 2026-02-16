import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import footerLogo from "../../assets/logo-removebg-preview.png";

import {
  faFileArchive,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 py-8">
      <div className="container mx-auto px-4">

        {/* Columns */}
        <div className="footer-columns p-10">
          <div className="flex flex-wrap">

            {/* LEFT COLUMN */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-left">
              <div className="-my-12 text-white">

                <img
                  src={footerLogo}
                  alt="Footer Logo"
                  className="w-[150px] h-[140px]"
                />

                <p>
                  Established in 1992, Enjoy Holidays boasts over four decades
                  of expertise in delivering unparalleled travel experiences and
                  exceptional customer service.
                </p>

                {/* SOCIAL ICONS */}
                <div className="social-icons mt-4">
                  <ul className="flex space-x-4">

                    {/* Facebook */}
                    <li>
                      <a
                        href="https://www.facebook.com/share/1AgJFuA9Jd/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="text-white text-3xl hover:text-amber-400 transition duration-300"
                        />
                      </a>
                    </li>

                    {/* Instagram */}
                    <li>
                      <a
                        href="https://www.instagram.com/enjoyy_holidays?utm_source=qr&igsh=MWRxcTU0NGl1OXZvdg=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-white text-3xl hover:text-amber-400 transition duration-300"
                        />
                      </a>
                    </li>

                    {/* WhatsApp */}
                    <li>
                      <a
                        href="https://wa.me/916366700432"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          className="text-white text-3xl hover:text-amber-400 transition duration-300"
                        />
                      </a>
                    </li>

                  </ul>
                </div>

              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="w-full sm:w-1/3 my-12 lg:my-0 md:my-0 mb-12">
              <div className="footer-c-widget text-white">
                <h3 className="text-lg font-semibold mb-4 mx-14">
                  QUICK LINKS
                </h3>

                <ul className="text-left px-20">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About Us" },
                    { to: "/services", label: "Services" },
                    { to: "/gallery", label: "Gallery" },
                    { to: "/contact", label: "Contact Us" },
                  ].map((item, i) => (
                    <li key={i} className="relative">
                      <Link
                        to={item.to}
                        className="block mb-2 hover:text-amber-400 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="text-white">
                <h3 className="text-lg md:text-left font-semibold mb-4">
                  CONTACT US
                </h3>

                <ul className="text-left">

                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-amber-400 text-xl px-4"
                    />
                    4, N S Iyengar St, 4th Block, Kumara Park West,
                    Seshadripuram, Bengaluru, Karnataka 560020
                  </li>

                  <hr className="border-gray-700 mb-4" />

                  <h5 className="text-md font-semibold mb-2">
                    PHONE NO
                  </h5>

                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      className="text-amber-400 text-xl px-4"
                    />
                    +91-63667 00432
                  </li>

                  <hr className="border-gray-700 mb-4" />

                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faFileArchive}
                      className="text-amber-400 text-xl px-4"
                    />

                    <a
                      href="mailto:info@enjoyholidays.co.in"
                      className="text-white"
                    >
                      info@enjoyholidays.co.in
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SUB FOOTER */}
      <div className="sub-footer bg-gray-900 text-white text-center py-4">
        <a href="https://innomatricstech.com/" target="_blank" rel="noreferrer">
          <p className="text-sm">Powered by INNOMATRICS TECH.</p>
        </a>
      </div>

    </div>
  );
};

export default Footer;
