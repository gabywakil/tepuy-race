import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const Prizes = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  const prizes = [
    { position: "1er Lugar", icon: Trophy, prize: "Campeón", description: "Categoría General", color: "#f4d35e" },
    { position: "2do Lugar", icon: Medal, prize: "Subcampeón", description: "Categoría General", color: "#c85a3e" },
    { position: "3er Lugar", icon: Award, prize: "Tercer Puesto", description: "Categoría General", color: "#c85a3e" }
  ];

  const additionalPrizes = [
    { category: "Mejor Tiempo Femenino" },
    { category: "Mejor Tiempo Masculino" },
    { category: "Mejor Equipo" }
  ];

  return (
    <section style={{
      padding: isMobile ? '80px 18px' : '120px 40px',
      backgroundColor: '#0a4a42',
      width: '100%',
      margin: 0,
      borderTop: '1px solid rgba(244, 211, 94, 0.2)',
      borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '42px' : '80px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(200, 90, 62, 0.15)',
            padding: '10px 24px',
            borderRadius: '30px',
            marginBottom: '22px',
            border: '1px solid rgba(200, 90, 62, 0.3)',
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '12px' : '13px',
            fontWeight: '600',
            color: '#c85a3e',
            letterSpacing: '1.5px'
          }}>
            <Trophy size={16} />
            PREMIOS Y RECONOCIMIENTOS
          </div>

          <h2 style={{
            fontSize: isMobile ? 'clamp(34px, 9vw, 56px)' : '56px',
            fontWeight: '900',
            marginBottom: '16px',
            lineHeight: '1.1',
            color: '#f5f1e8'
          }}>
            Premios y <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Reconocimientos</span>
          </h2>

          <p style={{
            fontSize: isMobile ? '15px' : '18px',
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

        {/* Main prizes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '18px' : '30px',
          marginBottom: isMobile ? '40px' : '70px'
        }}>
          {prizes.map((prize, index) => {
            const Icon = prize.icon;
            const isFirst = index === 0;

            return (
              <div
                key={index}
                style={{
                  padding: isMobile ? '34px 22px' : (isFirst ? '60px 40px' : '50px 35px'),
                  backgroundColor: isFirst ? 'rgba(244, 211, 94, 0.12)' : 'rgba(245, 241, 232, 0.08)',
                  borderRadius: '25px',
                  textAlign: 'center',
                  border: `3px solid ${isFirst ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)'}`,
                  boxShadow: isFirst ? '0 25px 60px rgba(244, 211, 94, 0.25)' : '0 15px 40px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.35s ease',
                  cursor: 'pointer',
                  transform: 'none', // 👈 evita cortes en móvil
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.transform = isFirst ? 'scale(1.08) translateY(-15px)' : 'scale(1.03) translateY(-5px)';
                  e.currentTarget.style.boxShadow = isFirst ? '0 30px 70px rgba(244, 211, 94, 0.35)' : '0 20px 50px rgba(244, 211, 94, 0.25)';
                  e.currentTarget.style.borderColor = '#f4d35e';
                }}
                onMouseOut={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = isFirst ? '0 25px 60px rgba(244, 211, 94, 0.25)' : '0 15px 40px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.borderColor = isFirst ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)';
                }}
              >
                {/* badge */}
                {isFirst && (
                  <div style={{
                    position: 'absolute',
                    top: isMobile ? '14px' : '-15px',
                    right: isMobile ? '14px' : '20px',
                    backgroundColor: '#f4d35e',
                    color: '#0a4a42',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1.2px',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 5px 15px rgba(244, 211, 94, 0.35)'
                  }}>
                    TOP PRIZE
                  </div>
                )}

                <div style={{
                  width: isMobile ? '78px' : (isFirst ? '90px' : '75px'),
                  height: isMobile ? '78px' : (isFirst ? '90px' : '75px'),
                  borderRadius: '50%',
                  backgroundColor: `rgba(${isFirst ? '244, 211, 94' : '200, 90, 62'}, 0.2)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 22px',
                  border: `3px solid ${prize.color}`
                }}>
                  <Icon size={isMobile ? 38 : (isFirst ? 45 : 38)} color={prize.color} strokeWidth={2.5} />
                </div>

                <div style={{
                  fontSize: isMobile ? '16px' : (isFirst ? '20px' : '18px'),
                  fontWeight: '700',
                  color: '#f5f1e8',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  {prize.position}
                </div>

                <div style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : (isFirst ? '32px' : '26px'),
                  fontWeight: '900',
                  color: prize.color,
                  marginBottom: '10px',
                  lineHeight: '1.2'
                }}>
                  {prize.prize}
                </div>

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
              </div>
            );
          })}
        </div>

        {/* Additional */}
        <div style={{
          backgroundColor: 'rgba(245, 241, 232, 0.08)',
          padding: isMobile ? '26px' : '50px',
          borderRadius: '25px',
          border: '2px solid rgba(244, 211, 94, 0.2)'
        }}>
          <h3 style={{
            fontSize: isMobile ? '22px' : '28px',
            fontWeight: '700',
            color: '#f5f1e8',
            marginBottom: isMobile ? '18px' : '35px',
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif"
          }}>
            Premios Adicionales
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '16px'
          }}>
            {additionalPrizes.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '15px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(200, 90, 62, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '2px solid #c85a3e'
                }}>
                  <Award size={22} color="#c85a3e" strokeWidth={2.5} />
                </div>

                <div style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  lineHeight: '1.35',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {item.category}
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
