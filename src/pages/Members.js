import React, { Component } from 'react';
import '../css/Members.scss';
import TeamCarsouelCurrent from '../components/teamCarsouel/TeamCarsouel-current';
import TeamCarsouel23 from '../components/teamCarsouel/TeamCarsouel-2023';
import TeamCarsouel22 from '../components/teamCarsouel/TeamCarsouel-2022';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      startCounting: false
    };
    this.counterRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const counterElement = this.counterRef.current;
    const windowHeight = window.innerHeight;
    const counterPosition = counterElement.getBoundingClientRect().top;

    if (!this.state.startCounting && counterPosition < windowHeight) {
      this.setState({ startCounting: true });
      this.counter(0, 100, 1200); // Count from 0 to 100 in 3 seconds (3000 milliseconds)
    }
  };

  counter = (minimum, maximum, duration) => {
    const stepTime = Math.floor(duration / (maximum - minimum + 1));
    let count = minimum;
    const incrementCount = () => {
      if (count <= maximum) {
        this.setState({ count });
        count++;
        setTimeout(incrementCount, stepTime);
      }
    };
    incrementCount();
  };

  render() {
    return (
      <div className="memberContainer">
        <h1>Club Members</h1>
        <h2>Meet the Team!</h2>
        <TeamCarsouelCurrent />
        <div className="memberCount" ref={this.counterRef}>
          <FontAwesomeIcon className="Users" icon={faUsers} size="3x" />
          <h2>+{this.state.count} Members</h2>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>2022 - 2023 Team</h2>
        <TeamCarsouel23 />
        <h2>2021 - 2022 Team</h2>
        <TeamCarsouel22 />
      </div>
    );
  }
}

export default Members;
