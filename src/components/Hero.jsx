import React from 'react';
import { MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import useMedia from '../hooks/useMedia';

const Hero = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  return (
    <section
      className="hero"
      style={{
        minHeight: '100svh', // ✅ mejor que 100vh en iPhone
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: isMobile ? '95px' : '80px',
        paddingBottom: isMobile ? '35px' : '0px', // ✅ evita que countdown se corte
        width: '100%',
        margin: 0
      }}
    >
      {/* Fondo sólido por si el video tarda */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0a4a42',
          zIndex: 0
        }}
      />

      {/* Video de fondo */}
      <video
        className="hero__video"
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
        <source
          src={`${import.meta.env.BASE_URL}videos/3.mp4`}
          type="video/mp4"
        />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay oscuro */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(10, 74, 66, 0.65), rgba(10, 74, 66, 0.85))',
          zIndex: 2
        }}
      />

      {/* Contenido */}
      <div
        className="hero__content"
        style={{
          textAlign: 'center',
          zIndex: 3,
          maxWidth: '900px',
          width: '100%',
          padding: isMobile ? '0 18px' : '0 40px',
          position: 'relative'
        }}
      >
        {/* Badge ubicación */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(200, 90, 62, 0.12)',
            padding: isMobile ? '8px 14px' : '10px 24px',
            borderRadius: '30px',
            marginBottom: isMobile ? '20px' : '30px',
            border: '1px solid rgba(200, 90, 62, 0.3)',
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '600',
            color: '#c85a3e',
            letterSpacing: '1px'
          }}
        >
          <MapPin size={16} />
          MOUNT TEPUY PLATEAU
        </div>

        {/* Título */}
        <h1
          style={{
            fontSize: 'clamp(42px, 10vw, 120px)', // ✅ nunca se desborda
            fontWeight: '900',
            margin: '0 0 16px 0',
            lineHeight: 0.95,
            letterSpacing: '-2px',
            background:
              'linear-gradient(135deg, #f4d35e 0%, #f5f1e8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          TEPUY RACE
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            fontSize: 'clamp(12px, 3.5vw, 22px)',
            fontWeight: '400',
            letterSpacing: isMobile ? '3px' : '8px',
            marginBottom: isMobile ? '22px' : '40px',
            color: '#f5f1e8',
            opacity: 0.9,
            fontFamily: "'Inter', sans-serif"
          }}
        >
          RUN BEYOND YOUR LIMITS
        </p>

       

        {/* Countdown */}
        <div
          style={{
            marginTop: isMobile ? '20px' : '30px'
          }}
        >
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
