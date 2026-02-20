import React from "react";
import { Heart } from "lucide-react";
import useMedia from "../hooks/useMedia";

const About = () => {
  const { isMobile } = useMedia("(max-width: 768px)");

  return (
    <section
      style={{
        padding: isMobile ? "80px 20px" : "120px 40px",
        backgroundColor: "#0a4a42",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "80px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#c85a3e",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "20px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <Heart size={16} />
            EVENTO TRAIL CON PASIÓN
          </div>

          <h2
            style={{
              fontSize: "clamp(38px, 6vw, 56px)",
              fontWeight: "900",
              marginBottom: "30px",
              lineHeight: "1.1",
              color: "#f5f1e8",
            }}
          >
            La aventura definitiva en la{" "}
            <span
              style={{
                color: "#c85a3e",
                fontStyle: "italic",
              }}
            >
              naturaleza
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "1.8",
              marginBottom: "30px",
              color: "#f5f1e8",
              opacity: 0.8,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Vive un evento de carrera inspirado en la naturaleza que empuja tus
            límites a través de paisajes majestuosos. Tepuy Race no es solo un
            maratón: es un viaje espiritual por algunas de las formaciones
            geológicas más antiguas de la Tierra.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: "900",
                  color: "#c85a3e",
                  marginBottom: "8px",
                }}
              >
                2,600m
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  color: "#f5f1e8",
                  opacity: 0.7,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Desnivel vertical que pone a prueba tu resistencia
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: "900",
                  color: "#c85a3e",
                  marginBottom: "8px",
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  color: "#f5f1e8",
                  opacity: 0.7,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Comunidad internacional de atletas de alto nivel
              </div>
            </div>
          </div>
        </div>

        {/* IMAGEN */}
        <div
          style={{
            position: "relative",
            height: isMobile ? "320px" : "600px",
            borderRadius: "30px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            border: isMobile ? "5px solid #f4d35e" : "8px solid #f4d35e",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/tepuy.jpg`}
            alt="Paisaje del Tepuy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
