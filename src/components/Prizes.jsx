import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';



const Prizes = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef,  cardsVisible]  = useInView(0.08);
  const [extraRef,  extraVisible]  = useInView(0.15);

  const prizes = [
    { position:"1er Lugar", icon:Trophy, prize:"Campeón",      description:"Categoría General", color:"#f4d35e" },
    { position:"2do Lugar", icon:Medal,  prize:"Subcampeón",   description:"Categoría General", color:"#c85a3e" },
    { position:"3er Lugar", icon:Award,  prize:"Tercer Puesto",description:"Categoría General", color:"#c85a3e" },
  ];

  const additionalPrizes = [
    { category:"Mejor Tiempo Femenino" },
    { category:"Mejor Tiempo Masculino" },
    { category:"Mejor Equipo" },
  ];

  return (
    <section style={{
      padding: isMobile ? '80px 18px' : '120px 40px',
      backgroundColor:'transparent', width:'100%', margin:0,
      borderTop:'1px solid rgba(244,211,94,0.2)',
      borderBottom:'1px solid rgba(244,211,94,0.2)',
      position:'relative', overflow:'hidden',
    }}>
      <style>{`
        @keyframes prFadeUp   { from{opacity:0;transform:translateY(38px)} to{opacity:1;transform:translateY(0)} }
        @keyframes prBadgePop { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes prTrophyBounce {
          0%   { transform:scale(0.4) rotate(-12deg); opacity:0; }
          65%  { transform:scale(1.18) rotate(4deg);  opacity:1; }
          100% { transform:scale(1)   rotate(0deg);   opacity:1; }
        }
        @keyframes prShimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes prGoldGlow {
          0%,100% { box-shadow:0 25px 60px rgba(244,211,94,0.22); }
          50%      { box-shadow:0 32px 80px rgba(244,211,94,0.42); }
        }
        @keyframes prLineExpand { from{width:0} to{width:50px} }
        @keyframes prExtraIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .pr-card { transition:transform 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease; }
        .pr-card:hover { transform:translateY(-8px) !important; border-color:#f4d35e !important; }
        .pr-extra-item { transition:background-color 0.25s,transform 0.25s; }
        .pr-extra-item:hover { background-color:rgba(10,74,66,0.65) !important; transform:translateX(4px); }
      `}</style>

      {/* ambient glow */}
      <div style={{
        position:'absolute', top:'-100px', left:'50%', transform:'translateX(-50%)',
        width:'700px', height:'240px',
        background:'radial-gradient(ellipse,rgba(244,211,94,0.07) 0%,transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom: isMobile ? '42px' : '80px' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            backgroundColor:'rgba(200,90,62,0.15)',
            padding:'10px 24px', borderRadius:'30px', marginBottom:'22px',
            border:'1px solid rgba(200,90,62,0.3)',
            fontFamily:"'Inter',sans-serif", fontSize: isMobile ? '12px' : '13px',
            fontWeight:'600', color:'#c85a3e', letterSpacing:'1.5px',
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'prBadgePop 0.5s ease forwards' : 'none',
          }}>
            <Trophy size={16}/> PREMIOS Y RECONOCIMIENTOS
          </div>

          <h2 style={{
            fontSize: isMobile ? 'clamp(34px,9vw,56px)' : '56px',
            fontWeight:'900', marginBottom:'16px', lineHeight:'1.1', color:'#f5f1e8',
            fontFamily:"'Playfair Display',serif",
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'prFadeUp 0.65s 0.1s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Premios y{' '}
            <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Reconocimientos</span>
          </h2>

          <div style={{
            width:'50px', height:'2px', margin:'0 auto 18px',
            background:'linear-gradient(90deg,transparent,#f4d35e,transparent)',
            borderRadius:'2px',
            animation: headerVisible ? 'prLineExpand 0.7s 0.25s ease forwards' : 'none',
            animationFillMode:'both',
          }}/>

          <p style={{
            fontSize: isMobile ? '15px' : '18px', color:'#f5f1e8',
            opacity: headerVisible ? 0.8 : 0,
            maxWidth:'650px', margin:'0 auto',
            fontFamily:"'Inter',sans-serif", lineHeight:'1.6',
            animation: headerVisible ? 'prFadeUp 0.6s 0.2s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Reconocimiento y premios especiales para los mejores atletas en cada categoría.
          </p>
        </div>

        {/* ── Main prizes ── */}
        <div
          ref={cardsRef}
          style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
            gap: isMobile ? '18px' : '30px',
            marginBottom: isMobile ? '40px' : '70px',
          }}
        >
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            const isFirst = index === 0;
            return (
              <div
                key={index}
                className="pr-card"
                style={{
                  padding: isMobile ? '34px 22px' : (isFirst ? '60px 40px' : '50px 35px'),
                  backgroundColor: isFirst ? 'rgba(244,211,94,0.1)' : 'rgba(245,241,232,0.08)',
                  borderRadius:'25px', textAlign:'center',
                  border:`3px solid ${isFirst ? '#f4d35e' : 'rgba(244,211,94,0.3)'}`,
                  cursor:'pointer', position:'relative',
                  opacity: cardsVisible ? 1 : 0,
                  animation: cardsVisible
                    ? isFirst
                      ? `prFadeUp 0.7s ${index*0.12}s ease forwards, prGoldGlow 3s 1s ease-in-out infinite`
                      : `prFadeUp 0.65s ${index*0.12}s ease forwards`
                    : 'none',
                  animationFillMode: isFirst ? 'both, forwards' : 'both',
                  animationIterationCount: isFirst ? '1, infinite' : '1',
                }}
              >
                {/* TOP PRIZE shimmer badge */}
                {isFirst && (
                  <div style={{
                    position:'absolute',
                    top: isMobile ? '14px' : '-15px',
                    right: isMobile ? '14px' : '20px',
                    background:'linear-gradient(90deg,#f4d35e,#fff8dc,#f4d35e)',
                    backgroundSize:'200% 100%',
                    animation:'prShimmer 2.5s linear infinite',
                    color:'#0a4a42',
                    padding:'8px 16px', borderRadius:'20px',
                    fontSize:'11px', fontWeight:'700', letterSpacing:'1.2px',
                    fontFamily:"'Inter',sans-serif",
                    boxShadow:'0 5px 15px rgba(244,211,94,0.35)',
                  }}>
                    TOP PRIZE
                  </div>
                )}

                {/* icon */}
                <div style={{
                  width: isMobile ? '78px' : (isFirst ? '90px' : '75px'),
                  height: isMobile ? '78px' : (isFirst ? '90px' : '75px'),
                  borderRadius:'50%',
                  backgroundColor:`rgba(${isFirst ? '244,211,94' : '200,90,62'},0.18)`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  margin:'0 auto 22px',
                  border:`3px solid ${prize.color}`,
                  opacity: cardsVisible ? 1 : 0,
                  animation: cardsVisible
                    ? `prTrophyBounce 0.6s ${parseFloat(index*0.12)+0.15}s cubic-bezier(0.34,1.56,0.64,1) forwards`
                    : 'none',
                  animationFillMode:'both',
                }}>
                  <Icon size={isMobile ? 38 : (isFirst ? 45 : 38)} color={prize.color} strokeWidth={2.5}/>
                </div>

                <div style={{
                  fontSize: isMobile ? '16px' : (isFirst ? '20px' : '18px'),
                  fontWeight:'700', color:'#f5f1e8', marginBottom:'12px',
                  fontFamily:"'Inter',sans-serif", letterSpacing:'1px',
                }}>
                  {prize.position}
                </div>

                <div style={{
                  fontSize: isMobile ? 'clamp(24px,7vw,32px)' : (isFirst ? '32px' : '26px'),
                  fontWeight:'900', color:prize.color, marginBottom:'10px', lineHeight:'1.2',
                  fontFamily:"'Playfair Display',serif",
                }}>
                  {prize.prize}
                </div>

                <div style={{
                  fontSize:'14px', fontWeight:'600', color:'#f5f1e8',
                  opacity:0.75, fontFamily:"'Inter',sans-serif",
                }}>
                  {prize.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Additional ── */}
        <div
          ref={extraRef}
          style={{
            backgroundColor:'rgba(245,241,232,0.07)',
            padding: isMobile ? '26px' : '50px',
            borderRadius:'25px', border:'2px solid rgba(244,211,94,0.2)',
            opacity: extraVisible ? 1 : 0,
            animation: extraVisible ? 'prExtraIn 0.65s ease forwards' : 'none',
          }}
        >
          <h3 style={{
            fontSize: isMobile ? '22px' : '28px', fontWeight:'700',
            color:'#f5f1e8', marginBottom: isMobile ? '18px' : '35px',
            textAlign:'center', fontFamily:"'Playfair Display',serif",
          }}>
            Premios Adicionales
          </h3>

          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
            gap:'16px',
          }}>
            {additionalPrizes.map((item, index) => (
              <div
                key={index}
                className="pr-extra-item"
                style={{
                  display:'flex', alignItems:'center', gap:'14px',
                  padding:'18px', borderRadius:'15px',
                  backgroundColor:'rgba(10,74,66,0.4)',
                  border:'1px solid rgba(244,211,94,0.18)',
                  opacity: extraVisible ? 1 : 0,
                  animation: extraVisible ? `prFadeUp 0.5s ${index*0.1}s ease forwards` : 'none',
                  animationFillMode:'both',
                }}
              >
                <div style={{
                  width:'46px', height:'46px', borderRadius:'50%',
                  backgroundColor:'rgba(200,90,62,0.2)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  flexShrink:0, border:'2px solid #c85a3e',
                }}>
                  <Award size={22} color="#c85a3e" strokeWidth={2.5}/>
                </div>
                <div style={{
                  fontSize:'15px', fontWeight:'700', color:'#f5f1e8',
                  lineHeight:'1.35', fontFamily:"'Inter',sans-serif",
                }}>
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
