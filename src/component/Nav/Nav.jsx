import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop/NavTop";
import logo from "../../assets/logo-removebg-preview.png";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavTop />
      <nav className="bg-gray-950 lg:bg-gray-50 p-4 ">
        <div className="container mx-auto md:h-[80px] lg:h-[80px] flex justify-between items-center">
          <div className="font-bold">
            <img src={logo} className="w-[150px] h-[120px]" />
          </div>
          <div className="hidden md:flex space-x-24">
            <Link
              to="/"
              className="text-zinc-950 font-medium relative hover:text-amber-400 group"
            >
              HOME
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/about"
              className="text-zinc-950 font-medium relative hover:text-amber-400 group"
            >
              ABOUT
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {/* <Link 
    to="/apiTest" 
    className="text-zinc-950 font-medium relative hover:text-amber-400 group"
  >
    APITEST
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link> */}
            <Link
              to="/services"
              className="text-zinc-950 font-medium relative hover:text-amber-400 group"
            >
              SERVICES
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/gallery"
              className="text-zinc-950 font-medium relative hover:text-amber-400 group"
            >
              GALLERY
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/contact"
              className="text-zinc-950 font-medium relative hover:text-amber-400 group"
            >
              CONTACT US
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>

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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link to="/" className="block text-white hover:text-gray-300 p-2">
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-gray-300 p-2"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-gray-300 p-2"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="block text-white hover:text-gray-300 p-2"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-300 p-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
