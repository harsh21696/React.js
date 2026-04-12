import React from 'react';
import { ExternalLink } from 'lucide-react';

const DSACard = ({ platform, data }) => {
  // Setup color and format depending on platform
  let color = 'var(--accent-color)';
  let title = platform;
  
  if (platform === 'leetcode') {
    title = 'LeetCode';
    color = '#eca116'; // LeetCode Yellow
  } else if (platform === 'gfg') {
    title = 'GeeksforGeeks';
    color = '#2f8d46'; // GFG Green
  } else if (platform === 'codechef') {
    title = 'CodeChef';
    color = '#5B4638'; // Codechef Brown
  }

  return (
    <div className="card-base" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '4px', 
        height: '100%', 
        backgroundColor: color 
      }} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginLeft: '0.5rem' }}>
          {title}
        </h3>
        <a href={data.profileUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
          <ExternalLink size={20} />
        </a>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginLeft: '0.5rem' }}>
        {data.solved && (
          <div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Problems Solved</p>
            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>{data.solved}</p>
          </div>
        )}
        
        {platform === 'leetcode' && (
          <div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Difficulty</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
              <span style={{ color: '#00b8a3' }}>{data.easy}</span> / <span style={{ color: '#ffc01e' }}>{data.medium}</span> / <span style={{ color: '#ff375f' }}>{data.hard}</span>
            </p>
          </div>
        )}
        
        {platform === 'gfg' && (
          <div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Problem Solving Rating</p>
            <p style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>{data.problemsSolvingRating}</p>
          </div>
        )}
        
        {platform === 'codechef' && (
          <>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Rating</p>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>{data.rating}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Stars</p>
              <p style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>{data.stars}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DSACard;
