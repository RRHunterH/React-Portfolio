import React from 'react';
import './Portfolio.css'; // Import CSS file for styling

const projects = [
  {
    name: 'Music Finder',
    image: '/Music Finder.png',
    deployedApp: 'https://fisherk19.github.io/music-explorer/',
    githubRepo: 'https://github.com/FisherK19/music-explorer'
  },
  {
    name: 'Project 2',
    image: '/placeholder.png',
    deployedApp: 'https://example.com',
    githubRepo: 'https://github.com/example/project2'
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="portfolio-container">
     <h2 style={{ fontFamily: 'Arial, sans-serif', color: '#fff' }}>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
         <div key={index} className="project">
         <h3>{project.name}</h3>
         <img src={process.env.PUBLIC_URL + project.image} alt={project.name} className="project-image" />
         <div className="buttons">
           <a href={project.deployedApp} target="_blank" rel="noopener noreferrer">
             <button className="deployed-app-button">Deployed App</button>
           </a>
           <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
             <button className="github-repo-button">GitHub Repo</button>
           </a>
         </div>
         {/* Project name displayed when hovering */}

       </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;