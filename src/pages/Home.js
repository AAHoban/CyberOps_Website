import React from 'react';
import '../css/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons';
import CyberopsLogo from '../assets/CYBER_OPS_LOGO-2.png';
import TeamCarsouel from '../components/teamCarsouel/TeamCarsouel-2023';
import Footer from '../components/Footer/index';

function Home() {

  return (
    <div className='homeContainer'>
      <div className='home'>    
        <div className='Heading'>
          <h1 className='MainHeading'> Welcome to <span>CyberOps</span> Club</h1>
          <p>The CyberOps Club is a student organization located at Prince Sultan University devoted to students in the Cybersecurity field. We strive to spread awareness and promote knowledge about the cybersecurity fields. <br></br> Join us to learn more!</p>
          <img className='CyberopsLogo' src={CyberopsLogo} alt=""/>
          <button>Join the Club</button>
        </div>
      </div>

      <div className='Info'>
      <h1>About Us</h1>
        <div className='InfoContainer'>
          <div className='InfoCards'>
            <h1>Who are we?</h1>
            <div className='InfoCardDivider'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eos neque ex tempore doloribus aliquid optio eaque eum, odit, laboriosam voluptatem sunt modi mollitia sed beatae error corrupti corporis accusamus!</p>
            </div>
          </div>
          <div className='InfoCards'>
            <h1>Our Mission</h1>
            <div className='InfoCardDivider'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eos neque ex tempore doloribus aliquid optio eaque eum, odit, laboriosam voluptatem sunt modi mollitia sed beatae error corrupti corporis accusamus!</p>
            </div>
          </div>
          <div className='InfoCards'>
            <h1>Our Mission</h1>
            <div className='InfoCardDivider'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eos neque ex tempore doloribus aliquid optio eaque eum, odit, laboriosam voluptatem sunt modi mollitia sed beatae error corrupti corporis accusamus!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='team'>
        <div className='teamContainer'>
          <h1>Meet the team</h1>
          <TeamCarsouel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

