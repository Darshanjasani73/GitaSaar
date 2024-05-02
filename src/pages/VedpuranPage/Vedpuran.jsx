import React, { useEffect } from 'react';
import pic from '../../data/Images/Sunset.jpg';
import TitleCards from './TitleCards';

const Vedpuran = () => {
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
            <div className="absolute items-center">
              <h1 className="textShadow text-white font-bold mt-8  text-center text-[35px] leading-[1.5em]">&ldquo;वेद-पुराणों की अद्भुत धारा हमें जीवन के विभिन्न पहलुओं को समझने और उन्हें समाधान करने की प्रेरणा देती है।&ldquo;</h1>
            </div>
          </div>
        </div>
        <TitleCards />
      </div>
    </div>
  );
};

export default Vedpuran;
