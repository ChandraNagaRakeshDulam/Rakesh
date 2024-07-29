import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="mailto:dulam.rakesh0@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/chandra-naga-rakesh-dulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ChandraNagaRakeshDulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/rakeshdulam/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/rakesh.dulam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>Copyright © 2024 Rakesh Dulam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
