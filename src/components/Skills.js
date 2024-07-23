import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <i className="fas fa-code"></i>
          <h3>Programming Languages</h3>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-category">
          <i className="fas fa-laptop-code"></i>
          <h3>Frontend Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>Angular</li>
          </ul>
        </div>
        <div className="skill-category">
          <i className="fas fa-server"></i>
          <h3>Backend Technologies</h3>
          <ul>
            <li>Spring Boot</li>
            <li>Spring MVC</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-category">
          <i className="fas fa-database"></i>
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="skill-category">
          <i className="fas fa-cloud"></i>
          <h3>Cloud Technologies</h3>
          <ul>
            <li>AWS EC2</li>
            <li>S3 Bucket</li>
            <li>Lambda</li>
          </ul>
        </div>
        <div className="skill-category">
          <i className="fas fa-tools"></i>
          <h3>Tools & Others</h3>
          <ul>
            <li>Git</li>
            <li>Jira</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
