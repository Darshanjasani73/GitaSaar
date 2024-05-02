import React from 'react';
import Linkb from './BookLink';
import { UpnsData } from '../../data/Data';

const UpanishadContent = () => (
  <div>
    {UpnsData.map((book, index) => (
      <Linkb key={index} name={book.name} pdf={book.pdf} />
    ))}
  </div>
);

export default UpanishadContent;
