import React, { useState, useEffect } from "react";
import '../css/Home.scss'
import TeamCarsouel from '../components/teamCarsouel/TeamCarsouel-current';
import Preloader from "../components/Preloader";


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
      const currentTime = new Date().getTime();
      const timeSinceLastVisit = currentTime - parseInt(lastVisit);
    
      const timeLimit = 1 * 60 * 60 * 1000;
  
      if (timeSinceLastVisit < timeLimit) {
        setIsLoading(false); 
      }
    }

    localStorage.setItem('lastVisit', new Date().getTime());

    // Simulate loading content from the backend
  }, []);

  const toggleFadeUp = () => {
          const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setFade(true)
      } 
      else if (scrolled <= 300){
        setFade(false)
      }
  }

  window.addEventListener('scroll', toggleFadeUp);

    return (
      <>
        {isLoading ? (
            <Preloader />
          ) : (
          <div className='homeContainer' id="top">
            <div className='home'>
              <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path className="waveColor" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,213.3C384,192,480,96,576,85.3C672,75,768,149,864,154.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              <div className='Heading'>
                <h1 className='MainHeading'> Welcome to CyberOps Club</h1>
                <p>The CyberOps Club is a student organization located at Prince Sultan University devoted to students in the Cybersecurity field. We strive to spread awareness and promote knowledge about the cybersecurity fields. <br></br> Join us to learn more!</p>            <button>Join the Club</button>
              </div>
            </div>

            <div className='Info'>
              <svg className="waves2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path className="waveColor2" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,133.3C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
              <h1>About Us</h1>
                <div className='InfoContainer'>
                  <div className='InfoCards' style={{transform: fade ? 'none' : 'translateY(calc(100% + 30px))', transition: 'all 0.4s ease-out'}}>
                    <h1>Who are we?</h1>
                    <div className='InfoCardDivider'>
                      <p>CyberOps, founded in 2021, is dedicated to raising awareness about cybersecurity among students. Our mission has led us to serve over 1000 students, providing top-tier activities and resources in the field of cybersecurity. With a thriving community, we have exceeded 260 members who share a keen interest in cybersecurity.</p>
                    </div>
                  </div>
                  <div className='InfoCards' style={{transform: fade ? 'none' : 'translateY(calc(100% + 30px))', transition: 'all 0.5s ease-out'}}>
                    <h1>Our Vision</h1>
                    <div className='InfoCardDivider'>
                      <p>
                        We aspire to be an influential university
                        club, fostering future cybersecurity
                        leaders who contribute to a safer digital
                        world.
                      </p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                  <div className='InfoCards' style={{transform: fade ? 'none' : 'translateY(calc(100% + 30px))', transition: 'all 0.6s ease-out'}}>
                    <h1>Our Mission</h1>
                    <div className='InfoCardDivider'>
                      <p>
                        Our mission is to equip university
                        students with advanced knowledge and
                        skills in cybersecurity, creating an
                        environment to learn, practice, and
                        innovate in cybersecurity.
                      </p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
            </div>
          
            <div className='team'>
              <div className='teamContainer'>
                <h1>Meet the team</h1>
                <TeamCarsouel />
                <button>
                  <a className="prevMember_btn" href="/members">Previous Members</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Home;