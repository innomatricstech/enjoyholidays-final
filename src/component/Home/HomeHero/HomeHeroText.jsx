import React from 'react';
import { Link } from "react-router-dom";

const HomeHeroText = () => {
  return (
    <div className="container absolute -my-[50%] lg:-my-[0%] md:-my-[0%] md:labsolute md:top-0 lg:absolute lg:right-96 lg:top-[300px]">
      <div className="text-left px-4 md:mx-[30%]">
        <p className="text-sm md:text-base my-2 text-white lg:text-lg">
          Connecting the Nation
        </p>
        <h1 className="text-4xl text-white font-semibold mb-2 md:text-5xl lg:text-6xl">
          ENJOY <span className="animate-colorChange">HOLIDAYS</span>
        </h1>
        <p className="text-sm md:text-base my-4 text-white lg:text-lg">
          Redefining <span className="text-amber-400">Travel Experiences </span>
        </p>
        <Link to={"/contact"}>
          <button
            className="w-44 h-12 max-w-xs px-4 py-2  bg-gray-50  text-zinc-950 
        hover:text-white font-bold 
         shadow-md hover:bg-amber-400 focus:outline-none 
         focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeroText;
