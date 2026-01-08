import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../../assets/logo-removebg-preview.png";
import {
  faEnvelopeOpen,
  faFileAlt,
  faFileArchive,
  faMapMarkedAlt,
  faMapMarker,
  faMobile,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 py-8">
      {/* Newslatter and Columns */}
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="footer-columns p-10">
          <div className="flex flex-wrap">
            {/* Column */}
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
                  exceptional customer service. As pioneers in the travel
                  sector, we continuously evolve to meet the diverse needs of
                  our clients.
                </p>
                <div className="social-icons mt-4">
                  <ul className="flex space-x-3">
                    <li>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                  </ul>
                </div>
                <br />
                <div className="address-list mt-2">
                  <ul className="text-left">
                    <li className="flex items-center -my-4 ">
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        className="text-amber-400 
                   text-xl p-4"
                      />
                      <a
                        href="mailto:enjoyholidays.co.in"
                        className="text-white"
                      >
                        enjoyholidays.co.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 my-12 lg:my-0 md:my-0mb-12 ">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold mb-4 mx-14">
                  QUICK LINKS
                </h3>
                <ul className="text-left px-20">
                  <li className="relative">
                    <Link
                      to={"/"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to={"/about"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to={"/services"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to={"/gallery"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Gallery
                    </Link>
                  </li>

                  <li className="relative">
                    <Link
                      to={"/contact"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white address-list text-white">
                <h3 className="text-lg md:text-left  font-semibold mb-4">
                  CONTACT US
                </h3>
                <ul className="text-left">
                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    4, N S Iyengar St, 4th Block, Kumara Park West,
                    Seshadripuram, Bengaluru, Karnataka 560020
                  </li>
                  <hr className="border-gray-700 mb-4" />
                  <h5 className="text-md text-center md:text-left font-semibold mb-2">
                    PHONE NO
                  </h5>
                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    +91-63667 00432
                  </li>
                  {/* <hr className="border-gray-700 mb-4" />
                  <li className="flex items-start mb-4">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-amber-400 text-xl px-4 "
                    />{" "}
                    <a
                      href="brochure/Hillside-Academy-Brochure.pdf"
                      target="_blank"
                      className="text-white text-center"
                    >
                      Download Brochure
                    </a>
                  </li> */}
                  <hr className="border-gray-700 mb-4" />
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faFileArchive}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    <a href="mailto:enjoyholidays.co.in" className="text-white">
                      enjoyholidays.co.in
                    </a>
                    {/* <a
                      href="privacy-policy.html"
                      className="text-white text-center"
                    >
                      Privacy Policy
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
            {/* Column */}
          </div>
        </div>
        {/* Footer Columns */}
      </div>
      {/* Newslatter and Columns */}

      {/* Sub Footer */}
      <div className="sub-footer bg-gray-900 text-white text-center py-4">
        <a href="https://innomatricstech.com/">
          <p className="text-sm">Powered by INNOMATRICS TECH.</p>
        </a>
      </div>
      {/* Sub Footer */}
    </div>
  );
};

export default Footer;
