import React, { useEffect, useState } from 'react';
import { Award, TrendingUp, Users, Download, Mail } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';

import logoVenetur        from '../assets/logo-venetur.png';
import logoVeneturWebp    from '../assets/logo-venetur.webp';
import logoMarea          from '../assets/logo-marea.png';
import logoMareaWebp      from '../assets/logo-marea.webp';
import logoMintur         from '../assets/logo-mintur.png';
import logoMinturWebp     from '../assets/logo-mintur.webp';
import logoConMariaBonita from '../assets/logo-conmariabonita.png';
import logoNatvisual      from '../assets/logo-natvisual.png';
import logoBoom           from '../assets/logo-boom.png';
import logoBoomWebp       from '../assets/logo-boom.webp';
import logoTransporteSV   from '../assets/logo-transportesv.jpg';
import logoDC             from '../assets/logo-dc.png';
import logoDCWebp         from '../assets/logo-dc.webp';
import logoSomos          from '../assets/logo-somos.png';
import logoSomosWebp      from '../assets/logo-somos.webp';
import logoGw             from '../assets/gw.png';
import logoAleGalarreta   from '../assets/logo-alegalarreta.png';
import logoPow            from '../assets/logo-pow.png';
import logoPowWebp        from '../assets/logo-pow.webp';
import logoVive           from '../assets/logo-vive.png';
import logoViveWebp       from '../assets/logo-vive.webp';
import logoSyf            from '../assets/logo-syf.png';
import logoSyfWebp        from '../assets/logo-syf.webp';
import prospectoPDF       from '../assets/prospecto-patrocinio.pdf';

const Sponsors = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [mounted, setMounted] = useState(false);

  const [heroRef,   heroVisible]   = useInView(0.1);
  const [titleRef,  titleVisible]  = useInView(0.15);
  const [officRef,  officVisible]  = useInView(0.08);
  const [becomeRef, becomeVisible] = useInView(0.1);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const titleSponsors = [
    { name: 'Venetur', logo: logoVenetur, logoWebp: logoVeneturWebp, bgStyle: 'white' },
    { name: 'Marea',   logo: logoMarea,   logoWebp: logoMareaWebp,   bgStyle: 'white' },
    { name: 'Mintur',  logo: logoMintur,  logoWebp: logoMinturWebp,  bgStyle: 'white' },
  ];

  // ── Patrocinadores oficiales + aliados fusionados ──
  const officialSponsors = [
    { name: 'Con María Bonita', logo: logoConMariaBonita,                              bgStyle: 'dark'   },
    { name: 'Natvisual',        logo: logoNatvisual,                                   bgStyle: 'white', imgScale: 1.8 },
    { name: 'BOOM Eventos',     logo: logoBoom,           logoWebp: logoBoomWebp,      bgStyle: 'white'  },
    { name: 'Transporte SV',    logo: logoTransporteSV,                                bgStyle: 'white'  },
    { name: 'DC Gráficos',      logo: logoDC,             logoWebp: logoDCWebp,        bgStyle: 'white',  ig: 'https://www.instagram.com/dcgraficos?igsh=MXd2anNodzRsNjlvMA==' },
    { name: 'Grupo Somos',      logo: logoSomos,          logoWebp: logoSomosWebp,     bgStyle: 'transp', ig: 'https://www.instagram.com/gruposomos_pzo?igsh=MXJ6dmttZzkwODAycA==' },
    { name: 'GW Studios',       logo: logoGw,                                          bgStyle: 'white',  ig: 'https://www.instagram.com/gw.studios_?igsh=MW9rZTB1djN5YmE4eA==' },
    { name: 'Ale Galarreta',    logo: logoAleGalarreta,                                bgStyle: 'transp', ig: 'https://www.instagram.com/ale.galarreta?igsh=MWVqcWx2Mmlzb2lu' },
    { name: 'POW Fitness',      logo: logoPow,            logoWebp: logoPowWebp,       bgStyle: 'transp', ig: 'https://www.instagram.com/powfitnessve?igsh=MTgxaDh5YmZrbHd6dg==' },
    { name: 'Vive Pilates',     logo: logoVive,           logoWebp: logoViveWebp,      bgStyle: 'transp', ig: 'https://www.instagram.com/vivepilates.studio?igsh=MTRoNmI3dWlnOHdiNA==' },
    { name: 'SYF',              logo: logoSyf,            logoWebp: logoSyfWebp,       bgStyle: 'transp', ig: 'https://www.instagram.com/syf.sportswear?igsh=MW55dXUwMjJvemJyMg==' },
  ];

  const benefits = [
    { icon: Award,      text: 'Visibilidad de marca ante más de 5,000 atletas' },
    { icon: TrendingUp, text: 'Zonas de activación exclusivas el día de carrera' },
    { icon: Users,      text: 'Marketing digital en todas nuestras redes sociales' },
  ];

  const logoBg = (bgStyle) => ({
    white:  'rgba(255,255,255,0.95)',
    dark:   '#0e0e0e',
    transp: 'transparent',
  }[bgStyle] || 'rgba(255,255,255,0.95)');

  const logoImgStyle = (imgScale) => ({
    maxWidth:  '88%',
    maxHeight: '88%',
    width:     'auto',
    height:    'auto',
    objectFit: 'contain',
    display:   'block',
    transform: imgScale ? `scale(${imgScale})` : undefined,
    transformOrigin: 'center center',
  });

  return (
    <div style={{ fontFamily:"'Playfair Display',serif", backgroundColor:'transparent', color:'#f5f1e8', minHeight:'100vh', paddingTop:'100px', overflowX:'hidden' }}>
      <style>{`
        @keyframes spFadeUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spFadeRight { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes spFadeLeft  { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes spCardIn    { from{opacity:0;transform:translateY(20px)scale(0.97)} to{opacity:1;transform:translateY(0)scale(1)} }
        @keyframes spHeroIn    { from{opacity:0;transform:scale(0.95)translateY(20px)} to{opacity:1;transform:scale(1)translateY(0)} }
        @keyframes spShimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes spTitleGlow { 0%,100%{box-shadow:0 15px 40px rgba(0,0,0,0.08);} 50%{box-shadow:0 20px 60px rgba(244,211,94,0.25);} }
        @keyframes spBtnPulse  { 0%,100%{box-shadow:0 5px 20px rgba(200,90,62,0.35);} 50%{box-shadow:0 8px 30px rgba(200,90,62,0.6);} }
        .sp-title-card   { transition:transform 0.28s ease,box-shadow 0.28s ease; }
        .sp-title-card:hover { transform:translateY(-6px)!important; }
        .sp-offic-card   { transition:transform 0.28s,border-color 0.28s,box-shadow 0.28s; }
        .sp-offic-card:hover { transform:translateY(-7px)!important; border-color:#f4d35e!important; box-shadow:0 16px 36px rgba(200,90,62,0.18)!important; }
        .sp-logo-inner { overflow:hidden; }
        .sp-logo-inner img { transition:transform 0.3s ease; }
        .sp-offic-card:hover .sp-logo-inner img,
        .sp-title-card:hover .sp-logo-inner img { transform:scale(1.06); }
        .sp-hero-btn    { animation:spBtnPulse 2.8s ease-in-out infinite; transition:transform 0.2s,background-color 0.2s; }
        .sp-hero-btn:hover { transform:translateY(-2px) scale(1.03)!important; background-color:#f5f1e8!important; animation:none!important; }
        .sp-contact-btn { animation:spBtnPulse 2.8s ease-in-out infinite; transition:transform 0.2s,background-color 0.2s; }
        .sp-contact-btn:hover { transform:translateY(-2px)!important; background-color:#b04935!important; animation:none!important; }
        .sp-dl-btn { transition:background-color 0.2s,color 0.2s,transform 0.2s; }
        .sp-dl-btn:hover { background-color:#f4d35e!important; color:#0a4a42!important; transform:translateY(-2px); }
        .sp-benefit-row { transition:transform 0.2s; }
        .sp-benefit-row:hover { transform:translateX(4px); }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ padding: isMobile ? '50px 18px 30px' : '80px 40px 60px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 60%,rgba(244,211,94,0.05),transparent 60%)', pointerEvents:'none' }}/>
        <div ref={heroRef} style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{
            position:'relative', height: isMobile ? 'auto' : '400px',
            borderRadius:'30px', overflow:'hidden', marginBottom: isMobile ? '26px' : '50px',
            boxShadow:'0 20px 60px rgba(0,0,0,0.2)',
            border: isMobile ? '5px solid #f4d35e' : '8px solid #f4d35e',
            opacity: heroVisible ? 1 : 0,
            animation: heroVisible ? 'spHeroIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
          }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:'linear-gradient(90deg,transparent,#f4d35e 40%,#c85a3e 60%,transparent)', backgroundSize:'200% 100%', animation:'spShimmer 3s linear infinite', zIndex:2 }}/>
            <div style={{
              width:'100%', height:'100%',
              background:'linear-gradient(135deg,rgba(10,74,66,0.95) 0%,rgba(200,90,62,0.85) 100%)',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              padding: isMobile ? '40px 18px' : '40px', minHeight: isMobile ? '280px' : 'auto',
            }}>
              <div style={{ display:'inline-block', backgroundColor:'rgba(244,211,94,0.15)', color:'#f4d35e', padding:'8px 20px', borderRadius:'20px', fontSize:'12px', fontWeight:'700', letterSpacing:'2px', marginBottom:'20px', fontFamily:"'Inter',sans-serif", border:'1px solid rgba(244,211,94,0.3)', opacity: heroVisible ? 1 : 0, animation: heroVisible ? 'spFadeUp 0.5s 0.2s ease forwards' : 'none', animationFillMode:'both' }}>
                NUESTROS ALIADOS
              </div>
              <h1 style={{ fontSize: isMobile ? 'clamp(34px,10vw,56px)' : '72px', fontWeight:'900', margin:'0 0 16px 0', lineHeight:'1', letterSpacing:'-1px', color:'#f4d35e', opacity: heroVisible ? 1 : 0, animation: heroVisible ? 'spFadeUp 0.7s 0.3s ease forwards' : 'none', animationFillMode:'both' }}>
                NUESTROS SPONSORS
              </h1>
              <p style={{ fontSize: isMobile ? '14px' : '20px', maxWidth:'700px', margin:'0 auto', lineHeight:'1.7', fontFamily:"'Inter',sans-serif", opacity: heroVisible ? 0.9 : 0, color:'#f5f1e8', animation: heroVisible ? 'spFadeUp 0.6s 0.4s ease forwards' : 'none', animationFillMode:'both' }}>
                La fortaleza de Tepuy Race viene de nuestros aliados. Conoce a las organizaciones que nos ayudan a llevar el trail running al siguiente nivel.
              </p>
              <button className="sp-hero-btn" style={{ marginTop:'22px', width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? '420px' : 'none', backgroundColor:'#f4d35e', color:'#0a4a42', border:'none', padding:'14px 28px', borderRadius:'30px', cursor:'pointer', fontSize:'14px', fontWeight:'800', letterSpacing:'1px', fontFamily:"'Inter',sans-serif", opacity: heroVisible ? 1 : 0, animation: heroVisible ? 'spFadeUp 0.5s 0.55s ease forwards' : 'none', animationFillMode:'both' }}>
                VER BENEFICIOS POR NIVEL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PATROCINADOR PRINCIPAL ══ */}
      <section style={{ padding: isMobile ? '50px 18px' : '80px 40px', maxWidth:'1200px', margin:'0 auto' }}>
        <div ref={titleRef} style={{ display:'flex', alignItems:'center', gap:'15px', marginBottom: isMobile ? '28px' : '50px' }}>
          <div style={{ width: titleVisible ? '60px' : '0', height:'3px', backgroundColor:'#c85a3e', transition:'width 0.7s ease', borderRadius:'2px' }}/>
          <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight:'900', margin:0, letterSpacing:'2px', opacity: titleVisible ? 1 : 0, animation: titleVisible ? 'spFadeRight 0.6s 0.1s ease forwards' : 'none', animationFillMode:'both' }}>
            PATROCINADOR PRINCIPAL
          </h2>
        </div>
        <div style={{ display:'flex', justifyContent:'center' }}>
          {titleSponsors.map((s, i) => (
            <div key={i} className="sp-title-card" style={{ width: isMobile ? '100%' : '500px', padding: isMobile ? '24px 16px' : '40px 36px', backgroundColor:'rgba(200,90,62,0.08)', borderRadius:'22px', textAlign:'center', border:'3px solid #f4d35e', cursor:'pointer', position:'relative', overflow:'hidden', opacity: titleVisible ? 1 : 0, animation: titleVisible ? 'spCardIn 0.7s 0.15s ease forwards, spTitleGlow 4s 1s ease-in-out infinite' : 'none', animationFillMode:'both, forwards', animationIterationCount:'1, infinite' }}>
              <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'3px', background:'linear-gradient(90deg,transparent,#f4d35e 50%,transparent)', backgroundSize:'200% 100%', animation:'spShimmer 2.5s linear infinite' }}/>
              <div className="sp-logo-inner" style={{ width:'100%', height: isMobile ? '140px' : '190px', backgroundColor: logoBg(s.bgStyle), borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', padding:'10px' }}>
                <img src={s.logo} alt={s.name} style={logoImgStyle(s.imgScale)} />
              </div>
              <div style={{ marginTop:'14px', fontSize: isMobile ? '15px' : '17px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif" }}>{s.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PATROCINADORES OFICIALES + ALIADOS ══ */}
      <section style={{ padding: isMobile ? '50px 18px' : '80px 40px', borderTop:'1px solid rgba(200,90,62,0.12)', borderBottom:'1px solid rgba(200,90,62,0.12)' }}>
        <div ref={officRef} style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'15px', marginBottom: isMobile ? '24px' : '50px' }}>
            <div style={{ width: officVisible ? '60px' : '0', height:'3px', backgroundColor:'#c85a3e', transition:'width 0.7s ease', borderRadius:'2px' }}/>
            <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight:'900', margin:0, letterSpacing:'2px', opacity: officVisible ? 1 : 0, animation: officVisible ? 'spFadeRight 0.6s 0.1s ease forwards' : 'none', animationFillMode:'both' }}>
              PATROCINADORES
            </h2>
          </div>

          {/* grid: 4 cols desktop, 2 cols mobile — se adapta a 11 items */}
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? '14px' : '26px' }}>
            {officialSponsors.map((s, i) => {
              const cardContent = (
                <div
                  className="sp-offic-card"
                  style={{
                    padding: isMobile ? '18px 14px' : '28px 22px',
                    backgroundColor:'rgba(245,241,232,0.05)', borderRadius:'20px',
                    textAlign:'center', border:'2px solid rgba(244,211,94,0.18)',
                    cursor: s.ig ? 'pointer' : 'default',
                    position:'relative', overflow:'hidden',
                    opacity: officVisible ? 1 : 0,
                    animation: officVisible ? `spCardIn 0.5s ${i * 0.05}s ease forwards` : 'none',
                    animationFillMode:'both',
                    height:'100%',
                  }}
                >
                  <div style={{ position:'absolute', top:0, left:'20%', right:'20%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(244,211,94,0.22),transparent)' }}/>
                  <div
                    className="sp-logo-inner"
                    style={{
                      width:'100%', height: isMobile ? '110px' : '150px',
                      backgroundColor: logoBg(s.bgStyle),
                      borderRadius:'14px', display:'flex', alignItems:'center',
                      justifyContent:'center',
                      padding: s.bgStyle === 'transp' ? '0' : '12px',
                      overflow:'hidden',
                    }}
                  >
                    <picture>
                      {s.logoWebp && <source srcSet={s.logoWebp} type="image/webp" />}
                      <img
                        src={s.logo}
                        alt={s.name}
                        loading="lazy"
                        decoding="async"
                        style={
                          s.bgStyle === 'transp'
                            ? { width:'100%', height:'100%', objectFit:'cover', display:'block', borderRadius:'14px' }
                            : logoImgStyle(s.imgScale)
                        }
                      />
                    </picture>
                  </div>
                  <div style={{ marginTop:'12px', fontSize: isMobile ? '12px' : '14px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif" }}>
                    {s.name}
                  </div>
                </div>
              );

              return s.ig ? (
                <a key={i} href={s.ig} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none' }}>
                  {cardContent}
                </a>
              ) : (
                <div key={i}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CONVIÉRTETE EN ALIADO ══ */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px', backgroundColor:'transparent', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 30% 50%,rgba(244,211,94,0.04),transparent 50%)', pointerEvents:'none' }}/>
        <div ref={becomeRef} style={{ maxWidth:'1100px', margin:'0 auto', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '26px' : '80px', alignItems:'center' }}>
          <div style={{ opacity: becomeVisible ? 1 : 0, animation: becomeVisible ? 'spFadeRight 0.7s ease forwards' : 'none' }}>
            <div style={{ display:'inline-block', backgroundColor:'rgba(244,211,94,0.1)', color:'#f4d35e', padding:'8px 18px', borderRadius:'20px', fontSize:'12px', fontWeight:'700', letterSpacing:'2px', marginBottom:'16px', fontFamily:"'Inter',sans-serif", border:'1px solid rgba(244,211,94,0.25)' }}>
              PATROCINA EL EVENTO
            </div>
            <h2 style={{ fontSize: isMobile ? 'clamp(30px,8vw,44px)' : '56px', fontWeight:'900', marginBottom:'16px', lineHeight:'1.1', fontStyle:'italic', color:'#f4d35e' }}>
              CONVIÉRTETE EN ALIADO
            </h2>
            <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight:'1.8', marginBottom:'28px', opacity:0.88, fontFamily:"'Inter',sans-serif" }}>
              Únete a nuestra red de líderes de la industria y conecta con miles de entusiastas del trail running de todo el mundo.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} className="sp-benefit-row" style={{ display:'flex', alignItems:'center', gap:'14px', opacity: becomeVisible ? 1 : 0, animation: becomeVisible ? `spFadeRight 0.5s ${0.1 + i * 0.1}s ease forwards` : 'none', animationFillMode:'both' }}>
                  <div style={{ width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'rgba(10,74,66,0.4)', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid #f4d35e', flexShrink:0 }}>
                    <Icon size={20} color="#f4d35e" strokeWidth={2.5}/>
                  </div>
                  <span style={{ fontSize: isMobile ? '14px' : '16px', fontFamily:"'Inter',sans-serif", fontWeight:'500' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor:'rgba(200,90,62,0.12)', padding: isMobile ? '22px' : '50px', borderRadius:'25px', border:'2px solid rgba(244,211,94,0.25)', position:'relative', overflow:'hidden', opacity: becomeVisible ? 1 : 0, animation: becomeVisible ? 'spFadeLeft 0.7s 0.15s ease forwards' : 'none', animationFillMode:'both' }}>
            <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'2px', background:'linear-gradient(90deg,transparent,rgba(244,211,94,0.35),transparent)' }}/>
            <div style={{ textAlign: isMobile ? 'left' : 'right', marginBottom:'24px' }}>
              <div style={{ fontSize:'15px', fontWeight:'800', color:'#f4d35e', marginBottom:'6px', fontFamily:"'Inter',sans-serif", letterSpacing:'1px' }}>¿Listo para apoyar la carrera?</div>
              <div style={{ fontSize:'13px', opacity:0.82, fontFamily:"'Inter',sans-serif" }}>Descarga nuestro Prospecto de Patrocinio 2024</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'12px' }}>
              <button className="sp-contact-btn" style={{ backgroundColor:'#c85a3e', color:'#f5f1e8', border:'none', padding:'16px', borderRadius:'15px', cursor:'pointer', fontSize:'14px', fontWeight:'800', fontFamily:"'Inter',sans-serif", display:'flex', alignItems:'center', justifyContent:'center', gap:'10px' }}>
                <Mail size={18}/> CONTACTAR
              </button>
              <a
                href={prospectoPDF}
                download="Prospecto-Patrocinio-TepuyRace-2026.pdf"
                className="sp-dl-btn"
                style={{ backgroundColor:'transparent', color:'#f4d35e', border:'2px solid #f4d35e', padding:'16px', borderRadius:'15px', cursor:'pointer', fontSize:'14px', fontWeight:'800', fontFamily:"'Inter',sans-serif", display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', textDecoration:'none' }}
              >
                <Download size={18}/> DESCARGAR PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
