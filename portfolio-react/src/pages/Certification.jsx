import React from 'react';
import portfolioData from '../data/portfolioData.json';

const Certification = () => {
  return (
    <div className="container page-section">
      <h2 className="section-title">Certifications</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="card-base" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              backgroundColor: 'var(--accent-color)'
            }} />
            <div style={{ paddingLeft: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {cert.name}
                  </h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: '500', fontSize: '0.9rem' }}>
                    {cert.issuer}
                  </p>
                </div>
                <span style={{ 
                  backgroundColor: 'rgba(168, 85, 247, 0.1)', 
                  color: 'var(--accent-color)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {cert.date}
                </span>
              </div>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
