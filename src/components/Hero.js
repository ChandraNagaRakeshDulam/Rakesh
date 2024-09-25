import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div>
          <h1>Hi, I'm Rakesh Dulam</h1>
          <div className="location">
            <FaMapMarkerAlt className="location-icon" />
            <span>Charlotte, NC</span>
          </div>
          <p>I am a java full-stack developer with a passion for creating innovative solutions and improving user experiences.</p>
        </div>
        <div className="profile-image">
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
