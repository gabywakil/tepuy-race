import React, { useEffect, useState } from "react";
import useMedia from "../hooks/useMedia";

const CountdownTimer = () => {
  const { isMobile } = useMedia("(max-width: 768px)");

  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 12,
    minutes: 45,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "18px" : "30px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: isMobile ? "26px" : "80px",
    padding: isMobile ? "18px" : "40px",
    width: "100%",
    maxWidth: isMobile ? "92vw" : "980px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(162, 67, 45, 0.1)",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
    boxSizing: "border-box",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(4, auto)",
    gap: isMobile ? "14px 18px" : "30px",
    alignItems: "center",
    justifyContent: "center",
    width: isMobile ? "100%" : "auto",
  };

  const numberStyle = {
    fontSize: "clamp(30px, 7vw, 56px)",
    fontWeight: 900,
    color: "#a2432d",
    lineHeight: 1,
    marginBottom: "8px",
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "2px",
    color: "#0d4037",
    opacity: 0.7,
    textTransform: "uppercase",
    fontFamily: "'Inter', sans-serif",
  };

  const dividerStyle = isMobile
    ? {
        width: "100%",
        height: "2px",
        background: "rgba(162, 67, 45, 0.18)",
        borderRadius: "2px",
      }
    : {
        width: "2px",
        alignSelf: "stretch",
        background: "rgba(162, 67, 45, 0.2)",
        margin: "0 20px",
        borderRadius: "2px",
      };

  const rightBlockStyle = {
    textAlign: isMobile ? "center" : "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "flex-start",
    width: isMobile ? "100%" : "auto",
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            style={{
              textAlign: "center",
              minWidth: 0,
            }}
          >
            <div style={numberStyle}>{String(value).padStart(2, "0")}</div>
            <div style={labelStyle}>{unit}</div>
          </div>
        ))}
      </div>

      <div style={dividerStyle} />

      <div style={rightBlockStyle}>
        <div
          style={{
            fontSize: isMobile ? "12px" : "14px",
            fontWeight: 600,
            color: "#0d4037",
            opacity: 0.7,
            marginBottom: "6px",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "1px",
          }}
        >
          UNTIL RACE DAY
        </div>
        <div
          style={{
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: 700,
            color: "#a2432d",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          October 15, 2024
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
