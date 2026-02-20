import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Phone, CreditCard, Upload, Check } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useMedia('(max-width: 768px)');

  const race =
    location.state?.race || {
      id: '10k',
      name: '10K Aventura',
      distance: '10K',
      price: '$65'
    };

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

  const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const paymentMethods = {
    zelle: { name: 'Zelle', email: 'payments@tepuyrace.com', phone: '+58 414-123-4567' },
    pagomovil: { name: 'Pago Móvil', bank: 'Banco de Venezuela', phone: '0414-1234567', ci: 'V-12345678' }
  };

  const handleInputChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setPaymentProof(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentProof || !formData.paymentMethod) {
      alert('Por favor selecciona método de pago y sube el comprobante.');
      return;
    }

    navigate('/registrationconfirmed', { state: { formData, race } });
  };

  const inputBase = {
    padding: '15px 18px',
    borderRadius: '12px',
    border: '2px solid rgba(244, 211, 94, 0.3)',
    backgroundColor: 'rgba(10, 74, 66, 0.4)',
    color: '#f5f1e8',
    fontSize: '15px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none'
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
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '50px' }}>
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
            fontSize: isMobile ? 'clamp(32px, 8vw, 52px)' : '52px',
            fontWeight: '900',
            marginBottom: '10px',
            lineHeight: '1.05',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Checkout
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif"
          }}>
            Completa tus datos para finalizar la inscripción
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Resumen */}
          <div style={{
            padding: isMobile ? '18px' : '30px',
            backgroundColor: 'rgba(244, 211, 94, 0.12)',
            borderRadius: '20px',
            border: '2px solid #f4d35e',
            marginBottom: '26px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '10px' : '0px'
            }}>
              <div>
                <div style={{
                  fontSize: '13px',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  marginBottom: '5px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Carrera seleccionada
                </div>
                <div style={{
                  fontSize: isMobile ? '22px' : '24px',
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

          {/* Personal */}
          <div style={{
            backgroundColor: 'rgba(245, 241, 232, 0.08)',
            padding: isMobile ? '18px' : '40px',
            borderRadius: '25px',
            border: '2px solid rgba(244, 211, 94, 0.3)',
            marginBottom: '18px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '800',
              color: '#f5f1e8',
              marginBottom: '18px',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <User size={22} color="#f4d35e" />
              Información personal
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '14px'
            }}>
              <input name="firstName" placeholder="Nombre *" required value={formData.firstName} onChange={handleInputChange} style={inputBase} />
              <input name="lastName" placeholder="Apellido *" required value={formData.lastName} onChange={handleInputChange} style={inputBase} />
              <input type="email" name="email" placeholder="Email *" required value={formData.email} onChange={handleInputChange} style={inputBase} />
              <input type="tel" name="phone" placeholder="Teléfono *" required value={formData.phone} onChange={handleInputChange} style={inputBase} />
              <input type="date" name="birthDate" required value={formData.birthDate} onChange={handleInputChange} style={inputBase} />

              <select name="shirtSize" required value={formData.shirtSize} onChange={handleInputChange}
                style={{
                  ...inputBase,
                  cursor: 'pointer',
                  color: formData.shirtSize ? '#f5f1e8' : 'rgba(245, 241, 232, 0.55)'
                }}>
                <option value="">Talla de camisa *</option>
                {shirtSizes.map((s) => (
                  <option key={s} value={s} style={{ backgroundColor: '#0a4a42' }}>{s}</option>
                ))}
              </select>

              <input name="country" placeholder="País *" required value={formData.country} onChange={handleInputChange} style={inputBase} />
              <input name="city" placeholder="Ciudad *" required value={formData.city} onChange={handleInputChange} style={inputBase} />
            </div>
          </div>

          {/* Emergencia */}
          <div style={{
            backgroundColor: 'rgba(245, 241, 232, 0.08)',
            padding: isMobile ? '18px' : '40px',
            borderRadius: '25px',
            border: '2px solid rgba(244, 211, 94, 0.3)',
            marginBottom: '18px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '800',
              color: '#f5f1e8',
              marginBottom: '18px',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Phone size={22} color="#c85a3e" />
              Contacto de emergencia
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '14px'
            }}>
              <input name="emergencyContact" placeholder="Nombre completo *" required value={formData.emergencyContact} onChange={handleInputChange} style={inputBase} />
              <input type="tel" name="emergencyPhone" placeholder="Teléfono *" required value={formData.emergencyPhone} onChange={handleInputChange} style={inputBase} />
            </div>
          </div>

          {/* Pago */}
          <div style={{
            backgroundColor: 'rgba(245, 241, 232, 0.08)',
            padding: isMobile ? '18px' : '40px',
            borderRadius: '25px',
            border: '2px solid rgba(244, 211, 94, 0.3)',
            marginBottom: '22px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '800',
              color: '#f5f1e8',
              marginBottom: '18px',
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <CreditCard size={22} color="#f4d35e" />
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
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#f5f1e8', fontFamily: "'Inter', sans-serif" }}>
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
                padding: '16px',
                backgroundColor: 'rgba(200, 90, 62, 0.15)',
                borderRadius: '15px',
                border: '2px solid #c85a3e',
                marginBottom: '16px'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  marginBottom: '10px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Datos para transferencia:
                </div>

                {formData.paymentMethod === 'zelle' ? (
                  <div style={{ display: 'grid', gap: '6px', color: '#f5f1e8', fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
                    <div><strong>Email:</strong> {paymentMethods.zelle.email}</div>
                    <div><strong>Teléfono:</strong> {paymentMethods.zelle.phone}</div>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gap: '6px', color: '#f5f1e8', fontFamily: "'Inter', sans-serif", fontSize: '14px' }}>
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
              fontWeight: '800',
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
                padding: isMobile ? '18px' : '22px',
                backgroundColor: 'rgba(10, 74, 66, 0.4)',
                borderRadius: '15px',
                border: '2px dashed rgba(244, 211, 94, 0.55)',
                textAlign: 'center'
              }}>
                <Upload size={28} color="#f4d35e" style={{ marginBottom: '10px' }} />
                <div style={{
                  fontSize: '14px',
                  color: '#f5f1e8',
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '6px'
                }}>
                  {paymentProof ? paymentProof.name : 'Toca aquí para subir tu comprobante'}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#f5f1e8',
                  opacity: 0.65,
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
              fontWeight: '900',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)'
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
            fontFamily: "'Inter', sans-serif"
          }}>
            Al confirmar aceptas nuestros términos y condiciones.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
