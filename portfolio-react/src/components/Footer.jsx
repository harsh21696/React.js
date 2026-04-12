import React from 'react';
import { Code, User, MessageCircle } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Footer = () => {
  const { socials } = portfolioData.personal;

  return (
    <footer style={{ 
      backgroundColor: 'var(--surface-color)', 
      borderTop: '1px solid var(--border-color)',
      padding: '2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href={socials.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <Code size={24} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <User size={24} />
          </a>
          <a href={socials.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <MessageCircle size={24} />
          </a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
