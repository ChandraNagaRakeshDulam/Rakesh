import React, { useState } from 'react';
import './Home.css';
import './Education.css';
import './Connect.css';
import './AchievementsCertifications.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const educationDetails = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of North Carolina at Charlotte',
    duration: 'Jan 2023 - May 2024',
    gpa: '3.8 / 4.0',
    backgroundImage: 'https://www.binswangerglass.com/app/uploads/2020/09/from_balfour_beatty_website.jpg'
  },
  {
    degree: 'Bachelor of Technology in Electronics & Communication Engineering',
    institution: 'BVC College of Engineering, India',
    duration: 'June 2017 - May 2021',
    gpa: '8.27 / 10.0',
    backgroundImage: 'https://images.collegedunia.com/public/college_data/images/appImage/13103_BVC_APP.jpg'
  },
  {
    degree: 'Intermediate in Maths, Physics, Chemistry',
    institution: 'Sri Chaitanya Junior College, India',
    duration: 'June 2015 - March 2017',
    gpa: '9.52 / 10',
    backgroundImage: 'https://content.jdmagicbox.com/comp/hyderabad/j2/040pxx40.xx40.190313230545.a4j2/catalogue/sri-chaitanya-junior-kalasala-ramanthapur-hyderabad-colleges-njpwjhfy2x.jpg'
  },
  {
    degree: 'High School',
    institution: 'Sri Shirdi Sai Vidya Niketan, India',
    duration: 'June 2002 - April 2015',
    gpa: '9.2 / 10.0',
    backgroundImage: 'https://i.ytimg.com/vi/TBUg71OfNZY/maxresdefault.jpg'
  },
];

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

const achievementsAndCertifications = [
  'AWS Certified Developer Associate - AWS',
  'Introduction to Cloud - AWS',
  'Core Java - Internshala',
  'Artificial Intelligence - NASSCOM',
  'Mini android messenger - Sandip Foundation'
];

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_tbfr2t8', 
      'template_tjukxgh', 
      formData, 
      '74lpq_HaK4XdxrzaI'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again.');
    });
  };
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
        
        <section className="skills" id="skills">
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

        <section className="education" id="education">
          <h2>Education</h2>
          <div className="education-container">
            {educationDetails.map((education, index) => (
              <div className="education-card" 
              key={index}
              style={{ '--background-image': `url(${education.backgroundImage})` }}
              >
                <div className="education-card-content">
                  <h3>{education.degree}</h3>
                  <h4>{education.institution}</h4>
                  <p className="duration">{education.duration}</p>
                  <p className="gpa">GPA: {education.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements-certifications" id="achievements-certifications">
          <h2>Achievements & Certifications</h2>
          <div className="achievements-certifications-container">
            <ul>
              {achievementsAndCertifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="badge-upload">
              <img src={`${process.env.PUBLIC_URL}/aws.png`} alt="AWS Badge" />
            </div>
          </div>
        </section>

        <section className="connect" id="connect">
          <h2>Connect</h2>
          <div className="connect-container">
            <div className="connect-image">
              <img src="https://t4.ftcdn.net/jpg/01/09/23/89/360_F_109238979_8qLUFshVRXss6meBwqudhyDCxAcURXYP.jpg" alt="Connect" className="animated-image" />
            </div>
            <div className="connect-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
