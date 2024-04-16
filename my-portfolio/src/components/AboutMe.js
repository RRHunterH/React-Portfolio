import React from 'react';

const AboutMe = () => {
  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 100px)', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`, backgroundSize: 'cover' }}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#fff' }}>About Me</h2>
        <div>
          <img src="/icon.png" alt="Developer's Avatar" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p style={{ color: '#fff' }}>Hi my name is Hunter, I am a developer currently going to Michigan State University to become a full-stack web developer.</p>
          </div>
      </div>
    </section>
  );
}

export default AboutMe;