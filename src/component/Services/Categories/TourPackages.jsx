import React from 'react';
import tourPackagesImage from '../../../assets/tourPackages.webp'; // Replace with actual image path
import { FaChurch, FaSuitcase, FaSchool, FaBusinessTime, FaHiking, FaHeart, FaBook } from 'react-icons/fa';

const TourPackages = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-3 p-6 lg:p-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mx-12 lg:mb-0">
        <img
          src={tourPackagesImage}
          alt="Comprehensive Tour Packages"
          className="w-[350px] h-[350px]  rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-6 my-16">
        <h2 className="text-3xl font-bold text-indigo-600 flex items-center justify-center space-x-2">
          <FaSuitcase className="text-4xl" />
          <span>Comprehensive Tour Packages</span>
        </h2>
        <p className="text-gray-600">
          We offer a range of comprehensive tour packages designed to meet diverse interests and needs. From sacred pilgrimages to romantic getaways, our packages cover a broad spectrum of experiences ensuring unforgettable journeys for every traveler.
        </p>
        <p className="text-gray-600">
          Explore our curated tours that include spiritual pilgrimages, vacation getaways, educational trips, and more. Each package is crafted to provide exceptional experiences, whether you are seeking spiritual fulfillment, holiday enjoyment, or professional engagement.
        </p>

        {/* Service Cards */}
        
      </div>
    
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-9">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaChurch className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Pilgrimage Yatra</h3>
            <p className="text-gray-600 mt-2">
              Sacred journeys to revered destinations, engaging in prayers, rituals, and seeking blessings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaHeart className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Holiday Vacation Tours</h3>
            <p className="text-gray-600 mt-2">
              Tailored tours covering North and South India, offering diverse and enriching vacation experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaSchool className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Institution Tours</h3>
            <p className="text-gray-600 mt-2">
              Customized tours for educational institutions, IT sectors, and government agencies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaBusinessTime className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Business Convention Tours</h3>
            <p className="text-gray-600 mt-2">
              Professional tours for meetings, conferences, and team-building activities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaHiking className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Honeymoon Tours</h3>
            <p className="text-gray-600 mt-2">
              Romantic getaways curated for newlyweds seeking unforgettable experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-indigo-50 hover:-translate-y-2 transform">
            <FaBook className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Education & Research Tours</h3>
            <p className="text-gray-600 mt-2">
              Specialized tours focused on learning and exploration for students and researchers.
            </p>
          </div>
        </div>
        </>
  );
};

export default TourPackages;
