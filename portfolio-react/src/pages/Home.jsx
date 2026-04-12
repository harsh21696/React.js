import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import portfolioData from '../data/portfolioData.json';

const Home = () => {
  const { name } = portfolioData.personal;

  return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      minHeight: 'calc(100vh - 80px)'
    }}>
      <div style={{
        paddingLeft: '2rem',
        borderLeft: '4px solid var(--accent-color)',
        borderTopLeftRadius: '2px',
        borderBottomLeftRadius: '2px',
        position: 'relative'
      }}>
        {/* Decorative dot at the top of the line */}
        <div style={{
          position: 'absolute',
          top: '-4px',
          left: '-10px',
          width: '16px',
          height: '16px',
          backgroundColor: 'var(--accent-color)',
          borderRadius: '50%',
          boxShadow: '0 0 10px var(--accent-color)'
        }} />

        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 5rem)', 
          fontWeight: '800', 
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
          letterSpacing: '-1px'
        }}>
          Hi, I'm <span style={{ color: 'var(--accent-color)' }}>{name.split(' ')[0]}</span> <span style={{ display: 'inline-block', animation: 'wave 2.5s infinite', transformOrigin: '70% 70%' }}>👋</span>
        </h1>
        
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          fontWeight: '700', 
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)'
        }}>
          I'm a <span style={{ color: 'var(--accent-color)' }}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Software Engineer',
                2000,
                'Java Enthusiast',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h2>
        
        <p style={{ 
          fontSize: '1.25rem', 
          fontWeight: '500',
          color: 'var(--text-primary)',
          maxWidth: '700px',
          lineHeight: '1.6'
        }}>
          Welcome to my portfolio! Please view on desktop for an immersive UI experience.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.8 }}>
           <span style={{ fontSize: '1.5rem' }}>🖥️</span>
           <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Desktop Setup</span>
        </div>
      </div>
      <style>{`
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }  
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }  
          100% { transform: rotate( 0.0deg) }
        }
      `}</style>
    </div>
  );
};

export default Home;
