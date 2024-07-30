import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Programming Languages',
    skills: ['C', 'Java', 'Python', 'JavaScript'],
    icon: 'fas fa-code'
  },
  {
    category: 'Frontend Technologies',
    skills: ['HTML', 'CSS', 'React JS', 'Angular'],
    icon: 'fas fa-laptop-code'
  },
  {
    category: 'Backend Technologies',
    skills: ['Spring Boot', 'Spring MVC', 'REST APIs'],
    icon: 'fas fa-server'
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
    icon: 'fas fa-database'
  },
  {
    category: 'Cloud Technologies',
    skills: ['AWS EC2', 'S3 Bucket', 'Lambda'],
    icon: 'fas fa-cloud'
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Jira', 'Docker'],
    icon: 'fas fa-tools'
  }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-animation-container">
        <div className="skills-container">
          {skills.map((skillCategory, index) => (
            <div className="skill-category" key={index}>
              <i className={skillCategory.icon}></i>
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
