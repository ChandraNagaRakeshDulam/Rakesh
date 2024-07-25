import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/">Rakesh Dulam</Link>
        </div>
        <div className="desktop-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/education">Education</Link></li>
          </ul>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
