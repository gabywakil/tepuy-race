import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import logoImage from '../assets/logo.png';

const Navbar = ({ scrollY }) => {
  const { isMobile } = useMedia('(max-width: 768px)');
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
        padding: isMobile ? '14px 16px' : '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px'
      }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <img
            src={logoImage}
            alt="Tepuy Race Logo"
            style={{ height: isMobile ? '38px' : '50px', width: 'auto' }}
          />
          <span style={{
            fontSize: isMobile ? '18px' : '24px',
            fontWeight: '700',
            color: '#c85a3e',
            letterSpacing: '1px',
            fontFamily: "'Playfair Display', serif",
            whiteSpace: 'nowrap'
          }}>
            TEPUY RACE
          </span>
        </Link>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Desktop links */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              gap: '35px',
              alignItems: 'center',
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: '500'
            }}>
              <Link to="/" style={{ color: '#f5f1e8', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: '#f5f1e8', textDecoration: 'none' }}>About</Link>
              <Link to="/projects" style={{ color: '#f5f1e8', textDecoration: 'none' }}>Projects</Link>
              <Link to="/sponsors" style={{ color: '#f5f1e8', textDecoration: 'none' }}>Sponsors</Link>
              <a href="#contact" style={{ color: '#f5f1e8', textDecoration: 'none' }}>Contact</a>

              <Link to="/register" style={{ textDecoration: 'none' }}>
                <button style={{
                  backgroundColor: '#c85a3e',
                  color: '#f5f1e8',
                  border: 'none',
                  padding: '12px 28px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 4px 15px rgba(200, 90, 62, 0.3)'
                }}>
                  REGISTER NOW
                </button>
              </Link>
            </div>
          )}

          {/* Mobile button */}
          {isMobile && (
            <button
              onClick={() => setOpen(v => !v)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: '1px solid rgba(244, 211, 94, 0.25)',
                background: 'rgba(10, 74, 66, 0.65)',
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
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobile && open && (
        <div style={{
          position: 'absolute',
          top: '68px',
          left: '12px',
          right: '12px',
          backgroundColor: 'rgba(10, 74, 66, 0.98)',
          border: '1px solid rgba(244, 211, 94, 0.2)',
          borderRadius: '18px',
          padding: '12px',
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
                fontWeight: 600
              }}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              padding: '14px 12px',
              borderRadius: '12px',
              color: '#f5f1e8',
              textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
