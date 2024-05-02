import React from 'react';
import TitleCard from './TitleCard';
import { BoxData } from '../../data/Data';

const TitleCards = () => (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center">
    {BoxData.map((box, index) => (
      <div className="flex justify-center">
        <TitleCard key={index} name={box.name} nav={box.nav} />
      </div>
    ))}
  </div>
);

export default TitleCards;
