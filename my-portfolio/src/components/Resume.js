import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-container">
      <div className="resume-background"></div>
      <h2>Resume</h2>
      <div className="resume-download">
        <a href={process.env.PUBLIC_URL + '/Resume.txt'} download>Download Resume</a>
      </div>
      <div className="proficiencies">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="proficiencies">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Sequeliz</li>
          <li>Regex</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
