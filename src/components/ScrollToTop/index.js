import './index.scss';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
    
  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
  };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
      
      return (
        <button className="scrollUpButton">
         <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollToTop} 
         style={{transform: visible ? 'none' : 'translateX(calc(100% + 30px))', transition: 'all 0.4s ease-out'}} />
        </button>
      );
}

export default ScrollToTop;
