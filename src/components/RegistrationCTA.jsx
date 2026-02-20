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
            {/* Left */}
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
                Únete a cientos de atletas de todo el mundo en la experiencia de trail running más épica de Sudamérica. Los cupos son limitados.
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

              <div style={{
                backgroundColor: 'rgba(10, 74, 66, 0.5)',
                padding: isMobile ? '18px' : '25px 30px',
                borderRadius: '20px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#f4d35e',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  TU INSCRIPCIÓN INCLUYE:
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '10px'
                }}>
                  {['Kit de corredor', 'Medalla finisher', 'Timing chip', 'Hidratación'].map((benefit, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} color="#f4d35e" strokeWidth={2.5} />
                      <span style={{
                        fontSize: '14px',
                        color: '#f5f1e8',
                        fontFamily: "'Inter', sans-serif",
                        opacity: 0.9
                      }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(244, 211, 94, 0.12)',
                padding: isMobile ? '22px' : '40px 35px',
                borderRadius: '25px',
                marginBottom: '22px',
                border: '2px solid #f4d35e'
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#f5f1e8',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1.5px',
                  opacity: 0.8
                }}>
                  TU AVENTURA TE ESPERA
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Distancias', value: '5K • 10K • 21K' },
                    { label: 'Altitud Máxima', value: '2,850m' },
                    { label: 'Desnivel Acumulado', value: '+2,600m' }
                  ].map((box, i) => (
                    <div key={i} style={{
                      padding: '14px',
                      backgroundColor: 'rgba(10, 74, 66, 0.3)',
                      borderRadius: '12px',
                      border: '1px solid rgba(244, 211, 94, 0.2)'
                    }}>
                      <div style={{
                        fontSize: '12px',
                        color: '#f5f1e8',
                        opacity: 0.7,
                        marginBottom: '6px',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        {box.label}
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: '#f4d35e' }}>
                        {box.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigate('/register')}
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
                  gap: '12px',
                  marginBottom: '16px'
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

              <div style={{
                fontSize: '13px',
                color: '#f5f1e8',
                fontFamily: "'Inter', sans-serif",
                opacity: 0.7,
                marginBottom: '16px'
              }}>
                🔒 Registro seguro • Información detallada por email
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(200, 90, 62, 0.15)',
                padding: '12px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(200, 90, 62, 0.3)'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#c85a3e',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Solo quedan 127 cupos disponibles
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '26px',
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '16px' : '50px',
          flexWrap: 'wrap'
        }}>
          {[
            { label: 'Inicio de carrera', value: 'Oct 15, 2024' },
            { label: 'Capacidad máxima', value: '500 atletas' },
            { label: 'Edad mínima', value: '18 años' }
          ].map((info, index) => (
            <div key={index} style={{ textAlign: 'center', minWidth: isMobile ? '140px' : 'auto' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#f5f1e8',
                opacity: 0.6,
                marginBottom: '5px',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '1px'
              }}>
                {info.label}
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#f4d35e',
                fontFamily: "'Inter', sans-serif"
              }}>
                {info.value}
              </div>
            </div>
          ))}
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
