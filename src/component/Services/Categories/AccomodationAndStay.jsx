import React from 'react';
import accommodationImage from '../../../assets/accomodation.jpg'; // Replace with actual image path
import { FaHotel, FaBed } from 'react-icons/fa';

const AccommodationAndStay = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src={accommodationImage}
          alt="Accommodation and Stay"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-600 flex items-center space-x-2">
          <FaHotel className="text-4xl" />
          <span>Accommodation and Stay</span>
        </h2>
        <p className="text-gray-600">
          We offer a diverse range of accommodations designed to fit every traveler’s needs. Our exclusive partnerships with top-rated hotels, resorts, and lodges provide you with a variety of options, ensuring a stay that matches your preferences and budget.
        </p>
        <p className="text-gray-600">
          Our customized accommodation solutions guarantee both comfort and luxury. Whether you're seeking a luxurious retreat or a cozy stay, we have tailored options to make your visit as enjoyable as possible.
        </p>

        {/* Accommodation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaHotel className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Partnered Hotels and Resorts</h3>
            <p className="text-gray-600 mt-2">
              Exclusive partnerships with top-rated hotels, resorts, and lodges offering diverse accommodations to suit every traveler’s preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaBed className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Customized Stays</h3>
            <p className="text-gray-600 mt-2">
              Tailored accommodation solutions ensuring comfort and luxury based on your specific needs and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationAndStay;
