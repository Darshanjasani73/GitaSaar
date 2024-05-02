import React from 'react';
import Video from './Video';

function VideoComponent() {
  return (
    <div className="flex justify-center mt-[6pc]">
      <div className="flex flex-wrap  justify-center  grid-cols-0 sm:grid-cols-2 ">
        <Video />
      </div>
    </div>
  );
}

export default VideoComponent;
