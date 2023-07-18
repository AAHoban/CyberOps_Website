import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import noProfileImg from '../../assets/noProfileImg.png';
import Bander from '../../assets/BanderAlRasheed.jpg';
import Abdullah from '../../assets/AbdulahAlShawi.jpg';
import Saud from '../../assets/SaudAlOmran.jpg';
import Ali from '../../assets/AliAlhoban.jpg';
import './index.scss'

export default class TeamCarsouel2023 extends Component {
    
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
            <div className='TeamCarsouelContainer' style={TeamCarsouel2023.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={ true } autoplay_speed={ 3000 }>
                    <div style={ TeamCarsouel2023.CARD_STYLE }>
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
                          President
                        </div>
                      </div>
                    </div>
                    <div style={ TeamCarsouel2023.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={Abdullah} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>Abdulah AlShawi</h4>
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
                          Vice-President
                        </div>
                      </div>
                    </div>
                    <div style={ TeamCarsouel2023.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={noProfileImg} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>-------</h4>
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
                    <div style={ TeamCarsouel2023.CARD_STYLE }>
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
                    <div style={ TeamCarsouel2023.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={noProfileImg} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>Fahad AlRebdi</h4>
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
                          Head of Public Realtions
                        </div>
                      </div>
                    </div>
                </ReactCardCarousel>
            </div>
        )
    }
}