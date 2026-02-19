import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Home, Mail, Calendar, MapPin } from 'lucide-react';

const RegistrationConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, race } = location.state || {};

  const registrationDetails = [
    { label: 'Carrera', value: race?.name || 'N/A', icon: Calendar },
    { label: 'Corredor', value: `${formData?.firstName} ${formData?.lastName}` || 'N/A', icon: null },
    { label: 'Email', value: formData?.email || 'N/A', icon: Mail },
    { label: 'Talla', value: formData?.shirtSize || 'N/A', icon: null }
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
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 40px',
        width: '100%'
      }}>
        {/* Success Icon */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'rgba(244, 211, 94, 0.2)',
            border: '5px solid #f4d35e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 30px',
            animation: 'scaleIn 0.5s ease-out'
          }}>
            <CheckCircle size={60} color="#f4d35e" strokeWidth={3} />
          </div>

          <h1 style={{
            fontSize: '48px',
            fontWeight: '900',
            marginBottom: '15px',
            lineHeight: '1.1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            REGISTRATION CONFIRMED!
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif",
            marginBottom: '10px'
          }}>
            Tu inscripción ha sido recibida exitosamente
          </p>

          <p style={{
            fontSize: '14px',
            color: '#f5f1e8',
            opacity: 0.6,
            fontFamily: "'Inter', sans-serif"
          }}>
            Recibirás un email de confirmación en los próximos minutos
          </p>
        </div>

        {/* Registration Details Card */}
        <div style={{
          backgroundColor: 'rgba(245, 241, 232, 0.08)',
          padding: '40px',
          borderRadius: '25px',
          border: '2px solid rgba(244, 211, 94, 0.3)',
          marginBottom: '30px'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#f5f1e8',
            marginBottom: '30px',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center'
          }}>
            Detalles de tu Inscripción
          </h3>

          {/* Event Image Placeholder */}
          <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(200, 90, 62, 0.3) 0%, rgba(244, 211, 94, 0.3) 100%)',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(244, 211, 94, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: '#f4d35e',
              color: '#0a4a42',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '1px',
              fontFamily: "'Inter', sans-serif"
            }}>
              {race?.distance || '10K'}
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#f5f1e8',
              fontFamily: "'Inter', sans-serif",
              textAlign: 'center'
            }}>
              Mount Tepuy Plateau<br/>
              <span style={{ fontSize: '14px', opacity: 0.7 }}>Venezuela</span>
            </div>
          </div>

          {/* Details Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {registrationDetails.map((detail, index) => (
              <div key={index} style={{
                padding: '20px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '15px',
                border: '1px solid rgba(244, 211, 94, 0.2)'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#f5f1e8',
                  opacity: 0.6,
                  marginBottom: '8px',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {detail.label}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {detail.value}
                </div>
              </div>
            ))}
          </div>

          {/* Important Info */}
          <div style={{
            padding: '25px',
            backgroundColor: 'rgba(244, 211, 94, 0.1)',
            borderRadius: '15px',
            border: '2px solid #f4d35e'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#f5f1e8',
              marginBottom: '15px',
              fontFamily: "'Inter', sans-serif"
            }}>
              📋 Próximos Pasos:
            </div>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: '#f5f1e8',
              lineHeight: '2'
            }}>
              <li>Verificaremos tu pago en las próximas 24-48 horas</li>
              <li>Recibirás un email de confirmación con tu número de dorsal</li>
              <li>Podrás recoger tu kit 2 días antes del evento</li>
              <li>Guarda este email para el día de la carrera</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: 'rgba(245, 241, 232, 0.1)',
              color: '#f5f1e8',
              border: '2px solid #f4d35e',
              padding: '18px 30px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '700',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f4d35e';
              e.target.style.color = '#0a4a42';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(245, 241, 232, 0.1)';
              e.target.style.color = '#f5f1e8';
            }}
          >
            <Download size={18} />
            DESCARGAR CONFIRMACIÓN
          </button>

          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: '18px 30px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '700',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#b04935';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#c85a3e';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Home size={18} />
            VOLVER AL INICIO
          </button>
        </div>

        {/* Social Share */}
        <div style={{
          textAlign: 'center',
          padding: '30px',
          backgroundColor: 'rgba(245, 241, 232, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(244, 211, 94, 0.2)'
        }}>
          <div style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#f5f1e8',
            marginBottom: '15px',
            fontFamily: "'Inter', sans-serif"
          }}>
            ¡Comparte tu inscripción! 🎉
          </div>
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
          }}>
            {['Instagram', 'Facebook', 'Twitter'].map((social, index) => (
              <div
                key={index}
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244, 211, 94, 0.1)',
                  border: '2px solid #f4d35e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f4d35e';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {social[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          fontSize: '13px',
          color: '#f5f1e8',
          opacity: 0.6,
          fontFamily: "'Inter', sans-serif"
        }}>
          ¿Necesitas ayuda? Contáctanos en{' '}
          <a href="mailto:info@tepuyrace.com" style={{ color: '#f4d35e', textDecoration: 'none' }}>
            info@tepuyrace.com
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes scaleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RegistrationConfirmed;
