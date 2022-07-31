import React from 'react';
import '../css/ContactUs.css';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function ContactUs() {
  return (      
    <div className='contactContainer'>
      <div className="header">
        <h1>Contact Us</h1> 
      </div> 
      <div className='mainPage'>
<h2>Socials</h2>
        <div className='socials'>
          <a href='https://twitter.com/CyberOps_PSU' ><FaTwitter className='socialIcons' id='Twitter'/></a>
          <a href='https://www.linkedin.com/company/cyberops-at-psu/' ><FaLinkedin className='socialIcons' id='LinkedIn'/></a>
        </div>
<h2>Our Location</h2>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs
