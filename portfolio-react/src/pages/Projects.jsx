import React from 'react';
import ProjectCard from '../components/ProjectCard';
import portfolioData from '../data/portfolioData.json';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div className="container page-section">
      <h2 className="section-title">My Projects</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        Here are some of the projects I've worked on recently. They range from simple web components to full-stack applications.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
