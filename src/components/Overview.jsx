import React from 'react';
import { Mountain, Users, TrendingUp, Award } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const Overview = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  const features = [
    {
      icon: Mountain,
      title: "Terreno Único",
      description: "Recorre paisajes naturales impresionantes a través de formaciones geológicas ancestrales",
      stat: "2,850m",
      label: "Elevación"
    },
    {
      icon: Users,
      title: "Comunidad Global",
      description: "Únete a corredores de más de 45 países en esta experiencia transformadora",
      stat: "500+",
      label: "Participantes"
    },
    {
      icon: TrendingUp,
      title: "Desafío Personal",
      description: "Supera tus límites con rutas diseñadas para todos los niveles de experiencia",
      stat: "3",
      label: "Categorías"
    },
    {
      icon: Award,
      title: "Certificación Oficial",
      description: "Recibe reconocimiento internacional por completar este desafío épico",
      stat: "100%",
      label: "Certificados"
    }
  ];

  return (
    <section style={{
      padding: isMobile ? '90px 18px' : '120px 40px',
      backgroundColor: '#0a4a42',
      borderTop: '1px solid rgba(244, 211, 94, 0.2)',
      borderBottom: '1px solid rgba(244, 211, 94, 0.2)',
      width: '100%',
      margin: 0,
      overflowX: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: isMobile ? '40px' : '80px',
        padding: isMobile ? '0 4px' : '0'
      }}>
        <h2 style={{
          fontSize: 'clamp(34px, 6vw, 56px)',
          fontWeight: '900',
          marginBottom: '16px',
          color: '#f5f1e8',
          lineHeight: 1.05
        }}>
          ¿Por Qué <span style={{ color: '#c85a3e', fontStyle: 'italic' }}>Tepuy Race</span>?
        </h2>

        <p style={{
          fontSize: 'clamp(14px, 2.2vw, 18px)',
          color: '#f5f1e8',
          opacity: 0.72,
          maxWidth: '650px',
          margin: '0 auto',
          fontFamily: "'Inter', sans-serif",
          lineHeight: '1.7'
        }}>
          Más que una carrera, es una experiencia transformadora que combina desafío físico, belleza natural y comunidad global.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile
          ? 'repeat(2, minmax(0, 1fr))'
          : 'repeat(4, minmax(0, 1fr))',
        gap: isMobile ? '14px' : '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(245, 241, 232, 0.12)',
                padding: isMobile ? '18px 14px' : '40px 30px',
                borderRadius: isMobile ? '18px' : '20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                minHeight: isMobile ? '220px' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseOver={(e) => {
                if (isMobile) return; // en móvil no “salta”
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = '#f4d35e';
                e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.18)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(244, 211, 94, 0.3)';
              }}
              onMouseOut={(e) => {
                if (isMobile) return;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.12)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div>
                <div style={{
                  width: isMobile ? '54px' : '70px',
                  height: isMobile ? '54px' : '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(200, 90, 62, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '3px solid #f4d35e'
                }}>
                  <Icon size={isMobile ? 24 : 32} color="#c85a3e" strokeWidth={2.5} />
                </div>

                <div style={{
                  fontSize: 'clamp(22px, 4.8vw, 36px)',
                  fontWeight: '900',
                  color: '#f4d35e',
                  marginBottom: '4px',
                  lineHeight: 1
                }}>
                  {feature.stat}
                </div>

                <div style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  marginBottom: isMobile ? '10px' : '20px',
                  fontFamily: "'Inter', sans-serif",
                  textTransform: 'uppercase'
                }}>
                  {feature.label}
                </div>

                <h3 style={{
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: '700',
                  marginBottom: '10px',
                  color: '#f5f1e8',
                  lineHeight: 1.15
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontSize: isMobile ? '12.5px' : '14px',
                  lineHeight: isMobile ? '1.45' : '1.6',
                  color: '#f5f1e8',
                  opacity: 0.8,
                  fontFamily: "'Inter', sans-serif",
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Overview;
