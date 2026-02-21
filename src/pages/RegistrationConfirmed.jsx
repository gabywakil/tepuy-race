import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const RegistrationConfirmed = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const location = useLocation();
  const navigate = useNavigate();

  const race = location.state?.race;
  const formData = location.state?.formData;

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: '#0a4a42', minHeight: '100vh', paddingTop: '110px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px' }}>
        <div style={{
          padding: isMobile ? '22px' : '40px',
          borderRadius: '22px',
          border: '3px solid #f4d35e',
          backgroundColor: 'rgba(245, 241, 232, 0.06)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
            <CheckCircle size={54} color="#f4d35e" />
          </div>

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
            PASO 3 DE 3
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(28px, 8vw, 44px)' : '52px',
            fontWeight: '900',
            margin: 0,
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.05
          }}>
            ¡Inscripción confirmada!
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#f5f1e8',
            opacity: 0.8,
            marginTop: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Te enviaremos un correo con los detalles. Guarda esta confirmación.
          </p>

          <div style={{
            marginTop: '18px',
            padding: '16px',
            borderRadius: '16px',
            border: '2px solid rgba(244, 211, 94, 0.25)',
            backgroundColor: 'rgba(10, 74, 66, 0.4)',
            textAlign: 'left'
          }}>
            <div style={{ fontFamily: "'Inter', sans-serif", color: '#f5f1e8', opacity: 0.9, fontSize: '14px' }}>
              <strong>Carrera:</strong> {race?.name || '—'}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: '#f5f1e8', opacity: 0.9, fontSize: '14px', marginTop: '6px' }}>
              <strong>Participante:</strong> {formData?.firstName ? `${formData.firstName} ${formData.lastName}` : '—'}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: '#f5f1e8', opacity: 0.9, fontSize: '14px', marginTop: '6px' }}>
              <strong>Email:</strong> {formData?.email || '—'}
            </div>
          </div>

          <button
            type="button"
            onClick={goHome}
            style={{
              width: '100%',
              marginTop: '18px',
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: isMobile ? '16px' : '18px',
              borderRadius: '14px',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '900',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            VOLVER AL INICIO <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirmed;
