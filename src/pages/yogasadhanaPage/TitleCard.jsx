import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitleCard = ({ name, nav }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nav);
  };
  return (
    <div
      onClick={handleClick}
      className="m-2 cursor-pointer text-#3c415c shadow-custom m-2 border-2 border-white p-0 rounded-lg flex flex-col justify-between w-[83%] lg:w-100 items-center w-[500px] max-w-[500px] h-[300px] overflow-hidden relative bg-gradient-to-br from-green-300 to-blue-200"
    >
      <div className="absolute items-center">
        <h1 className="textShadow text-white text-lg font-bold mt-28  text-center text-[50px]  leading-[1em]">{name}</h1>
      </div>
    </div>
  );
};
export default TitleCard;
