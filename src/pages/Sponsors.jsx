import React, { useEffect, useState } from 'react';
import { Award, TrendingUp, Users, Download, Mail } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';
import prospectoPDF from '../assets/prospecto-patrocinio.pdf';

/* ── PATROCINADORES PRINCIPALES ── */
import logoVenetur        from '../assets/logo-venetur.webp';
import logoVeneturPng     from '../assets/logo-venetur.png';
import logoMarea          from '../assets/logo-marea.webp';
import logoMareaPng       from '../assets/logo-marea.png';
import logoMintur         from '../assets/logo-mintur.webp';
import logoMinturPng      from '../assets/logo-mintur.png';

/* ── PATROCINADORES OFICIALES ── */
import logoConMariaBonita from '../assets/logo-conmariabonita.webp';
import logoConMariaPng    from '../assets/logo-conmariabonita.png';
import logoNatvisual      from '../assets/logo-natvisual.webp';
import logoNatvisualPng   from '../assets/logo-natvisual.png';
import logoBoom           from '../assets/logo-boom.webp';
import logoBoomPng        from '../assets/logo-boom.png';
import logoTransporteSV   from '../assets/logo-transportesv.webp';
import logoTransportePng  from '../assets/logo-transportesv.png';

/* ── ALIADOS ── */
import logoDC             from '../assets/logo-dc.webp';
import logoDCPng          from '../assets/logo-dc.png';
import logoSomos          from '../assets/logo-somos.webp';
import logoSomosPng       from '../assets/logo-somos.png';
import logoGw             from '../assets/logo-gw.webp';
import logoGwPng          from '../assets/logo-gw.png';
import logoAleGalarreta   from '../assets/logo-alegalarreta.webp';
import logoAlePng         from '../assets/logo-alegalarreta.png';
import logoPow            from '../assets/logo-pow.webp';
import logoPowPng         from '../assets/logo-pow.png';
import logoVive           from '../assets/logo-vive.webp';
import logoVivePng        from '../assets/logo-vive.png';
import logoSyf            from '../assets/logo-syf.webp';
import logoSyfPng         from '../assets/logo-syf.png';
import logoNativa         from '../assets/logo-nativa.webp';
import logoNativaPng      from '../assets/logo-nativa.png';
import logoCabanas        from '../assets/logo-cabanas-hainburg.webp';
import logoCabanasPng     from '../assets/logo-cabanas-hainburg.png';
import logoLavista        from '../assets/logo-lavista.webp';
import logoLavistaPng     from '../assets/logo-lavista.png';
import logoXeria          from '../assets/logo-xeria.webp';
import logoXeriaPng       from '../assets/logo-xeria.png';
import logoZune           from '../assets/logo-zune.webp';
import logoZunePng        from '../assets/logo-zune.png';
import logoCasarena       from '../assets/logo-casarena.webp';
import logoCasarenaPng    from '../assets/logo-casarena.png';
import logoAquilaya       from '../assets/logo-aquilaya.webp';
import logoAquilayaPng    from '../assets/logo-aquilaya.png';
import logoAnzoEnamora    from '../assets/logo-anzoategui-enamora.webp';
import logoAnzoEnamoraPng from '../assets/logo-anzoategui-enamora.png';
import logoGobernacion    from '../assets/logo-gobernacion.webp';
import logoGobernacionPng from '../assets/logo-gobernacion.png';

/* Todos los logos tienen el mismo fondo verde Tepuy → cover directo */
const LOGO_IMG = {
  width: '100%', height: '100%',
  objectFit: 'cover', display: 'block',
};

const Sponsors = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [mounted, setMounted] = useState(false);

  const [heroRef,   heroVisible]   = useInView(0.1);
  const [titleRef,  titleVisible]  = useInView(0.15);
  const [officRef,  officVisible]  = useInView(0.08);
  const [becomeRef, becomeVisible] = useInView(0.1);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const titleSponsors = [
    { name: 'Venetur', logo: logoVeneturPng, logoWebp: logoVenetur },
    { name: 'Marea',   logo: logoMareaPng,   logoWebp: logoMarea   },
    { name: 'Mintur',  logo: logoMinturPng,  logoWebp: logoMintur  },
  ];

  const officialSponsors = [
    { name: 'Con María Bonita', logo: logoConMariaPng,   logoWebp: logoConMariaBonita },
    { name: 'Natvisual',        logo: logoNatvisualPng,  logoWebp: logoNatvisual      },
    { name: 'BOOM Eventos',     logo: logoBoomPng,       logoWebp: logoBoom           },
    { name: 'Transporte SV',    logo: logoTransportePng, logoWebp: logoTransporteSV   },
  ];

  const partners = [
    { name: 'DC Gráficos',             logo: logoDCPng,          logoWebp: logoDC,           ig: 'https://www.instagram.com/dcgraficos?igsh=MXd2anNodzRsNjlvMA==' },
    { name: 'Grupo Somos',             logo: logoSomosPng,       logoWebp: logoSomos,        ig: 'https://www.instagram.com/gruposomos_pzo?igsh=MXJ6dmttZzkwODAycA==' },
    { name: 'GW Studios',              logo: logoGwPng,          logoWebp: logoGw,           ig: 'https://www.instagram.com/gw.studios_?igsh=MW9rZTB1djN5YmE4eA==' },
    { name: 'Ale Galarreta',           logo: logoAlePng,         logoWebp: logoAleGalarreta, ig: 'https://www.instagram.com/ale.galarreta?igsh=MWVqcWx2Mmlzb2lu' },
    { name: 'POW Fitness',             logo: logoPowPng,         logoWebp: logoPow,          ig: 'https://www.instagram.com/powfitnessve?igsh=MTgxaDh5YmZrbHd6dg==' },
    { name: 'Vive Pilates',            logo: logoVivePng,        logoWebp: logoVive,         ig: 'https://www.instagram.com/vivepilates.studio?igsh=MTRoNmI3dWlnOHdiNA==' },
    { name: 'SYF Sportswear',          logo: logoSyfPng,         logoWebp: logoSyf,          ig: 'https://www.instagram.com/syf.sportswear?igsh=MW55dXUwMjJvemJyMg==' },
    { name: 'Nativa Tours Khasen',     logo: logoNativaPng,      logoWebp: logoNativa        },
    { name: 'Cabañas Hainburg',        logo: logoCabanasPng,     logoWebp: logoCabanas       },
    { name: 'LaVista Glamping',        logo: logoLavistaPng,     logoWebp: logoLavista       },
    { name: 'Xeria',                   logo: logoXeriaPng,       logoWebp: logoXeria         },
    { name: 'Zune',                    logo: logoZunePng,        logoWebp: logoZune          },
    { name: 'Casareña Beach House',    logo: logoCasarenaPng,    logoWebp: logoCasarena      },
    { name: 'Alquila Ya',              logo: logoAquilayaPng,    logoWebp: logoAquilaya      },
    { name: 'Anzoátegui te enamora',   logo: logoAnzoEnamoraPng, logoWebp: logoAnzoEnamora   },
    { name: 'Gob. Bolivariano Anzoátegui', logo: logoGobernacionPng, logoWebp: logoGobernacion },
  ];

  const benefits = [
    { icon: Award,      text: 'Visibilidad de marca ante más de 5,000 atletas' },
    { icon: TrendingUp, text: 'Zonas de activación exclusivas el día de carrera' },
    { icon: Users,      text: 'Marketing digital en todas nuestras redes sociales' },
  ];

  /* Card de logo reutilizable */
  const LogoCard = ({ s, height, className, style }) => (
    <div
      className={className}
      style={{
        borderRadius: '16px', overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      <div style={{ width: '100%', height, overflow: 'hidden' }}>
        <picture>
          <source srcSet={s.logoWebp} type="image/webp" />
          <img src={s.logo} alt={s.name} loading="lazy" decoding="async" style={LOGO_IMG} />
        </picture>
      </div>
      <div style={{
        padding: '8px 10px',
        fontSize: isMobile ? '11px' : '12px',
        fontWeight: '700', color: '#f5f1e8',
        fontFamily: "'Inter',sans-serif",
        textAlign: 'center',
        backgroundColor: 'rgba(10,40,32,0.6)',
        letterSpacing: '0.3px',
      }}>
        {s.name}
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily:"'Playfair Display',serif", backgroundColor:'transparent', color:'#f5f1e8', minHeight:'100vh', paddingTop:'100px', overflowX:'hidden' }}>
      <style>{`
        @keyframes spFadeUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spFadeRight { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes spFadeLeft  { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes spCardIn    { from{opacity:0;transform:translateY(20px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes spHeroIn    { from{opacity:0;transform:scale(0.95) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes spShimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes spTitleGlow { 0%,100%{box-shadow:0 15px 40px rgba(0,0,0,0.08);} 50%{box-shadow:0 20px 60px rgba(244,211,94,0.25);} }
        @keyframes spBtnPulse  { 0%,100%{box-shadow:0 5px 20px rgba(200,90,62,0.35);} 50%{box-shadow:0 8px 30px rgba(200,90,62,0.6);} }

        .sp-title-card { transition:transform 0.28s ease,box-shadow 0.28s ease; border:3px solid #f4d35e; border-radius:20px; overflow:hidden; cursor:default; position:relative; }
        .sp-title-card:hover { transform:translateY(-6px)!important; }
        .sp-title-card:hover img { transform:scale(1.05); }
        .sp-title-card img { transition:transform 0.35s ease; }

        .sp-offic-card { transition:transform 0.28s,border-color 0.28s,box-shadow 0.28s; border:2px solid rgba(244,211,94,0.18); border-radius:18px; overflow:hidden; }
        .sp-offic-card:hover { transform:translateY(-6px)!important; border-color:#f4d35e!important; box-shadow:0 16px 36px rgba(200,90,62,0.18)!important; }
        .sp-offic-card:hover img { transform:scale(1.05); }
        .sp-offic-card img { transition:transform 0.35s ease; }

        .sp-partner-card { transition:transform 0.28s,border-color 0.28s,box-shadow 0.28s; border:2px solid rgba(200,90,62,0.12); border-radius:16px; overflow:hidden; }
        .sp-partner-card:hover { transform:translateY(-5px)!important; border-color:#f4d35e!important; box-shadow:0 12px 28px rgba(200,90,62,0.14)!important; }
        .sp-partner-card:hover img { transform:scale(1.05); }
        .sp-partner-card img { transition:transform 0.35s ease; }

        .sp-hero-btn { animation:spBtnPulse 2.8s ease-in-out infinite; transition:transform 0.2s,background-color 0.2s; }
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
            <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg,rgba(10,74,66,0.95) 0%,rgba(200,90,62,0.85) 100%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: isMobile ? '40px 18px' : '40px', minHeight: isMobile ? '280px' : 'auto' }}>
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
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: isMobile ? '16px' : '28px' }}>
          {titleSponsors.map((s, i) => (
            <div
              key={i}
              className="sp-title-card"
              style={{
                opacity: titleVisible ? 1 : 0,
                animation: titleVisible ? `spCardIn 0.6s ${i * 0.1}s ease forwards, spTitleGlow 4s 1s ease-in-out infinite` : 'none',
                animationFillMode: 'both, forwards',
                animationIterationCount: '1, infinite',
              }}
            >
              <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'3px', background:'linear-gradient(90deg,transparent,#f4d35e 50%,transparent)', backgroundSize:'200% 100%', animation:'spShimmer 2.5s linear infinite', zIndex:1 }}/>
              <div style={{ width:'100%', height: isMobile ? '200px' : '260px', overflow:'hidden' }}>
                <picture>
                  <source srcSet={s.logoWebp} type="image/webp" />
                  <img src={s.logo} alt={s.name} style={LOGO_IMG} />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PATROCINADORES OFICIALES ══ */}
      <section style={{ padding: isMobile ? '50px 18px' : '80px 40px', borderTop:'1px solid rgba(200,90,62,0.12)' }}>
        <div ref={officRef} style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'15px', marginBottom: isMobile ? '24px' : '50px' }}>
            <div style={{ width: officVisible ? '60px' : '0', height:'3px', backgroundColor:'#c85a3e', transition:'width 0.7s ease', borderRadius:'2px' }}/>
            <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight:'900', margin:0, letterSpacing:'2px', opacity: officVisible ? 1 : 0, animation: officVisible ? 'spFadeRight 0.6s 0.1s ease forwards' : 'none', animationFillMode:'both' }}>
              PATROCINADORES OFICIALES
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: isMobile ? '14px' : '22px' }}>
            {officialSponsors.map((s, i) => (
              <div
                key={i}
                className="sp-offic-card"
                style={{
                  opacity: officVisible ? 1 : 0,
                  animation: officVisible ? `spCardIn 0.5s ${i * 0.08}s ease forwards` : 'none',
                  animationFillMode: 'both',
                }}
              >
                <div style={{ width:'100%', height: isMobile ? '140px' : '180px', overflow:'hidden' }}>
                  <picture>
                    <source srcSet={s.logoWebp} type="image/webp" />
                    <img src={s.logo} alt={s.name} loading="lazy" decoding="async" style={LOGO_IMG} />
                  </picture>
                </div>
                <div style={{ padding:'10px', fontSize: isMobile ? '11px' : '13px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif", textAlign:'center', backgroundColor:'rgba(10,40,32,0.6)' }}>
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ALIADOS ══ */}
      <section style={{ padding: isMobile ? '50px 18px' : '80px 40px', borderTop:'1px solid rgba(200,90,62,0.12)', borderBottom:'1px solid rgba(200,90,62,0.12)' }}>
        <div style={{ maxWidth:'1200px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'15px', marginBottom: isMobile ? '24px' : '50px' }}>
            <div style={{ width:'60px', height:'3px', backgroundColor:'#c85a3e', borderRadius:'2px' }}/>
            <h2 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight:'900', margin:0, letterSpacing:'2px' }}>
              ALIADOS
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? '12px' : '20px' }}>
            {partners.map((p, i) => {
              const card = (
                <div
                  className="sp-partner-card"
                  style={{
                    opacity: 1,
                    animation: `spCardIn 0.4s ${i * 0.04}s ease forwards`,
                    animationFillMode: 'both',
                    cursor: p.ig ? 'pointer' : 'default',
                  }}
                >
                  <div style={{ width:'100%', height: isMobile ? '120px' : '155px', overflow:'hidden' }}>
                    <picture>
                      <source srcSet={p.logoWebp} type="image/webp" />
                      <img src={p.logo} alt={p.name} loading="lazy" decoding="async" style={LOGO_IMG} />
                    </picture>
                  </div>
                  <div style={{ padding:'8px 10px', fontSize: isMobile ? '10px' : '12px', fontWeight:'700', color:'#f5f1e8', fontFamily:"'Inter',sans-serif", textAlign:'center', backgroundColor:'rgba(10,40,32,0.6)' }}>
                    {p.name}
                  </div>
                </div>
              );
              return p.ig ? (
                <a key={i} href={p.ig} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none' }}>
                  {card}
                </a>
              ) : (
                <div key={i}>{card}</div>
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
