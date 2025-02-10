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
        // eslint-disable-next-line no-console
        console.log('API Response:', response.data);
        setData(Array.isArray(response.data) ? response.data : []); // Ensure array format
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
        setData([]); // Avoid non-array values
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? <Spinner /> : (
        <div className="flex gap-5 flex-wrap justify-center responsive-flex">
          {data.map((chapter) => (
            <AdhyayCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdhyayCards;
