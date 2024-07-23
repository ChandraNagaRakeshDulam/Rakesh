import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Chandra Naga Rakesh Dulam</h1>
          <p>Full Stack Developer | AI Enthusiast | Java Expert</p>
          <a href="#about" className="btn">Learn More</a>
        </div>
      </div>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Nearly 3 years of experience as a Java full stack developer, demonstrating expertise in both frontend 
          and backend technologies to deliver comprehensive and efficient solutions.
        </p>
      </section>
    </div>
  );
};

export default Home;
