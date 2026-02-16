import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Overview from './Overview';
import InfoHub from './InfoHub';
import TrailBriefing from './TrailBriefing';
import Footer from './Footer';

const Container = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      fontFamily: "'Playfair Display', serif",
      backgroundColor: '#0a4a42',
      color: '#f5f1e8',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      width: '100%'
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap');
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(2deg); }
            66% { transform: translate(-20px, 20px) rotate(-2deg); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>

      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Overview />
      <InfoHub />
      <TrailBriefing />
      <Footer />
    </div>
  );
};

export default Container;