import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImNext, ImPrevious } from 'react-icons/im';
import Slokas from './Slokas';

const Adhyay = ({ chapterDetails, verses }) => {
  const [prevChapter] = useState(chapterDetails.chapter_number === 1 ? 18 : chapterDetails.chapter_number - 1);
  const [nextChapter] = useState(chapterDetails.chapter_number === 18 ? 1 : chapterDetails.chapter_number + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="adhyay-container mx-auto max-w-6xl px-4 py-10 sm:px-6 self-center w-full">
      <div className="text-3xl flex justify-between max-w-3xl">
        <Link to={`/chapter/${prevChapter}/verses`}>
          <ImPrevious />
        </Link>
        <Link to={`/chapter/${nextChapter}/verses`}>
          <ImNext />
        </Link>
      </div>
      <h2 className="text-center font-bold text-[#575454] text-[22px] font-roboto mb-8">{`अध्याय ${chapterDetails.chapter_number}`}</h2>
      <h1 className="text-center font-bold text-[#333333] text-[28px] font-sans mb-8">{chapterDetails.name}</h1>
      <p className="textjtfy font-sans text-[20px] text-[#363636] font-medium leading-[1.5em] text-left">सारांश : {chapterDetails.chapter_summary_hindi}</p>
      <div className="verses">
        {verses.length > 0 ? (
          verses.map((verse, index) => {
            const description = verse.translations.find((translation) => translation.author_name === 'Swami Ramsukhdas')?.description;
            return (
              <Slokas chNum={chapterDetails} description={description} chapterNumber={chapterDetails.chapter_number} verseNumber={verse.verse_number} key={index} />
            );
          })
        ) : (
          <p className="mt-5 text-[#999999]">No verses found for this chapter.</p>
        )}
      </div>
    </div>
  );
};

export default Adhyay;
