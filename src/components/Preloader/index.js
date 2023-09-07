import React, { useContext } from 'react';
import './style.scss';
import { Waveform } from '@uiball/loaders';
import { ThemeContext } from '../../context/theme-context';

const Preloader = () => {
    const [theme, setTheme] = useContext(ThemeContext)

  return (
    <div className="preloader-container">
        {theme === 'dark' ? 
            <Waveform size={35} color="#ffffff" /> 
            : 
            <Waveform size={35} color="#608eac" /> 
        }
    </div>
  );
};

export default Preloader;
