import React, { useEffect } from 'react';
import pic from '../../data/Images/Meditation.jpg';
import TitleCards from './TitleCards';

const Yogasadhana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[7pc]">
      <div className="flex flex-col items-center">
        <div className="p mt-[-40px] dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden h-[450px] w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="object-cover h-full w-full flex justify-between items-center shadow-xl rounded-2xl bg-black p-0 relative">
            <img
              className="h-[100%] w-[100%] object-cover"
              src={pic}
              alt="jay shree krishna"
            />
            <div className="absolute top-1/3 w-full  items-center">
              <h1 className="textShadow text-white text-lg font-bold text-center text-[35px]">
                ध्यान की दिशा, आत्मा का सफर
              </h1>
            </div>
          </div>
        </div>
        <TitleCards />
      </div>
    </div>
  );
};
export default Yogasadhana;
