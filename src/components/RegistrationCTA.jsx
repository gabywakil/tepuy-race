import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, MapPin, Users } from 'lucide-react';

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

const RegistrationCTA = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sectionRef, visible] = useInView(0.1);

  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const highlights = [
    { icon: Calendar, text: "Evento: 15 de octubre, 2024" },
    { icon: MapPin,   text: "Monte Tepuy (Meseta), Venezuela" },
    { icon: Users,    text: "Cupos limitados: 500 corredores" },
  ];

  const goToRaceSelection = (e) => {
    // Registration temporarily disabled — tickets via external platform
  };

  return (
    <section style={{
      padding: isMobile ? '70px 16px' : '120px 40px',
      backgroundColor:'transparent', width:'100%', margin:0,
      position:'relative', overflow:'hidden',
    }}>
      <style>{`
        @keyframes ctaFadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ctaFadeRight{ from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes ctaFadeLeft { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes ctaBoxIn    { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes ctaBtnPulse {
          0%,100% { box-shadow:0 10px 35px rgba(200,90,62,0.4); }
          50%      { box-shadow:0 14px 50px rgba(200,90,62,0.65), 0 0 0 6px rgba(200,90,62,0.12); }
        }
        @keyframes ctaBadgeBlink {
          0%,100% { opacity:1; }
          50%      { opacity:0.7; }
        }
        @keyframes ctaShimmer {
          0%   { background-position:-200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ctaBorderGlow {
          0%,100% { box-shadow:0 30px 80px rgba(0,0,0,0.3); }
          50%      { box-shadow:0 30px 80px rgba(0,0,0,0.3), 0 0 50px 4px rgba(244,211,94,0.1); }
        }
        .cta-main-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
          animation: ctaBtnPulse 2.8s ease-in-out infinite;
        }
        .cta-main-btn:hover {
          transform: translateY(-3px) scale(1.02) !important;
          background-color: #d4664a !important;
          animation: none !important;
          box-shadow: 0 16px 48px rgba(200,90,62,0.55) !important;
        }
        .cta-highlight { transition: transform 0.25s ease; }
        .cta-highlight:hover { transform: translateX(4px); }
      `}</style>

      {/* background radials */}
      <div style={{
        position:'absolute', inset:0,
        background:`
          radial-gradient(circle at 15% 50%, rgba(244,211,94,0.04), transparent 50%),
          radial-gradient(circle at 85% 50%, rgba(200,90,62,0.04), transparent 50%)
        `,
        pointerEvents:'none',
      }}/>

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>
        <div
          ref={sectionRef}
          style={{
            padding: isMobile ? '26px 18px' : '80px 70px',
            backgroundColor:'rgba(245,241,232,0.05)',
            borderRadius: isMobile ? '22px' : '35px',
            border:'3px solid #f4d35e',
            position:'relative', overflow:'hidden',
            opacity: visible ? 1 : 0,
            animation: visible ? 'ctaBoxIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards, ctaBorderGlow 5s 1s ease-in-out infinite' : 'none',
            animationFillMode:'both, forwards',
            animationIterationCount:'1, infinite',
          }}
        >
          {/* corner glow */}
          <div style={{
            position:'absolute', top:0, right:0,
            width: isMobile ? '120px' : '220px',
            height: isMobile ? '120px' : '220px',
            background:'radial-gradient(circle at top right,rgba(244,211,94,0.14),transparent 70%)',
            pointerEvents:'none',
          }}/>
          <div style={{
            position:'absolute', bottom:0, left:0,
            width:'160px', height:'160px',
            background:'radial-gradient(circle at bottom left,rgba(200,90,62,0.08),transparent 70%)',
            pointerEvents:'none',
          }}/>

          {/* top shimmer line */}
          <div style={{
            position:'absolute', top:0, left:'10%', right:'10%',
            height:'2px',
            background:'linear-gradient(90deg,transparent,#f4d35e 40%,#c85a3e 60%,transparent)',
            backgroundSize:'200% 100%',
            animation:'ctaShimmer 3s linear infinite',
          }}/>

          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
            gap: isMobile ? '20px' : '60px',
            alignItems:'center',
          }}>

            {/* ── Left ── */}
            <div>
              <div style={{
                display:'inline-block',
                backgroundColor:'#c85a3e', color:'#f5f1e8',
                padding:'10px 22px', borderRadius:'25px',
                fontSize: isMobile ? '12px' : '13px', fontWeight:'700',
                letterSpacing:'2px', marginBottom:'16px',
                fontFamily:"'Inter',sans-serif",
                boxShadow:'0 5px 20px rgba(200,90,62,0.3)',
                animation: visible ? 'ctaBadgeBlink 3s ease-in-out infinite' : 'none',
                opacity: visible ? 1 : 0,
                transition:'opacity 0.4s',
              }}>
                ¡INSCRIPCIONES ABIERTAS!
              </div>

              <h2 style={{
                fontSize: isMobile ? 'clamp(28px,8vw,44px)' : '52px',
                fontWeight:'900', marginBottom:'16px', lineHeight:'1.1',
                color:'#f5f1e8', fontFamily:"'Playfair Display',serif",
                opacity: visible ? 1 : 0,
                animation: visible ? 'ctaFadeRight 0.7s 0.1s ease forwards' : 'none',
                animationFillMode:'both',
              }}>
                ¿Listo para el{' '}
                <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Desafío</span>?
              </h2>

              <p style={{
                fontSize: isMobile ? '14px' : '18px', lineHeight:'1.7',
                color:'#f5f1e8', opacity: visible ? 0.85 : 0,
                marginBottom: isMobile ? '16px' : '40px',
                fontFamily:"'Inter',sans-serif",
                animation: visible ? 'ctaFadeUp 0.6s 0.2s ease forwards' : 'none',
                animationFillMode:'both',
              }}>
                Únete a atletas de todo el mundo en la experiencia de trail running más épica de Sudamérica. Los cupos son limitados.
              </p>

              {/* highlights */}
              <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginBottom: isMobile ? '16px' : '40px' }}>
                {highlights.map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="cta-highlight"
                    style={{
                      display:'flex', alignItems:'center', gap:'12px',
                      opacity: visible ? 1 : 0,
                      animation: visible ? `ctaFadeRight 0.5s ${0.25 + i*0.08}s ease forwards` : 'none',
                      animationFillMode:'both',
                    }}
                  >
                    <div style={{
                      width:'36px', height:'36px', borderRadius:'50%',
                      backgroundColor:'rgba(244,211,94,0.12)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      border:'2px solid #f4d35e', flexShrink:0,
                    }}>
                      <Icon size={16} color="#f4d35e" strokeWidth={2.5}/>
                    </div>
                    <span style={{
                      fontSize: isMobile ? '14px' : '15px', fontWeight:'600',
                      color:'#f5f1e8', fontFamily:"'Inter',sans-serif", opacity:0.9,
                    }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* benefits box */}
              <div style={{
                backgroundColor:'rgba(10,74,66,0.5)',
                padding: isMobile ? '16px' : '25px 30px',
                borderRadius:'18px', border:'1px solid rgba(244,211,94,0.2)',
                opacity: visible ? 1 : 0,
                animation: visible ? 'ctaFadeUp 0.6s 0.5s ease forwards' : 'none',
                animationFillMode:'both',
              }}>
                <div style={{
                  fontSize:'13px', fontWeight:'600', color:'#f4d35e',
                  marginBottom:'12px', fontFamily:"'Inter',sans-serif", letterSpacing:'1px',
                }}>
                  TU INSCRIPCIÓN INCLUYE:
                </div>
                <div style={{
                  display:'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap:'10px',
                }}>
                  {['Kit de corredor','Medalla finisher','Chip de cronometraje','Hidratación'].map((b, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                      <CheckCircle size={16} color="#f4d35e" strokeWidth={2.5}/>
                      <span style={{ fontSize:'14px', color:'#f5f1e8', fontFamily:"'Inter',sans-serif", opacity:0.9 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right ── */}
            <div style={{
              textAlign:'center',
              opacity: visible ? 1 : 0,
              animation: visible ? 'ctaFadeLeft 0.7s 0.2s ease forwards' : 'none',
              animationFillMode:'both',
            }}>
              <div style={{
                backgroundColor:'rgba(244,211,94,0.1)',
                padding: isMobile ? '18px' : '40px 35px',
                borderRadius:'22px', marginBottom:'18px',
                border:'2px solid rgba(244,211,94,0.4)',
              }}>
                <div style={{
                  fontSize:'13px', fontWeight:'600', color:'#f5f1e8',
                  marginBottom:'14px', fontFamily:"'Inter',sans-serif",
                  letterSpacing:'1.5px', opacity:0.75,
                }}>
                  TU AVENTURA TE ESPERA
                </div>

                <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                  {[
                    { label:'Distancias',           value:'5K · 10K · 21K' },
                    { label:'Altitud máxima',        value:'2.850 m' },
                    { label:'Desnivel acumulado',    value:'+2.600 m' },
                  ].map(({ label, value }, i) => (
                    <div
                      key={i}
                      style={{
                        padding:'14px', backgroundColor:'rgba(10,74,66,0.35)',
                        borderRadius:'12px', border:'1px solid rgba(244,211,94,0.18)',
                        opacity: visible ? 1 : 0,
                        animation: visible ? `ctaBoxIn 0.45s ${0.35 + i*0.08}s ease forwards` : 'none',
                        animationFillMode:'both',
                        transition:'background-color 0.25s,transform 0.25s',
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.backgroundColor='rgba(10,74,66,0.55)';e.currentTarget.style.transform='translateY(-2px)';}}
                      onMouseLeave={e=>{e.currentTarget.style.backgroundColor='rgba(10,74,66,0.35)';e.currentTarget.style.transform='translateY(0)';}}
                    >
                      <div style={{ fontSize:'12px', color:'#f5f1e8', opacity:0.65, marginBottom:'6px', fontFamily:"'Inter',sans-serif" }}>{label}</div>
                      <div style={{ fontSize:'18px', fontWeight:'900', color:'#f4d35e', fontFamily:"'Playfair Display',serif" }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              
           <button
  type="button"
  onClick={() => window.open('https://tepuy.b9ticketing.com', '_blank')}
  className="cta-main-btn"
  style={{
    width:'100%', backgroundColor:'#c85a3e', color:'#f5f1e8',
    border:'none',
    padding: isMobile ? '16px 18px' : '22px 40px',
    borderRadius:'50px', cursor:'pointer',
    fontSize: isMobile ? '16px' : '18px', fontWeight:'700',
    fontFamily:"'Inter',sans-serif", letterSpacing:'1px',
    display:'flex', alignItems:'center', justifyContent:'center', gap:'12px',
    marginBottom:'12px',
  }}
>
  INSCRÍBETE AHORA <ArrowRight size={22} strokeWidth={3}/>
</button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
