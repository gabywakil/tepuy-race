import React from 'react';
import { Mountain, Heart, Users, Target, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: "Carlos Mendoza",
      role: "Fundador & Director",
      description: "Trail runner con 15 años de experiencia organizando eventos de montaña"
    },
    {
      name: "María Torres",
      role: "Directora de Operaciones",
      description: "Experta en logística de eventos deportivos extremos"
    },
    {
      name: "Diego Ramírez",
      role: "Coordinador de Rutas",
      description: "Guía certificado de montaña y especialista en senderos"
    },
    {
      name: "Ana Gutiérrez",
      role: "Relaciones Públicas",
      description: "Conectando comunidades de runners a nivel internacional"
    }
  ];

  const values = [
    {
      icon: Mountain,
      title: "Respeto por la Naturaleza",
      description: "Cada evento es diseñado para minimizar impacto ambiental y promover conservación"
    },
    {
      icon: Heart,
      title: "Pasión por el Trail",
      description: "Amamos las montañas y queremos compartir esa pasión con cada corredor"
    },
    {
      icon: Users,
      title: "Comunidad Global",
      description: "Construimos puentes entre corredores de todos los niveles y países"
    },
    {
      icon: Target,
      title: "Excelencia Operativa",
      description: "Cada detalle importa, desde la ruta hasta la última estación de hidratación"
    }
  ];

  const stats = [
    { number: "8+", label: "Años de experiencia" },
    { number: "12", label: "Eventos realizados" },
    { number: "5,000+", label: "Corredores" },
    { number: "15", label: "Países representados" }
  ];

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: '100px',
      width: '100%',
      margin: 0
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 40px 120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(244, 211, 94, 0.05), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(200, 90, 62, 0.03), transparent 50%)
          `
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(244, 211, 94, 0.1)',
            color: '#f4d35e',
            padding: '10px 25px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '30px',
            fontFamily: "'Inter', sans-serif"
          }}>
            SOBRE NOSOTROS
          </div>

          <h1 style={{
            fontSize: '72px',
            fontWeight: '900',
            marginBottom: '30px',
            lineHeight: '1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif",
            maxWidth: '900px'
          }}>
            Conectando <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Corredores</span> con la Montaña
          </h1>

          <p style={{
            fontSize: '22px',
            lineHeight: '1.7',
            color: '#f5f1e8',
            opacity: 0.85,
            maxWidth: '700px',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '50px'
          }}>
            Desde 2016, creamos experiencias de trail running que transforman vidas, 
            construyen comunidades y celebran la belleza de nuestras montañas.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginTop: '60px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '52px',
                  fontWeight: '900',
                  color: '#f4d35e',
                  marginBottom: '10px',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  letterSpacing: '1px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{
        padding: '100px 40px',
        borderTop: '1px solid rgba(244, 211, 94, 0.2)',
        borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Image Placeholder */}
          <div style={{
            height: '500px',
            borderRadius: '30px',
            background: 'linear-gradient(135deg, rgba(200, 90, 62, 0.3) 0%, rgba(244, 211, 94, 0.3) 100%)',
            border: '3px solid #f4d35e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: '700',
            color: '#f5f1e8',
            fontFamily: "'Inter', sans-serif"
          }}>
            IMAGEN DEL EQUIPO
          </div>

          {/* Content */}
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif",
              lineHeight: '1.1'
            }}>
              Nuestra <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Historia</span>
            </h2>

            <p style={{
              fontSize: '17px',
              lineHeight: '1.8',
              color: '#f5f1e8',
              opacity: 0.85,
              marginBottom: '25px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Todo comenzó en 2016 con un grupo de amigos apasionados por el trail running 
              y un sueño: crear el evento de montaña más espectacular de Venezuela.
            </p>

            <p style={{
              fontSize: '17px',
              lineHeight: '1.8',
              color: '#f5f1e8',
              opacity: 0.85,
              marginBottom: '25px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Lo que empezó como una carrera local de 50 participantes se ha convertido en 
              un movimiento internacional que atrae corredores de más de 15 países cada año.
            </p>

            <p style={{
              fontSize: '17px',
              lineHeight: '1.8',
              color: '#f5f1e8',
              opacity: 0.85,
              fontFamily: "'Inter', sans-serif"
            }}>
              Hoy, Tepuy Race es más que un evento. Es una comunidad, una familia y un 
              compromiso de promover el deporte outdoor responsable y sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{
        padding: '100px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '70px'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '900',
              marginBottom: '20px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Nuestros <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Valores</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} style={{
                  padding: '45px',
                  backgroundColor: 'rgba(245, 241, 232, 0.08)',
                  borderRadius: '25px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#f4d35e';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.08)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244, 211, 94, 0.15)',
                    border: '3px solid #f4d35e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>
                    <Icon size={32} color="#f4d35e" strokeWidth={2} />
                  </div>
                  
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#f5f1e8',
                    marginBottom: '15px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {value.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#f5f1e8',
                    opacity: 0.8,
                    fontFamily: "'Inter', sans-serif",
                    margin: 0
                  }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
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
            textAlign: 'center',
            marginBottom: '70px'
          }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '900',
              marginBottom: '20px',
              color: '#f5f1e8',
              fontFamily: "'Playfair Display', serif"
            }}>
              Nuestro <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Equipo</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#f5f1e8',
              opacity: 0.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Las personas apasionadas detrás de cada evento
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px'
          }}>
            {team.map((member, index) => (
              <div key={index} style={{
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {/* Photo Placeholder */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(200, 90, 62, 0.3) 0%, rgba(244, 211, 94, 0.2) 100%)',
                  marginBottom: '20px',
                  border: '3px solid rgba(244, 211, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  FOTO
                </div>

                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  marginBottom: '8px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {member.name}
                </h3>

                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f4d35e',
                  marginBottom: '12px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.5px'
                }}>
                  {member.role}
                </div>

                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  fontFamily: "'Inter', sans-serif",
                  margin: 0
                }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 40px'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '70px 60px',
          backgroundColor: 'rgba(245, 241, 232, 0.08)',
          borderRadius: '30px',
          border: '3px solid #f4d35e'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '900',
            marginBottom: '25px',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            ¿Listo para unirte a la <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>comunidad</span>?
          </h2>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.7',
            color: '#f5f1e8',
            opacity: 0.8,
            marginBottom: '40px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Forma parte de la próxima generación de trail runners que están 
            redefiniendo los límites de lo posible en las montañas.
          </p>

          <button style={{
            backgroundColor: '#c85a3e',
            color: '#f5f1e8',
            border: 'none',
            padding: '20px 50px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '700',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)'
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
            ÚNETE A TEPUY RACE
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;