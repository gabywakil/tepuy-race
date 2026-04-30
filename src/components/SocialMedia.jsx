import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Youtube, Twitter, Heart } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';



const Counter = ({ value, visible }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const raw = parseFloat(value.replace(/[^\d.]/g,''));
    if (!raw) return;
    let cur = 0;
    const iv = setInterval(() => {
      cur += raw / 55;
      if (cur >= raw) { setDisplay(raw); clearInterval(iv); }
      else setDisplay(parseFloat(cur.toFixed(1)));
    }, 22);
    return () => clearInterval(iv);
  }, [visible, value]);
  return <>{value.replace(/[\d.]+/, display % 1 === 0 ? display.toFixed(0) : display.toFixed(1))}</>;
};

const SocialMedia = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [headerRef, headerVisible] = useInView(0.2);
  const [cardsRef,  cardsVisible]  = useInView(0.08);
  const [statsRef,  statsVisible]  = useInView(0.15);
  const [hashRef,   hashVisible]   = useInView(0.2);

  const socialLinks = [
    { icon:Instagram, name:'Instagram', handle:'@tepuyrace',   followers:'12.5K', color:'#E1306C', link:'https://instagram.com/tepuyrace' },
    { icon:Facebook,  name:'Facebook',  handle:'/tepuyrace',   followers:'8.3K',  color:'#1877F2', link:'https://facebook.com/tepuyrace' },
    { icon:Youtube,   name:'YouTube',   handle:'@TepuyRace',   followers:'5.2K',  color:'#FF0000', link:'https://youtube.com/@tepuyrace' },
    { icon:Twitter,   name:'X (Twitter)',handle:'@tepuyrace',  followers:'4.1K',  color:'#1DA1F2', link:'https://twitter.com/tepuyrace' },
  ];

  const stats = [
    { number:'15K+',  label:'Fotos compartidas' },
    { number:'30K+',  label:'Seguidores totales' },
    { number:'1.2M+', label:'Impresiones mensuales' },
  ];

  return (
    <section style={{
      padding: isMobile ? '70px 18px' : '100px 40px',
      backgroundColor:'transparent', width:'100%', margin:0,
      borderTop:'1px solid rgba(244,211,94,0.2)',
      borderBottom:'1px solid rgba(244,211,94,0.2)',
      position:'relative', overflow:'hidden',
    }}>
      <style>{`
        @keyframes smFadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes smBadgePop { from{opacity:0;transform:scale(0.8)} to{opacity:1;transform:scale(1)} }
        @keyframes smCardIn   { from{opacity:0;transform:translateY(28px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes smIconPop  {
          0%  {transform:scale(0.5) rotate(-10deg);opacity:0;}
          65% {transform:scale(1.15) rotate(3deg); opacity:1;}
          100%{transform:scale(1)   rotate(0deg);  opacity:1;}
        }
        @keyframes smHashIn   { from{opacity:0;transform:scale(0.95) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes smLineExpand { from{width:0} to{width:50px} }
        @keyframes smHashPulse {
          0%,100%{ text-shadow:0 0 0 rgba(244,211,94,0); }
          50%    { text-shadow:0 0 30px rgba(244,211,94,0.35); }
        }
        .sm-card {
          transition: transform 0.3s ease, border-color 0.3s ease,
                      background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .sm-card:hover { transform:translateY(-8px) !important; }
        .sm-stat-card { transition:background-color 0.25s,transform 0.25s; }
        .sm-stat-card:hover { background-color:rgba(244,211,94,0.12) !important; transform:translateY(-3px); }
      `}</style>

      {/* ambient */}
      <div style={{
        position:'absolute', top:'-80px', left:'50%', transform:'translateX(-50%)',
        width:'700px', height:'200px',
        background:'radial-gradient(ellipse,rgba(244,211,94,0.06) 0%,transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div style={{ maxWidth:'1200px', margin:'0 auto' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom: isMobile ? '34px' : '70px' }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            backgroundColor:'rgba(244,211,94,0.1)',
            padding:'10px 24px', borderRadius:'30px', marginBottom:'18px',
            border:'1px solid rgba(244,211,94,0.3)',
            fontFamily:"'Inter',sans-serif", fontSize:'13px', fontWeight:'600',
            color:'#f4d35e', letterSpacing:'1.5px',
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'smBadgePop 0.5s ease forwards' : 'none',
          }}>
            <Heart size={16} fill="#f4d35e"/> SÍGUENOS
          </div>

          <h2 style={{
            fontSize: isMobile ? 'clamp(34px,9vw,56px)' : '56px',
            fontWeight:'900', marginBottom:'14px', lineHeight:'1.1',
            color:'#f5f1e8', fontFamily:"'Playfair Display',serif",
            opacity: headerVisible ? 1 : 0,
            animation: headerVisible ? 'smFadeUp 0.65s 0.1s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Únete a Nuestra{' '}
            <span style={{ color:'#f4d35e', fontStyle:'italic' }}>Comunidad</span>
          </h2>

          <div style={{
            width:'50px', height:'2px', margin:'0 auto 18px',
            background:'linear-gradient(90deg,transparent,#f4d35e,transparent)',
            borderRadius:'2px',
            animation: headerVisible ? 'smLineExpand 0.7s 0.25s ease forwards' : 'none',
            animationFillMode:'both',
          }}/>

          <p style={{
            fontSize: isMobile ? '15px' : '18px', color:'#f5f1e8',
            opacity: headerVisible ? 0.8 : 0,
            maxWidth:'650px', margin:'0 auto',
            fontFamily:"'Inter',sans-serif", lineHeight:'1.6',
            animation: headerVisible ? 'smFadeUp 0.6s 0.2s ease forwards' : 'none',
            animationFillMode:'both',
          }}>
            Comparte tu pasión, inspírate con otros runners y mantente al día con todas las novedades de Tepuy Race.
          </p>
        </div>

        {/* ── Social Cards ── */}
        <div
          ref={cardsRef}
          style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)',
            gap:'16px', marginBottom: isMobile ? '26px' : '50px',
          }}
        >
          {socialLinks.map(({ icon:Icon, name, handle, followers, color, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="sm-card"
              style={{
                padding: isMobile ? '22px 18px' : '32px 22px',
                backgroundColor:'rgba(245,241,232,0.07)',
                borderRadius:'20px',
                border:'2px solid rgba(244,211,94,0.25)',
                textDecoration:'none', cursor:'pointer', textAlign:'center',
                display:'block', position:'relative', overflow:'hidden',
                opacity: cardsVisible ? 1 : 0,
                animation: cardsVisible ? `smCardIn 0.6s ${i*0.1}s ease forwards` : 'none',
                animationFillMode:'both',
              }}
              onMouseEnter={e=>{
                if(isMobile) return;
                e.currentTarget.style.borderColor=color;
                e.currentTarget.style.backgroundColor=`${color}14`;
                e.currentTarget.style.boxShadow=`0 18px 48px ${color}28`;
              }}
              onMouseLeave={e=>{
                if(isMobile) return;
                e.currentTarget.style.borderColor='rgba(244,211,94,0.25)';
                e.currentTarget.style.backgroundColor='rgba(245,241,232,0.07)';
                e.currentTarget.style.boxShadow='none';
              }}
            >
              {/* top accent */}
              <div style={{
                position:'absolute', top:0, left:'20%', right:'20%',
                height:'2px', background:`linear-gradient(90deg,transparent,${color}60,transparent)`,
              }}/>

              {/* icon */}
              <div style={{
                width:'58px', height:'58px', borderRadius:'50%',
                backgroundColor:`${color}1a`,
                border:`3px solid ${color}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                margin:'0 auto 14px',
                opacity: cardsVisible ? 1 : 0,
                animation: cardsVisible ? `smIconPop 0.55s ${i*0.1+0.12}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none',
                animationFillMode:'both',
              }}>
                <Icon size={26} color={color} strokeWidth={2}/>
              </div>

              <div style={{ fontSize:'17px', fontWeight:'800', color:'#f5f1e8', marginBottom:'6px', fontFamily:"'Inter',sans-serif" }}>{name}</div>
              <div style={{ fontSize:'13px', color:'#f5f1e8', opacity:0.7, marginBottom:'10px', fontFamily:"'Inter',sans-serif" }}>{handle}</div>
              <div style={{ fontSize:'22px', fontWeight:'900', color, fontFamily:"'Playfair Display',serif" }}>
                <Counter value={followers} visible={cardsVisible}/>
              </div>
              <div style={{ fontSize:'11px', color:'#f5f1e8', opacity:0.55, fontFamily:"'Inter',sans-serif", letterSpacing:'1px' }}>SEGUIDORES</div>
            </a>
          ))}
        </div>

        {/* ── Stats ── */}
        <div
          ref={statsRef}
          style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
            gap:'16px', marginBottom: isMobile ? '26px' : '40px',
          }}
        >
          {stats.map(({ number, label }, i) => (
            <div
              key={i}
              className="sm-stat-card"
              style={{
                textAlign:'center', padding: isMobile ? '18px' : '28px',
                backgroundColor:'rgba(244,211,94,0.07)',
                borderRadius:'20px', border:'2px solid rgba(244,211,94,0.25)',
                opacity: statsVisible ? 1 : 0,
                animation: statsVisible ? `smFadeUp 0.55s ${i*0.1}s ease forwards` : 'none',
                animationFillMode:'both',
              }}
            >
              <div style={{
                fontSize: isMobile ? '34px' : '44px', fontWeight:'900',
                color:'#f4d35e', marginBottom:'8px',
                fontFamily:"'Playfair Display',serif",
              }}>
                <Counter value={number} visible={statsVisible}/>
              </div>
              <div style={{
                fontSize:'13px', fontWeight:'700', color:'#f5f1e8',
                opacity:0.8, letterSpacing:'1px', fontFamily:"'Inter',sans-serif",
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Hashtag ── */}
        <div
          ref={hashRef}
          style={{
            textAlign:'center',
            padding: isMobile ? '26px 18px' : '50px',
            backgroundColor:'rgba(200,90,62,0.1)',
            borderRadius:'25px', border:'2px solid rgba(200,90,62,0.35)',
            position:'relative', overflow:'hidden',
            opacity: hashVisible ? 1 : 0,
            animation: hashVisible ? 'smHashIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
          }}
        >
          {/* inner glow */}
          <div style={{
            position:'absolute', top:'-60px', left:'50%', transform:'translateX(-50%)',
            width:'400px', height:'160px',
            background:'radial-gradient(ellipse,rgba(244,211,94,0.08) 0%,transparent 70%)',
            pointerEvents:'none',
          }}/>

          <div style={{
            fontSize:'15px', fontWeight:'700', color:'#f5f1e8',
            marginBottom:'10px', fontFamily:"'Inter',sans-serif", opacity:0.9,
          }}>
            Comparte tu experiencia con
          </div>

          <div style={{
            fontSize: isMobile ? '40px' : '52px', fontWeight:'900',
            color:'#f4d35e', marginBottom:'12px',
            fontFamily:"'Playfair Display',serif", fontStyle:'italic',
            animation: hashVisible ? 'smHashPulse 3s ease-in-out infinite' : 'none',
          }}>
            #TepuyRace
          </div>

          <p style={{
            fontSize:'14px', color:'#f5f1e8', opacity:0.72,
            fontFamily:"'Inter',sans-serif",
            maxWidth:'520px', margin:'0 auto', lineHeight:'1.6',
          }}>
            Etiquétanos en tus fotos y videos. Las mejores publicaciones serán compartidas en nuestras redes oficiales.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SocialMedia;
