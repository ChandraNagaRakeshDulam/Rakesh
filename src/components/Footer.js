import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <a href="mailto:dulam.rakesh0@gmail.com">dulam.rakesh0@gmail.com</a> |
          <a href="https://www.linkedin.com/in/chandra-naga-rakesh-dulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a> |
          <a href="https://github.com/ChandraNagaRakeshDulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
        <p>Copyright © 2024 Rakesh Dulam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
