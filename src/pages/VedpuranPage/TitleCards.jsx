import React from 'react';
import TitleCard from './TitleCard';
import { VBoxData } from '../../data/Data';

const TitleCards = () => (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center">
    {VBoxData.map((box, index) => (
      <div className="flex justify-center" key={index}>
        <TitleCard name={box.name} nav={box.nav} />
      </div>
    ))}
  </div>
);

export default TitleCards;
