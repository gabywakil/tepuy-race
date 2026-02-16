import React from 'react';
import { Calendar, MapPin, Users, Award, ArrowRight } from 'lucide-react';

const OurProjects = () => {
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
    {
      date: "Octubre 2024",
      name: "Tepuy Race 2024",
      status: "Inscripciones Abiertas",
      color: "#f4d35e"
    },
    {
      date: "Diciembre 2024",
      name: "Tepuy Night Trail",
      status: "Próximamente",
      color: "#c85a3e"
    },
    {
      date: "Marzo 2025",
      name: "Tepuy Kids Run",
      status: "En Planificación",
      color: "#f4d35e"
    }
  ];

  const achievements = [
    { number: "12", label: "Eventos realizados" },
    { number: "5,000+", label: "Corredores totales" },
    { number: "15", label: "Países participantes" },
    { number: "98%", label: "Satisfacción" }
  ];

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: '100px',
      width: '100%',
      margin: 0
    }}>
      {/* Hero */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(200, 90, 62, 0.15)',
            color: '#c85a3e',
            padding: '10px 25px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '30px',
            fontFamily: "'Inter', sans-serif"
          }}>
            NUESTROS PROYECTOS
          </div>

          <h1 style={{
            fontSize: '72px',
            fontWeight: '900',
            marginBottom: '30px',
            lineHeight: '1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Creando <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Experiencias</span> Inolvidables
          </h1>

          <p style={{
            fontSize: '20px',
            lineHeight: '1.7',
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
        padding: '60px 40px',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px'
        }}>
          {achievements.map((achievement, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '30px 20px',
              backgroundColor: 'rgba(245, 241, 232, 0.05)',
              borderRadius: '20px',
              border: '2px solid rgba(244, 211, 94, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#f4d35e';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '900',
                color: '#f4d35e',
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {achievement.number}
              </div>
              <div style={{
                fontSize: '14px',
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
      <section style={{
        padding: '100px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '900',
              marginBottom: '20px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Eventos <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Pasados</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Un recorrido por nuestra historia de eventos exitosos
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            {pastEvents.map((event, index) => (
              <div key={index} style={{
                padding: '40px 50px',
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                borderRadius: '25px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#f4d35e';
                e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.1)';
                e.currentTarget.style.transform = 'translateX(10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.08)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}>
                {/* Year Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '30px',
                  fontSize: '72px',
                  fontWeight: '900',
                  color: 'rgba(244, 211, 94, 0.1)',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1'
                }}>
                  {event.year}
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr',
                  gap: '40px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '32px',
                      fontWeight: '900',
                      color: '#f5f1e8',
                      marginBottom: '20px',
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      {event.name}
                    </h3>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginBottom: '20px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '15px',
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
                        fontSize: '15px',
                        color: '#f5f1e8',
                        fontFamily: "'Inter', sans-serif"
                      }}>
                        <Users size={18} color="#f4d35e" />
                        {event.participants} corredores
                      </div>
                    </div>

                    <div style={{
                      display: 'inline-block',
                      padding: '8px 20px',
                      backgroundColor: 'rgba(244, 211, 94, 0.15)',
                      border: '2px solid #f4d35e',
                      borderRadius: '20px',
                      fontSize: '13px',
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
                    alignItems: 'flex-end'
                  }}>
                    <div style={{
                      padding: '20px 30px',
                      backgroundColor: 'rgba(200, 90, 62, 0.15)',
                      borderRadius: '15px',
                      border: '2px solid #c85a3e',
                      textAlign: 'right'
                    }}>
                      <Award size={24} color="#c85a3e" style={{ marginBottom: '10px' }} />
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
        padding: '100px 40px',
        backgroundColor: 'rgba(244, 211, 94, 0.05)',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '900',
              marginBottom: '20px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Próximos <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Eventos</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Lo que viene en nuestro calendario 2024-2025
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {upcomingEvents.map((event, index) => (
              <div key={index} style={{
                padding: '40px 35px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '25px',
                border: `3px solid ${event.color}`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 50px ${event.color}40`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: `${event.color}20`,
                  borderRadius: '20px',
                  marginBottom: '25px',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: event.color,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  {event.date}
                </div>

                <h3 style={{
                  fontSize: '26px',
                  fontWeight: '900',
                  color: '#f5f1e8',
                  marginBottom: '15px',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1.2'
                }}>
                  {event.name}
                </h3>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(245, 241, 232, 0.1)',
                  borderRadius: '25px',
                  border: `2px solid ${event.color}`,
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  marginTop: '20px'
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
      <section style={{
        padding: '100px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '900',
              marginBottom: '20px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Momentos <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Épicos</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Capturando la emoción de cada carrera
            </p>
          </div>

          {/* Gallery Grid Placeholder */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '50px'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div key={index} style={{
                height: '200px',
                borderRadius: '20px',
                background: `linear-gradient(${135 + index * 20}deg, rgba(200, 90, 62, ${0.2 + index * 0.05}) 0%, rgba(244, 211, 94, ${0.2 + index * 0.05}) 100%)`,
                border: '2px solid rgba(244, 211, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '700',
                color: '#f5f1e8',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = '#f4d35e';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
              }}>
                FOTO {item}
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center'
          }}>
            <button style={{
              backgroundColor: 'transparent',
              color: '#f5f1e8',
              border: '2px solid #f4d35e',
              padding: '18px 45px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '700',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f4d35e';
              e.target.style.color = '#0a4a42';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#f5f1e8';
              e.target.style.transform = 'translateY(0)';
            }}>
              VER GALERÍA COMPLETA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;