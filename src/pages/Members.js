import React from 'react';
import '../css/Members.css';
import Aziz from '../assets/Aziz.png';
import noProfileImg from '../assets/noProfileImg.png';

function Members() {
  return (
    <div className='memberContainer'>
      <div className="header">
        <h1>Club Members</h1> 
      </div> 

        <div className='headings'>
   
          <h2>Club Leaders</h2>

          <div className='memberCards'>
            <div className="card">
                  <div className="card__header">
                    <img src={noProfileImg} alt="" />
                  </div>
                  <div className="card__body">
                    <h4>Abdulaziz AlFahaid</h4>
                  </div>
                  <div className="footer">
                    President
                  </div>
              </div>

              <div className="card">
                  <div className="card__header">
                  <img src={noProfileImg} alt="" />
                  </div>
                  <div className="card__body">
                    <h4>Bander AlRasheed</h4>
                  </div>
                  <div className="footer">
                    Vice-President
                  </div>
              </div>
        </div>
    </div>

<h2>Other Members</h2>  

      <div className='memberCards'>
          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>Ali AlHoban</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>

          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>-------</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>

          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>-------</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>

          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>-------</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>

          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>-------</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>

          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>-------</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>

          <div className="card">
              <div className="card__header">
              <img src={noProfileImg} alt="" />
              </div>
              <div className="card__body">
                <h4>-------</h4>
              </div>
              <div className="footer">
                Member
              </div>
          </div>
      </div>
    </div>
  );
}

export default Members;
