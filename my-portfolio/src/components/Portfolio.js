import React from 'react';
import './Portfolio.css'; // Import CSS file for styling


const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <div className="background-image"></div>
      <h2 className="title">Portfolio</h2>
      <div className="projects">
        {/* Music finder */}
        <div className="project top-left">
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
         {/* Snout Route */}
         <div className="project bottom-right">
          <h3 className="project-name">Snout Route</h3>
          <img src={process.env.PUBLIC_URL + '/Snout Route.png'} alt="Project 4" className="project-image" />
          <div className="buttons">
            <a href="https://snout-route-60664b49cc33.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/JohnChewning/Snout-Route" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Weather Dashboard */}
        <div className="project top-right">
          <h3 className="project-name">Weather Dashboard</h3>
          <img src={process.env.PUBLIC_URL + 'Weather Dashboard.png'} alt="Project 2" className="project-image" />
          <div className="buttons">
            <a href="https://rrhunterh.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/RRHunterH/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Note Taker */}
        <div className="project bottom-left">
          <h3 className="project-name">Note Taker</h3>
          <img src={process.env.PUBLIC_URL + 'Note Taker.png'} alt="Project 3" className="project-image" />
          <div className="buttons">
            <a href="https://note-taker-ninc.onrender.com/" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/RRHunterH/Note-Taker" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Password Generator */}
        <div className="project bottom-right">
          <h3 className="project-name">Password Generator</h3>
          <img src={process.env.PUBLIC_URL + '/Password Generator.png'} alt="Project 4" className="project-image" />
          <div className="buttons">
            <a href="https://rrhunterh.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/RRHunterH/Password-Generator" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/*  Work Day Scheduler */}
        <div className="project bottom-left">
          <h3 className="project-name">Work Day Scheduler</h3>
          <img src={process.env.PUBLIC_URL + '/Work Day Scheduler.png'} alt="Project 3" className="project-image" />
          <div className="buttons">
            <a href="https://rrhunterh.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
              <button className="deployed-app-button">Deployed App</button>
            </a>
            <a href="https://github.com/RRHunterH/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer">
              <button className="github-repo-button">GitHub Repo</button>
            </a>
          </div>
        </div>
        {/* Project 6 */}
      </div>
    </section>
  );
}

export default Portfolio;