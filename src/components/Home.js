import React from 'react';
import './Home.css';
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

const projects = [
  {
    title: 'Movie Review System',
    description: 'Utilized Java for backend development, leveraging Spring Boot to create a RESTful API that handles various operations such as movie data management and review submissions, resulting in a 50% reduction in response time.',
    technologies: 'Java, Spring Boot, MongoDB, React',
    image: 'https://stylebyemilyhenderson.com/wp-content/uploads/2020/04/UpdatedEmily-Henderson-Current-Animated-Movies-1670x1541.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/MovieReviewSystem'
  },
  {
    title: 'Mobile Application Development',
    description: 'Engineered and launched 5 mobile applications using Java, demonstrating advanced proficiency in mobile app development.',
    technologies: 'Java, Android Studio, Firebase',
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/301593427/original/a9a84a5d1509ca595965dd8582146143faba6bf4/develope-mobile-apps-for-ios-and-android.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/MobileApps'
  },
  {
    title: 'Sign Language Translator',
    description: 'A pioneering sign language recognition system, facilitating essential communication for users with speech or hearing impairments by accurately interpreting and vocalizing over 10 unique sign language gestures and letters.',
    technologies: 'Python, Machine Learning, TensorFlow',
    image: 'https://d.newsweek.com/en/full/1394686/asl-getty-images.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/SignLanguageTranslator'
  },
  {
    title: 'Connect 4',
    description: 'Crafted a fully functional Connect 4 game using Java, showcasing strong creative solution finding and programming capabilities.',
    technologies: 'Java, Swing',
    image: 'url-to-connect-4-image',
    link: 'https://github.com/ChandraNagaRakeshDulam/Connect4'
  },
  {
    title: 'Geo Health Vis',
    description: 'Developed "geo health vis," a geospatial healthcare data visualization tool, enhancing health organizations\' understanding and communication of global health statistics by 40%.',
    technologies: 'JavaScript, D3.js, Leaflet',
    image: 'url-to-geo-health-vis-image',
    link: 'https://github.com/ChandraNagaRakeshDulam/GeoHealthVis'
  }
];

const experiences = [
  {
    title: 'Application Development Associate',
    company: 'Accenture',
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
    title: 'Summer Intern - Data Science',
    company: 'University of North Carolina at Charlotte',
    duration: '2023',
    details: [
      'Delivered tutoring assistance to undergraduate data science students, resulting in an average 30% improvement in their coursework grades and project outcomes.',
      'Simplified complex data science concepts for students, leading to a 25% increase in class participation and a 20% improvement in exam scores.',
      'Provided expert advice in data analysis and Python programming to students, enhancing their skill levels and contributing to a 40% increase in the successful completion of data analysis projects.',
      'Collaborated with faculty and peer tutors to optimize teaching materials, resulting in a 35% increase in student satisfaction scores and a 20% reduction in the time needed to grasp key concepts.'
    ]
  }
  // Add more experiences as needed
];


const Home = () => {
  return (
    <div className="home">
      <div className="background-animation">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
      <div className="content">
        <section className="hero">
          <h1>Hi, I'm Rakesh.</h1>
          <div className="location">
            <span>Charlotte, NC</span>
          </div>
          <p>I am a full-stack developer with a passion for creating innovative solutions and improving user experiences.</p>
        </section>
        
        <section className="skills">
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
        </section>

        <section className="experience">
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

        <section className="projects">
          <h2>Projects</h2>
          <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
        </section>

        <section className="education">
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
        </section>
      </div>
    </div>
  );
};

export default Home;
