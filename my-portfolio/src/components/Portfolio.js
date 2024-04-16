import React from 'react';
import './Portfolio.css'; // Import CSS file for styling


const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <div className="background-image"></div>
      <h2 className="title">Portfolio</h2>
      <div className="projects">
        {/* Project 1 */}
        <div className="project">
          <h3 className="project-name">Music Finder</h3>
          <img src={process.env.PUBLIC_URL + '/Music Finder.png'} alt="Music Finder" className="project-image" />
          <div className="buttons">
            <a href="https://fisherk19.github.io/music-explorer/" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/FisherK19/music-explorer" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project">
          <h3 className="project-name">Project 2</h3>
          <img src={process.env.PUBLIC_URL + '/placeholder.png'} alt="Project 2" className="project-image" />
          <div className="buttons">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/example/project2" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="project">
          <h3 className="project-name">Project 3</h3>
          <img src={process.env.PUBLIC_URL + '/project3.png'} alt="Project 3" className="project-image" />
          <div className="buttons">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/example/project3" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Project 4 */}
        <div className="project">
          <h3 className="project-name">Project 4</h3>
          <img src={process.env.PUBLIC_URL + '/project4.png'} alt="Project 4" className="project-image" />
          <div className="buttons">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/example/project4" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;