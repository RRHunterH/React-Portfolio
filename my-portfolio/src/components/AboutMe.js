import React from 'react';

const AboutMe = () => {
  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 100px)', padding: '20px' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`, backgroundSize: 'cover' }}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2>About Me</h2>
        <div>
          <img src="/icon.png" alt="Developer's Avatar" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          <p style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    </section>
  );
}

export default AboutMe;