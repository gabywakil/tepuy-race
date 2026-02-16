import React from 'react';
import { Mountain, Users, TrendingUp } from 'lucide-react';

const InfoHub = () => {
  const stats = [
    { number: "2,600", label: "Metros de Elevación", icon: Mountain },
    { number: "500+", label: "Corredores Esperados", icon: Users },
    { number: "42K", label: "Distancia Máxima", icon: TrendingUp }
  ];

  return (
    <section style={{
      padding: '80px 40px',
      backgroundColor: '#0a4a42',
      color: '#f5f1e8',
      borderTop: '1px solid rgba(244, 211, 94, 0.2)',
      borderBottom: '1px solid rgba(244, 211, 94, 0.2)',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px'
            }}>
              <Icon size={40} color="#f4d35e" strokeWidth={2} />
              <div style={{
                fontSize: '52px',
                fontWeight: '900',
                color: '#f4d35e',
                lineHeight: '1'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '2px',
                opacity: 0.9,
                fontFamily: "'Inter', sans-serif"
              }}>
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoHub;