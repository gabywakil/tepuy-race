import React from "react";
import { Heart } from "lucide-react";
import useMedia from "../hooks/useMedia";

const About = () => {
  const { isMobile } = useMedia("(max-width: 768px)");

  return (
    <section
      style={{
        padding: isMobile ? "80px 18px" : "120px 40px",
        width: "100%",
        margin: 0,
        backgroundColor: "#0a4a42",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "32px" : "80px",
            alignItems: "center",
          }}
        >
          {/* TEXTO */}
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#c85a3e",
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: "700",
                letterSpacing: "2px",
                marginBottom: isMobile ? "14px" : "20px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Heart size={16} />
              EVENTO TRAIL CON PASIÓN
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 8vw, 56px)",
                fontWeight: "900",
                marginBottom: isMobile ? "18px" : "30px",
                lineHeight: 1.05,
                color: "#f5f1e8",
                letterSpacing: "-1px",
              }}
            >
              La aventura <br />
              definitiva en la{" "}
              <span style={{ color: "#c85a3e", fontStyle: "italic" }}>
                naturaleza
              </span>
            </h2>

            <p
              style={{
                fontSize: "clamp(15px, 4vw, 18px)",
                lineHeight: 1.9,
                marginBottom: isMobile ? "18px" : "30px",
                color: "#f5f1e8",
                opacity: 0.8,
                fontFamily: "'Inter', sans-serif",
                fontWeight: "400",
                maxWidth: "560px",
              }}
            >
              Vive un evento de carrera inspirado en la naturaleza que empuja tus
              límites a través de paisajes majestuosos. Tepuy Race no es solo un
              maratón: es un viaje espiritual por algunas de las formaciones
              geológicas más antiguas de la Tierra.
            </p>

            {/* MÉTRICAS (en móvil no se cortan) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: isMobile ? "18px" : "30px",
                marginTop: isMobile ? "22px" : "40px",
                maxWidth: "560px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "clamp(28px, 7vw, 42px)",
                    fontWeight: "900",
                    color: "#c85a3e",
                    marginBottom: "8px",
                    lineHeight: 1,
                  }}
                >
                  2,600m
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.6px",
                    color: "#f5f1e8",
                    opacity: 0.72,
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Desnivel vertical que pone a prueba tu resistencia
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "clamp(28px, 7vw, 42px)",
                    fontWeight: "900",
                    color: "#c85a3e",
                    marginBottom: "8px",
                    lineHeight: 1,
                  }}
                >
                  500+
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.6px",
                    color: "#f5f1e8",
                    opacity: 0.72,
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  Comunidad internacional con atletas de alto nivel
                </div>
              </div>
            </div>
          </div>

          {/* IMAGEN */}
          <div
            style={{
              position: "relative",
              minWidth: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Barra amarilla (en móvil no invade) */}
            <div
              style={{
                position: "absolute",
                right: isMobile ? "10px" : "-14px",
                top: isMobile ? "10px" : "0",
                height: isMobile ? "85%" : "100%",
                width: isMobile ? "10px" : "14px",
                borderRadius: "999px",
                backgroundColor: "#f4d35e",
                opacity: 0.95,
                zIndex: 1,
              }}
            />

            <div
              style={{
                width: "100%",
                maxWidth: "560px",
                height: isMobile ? "320px" : "600px",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                border: isMobile ? "5px solid #f4d35e" : "8px solid #f4d35e",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* ✅ Cambia esta imagen por la tuya */}
              <img
                src={`${import.meta.env.BASE_URL}images/tepuy.jpg`}
                alt="Paisaje del Tepuy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  // fallback visual si no encuentra la imagen
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Fallback si no hay imagen aún */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(245, 241, 232, 0.9) 0%, rgba(200, 90, 62, 0.9) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0a4a42",
                  fontSize: isMobile ? "16px" : "22px",
                  fontWeight: "800",
                  fontFamily: "'Inter', sans-serif",
                  textAlign: "center",
                  padding: "24px",
                }}
              >
                Coloca tu imagen en: <br />
                <strong>public/images/tepuy.jpg</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow suave (pro) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(244, 211, 94, 0.08), transparent 55%), radial-gradient(circle at 80% 60%, rgba(200, 90, 62, 0.10), transparent 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default About;
