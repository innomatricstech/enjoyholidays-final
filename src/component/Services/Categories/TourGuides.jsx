import React from 'react';
import tourGuidesImage from '../../../assets/guide.jpg'; // Replace with actual image path
import { FaChalkboardTeacher, FaMapSigns } from 'react-icons/fa';

const TourGuides = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src={tourGuidesImage}
          alt="Tourist Guide Services"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-600 flex items-center space-x-2">
          <FaMapSigns className="text-4xl" />
          <span>Tourist Guide Services</span>
        </h2>
        <p className="text-gray-600">
          Our tourist guide services are designed to enhance your travel experience. We provide knowledgeable and government-authorized guides who offer insightful commentary on historical sites, local culture, and traditions.
        </p>
        <p className="text-gray-600">
          Enjoy personalized tours that enrich your journey with detailed explanations and valuable recommendations. Our guides ensure respectful and enjoyable visits, making your experience both informative and memorable.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Government Authorized Guides</h3>
            <p className="text-gray-600 mt-2">
              Knowledgeable guides providing insightful commentary on historical sites, local culture, and traditions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaMapSigns className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Personalized Tours</h3>
            <p className="text-gray-600 mt-2">
              Guided tours that enrich your travel experience with detailed explanations and recommendations on dos and don'ts for respectful and enjoyable visits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuides;
