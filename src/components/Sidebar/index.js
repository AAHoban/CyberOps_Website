import './index.scss';
import React, { useState, useEffect, useContext } from 'react';
import CyberOpsLogo from '../../assets/CYBER_OPS_Transparent.png';
import { ThemeContext } from '../../context/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faPlus,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const {setUserInfo, userInfo} = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  useEffect(() => {
    fetch('http://localhost:3500/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:3500/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

const username = userInfo?.username;

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={CyberOpsLogo} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon className='menuIcons' icon={faHome} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfilo"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon className='menuIcons' icon={faSuitcase} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon className='menuIcons' icon={faEnvelope} />
        </NavLink>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffffff"
          size="2x"
          className='close-icon' />

        {username && (
          <>
            <NavLink 
              to="/create"
              className="createBlog-link"
              onClick={() => setShowNav(false)}
            >
              <FontAwesomeIcon className='menuIcons' icon={faPlus}/>
            </NavLink>
            <NavLink 
              to="/"
              className="logout-link"
              onClick={() => logout() && setShowNav(false)}
            > 
              <FontAwesomeIcon className='menuIcon' icon={faRightFromBracket} />
            </NavLink>
          </>
        )}
        {!username && (
          <>
          </>
        )}
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/company/cyberops-at-psu/mycompany/"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              id="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/CyberOps_PSU"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              id="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cyberops_psu/"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              id="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          size="2x"
          className='hamburger-icon' 
      />
    </div>
  )
}

export default Sidebar
