import './index.scss';
import React, { useState, useEffect, useContext } from 'react';
import CyberOpsLogo from '../../assets/CYBER_OPS_Transparent.png';
import CyberOpsDarkLogo from '../../assets/CYBER_OPS_TransparentDark.png';
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
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Sidebar = (props) => {
  const [showNav, setShowNav] = useState(false);
  const {setUserInfo, userInfo} = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = (themeIcon) => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  useEffect(() => {
    fetch('https://cyberops.onrender.com/api/profile', {
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('https://cyberops.onrender.com/api/logout', {
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
        <img src={theme === 'dark' ? CyberOpsDarkLogo : CyberOpsLogo} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <div className='ul-div'>
          <ol>
            <a href='/'>
              <FontAwesomeIcon className='menuIcons' icon={faHome} />
            </a>
          </ol>
          <ol>
            <a href='/portfolio' className='portfolio-link'>
              <FontAwesomeIcon className='menuIcons' icon={faSuitcase} />
            </a>
          </ol>
          <ol>
            <a href='/contact' className='contact-link'>
              <FontAwesomeIcon className='menuIcons' icon={faEnvelope} />
            </a>
          </ol>
        </div>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <button type="button" className={`toggle-btn__input-label lightDark-toggle`} onClick={handleThemeChange}>
              <button className='menuIcons'>
                {theme === 'dark' ? 
                  <FontAwesomeIcon className='menuIcons' icon={faMoon} size='2x'/>
                  :     
                  <svg
                    viewBox="0 2 24 24"
                    fill="currentColor"
                    height="2rem"
                    width="2rem"
                    {...props}
                  >
                    <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605l-1.414 1.414-2.122-2.122 1.414-1.414z" />
                  </svg>
                }
              </button>
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
            <button className='menuIcons'>
                {theme === 'dark' ? 
                  <FontAwesomeIcon className='mobileMoonIcon' icon={faMoon} size='2x'/>
                  :     
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2rem"
                    width="2rem"
                    {...props}
                  >
                    <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605l-1.414 1.414-2.122-2.122 1.414-1.414z" />
                  </svg>
                }
              </button>
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
