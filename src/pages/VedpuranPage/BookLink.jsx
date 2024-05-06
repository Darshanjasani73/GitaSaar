import React from 'react';
// import { Link } from 'react-router-dom';
// import p1 from '../data/agni-puran.pdf';

const BookLink = ({ name, pdf }) => {
  const onButtonClick = (open) => {
    if (open) {
      window.open(pdf, '_blank');
    } else {
      const link = document.createElement('a');
      link.href = pdf;
      link.download = pdf;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex items-center justify-center m-5">
      <h1 className="name font-bold text-[20px] mr-4">{name}</h1>
      <button onClick={() => onButtonClick(true)} type="button" className="text-white  font-bold bg-gray-500 border border-gray-500 rounded-md px-4 py-2 mr-4">Read</button>
      <button onClick={() => onButtonClick(false)} type="button" className="text-white font-bold bg-gray-500 border border-gray-500 rounded-md px-4 py-2 mr-4">Save</button>
    </div>
  );
};

export default BookLink;
