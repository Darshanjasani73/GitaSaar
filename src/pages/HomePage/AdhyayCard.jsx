// eslint-disable-next-line import/no-duplicates
import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdhyayCard = ({ chapter }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate(`/chapter/${chapter.chapter_number}/verses`);
  };

  return (
    <div
      onClick={handleClick}
      className="card text-base cursor-pointer bg-white text-3c415c p-[0.75rem] m-[0.95rem] border-2 border-white rounded-[15px] flex flex-col justify-between items-start max-w-[350px] h-[250px] font-Nunito text-lg leading-[1.6]"
    >
      <div className="max-h-[90%] overflow-y-auto pr-4 w-full">
        <h1 className="text-xl text-gray-700 font-semibold mb-2">
          अध्याय: {chapter.chapter_number}
        </h1>
        <h2 className="text-lg font-semibold text-gray-800 mb-1 overflow-hidden truncate">
          नाम: {chapter.name}
        </h2>
        <p className="mb-1 font-bold">
          श्लोक: {chapter.verses_count}
        </p>
        <p>
          <span className="font-bold">सारांश:</span> {chapter.chapter_summary_hindi}
        </p>
      </div>
    </div>
  );
};

export default AdhyayCard;
