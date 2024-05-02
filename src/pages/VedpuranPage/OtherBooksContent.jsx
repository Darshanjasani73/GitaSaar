import React from 'react';
import BookLink from './BookLink';
import { OtherData } from '../../data/Data';

const OtherBooksContent = () => (
  <div>
    {OtherData.map((book, index) => (
      <BookLink key={index} name={book.name} pdf={book.pdf} />
    ))}
  </div>
);

export default OtherBooksContent;
