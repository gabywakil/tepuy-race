import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import useMedia from "../hooks/useMedia";
import granSabanaImg from '../assets/gransabana.jpg';

/* ─── tiny hook: fires once when element enters viewport ─── */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ─── animated counter ─── */
const AnimatedNumber = ({ target, suffix = "", visible }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const numeric = parseInt(target.replace(/\D/g, ""), 10);
    let start = 0;
    const step = Math.ceil(numeric / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= numeric) { setCount(numeric); clearInterval(interval); }
      else setCount(start);
    }, 24);
    return () => clearInterval(interval);
  }, [visible, target]);
  const raw = parseInt(target.replace(/\D/g, ""), 10);
  const formatted = target.includes(",")
    ? count.toLocaleString()
    : count.toLocaleString();
  return <>{target.replace(/[\d,]+/, count.toLocaleString())}</>;
};

const About = () => {
  const { isMobile } = useMedia("(max-width: 768px)");
  const [sectionRef, sectionVisible] = useInView(0.1);
  const [statsRef, statsVisible] = useInView(0.3);
  const [imgRef, imgVisible] = useInView(0.2);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: isMobile ? "80px 20px" : "140px 40px",
        backgroundColor: "#0a4a42",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── decorative background circles ── */}
      <div style={{
        position: "absolute", top: "-120px", right: "-120px",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,90,62,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "aboutPulse 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "-100px",
        width: "400px", height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(244,211,94,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "aboutPulse 11s ease-in-out infinite reverse",
      }} />

      {/* ── thin decorative line top ── */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "1px", height: "60px",
        background: "linear-gradient(to bottom, transparent, rgba(244,211,94,0.4))",
      }} />

      <style>{`
        @keyframes aboutPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.7; }
        }
        @keyframes aboutFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aboutFadeRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutFadeLeft {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes imgReveal {
          from { opacity: 0; transform: scale(0.94) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(244,211,94,0.0), 0 30px 80px rgba(0,0,0,0.3); }
          50%       { box-shadow: 0 0 40px 4px rgba(244,211,94,0.18), 0 30px 80px rgba(0,0,0,0.3); }
        }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes lineExpand {
          from { width: 0; }
          to   { width: 60px; }
        }
        .stat-card:hover {
          transform: translateY(-4px) !important;
        }
      `}</style>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "48px" : "80px",
        alignItems: "center",
      }}>

        {/* ══ TEXTO ══ */}
        <div>
          {/* badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#c85a3e",
            fontSize: isMobile ? "12px" : "13px",
            fontWeight: "700",
            letterSpacing: "2.5px",
            marginBottom: "24px",
            fontFamily: "'Inter', sans-serif",
            opacity: sectionVisible ? 1 : 0,
            animation: sectionVisible ? "badgePop 0.5s ease forwards" : "none",
          }}>
            <Heart size={15} strokeWidth={2.5} />
            EVENTO TRAIL CON PASIÓN
          </div>

          {/* heading */}
          <h2 style={{
            fontSize: "clamp(36px, 5.5vw, 58px)",
            fontWeight: "900",
            marginBottom: "10px",
            lineHeight: "1.08",
            color: "#f5f1e8",
            fontFamily: "'Playfair Display', serif",
            opacity: sectionVisible ? 1 : 0,
            animation: sectionVisible ? "aboutFadeRight 0.7s 0.1s ease forwards" : "none",
          }}>
            La aventura definitiva en la{" "}
          </h2>
          <h2 style={{
            fontSize: "clamp(36px, 5.5vw, 58px)",
            fontWeight: "900",
            marginBottom: "30px",
            lineHeight: "1.08",
            color: "#f5f1e8",
            fontFamily: "'Playfair Display', serif",
            opacity: sectionVisible ? 1 : 0,
            animation: sectionVisible ? "aboutFadeRight 0.7s 0.2s ease forwards" : "none",
          }}>
            <span style={{
              color: "#c85a3e",
              fontStyle: "italic",
              position: "relative",
            }}>
              naturaleza
              {/* underline decoration */}
              <span style={{
                position: "absolute",
                bottom: "-4px", left: 0,
                height: "3px",
                background: "linear-gradient(90deg, #c85a3e, transparent)",
                borderRadius: "2px",
                animation: sectionVisible ? "lineExpand 0.8s 0.6s ease forwards" : "none",
                width: sectionVisible ? undefined : "0px",
              }} />
            </span>
          </h2>

          {/* decorative rule */}
          <div style={{
            width: "50px", height: "3px",
            background: "linear-gradient(90deg, #f4d35e, transparent)",
            borderRadius: "2px",
            marginBottom: "26px",
            opacity: sectionVisible ? 1 : 0,
            animation: sectionVisible ? "lineExpand 0.7s 0.4s ease forwards" : "none",
          }} />

          {/* body */}
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            lineHeight: "1.85",
            marginBottom: "30px",
            color: "#f5f1e8",
            opacity: sectionVisible ? 0.82 : 0,
            fontFamily: "'Inter', sans-serif",
            animation: sectionVisible ? "aboutFadeUp 0.8s 0.3s ease forwards" : "none",
          }}>
            Vive un evento de carrera inspirado en la naturaleza que empuja tus
            límites a través de paisajes majestuosos. Tepuy Race no es solo un
            maratón: es un viaje espiritual por algunas de las formaciones
            geológicas más antiguas de la Tierra.
          </p>

          {/* ── stats ── */}
          <div
            ref={statsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {[
              { value: "2,600m", label: "Desnivel vertical que pone a prueba tu resistencia", delay: "0s" },
              { value: "500+",   label: "Comunidad internacional de atletas de alto nivel",   delay: "0.15s" },
            ].map(({ value, label, delay }, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  padding: "24px 20px",
                  borderRadius: "18px",
                  background: "rgba(244,211,94,0.06)",
                  border: "1px solid rgba(244,211,94,0.18)",
                  transition: "transform 0.3s ease",
                  opacity: statsVisible ? 1 : 0,
                  animation: statsVisible ? `aboutFadeUp 0.6s ${delay} ease forwards` : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* card shimmer accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #c85a3e, transparent)",
                  opacity: 0.7,
                }} />
                <div style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: "900",
                  color: "#c85a3e",
                  marginBottom: "10px",
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                }}>
                  <AnimatedNumber target={value} visible={statsVisible} />
                </div>
                <div style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  color: "#f5f1e8",
                  opacity: 0.7,
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ IMAGEN ══ */}
        <div
          ref={imgRef}
          style={{
            position: "relative",
            height: isMobile ? "320px" : "620px",
          }}
        >
          {/* offset decorative frame */}
          <div style={{
            position: "absolute",
            top: isMobile ? "12px" : "20px",
            left: isMobile ? "12px" : "20px",
            right: isMobile ? "-12px" : "-20px",
            bottom: isMobile ? "-12px" : "-20px",
            borderRadius: "34px",
            border: "2px solid rgba(244,211,94,0.25)",
            zIndex: 0,
          }} />

          {/* main image wrapper */}
          <div style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            borderRadius: "30px",
            overflow: "hidden",
            border: isMobile ? "5px solid #f4d35e" : "7px solid #f4d35e",
            opacity: imgVisible ? 1 : 0,
            animation: imgVisible ? "imgReveal 0.9s 0.1s ease forwards" : "none",
            animationFillMode: "both",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            animationName: imgVisible ? "imgReveal, borderGlow" : "none",
            animationDuration: "0.9s, 4s",
            animationDelay: "0.1s, 1s",
            animationTimingFunction: "ease, ease-in-out",
            animationFillMode: "both, forwards",
            animationIterationCount: "1, infinite",
          }}>
           <img
  src={granSabanaImg}
  alt="Paisaje del Tepuy"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 6s ease",
  }}
  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
/>

            {/* image overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 55%, rgba(10,74,66,0.55) 100%)",
              pointerEvents: "none",
            }} />

            {/* floating badge on image */}
            <div style={{
              position: "absolute",
              bottom: "24px", left: "24px",
              backgroundColor: "rgba(10,74,66,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(244,211,94,0.4)",
              borderRadius: "14px",
              padding: "12px 18px",
              opacity: imgVisible ? 1 : 0,
              animation: imgVisible ? "badgePop 0.5s 0.8s ease forwards" : "none",
              animationFillMode: "both",
            }}>
              <div style={{
                fontSize: "11px",
                color: "#f4d35e",
                fontWeight: "700",
                letterSpacing: "1.5px",
                fontFamily: "'Inter', sans-serif",
                marginBottom: "2px",
              }}>
                GRAN SABANA
              </div>
              <div style={{
                fontSize: "13px",
                color: "#f5f1e8",
                fontFamily: "'Inter', sans-serif",
                opacity: 0.85,
              }}>
                Venezuela · Oct 2024
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
