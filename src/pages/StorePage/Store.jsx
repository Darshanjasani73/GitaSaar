import React from 'react';
import pic from '../../data/Images/StoreImage.jpg';
import Product from './Products';

const Store = () => (
  <div className="mt-[7pc]">
    <div className="flex flex-col items-center">
      <div className="p mt-[-40px] dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden h-[450px] w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="object-cover h-full w-full flex justify-between items-center shadow-xl rounded-2xl bg-black p-0 relative">
          <img
            className="h-[100%] w-[100%] object-cover"
            src={pic}
            alt="jay shree krishna"
          />
          <div className="absolute top-1/4 left-0 right-50 transform -translate-y-1/2 p-4 flex flex-col items-center">
            <h1 className="text textShadow text-white text-lg font-bold mt-8 text-center text-[50px] shadow-md">GitaStore</h1>
          </div>
        </div>
      </div>
      <div className="p mt-4 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl overflow-hidden w-[83%] lg:w-100 p-0 m-1 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Product />
      </div>
    </div>
  </div>
);

export default Store;
