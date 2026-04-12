import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

const EcommercePlatform = () => {
  const project = portfolioData.projects.find(p => p.slug === 'ecommerce-platform');

  if (!project) return <div className="container page-section">Project not found</div>;

  return (
    <div className="container page-section">
      <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Back to Projects
      </Link>
      
      <h1 className="section-title" style={{ textAlign: 'left', transform: 'none', left: '0' }}>{project.title}</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '800px' }}>
        {project.description}
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
          <Code size={18} /> View Source Code
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           <ExternalLink size={18} /> Visit Live Demo
        </a>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Project Overview</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          This full-stack e-commerce platform was built to handle end-to-end purchasing flows. It features a robust backend built with Node.js and Express, securely storing product data and user information within MongoDB. 
          The frontend is powered by React, providing a smooth, SPA (Single Page Application) experience allowing users to browse products, add items to the cart, and securely check out.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Technologies Used</h2>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {project.tech.map((tech, index) => (
            <span key={index} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '0.5rem', color: 'var(--text-primary)' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommercePlatform;
