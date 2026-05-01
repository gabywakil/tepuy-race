import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import logoImage from '../assets/logo.png';
import logoImageWebp from '../assets/logo.webp';

const Navbar = ({ scrollY }) => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const scrolled = scrollY > 50;
  const links = [
    { to: '/',          label: 'Home' },
    { to: '/about',     label: 'About' },
    { to: '/projects',  label: 'Projects' },
    { to: '/sponsors',  label: 'Sponsors' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        @keyframes navSlideDown {
          from { opacity:0; transform:translateY(-14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes navMenuSlide {
          from { opacity:0; transform:translateY(-10px) scale(0.97); }
          to   { opacity:1; transform:translateY(0)   scale(1); }
        }
        @keyframes navRegisterPulse {
          0%,100% { box-shadow: 0 4px 15px rgba(200,90,62,0.3); }
          50%      { box-shadow: 0 4px 28px rgba(200,90,62,0.55); }
        }
        @keyframes navLogoIn {
          from { opacity:0; transform:translateX(-12px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .nav-link {
          position: relative;
          color: #f5f1e8;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding-bottom: 3px;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .nav-link::after {
          content:'';
          position:absolute;
          bottom:0; left:0;
          width:0; height:2px;
          background: linear-gradient(90deg,#c85a3e,#f4d35e);
          border-radius:2px;
          transition: width 0.28s ease;
        }
        .nav-link:hover { opacity:1; }
        .nav-link:hover::after { width:100%; }
        .nav-link.active::after { width:100%; }
        .nav-link.active { opacity:1; }
        .nav-register {
          background-color: #c85a3e;
          color: #f5f1e8;
          border: none;
          padding: 12px 28px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Inter',sans-serif;
          letter-spacing: 0.5px;
          animation: navRegisterPulse 3s ease-in-out infinite;
          transition: transform 0.2s, background-color 0.2s;
        }
        .nav-register:hover {
          transform: translateY(-2px) scale(1.04);
          background-color: #d4664a;
          animation: none;
          box-shadow: 0 8px 24px rgba(200,90,62,0.45);
        }
        .nav-mobile-link {
          display:flex;
          align-items:center;
          padding:14px 16px;
          border-radius:12px;
          color:#f5f1e8;
          text-decoration:none;
          font-family:'Inter',sans-serif;
          font-weight:600;
          font-size:15px;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
          position:relative;
        }
        .nav-mobile-link::before {
          content:'';
          position:absolute;
          left:0; top:20%; bottom:20%;
          width:3px; border-radius:2px;
          background:#c85a3e;
          transform:scaleY(0);
          transition:transform 0.2s;
        }
        .nav-mobile-link:hover {
          background-color:rgba(244,211,94,0.08);
          color:#f4d35e;
          transform:translateX(4px);
        }
        .nav-mobile-link:hover::before { transform:scaleY(1); }
      `}</style>

      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        backgroundColor: scrolled ? 'rgba(10,74,66,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition:'background-color 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
        borderBottom: scrolled ? '1px solid rgba(200,90,62,0.12)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
        opacity: mounted ? 1 : 0,
        animation: mounted ? 'navSlideDown 0.6s ease forwards' : 'none',
      }}>
        <div style={{
          maxWidth:'1200px', margin:'0 auto',
          padding: isMobile ? '14px 16px' : '18px 40px',
          display:'flex', justifyContent:'space-between', alignItems:'center', gap:'12px',
        }}>
          {/* Logo */}
          <Link to="/" style={{
            display:'flex', alignItems:'center', gap:'10px', textDecoration:'none',
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'navLogoIn 0.5s 0.2s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            <picture>
              <source srcSet={logoImageWebp} type="image/webp" />
              <img
              src={logoImage} alt="Tepuy Race Logo"
              style={{
                height: isMobile ? '38px' : '48px', width:'auto',
                transition:'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform='rotate(-4deg) scale(1.06)'}
              onMouseLeave={e => e.currentTarget.style.transform='rotate(0deg) scale(1)'}
              />
            </picture>
            <span style={{
              fontSize: isMobile ? '18px' : '23px',
              fontWeight:'700', color:'#c85a3e',
              letterSpacing:'1px',
              fontFamily:"'Playfair Display',serif",
              whiteSpace:'nowrap',
            }}>
              TEPUY RACE
            </span>
          </Link>

          {/* Right */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            {/* Desktop links */}
            {!isMobile && (
              <div style={{ display:'flex', gap:'32px', alignItems:'center' }}>
                {links.map(({ to, href, label }) =>
                  href ? (
                    <a key={label} href={href} className="nav-link">{label}</a>
                  ) : (
                    <Link
                      key={label} to={to}
                      className={`nav-link${location.pathname === to ? ' active' : ''}`}
                    >
                      {label}
                    </Link>
                  )
                )}

              </div>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button
                onClick={() => setOpen(v => !v)}
                style={{
                  width:'44px', height:'44px', borderRadius:'12px',
                  border:'1px solid rgba(244,211,94,0.25)',
                  background: scrolled ? 'rgba(10,74,66,0.8)' : 'rgba(10,74,66,0.55)',
                  color:'#f5f1e8',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  cursor:'pointer', backdropFilter:'blur(10px)',
                  transition:'border-color 0.2s, background-color 0.2s',
                }}
                aria-label="Open menu"
              >
                {open
                  ? <X size={22} style={{ transition:'transform 0.3s', transform:'rotate(90deg)' }} />
                  : <Menu size={22} style={{ transition:'transform 0.3s' }} />
                }
              </button>
            )}
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMobile && open && (
          <div style={{
            position:'absolute', top:'68px', left:'12px', right:'12px',
            backgroundColor:'rgba(8,60,54,0.98)',
            border:'1px solid rgba(244,211,94,0.2)',
            borderRadius:'20px', padding:'10px',
            boxShadow:'0 24px 60px rgba(0,0,0,0.3)',
            backdropFilter:'blur(16px)',
            animation:'navMenuSlide 0.28s cubic-bezier(0.16,1,0.3,1) forwards',
          }}>
            {/* divider top */}
            <div style={{
              height:'1px', margin:'0 12px 10px',
              background:'linear-gradient(90deg,transparent,rgba(244,211,94,0.2),transparent)',
            }}/>

            {links.map(({ to, href, label }, i) =>
              href ? (
                <a key={label} href={href} className="nav-mobile-link"
                  onClick={() => setOpen(false)}
                  style={{ animationDelay:`${i*0.04}s` }}
                >{label}</a>
              ) : (
                <Link key={label} to={to} className="nav-mobile-link"
                  onClick={() => setOpen(false)}
                  style={{ animationDelay:`${i*0.04}s` }}
                >{label}</Link>
              )
            )}


          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
