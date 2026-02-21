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

  const races = useMemo(() => ([
    {
      id: '5k',
      name: '5K Starter',
      distance: '5K',
      price: '$45',
      bullets: ['Ideal para principiantes', 'Ruta panorámica', 'Hidratación incluida']
    },
    {
      id: '10k',
      name: '10K Aventura',
      distance: '10K',
      price: '$65',
      bullets: ['Exigencia media', 'Sección técnica', 'Experiencia completa']
    },
    {
      id: '21k',
      name: '21K Challenge',
      distance: '21K',
      price: '$90',
      bullets: ['Alta exigencia', 'Más desnivel', 'Premiación especial']
    }
  ]), []);

  const [selected, setSelected] = useState(races[1]);

  const goCheckout = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/checkout', { state: { race: selected } });
  };

  return (
    <div style={{ backgroundColor: '#0a4a42', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px' }}>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
          gap: '16px'
        }}>
          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '14px'
          }}>
            {races.map((r) => {
              const active = selected.id === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelected(r)}
                  style={{
                    textAlign: 'left',
                    padding: '18px',
                    borderRadius: '18px',
                    border: active ? '3px solid #f4d35e' : '2px solid rgba(244, 211, 94, 0.25)',
                    backgroundColor: active ? 'rgba(244, 211, 94, 0.12)' : 'rgba(245, 241, 232, 0.06)',
                    color: '#f5f1e8',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', opacity: 0.75, marginBottom: '6px' }}>
                    DISTANCIA
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: '900', fontFamily: "'Playfair Display', serif" }}>
                    {r.distance}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '700', marginTop: '6px', fontFamily: "'Inter', sans-serif" }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '900', color: '#f4d35e', marginTop: '10px' }}>
                    {r.price}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Summary */}
          <div style={{
            padding: '18px',
            borderRadius: '18px',
            border: '2px solid rgba(244, 211, 94, 0.28)',
            backgroundColor: 'rgba(10, 74, 66, 0.4)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Mountain size={20} color="#f4d35e" />
              <div style={{ fontWeight: '900', fontFamily: "'Inter', sans-serif" }}>Detalles</div>
            </div>

            <div style={{
              fontSize: '18px',
              fontWeight: '900',
              fontFamily: "'Playfair Display', serif",
              color: '#f5f1e8',
              marginBottom: '6px'
            }}>
              {selected.name}
            </div>

            <div style={{ fontSize: '14px', opacity: 0.8, fontFamily: "'Inter', sans-serif", marginBottom: '12px' }}>
              Precio: <span style={{ color: '#f4d35e', fontWeight: 900 }}>{selected.price}</span>
            </div>

            <div style={{ display: 'grid', gap: '10px', marginBottom: '14px' }}>
              {selected.bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle size={16} color="#f4d35e" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', opacity: 0.9 }}>{b}</span>
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
                padding: '16px 18px',
                borderRadius: '14px',
                cursor: 'pointer',
                fontSize: '15px',
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
              CONTINUAR <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceSelection;
