import React, { useState } from 'react';
import pic from '../../data/Images/QuoteFimage.jpg';
import { quotesData } from '../../data/Data';

const Quotes = () => {
  const [quote, setQuote] = useState('हरे राम हरे राम, राम राम हरे हरे, हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे');

  const fetchRandomQuote = () => {
    const keys = Object.keys(quotesData);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomQuote = quotesData[randomKey];
    setQuote(randomQuote);
  };

  return (
    <div className="mt-[7pc]">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="p mt-[-40px] bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-5xl border-7 border-black-800 rounded-md overflow-hidden h-[530px] w-[83%] lg:w-100 p-0 m-2 bg-hero-pattern bg-no-repeat bg-cover bg-center relative">
          <div className="object-cover h-full w-[100%] flex justify-between items-center shadow-xl border-2  rounded-md bg-black rounded-lg  p-2.5">
            <img
              className="h-[100%] w-[100%] object-cover"
              src={pic}
              alt="jay shree krishn"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center p-2">
              <div className="bg-black bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg p-4 flex flex-col items-center">
                <h1 className="text-white text-lg font-bold mb-4 text-center text-[25px]">{quote}</h1>
                <button onClick={fetchRandomQuote} type="button" className="text-white px-4 py-2 rounded-[8px] transition duration-300 ease-in-out bg-transparent hover:bg-white hover:text-black self-stretch">Get Inspired</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
