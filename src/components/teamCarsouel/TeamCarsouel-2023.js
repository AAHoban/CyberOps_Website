import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
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
                          Vice-President
                        </div>
                      </div>
                    </div>
                    <div style={ TeamCarsouel2023.CARD_STYLE }>
                      <div className="card">
                        <div className="card__header">
                        <img src={Ali} alt="" />
                        </div>
                        <div className="card__body">
                          <h4>Ali AlHoban</h4>
                        </div>
                        <div className="card_footer">
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
                          Head of Marketing
                        </div>
                      </div>
                    </div>
                </ReactCardCarousel>
            </div>
        )
    }
}