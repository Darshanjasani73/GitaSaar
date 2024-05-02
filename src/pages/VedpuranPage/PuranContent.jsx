import React from 'react';
import BookLink from './BookLink';
import { PuranData } from '../../data/Data';

const PuranContent = () => (
  <div>
    {PuranData.map((book, index) => (
      <BookLink key={index} name={book.name} pdf={book.pdf} />
    ))}
  </div>
);

export default PuranContent;
