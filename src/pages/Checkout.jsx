import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Calendar, Shirt, CreditCard, Upload, Check } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const race = location.state?.race || { name: '10K Adventure', price: '$65' };

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPaymentProof(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields and payment proof
    if (paymentProof && formData.paymentMethod) {
      navigate('/registration-confirmed', { state: { formData, race } });
    } else {
      alert('Por favor completa todos los campos y sube el comprobante de pago');
    }
  };

  const paymentMethods = {
    zelle: {
      name: 'Zelle',
      email: 'payments@tepuyrace.com',
      phone: '+58 414-123-4567'
    },
    pagomovil: {
      name: 'Pago Móvil',
      bank: 'Banco de Venezuela',
      phone: '0414-1234567',
      ci: 'V-12345678'
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
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
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
            PASO 2 DE 3
          </div>

          <h1 style={{
            fontSize: '52px',
            fontWeight: '900',
            marginBottom: '15px',
            lineHeight: '1.1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Checkout
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif"
          }}>
            Completa tus datos para finalizar la inscripción
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Selected Race Summary */}
          <div style={{
            padding: '30px',
            backgroundColor: 'rgba(244, 211, 94, 0.12)',
            borderRadius: '20px',
            border: '2px solid #f4d35e',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  fontSize: '14px',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  marginBottom: '5px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Carrera seleccionada
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '900',
                  color: '#f5f1e8',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {race.name}
                </div>
              </div>
              <div style={{
                fontSize: '36px',
                fontWeight: '900',
                color: '#f4d35e'
              }}>
                {race.price}
              </div>
            </div>
          </div>

          {/* Personal Information */}
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
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <User size={22} color="#f4d35e" />
              Información Personal
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <input
                type="text"
                name="firstName"
                placeholder="Nombre *"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Apellido *"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono *"
                required
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <input
                type="date"
                name="birthDate"
                placeholder="Fecha de Nacimiento *"
                required
                value={formData.birthDate}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <select
                name="shirtSize"
                required
                value={formData.shirtSize}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: formData.shirtSize ? '#f5f1e8' : 'rgba(245, 241, 232, 0.5)',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  cursor: 'pointer'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              >
                <option value="">Talla de Camisa *</option>
                {shirtSizes.map(size => (
                  <option key={size} value={size} style={{ backgroundColor: '#0a4a42' }}>{size}</option>
                ))}
              </select>

              <input
                type="text"
                name="country"
                placeholder="País *"
                required
                value={formData.country}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <input
                type="text"
                name="city"
                placeholder="Ciudad *"
                required
                value={formData.city}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />
            </div>
          </div>

          {/* Emergency Contact */}
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
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Phone size={22} color="#c85a3e" />
              Contacto de Emergencia
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <input
                type="text"
                name="emergencyContact"
                placeholder="Nombre completo *"
                required
                value={formData.emergencyContact}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />

              <input
                type="tel"
                name="emergencyPhone"
                placeholder="Teléfono *"
                required
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                style={{
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  color: '#f5f1e8',
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#f4d35e';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.6)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.target.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}
              />
            </div>
          </div>

          {/* Payment Method */}
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
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <CreditCard size={22} color="#f4d35e" />
              Método de Pago
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {['zelle', 'pagomovil'].map(method => (
                <div
                  key={method}
                  onClick={() => {
                    setFormData({ ...formData, paymentMethod: method });
                    setShowPaymentInfo(true);
                  }}
                  style={{
                    padding: '25px',
                    backgroundColor: formData.paymentMethod === method ? 'rgba(244, 211, 94, 0.15)' : 'rgba(10, 74, 66, 0.4)',
                    borderRadius: '15px',
                    border: `2px solid ${formData.paymentMethod === method ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#f5f1e8',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {method === 'zelle' ? 'Zelle' : 'Pago Móvil'}
                  </div>
                  {formData.paymentMethod === method && (
                    <Check size={20} color="#f4d35e" style={{ marginTop: '10px' }} />
                  )}
                </div>
              ))}
            </div>

            {/* Payment Details */}
            {showPaymentInfo && formData.paymentMethod && (
              <div style={{
                padding: '25px',
                backgroundColor: 'rgba(200, 90, 62, 0.15)',
                borderRadius: '15px',
                border: '2px solid #c85a3e',
                marginBottom: '25px'
              }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  marginBottom: '15px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  Datos para transferencia:
                </div>
                
                {formData.paymentMethod === 'zelle' ? (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    <div style={{ color: '#f5f1e8', fontSize: '14px' }}>
                      <strong>Email:</strong> {paymentMethods.zelle.email}
                    </div>
                    <div style={{ color: '#f5f1e8', fontSize: '14px' }}>
                      <strong>Teléfono:</strong> {paymentMethods.zelle.phone}
                    </div>
                  </div>
                ) : (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    <div style={{ color: '#f5f1e8', fontSize: '14px' }}>
                      <strong>Banco:</strong> {paymentMethods.pagomovil.bank}
                    </div>
                    <div style={{ color: '#f5f1e8', fontSize: '14px' }}>
                      <strong>Teléfono:</strong> {paymentMethods.pagomovil.phone}
                    </div>
                    <div style={{ color: '#f5f1e8', fontSize: '14px' }}>
                      <strong>Cédula:</strong> {paymentMethods.pagomovil.ci}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* File Upload */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: '600',
                color: '#f5f1e8',
                marginBottom: '15px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Comprobante de Pago *
              </label>
              
              <div style={{
                position: 'relative'
              }}>
                <input
                  type="file"
                  accept="image/*"
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
                  padding: '30px',
                  backgroundColor: 'rgba(10, 74, 66, 0.4)',
                  borderRadius: '15px',
                  border: '2px dashed rgba(244, 211, 94, 0.5)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#f4d35e';
                  e.currentTarget.style.backgroundColor = 'rgba(244, 211, 94, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.5)';
                  e.currentTarget.style.backgroundColor = 'rgba(10, 74, 66, 0.4)';
                }}>
                  <Upload size={32} color="#f4d35e" style={{ marginBottom: '15px' }} />
                  <div style={{
                    fontSize: '15px',
                    color: '#f5f1e8',
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: '5px'
                  }}>
                    {paymentProof ? paymentProof.name : 'Haz clic o arrastra tu comprobante aquí'}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#f5f1e8',
                    opacity: 0.6,
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    PNG, JPG o PDF (Max. 5MB)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#c85a3e',
              color: '#f5f1e8',
              border: 'none',
              padding: '20px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '700',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)'
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
            CONFIRMAR INSCRIPCIÓN
          </button>

          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '13px',
            color: '#f5f1e8',
            opacity: 0.6,
            fontFamily: "'Inter', sans-serif"
          }}>
            Al confirmar aceptas nuestros términos y condiciones
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;