import React from 'react';
import './Home.css';
//import locationIcon from './location-icon.png'; // Make sure to have an appropriate location icon image

const Home = () => {
  return (
    <div className="home">
      <div className="background-animation">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
      <div className="content">
        <h1>Hi, I'm Rakesh.</h1>
        <div className="location">
          <span>Charlotte, NC</span>
        </div>
        <p>I am a full-stack developer with a passion for creating innovative solutions and improving user experiences.</p>
      </div>
    </div>
  );
};

export default Home;
