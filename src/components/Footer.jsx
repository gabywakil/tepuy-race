import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logoImage from '../assets/logo.png';
import { Link } from 'react-router-dom';
import useMedia from '../hooks/useMedia';

const Footer = () => {
  const { isMobile, isTablet } = useMedia();
  return (
    <footer style={{
      backgroundColor: '#0a4a42',
      color: '#f5f1e8',
      padding: '80px 40px 40px',
      borderTop: '2px solid rgba(244, 211, 94, 0.2)',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
gap: isMobile ? '26px' : '60px',
          gap: '60px',
          marginBottom: '60px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <img 
                src={logoImage}
                alt="Tepuy Race Logo" 
                style={{
                  height: '45px',
                  width: 'auto'
                }}
              />
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#f4d35e',
                fontFamily: "'Playfair Display', serif"
              }}>
                TEPUY RACE
              </span>
            </div>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.8',
              opacity: 0.8,
              fontFamily: "'Inter', sans-serif",
              margin: 0
            }}>
              Desafiando límites y conectando corredores aventureros en Sudamérica desde 2016.
            </p>
          </div>

          {/* Navigation */}
    {/* Navigation */}
<div>
  <h4 style={{
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '2px',
    marginBottom: '20px',
    color: '#f4d35e',
    fontFamily: "'Inter', sans-serif"
  }}>
    QUICK LINKS
  </h4>

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px'
  }}>
    <Link
      to="/"
      style={{
        color: '#f5f1e8',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'opacity 0.3s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.opacity = 1; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; }}
    >
      Home
    </Link>

    <Link
      to="/about"
      style={{
        color: '#f5f1e8',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'opacity 0.3s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.opacity = 1; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; }}
    >
      About Us
    </Link>

    <Link
      to="/projects"
      style={{
        color: '#f5f1e8',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'opacity 0.3s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.opacity = 1; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; }}
    >
      Our Projects
    </Link>

    <Link
      to="/sponsors"
      style={{
        color: '#f5f1e8',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'opacity 0.3s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.opacity = 1; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; }}
    >
      Sponsors
    </Link>

    <Link
      to="/register"
      style={{
        color: '#f5f1e8',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'opacity 0.3s'
      }}
      onMouseOver={(e) => { e.currentTarget.style.opacity = 1; }}
      onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; }}
    >
      Register
    </Link>
  </div>
</div>

          {/* Social */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '20px',
              color: '#f4d35e',
              fontFamily: "'Inter', sans-serif"
            }}>
              FOLLOW US
            </h4>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              {[
                { Icon: Instagram, link: 'https://instagram.com/tepuyrace' },
                { Icon: Facebook, link: 'https://facebook.com/tepuyrace' },
                { Icon: Youtube, link: 'https://youtube.com/@tepuyrace' },
                { Icon: Twitter, link: 'https://twitter.com/tepuyrace' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 211, 94, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(244, 211, 94, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f4d35e';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <social.Icon size={18} color="#f4d35e" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '20px',
              color: '#f4d35e',
              fontFamily: "'Inter', sans-serif"
            }}>
              LOCATION
            </h4>
            <div style={{
              fontSize: '14px',
              lineHeight: '1.8',
              opacity: 0.8,
              fontFamily: "'Inter', sans-serif"
            }}>
              <p style={{ margin: '0 0 10px 0' }}>Mount Tepuy National Park,</p>
              <p style={{ margin: '0 0 10px 0' }}>Gran Sabana, Venezuela</p>
              <p style={{ margin: '0', color: '#f4d35e', fontWeight: '600' }}>info@tepuyrace.com</p>
            </div>
          </div>
        </div>

        <div style={{
         flexDirection: isMobile ? 'column' : 'row',
gap: isMobile ? '16px' : '0',
textAlign: isMobile ? 'center' : 'left',
        }}>
          <div>© 2024 TEPUY RACE. ALL RIGHTS RESERVED</div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#" style={{ color: '#f5f1e8', textDecoration: 'none' }}>PRIVACY POLICY</a>
            <a href="#" style={{ color: '#f5f1e8', textDecoration: 'none' }}>TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
