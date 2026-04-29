import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Overview from './Overview';
import InfoHub from './InfoHub';
import TrailBriefing from './TrailBriefing';
import Footer from './Footer';

const Container = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (sy / docH) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  /* parallax factor for ambient orbs */
  const px = (mousePos.x / window.innerWidth  - 0.5) * 28;
  const py = (mousePos.y / window.innerHeight - 0.5) * 28;

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Playfair Display', serif",
        backgroundColor: 'transparent',
        color: '#f5f1e8',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* ── scroll progress bar ── */
        #ct-progress-bar {
          position: fixed;
          top: 0; left: 0;
          height: 3px;
          z-index: 9999;
          background: linear-gradient(90deg, #c85a3e, #f4d35e, #c85a3e);
          background-size: 200% 100%;
          animation: progressShimmer 2.5s linear infinite;
          transition: width 0.1s linear;
          border-radius: 0 2px 2px 0;
          box-shadow: 0 0 10px rgba(200,90,62,0.6), 0 0 20px rgba(244,211,94,0.3);
        }

        @keyframes progressShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* ── global float ── */
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33%       { transform: translate(30px, -30px) rotate(2deg); }
          66%       { transform: translate(-20px, 20px) rotate(-2deg); }
        }

        /* ── fade in up ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── section divider wave ── */
        @keyframes waveShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* ── ambient orb drift ── */
        @keyframes orbDrift1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(40px, -50px) scale(1.08); }
          70%       { transform: translate(-30px, 30px) scale(0.95); }
        }
        @keyframes orbDrift2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          35%       { transform: translate(-50px, 40px) scale(1.05); }
          75%       { transform: translate(35px, -25px) scale(0.97); }
        }
        @keyframes orbDrift3 {
          0%, 100% { transform: translate(0px, 0px); }
          50%       { transform: translate(20px, -40px); }
        }

        /* ── noise grain overlay ── */
        @keyframes grainShift {
          0%,100% { transform: translate(0,0); }
          10%      { transform: translate(-2%,-3%); }
          20%      { transform: translate(3%,2%); }
          30%      { transform: translate(-1%,4%); }
          40%      { transform: translate(4%,-1%); }
          50%      { transform: translate(-3%,3%); }
          60%      { transform: translate(1%,-2%); }
          70%      { transform: translate(-4%,1%); }
          80%      { transform: translate(2%,4%); }
          90%      { transform: translate(-1%,-3%); }
        }

        /* ── section dividers ── */
        .ct-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(244,211,94,0.08) 20%,
            rgba(244,211,94,0.22) 50%,
            rgba(244,211,94,0.08) 80%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: waveShift 6s linear infinite;
          position: relative;
          z-index: 1;
        }

        /* ── cursor glow (desktop only) ── */
        #ct-cursor-glow {
          position: fixed;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,90,62,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          transform: translate(-50%, -50%);
          transition: left 0.18s ease, top 0.18s ease;
        }

        /* ── scroll-reveal utility ── */
        .ct-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ct-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ── scroll progress bar ── */}
      <div
        id="ct-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── cursor glow (hidden on touch) ── */}
      <div
        id="ct-cursor-glow"
        style={{
          left: mousePos.x,
          top:  mousePos.y,
        }}
      />

      {/* ── ambient background orbs ── */}
      {/* top-left warm orb */}
      <div style={{
        position: 'fixed',
        top: '-10vh', left: '-8vw',
        width: 'clamp(320px, 40vw, 600px)',
        height: 'clamp(320px, 40vw, 600px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,90,62,0.13) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'orbDrift1 18s ease-in-out infinite',
        transform: `translate(${px * 0.6}px, ${py * 0.6}px)`,
        transition: 'transform 0.4s ease',
      }} />

      {/* bottom-right golden orb */}
      <div style={{
        position: 'fixed',
        bottom: '-12vh', right: '-10vw',
        width: 'clamp(280px, 36vw, 550px)',
        height: 'clamp(280px, 36vw, 550px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,211,94,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'orbDrift2 22s ease-in-out infinite',
        transform: `translate(${-px * 0.4}px, ${-py * 0.4}px)`,
        transition: 'transform 0.4s ease',
      }} />

      {/* center deep green orb — subtle */}
      <div style={{
        position: 'fixed',
        top: '35%', left: '50%',
        width: 'clamp(200px, 28vw, 420px)',
        height: 'clamp(200px, 28vw, 420px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(10,74,66,0.0) 0%, rgba(13,96,82,0.07) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'orbDrift3 14s ease-in-out infinite',
        transform: `translate(calc(-50% + ${px * 0.2}px), calc(-50% + ${py * 0.2}px))`,
        transition: 'transform 0.5s ease',
      }} />

      {/* ── noise grain overlay ── */}
      <div style={{
        position: 'fixed',
        inset: '-50%',
        width: '200%', height: '200%',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
        opacity: 0.022,
        pointerEvents: 'none',
        zIndex: 1,
        animation: 'grainShift 0.4s steps(1) infinite',
        mixBlendMode: 'overlay',
      }} />

      {/* ── content ── */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar scrollY={scrollY} />
        <Hero />

        <div className="ct-divider" />
        <About />

        <div className="ct-divider" />
        <Overview />

        <div className="ct-divider" />
        <InfoHub />

        <div className="ct-divider" />
        <TrailBriefing />

        <div className="ct-divider" />
        <Footer />
      </div>
    </div>
  );
};

export default Container;
