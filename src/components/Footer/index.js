import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const index = () => {
  return (
    <footer class="footer">
        <ul class="social-icon">
            <li>
            <a
                href="https://www.linkedin.com/company/cyberops-at-psu/mycompany/"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faLinkedin}
                id="anchor-icon"
                size='2x'
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
                size='2x'
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
                size='2x'
                />
            </a>
            </li>
        </ul>
        <ul class="menu">
            <li class="menu__item"><a class="menu__link" href="/">Home</a></li>
            <li class="menu__item"><a class="menu__link" href="/portfilo">Portfilo</a></li>
            <li class="menu__item"><a class="menu__link" href="/contact">Contact</a></li>
        </ul>
        <p>&copy;2023 CyberOps | All Rights Reserved</p>
    </footer>
  )
}

export default index
