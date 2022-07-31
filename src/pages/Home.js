import React from 'react';
import '../css/Home.css';
import BgVideo from '../assets/BgVideo.mp4';

function Home() {
  return (
    <div className='homeContainer'>
      <div className='home'>
        <div className='Content'>
          <video autoplay="autoplay" loop="loop" muted >
            <source src={BgVideo} type='video/mp4' />
          </video>
        </div>              
        <div className='Heading'>
          <h1 className='MainHeading'> Welcome to <span>CyberOps</span> Club</h1>
          <p>CyberOps is a student-run organization at Prince Sultan Univeristy that is supervised under XXXXXXXX.</p>
        </div>
      </div>

      <div className='Info'>
        <h1>Objective</h1>
        <p>The club aims to cover different topics related to cyber security like network security, penetration testing, secure coding, cryptography, reverse engineering, and more.</p>
        <h1>CyperOps Future Plans</h1>
        <ul>
          <a href='/challanges'><li>Deliver challanges</li></a>
          <a href='/workshops'><li>Provide workshop</li></a>
          <a href='/events'><li>Host events</li></a>
          <a href='/competition'><li>Conduct competitions</li></a>
        </ul>
      </div>
    </div>
  );
}

export default Home;
