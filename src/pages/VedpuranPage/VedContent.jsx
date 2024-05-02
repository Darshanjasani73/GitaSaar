import React from 'react';
import Linkb from './BookLink';
import { VedData } from '../../data/Data';

const VedContent = () => (
  <div>
    {VedData.map((book, index) => (
      <Linkb key={index} name={book.name} pdf={book.pdf} />
    ))}
  </div>
);

export default VedContent;
