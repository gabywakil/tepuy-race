import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Home } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const RegistrationConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useMedia('(max-width: 768px)');

  const { formData, race } = location.state || {};

  const detalles = [
    { label: 'Carrera', value: race?.name || 'N/A' },
    { label: 'Distancia', value: race?.distance || 'N/A' },
    { label: 'Corredor', value: formData?.firstName ? `${formData.firstName} ${formData.lastName}` : 'N/A' },
    { label: 'Email', value: formData?.email || 'N/A' },
    { label: 'Talla', value: formData?.shirtSize || 'N/A' },
    { label: 'Ciudad', value: formData?.city || 'N/A' }
  ];

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: isMobile ? '86px' : '100px',
      paddingBottom: isMobile ? '70px' : '80px',
      width: '100%',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 40px',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '22px' : '34px' }}>
          <div style={{
            width: isMobile ? '96px' : '120px',
            height: isMobile ? '96px' : '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 211, 94, 0.2)',
            border: '5px solid #f4d35e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            animation: 'scaleIn 0.5s ease-out'
          }}>
            <CheckCircle size={isMobile ? 48 : 60} color="#f4d35e" strokeWidth={3} />
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(30px, 9vw, 46px)' : '48px',
            fontWeight: '900',
            marginBottom: '10px',
            lineHeight: '1.1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            ¡INSCRIPCIÓN CONFIRMADA!
          </h1>

          <p style={{
            fontSize: isMobile ? '15px' : '18px',
            color: '#f5f1e8',
            opacity: 0.85,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '6px'
          }}>
            Hemos recibido tu solicitud de inscripción.
          </p>

          <p style={{
            fontSize: '13px',
            color: '#f5f1e8',
            opacity: 0.65,
            fontFamily: "'Inter', sans-serif",
            margin: 0,
            lineHeight: '1.6'
          }}>
            Te enviaremos un correo de confirmación cuando el pago sea verificado.
          </p>
        </div>

        {/* Card */}
        <div style={{
          backgroundColor: 'rgba(245, 241, 232, 0.08)',
          padding: isMobile ? '22px' : '40px',
          borderRadius: '25px',
          border: '2px solid rgba(244, 211, 94, 0.3)',
          marginBottom: '18px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#f5f1e8',
            marginBottom: '18px',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center'
          }}>
            Detalles de tu inscripción
          </h3>

          <div style={{
            width: '100%',
            height: isMobile ? '170px' : '200px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(200, 90, 62, 0.3) 0%, rgba(244, 211, 94, 0.3) 100%)',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(244, 211, 94, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              backgroundColor: '#f4d35e',
              color: '#0a4a42',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '1px',
              fontFamily: "'Inter', sans-serif"
            }}>
              {race?.distance || '10K'}
            </div>

            <div style={{
              fontSize: '18px',
              fontWeight: '800',
              color: '#f5f1e8',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'center',
              lineHeight: '1.4'
            }}>
              Mount Tepuy Plateau<br />
              <span style={{ fontSize: '14px', opacity: 0.75 }}>Venezuela</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '12px',
            marginBottom: '16px'
          }}>
            {detalles.map((d, i) => (
              <div key={i} style={{
                padding: '16px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '15px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{
                  fontSize: '11px',
                  color: '#f5f1e8',
                  opacity: 0.6,
                  marginBottom: '6px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {d.label}
                </div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  wordBreak: 'break-word'
                }}>
                  {d.value}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: '16px',
            backgroundColor: 'rgba(244, 211, 94, 0.1)',
            borderRadius: '15px',
            border: '2px solid #f4d35e'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#f5f1e8',
              marginBottom: '10px',
              fontFamily: "'Inter', sans-serif"
            }}>
              📋 Próximos pasos
            </div>
            <ul style={{
              margin: 0,
              padding: '0 0 0 18px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#f5f1e8',
              lineHeight: '1.9',
              opacity: 0.95
            }}>
              <li>Verificaremos tu pago en 24–48 horas.</li>
              <li>Te enviaremos tu confirmación y número de dorsal por correo.</li>
              <li>La entrega de kits será 2 días antes del evento.</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: 'rgba(245, 241, 232, 0.1)',
              color: '#f5f1e8',
              border: '2px solid #f4d35e',
              padding: '16px 18px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '800',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease'
            }}
          >
            <Download size={18} style={{ marginRight: 10, verticalAlign: 'middle' }} />
            DESCARGAR / IMPRIMIR
          </button>

          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: '16px 18px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '800',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)'
            }}
          >
            <Home size={18} style={{ marginRight: 10, verticalAlign: 'middle' }} />
            VOLVER AL INICIO
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          fontSize: '12px',
          color: '#f5f1e8',
          opacity: 0.6,
          fontFamily: "'Inter', sans-serif"
        }}>
          ¿Necesitas ayuda? Escríbenos a{' '}
          <a href="mailto:info@tepuyrace.com" style={{ color: '#f4d35e', textDecoration: 'none' }}>
            info@tepuyrace.com
          </a>
        </div>

        <style>{`
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default RegistrationConfirmed;
