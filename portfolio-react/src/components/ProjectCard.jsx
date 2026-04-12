import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card-base" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
        {project.description}
      </p>
      
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tech.map((tech, index) => (
          <span 
            key={index} 
            style={{ 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.75rem', 
              backgroundColor: 'var(--bg-color)', 
              color: 'var(--accent-color)', 
              borderRadius: '999px',
              border: '1px solid var(--border-color)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap' }}>
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}
        >
          <Code size={18} />
          <span style={{ fontSize: '0.875rem' }}>Code</span>
        </a>
        <a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}
        >
          <ExternalLink size={18} />
          <span style={{ fontSize: '0.875rem' }}>Live Demo</span>
        </a>
        <Link 
          to={`/projects/${project.slug}`} 
          style={{ display: 'flex', alignItems: 'center', fontWeight: '500', marginLeft: 'auto', color: 'var(--accent-color)' }}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
