import React from 'react';

const Resume = () => {
  return (
    <section className="resume-container">
      <h2>Resume</h2>
      <div className="resume-download">
        <a href={process.env.PUBLIC_URL + '/Resume.txt'} download>Download Resume</a>
      </div>
    </section>
  );
}

export default Resume;
