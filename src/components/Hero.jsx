import React from 'react';
import { MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      width: '100%',
      margin: 0
    }}>
      {/* Fallback Background (bottom layer) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#0a4a42',
        zIndex: 0
      }}></div>

      {/* Video Background (middle layer) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src="/videos/3.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Dark Overlay for better text readability (top of video) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(10, 74, 66, 0.6), rgba(10, 74, 66, 0.75))',
        zIndex: 2
      }}></div>

      <div style={{
        textAlign: 'center',
        zIndex: 3,
        maxWidth: '900px',
        padding: '0 40px',
        animation: 'fadeInUp 1s ease-out',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(200, 90, 62, 0.1)',
          padding: '10px 24px',
          borderRadius: '30px',
          marginBottom: '30px',
          border: '1px solid rgba(200, 90, 62, 0.2)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: '600',
          color: '#c85a3e',
          letterSpacing: '1px'
        }}>
          <MapPin size={18} />
          MOUNT TEPUY PLATEAU
        </div>

        <h1 style={{
          fontSize: '120px',
          fontWeight: '900',
          margin: '0 0 20px 0',
          lineHeight: '1',
          letterSpacing: '-2px',
          background: 'linear-gradient(135deg, #f4d35e 0%, #f5f1e8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          TEPUY RACE
        </h1>

        <p style={{
          fontSize: '22px',
          fontWeight: '400',
          letterSpacing: '8px',
          marginBottom: '40px',
          color: '#f5f1e8',
          opacity: 0.8,
          fontFamily: "'Inter', sans-serif"
        }}>
          RUN BEYOND YOUR LIMITS
        </p>

        <button style={{
          backgroundColor: '#c85a3e',
          color: '#f5f1e8',
          border: 'none',
          padding: '18px 50px',
          borderRadius: '35px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '700',
          letterSpacing: '1.5px',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(200, 90, 62, 0.3)',
          fontFamily: "'Inter', sans-serif",
          animation: 'pulse 2s ease-in-out infinite'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#b04935';
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 15px 40px rgba(200, 90, 62, 0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#c85a3e';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 30px rgba(200, 90, 62, 0.3)';
        }}>
          REGISTER NOW
        </button>

        <CountdownTimer />
      </div>
    </section>
  );
};

export default Hero;