import React, { useEffect, useRef, useState } from 'react';
import { Mountain, Users, TrendingUp, Award } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const Counter = ({ value, visible }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const raw = parseInt(value.replace(/\D/g,''), 10);
    if (!raw) return;
    let cur = 0;
    const iv = setInterval(() => {
      cur += Math.ceil(raw / 55);
      if (cur >= raw) { setDisplay(raw); clearInterval(iv); }
      else setDisplay(cur);
    }, 22);
    return () => clearInterval(iv);
  }, [visible, value]);

  return <>{value.replace(/[\d,]+/, display.toLocaleString())}</>;
};

const Overview = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [headerRef, headerVisible] = useInView(0.2);
  const [gridRef,   gridVisible]   = useInView(0.08);

  const features = [
    { icon: Mountain,   title: "Terreno Único",        description: "Recorre paisajes naturales impresionantes a través de formaciones geológicas ancestrales", stat: "2,850m", label: "Elevación",    delay: "0s"    },
    { icon: Users,      title: "Comunidad Global",     description: "Únete a corredores de más de 45 países en esta experiencia transformadora",               stat: "500+",   label: "Participantes", delay: "0.1s"  },
    { icon: TrendingUp, title: "Desafío Personal",     description: "Supera tus límites con rutas diseñadas para todos los niveles de experiencia",             stat: "3",      label: "Categorías",    delay: "0.2s"  },
    { icon: Award,      title: "Certificación Oficial",description: "Recibe reconocimiento internacional por completar este desafío épico",                     stat: "100%",   label: "Certificados",  delay: "0.3s"  },
  ];

  return (
    <section style={{
      padding: isMobile ? '90px 18px' : '120px 40px',
      backgroundColor: '#0a4a42',
      borderTop: '1px solid rgba(244,211,94,0.2)',
      borderBottom: '1px solid rgba(244,211,94,0.2)',
      width: '100%', margin: 0, overflowX: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @keyframes ovFadeUp   { from{opacity:0;transform:translateY(38px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ovBadgePop { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes ovIconSpin {
          0%   { transform:scale(0.5) rotate(-15deg); opacity:0; }
          70%  { transform:scale(1.15) rotate(4deg);  opacity:1; }
          100% { transform:scale(1)   rotate(0deg);   opacity:1; }
        }
        @keyframes ovLineExpand { from{width:0} to{width:50px} }
        @keyframes ovCardGlow {
          0%,100% { box-shadow: 0 5px 20px rgba(0,0,0,0.2); }
          50%      { box-shadow: 0 5px 20px rgba(0,0,0,0.2), 0 0 0 1px rgba(244,211,94,0.1); }
        }
        .ov-card {
          transition: transform 0.3s ease, border-color 0.3s ease,
                      background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .ov-card:hover {
          transform: translateY(-10px) !important;
          border-color: #f4d35e !important;
          background-color: rgba(245,241,232,0.18) !important;
          box-shadow: 0 20px 48px rgba(244,211,94,0.22) !important;
        }
        .ov-card:hover .ov-icon-circle {
          border-color: #f4d35e !important;
          background-color: rgba(200,90,62,0.25) !important;
        }
      `}</style>

      {/* ambient */}
      <div style={{
        position:'absolute', top:'-60px', right:'-80px',
        width:'360px', height:'360px', borderRadius:'50%',
        background:'radial-gradient(circle,rgba(200,90,62,0.07) 0%,transparent 70%)',
        pointerEvents:'none',
      }}/>

      {/* ── Header ── */}
      <div
        ref={headerRef}
        style={{ maxWidth:'1200px', margin:'0 auto', textAlign:'center', marginBottom: isMobile ? '40px' : '80px', padding: isMobile ? '0 4px' : '0' }}
      >
        <h2 style={{
          fontSize:'clamp(34px,6vw,56px)', fontWeight:'900',
          marginBottom:'16px', color:'#f5f1e8', lineHeight:1.05,
          fontFamily:"'Playfair Display',serif",
          opacity: headerVisible ? 1 : 0,
          animation: headerVisible ? 'ovFadeUp 0.65s ease forwards' : 'none',
        }}>
          ¿Por Qué{' '}
          <span style={{ color:'#c85a3e', fontStyle:'italic' }}>Tepuy Race</span>?
        </h2>

        <div style={{
          width:'50px', height:'2px', margin:'0 auto 18px',
          background:'linear-gradient(90deg,transparent,#c85a3e,transparent)',
          borderRadius:'2px',
          animation: headerVisible ? 'ovLineExpand 0.7s 0.2s ease forwards' : 'none',
          animationFillMode:'both',
        }}/>

        <p style={{
          fontSize:'clamp(14px,2.2vw,18px)', color:'#f5f1e8',
          opacity: headerVisible ? 0.72 : 0,
          maxWidth:'650px', margin:'0 auto',
          fontFamily:"'Inter',sans-serif", lineHeight:'1.7',
          animation: headerVisible ? 'ovFadeUp 0.6s 0.15s ease forwards' : 'none',
          animationFillMode:'both',
        }}>
          Más que una carrera, es una experiencia transformadora que combina desafío físico, belleza natural y comunidad global.
        </p>
      </div>

      {/* ── Cards ── */}
      <div
        ref={gridRef}
        style={{
          display:'grid',
          gridTemplateColumns: isMobile ? 'repeat(2,minmax(0,1fr))' : 'repeat(4,minmax(0,1fr))',
          gap: isMobile ? '14px' : '30px',
          maxWidth:'1200px', margin:'0 auto',
        }}
      >
        {features.map(({ icon: Icon, title, description, stat, label, delay }, index) => (
          <div
            key={index}
            className="ov-card"
            style={{
              backgroundColor:'rgba(245,241,232,0.1)',
              padding: isMobile ? '18px 14px' : '40px 30px',
              borderRadius: isMobile ? '18px' : '20px',
              textAlign:'center',
              border:'2px solid rgba(244,211,94,0.25)',
              boxShadow:'0 5px 20px rgba(0,0,0,0.2)',
              minHeight: isMobile ? '220px' : 'auto',
              display:'flex', flexDirection:'column', justifyContent:'space-between',
              cursor:'pointer',
              position:'relative', overflow:'hidden',
              opacity: gridVisible ? 1 : 0,
              animation: gridVisible ? `ovFadeUp 0.65s ${delay} ease forwards` : 'none',
              animationFillMode:'both',
            }}
          >
            {/* top shimmer */}
            <div style={{
              position:'absolute', top:0, left:'15%', right:'15%',
              height:'1px',
              background:'linear-gradient(90deg,transparent,rgba(244,211,94,0.25),transparent)',
            }}/>

            <div>
              {/* icon */}
              <div
                className="ov-icon-circle"
                style={{
                  width: isMobile ? '54px' : '70px',
                  height: isMobile ? '54px' : '70px',
                  borderRadius:'50%',
                  backgroundColor:'rgba(200,90,62,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  margin:'0 auto 16px',
                  border:'3px solid rgba(244,211,94,0.5)',
                  transition:'border-color 0.3s, background-color 0.3s',
                  opacity: gridVisible ? 1 : 0,
                  animation: gridVisible ? `ovIconSpin 0.6s ${parseFloat(delay)+0.12}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none',
                  animationFillMode:'both',
                }}
              >
                <Icon size={isMobile ? 24 : 32} color="#c85a3e" strokeWidth={2.5}/>
              </div>

              {/* stat */}
              <div style={{
                fontSize:'clamp(22px,4.8vw,36px)', fontWeight:'900',
                color:'#f4d35e', marginBottom:'4px', lineHeight:1,
                fontFamily:"'Playfair Display',serif",
              }}>
                <Counter value={stat} visible={gridVisible}/>
              </div>

              {/* label */}
              <div style={{
                fontSize:'11px', fontWeight:'600', letterSpacing:'1.5px',
                color:'#f5f1e8', opacity:0.65,
                marginBottom: isMobile ? '10px' : '20px',
                fontFamily:"'Inter',sans-serif", textTransform:'uppercase',
              }}>
                {label}
              </div>

              {/* title */}
              <h3 style={{
                fontSize: isMobile ? '16px' : '20px', fontWeight:'700',
                marginBottom:'10px', color:'#f5f1e8', lineHeight:1.15,
                fontFamily:"'Playfair Display',serif",
              }}>
                {title}
              </h3>

              {/* desc */}
              <p style={{
                fontSize: isMobile ? '12.5px' : '14px',
                lineHeight: isMobile ? '1.45' : '1.6',
                color:'#f5f1e8', opacity:0.75,
                fontFamily:"'Inter',sans-serif", margin:0,
              }}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
