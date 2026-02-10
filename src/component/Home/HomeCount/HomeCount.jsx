import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// ✅ Custom hook
const useIntersection = (callback, options) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;   // ⭐ IMPORTANT FIX

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [callback, options]);

  return ref;
};

// ✅ Counter Component
const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000;

  const startAnimation = () => {
    if (hasAnimated) return;

    setHasAnimated(true);
    let startValue = initialValue;

    const interval = Math.max(
      10,
      Math.floor(duration / (targetValue - initialValue))
    );

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
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold text-amber-400">
        {count >= targetValue ? `${targetValue}+` : count}
      </span>

      <span className="text-lg md:text-xl text-zinc-200 mt-2">
        {text}
      </span>
    </div>
  );
};

// ✅ Main Component
function HomeCount() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="count w-[90%] mx-3 my-6 lg:mx-16 md:mx-16 lg:my-12 rounded-md bg-gray-950 px-12 py-16">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">

        <CountUpAnimation initialValue={0} targetValue={150} text="Tours Delivered" />

        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>

        <CountUpAnimation initialValue={0} targetValue={400} text="Satisfied Customers" />

        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>

        <CountUpAnimation initialValue={0} targetValue={7} text="Years of Experience" />

      </div>
    </div>
  );
}

export default HomeCount;
