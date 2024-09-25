import React from 'react';
import './Home.css';
import './Education.css';
import './Connect.css';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Connect from './Connect';
import AchievementsCertifications from './AchievementsCertifications';
import Hero from './Hero';
import BackgroundAnimation from './BackgroundAnimation';

const Home = () => {
  return (
    <div className="home">
      <BackgroundAnimation />
      <div className="content">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <AchievementsCertifications />
        <Connect />
      </div>
    </div>
  );
};

export default Home;
