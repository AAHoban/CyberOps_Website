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
  faMoon,
  faSun,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const {setUserInfo, userInfo} = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = (themeIcon) => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  useEffect(() => {
    fetch('https://cyberops-website-api.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://cyberops-website-api.onrender.com/logout', {
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
        <div className='ul-div'>
          <ol>
            <a href='/'>
              <FontAwesomeIcon className='menuIcons' icon={faHome} />
            </a>
          </ol>
          <ol>
            <a href='/portfilo' className='portfolio-link'>
              <FontAwesomeIcon className='menuIcons' icon={faSuitcase} />
            </a>
          </ol>
          <ol>
            <a href='/contact' className='contact-link'>
              <FontAwesomeIcon className='menuIcons' icon={faEnvelope} />
            </a>
          </ol>
          <ol>
            <a href='/eduhub' className='EducationHub-link'>
              <FontAwesomeIcon className='menuIcons' icon={faBuildingColumns} />
            </a>
          </ol>
        </div>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <button type="button" className={`toggle-btn__input-label lightDark-toggle`} onClick={handleThemeChange}>
              <FontAwesomeIcon className='menuIcons' icon={theme === 'dark' ? faMoon : faSun} size='2x'/>
            </button>
          </div>
        </div>
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

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffffff"
          size='2x'
          className='close-icon' />
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
      <div className="toggle-btn-section-mobile">
      <div className={`toggle-checkbox m-vertical-auto`}>
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}>
              <FontAwesomeIcon className='menuIcons' icon={theme === 'dark' ? faMoon : faSun} size='2x'/>
            </button>
          </div>
      </div>
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
