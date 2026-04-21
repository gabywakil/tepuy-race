import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import useMedia from '../hooks/useMedia';

const Hero = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes heroBadge {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroTitle {
          from { opacity: 0; transform: translateY(40px) skewY(1deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes heroSub {
          from { opacity: 0; letter-spacing: 14px; }
          to   { opacity: 0.9; letter-spacing: ${isMobile ? '3px' : '8px'}; }
        }
        @keyframes heroCountdown {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroScroll {
          0%   { opacity: 0.7; transform: translateY(0); }
          60%  { opacity: 0.3; transform: translateY(8px); }
          100% { opacity: 0.7; transform: translateY(0); }
        }
        @keyframes heroLinePulse {
          0%,100% { opacity: 0.4; transform: scaleX(1); }
          50%      { opacity: 1;   transform: scaleX(1.06); }
        }
        @keyframes heroScanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(200vh); }
        }
        @keyframes heroVignette {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <section
        style={{
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: isMobile ? '95px' : '80px',
          paddingBottom: isMobile ? '35px' : '0px',
          width: '100%',
          margin: 0,
        }}
      >
        {/* ── solid bg fallback ── */}
        <div style={{ position: 'absolute', inset: 0, background: '#0a4a42', zIndex: 0 }} />

        {/* ── video ── */}
        <video
          autoPlay loop muted playsInline preload="auto"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', zIndex: 1,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        >
          <source src={`${import.meta.env.BASE_URL}videos/3.mp4`} type="video/mp4" />
        </video>

        {/* ── gradient overlay ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(170deg, rgba(10,74,66,0.55) 0%, rgba(10,74,66,0.80) 60%, rgba(10,74,66,0.95) 100%)',
          opacity: loaded ? 1 : 0,
          animation: loaded ? 'heroOverlay 1s ease forwards' : 'none',
        }} />

        {/* ── vignette edges ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,74,66,0.6) 100%)',
          pointerEvents: 'none',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.5s ease 0.5s',
        }} />

        {/* ── scanline effect (ultra-subtle) ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px)',
          pointerEvents: 'none',
        }} />

        {/* ── bottom fade to section below ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4,
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #0a4a42)',
          pointerEvents: 'none',
        }} />

        {/* ── decorative corner lines ── */}
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute', top: '100px', left: '40px', zIndex: 5,
              width: '60px', height: '1px',
              background: 'rgba(244,211,94,0.35)',
              animation: loaded ? 'heroLinePulse 3s 1s ease-in-out infinite' : 'none',
            }} />
            <div style={{
              position: 'absolute', top: '100px', left: '40px', zIndex: 5,
              width: '1px', height: '60px',
              background: 'rgba(244,211,94,0.35)',
              animation: loaded ? 'heroLinePulse 3s 1.2s ease-in-out infinite' : 'none',
            }} />
            <div style={{
              position: 'absolute', top: '100px', right: '40px', zIndex: 5,
              width: '60px', height: '1px',
              background: 'rgba(244,211,94,0.35)',
              animation: loaded ? 'heroLinePulse 3s 1.4s ease-in-out infinite' : 'none',
            }} />
            <div style={{
              position: 'absolute', top: '100px', right: '40px', zIndex: 5,
              width: '1px', height: '60px',
              background: 'rgba(244,211,94,0.35)',
              animation: loaded ? 'heroLinePulse 3s 1.6s ease-in-out infinite' : 'none',
            }} />
          </>
        )}

        {/* ── scroll hint ── */}
        {!isMobile && (
          <div style={{
            position: 'absolute', bottom: '40px', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 6,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease 2.2s',
          }}>
            <div style={{
              fontSize: '10px', letterSpacing: '3px', color: '#f5f1e8',
              opacity: 0.45, fontFamily: "'Inter', sans-serif", fontWeight: '600',
            }}>
              SCROLL
            </div>
            <div style={{
              width: '1px', height: '40px',
              background: 'linear-gradient(to bottom, rgba(244,211,94,0.6), transparent)',
              animation: loaded ? 'heroScroll 1.8s ease-in-out infinite' : 'none',
            }} />
          </div>
        )}

        {/* ── content ── */}
        <div style={{
          textAlign: 'center',
          zIndex: 5,
          maxWidth: '900px',
          width: '100%',
          padding: isMobile ? '0 18px' : '0 40px',
          position: 'relative',
        }}>

          {/* location badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(200,90,62,0.14)',
            padding: isMobile ? '8px 14px' : '10px 24px',
            borderRadius: '30px',
            marginBottom: isMobile ? '20px' : '32px',
            border: '1px solid rgba(200,90,62,0.35)',
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '11px' : '13px',
            fontWeight: '700',
            color: '#c85a3e',
            letterSpacing: '1.5px',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'heroBadge 0.6s 0.3s ease forwards' : 'none',
            animationFillMode: 'both',
            backdropFilter: 'blur(6px)',
          }}>
            <MapPin size={14} strokeWidth={2.5} />
            MOUNT TEPUY PLATEAU
          </div>

          {/* main title */}
          <h1 style={{
            fontSize: 'clamp(42px, 10vw, 120px)',
            fontWeight: '900',
            margin: '0 0 16px 0',
            lineHeight: 0.95,
            letterSpacing: '-2px',
            background: 'linear-gradient(135deg, #f4d35e 0%, #f5f1e8 55%, #f4d35e 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: loaded ? 1 : 0,
            animation: loaded
              ? 'heroTitle 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) forwards'
              : 'none',
            animationFillMode: 'both',
          }}>
            TEPUY RACE
          </h1>

          {/* subtitle */}
          <p style={{
            fontSize: 'clamp(11px, 3.5vw, 21px)',
            fontWeight: '500',
            letterSpacing: isMobile ? '3px' : '8px',
            marginBottom: isMobile ? '22px' : '40px',
            color: '#f5f1e8',
            fontFamily: "'Inter', sans-serif",
            opacity: loaded ? 0.9 : 0,
            animation: loaded ? 'heroSub 1s 0.9s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            RUN BEYOND YOUR LIMITS
          </p>

          {/* thin divider line */}
          <div style={{
            width: '40px', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(244,211,94,0.5), transparent)',
            margin: '0 auto 32px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease 1.4s',
          }} />

          {/* countdown */}
          <div style={{
            marginTop: isMobile ? '20px' : '30px',
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'heroCountdown 0.8s 1.3s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            <CountdownTimer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
