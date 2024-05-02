import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slokas = ({ description, key, chapterNumber, verseNumber }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/chapter/${chapterNumber}/verses/${verseNumber}`);
  };
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return (<p className="verse font-sans font-light text-[1.1em] flex-none w-[calc(33.33% - 20px)] shadow-md transition duration-300 ease-in-out cursor-pointer block p-4 bg-[#f4f4f4] mx-auto my-6 border border-[#ffffff] " onClick={handleClick} key={key}>{description}</p>);
};
export default Slokas;
