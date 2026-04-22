import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin, Calendar, Mail } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const RegistrationConfirmed = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const location = useLocation();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const race     = location.state?.race;
  const formData = location.state?.formData;
  const isGroup  = location.state?.isGroup;
  const groupLeader = location.state?.groupLeader;
  const members  = location.state?.members;

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const goHome = () => { window.scrollTo({top:0,behavior:'smooth'}); navigate('/'); };

  const displayName = isGroup
    ? `${groupLeader?.firstName || ''} ${groupLeader?.lastName || ''}`.trim() || '—'
    : formData?.firstName ? `${formData.firstName} ${formData.lastName}` : '—';

  const displayEmail = isGroup ? groupLeader?.email : formData?.email;

  return (
    <div style={{ backgroundColor:'#0a4a42', minHeight:'100vh', paddingTop:'110px', paddingBottom:'80px', overflowX:'hidden', position:'relative' }}>
      <style>{`
        @keyframes rcPageIn    { from{opacity:0} to{opacity:1} }
        @keyframes rcCardIn    { from{opacity:0;transform:translateY(40px)scale(0.95)} to{opacity:1;transform:translateY(0)scale(1)} }
        @keyframes rcCheckPop  {
          0%  {transform:scale(0)rotate(-30deg);opacity:0;}
          60% {transform:scale(1.25)rotate(8deg); opacity:1;}
          80% {transform:scale(0.92)rotate(-3deg);}
          100%{transform:scale(1)  rotate(0deg);  opacity:1;}
        }
        @keyframes rcCheckRing {
          0%  {transform:scale(0.5);opacity:0.8;}
          100%{transform:scale(2.2);opacity:0;}
        }
        @keyframes rcBadgePop  { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes rcTitleIn   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rcRowIn     { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        @keyframes rcBtnPulse  {
          0%,100%{box-shadow:0 10px 35px rgba(200,90,62,0.4);}
          50%    {box-shadow:0 14px 50px rgba(200,90,62,0.65),0 0 0 6px rgba(200,90,62,0.1);}
        }
        @keyframes rcBorderGlow {
          0%,100%{box-shadow:0 30px 80px rgba(0,0,0,0.25);}
          50%    {box-shadow:0 30px 80px rgba(0,0,0,0.25),0 0 50px 6px rgba(244,211,94,0.15);}
        }
        @keyframes rcParticle {
          0%  {transform:translate(0,0)rotate(0deg);opacity:1;}
          100%{transform:translate(var(--tx),var(--ty))rotate(var(--r));opacity:0;}
        }
        @keyframes rcShimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .rc-btn {
          animation: rcBtnPulse 2.8s ease-in-out infinite;
          transition: transform 0.2s, background-color 0.2s;
        }
        .rc-btn:hover {
          transform: translateY(-3px) scale(1.02) !important;
          background-color: #d4664a !important;
          animation: none !important;
          box-shadow: 0 16px 48px rgba(200,90,62,0.55) !important;
        }
      `}</style>

      {/* ambient bg */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0,
        background:'radial-gradient(circle at 30% 40%,rgba(244,211,94,0.04),transparent 50%), radial-gradient(circle at 70% 70%,rgba(200,90,62,0.04),transparent 50%)'
      }}/>

      {/* floating particles */}
      {mounted && [
        {tx:'80px',ty:'-120px',r:'240deg',color:'#f4d35e',size:8,delay:'0.2s'},
        {tx:'-90px',ty:'-100px',r:'-180deg',color:'#c85a3e',size:6,delay:'0.3s'},
        {tx:'120px',ty:'-80px', r:'300deg', color:'#f4d35e',size:5,delay:'0.1s'},
        {tx:'-60px',ty:'-140px',r:'-220deg',color:'#f5f1e8',size:4,delay:'0.4s'},
        {tx:'60px', ty:'-60px', r:'180deg', color:'#c85a3e',size:7,delay:'0.25s'},
        {tx:'-100px',ty:'-90px',r:'-300deg',color:'#f4d35e',size:5,delay:'0.35s'},
      ].map((p, i) => (
        <div key={i} style={{
          position:'fixed', top:'40%', left:'50%',
          width:`${p.size}px`, height:`${p.size}px`, borderRadius:'50%',
          backgroundColor:p.color, zIndex:3, pointerEvents:'none',
          '--tx':p.tx, '--ty':p.ty, '--r':p.r,
          animation:`rcParticle 1.2s ${p.delay} cubic-bezier(0.2,0.8,0.4,1) forwards`,
        }}/>
      ))}

      <div style={{ maxWidth:'900px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 40px', position:'relative', zIndex:2 }}>
        <div style={{
          padding: isMobile ? '28px 20px' : '50px',
          borderRadius:'28px', border:'3px solid #f4d35e',
          backgroundColor:'rgba(245,241,232,0.06)', textAlign:'center',
          position:'relative', overflow:'hidden',
          opacity: mounted ? 1 : 0,
          animation: mounted ? 'rcCardIn 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) forwards, rcBorderGlow 5s 1.5s ease-in-out infinite' : 'none',
          animationFillMode:'both, forwards',
          animationIterationCount:'1, infinite',
        }}>
          {/* shimmer top */}
          <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'3px', background:'linear-gradient(90deg,transparent,#f4d35e 40%,#c85a3e 60%,transparent)', backgroundSize:'200% 100%', animation:'rcShimmer 3s linear infinite' }}/>
          {/* corner glow */}
          <div style={{ position:'absolute', top:0, right:0, width:'180px', height:'180px', background:'radial-gradient(circle at top right,rgba(244,211,94,0.1),transparent 70%)', pointerEvents:'none' }}/>

          {/* check icon with ring */}
          <div style={{ display:'flex', justifyContent:'center', marginBottom:'16px', position:'relative' }}>
            <div style={{ position:'relative', width:'80px', height:'80px', display:'flex', alignItems:'center', justifyContent:'center' }}>
              {/* pulse ring */}
              <div style={{
                position:'absolute', inset:0, borderRadius:'50%',
                border:'3px solid rgba(244,211,94,0.5)',
                opacity: mounted ? 0 : 1,
                animation: mounted ? 'rcCheckRing 1s 0.4s ease-out forwards' : 'none',
              }}/>
              <CheckCircle
                size={72} color="#f4d35e" strokeWidth={2}
                style={{
                  opacity: mounted ? 1 : 0,
                  animation: mounted ? 'rcCheckPop 0.7s 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
                  animationFillMode:'both',
                }}
              />
            </div>
          </div>

          {/* step badge */}
          <div style={{
            display:'inline-block', backgroundColor:'rgba(244,211,94,0.12)', color:'#f4d35e',
            padding:'10px 22px', borderRadius:'25px', fontSize:'13px', fontWeight:'800',
            letterSpacing:'2px', marginBottom:'14px', fontFamily:"'Inter',sans-serif",
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'rcBadgePop 0.5s 0.5s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            PASO 3 DE 3
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(28px,8vw,44px)' : '52px',
            fontWeight:'900', margin:0, color:'#f5f1e8',
            fontFamily:"'Playfair Display',serif", lineHeight:1.05,
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'rcTitleIn 0.6s 0.6s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            ¡Inscripción{' '}
            <span style={{ color:'#f4d35e', fontStyle:'italic' }}>confirmada</span>!
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '17px', color:'#f5f1e8', opacity: mounted ? 0.8 : 0,
            marginTop:'12px', marginBottom:'28px', fontFamily:"'Inter',sans-serif", lineHeight:'1.7',
            animation: mounted ? 'rcTitleIn 0.5s 0.7s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            {isGroup
              ? `Inscripción grupal de ${members?.length || '—'} participantes registrada. Te enviaremos los detalles por correo.`
              : 'Te enviaremos un correo con todos los detalles. Guarda esta confirmación.'}
          </p>

          {/* details card */}
          <div style={{
            padding: isMobile ? '18px' : '28px', borderRadius:'18px',
            border:'2px solid rgba(244,211,94,0.25)',
            backgroundColor:'rgba(10,74,66,0.45)', textAlign:'left',
            marginBottom:'24px',
          }}>
            {[
              { label:'Carrera',        value: race?.name || '—' },
              { label: isGroup ? 'Responsable' : 'Participante', value: displayName },
              { label:'Email',          value: displayEmail || '—' },
              ...(isGroup ? [{ label:'Participantes', value:`${members?.length || '—'} personas` }] : []),
            ].map(({ label, value }, i) => (
              <div
                key={i}
                style={{
                  display:'flex', alignItems:'flex-start', gap:'12px',
                  paddingBottom: i < 2 ? '14px' : 0, marginBottom: i < 2 ? '14px' : 0,
                  borderBottom: i < 2 ? '1px solid rgba(244,211,94,0.12)' : 'none',
                  opacity: mounted ? 1 : 0,
                  animation: mounted ? `rcRowIn 0.5s ${0.75+i*0.1}s ease forwards` : 'none',
                  animationFillMode:'both',
                }}
              >
                <div style={{ fontSize:'12px', fontWeight:'700', color:'#f4d35e', letterSpacing:'1px', fontFamily:"'Inter',sans-serif", minWidth:'110px', paddingTop:'2px', textTransform:'uppercase' }}>{label}</div>
                <div style={{ fontSize:'15px', color:'#f5f1e8', fontFamily:"'Inter',sans-serif", opacity:0.9, fontWeight:'500' }}>{value}</div>
              </div>
            ))}
          </div>

          {/* info pill */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'20px',
            backgroundColor:'rgba(200,90,62,0.12)', border:'1px solid rgba(200,90,62,0.3)',
            borderRadius:'20px', padding:'8px 16px',
            fontSize:'13px', color:'#c85a3e', fontWeight:'600', fontFamily:"'Inter',sans-serif",
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'rcBadgePop 0.4s 1.1s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            <Mail size={14}/> Confirmación enviada a tu correo
          </div>

          <button
            type="button" onClick={goHome} className="rc-btn"
            style={{
              width:'100%', marginTop:'8px', backgroundColor:'#c85a3e', color:'#f5f1e8',
              border:'none', padding: isMobile ? '16px' : '20px', borderRadius:'14px',
              cursor:'pointer', fontSize: isMobile ? '16px' : '18px', fontWeight:'900',
              fontFamily:"'Inter',sans-serif", letterSpacing:'1px',
              display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
              opacity: mounted ? 1 : 0,
              animation: mounted ? 'rcTitleIn 0.5s 1s ease forwards' : 'none',
              animationFillMode:'both',
            }}
          >
            VOLVER AL INICIO <ArrowRight size={18}/>
          </button>

          <div style={{ marginTop:'12px', fontSize:'12px', color:'#f5f1e8', opacity:0.5, fontFamily:"'Inter',sans-serif" }}>
            🔒 Tus datos están seguros y protegidos
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmed;
