import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mountain, Users } from 'lucide-react';

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

const RaceSelection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mounted, setMounted] = useState(false);
  const [headerRef, headerVisible] = useInView(0.1);
  const [card1Ref,  card1Visible]  = useInView(0.1);
  const [card2Ref,  card2Visible]  = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    const h = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', h);
    return () => { clearTimeout(t); window.removeEventListener('resize', h); };
  }, []);

  const race = {
    id: '10k', name: '10K Aventura', distance: '10K', price: '$65',
    bullets: ['Exigencia media','Sección técnica','Experiencia completa','Kit de corredor incluido','Medalla finisher','Chip de cronometraje','Hidratación en ruta'],
  };

  const goCheckout      = () => { window.scrollTo({top:0,behavior:'smooth'}); navigate('/checkout',{state:{race}}); };
  const goGroupCheckout = () => { window.scrollTo({top:0,behavior:'smooth'}); navigate('/checkout',{state:{race,isGroup:true}}); };

  return (
    <div style={{ backgroundColor:'#0a4a42', minHeight:'100vh', paddingTop:'100px', paddingBottom:'80px', overflowX:'hidden' }}>
      <style>{`
        @keyframes rsFadeUp    { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rsBadgePop  { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes rsCardIn    { from{opacity:0;transform:translateY(28px)scale(0.97)} to{opacity:1;transform:translateY(0)scale(1)} }
        @keyframes rsLineExpand{ from{width:0} to{width:50px} }
        @keyframes rsBtnPulse  {
          0%,100%{box-shadow:0 10px 35px rgba(200,90,62,0.35);}
          50%    {box-shadow:0 14px 50px rgba(200,90,62,0.6),0 0 0 6px rgba(200,90,62,0.1);}
        }
        @keyframes rsShimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes rsCheckIn   {
          0%  {transform:scale(0)rotate(-20deg);opacity:0;}
          70% {transform:scale(1.2)rotate(5deg); opacity:1;}
          100%{transform:scale(1) rotate(0deg);  opacity:1;}
        }
        .rs-main-btn {
          animation: rsBtnPulse 2.8s ease-in-out infinite;
          transition: transform 0.2s, background-color 0.2s;
        }
        .rs-main-btn:hover {
          transform: translateY(-3px) scale(1.02) !important;
          background-color: #d4664a !important;
          animation: none !important;
          box-shadow: 0 16px 48px rgba(200,90,62,0.55) !important;
        }
        .rs-group-btn { transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s; }
        .rs-group-btn:hover { background-color: rgba(200,90,62,0.2) !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,90,62,0.25) !important; }
      `}</style>

      <div style={{ maxWidth:'800px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 40px' }}>

        {/* header */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom: isMobile ? '22px' : '44px' }}>
          <div style={{
            display:'inline-block', backgroundColor:'rgba(244,211,94,0.12)', color:'#f4d35e',
            padding:'10px 22px', borderRadius:'25px', fontSize:'13px', fontWeight:'800',
            letterSpacing:'2px', marginBottom:'14px', fontFamily:"'Inter',sans-serif",
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'rsBadgePop 0.5s ease forwards' : 'none',
          }}>
            PASO 1 DE 3
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(30px,9vw,48px)' : '56px',
            fontWeight:'900', margin:0, color:'#f5f1e8',
            fontFamily:"'Playfair Display',serif", lineHeight:1.05,
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'rsFadeUp 0.65s 0.1s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Selecciona tu carrera
          </h1>

          <div style={{ width:'50px', height:'2px', margin:'14px auto 0', background:'linear-gradient(90deg,transparent,#f4d35e,transparent)', borderRadius:'2px', animation: headerVisible ? 'rsLineExpand 0.7s 0.3s ease forwards' : 'none', animationFillMode:'both' }}/>

          <p style={{
            fontSize: isMobile ? '14px' : '16px', color:'#f5f1e8', opacity: headerVisible ? 0.75 : 0,
            marginTop:'12px', fontFamily:"'Inter',sans-serif",
            animation: headerVisible ? 'rsFadeUp 0.5s 0.25s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Revisa detalles y precio antes de pagar.
          </p>
        </div>

        {/* ── INDIVIDUAL CARD ── */}
        <div ref={card1Ref} style={{
          padding: isMobile ? '24px' : '40px', borderRadius:'18px',
          border:'3px solid #f4d35e', backgroundColor:'rgba(244,211,94,0.1)', marginBottom:'24px',
          position:'relative', overflow:'hidden',
          opacity: card1Visible ? 1 : 0,
          animation: card1Visible ? 'rsCardIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
        }}>
          <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'2px', background:'linear-gradient(90deg,transparent,#f4d35e 50%,transparent)', backgroundSize:'200% 100%', animation:'rsShimmer 3s linear infinite' }}/>

          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
            <Mountain size={24} color="#f4d35e"/>
            <div style={{ fontWeight:'900', fontFamily:"'Inter',sans-serif", fontSize:'18px', color:'#f5f1e8' }}>Detalles de la carrera</div>
          </div>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', paddingBottom:'20px', borderBottom:'1px solid rgba(244,211,94,0.2)' }}>
            <div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:'12px', opacity:0.75, marginBottom:'4px', color:'#f5f1e8', letterSpacing:'1.5px' }}>DISTANCIA</div>
              <div style={{ fontSize: isMobile ? '32px' : '40px', fontWeight:'900', fontFamily:"'Playfair Display',serif", color:'#f5f1e8' }}>{race.distance}</div>
              <div style={{ fontSize:'18px', fontWeight:'700', marginTop:'4px', fontFamily:"'Inter',sans-serif", color:'#f5f1e8' }}>{race.name}</div>
            </div>
            <div style={{ fontSize: isMobile ? '36px' : '48px', fontWeight:'900', color:'#f4d35e', fontFamily:"'Playfair Display',serif" }}>{race.price}</div>
          </div>

          <div style={{ fontSize:'14px', fontWeight:'600', color:'#f4d35e', marginBottom:'14px', fontFamily:"'Inter',sans-serif", letterSpacing:'1px' }}>INCLUYE:</div>

          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'12px', marginBottom:'24px' }}>
            {race.bullets.map((b, i) => (
              <div key={i} style={{ display:'flex', gap:'10px', alignItems:'center', opacity: card1Visible ? 1 : 0, animation: card1Visible ? `rsCheckIn 0.4s ${0.2+i*0.06}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none', animationFillMode:'both' }}>
                <CheckCircle size={18} color="#f4d35e" strokeWidth={2.5}/>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:'14px', opacity:0.9, color:'#f5f1e8' }}>{b}</span>
              </div>
            ))}
          </div>

          <button type="button" onClick={goCheckout} className="rs-main-btn" style={{
            width:'100%', backgroundColor:'#c85a3e', color:'#f5f1e8', border:'none',
            padding: isMobile ? '16px 18px' : '20px 24px', borderRadius:'14px', cursor:'pointer',
            fontSize: isMobile ? '15px' : '17px', fontWeight:'900', fontFamily:"'Inter',sans-serif",
            letterSpacing:'1px', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
          }}>
            CONTINUAR AL CHECKOUT <ArrowRight size={20}/>
          </button>
        </div>

        {/* ── GROUP CARD ── */}
        <div ref={card2Ref} style={{
          padding: isMobile ? '24px' : '40px', borderRadius:'18px',
          border:'3px solid #c85a3e', backgroundColor:'rgba(200,90,62,0.08)', marginBottom:'24px',
          position:'relative', overflow:'hidden',
          opacity: card2Visible ? 1 : 0,
          animation: card2Visible ? 'rsCardIn 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
          animationFillMode:'both',
        }}>
          <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'2px', background:'linear-gradient(90deg,transparent,#c85a3e 50%,transparent)', backgroundSize:'200% 100%', animation:'rsShimmer 3.5s linear infinite' }}/>

          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
            <Users size={24} color="#c85a3e"/>
            <div style={{ fontWeight:'900', fontFamily:"'Inter',sans-serif", fontSize:'18px', color:'#f5f1e8' }}>Inscripción grupal</div>
          </div>

          <div style={{ backgroundColor:'rgba(244,211,94,0.13)', border:'2px solid #f4d35e', borderRadius:'14px', padding: isMobile ? '14px 16px' : '18px 24px', marginBottom:'20px', display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent:'space-between', gap:'10px' }}>
            <div>
              <div style={{ fontSize:'13px', fontWeight:'800', color:'#f4d35e', letterSpacing:'1.5px', fontFamily:"'Inter',sans-serif", marginBottom:'4px' }}>🎉 DESCUENTO ESPECIAL</div>
              <div style={{ fontSize: isMobile ? '14px' : '15px', color:'#f5f1e8', fontFamily:"'Inter',sans-serif", opacity:0.9 }}>
                Grupos de <strong>10 o más personas</strong> obtienen <strong>15% de descuento</strong> por inscripción.
              </div>
            </div>
            <div style={{ textAlign: isMobile ? 'left' : 'right', flexShrink:0 }}>
              <div style={{ fontSize:'13px', color:'#f5f1e8', opacity:0.6, fontFamily:"'Inter',sans-serif", textDecoration:'line-through' }}>$65 / persona</div>
              <div style={{ fontSize: isMobile ? '28px' : '34px', fontWeight:'900', color:'#f4d35e', fontFamily:"'Playfair Display',serif", lineHeight:1 }}>$55.25</div>
              <div style={{ fontSize:'12px', color:'#f5f1e8', opacity:0.65, fontFamily:"'Inter',sans-serif" }}>por persona</div>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'12px', marginBottom:'24px' }}>
            {['Mínimo 10 participantes','Un responsable de grupo','Pago único consolidado','Todos los beneficios individuales','Número de corredor consecutivo','Coordinación especial en meta'].map((b, i) => (
              <div key={i} style={{ display:'flex', gap:'10px', alignItems:'center', opacity: card2Visible ? 1 : 0, animation: card2Visible ? `rsCheckIn 0.4s ${0.25+i*0.06}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none', animationFillMode:'both' }}>
                <CheckCircle size={18} color="#c85a3e" strokeWidth={2.5}/>
                <span style={{ fontFamily:"'Inter',sans-serif", fontSize:'14px', opacity:0.9, color:'#f5f1e8' }}>{b}</span>
              </div>
            ))}
          </div>

          <button type="button" onClick={goGroupCheckout} className="rs-group-btn" style={{
            width:'100%', backgroundColor:'transparent', color:'#f5f1e8',
            border:'2px solid #c85a3e', padding: isMobile ? '16px 18px' : '20px 24px',
            borderRadius:'14px', cursor:'pointer', fontSize: isMobile ? '15px' : '17px',
            fontWeight:'900', fontFamily:"'Inter',sans-serif", letterSpacing:'1px',
            display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
          }}>
            <Users size={20}/> INSCRIBIR GRUPO <ArrowRight size={20}/>
          </button>
        </div>

      </div>
    </div>
  );
};

export default RaceSelection;
