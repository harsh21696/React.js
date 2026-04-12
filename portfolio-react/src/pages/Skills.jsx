import React from 'react';
import portfolioData from '../data/portfolioData.json';

const Skills = () => {
  return (
    <div className="container page-section">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {portfolioData.skills.map((skill, index) => (
          <div key={index} style={{
            background: 'var(--surface-color)',
            border: '2px solid var(--border-color)',
            borderRadius: '0.75rem',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            cursor: 'default',
            boxShadow: 'var(--shadow-sm)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.4)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
