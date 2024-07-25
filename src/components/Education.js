import React from 'react';
import './Education.css';

const educationDetails = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of North Carolina at Charlotte',
    duration: 'Jan 2023 - May 2024',
    gpa: '3.8 / 4.0'
  },
  {
    degree: 'Bachelor of Technology in Electronics & Communication Engineering',
    institution: 'BVC College of Engineering, India',
    duration: 'June 2017 - May 2021',
    gpa: '8.27 / 10.0'
  },
  {
    degree: 'Intermediate in Maths, Physics, Chemistry',
    institution: 'Sri Chaitanya Junior College, India',
    duration: 'June 2015 - March 2017',
    gpa: '9.52 / 10'
  },
  {
    degree: 'High School',
    institution: 'Sri Shirdi Sai Vidya Niketan, India',
    duration: 'June 2002 - April 2015',
    gpa: '9.2 / 10.0'
  },
];

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationDetails.map((education, index) => (
          <div className="education-card" key={index}>
            <h3>{education.degree}</h3>
            <h4>{education.institution}</h4>
            <p className="duration">{education.duration}</p>
            <p className="gpa">GPA: {education.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
