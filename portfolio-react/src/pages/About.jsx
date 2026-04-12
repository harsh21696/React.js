import React from 'react';
import portfolioData from '../data/portfolioData.json';

const About = () => {
  const { skills, experience } = portfolioData;

  return (
    <div className="container page-section">
      <h2 className="section-title">About Me</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>My Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skills.map((skill, index) => (
              <span 
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--surface-color)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '0.5rem',
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Experience</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experience.map((exp, index) => (
              <div key={index} className="card-base" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-color)', fontWeight: '500' }}>{exp.company}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{exp.duration}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
