import React from 'react';
import transportFleet from '../../../assets/service1-removebg-preview.png';
import accomodation from '../../../assets/service2-removebg-preview.png';
import tourGuide from '../../../assets/service3-removebg-preview.png';
import tourPack from '../../../assets/service4-removebg-preview.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomeServices.css'; // Import your custom CSS file

AOS.init();

const HomeServices = () => {
  const features = [
    {
      imgSrc: transportFleet,
      title: 'Transport and Fleet Services',
    },
    {
      imgSrc: accomodation,
      title: 'Accommodation and Stay',
    },
    {
      imgSrc: tourGuide,
      title: 'Tourist Guide Services',
    },
    {
      imgSrc: tourPack,
      title: 'Comprehensive Tour Packages',
    },
  ];

  return (
    <section id="fact" className="py-12 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-zinc-900">A Wide Array of Travel Services <b className='text-amber-400 font-semibold'>Tailored for Your Ideal Vacation</b></h2>
          <span className="block w-32 h-1 bg-amber-400 mx-auto my-4"></span>
        </div>
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <div 
                className={`bg-white h-[200px] p-6 rounded-lg shadow-lg text-center hover:scale-105 transition ease-in-out duration-300 ${index % 2 === 0 ? 'card-hover-1' : 'card-hover-2'}`}
              >
                <img src={feature.imgSrc} alt={feature.title} className="mx-auto mb-4 w-[100px] h-[90px]" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
