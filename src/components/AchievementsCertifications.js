import React from 'react';
import './AchievementsCertifications.css';

const achievementsAndCertifications = [
  'AWS Certified Developer Associate - AWS',
  'Introduction to Cloud - AWS',
  'Core Java - Internshala',
  'Artificial Intelligence - NASSCOM',
  'Mini android messenger - Sandip Foundation'
];

const AchievementsCertifications = () => {
  return (
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
  );
};

export default AchievementsCertifications;
