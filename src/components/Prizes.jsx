import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      position: "1er Lugar",
      icon: Trophy,
      prize: "Campeón",
      description: "Categoría General",
      color: "#f4d35e",
      size: "large"
    },
    {
      position: "2do Lugar",
      icon: Medal,
      prize: "Subcampeón",
      description: "Categoría General",
      color: "#c85a3e",
      size: "medium"
    },
    {
      position: "3er Lugar",
      icon: Award,
      prize: "Tercer Puesto",
      description: "Categoría General",
      color: "#c85a3e",
      size: "medium"
    }
  ];

  const additionalPrizes = [
    { category: "Mejor Tiempo Femenino" },
    { category: "Mejor Tiempo Masculino" },
    { category: "Mejor Equipo" }
  ];

  return (
    <section style={{
      padding: '120px 40px',
      backgroundColor: '#0a4a42',
      width: '100%',
      margin: 0,
      borderTop: '1px solid rgba(244, 211, 94, 0.2)',
      borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(200, 90, 62, 0.15)',
            padding: '10px 24px',
            borderRadius: '30px',
            marginBottom: '25px',
            border: '1px solid rgba(200, 90, 62, 0.3)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: '600',
            color: '#c85a3e',
            letterSpacing: '1.5px'
          }}>
            <Trophy size={16} />
            PREMIOS Y RECONOCIMIENTOS
          </div>

          <h2 style={{
            fontSize: '56px',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.1',
            color: '#f5f1e8'
          }}>
            Premios y <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Reconocimientos</span>
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: '#f5f1e8',
            opacity: 0.8,
            maxWidth: '650px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.6'
          }}>
            Reconocimiento y premios especiales para los mejores atletas en cada categoría.
          </p>
        </div>

        {/* Main Prizes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '70px'
        }}>
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            const isFirst = index === 0;
            
            return (
              <div key={index} style={{
                padding: isFirst ? '60px 40px' : '50px 35px',
                backgroundColor: isFirst ? 'rgba(244, 211, 94, 0.12)' : 'rgba(245, 241, 232, 0.08)',
                borderRadius: '25px',
                textAlign: 'center',
                border: `3px solid ${isFirst ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)'}`,
                boxShadow: isFirst ? '0 25px 60px rgba(244, 211, 94, 0.25)' : '0 15px 40px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                transform: isFirst ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = isFirst ? 'scale(1.08) translateY(-15px)' : 'scale(1.03) translateY(-5px)';
                e.currentTarget.style.boxShadow = isFirst ? '0 30px 70px rgba(244, 211, 94, 0.35)' : '0 20px 50px rgba(244, 211, 94, 0.25)';
                e.currentTarget.style.borderColor = '#f4d35e';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = isFirst ? 'scale(1.05) translateY(-10px)' : 'scale(1)';
                e.currentTarget.style.boxShadow = isFirst ? '0 25px 60px rgba(244, 211, 94, 0.25)' : '0 15px 40px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.borderColor = isFirst ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)';
              }}>
                {/* Icon */}
                <div style={{
                  width: isFirst ? '90px' : '75px',
                  height: isFirst ? '90px' : '75px',
                  borderRadius: '50%',
                  backgroundColor: `rgba(${isFirst ? '244, 211, 94' : '200, 90, 62'}, 0.2)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px',
                  border: `3px solid ${prize.color}`
                }}>
                  <Icon size={isFirst ? 45 : 38} color={prize.color} strokeWidth={2.5} />
                </div>

                {/* Position */}
                <div style={{
                  fontSize: isFirst ? '20px' : '18px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  marginBottom: '15px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  {prize.position}
                </div>

                {/* Prize Label */}
                <div style={{
                  fontSize: isFirst ? '32px' : '26px',
                  fontWeight: '900',
                  color: prize.color,
                  marginBottom: '10px',
                  lineHeight: '1.2'
                }}>
                  {prize.prize}
                </div>

                {/* Description */}
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f5f1e8',
                  opacity: 0.8,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.5px'
                }}>
                  {prize.description}
                </div>

                {/* Badge for first place */}
                {isFirst && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '20px',
                    backgroundColor: '#f4d35e',
                    color: '#0a4a42',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 5px 15px rgba(244, 211, 94, 0.4)'
                  }}>
                    TOP PRIZE
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Prizes */}
        <div style={{
          backgroundColor: 'rgba(245, 241, 232, 0.08)',
          padding: '50px',
          borderRadius: '25px',
          border: '2px solid rgba(244, 211, 94, 0.2)'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#f5f1e8',
            marginBottom: '35px',
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif"
          }}>
            Premios Adicionales
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px'
          }}>
            {additionalPrizes.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '25px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '15px',
                border: '1px solid rgba(244, 211, 94, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.1)';
                e.currentTarget.style.borderColor = '#f4d35e';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.2)';
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(200, 90, 62, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '2px solid #c85a3e'
                }}>
                  <Award size={24} color="#c85a3e" strokeWidth={2.5} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#f5f1e8',
                    lineHeight: '1.4',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;