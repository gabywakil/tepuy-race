import React from 'react';
import { Award } from 'lucide-react';

const MainSponsors = () => {
  const mainSponsors = [
    { name: "Title Sponsor", tier: "TITLE", logo: "LOGO 1" },
    { name: "Gold Sponsor", tier: "GOLD", logo: "LOGO 2" },
    { name: "Gold Sponsor", tier: "GOLD", logo: "LOGO 3" }
  ];

  return (
    <section style={{
      padding: '100px 40px',
      backgroundColor: '#0a4a42',
      width: '100%',
      margin: 0,
      borderTop: '1px solid rgba(244, 211, 94, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '70px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(244, 211, 94, 0.1)',
            padding: '10px 24px',
            borderRadius: '30px',
            marginBottom: '25px',
            border: '1px solid rgba(244, 211, 94, 0.3)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: '600',
            color: '#f4d35e',
            letterSpacing: '1.5px'
          }}>
            <Award size={16} />
            NUESTROS ALIADOS
          </div>

          <h2 style={{
            fontSize: '56px',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.1',
            color: '#f5f1e8'
          }}>
            Sponsors <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Principales</span>
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: '#f5f1e8',
            opacity: 0.8,
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.6'
          }}>
            Orgullosamente apoyados por marcas líderes que comparten nuestra pasión por el trail running
          </p>
        </div>

        {/* Sponsors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          alignItems: 'center'
        }}>
          {mainSponsors.map((sponsor, index) => (
            <div key={index} style={{
              padding: index === 0 ? '80px 60px' : '60px 40px',
              backgroundColor: 'rgba(245, 241, 232, 0.1)',
              borderRadius: '25px',
              textAlign: 'center',
              border: index === 0 ? '3px solid #f4d35e' : '2px solid rgba(244, 211, 94, 0.3)',
              boxShadow: index === 0 ? '0 20px 50px rgba(244, 211, 94, 0.2)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: index === 0 ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = index === 0 ? 'scale(1.08)' : 'scale(1.03)';
              e.currentTarget.style.borderColor = '#f4d35e';
              e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.15)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(244, 211, 94, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = index === 0 ? 'scale(1.05)' : 'scale(1)';
              e.currentTarget.style.borderColor = index === 0 ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.1)';
              e.currentTarget.style.boxShadow = index === 0 ? '0 20px 50px rgba(244, 211, 94, 0.2)' : '0 10px 30px rgba(0, 0, 0, 0.2)';
            }}>
              {/* Tier Badge */}
              {index === 0 && (
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#f4d35e',
                  color: '#0a4a42',
                  padding: '6px 20px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  marginBottom: '25px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {sponsor.tier}
                </div>
              )}

              {/* Logo Placeholder */}
              <div style={{
                width: '100%',
                height: index === 0 ? '200px' : '150px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: index === 0 ? '24px' : '20px',
                fontWeight: '700',
                color: '#0a4a42',
                fontFamily: "'Inter', sans-serif",
                border: '2px dashed rgba(10, 74, 66, 0.2)',
                marginBottom: '15px'
              }}>
                {sponsor.logo}
              </div>

              {/* Sponsor Name */}
              <div style={{
                fontSize: index === 0 ? '18px' : '16px',
                fontWeight: '600',
                color: '#f5f1e8',
                fontFamily: "'Inter', sans-serif",
                opacity: 0.9
              }}>
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <a href="/sponsors" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#f4d35e',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            fontFamily: "'Inter', sans-serif",
            padding: '15px 35px',
            border: '2px solid #f4d35e',
            borderRadius: '30px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f4d35e';
            e.currentTarget.style.color = '#0a4a42';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#f4d35e';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            VER TODOS LOS SPONSORS
            <span style={{ fontSize: '20px' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSponsors;