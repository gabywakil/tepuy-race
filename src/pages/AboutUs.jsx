import React, { useEffect, useRef, useState } from 'react';
import { Mountain, Heart, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
    const raw = parseInt(value.replace(/\D/g, ''), 10);
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

const AboutUs = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const navigate = useNavigate();

  const [heroRef,   heroVisible]   = useInView(0.1);
  const [statsRef,  statsVisible]  = useInView(0.15);
  const [storyRef,  storyVisible]  = useInView(0.1);
  const [valRef,    valVisible]    = useInView(0.08);
  const [teamRef,   teamVisible]   = useInView(0.08);
  const [ctaRef,    ctaVisible]    = useInView(0.2);

  const team = [
    { name: "Carlos Mendoza",  role: "Fundador & Director",         description: "Trail runner con 15 años de experiencia organizando eventos de montaña" },
    { name: "María Torres",    role: "Directora de Operaciones",    description: "Experta en logística de eventos deportivos extremos" },
    { name: "Diego Ramírez",   role: "Coordinador de Rutas",        description: "Guía certificado de montaña y especialista en senderos" },
    { name: "Ana Gutiérrez",   role: "Relaciones Públicas",         description: "Conectando comunidades de runners a nivel internacional" },
  ];

  const values = [
    { icon: Mountain, title: "Respeto por la Naturaleza",  description: "Cada evento es diseñado para minimizar impacto ambiental y promover conservación" },
    { icon: Heart,    title: "Pasión por el Trail",        description: "Amamos las montañas y queremos compartir esa pasión con cada corredor" },
    { icon: Users,    title: "Comunidad Global",           description: "Construimos puentes entre corredores de todos los niveles y países" },
    { icon: Target,   title: "Excelencia Operativa",       description: "Cada detalle importa, desde la ruta hasta la última estación de hidratación" },
  ];

  const stats = [
    { number: "8+",    label: "Años de experiencia" },
    { number: "12",    label: "Eventos realizados" },
    { number: "5,000+",label: "Corredores" },
    { number: "15",    label: "Países representados" },
  ];

  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh', paddingTop: '100px', width: '100%', margin: 0, overflowX: 'hidden' }}>
      <style>{`
        @keyframes auFadeUp    { from{opacity:0;transform:translateY(38px)} to{opacity:1;transform:translateY(0)} }
        @keyframes auFadeRight { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes auFadeLeft  { from{opacity:0;transform:translateX(32px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes auBadgePop  { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes auIconSpin  {
          0%  {transform:scale(0.5)rotate(-12deg);opacity:0;}
          65% {transform:scale(1.15)rotate(3deg); opacity:1;}
          100%{transform:scale(1)  rotate(0deg);  opacity:1;}
        }
        @keyframes auImgReveal { from{opacity:0;transform:scale(0.94)translateY(18px)} to{opacity:1;transform:scale(1)translateY(0)} }
        @keyframes auLineExpand{ from{width:0} to{width:50px} }
        @keyframes auCardGlow  {
          0%,100%{box-shadow:0 0 0 0 rgba(244,211,94,0);}
          50%    {box-shadow:0 0 24px 4px rgba(244,211,94,0.12);}
        }
        @keyframes auCtaGlow {
          0%,100%{box-shadow:0 30px 80px rgba(0,0,0,0.25);}
          50%    {box-shadow:0 30px 80px rgba(0,0,0,0.25),0 0 40px 4px rgba(244,211,94,0.1);}
        }
        @keyframes auBtnPulse {
          0%,100%{box-shadow:0 10px 35px rgba(200,90,62,0.4);}
          50%    {box-shadow:0 14px 50px rgba(200,90,62,0.65),0 0 0 6px rgba(200,90,62,0.1);}
        }
        .au-value-card { transition:transform 0.3s ease,border-color 0.3s ease,background-color 0.3s ease; }
        .au-value-card:hover { transform:translateY(-6px)!important; border-color:#f4d35e!important; background-color:rgba(244,211,94,0.1)!important; }
        .au-team-card { transition:transform 0.3s ease; }
        .au-team-card:hover { transform:translateY(-10px)!important; }
        .au-stat-card { transition:transform 0.3s ease,border-color 0.3s ease; }
        .au-stat-card:hover { transform:translateY(-5px); border-color:rgba(244,211,94,0.6)!important; }
        .au-cta-btn {
          transition:transform 0.25s,background-color 0.25s,box-shadow 0.25s;
          animation: auBtnPulse 2.8s ease-in-out infinite;
        }
        .au-cta-btn:hover {
          transform:translateY(-3px)scale(1.02)!important;
          background-color:#d4664a!important;
          animation:none!important;
          box-shadow:0 16px 48px rgba(200,90,62,0.55)!important;
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ padding: isMobile ? '60px 18px 70px' : '80px 40px 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 20% 30%,rgba(244,211,94,0.05),transparent 50%),
                       radial-gradient(circle at 80% 70%,rgba(200,90,62,0.04),transparent 50%)`,
          pointerEvents: 'none',
        }} />
        {/* decorative corner lines */}
        {!isMobile && <>
          <div style={{ position:'absolute', top:'80px', left:'40px', width:'50px', height:'1px', background:'rgba(244,211,94,0.3)', animation:'auLineExpand 1s 0.5s ease forwards', animationFillMode:'both' }}/>
          <div style={{ position:'absolute', top:'80px', left:'40px', width:'1px', height:'50px', background:'rgba(244,211,94,0.3)', opacity: heroVisible ? 1 : 0, transition:'opacity 0.5s 0.6s' }}/>
        </>}

        <div ref={heroRef} style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(244,211,94,0.1)', color: '#f4d35e',
            padding: '10px 25px', borderRadius: '25px',
            fontSize: '13px', fontWeight: '700', letterSpacing: '2px', marginBottom: '22px',
            fontFamily: "'Inter',sans-serif",
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'auBadgePop 0.5s ease forwards' : 'none',
          }}>
            SOBRE NOSOTROS
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(34px,9vw,54px)' : '72px',
            fontWeight: '900', marginBottom: '18px', lineHeight: '1.02',
            color: '#f5f1e8', fontFamily: "'Playfair Display',serif", maxWidth: '900px',
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'auFadeRight 0.7s 0.1s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            Conectando{' '}
            <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Corredores</span>{' '}
            con la Montaña
          </h1>

          {/* accent line */}
          <div style={{
            width: '50px', height: '3px', marginBottom: '22px',
            background: 'linear-gradient(90deg,#f4d35e,transparent)', borderRadius: '2px',
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'auLineExpand 0.7s 0.3s ease forwards' : 'none',
            animationFillMode: 'both',
          }}/>

          <p style={{
            fontSize: isMobile ? '15px' : '22px', lineHeight: '1.8', color: '#f5f1e8',
            opacity: heroVisible ? 0.85 : 0,
            maxWidth: '720px', fontFamily: "'Inter',sans-serif", marginBottom: '30px',
            animation: heroVisible ? 'auFadeUp 0.7s 0.2s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            Desde 2016, creamos experiencias de trail running que transforman vidas,
            construyen comunidades y celebran la belleza de nuestras montañas.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)',
              gap: isMobile ? '14px' : '30px',
              marginTop: isMobile ? '26px' : '60px',
            }}
          >
            {stats.map(({ number, label }, i) => (
              <div
                key={i}
                className="au-stat-card"
                style={{
                  textAlign: 'center',
                  padding: isMobile ? '18px 12px' : '28px 20px',
                  borderRadius: '18px',
                  background: 'rgba(244,211,94,0.06)',
                  border: '1px solid rgba(244,211,94,0.18)',
                  position: 'relative', overflow: 'hidden',
                  opacity: statsVisible ? 1 : 0,
                  animation: statsVisible ? `auFadeUp 0.55s ${i*0.1}s ease forwards` : 'none',
                  animationFillMode: 'both',
                }}
              >
                <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'2px', background:'linear-gradient(90deg,transparent,#c85a3e,transparent)' }}/>
                <div style={{ fontSize: isMobile ? '32px' : '52px', fontWeight: '900', color: '#f4d35e', marginBottom: '8px', fontFamily: "'Playfair Display',serif", lineHeight: 1 }}>
                  <Counter value={number} visible={statsVisible}/>
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#f5f1e8', opacity: 0.7, letterSpacing: '1px', fontFamily: "'Inter',sans-serif" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NUESTRA HISTORIA ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px', borderTop: '1px solid rgba(244,211,94,0.2)', borderBottom: '1px solid rgba(244,211,94,0.2)' }}>
        <div
          ref={storyRef}
          style={{
            maxWidth: '1200px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '28px' : '80px',
            alignItems: 'center',
          }}
        >
          {/* image placeholder */}
          <div style={{
            height: isMobile ? '260px' : '500px',
            borderRadius: '30px',
            background: 'linear-gradient(135deg,rgba(200,90,62,0.3) 0%,rgba(244,211,94,0.3) 100%)',
            border: '4px solid #f4d35e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: '800', color: '#f5f1e8', fontFamily: "'Inter',sans-serif",
            opacity: storyVisible ? 1 : 0,
            animation: storyVisible ? 'auImgReveal 0.8s 0.1s ease forwards' : 'none',
            animationFillMode: 'both',
            boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* offset frame */}
            <div style={{ position:'absolute', top:'16px', left:'16px', right:'-16px', bottom:'-16px', borderRadius:'30px', border:'2px solid rgba(244,211,94,0.2)', zIndex:0 }}/>
            <span style={{ position:'relative', zIndex:1 }}>IMAGEN DEL EQUIPO</span>
          </div>

          {/* text */}
          <div style={{
            opacity: storyVisible ? 1 : 0,
            animation: storyVisible ? 'auFadeLeft 0.8s 0.2s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(28px,7vw,40px)' : '48px',
              fontWeight: '900', marginBottom: '6px',
              color: '#f5f1e8', fontFamily: "'Playfair Display',serif", lineHeight: '1.1',
            }}>
              Nuestra{' '}
              <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Historia</span>
            </h2>
            <div style={{ width:'50px', height:'3px', background:'linear-gradient(90deg,#c85a3e,transparent)', borderRadius:'2px', marginBottom:'24px' }}/>

            {[
              "Todo comenzó en 2016 con un grupo de amigos apasionados por el trail running y un sueño: crear el evento de montaña más espectacular de Venezuela.",
              "Lo que empezó como una carrera local de 50 participantes se ha convertido en un movimiento internacional que atrae corredores de más de 15 países cada año.",
              "Hoy, Tepuy Race es más que un evento. Es una comunidad, una familia y un compromiso de promover el deporte outdoor responsable y sostenible.",
            ].map((t, i) => (
              <p key={i} style={{
                fontSize: isMobile ? '14px' : '17px', lineHeight: '1.85',
                color: '#f5f1e8', opacity: 0.85,
                marginBottom: i === 2 ? 0 : '14px', fontFamily: "'Inter',sans-serif",
                opacity: storyVisible ? 0.85 : 0,
                animation: storyVisible ? `auFadeUp 0.5s ${0.3 + i*0.1}s ease forwards` : 'none',
                animationFillMode: 'both',
              }}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALORES ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '70px' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px,7vw,44px)' : '52px',
              fontWeight: '900', marginBottom: '14px', color: '#f5f1e8',
              fontFamily: "'Playfair Display',serif",
              opacity: valVisible ? 1 : 0,
              animation: valVisible ? 'auFadeUp 0.6s ease forwards' : 'none',
            }}>
              Nuestros <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Valores</span>
            </h2>
            <div style={{ width:'50px', height:'2px', margin:'0 auto 14px', background:'linear-gradient(90deg,transparent,#f4d35e,transparent)', borderRadius:'2px', animation: valVisible ? 'auLineExpand 0.7s 0.2s ease forwards' : 'none', animationFillMode:'both' }}/>
            <p style={{ fontSize: isMobile ? '14px' : '18px', color: '#f5f1e8', opacity: valVisible ? 0.7 : 0, fontFamily: "'Inter',sans-serif", animation: valVisible ? 'auFadeUp 0.5s 0.2s ease forwards' : 'none', animationFillMode:'both' }}>
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div
            ref={valRef}
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: isMobile ? '14px' : '30px' }}
          >
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="au-value-card"
                style={{
                  padding: isMobile ? '22px 18px' : '45px',
                  backgroundColor: 'rgba(245,241,232,0.07)',
                  borderRadius: '25px',
                  border: '2px solid rgba(244,211,94,0.25)',
                  cursor: 'pointer',
                  position: 'relative', overflow: 'hidden',
                  opacity: valVisible ? 1 : 0,
                  animation: valVisible ? `auFadeUp 0.6s ${i*0.1}s ease forwards` : 'none',
                  animationFillMode: 'both',
                }}
              >
                <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'2px', background:'linear-gradient(90deg,transparent,rgba(244,211,94,0.25),transparent)' }}/>

                <div style={{
                  width: isMobile ? '56px' : '70px', height: isMobile ? '56px' : '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244,211,94,0.12)',
                  border: '3px solid rgba(244,211,94,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '18px',
                  opacity: valVisible ? 1 : 0,
                  animation: valVisible ? `auIconSpin 0.55s ${i*0.1+0.1}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none',
                  animationFillMode: 'both',
                }}>
                  <Icon size={isMobile ? 26 : 32} color="#f4d35e" strokeWidth={2}/>
                </div>

                <h3 style={{ fontSize: isMobile ? '18px' : '24px', fontWeight: '800', color: '#f5f1e8', marginBottom: '10px', fontFamily: "'Inter',sans-serif" }}>
                  {title}
                </h3>
                <p style={{ fontSize: isMobile ? '14px' : '16px', lineHeight: '1.7', color: '#f5f1e8', opacity: 0.78, fontFamily: "'Inter',sans-serif", margin: 0 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EQUIPO ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px', backgroundColor: 'rgba(244,211,94,0.04)', borderTop: '1px solid rgba(244,211,94,0.2)', borderBottom: '1px solid rgba(244,211,94,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '70px' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px,7vw,44px)' : '52px',
              fontWeight: '900', marginBottom: '14px', color: '#f5f1e8',
              fontFamily: "'Playfair Display',serif",
              opacity: teamVisible ? 1 : 0,
              animation: teamVisible ? 'auFadeUp 0.6s ease forwards' : 'none',
            }}>
              Nuestro <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Equipo</span>
            </h2>
            <div style={{ width:'50px', height:'2px', margin:'0 auto 14px', background:'linear-gradient(90deg,transparent,#f4d35e,transparent)', borderRadius:'2px', animation: teamVisible ? 'auLineExpand 0.7s 0.2s ease forwards' : 'none', animationFillMode:'both' }}/>
            <p style={{ fontSize: isMobile ? '14px' : '18px', color: '#f5f1e8', opacity: teamVisible ? 0.7 : 0, fontFamily: "'Inter',sans-serif", animation: teamVisible ? 'auFadeUp 0.5s 0.2s ease forwards' : 'none', animationFillMode:'both' }}>
              Las personas apasionadas detrás de cada evento
            </p>
          </div>

          <div
            ref={teamRef}
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: isMobile ? '16px' : '30px' }}
          >
            {team.map(({ name, role, description }, i) => (
              <div
                key={i}
                className="au-team-card"
                style={{
                  textAlign: 'center', cursor: 'pointer',
                  opacity: teamVisible ? 1 : 0,
                  animation: teamVisible ? `auFadeUp 0.6s ${i*0.1}s ease forwards` : 'none',
                  animationFillMode: 'both',
                }}
              >
                {/* avatar placeholder */}
                <div style={{
                  width: '100%', height: isMobile ? '220px' : '280px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg,rgba(200,90,62,0.28) 0%,rgba(244,211,94,0.18) 100%)',
                  marginBottom: '16px',
                  border: '3px solid rgba(244,211,94,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: '800', color: '#f5f1e8', fontFamily: "'Inter',sans-serif",
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.3s',
                }}>
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg,transparent,rgba(244,211,94,0.4),transparent)` }}/>
                  FOTO
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f5f1e8', marginBottom: '6px', fontFamily: "'Inter',sans-serif" }}>{name}</h3>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#f4d35e', marginBottom: '10px', fontFamily: "'Inter',sans-serif", letterSpacing:'0.5px' }}>{role}</div>
                <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#f5f1e8', opacity: 0.72, fontFamily: "'Inter',sans-serif", margin: 0 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px' }}>
        <div
          ref={ctaRef}
          style={{
            maxWidth: '900px', margin: '0 auto', textAlign: 'center',
            padding: isMobile ? '34px 22px' : '70px 60px',
            backgroundColor: 'rgba(245,241,232,0.06)',
            borderRadius: '30px', border: '3px solid #f4d35e',
            position: 'relative', overflow: 'hidden',
            opacity: ctaVisible ? 1 : 0,
            animation: ctaVisible ? 'auFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards, auCtaGlow 5s 1s ease-in-out infinite' : 'none',
            animationFillMode: 'both, forwards',
            animationIterationCount: '1, infinite',
          }}
        >
          {/* corner glow */}
          <div style={{ position:'absolute', top:0, right:0, width:'200px', height:'200px', background:'radial-gradient(circle at top right,rgba(244,211,94,0.1),transparent 70%)', pointerEvents:'none' }}/>
          {/* shimmer top line */}
          <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'2px', background:'linear-gradient(90deg,transparent,#f4d35e 50%,transparent)' }}/>

          <h2 style={{
            fontSize: isMobile ? 'clamp(22px,6vw,34px)' : '42px',
            fontWeight: '900', marginBottom: '14px', color: '#f5f1e8',
            fontFamily: "'Playfair Display',serif",
            opacity: ctaVisible ? 1 : 0,
            animation: ctaVisible ? 'auFadeUp 0.6s 0.15s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            ¿Listo para unirte a la{' '}
            <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>comunidad</span>?
          </h2>

          <p style={{
            fontSize: isMobile ? '14px' : '18px', lineHeight: '1.8', color: '#f5f1e8',
            opacity: ctaVisible ? 0.8 : 0,
            marginBottom: '28px', fontFamily: "'Inter',sans-serif",
            animation: ctaVisible ? 'auFadeUp 0.6s 0.25s ease forwards' : 'none',
            animationFillMode: 'both',
            maxWidth: '600px', margin: '0 auto 28px',
          }}>
            Forma parte de la próxima generación de trail runners que están
            redefiniendo los límites de lo posible en las montañas.
          </p>

          <button
            className="au-cta-btn"
            onClick={() => navigate('/register')}
            style={{
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '420px' : 'none',
              backgroundColor: '#c85a3e', color: '#f5f1e8',
              border: 'none', padding: '18px 36px', borderRadius: '50px',
              cursor: 'pointer', fontSize: '15px', fontWeight: '800',
              fontFamily: "'Inter',sans-serif", letterSpacing: '1px',
              opacity: ctaVisible ? 1 : 0,
              animation: ctaVisible ? 'auFadeUp 0.5s 0.35s ease forwards' : 'none',
              animationFillMode: 'both',
            }}
          >
            ÚNETE A TEPUY RACE
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
