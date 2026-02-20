import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, MapPin, Users } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const RegistrationCTA = () => {
  const navigate = useNavigate();
  const { isMobile } = useMedia('(max-width: 768px)');

  const highlights = [
    { icon: Calendar, text: "Evento: Octubre 15, 2024" },
    { icon: MapPin, text: "Mount Tepuy Plateau, Venezuela" },
    { icon: Users, text: "Cupos Limitados: 500 corredores" }
  ];

  const handleRegisterClick = () => {
    navigate('/checkout', {
      state: {
        race: {
          id: '10k',
          name: '10K Aventura',
          distance: '10K',
          price: '$65'
        }
      }
    });
  };

  return (
    <section style={{
      padding: isMobile ? '80px 18px' : '120px 40px',
      backgroundColor: '#0a4a42',
      width: '100%',
      margin: 0,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(244, 211, 94, 0.03), transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(200, 90, 62, 0.03), transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          padding: isMobile ? '36px 22px' : '80px 70px',
          backgroundColor: 'rgba(245, 241, 232, 0.05)',
          borderRadius: isMobile ? '28px' : '35px',
          border: '3px solid #f4d35e',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle at top right, rgba(244, 211, 94, 0.15), transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
            gap: isMobile ? '26px' : '60px',
            alignItems: 'center'
          }}>
            {/* LEFT SIDE */}
            <div>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#c85a3e',
                color: '#f5f1e8',
                padding: '10px 25px',
                borderRadius: '25px',
                fontSize: isMobile ? '12px' : '13px',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '18px',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 5px 20px rgba(200, 90, 62, 0.3)'
              }}>
                ¡INSCRIPCIONES ABIERTAS!
              </div>

              <h2 style={{
                fontSize: isMobile ? 'clamp(34px, 9vw, 52px)' : '52px',
                fontWeight: '900',
                marginBottom: '18px',
                lineHeight: '1.1',
                color: '#f5f1e8'
              }}>
                ¿Listo para el <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Desafío</span>?
              </h2>

              <p style={{
                fontSize: isMobile ? '15px' : '18px',
                lineHeight: '1.7',
                color: '#f5f1e8',
                opacity: 0.85,
                marginBottom: isMobile ? '22px' : '40px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Únete a cientos de atletas de todo el mundo en la experiencia de trail running más épica de Sudamérica.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: isMobile ? '22px' : '45px'
              }}>
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(244, 211, 94, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #f4d35e',
                        flexShrink: 0
                      }}>
                        <Icon size={16} color="#f4d35e" strokeWidth={2.5} />
                      </div>
                      <span style={{
                        fontSize: isMobile ? '14px' : '15px',
                        fontWeight: '600',
                        color: '#f5f1e8',
                        fontFamily: "'Inter', sans-serif",
                        opacity: 0.9
                      }}>
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={handleRegisterClick}
                style={{
                  width: '100%',
                  backgroundColor: '#c85a3e',
                  color: '#f5f1e8',
                  border: 'none',
                  padding: isMobile ? '18px 22px' : '22px 40px',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: '700',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                onMouseOver={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.backgroundColor = '#b04935';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 45px rgba(200, 90, 62, 0.5)';
                }}
                onMouseOut={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.backgroundColor = '#c85a3e';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 35px rgba(200, 90, 62, 0.4)';
                }}
              >
                INSCRÍBETE AHORA <ArrowRight size={22} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default RegistrationCTA;
