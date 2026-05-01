import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';

import logoVenetur from '../assets/logo-venetur.png';
import logoVeneturWebp from '../assets/logo-venetur.webp';
import logoMarea from '../assets/logo-marea.png';
import logoMareaWebp from '../assets/logo-marea.webp';
import logoMintur from '../assets/logo-mintur.png';
import logoMinturWebp from '../assets/logo-mintur.webp';



const MainSponsors = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef, gridVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.3);

  const mainSponsors = [
    { name: "Venetur", tier: "PRINCIPAL", logo: logoVenetur, logoWebp: logoVeneturWebp },
    { name: "Marea",   tier: "PRINCIPAL", logo: logoMarea,   logoWebp: logoMareaWebp },
    { name: "Mintur",  tier: "PRINCIPAL", logo: logoMintur,  logoWebp: logoMinturWebp },
  ];

  return (
    <section style={{
      padding: isMobile ? '70px 18px' : '100px 40px',
      backgroundColor: 'transparent',
      width: '100%',
      margin: 0,
      borderTop: '1px solid rgba(244,211,94,0.2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes msFadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes msBadgePop { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes msShimmer  {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes msGlow {
          0%,100% { box-shadow: 0 20px 50px rgba(244,211,94,0.18); }
          50%      { box-shadow: 0 28px 70px rgba(244,211,94,0.38); }
        }
        @keyframes msLineExpand { from{width:0} to{width:50px} }
        .ms-card { transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; }
        .ms-card:hover { transform: translateY(-8px) !important; border-color: #f4d35e !important; background-color: rgba(245,241,232,0.16) !important; }
        .ms-cta-btn { transition: background-color 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s; }
        .ms-cta-btn:hover { background-color: #f4d35e !important; color: #0a4a42 !important; transform: translateY(-2px) !important; box-shadow: 0 8px 24px rgba(244,211,94,0.3) !important; }
        .ms-logo-box img { transition: transform 0.3s ease; }
        .ms-card:hover .ms-logo-box img { transform: scale(1.05); }
      `}</style>

      {/* ambient orb */}
      <div style={{
        position:'absolute', top:'-80px', left:'50%', transform:'translateX(-50%)',
        width:'600px', height:'200px',
        background:'radial-gradient(ellipse, rgba(244,211,94,0.06) 0%, transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom: isMobile ? '40px' : '70px' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            backgroundColor:'rgba(244,211,94,0.1)',
            padding: isMobile ? '8px 18px' : '10px 24px',
            borderRadius:'30px', marginBottom:'18px',
            border:'1px solid rgba(244,211,94,0.3)',
            fontFamily:"'Inter',sans-serif", fontSize: isMobile ? '12px' : '13px',
            fontWeight:'700', color:'#f4d35e', letterSpacing:'1.5px',
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'msBadgePop 0.5s ease forwards' : 'none',
          }}>
            <Award size={16}/> NUESTROS ALIADOS
          </div>

          <h2 style={{
            fontSize: isMobile ? '42px' : '56px',
            fontWeight:'900', marginBottom:'14px', lineHeight:'1.05', color:'#f5f1e8',
            fontFamily:"'Playfair Display',serif",
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'msFadeUp 0.65s 0.1s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Sponsors{' '}
            <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Principales</span>
          </h2>

          {/* accent line */}
          <div style={{
            width:'50px', height:'2px', margin:'0 auto 18px',
            background:'linear-gradient(90deg,transparent,#f4d35e,transparent)',
            borderRadius:'2px',
            animation: headerVisible ? 'msLineExpand 0.7s 0.3s ease forwards' : 'none',
            animationFillMode:'both',
          }}/>

          <p style={{
            fontSize: isMobile ? '16px' : '18px', color:'#f5f1e8', opacity: headerVisible ? 0.85 : 0,
            maxWidth:'650px', margin:'0 auto',
            fontFamily:"'Inter',sans-serif", lineHeight:'1.6',
            animation: headerVisible ? 'msFadeUp 0.6s 0.2s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Orgullosamente apoyados por marcas líderes que comparten nuestra pasión por el trail running.
          </p>
        </div>

        {/* ── Grid ── */}
        <div ref={gridRef} style={{
          display:'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
          gap: isMobile ? '16px' : '40px',
          alignItems:'stretch',
        }}>
          {mainSponsors.map((sponsor, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={index}
                className="ms-card"
                style={{
                  padding: isMobile ? '26px 18px' : (isFirst ? '80px 60px' : '60px 40px'),
                  backgroundColor: isFirst ? 'rgba(244,211,94,0.1)' : 'rgba(245,241,232,0.08)',
                  borderRadius:'25px', textAlign:'center',
                  border: isFirst ? '3px solid #f4d35e' : '2px solid rgba(244,211,94,0.3)',
                  boxShadow: isFirst ? '0 20px 50px rgba(244,211,94,0.2)' : '0 10px 30px rgba(0,0,0,0.2)',
                  cursor:'pointer',
                  transform: !isMobile && isFirst ? 'scale(1.05)' : 'scale(1)',
                  opacity: gridVisible ? 1 : 0,
                  animation: gridVisible ? `msFadeUp 0.65s ${index * 0.12}s ease forwards` : 'none',
                  animationFillMode:'both',
                  animationName: isFirst && gridVisible ? 'msFadeUp, msGlow' : gridVisible ? 'msFadeUp' : 'none',
                  animationDuration: isFirst ? '0.65s, 3s' : '0.65s',
                  animationDelay: isFirst ? `${index*0.12}s, 1s` : `${index*0.12}s`,
                  animationTimingFunction: isFirst ? 'ease, ease-in-out' : 'ease',
                  animationFillMode: isFirst ? 'both, forwards' : 'both',
                  animationIterationCount: isFirst ? '1, infinite' : '1',
                }}
              >
                {/* ── Badge de tier (todos) ── */}
                {isFirst ? (
                  <div style={{
                    display:'inline-block',
                    background:'linear-gradient(90deg,#f4d35e,#fff8dc,#f4d35e)',
                    backgroundSize:'200% 100%',
                    animation:'msShimmer 2.5s linear infinite',
                    color:'#0a4a42',
                    padding:'6px 20px', borderRadius:'20px',
                    fontSize:'11px', fontWeight:'800', letterSpacing:'1.5px',
                    marginBottom:'16px', fontFamily:"'Inter',sans-serif",
                  }}>
                    {sponsor.tier}
                  </div>
                ) : (
                  <div style={{
                    display:'inline-block',
                    background:'linear-gradient(90deg,rgba(244,211,94,0.3),rgba(244,211,94,0.1),rgba(244,211,94,0.3))',
                    backgroundSize:'200% 100%',
                    animation:'msShimmer 2.5s linear infinite',
                    color:'#f4d35e',
                    padding:'5px 18px', borderRadius:'20px',
                    fontSize:'11px', fontWeight:'800', letterSpacing:'1.5px',
                    marginBottom:'14px', fontFamily:"'Inter',sans-serif",
                    border:'1px solid rgba(244,211,94,0.4)',
                  }}>
                    {sponsor.tier}
                  </div>
                )}

                {/* ── Logo ── */}
                <div
                  className="ms-logo-box"
                  style={{
                    width:'100%',
                    height: isMobile ? '180px' : (isFirst ? '260px' : '200px'),
                    backgroundColor:'rgba(255,255,255,0.9)',
                    borderRadius:'15px',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    marginBottom:'12px',
                    overflow:'hidden',
                    padding:'12px',
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    style={{
                      maxWidth:'85%',
                      maxHeight:'85%',
                      objectFit:'contain',
                      display:'block',
                    }}
                  />
                </div>

                {/* ── Nombre ── */}
                <div style={{
                  fontSize: isMobile ? '15px' : (isFirst ? '18px' : '16px'),
                  fontWeight:'700', color:'#f5f1e8',
                  fontFamily:"'Inter',sans-serif",
                }}>
                  {sponsor.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} style={{
          textAlign:'center',
          marginTop: isMobile ? '26px' : '60px',
          opacity: ctaVisible ? 1 : 0,
          animation: ctaVisible ? 'msFadeUp 0.6s ease forwards' : 'none',
        }}>
          <Link
            to="/sponsors"
            className="ms-cta-btn"
            style={{
              display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'10px',
              color:'#f4d35e', textDecoration:'none',
              fontSize:'16px', fontWeight:'700', fontFamily:"'Inter',sans-serif",
              padding: isMobile ? '14px 22px' : '15px 35px',
              border:'2px solid #f4d35e', borderRadius:'30px',
              width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? '360px' : 'none',
            }}
          >
            VER TODOS LOS PATROCINADORES <span style={{ fontSize:'20px' }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainSponsors;
