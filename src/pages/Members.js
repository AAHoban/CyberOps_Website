import React from 'react';
import '../css/Members.css';
import noProfileImg from '../assets/noProfileImg.png';
import TeamCarsouel23 from '../components/teamCarsouel/TeamCarsouel-2023';
import TeamCarsouel22 from '../components/teamCarsouel/TeamCarsouel-2022';
import Footer from '../components/Footer/index';


function Members() {
  return (
    <div className='memberContainer'>
      <div>
        <h1>Club Members</h1> 
        <h2>2022 - 2023 Team</h2>
        <TeamCarsouel23 />
        <h2>2021 - 2022 Team</h2>
        <TeamCarsouel22 />
      </div>
      <Footer /> 
    </div>
  );
}

export default Members;
