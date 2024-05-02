import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import AdhyayCard from './AdhyayCard';

const AdhyayCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
        params: { limit: '18' },
        headers: {
          'X-RapidAPI-Key': '418f644102msh45adb8070715ef5p149ef4jsn480db72b8683',
          'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (<Spinner />) : (
        <div className="flex gap-5 flex-wrap justify-center responsive-flex">
          {data.map((chapter, index) => (
            <AdhyayCard key={index} chapter={chapter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdhyayCards;
