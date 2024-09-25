import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Movie Review System',
    description: 'Utilized Java for backend development, leveraging Spring Boot to create a RESTful API that handles various operations such as movie data management and review submissions, resulting in a 50% reduction in response time.',
    technologies: 'Java, Spring Boot, MongoDB, React',
    image: 'https://stylebyemilyhenderson.com/wp-content/uploads/2020/04/UpdatedEmily-Henderson-Current-Animated-Movies-1670x1541.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/MovieReviewsAPI'
  },
  {
    title: 'Mobile Application Development',
    description: 'Engineered and launched 5 mobile applications using Java, demonstrating advanced proficiency in mobile app development.',
    technologies: 'Java, Android Studio, Firebase',
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/301593427/original/a9a84a5d1509ca595965dd8582146143faba6bf4/develope-mobile-apps-for-ios-and-android.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/'
  },
  {
    title: 'Sign Language Translator',
    description: 'A pioneering sign language recognition system, facilitating essential communication for users with speech or hearing impairments by accurately interpreting and vocalizing over 10 unique sign language gestures and letters.',
    technologies: 'Python, Machine Learning, TensorFlow',
    image: 'https://d.newsweek.com/en/full/1394686/asl-getty-images.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/MachineLearning'
  },
  {
    title: 'Connect 4',
    description: 'Crafted a fully functional Connect 4 game using Java, showcasing strong creative solution finding and programming capabilities.',
    technologies: 'Java, Swing',
    image: 'https://thetoyinsider.com/wp-content/uploads/2024/02/EASTPOINT-SPORTS_GIANT-SIZED-CONNECT-4_TI_2024.webp',
    link: 'https://github.com/ChandraNagaRakeshDulam/Connect4'
  },
  {
    title: 'Geo Health Vis',
    description: 'Developed "geo health vis," a geospatial healthcare data visualization tool, enhancing health organizations\' understanding and communication of global health statistics by 40%.',
    technologies: 'JavaScript, D3.js, Leaflet',
    image: 'https://demigos.com/media/blog/upload/2021/07/13/2021-07-13-183320.png',
    link: 'https://github.com/ChandraNagaRakeshDulam/Visualization-Project'
  },
  {
    title: '3D Tic-Tac-Toe',
    description: 'Developed The 3D Tic Tac Toe project is an advanced version of the classic Tic Tac Toe game, designed to take the traditional 3x3 grid into a three-dimensional space. This innovative game adds an extra layer of complexity and strategy, challenging players to think in three dimensions.',
    technologies: 'Java, Swing',
    image: 'https://svoora.com/wp-content/uploads/2022/01/23145.jpg',
    link: 'https://github.com/ChandraNagaRakeshDulam/IS-Project'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
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
  );
};

export default Projects;
