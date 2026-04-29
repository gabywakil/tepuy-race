import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const useInView = (threshold = 0.1) => {
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

const OurProjects = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  const [heroRef,     heroVisible]     = useInView(0.1);
  const [achievRef,   achievVisible]   = useInView(0.1);
  const [pastRef,     pastVisible]     = useInView(0.08);
  const [upcomingRef, upcomingVisible] = useInView(0.08);
  const [galleryRef,  galleryVisible]  = useInView(0.08);

  const pastEvents = [
    { year:"2024", name:"Tepuy Race Mountain Challenge", location:"Monte Roraima, Venezuela",   participants:"450", distances:"5K · 10K · 21K", highlight:"Récord de asistencia internacional" },
    { year:"2023", name:"Tepuy Ultra Trail",             location:"Gran Sabana, Venezuela",     participants:"380", distances:"10K · 21K · 42K", highlight:"Primera edición Ultra Maratón" },
    { year:"2022", name:"Tepuy Summit Series",           location:"Meseta del Monte Tepuy",     participants:"320", distances:"5K · 10K · 15K",  highlight:"Evento del año — Trail Running Venezuela" },
  ];

  const upcomingEvents = [
    { date:"Octubre 2024",  name:"Tepuy Race 2024",    status:"Inscripciones Abiertas", color:"#f4d35e" },
    { date:"Diciembre 2024",name:"Tepuy Night Trail",  status:"Próximamente",           color:"#c85a3e" },
    { date:"Marzo 2025",    name:"Tepuy Kids Run",     status:"En Planificación",       color:"#f4d35e" },
  ];

  const achievements = [
    { number:"12",    label:"Eventos realizados" },
    { number:"5,000+",label:"Corredores totales" },
    { number:"15",    label:"Países participantes" },
    { number:"98%",   label:"Satisfacción" },
  ];

  return (
    <div style={{ backgroundColor:'transparent', minHeight:'100vh', paddingTop:'100px', width:'100%', margin:0, overflowX:'hidden' }}>
      <style>{`
        @keyframes opFadeUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes opFadeRight { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes opBadgePop  { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes opSlideIn   { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:translateX(0)} }
        @keyframes opCardIn    { from{opacity:0;transform:translateY(24px)scale(0.97)} to{opacity:1;transform:translateY(0)scale(1)} }
        @keyframes opLineExpand{ from{width:0} to{width:50px} }
        @keyframes opGalleryIn { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
        @keyframes opAchievGlow {
          0%,100%{box-shadow:0 0 0 0 rgba(244,211,94,0);}
          50%    {box-shadow:0 0 20px 4px rgba(244,211,94,0.1);}
        }
        .op-past-card  { transition:transform 0.3s ease,border-color 0.3s ease,background-color 0.3s ease; }
        .op-past-card:hover { transform:translateX(10px)!important; border-color:#f4d35e!important; background-color:rgba(244,211,94,0.08)!important; }
        .op-upcoming-card { transition:transform 0.3s ease,box-shadow 0.3s ease; }
        .op-upcoming-card:hover { transform:translateY(-10px)!important; }
        .op-gallery-item { transition:transform 0.3s ease,border-color 0.3s ease; }
        .op-gallery-item:hover { transform:scale(1.06)!important; border-color:#f4d35e!important; }
        .op-achieve-card { transition:transform 0.3s,border-color 0.3s; }
        .op-achieve-card:hover { transform:translateY(-6px); border-color:rgba(244,211,94,0.6)!important; }
        .op-gallery-btn { transition:background-color 0.25s,color 0.25s,transform 0.25s; }
        .op-gallery-btn:hover { background-color:#f4d35e!important; color:#0a4a42!important; transform:translateY(-3px); }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '80px 40px', textAlign:'center' }}>
        <div ref={heroRef} style={{ maxWidth:'900px', margin:'0 auto' }}>
          <div style={{
            display:'inline-block', backgroundColor:'rgba(200,90,62,0.15)', color:'#c85a3e',
            padding:'10px 25px', borderRadius:'25px', fontSize:'13px', fontWeight:'700',
            letterSpacing:'2px', marginBottom:'26px', fontFamily:"'Inter',sans-serif",
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'opBadgePop 0.5s ease forwards' : 'none',
          }}>
            NUESTROS PROYECTOS
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(34px,9vw,54px)' : '72px',
            fontWeight:'900', marginBottom: isMobile ? '18px' : '30px',
            lineHeight:'1.02', color:'#f5f1e8', fontFamily:"'Playfair Display',serif",
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'opFadeUp 0.7s 0.1s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Creando{' '}
            <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Experiencias</span>{' '}
            Inolvidables
          </h1>

          <div style={{ width:'50px', height:'2px', margin:'0 auto 20px', background:'linear-gradient(90deg,transparent,#f4d35e,transparent)', borderRadius:'2px', animation: heroVisible ? 'opLineExpand 0.7s 0.3s ease forwards' : 'none', animationFillMode:'both' }}/>

          <p style={{
            fontSize: isMobile ? '15px' : '20px', lineHeight:'1.75', color:'#f5f1e8',
            opacity: heroVisible ? 0.85 : 0, fontFamily:"'Inter',sans-serif",
            animation: heroVisible ? 'opFadeUp 0.6s 0.25s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Desde 2016, hemos organizado eventos que desafían límites,
            construyen comunidades y celebran el espíritu del trail running.
          </p>
        </div>
      </section>

      {/* ══ LOGROS ══ */}
      <section style={{ padding: isMobile ? '40px 18px' : '60px 40px', borderTop:'1px solid rgba(244,211,94,0.2)', borderBottom:'1px solid rgba(244,211,94,0.2)' }}>
        <div
          ref={achievRef}
          style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? '14px' : '30px' }}
        >
          {achievements.map(({ number, label }, i) => (
            <div
              key={i}
              className="op-achieve-card"
              style={{
                textAlign:'center', padding: isMobile ? '18px 12px' : '30px 20px',
                backgroundColor:'rgba(245,241,232,0.06)', borderRadius:'20px',
                border:'2px solid rgba(244,211,94,0.25)', cursor:'pointer',
                position:'relative', overflow:'hidden',
                opacity: achievVisible ? 1 : 0,
                animation: achievVisible ? `opFadeUp 0.55s ${i*0.1}s ease forwards` : 'none',
                animationFillMode:'both',
              }}
            >
              <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'2px', background:'linear-gradient(90deg,transparent,rgba(244,211,94,0.3),transparent)' }}/>
              <div style={{ fontSize: isMobile ? '32px' : '48px', fontWeight:'900', color:'#f4d35e', marginBottom:'8px', fontFamily:"'Playfair Display',serif", lineHeight:1 }}>
                <Counter value={number} visible={achievVisible}/>
              </div>
              <div style={{ fontSize:'13px', fontWeight:'600', color:'#f5f1e8', opacity:0.75, letterSpacing:'1px', fontFamily:"'Inter',sans-serif" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ EVENTOS PASADOS ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ marginBottom: isMobile ? '28px' : '60px' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px,7vw,44px)' : '52px',
              fontWeight:'900', marginBottom:'14px', color:'#f5f1e8',
              fontFamily:"'Playfair Display',serif",
              opacity: pastVisible ? 1 : 0,
              animation: pastVisible ? 'opFadeRight 0.6s ease forwards' : 'none',
            }}>
              Eventos <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Pasados</span>
            </h2>
            <div style={{ width:'50px', height:'2px', background:'linear-gradient(90deg,#c85a3e,transparent)', borderRadius:'2px', animation: pastVisible ? 'opLineExpand 0.7s 0.15s ease forwards' : 'none', animationFillMode:'both' }}/>
            <p style={{ fontSize: isMobile ? '14px' : '18px', color:'#f5f1e8', opacity: pastVisible ? 0.7 : 0, fontFamily:"'Inter',sans-serif", marginTop:'12px', animation: pastVisible ? 'opFadeUp 0.5s 0.2s ease forwards' : 'none', animationFillMode:'both' }}>
              Un recorrido por nuestra historia de eventos exitosos
            </p>
          </div>

          <div ref={pastRef} style={{ display:'flex', flexDirection:'column', gap: isMobile ? '16px' : '30px' }}>
            {pastEvents.map((event, i) => (
              <div
                key={i}
                className="op-past-card"
                style={{
                  padding: isMobile ? '22px 18px' : '40px 50px',
                  backgroundColor:'rgba(245,241,232,0.07)',
                  borderRadius:'25px', border:'2px solid rgba(244,211,94,0.25)',
                  cursor:'pointer', position:'relative', overflow:'hidden',
                  opacity: pastVisible ? 1 : 0,
                  animation: pastVisible ? `opSlideIn 0.65s ${i*0.12}s ease forwards` : 'none',
                  animationFillMode:'both',
                }}
              >
                {/* year watermark */}
                <div style={{
                  position:'absolute', top: isMobile ? '10px' : '20px', right: isMobile ? '14px' : '30px',
                  fontSize: isMobile ? '44px' : '80px', fontWeight:'900',
                  color:'rgba(244,211,94,0.1)', fontFamily:"'Playfair Display',serif", lineHeight:1, pointerEvents:'none',
                }}>
                  {event.year}
                </div>

                <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: isMobile ? '18px' : '40px', position:'relative', zIndex:1 }}>
                  <div>
                    <h3 style={{ fontSize: isMobile ? '22px' : '32px', fontWeight:'900', color:'#f5f1e8', marginBottom:'16px', fontFamily:"'Playfair Display',serif" }}>
                      {event.name}
                    </h3>
                    <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'16px' }}>
                      {[{ Icon:MapPin, text:event.location },{ Icon:Users, text:`${event.participants} corredores` }].map(({ Icon, text }, j) => (
                        <div key={j} style={{ display:'flex', alignItems:'center', gap:'12px', fontSize:'14px', color:'#f5f1e8', fontFamily:"'Inter',sans-serif" }}>
                          <Icon size={18} color="#f4d35e"/>{text}
                        </div>
                      ))}
                    </div>
                    <div style={{ display:'inline-block', padding:'8px 18px', backgroundColor:'rgba(244,211,94,0.12)', border:'2px solid #f4d35e', borderRadius:'20px', fontSize:'12px', fontWeight:'700', color:'#f4d35e', fontFamily:"'Inter',sans-serif", letterSpacing:'1px' }}>
                      {event.distances}
                    </div>
                  </div>

                  <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
                    <div style={{ padding: isMobile ? '16px' : '20px 26px', backgroundColor:'rgba(200,90,62,0.14)', borderRadius:'15px', border:'2px solid rgba(200,90,62,0.45)', textAlign: isMobile ? 'left' : 'right', width: isMobile ? '100%' : 'auto' }}>
                      <Award size={22} color="#c85a3e" style={{ marginBottom:'8px' }}/>
                      <div style={{ fontSize:'14px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif", lineHeight:'1.4' }}>{event.highlight}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRÓXIMOS EVENTOS ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px', backgroundColor:'rgba(244,211,94,0.04)', borderTop:'1px solid rgba(244,211,94,0.2)', borderBottom:'1px solid rgba(244,211,94,0.2)' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ marginBottom: isMobile ? '28px' : '60px' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px,7vw,44px)' : '52px',
              fontWeight:'900', marginBottom:'14px', color:'#f5f1e8', fontFamily:"'Playfair Display',serif",
              opacity: upcomingVisible ? 1 : 0, animation: upcomingVisible ? 'opFadeRight 0.6s ease forwards' : 'none',
            }}>
              Próximos <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Eventos</span>
            </h2>
            <div style={{ width:'50px', height:'2px', background:'linear-gradient(90deg,#f4d35e,transparent)', borderRadius:'2px', animation: upcomingVisible ? 'opLineExpand 0.7s 0.15s ease forwards' : 'none', animationFillMode:'both' }}/>
            <p style={{ fontSize: isMobile ? '14px' : '18px', color:'#f5f1e8', opacity: upcomingVisible ? 0.7 : 0, fontFamily:"'Inter',sans-serif", marginTop:'12px', animation: upcomingVisible ? 'opFadeUp 0.5s 0.2s ease forwards' : 'none', animationFillMode:'both' }}>
              Lo que viene en nuestro calendario 2024–2025
            </p>
          </div>

          <div
            ref={upcomingRef}
            style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: isMobile ? '14px' : '30px' }}
          >
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="op-upcoming-card"
                style={{
                  padding: isMobile ? '24px 18px' : '40px 35px',
                  backgroundColor:'rgba(10,74,66,0.45)',
                  borderRadius:'25px', border:`3px solid ${event.color}`,
                  cursor:'pointer', textAlign:'center',
                  position:'relative', overflow:'hidden',
                  opacity: upcomingVisible ? 1 : 0,
                  animation: upcomingVisible ? `opCardIn 0.6s ${i*0.12}s ease forwards` : 'none',
                  animationFillMode:'both',
                }}
                onMouseEnter={e => { if(!isMobile) e.currentTarget.style.boxShadow=`0 20px 50px ${event.color}35`; }}
                onMouseLeave={e => { if(!isMobile) e.currentTarget.style.boxShadow='none'; }}
              >
                <div style={{ position:'absolute', top:0, left:'20%', right:'20%', height:'2px', background:`linear-gradient(90deg,transparent,${event.color}80,transparent)` }}/>

                <div style={{ display:'inline-block', padding:'10px 18px', backgroundColor:`${event.color}20`, borderRadius:'20px', marginBottom:'18px', fontSize:'13px', fontWeight:'700', color:event.color, fontFamily:"'Inter',sans-serif", letterSpacing:'1px' }}>
                  {event.date}
                </div>
                <h3 style={{ fontSize: isMobile ? '20px' : '26px', fontWeight:'900', color:'#f5f1e8', marginBottom:'14px', fontFamily:"'Playfair Display',serif", lineHeight:'1.2' }}>
                  {event.name}
                </h3>
                <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 20px', backgroundColor:'rgba(245,241,232,0.08)', borderRadius:'25px', border:`2px solid ${event.color}`, fontSize:'14px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif" }}>
                  {event.status}
                  <ArrowRight size={16} color={event.color}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALERÍA ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ marginBottom: isMobile ? '26px' : '60px', textAlign:'center' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px,7vw,44px)' : '52px',
              fontWeight:'900', marginBottom:'14px', color:'#f5f1e8', fontFamily:"'Playfair Display',serif",
              opacity: galleryVisible ? 1 : 0, animation: galleryVisible ? 'opFadeUp 0.6s ease forwards' : 'none',
            }}>
              Momentos <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Épicos</span>
            </h2>
            <div style={{ width:'50px', height:'2px', margin:'0 auto 14px', background:'linear-gradient(90deg,transparent,#f4d35e,transparent)', borderRadius:'2px', animation: galleryVisible ? 'opLineExpand 0.7s 0.2s ease forwards' : 'none', animationFillMode:'both' }}/>
            <p style={{ fontSize: isMobile ? '14px' : '18px', color:'#f5f1e8', opacity: galleryVisible ? 0.7 : 0, fontFamily:"'Inter',sans-serif", animation: galleryVisible ? 'opFadeUp 0.5s 0.2s ease forwards' : 'none', animationFillMode:'both' }}>
              Capturando la emoción de cada carrera
            </p>
          </div>

          <div
            ref={galleryRef}
            style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? '12px' : '20px', marginBottom:'40px' }}
          >
            {[1,2,3,4,5,6,7,8].map((item, i) => (
              <div
                key={i}
                className="op-gallery-item"
                style={{
                  height: isMobile ? '140px' : '200px',
                  borderRadius:'20px',
                  background:`linear-gradient(${135+i*20}deg,rgba(200,90,62,${0.2+i*0.04}) 0%,rgba(244,211,94,${0.2+i*0.04}) 100%)`,
                  border:'2px solid rgba(244,211,94,0.25)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'13px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif",
                  cursor:'pointer', overflow:'hidden', position:'relative',
                  opacity: galleryVisible ? 1 : 0,
                  animation: galleryVisible ? `opGalleryIn 0.5s ${i*0.06}s ease forwards` : 'none',
                  animationFillMode:'both',
                }}
              >
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,transparent 50%,rgba(10,74,66,0.4) 100%)', pointerEvents:'none' }}/>
                <span style={{ position:'relative', zIndex:1, opacity:0.7 }}>FOTO {item}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center' }}>
            <button
              className="op-gallery-btn"
              style={{
                backgroundColor:'transparent', color:'#f5f1e8',
                border:'2px solid #f4d35e',
                padding: isMobile ? '16px 28px' : '18px 45px',
                borderRadius:'50px', cursor:'pointer',
                fontSize:'15px', fontWeight:'700', fontFamily:"'Inter',sans-serif", letterSpacing:'1px',
                width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? '420px' : 'none',
                opacity: galleryVisible ? 1 : 0,
                animation: galleryVisible ? 'opFadeUp 0.5s 0.5s ease forwards' : 'none',
                animationFillMode:'both',
              }}
            >
              VER GALERÍA COMPLETA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
