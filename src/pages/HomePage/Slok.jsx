import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import SlokaDetails from './Slokdetail';

const Slok = () => {
  const { chapterNumber, verseNumber } = useParams();
  const [slokaDetails, setSlokaDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchSlokaDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/${verseNumber}/`,
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
        setSlokaDetails(data);
      // eslint-disable-next-line no-shadow
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching sloka details:', error);
        setError('Failed to fetch sloka details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSlokaDetails();
  }, [chapterNumber, verseNumber]);

  if (loading) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (<SlokaDetails chapterNumber={chapterNumber} verseNumber={verseNumber} slokaDetails={slokaDetails} />);
};

export default Slok;
