import React, { useEffect, useRef, useState } from 'react';
// import './HomeCount.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();
const useIntersection = (callback, options) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000; // 4 seconds

  const startAnimation = () => {
    if (hasAnimated) return; // Do not animate again if already animated
    setHasAnimated(true); // Mark as animated
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));
    
    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);
  };

  const ref = useIntersection(() => {
    startAnimation();
  });

  return (
    <div ref={ref} className="flex flex-col items-center ">
      <span className="text-4xl md:text-6xl font-bold text-amber-400">{count >= targetValue ? `${targetValue}+` : count}</span>
      <span className="text-lg md:text-xl text-zinc-200 mt-2">{text}</span>
    </div>
  );
};

function HomeCount() {
  return (
    // data-aos="fade-up"
    <div className="count  w-[90%] mx-3 my-6 lg:mx-16 md:mx-16 lg:my-12 rounded-md bg-gray-950 px-12  py-16 " >
      
      <div className="flex flex-col  md:flex-row justify-around items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={150}  text="Tours Delivered" />
        </div>
        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={400} text="Satisfied Customers" />
        </div>
        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={7} text="Years of Expereince" />
        </div>
      </div>
    </div>
  );
}

export default HomeCount;
