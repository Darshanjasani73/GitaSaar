import React from 'react';
import { Videolink } from '../../data/Data';
import pic from '../../data/Images/VideoImage.jpg';

function openVideoInNewWindow(url) {
  window.open(url, '_blank');
}

const Video = () => (
  <div className="flex flex-wrap  justify-center  grid-cols-0 sm:grid-cols-2 ">
    {Videolink.map((Videourl, index) => (
      <div
        className="card bg-white text-gray-800 shadow-md cursor-pointer m-4 border-4 border-white rounded-lg flex flex-col justify-between items-start w-full max-w-xs h-50 relative "
        key={index}
        onClick={() => openVideoInNewWindow(Videourl.link)}
      >
        <img className="w-full h-full rounded-[10px] p-0" src={pic} alt="Jay Shree Krishna" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col items-center">
          <h1 className="text textShadow text-white text-lg font-bold mt-1 text-center text-[40px] shadow-md">अध्याय:{Videourl.id}</h1>
        </div>
      </div>

    ))}
  </div>
);
export default Video;
