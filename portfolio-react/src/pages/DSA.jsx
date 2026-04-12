import React from 'react';
import DSACard from '../components/DSACard';
import portfolioData from '../data/portfolioData.json';

const DSA = () => {
  const { dsa } = portfolioData;

  return (
    <div className="container page-section">
      <h2 className="section-title">Problem Solving</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        Continuous practice in Data Structures and Algorithms has honed my problem-solving skills and optimized my code efficiency.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {dsa.leetcode && <DSACard platform="leetcode" data={dsa.leetcode} />}
        {dsa.gfg && <DSACard platform="gfg" data={dsa.gfg} />}
        {dsa.codechef && <DSACard platform="codechef" data={dsa.codechef} />}
      </div>
    </div>
  );
};

export default DSA;
