import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Adhyay from './Adhyay';
import Spinner from '../../components/Spinner';

const Adhyays = () => {
  const { chapterNumber } = useParams();
  const [chapterDetails, setChapterDetails] = useState({});
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChapterDetails = async () => {
      setLoading(true);
      try {
        // Fetch chapter details
        const chapterResponse = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '418f644102msh45adb8070715ef5p149ef4jsn480db72b8683',
              'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
            },
          },

        );
        const chapterData = await chapterResponse.json();
        setChapterDetails(chapterData);

        // Fetch verses for the chapter
        const versesResponse = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '418f644102msh45adb8070715ef5p149ef4jsn480db72b8683',
              'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
            },
          },
        );
        const versesData = await versesResponse.json();
        setVerses(versesData);
        setLoading(false);
      } catch {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchChapterDetails();
  }, [chapterNumber]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Adhyay chapterDetails={chapterDetails} verses={verses} />
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Adhyays;
