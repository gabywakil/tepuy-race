import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mountain, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const RaceSelection = () => {
  const navigate = useNavigate();
  const [selectedRace, setSelectedRace] = useState(null);

  const races = [
    {
      id: '5k',
      name: '5K Discovery',
      distance: '5K',
      price: '$45',
      elevation: '+600m',
      difficulty: 'Principiante',
      features: [
        'Ruta panorámica',
        'Ideal para iniciarse',
        'Senderos marcados',
        'Hidratación cada 2K'
      ],
      color: '#f4d35e'
    },
    {
      id: '10k',
      name: '10K Adventure',
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
    },
    {
      id: '21k',
      name: '21K Extreme',
      distance: '21K',
      price: '$95',
      elevation: '+2,600m',
      difficulty: 'Avanzado',
      features: [
        'Desafío extremo',
        'Formaciones únicas',
        'Altitud máxima',
        '6 puntos de hidratación'
      ],
      color: '#c85a3e'
    }
  ];

  const handleContinue = () => {
    if (selectedRace) {
      navigate('/checkout', { state: { race: races.find(r => r.id === selectedRace) } });
    }
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '70px'
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
            marginBottom: '25px',
            fontFamily: "'Inter', sans-serif"
          }}>
            PASO 1 DE 3
          </div>

          <h1 style={{
            fontSize: '64px',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            SELECT YOUR <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>CHALLENGE</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif"
          }}>
            Elige la distancia que mejor se adapte a tu nivel de experiencia
          </p>
        </div>

        {/* Race Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {races.map((race, index) => (
            <div
              key={race.id}
              onClick={() => setSelectedRace(race.id)}
              style={{
                padding: '40px 30px',
                backgroundColor: selectedRace === race.id ? 'rgba(244, 211, 94, 0.15)' : 'rgba(245, 241, 232, 0.08)',
                borderRadius: '25px',
                border: `3px solid ${selectedRace === race.id ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)'}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                transform: selectedRace === race.id ? 'scale(1.02)' : 'scale(1)',
                boxShadow: selectedRace === race.id ? '0 20px 50px rgba(244, 211, 94, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}
              onMouseOver={(e) => {
                if (selectedRace !== race.id) {
                  e.currentTarget.style.borderColor = '#f4d35e';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseOut={(e) => {
                if (selectedRace !== race.id) {
                  e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {/* Recommended Badge */}
              {race.recommended && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '20px',
                  backgroundColor: '#c85a3e',
                  color: '#f5f1e8',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: '0 5px 15px rgba(200, 90, 62, 0.4)'
                }}>
                  MÁS POPULAR
                </div>
              )}

              {/* Selected Checkmark */}
              {selectedRace === race.id && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#f4d35e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle size={22} color="#0a4a42" strokeWidth={3} />
                </div>
              )}

              {/* Distance Badge */}
              <div style={{
                display: 'inline-block',
                backgroundColor: `${race.color}20`,
                color: race.color,
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                marginBottom: '20px',
                fontFamily: "'Inter', sans-serif",
                border: `2px solid ${race.color}`
              }}>
                {race.distance}
              </div>

              {/* Race Name */}
              <h3 style={{
                fontSize: '28px',
                fontWeight: '900',
                marginBottom: '15px',
                color: '#f5f1e8',
                fontFamily: "'Playfair Display', serif"
              }}>
                {race.name}
              </h3>

              {/* Stats */}
              <div style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '25px',
                paddingBottom: '25px',
                borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '900',
                    color: race.color,
                    marginBottom: '5px'
                  }}>
                    {race.price}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#f5f1e8',
                    opacity: 0.7,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Inscripción
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#f5f1e8',
                    marginBottom: '5px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {race.elevation}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#f5f1e8',
                    opacity: 0.7,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Desnivel
                  </div>
                </div>
              </div>

              {/* Difficulty */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                padding: '12px 15px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '12px'
              }}>
                <TrendingUp size={18} color={race.color} />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Nivel: {race.difficulty}
                </span>
              </div>

              {/* Features */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {race.features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: race.color
                    }}></div>
                    <span style={{
                      fontSize: '13px',
                      color: '#f5f1e8',
                      opacity: 0.9,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          alignItems: 'center'
        }}>
          <button
            onClick={handleContinue}
            disabled={!selectedRace}
            style={{
              backgroundColor: selectedRace ? '#c85a3e' : 'rgba(200, 90, 62, 0.3)',
              color: '#f5f1e8',
              border: 'none',
              padding: '20px 60px',
              borderRadius: '50px',
              cursor: selectedRace ? 'pointer' : 'not-allowed',
              fontSize: '16px',
              fontWeight: '700',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: selectedRace ? '0 10px 35px rgba(200, 90, 62, 0.4)' : 'none',
              opacity: selectedRace ? 1 : 0.5
            }}
            onMouseOver={(e) => {
              if (selectedRace) {
                e.target.style.backgroundColor = '#b04935';
                e.target.style.transform = 'translateY(-3px)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedRace) {
                e.target.style.backgroundColor = '#c85a3e';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            CONTINUAR AL CHECKOUT
          </button>
        </div>

        {selectedRace && (
          <div style={{
            textAlign: 'center',
            marginTop: '25px',
            fontSize: '14px',
            color: '#f5f1e8',
            opacity: 0.7,
            fontFamily: "'Inter', sans-serif"
          }}>
            ✓ Has seleccionado: <strong>{races.find(r => r.id === selectedRace)?.name}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default RaceSelection;
