import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useMedia from "../hooks/useMedia";

/* destinos — sin repetir "y más…" */
const DESTINOS = [
  "Canaima",
  "Los Roques",
  "Margarita",
  "Colonia Tovar",
  "Roraima",
  "Falcón",
  "y más…",
];

const CountdownTimer = () => {
  const { isMobile } = useMedia("(max-width: 768px)");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,90,62,0); }
          50%       { box-shadow: 0 0 30px 6px rgba(200,90,62,0.12); }
        }
        @keyframes ctLinePulse {
          0%, 100% { opacity: 0.4; transform: scaleX(1); }
          50%       { opacity: 1;   transform: scaleX(1.08); }
        }
        @keyframes ctBtnPulse {
          0%, 100% { box-shadow: 0 10px 35px rgba(200,90,62,0.4); }
          50%       { box-shadow: 0 14px 50px rgba(200,90,62,0.65), 0 0 0 6px rgba(200,90,62,0.12); }
        }
        @keyframes ctDestFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctMsgIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ctPulseText {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1; }
        }
        .ct-dest-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(200,90,62,0.08);
          border: 1px solid rgba(200,90,62,0.22);
          border-radius: 20px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 700;
          color: #a2432d;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .ct-dest-tag:hover {
          background: rgba(200,90,62,0.16);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(200,90,62,0.15);
        }
        .ct-dest-tag.is-more {
          background: transparent;
          border-style: dashed;
          opacity: 0.6;
          font-style: italic;
          font-weight: 600;
        }
        .ct-btn-sponsor {
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-btn-sponsor:hover {
          transform: translateY(-3px) scale(1.03) !important;
          background-color: #b04232 !important;
          box-shadow: 0 16px 40px rgba(200,90,62,0.45) !important;
        }
        .ct-btn-inscribe {
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-btn-inscribe:hover {
          transform: translateY(-3px) scale(1.03) !important;
          background-color: #d4664a !important;
          box-shadow: 0 16px 48px rgba(200,90,62,0.55) !important;
        }
      `}</style>

      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: isMobile ? "26px" : "80px",
          padding: isMobile ? "0 18px" : "0",
          width: "100%",
          maxWidth: isMobile ? "92vw" : "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          opacity: visible ? 1 : 0,
          animation: visible ? "ctFadeUp 0.8s ease forwards" : "none",
        }}
      >
        {/* ══ glass card ══ */}
        <div style={{
          position: "relative",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.62)",
          borderRadius: "24px",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(162,67,45,0.15)",
          boxShadow: "0 8px 48px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
          overflow: "hidden",
          animation: visible ? "ctGlow 5s 1s ease-in-out infinite" : "none",
        }}>

          {/* top accent line */}
          <div style={{
            position: "absolute", top: 0, left: "10%", right: "10%", height: "2px",
            background: "linear-gradient(90deg, transparent, #c85a3e 40%, #f4d35e 60%, transparent)",
            animation: "ctLinePulse 3s ease-in-out infinite",
          }} />

          {/* ══ mensaje "nos vamos a fortalecer…" ══ */}
          <div style={{
            padding: isMobile ? "36px 24px 28px" : "44px 52px 32px",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            animation: visible ? "ctMsgIn 0.9s 0.2s ease forwards" : "none",
            animationFillMode: "both",
          }}>
            {/* mensaje principal */}
            <p style={{
              fontSize: isMobile ? "clamp(16px,5vw,22px)" : "clamp(18px,2.2vw,26px)",
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#0d4037",
              lineHeight: 1.4,
              margin: "0 0 10px 0",
              letterSpacing: "-0.3px",
              animation: "ctPulseText 4s ease-in-out infinite",
            }}>
              Nos vamos a fortalecer para volver,
            </p>
            <p style={{
              fontSize: isMobile ? "clamp(16px,5vw,22px)" : "clamp(18px,2.2vw,26px)",
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#a2432d",
              lineHeight: 1.4,
              margin: "0 0 20px 0",
              letterSpacing: "-0.3px",
            }}>
              todo a su tiempo.
            </p>

            {/* sublabel */}
            <div style={{
              display: "inline-block",
              backgroundColor: "rgba(162,67,45,0.08)",
              border: "1px solid rgba(162,67,45,0.18)",
              borderRadius: "20px",
              padding: "6px 18px",
              marginBottom: "22px",
            }}>
              <span style={{
                fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
                color: "#0d4037", opacity: 0.6,
                fontFamily: "'Inter', sans-serif",
                textTransform: "uppercase",
              }}>
                Fecha por confirmar · Lechería, VE
              </span>
            </div>

            {/* botón inscríbete + sublabel "Como corredor" */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <a
                href="https://tepuy.b9ticketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-btn-inscribe"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "13px 28px",
                  backgroundColor: "#c85a3e", color: "#f5f1e8",
                  borderRadius: "50px", fontSize: "13px", fontWeight: 700,
                  fontFamily: "'Inter', sans-serif", letterSpacing: "1px",
                  textDecoration: "none",
                  boxShadow: "0 10px 35px rgba(200,90,62,0.4)",
                  animation: visible ? "ctBtnPulse 2.8s ease-in-out infinite" : "none",
                  whiteSpace: "nowrap",
                }}
              >
                INSCRÍBETE AHORA →
              </a>
              <span style={{
                fontSize: "10px", fontWeight: 700, color: "#a2432d",
                fontFamily: "'Inter', sans-serif", letterSpacing: "1px", opacity: 0.7,
              }}>
                Como corredor
              </span>
            </div>
          </div>

          {/* divider */}
          <div style={{
            height: "1px", margin: "0 10%",
            background: "linear-gradient(90deg, transparent, rgba(162,67,45,0.18), transparent)",
          }} />

          {/* ══ bloque destinos ══ */}
          <div style={{
            padding: isMobile ? "24px 20px 28px" : "28px 52px 36px",
            opacity: visible ? 1 : 0,
            animation: visible ? "ctDestFadeIn 0.7s 0.5s ease forwards" : "none",
            animationFillMode: "both",
          }}>
            {/* intro text */}
            <p style={{
              textAlign: "center",
              fontSize: isMobile ? "12px" : "13px",
              fontWeight: 600,
              color: "#0d4037",
              opacity: 0.75,
              fontFamily: "'Inter', sans-serif",
              margin: "0 0 16px 0",
              lineHeight: 1.5,
            }}>
              Con tu inscripción participas para conocer junto a un acompañante:
            </p>

            {/* destinos — grid flexible, centrado */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 10px",
              justifyContent: "center",
              maxWidth: isMobile ? "100%" : "560px",
              margin: "0 auto 22px",
            }}>
              {DESTINOS.map((d, i) => (
                <div
                  key={d}
                  className={`ct-dest-tag${d === "y más…" ? " is-more" : ""}`}
                  style={{
                    opacity: visible ? 1 : 0,
                    animation: visible ? `ctDestFadeIn 0.4s ${0.55 + i * 0.06}s ease forwards` : "none",
                    animationFillMode: "both",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* separador */}
            <div style={{
              width: "50px", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(162,67,45,0.3), transparent)",
              margin: "0 auto 22px",
            }} />

            {/* botones */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              {/* mi marca */}
              <Link
                to="/sponsors"
                className="ct-btn-sponsor"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "13px 28px",
                  backgroundColor: "#a2432d", color: "#f5f1e8",
                  borderRadius: "50px", fontSize: "13px", fontWeight: 700,
                  fontFamily: "'Inter', sans-serif", letterSpacing: "0.5px",
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(162,67,45,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                ¡Quiero que mi marca sea parte de esto!
              </Link>
            </div>
          </div>

          {/* bottom shimmer */}
          <div style={{
            position: "absolute", bottom: 0, left: "20%", right: "20%", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(162,67,45,0.2), transparent)",
          }} />
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
