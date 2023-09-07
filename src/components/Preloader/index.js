import React from 'react';
import './style.scss';
import { Waveform } from '@uiball/loaders';

const Preloader = () => {

  return (
    <div className="preloader-container">
      <Waveform size={40} color="#608eac" /> 
    </div>
  );
};

export default Preloader;
