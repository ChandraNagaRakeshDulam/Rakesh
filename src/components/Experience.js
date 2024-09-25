import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Summer Intern - Data Science',
    company: 'University of North Carolina at Charlotte',
    duration: 'July 2023 - Aug 2024',
    details: [
      'Delivered tutoring assistance to undergraduate data science students, resulting in an average 30% improvement in their coursework grades and project outcomes.',
      'Simplified complex data science concepts for students, leading to a 25% increase in class participation and a 20% improvement in exam scores.',
      'Provided expert advice in data analysis and Python programming to students, enhancing their skill levels and contributing to a 40% increase in the successful completion of data analysis projects.',
      'Collaborated with faculty and peer tutors to optimize teaching materials, resulting in a 35% increase in student satisfaction scores and a 20% reduction in the time needed to grasp key concepts.'
    ]
  },

  {
    title: 'Application Development Associate',
    company: 'Accenture Solutions, Hyderabad India.',
    duration: 'Sep 2021 – Dec 2022',
    details: [
      'Contributed as a Java Developer in the Shiseido Transformations project for one of the top cosmetics companies, improving operational efficiency by over 20%.',
      'Upgraded a web-based application using Java technologies for generating warehouse reports, significantly boosting the system\'s functionality and reporting capabilities by 40%.',
      'Collaborated with a 10-member multidisciplinary team, ensuring solutions were delivered on time and met client expectations, enhancing project delivery efficiency by 15%.',
      'Improved professional skill set in Java programming, report development, and form creation, leading to a 50% faster response to custom report requests.',
      'Showcased exceptional troubleshooting abilities and a commitment to quality, securing a 100% client satisfaction rate by fully meeting project requirements.'
    ]
  },
  
  {
    title: 'Graduate Teaching & Research Assistant',
    company: 'University of North Carolina at Charlotte',
    duration: 'April 2023 - May 2024',
    details: [
      'Served as a teaching assistant for the artificial intelligence course, enhancing student learning and engagement through hands-on support and instruction and creating supplementary learning materials to aid student understanding.',
      'Operated as a research assistant with a focus on continual learning, a crucial area in artificial intelligence,showing dedication to advancing this innovative field by exploring new methodologies and approaches.',
      'Played an integral role in a research team, contributing to cutting-edge projects on continual learning, pushing the frontiers of lifelong machine learning, and driving forward key research initiatives.',
      'Assisted in creating adaptive machine learning models and algorithms capable of learning from a continuous data stream, highlighting expertise in model development and algorithm optimization, and contributing to the development of new machine learning techniques.',
      'Prepared and presented research findings at prominent conferences and seminars, effectively communicating complex ideas to diverse audiences and receiving positive feedback from peers and experts.'
    ]
  },  
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
          <h2>Experience</h2>
          <div className="experience-container">
            {experiences.map((experience, index) => (
              <div className="experience-card" key={index}>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p className="duration">{experience.duration}</p>
                <ul>
                  {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
  );
};

export default Experience;
