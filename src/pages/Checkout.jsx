import React, { useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Phone, CreditCard, Upload, Check } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useMedia('(max-width: 768px)');

  const race = location.state?.race || { name: '10K Aventura', price: '$65', distance: '10K' };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    country: '',
    city: '',
    shirtSize: '',
    emergencyContact: '',
    emergencyPhone: '',
    paymentMethod: ''
  });

  const [paymentProof, setPaymentProof] = useState(null);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const shirtSizes = useMemo(() => ['XS', 'S', 'M', 'L', 'XL', 'XXL'], []);

  const paymentMethods = useMemo(() => ({
    zelle: { name: 'Zelle', email: 'payments@tepuyrace.com', phone: '+58 414-123-4567' },
    pagomovil: { name: 'Pago Móvil', bank: 'Banco de Venezuela', phone: '0414-1234567', ci: 'V-12345678' }
  }), []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setPaymentProof(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentProof && formData.paymentMethod) {
      navigate('/registration-confirmed', { state: { formData, race } });
      return;
    }
    alert('Por favor completa todos los campos y sube el comprobante de pago.');
  };

  const inputBase = {
    padding: '15px 18px',
    borderRadius: '12px',
    border: '2px solid rgba(244, 211, 94, 0.3)',
    backgroundColor: 'rgba(10, 74, 66, 0.4)',
    color: '#f5f1e8',
    fontSize: '15px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const sectionCard = {
    backgroundColor: 'rgba(245, 241, 232, 0.08)',
    padding: isMobile ? '22px' : '40px',
    borderRadius: '25px',
    border: '2px solid rgba(244, 211, 94, 0.3)',
    marginBottom: '20px'
  };

  return (
    <div style={{
      backgroundColor: '#0a4a42',
      minHeight: '100vh',
      paddingTop: isMobile ? '86px' : '100px',
      paddingBottom: isMobile ? '70px' : '80px',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: isMobile ? '0 18px' : '0 40px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '26px' : '40px' }}>
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
            PASO 2 DE 3
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(32px, 9vw, 52px)' : '52px',
            fontWeight: '900',
            marginBottom: '10px',
            lineHeight: '1.1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Finaliza tu inscripción
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.6',
            margin: 0
          }}>
            Completa tus datos y adjunta el comprobante de pago.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Race Summary */}
          <div style={{
            padding: isMobile ? '20px' : '30px',
            backgroundColor: 'rgba(244, 211, 94, 0.12)',
            borderRadius: '20px',
            border: '2px solid #f4d35e',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{
                  fontSize: '13px',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  marginBottom: '6px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Carrera seleccionada
                </div>
                <div style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '900',
                  color: '#f5f1e8',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {race.name}
                </div>
              </div>

              <div style={{
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: '900',
                color: '#f4d35e'
              }}>
                {race.price}
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div style={sectionCard}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#f5f1e8',
              marginBottom: '18px',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <User size={20} color="#f4d35e" />
              Información personal
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '14px'
            }}>
              <input
                type="text"
                name="firstName"
                placeholder="Nombre *"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Apellido *"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono *"
                required
                value={formData.phone}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />

              <input
                type="date"
                name="birthDate"
                required
                value={formData.birthDate}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />

              <select
                name="shirtSize"
                required
                value={formData.shirtSize}
                onChange={handleInputChange}
                style={{
                  ...inputBase,
                  cursor: 'pointer',
                  color: formData.shirtSize ? '#f5f1e8' : 'rgba(245, 241, 232, 0.55)'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              >
                <option value="">Talla de camisa *</option>
                {shirtSizes.map((size) => (
                  <option key={size} value={size} style={{ backgroundColor: '#0a4a42' }}>
                    {size}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="country"
                placeholder="País *"
                required
                value={formData.country}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />

              <input
                type="text"
                name="city"
                placeholder="Ciudad *"
                required
                value={formData.city}
                onChange={handleInputChange}
                style={inputBase}
                onFocus={(e) => { e.target.style.borderColor = '#f4d35e'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)'; e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)'; }}
              />
            </div>
          </div>

          {/* Emergency */}
          <div style={sectionCard}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#f5f1e8',
              marginBottom: '18px',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Phone size={20} color="#c85a3e" />
              Contacto de emergencia
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '14px'
            }}>
              <input
                type="text"
                name="emergencyContact"
                placeholder="Nombre completo *"
                required
                value={formData.emergencyContact}
                onChange={handleInputChange}
                style={inputBase}
              />
              <input
                type="tel"
                name="emergencyPhone"
                placeholder="Teléfono *"
                required
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                style={inputBase}
              />
            </div>
          </div>

          {/* Payment */}
          <div style={sectionCard}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#f5f1e8',
              marginBottom: '18px',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <CreditCard size={20} color="#f4d35e" />
              Método de pago
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '14px',
              marginBottom: '16px'
            }}>
              {['zelle', 'pagomovil'].map((method) => (
                <div
                  key={method}
                  onClick={() => {
                    setFormData((p) => ({ ...p, paymentMethod: method }));
                    setShowPaymentInfo(true);
                  }}
                  style={{
                    padding: '18px',
                    backgroundColor: formData.paymentMethod === method ? 'rgba(244, 211, 94, 0.15)' : 'rgba(10, 74, 66, 0.4)',
                    borderRadius: '15px',
                    border: `2px solid ${formData.paymentMethod === method ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#f5f1e8',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {method === 'zelle' ? 'Zelle' : 'Pago Móvil'}
                  </div>
                  {formData.paymentMethod === method && (
                    <Check size={18} color="#f4d35e" style={{ marginTop: '10px' }} />
                  )}
                </div>
              ))}
            </div>

            {showPaymentInfo && formData.paymentMethod && (
              <div style={{
                padding: '18px',
                backgroundColor: 'rgba(200, 90, 62, 0.15)',
                borderRadius: '15px',
                border: '2px solid #c85a3e',
                marginBottom: '16px'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  marginBottom: '10px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Datos para transferencia
                </div>

                {formData.paymentMethod === 'zelle' ? (
                  <div style={{ display: 'grid', gap: '8px', fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#f5f1e8' }}>
                    <div><strong>Email:</strong> {paymentMethods.zelle.email}</div>
                    <div><strong>Teléfono:</strong> {paymentMethods.zelle.phone}</div>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: '8px', fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#f5f1e8' }}>
                    <div><strong>Banco:</strong> {paymentMethods.pagomovil.bank}</div>
                    <div><strong>Teléfono:</strong> {paymentMethods.pagomovil.phone}</div>
                    <div><strong>Cédula:</strong> {paymentMethods.pagomovil.ci}</div>
                  </div>
                )}
              </div>
            )}

            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#f5f1e8',
              marginBottom: '10px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Comprobante de pago *
            </label>

            <div style={{ position: 'relative' }}>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                required
                style={{
                  position: 'absolute',
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer'
                }}
              />

              <div style={{
                padding: isMobile ? '18px' : '26px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '15px',
                border: '2px dashed rgba(244, 211, 94, 0.5)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                if (isMobile) return;
                e.currentTarget.style.borderColor = '#f4d35e';
                e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.08)';
              }}
              onMouseOut={(e) => {
                if (isMobile) return;
                e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
              }}>
                <Upload size={30} color="#f4d35e" style={{ marginBottom: '10px' }} />
                <div style={{
                  fontSize: '14px',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '4px'
                }}>
                  {paymentProof ? paymentProof.name : 'Haz clic para subir tu comprobante'}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#f5f1e8',
                  opacity: 0.6,
                  fontFamily: "'Inter', sans-serif"
                }}>
                  PNG, JPG o PDF (máx. 5MB)
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: isMobile ? '18px' : '20px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '700',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)'
            }}
            onMouseOver={(e) => {
              if (isMobile) return;
              e.currentTarget.style.backgroundColor = '#b04935';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              if (isMobile) return;
              e.currentTarget.style.backgroundColor = '#c85a3e';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            CONFIRMAR INSCRIPCIÓN
          </button>

          <div style={{
            textAlign: 'center',
            marginTop: '14px',
            fontSize: '12px',
            color: '#f5f1e8',
            opacity: 0.6,
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.6'
          }}>
            Al confirmar, aceptas nuestros términos y condiciones.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
