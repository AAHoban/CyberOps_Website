import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactCardCarousel from 'react-card-carousel';
import Abdulaziz from '../../assets/Aziz.png'
import Bander from '../../assets/BanderAlRasheed.jpg';
import Saud from '../../assets/SaudAlOmran.jpg';
import Ali from '../../assets/AliAlhoban.jpg';
import './index.scss'

export default class TeamCarsouel2022 extends Component {
    
    static get CONTAINER_STYLE() {
        return {
          position: "relative",
          height: "70vh",
          width: '100%',
          margin: 'auto',
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "middle"
        };
      }

    static get CARD_STYLE() {
        return {
        };
      }

    render() {
        return (
            <div className='TeamCarsouelContainer' style={TeamCarsouel2022.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={ true } autoplay_speed={ 3000 }>
                    <div style={ TeamCarsouel2022.CARD_STYLE }>
                      <div className="card">
                          <div className="card__header">
                          <img src={Abdulaziz} alt="" />
                          </div>
                          <div className="card__body">
                            <h4>Abdulaziz AlFahaid</h4>
                          </div>
                          <div className="card_footer">
                            <a
                              href="https://www.linkedin.com/company/cyberops-at-psu/mycompany/"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                size='2x'
                                id="anchor-icon"
                              />
                            </a>
                            Co-Founder & <br></br> President
                          </div>
                      </div>
                    </div>
                    <div style={ TeamCarsouel2022.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={Bander} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>Bander AlRasheed</h4>
                        </div>
                        <div className="card_footer">
                          <a
                            href="https://www.linkedin.com/company/cyberops-at-psu/mycompany/"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              size='2x'
                              id="anchor-icon"
                            />
                          </a>
                          Co-Founder & <br></br> Vice-President
                        </div>
                      </div>
                    </div>
                    <div style={ TeamCarsouel2022.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={Ali} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>Ali AlHoban</h4>
                        </div>
                        <div className="card_footer">
                        <a
                            href="https://www.linkedin.com/company/cyberops-at-psu/mycompany/"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              size='2x'
                              id="anchor-icon"
                            />
                          </a>
                          Head of R&D
                        </div>
                      </div>
                    </div>
                    <div style={ TeamCarsouel2022.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={Saud} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>Saud AlOmran</h4>
                        </div>
                        <div className="card_footer">
                        <a
                            href="https://www.linkedin.com/company/cyberops-at-psu/mycompany/"
                            rel="noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              size='2x'
                              id="anchor-icon"
                            />
                          </a>
                          Head of Marketing
                        </div>
                      </div>
                    </div>
                </ReactCardCarousel>
            </div>
        )
    }
}