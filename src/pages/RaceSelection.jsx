import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, CheckCircle } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const RaceSelection = () => {
  const navigate = useNavigate();
  const { isMobile } = useMedia('(max-width: 768px)');

  const race = {
    id: '10k',
    name: '10K Aventura',
    distance: '10K',
    price: '$65',
    elevation: '+1,311m',
    difficulty: 'Intermedio',
    features: [
      'Desafío moderado',
      'Vistas espectaculares',
      'Terreno variado',
      '4 puntos de hidratación'
    ],
    color: '#c85a3e',
    recommended: true
  };

  const handleContinue = () => {
    navigate('/checkout', { state: { race } });
  };

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: '100px',
      paddingBottom: '80px',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 40px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(200, 90, 62, 0.15)',
            color: '#c85a3e',
            padding: '10px 25px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '18px',
            fontFamily: "'Inter', sans-serif"
          }}>
            PASO 1 DE 3
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(34px, 9vw, 56px)' : '56px',
            fontWeight: '900',
            marginBottom: '14px',
            lineHeight: '1.05',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Selecciona tu <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Reto</span>
          </h1>

          <p style={{
            fontSize: isMobile ? '15px' : '18px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif"
          }}>
            Aquí tienes la carrera principal disponible con todos sus detalles.
          </p>
        </div>

        {/* Card única */}
        <div
          style={{
            padding: isMobile ? '26px 18px' : '40px 30px',
            backgroundColor: 'rgba(245, 241, 232, 0.08)',
            borderRadius: '25px',
            border: '3px solid rgba(244, 211, 94, 0.35)',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.22)'
          }}
        >
          {/* Badge */}
          {race.recommended && (
            <div style={{
              position: 'absolute',
              top: '-14px',
              right: '18px',
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 5px 15px rgba(200, 90, 62, 0.35)'
            }}>
              MÁS POPULAR
            </div>
          )}

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            gap: isMobile ? '18px' : '0px',
            alignItems: isMobile ? 'flex-start' : 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                backgroundColor: `${race.color}22`,
                color: race.color,
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                marginBottom: '14px',
                fontFamily: "'Inter', sans-serif",
                border: `2px solid ${race.color}`
              }}>
                {race.distance}
              </div>

              <h3 style={{
                fontSize: isMobile ? '28px' : '32px',
                fontWeight: '900',
                marginBottom: '10px',
                color: '#f5f1e8',
                fontFamily: "'Playfair Display', serif"
              }}>
                {race.name}
              </h3>

              <div style={{
                display: 'flex',
                gap: '18px',
                flexWrap: 'wrap',
                marginBottom: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '900', color: '#f4d35e' }}>
                    {race.price}
                  </div>
                  <div style={{ fontSize: '12px', opacity: 0.75, color: '#f5f1e8', fontFamily: "'Inter', sans-serif" }}>
                    Inscripción
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#f5f1e8', fontFamily: "'Inter', sans-serif" }}>
                    {race.elevation}
                  </div>
                  <div style={{ fontSize: '12px', opacity: 0.75, color: '#f5f1e8', fontFamily: "'Inter', sans-serif" }}>
                    Desnivel
                  </div>
                </div>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                backgroundColor: 'rgba(10, 74, 66, 0.45)',
                borderRadius: '12px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <TrendingUp size={18} color={race.color} />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#f5f1e8', fontFamily: "'Inter', sans-serif" }}>
                  Nivel: {race.difficulty}
                </span>
              </div>
            </div>

            {/* Check visual */}
            <div style={{
              width: isMobile ? '100%' : '220px',
              backgroundColor: 'rgba(244, 211, 94, 0.08)',
              border: '2px solid rgba(244, 211, 94, 0.3)',
              borderRadius: '18px',
              padding: '16px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(244, 211, 94, 0.18)',
                border: '2px solid #f4d35e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <CheckCircle size={20} color="#f4d35e" strokeWidth={2.8} />
              </div>
              <div style={{ color: '#f5f1e8', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ fontWeight: 800 }}>Incluye</div>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>Kit + Medalla + Chip</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div style={{
            marginTop: '18px',
            paddingTop: '18px',
            borderTop: '1px solid rgba(244, 211, 94, 0.18)',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '10px'
          }}>
            {race.features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: race.color }} />
                <span style={{ color: '#f5f1e8', opacity: 0.92, fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Botón continuar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '26px' }}>
          <button
            onClick={handleContinue}
            style={{
              width: isMobile ? '100%' : '420px',
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: isMobile ? '18px 20px' : '18px 26px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '16px',
              fontWeight: '800',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              transition: 'all 0.25s ease',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.35)'
            }}
          >
            CONTINUAR / ADQUIRIR ENTRADA
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '13px',
          color: '#f5f1e8',
          opacity: 0.65,
          fontFamily: "'Inter', sans-serif"
        }}>
          Al continuar pasarás al formulario de inscripción y pago.
        </div>
      </div>
    </div>
  );
};

export default RaceSelection;
