import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, MapPin, Users } from 'lucide-react';

const RegistrationCTA = () => {
  const navigate = useNavigate();
  
  const highlights = [
    { icon: Calendar, text: "Evento: Octubre 15, 2024" },
    { icon: MapPin, text: "Mount Tepuy Plateau, Venezuela" },
    { icon: Users, text: "Cupos Limitados: 500 corredores" }
  ];

  return (
    <section style={{
      padding: '120px 40px',
      backgroundColor: '#0a4a42',
      width: '100%',
      margin: 0,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(244, 211, 94, 0.03), transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(200, 90, 62, 0.03), transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main CTA Box */}
        <div style={{
          padding: '80px 70px',
          backgroundColor: 'rgba(245, 241, 232, 0.05)',
          borderRadius: '35px',
          border: '3px solid #f4d35e',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative corner */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle at top right, rgba(244, 211, 94, 0.15), transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#c85a3e',
                color: '#f5f1e8',
                padding: '10px 25px',
                borderRadius: '25px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '25px',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 5px 20px rgba(200, 90, 62, 0.3)'
              }}>
                ¡INSCRIPCIONES ABIERTAS!
              </div>

              <h2 style={{
                fontSize: '52px',
                fontWeight: '900',
                marginBottom: '25px',
                lineHeight: '1.1',
                color: '#f5f1e8'
              }}>
                ¿Listo para el <span style={{ 
                  color: '#f4d35e',
                  fontStyle: 'italic'
                }}>Desafío</span>?
              </h2>

              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#f5f1e8',
                opacity: 0.85,
                marginBottom: '40px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Únete a cientos de atletas de todo el mundo en la experiencia trail running más épica de Sudamérica. Los cupos son limitados.
              </p>

              {/* Highlights */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                marginBottom: '45px'
              }}>
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
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
                        fontSize: '15px',
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

              {/* Benefits List */}
              <div style={{
                backgroundColor: 'rgba(10, 74, 66, 0.5)',
                padding: '25px 30px',
                borderRadius: '20px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f4d35e',
                  marginBottom: '15px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  TU INSCRIPCIÓN INCLUYE:
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px'
                }}>
                  {['Kit de corredor', 'Medalla finisher', 'Timing chip', 'Hidratación'].map((benefit, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
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

            {/* Right Content - CTA */}
            <div style={{
              textAlign: 'center'
            }}>
              {/* Event Highlights Box */}
              <div style={{
                backgroundColor: 'rgba(244, 211, 94, 0.12)',
                padding: '40px 35px',
                borderRadius: '25px',
                marginBottom: '30px',
                border: '2px solid #f4d35e'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f5f1e8',
                  marginBottom: '20px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1.5px',
                  opacity: 0.8
                }}>
                  TU AVENTURA TE ESPERA
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    padding: '15px',
                    backgroundColor: 'rgba(10, 74, 66, 0.3)',
                    borderRadius: '12px',
                    border: '1px solid rgba(244, 211, 94, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '13px',
                      color: '#f5f1e8',
                      opacity: 0.7,
                      marginBottom: '5px',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Distancias
                    </div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '900',
                      color: '#f4d35e'
                    }}>
                      5K • 10K • 21K
                    </div>
                  </div>

                  <div style={{
                    padding: '15px',
                    backgroundColor: 'rgba(10, 74, 66, 0.3)',
                    borderRadius: '12px',
                    border: '1px solid rgba(244, 211, 94, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '13px',
                      color: '#f5f1e8',
                      opacity: 0.7,
                      marginBottom: '5px',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Altitud Máxima
                    </div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '900',
                      color: '#f4d35e'
                    }}>
                      2,850m
                    </div>
                  </div>

                  <div style={{
                    padding: '15px',
                    backgroundColor: 'rgba(10, 74, 66, 0.3)',
                    borderRadius: '12px',
                    border: '1px solid rgba(244, 211, 94, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '13px',
                      color: '#f5f1e8',
                      opacity: 0.7,
                      marginBottom: '5px',
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      Desnivel Acumulado
                    </div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '900',
                      color: '#f4d35e'
                    }}>
                      +2,600m
                    </div>
                  </div>
                </div>
              </div>

              {/* Main CTA Button */}
              <button
                onClick={() => navigate('/register')}
                style={{
                width: '100%',
                backgroundColor: '#c85a3e',
                color: '#f5f1e8',
                border: 'none',
                padding: '22px 40px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#b04935';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 45px rgba(200, 90, 62, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#c85a3e';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 35px rgba(200, 90, 62, 0.4)';
              }}>
                INSCRÍBETE AHORA
                <ArrowRight size={22} strokeWidth={3} />
              </button>

              {/* Secondary Info */}
              <div style={{
                fontSize: '13px',
                color: '#f5f1e8',
                fontFamily: "'Inter', sans-serif",
                opacity: 0.7,
                marginBottom: '20px'
              }}>
                🔒 Registro seguro • Información detallada por email
              </div>

              {/* Urgency Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(200, 90, 62, 0.15)',
                padding: '12px 20px',
                borderRadius: '20px',
                border: '1px solid rgba(200, 90, 62, 0.3)'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#c85a3e',
                  animation: 'pulse 2s infinite'
                }}></div>
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

        {/* Bottom Info Bar */}
        <div style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'wrap'
        }}>
          {[
            { label: 'Inicio de carrera', value: 'Oct 15, 2024' },
            { label: 'Capacidad máxima', value: '500 atletas' },
            { label: 'Edad mínima', value: '18 años' }
          ].map((info, index) => (
            <div key={index} style={{
              textAlign: 'center'
            }}>
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

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
        `}
      </style>
    </section>
  );
};

export default RegistrationCTA;