import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <iframe 
        src="/Resume_Rakesh.pdf" 
        title="Resume" 
        className="resume-iframe"
      />
      <a href="/Resume_Rakesh.pdf" download className="download-button">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
