import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const HomeAbout = () => {
  return (
    <div className="container mx-auto py-12 "  data-aos="fade-up">
      <div className="flex flex-col md:flex-row gap-x-4 items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            alt="About"
            className="w-full h-auto rounded-lg"
            style={{ width: "580px", height: "370px" }}
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-justify md:text-left">
        <div className="flex items-center mb-4">
  <div className="w-1 h-10 bg-amber-400 mr-4"></div>
  <h2 className="text-3xl font-semibold">About Us</h2>
</div>
          <p className="text-gray-700 ">
            Established in 1992, Enjoy Holidays boasts over four decades of
            expertise in delivering unparalleled travel experiences and
            exceptional customer service. As pioneers in the travel sector, we
            continuously evolve to meet the diverse needs of our clients. Our
            dedicated team of professionals is committed to curating
            personalized travel itineraries that cater to the unique preferences
            of each traveler. 
            <p  className="text-gray-700 py-2 my-4">
            Whether you seek a tranquil beach getaway, an
            adventurous mountain trek, or a cultural immersion in vibrant
            cities, we ensure every journey is memorable. With a strong network
            of global partners and a deep understanding of the industry, Enjoy
            Holidays guarantees seamless travel arrangements, competitive
            pricing, and exclusive deals. Trust us to turn your travel dreams
            into reality, and join the countless satisfied customers who have
            experienced the world with us.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
