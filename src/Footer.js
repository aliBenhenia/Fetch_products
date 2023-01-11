import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    library.add(faFacebookSquare, faTwitterSquare, faInstagram);
  return (
    <footer>
      <div className="footer-info">
        <p>Copyright © {new Date().getFullYear()} AliBenheni</p>
        <p>
          <a href="#about">About</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-of-service">Terms of Service</a>
        </p>
      </div>
      <div className="footer-social">
      <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/aliBenhenia">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;