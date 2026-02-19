import React from 'react';
import { MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import useMedia from '../hooks/useMedia';

const Hero = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: isMobile ? '90px' : '80px',
      width: '100%',
      margin: 0
    }}>
      {/* Fallback */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: '#0a4a42',
        zIndex: 0
      }} />

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src={`${import.meta.env.BASE_URL}videos/3.mp4`} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(rgba(10, 74, 66, 0.6), rgba(10, 74, 66, 0.78))',
        zIndex: 2
      }} />

      {/* Content */}
      <div style={{
        textAlign: 'center',
        zIndex: 3,
        maxWidth: '900px',
        width: '100%',
        padding: isMobile ? '0 18px' : '0 40px',
        animation: 'fadeInUp 1s ease-out',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(200, 90, 62, 0.1)',
          padding: isMobile ? '8px 14px' : '10px 24px',
          borderRadius: '30px',
          marginBottom: isMobile ? '18px' : '30px',
          border: '1px solid rgba(200, 90, 62, 0.2)',
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '12px' : '14px',
          fontWeight: '600',
          color: '#c85a3e',
          letterSpacing: '1px'
        }}>
          <MapPin size={16} />
          MOUNT TEPUY PLATEAU
        </div>

        <h1 style={{
          fontSize: 'clamp(44px, 10vw, 120px)', // 👈 NO se desborda en móvil
          fontWeight: '900',
          margin: '0 0 14px 0',
          lineHeight: 0.95,
          letterSpacing: '-2px',
          background: 'linear-gradient(135deg, #f4d35e 0%, #f5f1e8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          TEPUY RACE
        </h1>

        <p style={{
          fontSize: 'clamp(12px, 3.5vw, 22px)',
          fontWeight: '400',
          letterSpacing: isMobile ? '3px' : '8px',
          marginBottom: isMobile ? '20px' : '40px',
          color: '#f5f1e8',
          opacity: 0.85,
          fontFamily: "'Inter', sans-serif"
        }}>
          RUN BEYOND YOUR LIMITS
        </p>

        <button style={{
          backgroundColor: '#c85a3e',
          color: '#f5f1e8',
          border: 'none',
          padding: isMobile ? '14px 26px' : '18px 50px',
          borderRadius: '35px',
          cursor: 'pointer',
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '700',
          letterSpacing: '1.2px',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(200, 90, 62, 0.3)',
          fontFamily: "'Inter', sans-serif",
          animation: 'pulse 2s ease-in-out infinite',
          maxWidth: '100%'
        }}>
          REGISTER NOW
        </button>

        <div style={{ marginTop: isMobile ? '18px' : '26px' }}>
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
