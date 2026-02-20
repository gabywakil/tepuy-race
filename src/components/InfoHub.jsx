import React from 'react';
import { Mountain, Users, TrendingUp } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const InfoHub = () => {
  const { isMobile } = useMedia('(max-width: 768px)');

  const stats = [
    { number: "2,600", label: "Metros de Elevación", icon: Mountain },
    { number: "500+", label: "Corredores Esperados", icon: Users },
    { number: "42K", label: "Distancia Máxima", icon: TrendingUp }
  ];

  return (
    <section style={{
      padding: isMobile ? '44px 18px' : '80px 40px',
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
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: isMobile ? '16px' : '40px',
        flexWrap: 'wrap'
      }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} style={{
              flex: isMobile ? '1 1 140px' : '1 1 0px',
              minWidth: isMobile ? '140px' : '0px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: isMobile ? '10px' : '15px',
              padding: isMobile ? '10px 8px' : '0px'
            }}>
              <Icon size={isMobile ? 28 : 40} color="#f4d35e" strokeWidth={2} />

              <div style={{
                fontSize: isMobile ? '38px' : '52px',
                fontWeight: '900',
                color: '#f4d35e',
                lineHeight: '1',
                letterSpacing: '-1px'
              }}>
                {stat.number}
              </div>

              <div style={{
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '700',
                letterSpacing: isMobile ? '1px' : '2px',
                opacity: 0.9,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.25
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
