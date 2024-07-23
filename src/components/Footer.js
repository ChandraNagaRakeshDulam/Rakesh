import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact: <a href="mailto:dulam.rakesh0@gmail.com">dulam.rakesh0@gmail.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/chandra-naga-rakesh-dulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a> | 
          <a href="https://github.com/ChandraNagaRakeshDulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
