import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Home, Mail } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const RegistrationConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useMedia('(max-width: 768px)');

  const { formData, race } = location.state || {};
  const runnerName =
    formData?.firstName && formData?.lastName ? `${formData.firstName} ${formData.lastName}` : 'N/A';

  const details = [
    { label: 'Carrera', value: race?.name || 'N/A' },
    { label: 'Distancia', value: race?.distance || 'N/A' },
    { label: 'Corredor', value: runnerName },
    { label: 'Email', value: formData?.email || 'N/A' },
    { label: 'Talla', value: formData?.shirtSize || 'N/A' }
  ];

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: '100px',
      paddingBottom: '80px',
      width: '100%',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '780px',
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 40px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <div style={{
            width: isMobile ? '96px' : '120px',
            height: isMobile ? '96px' : '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 211, 94, 0.2)',
            border: '5px solid #f4d35e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px'
          }}>
            <CheckCircle size={isMobile ? 46 : 60} color="#f4d35e" strokeWidth={3} />
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(30px, 8vw, 46px)' : '48px',
            fontWeight: '900',
            marginBottom: '8px',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif",
            lineHeight: '1.05'
          }}>
            ¡Inscripción confirmada!
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '6px'
          }}>
            Tu solicitud fue recibida exitosamente.
          </p>

          <p style={{
            fontSize: '13px',
            color: '#f5f1e8',
            opacity: 0.65,
            fontFamily: "'Inter', sans-serif"
          }}>
            <Mail size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            Recibirás un email de confirmación en los próximos minutos.
          </p>
        </div>

        {/* Card */}
        <div style={{
          backgroundColor: 'rgba(245, 241, 232, 0.08)',
          padding: isMobile ? '18px' : '40px',
          borderRadius: '25px',
          border: '2px solid rgba(244, 211, 94, 0.3)',
          marginBottom: '18px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '900',
            color: '#f5f1e8',
            marginBottom: '16px',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center'
          }}>
            Detalles de tu inscripción
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '12px',
            marginBottom: '16px'
          }}>
            {details.map((d, i) => (
              <div key={i} style={{
                padding: '14px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '14px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{
                  fontSize: '12px',
                  opacity: 0.65,
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}>
                  {d.label}
                </div>
                <div style={{
                  fontSize: '15px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif"
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
            border: '2px solid #f4d35e',
            color: '#f5f1e8',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            lineHeight: '1.8'
          }}>
            <div style={{ fontWeight: 900, marginBottom: 6 }}>📌 Próximos pasos</div>
            <div>• Verificaremos tu pago en 24–48 horas.</div>
            <div>• Te enviaremos tu número de dorsal por email.</div>
            <div>• Retiro de kit: 2 días antes del evento.</div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '12px'
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
              fontWeight: '900',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <Download size={18} />
            DESCARGAR
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
              fontWeight: '900',
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <Home size={18} />
            VOLVER AL INICIO
          </button>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '14px',
          fontSize: '12px',
          color: '#f5f1e8',
          opacity: 0.65,
          fontFamily: "'Inter', sans-serif"
        }}>
          ¿Necesitas ayuda? Escríbenos a{' '}
          <a href="mailto:info@tepuyrace.com" style={{ color: '#f4d35e', textDecoration: 'none', fontWeight: 800 }}>
            info@tepuyrace.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmed;
