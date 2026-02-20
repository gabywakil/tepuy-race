import React from 'react';
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const OurProjects = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  const pastEvents = [
    {
      year: "2024",
      name: "Tepuy Race Mountain Challenge",
      location: "Mount Roraima, Venezuela",
      participants: "450",
      distances: "5K • 10K • 21K",
      highlight: "Record de asistencia internacional"
    },
    {
      year: "2023",
      name: "Tepuy Ultra Trail",
      location: "Gran Sabana, Venezuela",
      participants: "380",
      distances: "10K • 21K • 42K",
      highlight: "Primera edición Ultra Marathon"
    },
    {
      year: "2022",
      name: "Tepuy Summit Series",
      location: "Mount Tepuy Plateau",
      participants: "320",
      distances: "5K • 10K • 15K",
      highlight: "Evento del año - Trail Running Venezuela"
    }
  ];

  const upcomingEvents = [
    { date: "Octubre 2024", name: "Tepuy Race 2024", status: "Inscripciones Abiertas", color: "#f4d35e" },
    { date: "Diciembre 2024", name: "Tepuy Night Trail", status: "Próximamente", color: "#c85a3e" },
    { date: "Marzo 2025", name: "Tepuy Kids Run", status: "En Planificación", color: "#f4d35e" }
  ];

  const achievements = [
    { number: "12", label: "Eventos realizados" },
    { number: "5,000+", label: "Corredores totales" },
    { number: "15", label: "Países participantes" },
    { number: "98%", label: "Satisfacción" }
  ];

  const pagePad = isMobile ? '0 18px' : '0 40px';

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: '100px',
      width: '100%',
      margin: 0
    }}>
      {/* Hero */}
      <section style={{ padding: isMobile ? '60px 18px' : '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(200, 90, 62, 0.15)',
            color: '#c85a3e',
            padding: '10px 25px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '26px',
            fontFamily: "'Inter', sans-serif"
          }}>
            NUESTROS PROYECTOS
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(34px, 9vw, 54px)' : '72px',
            fontWeight: '900',
            marginBottom: isMobile ? '18px' : '30px',
            lineHeight: '1.02',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Creando <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Experiencias</span> Inolvidables
          </h1>

          <p style={{
            fontSize: isMobile ? '15px' : '20px',
            lineHeight: '1.75',
            color: '#f5f1e8',
            opacity: 0.85,
            fontFamily: "'Inter', sans-serif"
          }}>
            Desde 2016, hemos organizado eventos que desafían límites,
            construyen comunidades y celebran el espíritu del trail running.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section style={{
        padding: isMobile ? '40px 18px' : '60px 40px',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '14px' : '40px'
        }}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: isMobile ? '18px 12px' : '30px 20px',
                backgroundColor: 'rgba(245, 241, 232, 0.05)',
                borderRadius: '20px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                if (isMobile) return;
                e.currentTarget.style.borderColor = '#f4d35e';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                if (isMobile) return;
                e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '900',
                color: '#f4d35e',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {achievement.number}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#f5f1e8',
                opacity: 0.8,
                letterSpacing: '1px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: isMobile ? '28px' : '60px' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px, 7vw, 44px)' : '52px',
              fontWeight: '900',
              marginBottom: '14px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Eventos <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Pasados</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Un recorrido por nuestra historia de eventos exitosos
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '30px' }}>
            {pastEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  padding: isMobile ? '22px 18px' : '40px 50px',
                  backgroundColor: 'rgba(245, 241, 232, 0.08)',
                  borderRadius: '25px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.borderColor = '#f4d35e';
                  e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.1)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseOut={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.08)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {/* Year watermark */}
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '10px' : '20px',
                  right: isMobile ? '14px' : '30px',
                  fontSize: isMobile ? '44px' : '72px',
                  fontWeight: '900',
                  color: 'rgba(244, 211, 94, 0.12)',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1',
                  pointerEvents: 'none'
                }}>
                  {event.year}
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
                  gap: isMobile ? '18px' : '40px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? '22px' : '32px',
                      fontWeight: '900',
                      color: '#f5f1e8',
                      marginBottom: '16px',
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      {event.name}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '14px',
                        color: '#f5f1e8',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        <MapPin size={18} color="#f4d35e" />
                        {event.location}
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '14px',
                        color: '#f5f1e8',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        <Users size={18} color="#f4d35e" />
                        {event.participants} corredores
                      </div>
                    </div>

                    <div style={{
                      display: 'inline-block',
                      padding: '8px 18px',
                      backgroundColor: 'rgba(244, 211, 94, 0.15)',
                      border: '2px solid #f4d35e',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#f4d35e',
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: '1px'
                    }}>
                      {event.distances}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: isMobile ? 'flex-start' : 'flex-end'
                  }}>
                    <div style={{
                      padding: isMobile ? '16px' : '20px 30px',
                      backgroundColor: 'rgba(200, 90, 62, 0.15)',
                      borderRadius: '15px',
                      border: '2px solid #c85a3e',
                      textAlign: isMobile ? 'left' : 'right',
                      width: isMobile ? '100%' : 'auto'
                    }}>
                      <Award size={22} color="#c85a3e" style={{ marginBottom: '8px' }} />
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#f5f1e8',
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: '1.4'
                      }}>
                        {event.highlight}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{
        padding: isMobile ? '60px 18px' : '100px 40px',
        backgroundColor: 'rgba(244, 211, 94, 0.05)',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: isMobile ? '28px' : '60px' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px, 7vw, 44px)' : '52px',
              fontWeight: '900',
              marginBottom: '14px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Próximos <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Eventos</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Lo que viene en nuestro calendario 2024-2025
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '14px' : '30px'
          }}>
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                style={{
                  padding: isMobile ? '24px 18px' : '40px 35px',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  borderRadius: '25px',
                  border: `3px solid ${event.color}`,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${event.color}40`;
                }}
                onMouseOut={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '10px 18px',
                  backgroundColor: `${event.color}20`,
                  borderRadius: '20px',
                  marginBottom: '18px',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: event.color,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  {event.date}
                </div>

                <h3 style={{
                  fontSize: isMobile ? '20px' : '26px',
                  fontWeight: '900',
                  color: '#f5f1e8',
                  marginBottom: '10px',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1.2'
                }}>
                  {event.name}
                </h3>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: 'rgba(245, 241, 232, 0.1)',
                  borderRadius: '25px',
                  border: `2px solid ${event.color}`,
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  marginTop: '14px'
                }}>
                  {event.status}
                  <ArrowRight size={16} color={event.color} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section style={{ padding: isMobile ? '60px 18px' : '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: isMobile ? '26px' : '60px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: isMobile ? 'clamp(30px, 7vw, 44px)' : '52px',
              fontWeight: '900',
              marginBottom: '14px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Momentos <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Épicos</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Capturando la emoción de cada carrera
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? '12px' : '20px',
            marginBottom: '40px'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                style={{
                  height: isMobile ? '140px' : '200px',
                  borderRadius: '20px',
                  background: `linear-gradient(${135 + index * 20}deg, rgba(200, 90, 62, ${0.2 + index * 0.05}) 0%, rgba(244, 211, 94, ${0.2 + index * 0.05}) 100%)`,
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = '#f4d35e';
                }}
                onMouseOut={(e) => {
                  if (isMobile) return;
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                }}
              >
                FOTO {item}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#f5f1e8',
                border: '2px solid #f4d35e',
                padding: isMobile ? '16px 28px' : '18px 45px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: '700',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '420px' : 'none'
              }}
              onMouseOver={(e) => {
                if (isMobile) return;
                e.target.style.backgroundColor = '#f4d35e';
                e.target.style.color = '#0a4a42';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                if (isMobile) return;
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#f5f1e8';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              VER GALERÍA COMPLETA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
