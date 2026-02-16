import React from 'react';
import logoImage from '../assets/logo.png';

const Navbar = ({ scrollY }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrollY > 50 ? 'rgba(10, 74, 66, 0.95)' : 'transparent',
      backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrollY > 50 ? '1px solid rgba(200, 90, 62, 0.1)' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="/" style={{
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          <img 
            src={logoImage}
            alt="Tepuy Race Logo" 
            style={{
              height: '50px',
              width: 'auto'
            }}
          />
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#c85a3e',
            letterSpacing: '1px',
            fontFamily: "'Playfair Display', serif"
          }}>
            TEPUY RACE
          </span>
        </a>
        
        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center',
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: '500'
        }}>
          <a 
            href="/" 
            style={{ 
              color: '#f5f1e8', 
              textDecoration: 'none', 
              transition: 'color 0.3s' 
            }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Home
          </a>
          <a 
            href="/about" 
            style={{ 
              color: '#f5f1e8', 
              textDecoration: 'none', 
              transition: 'color 0.3s' 
            }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            About
          </a>
          <a 
            href="/projects" 
            style={{ 
              color: '#f5f1e8', 
              textDecoration: 'none', 
              transition: 'color 0.3s' 
            }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Projects
          </a>
          <a 
            href="/sponsors" 
            style={{ 
              color: '#f5f1e8', 
              textDecoration: 'none', 
              transition: 'color 0.3s' 
            }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Sponsors
          </a>
          <a 
            href="#contact" 
            style={{ 
              color: '#f5f1e8', 
              textDecoration: 'none', 
              transition: 'color 0.3s' 
            }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Contact
          </a>
          <a href="/register">
            <button style={{
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(200, 90, 62, 0.3)',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#b04935';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(200, 90, 62, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#c85a3e';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(200, 90, 62, 0.3)';
            }}>
              REGISTER NOW
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;