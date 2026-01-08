import React from "react";
import {
  FaBullseye,
  FaPlane,
  FaSuitcase,
  FaMoneyBillWave,
  FaHandsHelping,
  FaGlobeAmericas,
  FaMedal,
  FaUsers,
  FaStar,
  FaHeart,
} from "react-icons/fa";

import about1 from "../../../assets/about1.jpg";
import about2 from "../../../assets/about2.jpg";

const VisionMission = () => {
  return (
    <section className="w-full">
      {/* ================= OUR MISSION ================= */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
        
        {/* LEFT IMAGE */}
        <div className="lg:w-1/2 w-full">
          <img
            src={about1}
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:w-1/2 w-full bg-gray-950 flex items-center">
          <div className="px-6 lg:px-16 py-12 space-y-6 text-center lg:text-left">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-indigo-500 flex items-center justify-center lg:justify-start gap-3">
              <FaBullseye />
              Our Mission
            </h2>

            <div className="w-40 h-1 bg-indigo-400 mx-auto lg:mx-0"></div>

            <p className="text-gray-300 leading-relaxed">
              At Enjoy Holidays, based in Bangalore with a nationwide presence,
              we are dedicated to redefining travel experiences with seamless,
              end-to-end solutions for both business and leisure travellers.
              Our mission is to exceed client expectations with transparency,
              cost-efficiency, and personalized assistance available 24/7
              throughout every journey.
            </p>

            {/* ICON ROW */}
            <div className="flex justify-center lg:justify-start gap-8 pt-6 text-indigo-500 text-2xl">
              <FaPlane />
              <FaSuitcase />
              <FaMoneyBillWave />
              <FaHandsHelping />
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR VISION ================= */}
      <div className="flex flex-col lg:flex-row-reverse w-full min-h-[500px] bg-indigo-50">
        
        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 w-full">
          <img
            src={about2}
            alt="Our Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 w-full flex items-center">
          <div className="px-6 lg:px-16 py-12 space-y-6 text-center lg:text-left">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600 flex items-center justify-center lg:justify-start gap-3">
              <FaGlobeAmericas />
              Our Vision
            </h2>

            <div className="w-40 h-1 bg-indigo-400 mx-auto lg:mx-0"></div>

            <p className="text-gray-700 leading-relaxed">
              We aim for global recognition as a premier travel company,
              committed to a customer-centric approach that exceeds expectations
              and earns the trust of clients worldwide. Upholding the highest
              standards of quality, we curate exceptional experiences that leave
              a lasting impression.
            </p>

            {/* ICON ROW */}
            <div className="flex justify-center lg:justify-start gap-8 pt-6 text-indigo-600 text-2xl">
              <FaMedal />
              <FaUsers />
              <FaStar />
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
