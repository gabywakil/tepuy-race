import React from 'react';
import { Mountain, Users, TrendingUp, Award } from 'lucide-react';

const Overview = () => {
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
      padding: '120px 40px',
      backgroundColor: '#0a4a42',
      borderTop: '1px solid rgba(244, 211, 94, 0.2)',
      borderBottom: '1px solid rgba(244, 211, 94, 0.2)',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '80px'
      }}>
        <h2 style={{
          fontSize: '56px',
          fontWeight: '900',
          marginBottom: '20px',
          color: '#f5f1e8'
        }}>
          ¿Por Qué <span style={{ color: '#c85a3e', fontStyle: 'italic' }}>Tepuy Race</span>?
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#f5f1e8',
          opacity: 0.7,
          maxWidth: '600px',
          margin: '0 auto',
          fontFamily: "'Inter', sans-serif",
          lineHeight: '1.6'
        }}>
          Más que una carrera, es una experiencia transformadora que combina desafío físico, belleza natural y comunidad global.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} style={{
              backgroundColor: 'rgba(245, 241, 232, 0.12)',
              padding: '40px 30px',
              borderRadius: '20px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '2px solid rgba(244, 211, 94, 0.3)',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = '#f4d35e';
              e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.18)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(244, 211, 94, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.12)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(200, 90, 62, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                border: '3px solid #f4d35e'
              }}>
                <Icon size={32} color="#c85a3e" strokeWidth={2.5} />
              </div>
              
              <div style={{
                fontSize: '36px',
                fontWeight: '900',
                color: '#f4d35e',
                marginBottom: '5px'
              }}>
                {feature.stat}
              </div>
              
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                color: '#f5f1e8',
                opacity: 0.7,
                marginBottom: '20px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {feature.label}
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '15px',
                color: '#f5f1e8'
              }}>
                {feature.title}
              </h3>
              
              <p style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#f5f1e8',
                opacity: 0.8,
                fontFamily: "'Inter', sans-serif",
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Overview;