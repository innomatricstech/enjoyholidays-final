import React from 'react';
import { FaCar, FaBus, FaTaxi } from 'react-icons/fa';
 // Replace with the correct path to your image

const TransportAndFleet = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/2 flex flex-col space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Transport and Fleet Services
          </h1>
          <p className="text-lg text-gray-600">
          We provide a diverse range of transportation solutions tailored to enhance your travel experience. From luxurious coaches to reliable cars and SUVs, our fleet is designed to cater to various needs, ensuring comfort, convenience, and safety throughout your journey. Whether you're planning a group trip or an individual excursion, our top-notch vehicles and professional drivers are here to make your travel seamless and enjoyable.:
          </p>
          <p className="text-lg text-gray-600">
          Our commitment extends beyond just providing vehicles; we prioritize delivering exceptional service. Each vehicle in our fleet is meticulously maintained to ensure optimal performance and safety. Our professional drivers are trained to offer courteous and reliable service, making sure every aspect of your transportation is handled with care. Experience the difference with our tailored transportation solutions, designed to make your journey as smooth and enjoyable as possible.
          </p>

        </div>
        <img 
          alt="Transport and Fleet" 
          className="w-full lg:w-1/2  object-cover" 
        />
      </div>

      {/* Services Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaBus className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Coaches</h3>
          <p className="text-gray-600 text-center">
            Spacious and comfortable coaches equipped with modern amenities for group travel.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaCar className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Cars and SUVs</h3>
          <p className="text-gray-600 text-center">
            Personalized transportation options ensuring comfort and convenience for individual and small group tours.
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaTaxi className="text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Drivers</h3>
          <p className="text-gray-600 text-center">
            Experienced and courteous drivers ensuring safe and reliable transportation throughout your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransportAndFleet;
