import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mountain } from 'lucide-react';

const RaceSelection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const race = {
    id: '10k',
    name: '10K Aventura',
    distance: '10K',
    price: '$65',
    bullets: [
      'Exigencia media',
      'Sección técnica',
      'Experiencia completa',
      'Kit de corredor incluido',
      'Medalla finisher',
      'Chip de cronometraje',
      'Hidratación en ruta'
    ]
  };

  const goCheckout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/checkout', { state: { race } });
  };

  return (
    <div style={{ backgroundColor: '#0a4a42', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '22px' : '44px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(244, 211, 94, 0.12)',
            color: '#f4d35e',
            padding: '10px 22px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: '800',
            letterSpacing: '2px',
            marginBottom: '14px',
            fontFamily: "'Inter', sans-serif"
          }}>
            PASO 1 DE 3
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(30px, 9vw, 48px)' : '56px',
            fontWeight: '900',
            margin: 0,
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.05
          }}>
            Selecciona tu carrera
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#f5f1e8',
            opacity: 0.75,
            marginTop: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Revisa detalles y precio antes de pagar.
          </p>
        </div>

        {/* Single Card */}
        <div style={{
          padding: isMobile ? '24px' : '40px',
          borderRadius: '18px',
          border: '3px solid #f4d35e',
          backgroundColor: 'rgba(244, 211, 94, 0.12)',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px'
          }}>
            <Mountain size={24} color="#f4d35e" />
            <div style={{
              fontWeight: '900',
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              color: '#f5f1e8'
            }}>
              Detalles de la carrera
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
          }}>
            <div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                opacity: 0.75,
                marginBottom: '4px',
                color: '#f5f1e8'
              }}>
                DISTANCIA
              </div>
              <div style={{
                fontSize: isMobile ? '32px' : '40px',
                fontWeight: '900',
                fontFamily: "'Playfair Display', serif",
                color: '#f5f1e8'
              }}>
                {race.distance}
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: '700',
                marginTop: '4px',
                fontFamily: "'Inter', sans-serif",
                color: '#f5f1e8'
              }}>
                {race.name}
              </div>
            </div>
            <div style={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: '900',
              color: '#f4d35e',
              fontFamily: "'Playfair Display', serif"
            }}>
              {race.price}
            </div>
          </div>

          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#f4d35e',
            marginBottom: '14px',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '1px'
          }}>
            INCLUYE:
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '12px',
            marginBottom: '24px'
          }}>
            {race.bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle size={18} color="#f4d35e" strokeWidth={2.5} />
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  opacity: 0.9,
                  color: '#f5f1e8'
                }}>
                  {b}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goCheckout}
            style={{
              width: '100%',
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: isMobile ? '16px 18px' : '20px 24px',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: isMobile ? '15px' : '17px',
              fontWeight: '900',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            CONTINUAR AL CHECKOUT <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaceSelection;
