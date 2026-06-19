import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useMedia from "../hooks/useMedia";

/* ── flip digit animation ── */
const FlipDigit = ({ value, prev }) => {
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlipping(true);
      const t = setTimeout(() => setFlipping(false), 320);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <span style={{
      display: "inline-block",
      transition: flipping
        ? "transform 0.16s ease-in, opacity 0.16s ease-in"
        : "transform 0.16s ease-out, opacity 0.16s ease-out",
      transform: flipping ? "translateY(-6px) scaleY(0.85)" : "translateY(0) scaleY(1)",
      opacity: flipping ? 0.4 : 1,
    }}>
      {String(value).padStart(2, "0")}
    </span>
  );
};

const TARGET   = new Date("2026-08-02T07:00:00");
const calcTime = () => {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  };
};

/* destinos para el sorteo */
const DESTINOS_LEFT  = ["Canaima", "Los Roques", "Margarita", "y más…"];
const DESTINOS_RIGHT = ["Colonia Tovar", "Roraima", "Falcón", "y más…"];

const CountdownTimer = () => {
  const { isMobile } = useMedia("(max-width: 768px)");
  const [visible,  setVisible]  = useState(false);
  const ref = useRef(null);

  const [timeLeft,  setTimeLeft]  = useState(calcTime);
  const [prevTime,  setPrevTime]  = useState(calcTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        setPrevTime(current);
        return calcTime();
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const units = [
    { key: "days",    label: "DÍAS" },
    { key: "hours",   label: "HORAS" },
    { key: "minutes", label: "MINUTOS" },
    { key: "seconds", label: "SEGUNDOS" },
  ];

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
        @keyframes ctPulseRing {
          0%   { transform: scale(0.92); opacity: 0.6; }
          70%  { transform: scale(1.06); opacity: 0; }
          100% { transform: scale(1.06); opacity: 0; }
        }
        @keyframes ctSepBlink {
          0%, 100% { opacity: 0.9; }
          50%       { opacity: 0.25; }
        }
        @keyframes ctBadgeIn {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
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
        .ct-dest-tag {
          display: inline-block;
          background: rgba(200,90,62,0.1);
          border: 1px solid rgba(200,90,62,0.25);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 13px;
          font-weight: 700;
          color: #a2432d;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
          transition: background 0.2s, transform 0.2s;
        }
        .ct-dest-tag:hover {
          background: rgba(200,90,62,0.18);
          transform: translateY(-2px);
        }
        .ct-btn-sponsor {
          transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-btn-sponsor:hover {
          transform: translateY(-3px) scale(1.03) !important;
          background-color: #b04232 !important;
          box-shadow: 0 16px 40px rgba(200,90,62,0.45) !important;
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
          gap: "0",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isMobile ? "26px" : "80px",
          padding: isMobile ? "28px 18px" : "0",
          width: "100%",
          maxWidth: isMobile ? "92vw" : "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
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
            position: "absolute", top: 0, left: "10%", right: "10%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #c85a3e 40%, #f4d35e 60%, transparent)",
            animation: "ctLinePulse 3s ease-in-out infinite",
          }} />

          {/* ── dígitos + bloque derecho ── */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            padding: isMobile ? "28px 20px 20px" : "36px 44px 28px",
            gap: isMobile ? "20px" : "0",
          }}>

            {/* digit grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, auto)",
              gap: isMobile ? "14px 10px" : "0",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
              {units.map(({ key, label }, idx) => (
                <React.Fragment key={key}>
                  <div style={{
                    textAlign: "center",
                    padding: isMobile ? "0" : "0 28px",
                    position: "relative",
                    opacity: visible ? 1 : 0,
                    animation: visible ? `ctFadeUp 0.5s ${idx * 0.08}s ease forwards` : "none",
                    animationFillMode: "both",
                  }}>
                    {key === "seconds" && (
                      <div style={{
                        position: "absolute", inset: "-8px",
                        borderRadius: "16px",
                        border: "2px solid rgba(200,90,62,0.3)",
                        animation: "ctPulseRing 1s ease-out infinite",
                        pointerEvents: "none",
                      }} />
                    )}
                    <div style={{
                      fontSize: isMobile ? "clamp(34px,12vw,52px)" : "clamp(44px,5vw,64px)",
                      fontWeight: 900, color: "#a2432d", lineHeight: 1, marginBottom: "8px",
                      fontFamily: "'Playfair Display', serif", letterSpacing: "-1px",
                    }}>
                      <FlipDigit value={timeLeft[key]} prev={prevTime[key]} />
                    </div>
                    <div style={{
                      fontSize: "10px", fontWeight: 700, letterSpacing: "2px",
                      color: "#0d4037", opacity: 0.6,
                      textTransform: "uppercase", fontFamily: "'Inter', sans-serif",
                    }}>
                      {label}
                    </div>
                  </div>

                  {!isMobile && idx < units.length - 1 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", padding: "0 4px", paddingBottom: "18px" }}>
                      {[0, 1].map(d => (
                        <div key={d} style={{
                          width: "5px", height: "5px", borderRadius: "50%",
                          backgroundColor: "#c85a3e",
                          opacity: key === "seconds" ? undefined : 0.5,
                          animation: key === "seconds" ? `ctSepBlink 1s ${d * 0.15}s ease-in-out infinite` : "none",
                        }} />
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* divider */}
            {!isMobile && (
              <div style={{ width: "1px", height: "72px", background: "linear-gradient(to bottom, transparent, rgba(162,67,45,0.25), transparent)", margin: "0 32px", flexShrink: 0 }} />
            )}
            {isMobile && (
              <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, rgba(162,67,45,0.25), transparent)" }} />
            )}

            {/* ── bloque derecho ── */}
            <div style={{
              textAlign: isMobile ? "center" : "left",
              flexShrink: 0,
              opacity: visible ? 1 : 0,
              animation: visible ? "ctBadgeIn 0.6s 0.4s ease forwards" : "none",
              animationFillMode: "both",
            }}>
              {/* label "Día de la carrera" */}
              <div style={{
                fontSize: "11px", fontWeight: 700, color: "#0d4037",
                opacity: 0.6, marginBottom: "8px",
                fontFamily: "'Inter', sans-serif", letterSpacing: "2px",
              }}>
                DÍA DE LA CARRERA
              </div>

              {/* date badge */}
              <div style={{
                display: "inline-block",
                backgroundColor: "rgba(162,67,45,0.1)",
                border: "1.5px solid rgba(162,67,45,0.25)",
                borderRadius: "12px",
                padding: "10px 18px",
                marginBottom: "14px",
              }}>
                <div style={{
                  fontSize: isMobile ? "17px" : "20px", fontWeight: 800,
                  color: "#a2432d", fontFamily: "'Playfair Display', serif",
                  lineHeight: 1, marginBottom: "4px",
                }}>
                  Ago 02, 2026
                </div>
                <div style={{
                  fontSize: "11px", color: "#0d4037", opacity: 0.55,
                  fontFamily: "'Inter', sans-serif", letterSpacing: "1px",
                }}>
                  LECHERÍA · VE
                </div>
              </div>

              {/* botón INSCRÍBETE + sublabel */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start", gap: "6px" }}>
                <a
                  href="https://tepuy.b9ticketing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-btn-inscribe"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    gap: "8px", padding: "12px 24px",
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
                {/* sublabel debajo del botón principal */}
                <span style={{
                  fontSize: "10px", fontWeight: 700,
                  color: "#a2432d", fontFamily: "'Inter', sans-serif",
                  letterSpacing: "1px", opacity: 0.75,
                  paddingLeft: "4px",
                }}>
                  Como corredor
                </span>
              </div>
            </div>
          </div>

          {/* ══ bloque destinos ══ */}
          <div style={{
            borderTop: "1px solid rgba(162,67,45,0.12)",
            padding: isMobile ? "20px 20px 24px" : "22px 44px 28px",
            opacity: visible ? 1 : 0,
            animation: visible ? "ctDestFadeIn 0.7s 0.6s ease forwards" : "none",
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
              margin: "0 0 14px 0",
              lineHeight: 1.5,
            }}>
              Con tu inscripción participas para conocer junto a un acompañante:
            </p>

            {/* destinos en 2 columnas */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 12px",
              justifyItems: "center",
              maxWidth: isMobile ? "100%" : "520px",
              margin: "0 auto 20px",
            }}>
              {DESTINOS_LEFT.map((d, i) => (
                <div key={d} className="ct-dest-tag" style={{
                  width: "100%", textAlign: "center",
                  opacity: visible ? 1 : 0,
                  animation: visible ? `ctDestFadeIn 0.4s ${0.7 + i * 0.07}s ease forwards` : "none",
                  animationFillMode: "both",
                }}>
                  {d}
                </div>
              ))}
              {DESTINOS_RIGHT.map((d, i) => (
                <div key={d} className="ct-dest-tag" style={{
                  width: "100%", textAlign: "center",
                  opacity: visible ? 1 : 0,
                  animation: visible ? `ctDestFadeIn 0.4s ${0.72 + i * 0.07}s ease forwards` : "none",
                  animationFillMode: "both",
                }}>
                  {d}
                </div>
              ))}
            </div>

            {/* separador */}
            <div style={{
              width: "60px", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(162,67,45,0.3), transparent)",
              margin: "0 auto 18px",
            }} />

            {/* botón ¡Quiero que mi marca sea parte! */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                to="/sponsors"
                className="ct-btn-sponsor"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "12px 28px",
                  backgroundColor: "#a2432d", color: "#f5f1e8",
                  borderRadius: "50px", fontSize: "13px", fontWeight: 700,
                  fontFamily: "'Inter', sans-serif", letterSpacing: "0.5px",
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(162,67,45,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                ¡Quiero que mi marca sea parte de esto!
              </Link>
            </div>
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "12px 28px",
                  backgroundColor: "#a2432d", color: "#f5f1e8",
                  borderRadius: "50px", fontSize: "13px", fontWeight: 700,
                  fontFamily: "'Inter', sans-serif", letterSpacing: "0.5px",
                  textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(162,67,45,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                ¡Quiero que mi marca sea parte de esto!
              </a>
            </div>
          </div>

          {/* bottom shimmer */}
          <div style={{
            position: "absolute", bottom: 0, left: "20%", right: "20%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(162,67,45,0.2), transparent)",
          }} />
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
