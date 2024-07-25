import React from 'react';
import './Projects.css';

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

const Projects = () => {
  return (
    <div className="projects">
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
    </div>
  );
};

export default Projects;
