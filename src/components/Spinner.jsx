import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Spinner = () => (
  <div className="flex flex-col items-center justify-center w-full">
    <div className="spinner relative mt-2 ml-12">
      <LineWave
        color="#575454"
        visible
        height="200"
        width="200"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  </div>
);

export default Spinner;
