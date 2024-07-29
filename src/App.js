import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-scroll';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import './styles.css';
import logo from './RD.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            <li className="dropdown">
              <span>Resume</span>
              <div className="dropdown-content">
                <a href="/Resume_Rakesh.pdf" target="_blank" rel="noopener noreferrer">View</a>
                <a href="/Resume_Rakesh.pdf" download>Download</a>
              </div>
            </li>
            <li><Link to="connect" smooth={true} duration={500}>Let's Connect</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
