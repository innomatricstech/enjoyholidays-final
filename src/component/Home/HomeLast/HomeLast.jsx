import React from 'react';

const HomeLast = () => {
  const states = [
    'Andaman', 'Andhra Pradesh', 'Delhi', 'Goa', 'Gujarat',
    'Himachal Pradesh', 'Jammu And Kashmir', 'Karnataka', 'Kerala', 'Ladakh',
    'Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Tamil Nadu', 'Telangana',
    'Uttarakhand', 'Uttar Pradesh', 'West Bengal & North East India'
  ];

  return (
    <div className="bg-amber-400 w-[300px] md:w-[700px] text-gray-500
     p-4 
     rounded-lg absolute left-[10%] md:left-[23%]
    -my-[30%] md:-my-[5%]">
      <div className="flex flex-wrap justify-center">
        {states.map((state, index) => (
          <React.Fragment key={index}>
            <span className="mx-2">{state}</span>
            {index < states.length - 1 && <span className="mx-2">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeLast;
