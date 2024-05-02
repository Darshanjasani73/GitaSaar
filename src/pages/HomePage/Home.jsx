import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import annyang from 'annyang';
import Cards from './AdhyayCards';
import pic from '../../data/Images/HomeImage.jpg';

const Home = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (annyang) {
      annyang.addCommands({
        'chapter :chapterNumber verse :verse': (chapterNumber, verse) => {
          navigate(`/chapter/${chapterNumber}/verses/${verse}`);
        },
        'chapter :chapterNumber': (chapterNumber) => {
          navigate(`/chapter/${chapterNumber}/verses`);
        },
        home: () => {
          navigate('/home');
        },
        about: () => {
          navigate('/about');
        },
        quotes: () => {
          navigate('/quotes');
        },
        store: () => {
          navigate('/store');
        },
        yoga: () => {
          navigate('/yogasadhana');
        },
        ved: () => {
          navigate('/vedpuran');
        },
        videos: () => {
          navigate('/videos');
        },
      });
      annyang.start();
    }
  }, [navigate]);

  return (
    <div className="mt-[7pc]">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="p mt-[-40px] dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-2xl overflow-hidden h-[550px] w-[83%] lg:w-100 p-0 m-2 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="object-cover h-full w-[100%] flex justify-between items-center shadow-xl border-2  rounded-md bg-black rounded-lg  p-4">
            <img
              className="h-[100%] w-[100%] object-cover"
              src={pic}
              alt="jay shree krishn"
            />
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
