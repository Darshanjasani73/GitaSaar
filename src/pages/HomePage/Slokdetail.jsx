import React, { useEffect, useState } from 'react';
import { ImNext, ImPrevious } from 'react-icons/im';
import { Link } from 'react-router-dom';

const SlokaDetails = ({ chapterNumber, verseNumber, slokaDetails }) => {
  const [prevChapter, setPrevChapter] = useState();
  const [nextChapter, setNextChapter] = useState();
  const [prevSloka, setPrevSloka] = useState();
  const [nextSloka, setNextSloka] = useState();
  const [totalSlokas, setTotalSlokas] = useState();

  useEffect(() => {
    // Handle previous sloka logic
    if (Number(verseNumber) === 1) {
      setPrevChapter(chapterNumber === 1 ? 18 : Number(chapterNumber) - 1);
      setPrevSloka(totalSlokas);
    } else {
      setPrevChapter(chapterNumber);
      setPrevSloka(Number(verseNumber) - 1);
    }

    // Handle next sloka logic
    if (Number(verseNumber) === totalSlokas) {
      setNextChapter(Number(chapterNumber) === 18 ? 1 : Number(chapterNumber) + 1);
      setNextSloka(1);
    } else {
      setNextChapter(chapterNumber);
      setNextSloka(Number(verseNumber) + 1);
    }
  }, [chapterNumber, verseNumber, totalSlokas]);
  useEffect(() => {
    const fetchTotalSlokas = async () => {
      try {
        const response = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '418f644102msh45adb8070715ef5p149ef4jsn480db72b8683',
              'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTotalSlokas(data.verses_count);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching total slokas:', error);
      }
    };

    fetchTotalSlokas();
  }, [chapterNumber]);

  return (
    <div className="sloka-container mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 w-full">
      <div className="text-3xl flex justify-between max-w-3xl">
        <Link to={`/chapter/${prevChapter}/verses/${prevSloka}`}>
          <ImPrevious />
        </Link>
        <Link to={`/chapter/${nextChapter}/verses/${nextSloka}`}>
          <ImNext />
        </Link>
      </div>
      <h1 className="text-[25px] text-[#000000] font-cambria font-bold">|| {chapterNumber}.{verseNumber} ||</h1>
      <p className="text-[1.8rem] leading-[3rem] font-sans text-[rgb(94, 93, 93)] font-bold text-center max-w-[28rem]">{slokaDetails?.text}</p>
      <p className="textjtfy text-[1.3rem] text-[#000000] font-sans font-medium">{slokaDetails?.word_meanings}</p>
      <h1 className="font-sans text-2xl text-[#000000] font-bold mb-[20px]">अनुवाद</h1>
      <p className="textjtfy text-[1.3rem] text-[#000000] font-sans font-light leading-[1.8em]">{slokaDetails?.translations.find((translation) => translation.author_name === 'Swami Ramsukhdas')?.description}</p>
      <h1 className="font-sans text-2xl text-[#000000] font-bold mb-[20px]">टीका</h1>
      <p className="textjtfy text-[1.3rem] text-[#000000] font-sans font-light leading-[1.8em]">{slokaDetails?.commentaries.find((commentary) => commentary.author_name === 'Swami Ramsukhdas')?.description}</p>
    </div>
  );
};

export default SlokaDetails;
