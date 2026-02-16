import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import logoImage from '../assets/logo.png';

const Navbar = ({ scrollY }) => {
  const { isMobile } = useMedia();
const [open, setOpen] = React.useState(false);

React.useEffect(() => {
  if (!isMobile) setOpen(false);
}, [isMobile]);
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
        padding: isMobile ? '16px 18px' : '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <img
            src={logoImage}
            alt="Tepuy Race Logo"
            style={{ height: '50px', width: 'auto' }}
          />
          <span style={{
            fontSize: isMobile ? '18px' : '24px',
            fontWeight: '700',
            color: '#c85a3e',
            letterSpacing: '1px',
            fontFamily: "'Playfair Display', serif"
          }}>
            TEPUY RACE
          </span>
        </Link>

        {/* Navigation Links */}
        <div style={{
  display: isMobile ? 'none' : 'flex',
  gap: '35px',
  alignItems: 'center',
  fontFamily: "'Inter', sans-serif",
  fontSize: '15px',
  fontWeight: '500'
        }}>
          {isMobile && (
  <button
    onClick={() => setOpen(v => !v)}
    style={{
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      border: '1px solid rgba(244, 211, 94, 0.25)',
      background: 'rgba(10, 74, 66, 0.55)',
      color: '#f5f1e8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)'
    }}
    aria-label="Open menu"
  >
    {open ? <X size={22} /> : <Menu size={22} />}
  </button>
)}
          <Link
            to="/"
            style={{ color: '#f5f1e8', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{ color: '#f5f1e8', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            About
          </Link>

          <Link
            to="/projects"
            style={{ color: '#f5f1e8', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Projects
          </Link>

          <Link
            to="/sponsors"
            style={{ color: '#f5f1e8', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Sponsors
          </Link>

          {/* Contact (ancla interna) */}
          <a
            href="#contact"
            style={{ color: '#f5f1e8', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseOver={(e) => e.target.style.color = '#f4d35e'}
            onMouseOut={(e) => e.target.style.color = '#f5f1e8'}
          >
            Contact
          </a>

          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button
              style={{
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
              }}
            >
              REGISTER NOW
            </button>
          </Link>
        </div>
      </div>
      {isMobile && open && (
  <div style={{
    position: 'absolute',
    top: '72px',
    left: '18px',
    right: '18px',
    backgroundColor: 'rgba(10, 74, 66, 0.98)',
    border: '1px solid rgba(244, 211, 94, 0.2)',
    borderRadius: '18px',
    padding: '14px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
    backdropFilter: 'blur(12px)'
  }}>
    {[
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/projects', label: 'Projects' },
      { to: '/sponsors', label: 'Sponsors' },
      { to: '/register', label: 'Register' },
    ].map((item) => (
      <Link
        key={item.to}
        to={item.to}
        onClick={() => setOpen(false)}
        style={{
          display: 'block',
          padding: '14px 12px',
          borderRadius: '12px',
          color: '#f5f1e8',
          textDecoration: 'none',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: '0.4px'
        }}
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
    </nav>
  );
};

export default Navbar;
