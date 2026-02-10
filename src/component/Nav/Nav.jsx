import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop/NavTop";
import logo from "../../assets/logo-removebg-preview.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavTop />

      <nav className="bg-gray-950 lg:bg-gray-50 p-4">
        <div className="container mx-auto md:h-[80px] lg:h-[80px] flex justify-between items-center">

          {/* ✅ Logo */}
          <div className="font-bold">
            <img
              src={logo}
              alt="Company Logo"
              className="w-[150px] h-[120px]"
            />
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-24">

            {[
              { to: "/", label: "HOME" },
              { to: "/about", label: "ABOUT" },
              { to: "/services", label: "SERVICES" },
              { to: "/gallery", label: "GALLERY" },
              { to: "/contact", label: "CONTACT US" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-zinc-950 font-medium relative hover:text-amber-400 group"
              >
                {item.label}
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}

          </div>

          {/* ✅ Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg mt-2">
            <Link to="/" className="block text-white hover:text-gray-300 p-3">
              Home
            </Link>
            <Link to="/about" className="block text-white hover:text-gray-300 p-3">
              About
            </Link>
            <Link to="/services" className="block text-white hover:text-gray-300 p-3">
              Services
            </Link>
            <Link to="/gallery" className="block text-white hover:text-gray-300 p-3">
              Gallery
            </Link>
            <Link to="/contact" className="block text-white hover:text-gray-300 p-3">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
