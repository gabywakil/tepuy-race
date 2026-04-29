import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Phone, CreditCard, Upload, Check, Users, Plus, Trash2 } from 'lucide-react';
import useMedia from '../hooks/useMedia';

const PRICE_INDIVIDUAL = 65;
const GROUP_DISCOUNT = 0.15;
const GROUP_MIN = 10;

const emptyMember = () => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: '',
  shirtSize: '',
  country: '',
  city: '',
  emergencyContact: '',
  emergencyPhone: ''
});

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useMedia('(max-width: 768px)');

  const race = location.state?.race || {
    id: '10k',
    name: '10K Aventura',
    distance: '10K',
    price: '$65'
  };
  const isGroup = location.state?.isGroup || false;

  // ── Individual form state ──
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

  // ── Group form state ──
  const [groupLeader, setGroupLeader] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: ''
  });
  const [members, setMembers] = useState(
    Array.from({ length: GROUP_MIN }, emptyMember)
  );
  const [groupPaymentMethod, setGroupPaymentMethod] = useState('');
  const [showGroupPaymentInfo, setShowGroupPaymentInfo] = useState(false);

  const [paymentProof, setPaymentProof] = useState(null);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);

  const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const paymentMethods = {
    zelle: { name: 'Zelle', email: 'payments@tepuyrace.com', phone: '+58 414-123-4567' },
    pagomovil: { name: 'Pago Móvil', bank: 'Banco de Venezuela', phone: '0414-1234567', ci: 'V-12345678' }
  };

  // Pricing
  const groupTotal = members.length * PRICE_INDIVIDUAL * (1 - GROUP_DISCOUNT);
  const groupPricePerPerson = PRICE_INDIVIDUAL * (1 - GROUP_DISCOUNT);

  const handleInputChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleLeaderChange = (e) => {
    setGroupLeader((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleMemberChange = (index, e) => {
    setMembers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [e.target.name]: e.target.value };
      return updated;
    });
  };

  const addMember = () => setMembers((p) => [...p, emptyMember()]);

  const removeMember = (index) => {
    if (members.length <= GROUP_MIN) return;
    setMembers((p) => p.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setPaymentProof(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentProof) {
      alert('Por favor sube el comprobante de pago.');
      return;
    }
    if (isGroup && !groupPaymentMethod) {
      alert('Por favor selecciona un método de pago.');
      return;
    }
    if (!isGroup && !formData.paymentMethod) {
      alert('Por favor selecciona un método de pago.');
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/registration-confirmed', {
      state: isGroup
        ? { groupLeader, members, race, isGroup: true }
        : { formData, race }
    });
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

  const PaymentSelector = ({ selectedMethod, onSelect, onShowInfo }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '12px',
      marginBottom: '14px'
    }}>
      {['zelle', 'pagomovil'].map((method) => (
        <button
          key={method}
          type="button"
          onClick={() => { onSelect(method); onShowInfo(true); }}
          style={{
            padding: '16px',
            backgroundColor: selectedMethod === method ? 'rgba(244, 211, 94, 0.15)' : 'rgba(10, 74, 66, 0.4)',
            borderRadius: '15px',
            border: `2px solid ${selectedMethod === method ? '#f4d35e' : 'rgba(244, 211, 94, 0.3)'}`,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center',
            color: '#f5f1e8'
          }}
        >
          <div style={{ fontSize: '16px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>
            {method === 'zelle' ? 'Zelle' : 'Pago Móvil'}
          </div>
          {selectedMethod === method && (
            <Check size={18} color="#f4d35e" style={{ marginTop: '10px' }} />
          )}
        </button>
      ))}
    </div>
  );

  const PaymentInfo = ({ method }) => (
    <div style={{
      padding: '14px',
      backgroundColor: 'rgba(200, 90, 62, 0.15)',
      borderRadius: '15px',
      border: '2px solid #c85a3e',
      marginBottom: '14px'
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
      {method === 'zelle' ? (
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
  );

  return (
    <div style={{
      backgroundColor: 'transparent',
      minHeight: '100vh',
      paddingTop: '100px',
      paddingBottom: '80px',
      width: '100%',
      margin: 0
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 40px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '24px' : '50px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: isGroup ? 'rgba(200, 90, 62, 0.15)' : 'rgba(200, 90, 62, 0.15)',
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
            fontSize: isMobile ? 'clamp(30px, 8vw, 48px)' : '52px',
            fontWeight: '900',
            marginBottom: '10px',
            lineHeight: '1.05',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            {isGroup ? 'Inscripción grupal' : 'Checkout'}
          </h1>

          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif"
          }}>
            {isGroup
              ? 'Completa los datos del grupo para finalizar la inscripción.'
              : 'Completa tus datos para finalizar la inscripción.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* ── Resumen de carrera ── */}
          <div style={{
            padding: isMobile ? '16px' : '30px',
            backgroundColor: 'rgba(244, 211, 94, 0.12)',
            borderRadius: '18px',
            border: `2px solid ${isGroup ? '#c85a3e' : '#f4d35e'}`,
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: '10px'
            }}>
              <div>
                <div style={{
                  fontSize: '13px',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  marginBottom: '5px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {isGroup ? `Inscripción grupal — ${members.length} personas` : 'Carrera seleccionada'}
                </div>
                <div style={{
                  fontSize: isMobile ? '20px' : '24px',
                  fontWeight: '900',
                  color: '#f5f1e8',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {race.name}
                </div>
                {isGroup && (
                  <div style={{
                    marginTop: '6px',
                    display: 'inline-block',
                    backgroundColor: 'rgba(244, 211, 94, 0.18)',
                    color: '#f4d35e',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '800',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '1px'
                  }}>
                    🎉 15% DE DESCUENTO APLICADO
                  </div>
                )}
              </div>

              <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                {isGroup ? (
                  <>
                    <div style={{
                      fontSize: '13px',
                      color: '#f5f1e8',
                      opacity: 0.55,
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: 'line-through'
                    }}>
                      ${(members.length * PRICE_INDIVIDUAL).toFixed(2)}
                    </div>
                    <div style={{
                      fontSize: isMobile ? '26px' : '36px',
                      fontWeight: '900',
                      color: '#f4d35e',
                      fontFamily: "'Playfair Display', serif",
                      lineHeight: 1
                    }}>
                      ${groupTotal.toFixed(2)}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#f5f1e8',
                      opacity: 0.6,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      ${groupPricePerPerson.toFixed(2)} / persona
                    </div>
                  </>
                ) : (
                  <div style={{
                    fontSize: isMobile ? '26px' : '36px',
                    fontWeight: '900',
                    color: '#f4d35e'
                  }}>
                    {race.price}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
              GROUP FLOW
          ════════════════════════════════ */}
          {isGroup ? (
            <>
              {/* Group leader */}
              <div style={{
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                padding: isMobile ? '16px' : '34px',
                borderRadius: '22px',
                border: '2px solid rgba(200, 90, 62, 0.5)',
                marginBottom: '16px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  marginBottom: '6px',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Users size={22} color="#c85a3e" />
                  Responsable del grupo
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#f5f1e8',
                  opacity: 0.65,
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '18px'
                }}>
                  Persona de contacto principal y coordinador del pago.
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '12px'
                }}>
                  <input name="firstName" placeholder="Nombre *" required value={groupLeader.firstName} onChange={handleLeaderChange} style={inputBase} />
                  <input name="lastName" placeholder="Apellido *" required value={groupLeader.lastName} onChange={handleLeaderChange} style={inputBase} />
                  <input type="email" name="email" placeholder="Email *" required value={groupLeader.email} onChange={handleLeaderChange} style={inputBase} />
                  <input type="tel" name="phone" placeholder="Teléfono *" required value={groupLeader.phone} onChange={handleLeaderChange} style={inputBase} />
                  <input
                    name="organization"
                    placeholder="Empresa / equipo / club (opcional)"
                    value={groupLeader.organization}
                    onChange={handleLeaderChange}
                    style={{ ...inputBase, gridColumn: isMobile ? '1' : '1 / -1' }}
                  />
                </div>
              </div>

              {/* Members */}
              <div style={{
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                padding: isMobile ? '16px' : '34px',
                borderRadius: '22px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                marginBottom: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '6px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#f5f1e8',
                    fontFamily: "'Inter', sans-serif",
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <User size={22} color="#f4d35e" />
                    Participantes ({members.length})
                  </h3>
                  <button
                    type="button"
                    onClick={addMember}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'rgba(244, 211, 94, 0.12)',
                      border: '2px solid #f4d35e',
                      color: '#f4d35e',
                      borderRadius: '10px',
                      padding: '8px 16px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '800',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <Plus size={16} /> Añadir participante
                  </button>
                </div>
                <p style={{
                  fontSize: '13px',
                  color: '#f5f1e8',
                  opacity: 0.65,
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: '20px'
                }}>
                  Mínimo {GROUP_MIN} participantes para aplicar el descuento.
                  {members.length < GROUP_MIN && (
                    <span style={{ color: '#c85a3e', fontWeight: '700' }}>
                      {' '}Faltan {GROUP_MIN - members.length} para completar el mínimo.
                    </span>
                  )}
                </p>

                {members.map((member, index) => (
                  <div
                    key={index}
                    style={{
                      padding: isMobile ? '14px' : '20px',
                      backgroundColor: 'rgba(10, 74, 66, 0.35)',
                      borderRadius: '14px',
                      border: '1px solid rgba(244, 211, 94, 0.18)',
                      marginBottom: '14px'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '14px'
                    }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '800',
                        color: '#f4d35e',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '0.5px'
                      }}>
                        PARTICIPANTE #{index + 1}
                      </div>
                      {members.length > GROUP_MIN && (
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#c85a3e',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '13px',
                            fontFamily: "'Inter', sans-serif",
                            padding: '4px 8px',
                            borderRadius: '8px'
                          }}
                        >
                          <Trash2 size={15} /> Eliminar
                        </button>
                      )}
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                      gap: '10px'
                    }}>
                      <input name="firstName" placeholder="Nombre *" required value={member.firstName} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input name="lastName" placeholder="Apellido *" required value={member.lastName} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input type="email" name="email" placeholder="Email *" required value={member.email} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input type="tel" name="phone" placeholder="Teléfono *" required value={member.phone} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input type="date" name="birthDate" required value={member.birthDate} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <select
                        name="shirtSize"
                        required
                        value={member.shirtSize}
                        onChange={(e) => handleMemberChange(index, e)}
                        style={{
                          ...inputBase,
                          cursor: 'pointer',
                          color: member.shirtSize ? '#f5f1e8' : 'rgba(245, 241, 232, 0.55)'
                        }}
                      >
                        <option value="">Talla de camisa *</option>
                        {shirtSizes.map((s) => (
                          <option key={s} value={s} style={{ backgroundColor: 'transparent' }}>{s}</option>
                        ))}
                      </select>
                      <input name="country" placeholder="País *" required value={member.country} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input name="city" placeholder="Ciudad *" required value={member.city} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input name="emergencyContact" placeholder="Contacto de emergencia *" required value={member.emergencyContact} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                      <input type="tel" name="emergencyPhone" placeholder="Teléfono emergencia *" required value={member.emergencyPhone} onChange={(e) => handleMemberChange(index, e)} style={inputBase} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Group Payment */}
              <div style={{
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                padding: isMobile ? '16px' : '34px',
                borderRadius: '22px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                marginBottom: '18px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <CreditCard size={22} color="#f4d35e" />
                  Método de pago
                </h3>

                {/* Total recap */}
                <div style={{
                  backgroundColor: 'rgba(244, 211, 94, 0.10)',
                  border: '1px solid rgba(244, 211, 94, 0.25)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#f5f1e8', opacity: 0.8 }}>
                    {members.length} participantes × ${groupPricePerPerson.toFixed(2)}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '20px' : '24px',
                    fontWeight: '900',
                    color: '#f4d35e',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Total: ${groupTotal.toFixed(2)}
                  </div>
                </div>

                <PaymentSelector
                  selectedMethod={groupPaymentMethod}
                  onSelect={setGroupPaymentMethod}
                  onShowInfo={setShowGroupPaymentInfo}
                />

                {showGroupPaymentInfo && groupPaymentMethod && (
                  <PaymentInfo method={groupPaymentMethod} />
                )}

                {/* Comprobante */}
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
                    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                  />
                  <div style={{
                    padding: isMobile ? '16px' : '20px',
                    backgroundColor: 'rgba(10, 74, 66, 0.4)',
                    borderRadius: '15px',
                    border: '2px dashed rgba(244, 211, 94, 0.55)',
                    textAlign: 'center'
                  }}>
                    <Upload size={28} color="#f4d35e" style={{ marginBottom: '10px' }} />
                    <div style={{ fontSize: '14px', color: '#f5f1e8', fontFamily: "'Inter', sans-serif", marginBottom: '6px' }}>
                      {paymentProof ? paymentProof.name : 'Toca aquí para subir tu comprobante'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#f5f1e8', opacity: 0.65, fontFamily: "'Inter', sans-serif" }}>
                      PNG, JPG o PDF (máx. 5MB)
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* ════════════════════════════════
               INDIVIDUAL FLOW (original)
            ════════════════════════════════ */
            <>
              {/* Personal */}
              <div style={{
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                padding: isMobile ? '16px' : '34px',
                borderRadius: '22px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                marginBottom: '16px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  marginBottom: '16px',
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
                  gap: '12px'
                }}>
                  <input name="firstName" placeholder="Nombre *" required value={formData.firstName} onChange={handleInputChange} style={inputBase} />
                  <input name="lastName" placeholder="Apellido *" required value={formData.lastName} onChange={handleInputChange} style={inputBase} />
                  <input type="email" name="email" placeholder="Email *" required value={formData.email} onChange={handleInputChange} style={inputBase} />
                  <input type="tel" name="phone" placeholder="Teléfono *" required value={formData.phone} onChange={handleInputChange} style={inputBase} />
                  <input type="date" name="birthDate" required value={formData.birthDate} onChange={handleInputChange} style={inputBase} />
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
                  >
                    <option value="">Talla de camisa *</option>
                    {shirtSizes.map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: 'transparent' }}>{s}</option>
                    ))}
                  </select>
                  <input name="country" placeholder="País *" required value={formData.country} onChange={handleInputChange} style={inputBase} />
                  <input name="city" placeholder="Ciudad *" required value={formData.city} onChange={handleInputChange} style={inputBase} />
                </div>
              </div>

              {/* Emergencia */}
              <div style={{
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                padding: isMobile ? '16px' : '34px',
                borderRadius: '22px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                marginBottom: '16px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  marginBottom: '16px',
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
                  gap: '12px'
                }}>
                  <input name="emergencyContact" placeholder="Nombre completo *" required value={formData.emergencyContact} onChange={handleInputChange} style={inputBase} />
                  <input type="tel" name="emergencyPhone" placeholder="Teléfono *" required value={formData.emergencyPhone} onChange={handleInputChange} style={inputBase} />
                </div>
              </div>

              {/* Pago individual */}
              <div style={{
                backgroundColor: 'rgba(245, 241, 232, 0.08)',
                padding: isMobile ? '16px' : '34px',
                borderRadius: '22px',
                border: '2px solid rgba(244, 211, 94, 0.3)',
                marginBottom: '18px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#f5f1e8',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <CreditCard size={22} color="#f4d35e" />
                  Método de pago
                </h3>

                <PaymentSelector
                  selectedMethod={formData.paymentMethod}
                  onSelect={(m) => setFormData((p) => ({ ...p, paymentMethod: m }))}
                  onShowInfo={setShowPaymentInfo}
                />

                {showPaymentInfo && formData.paymentMethod && (
                  <PaymentInfo method={formData.paymentMethod} />
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
                    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                  />
                  <div style={{
                    padding: isMobile ? '16px' : '20px',
                    backgroundColor: 'rgba(10, 74, 66, 0.4)',
                    borderRadius: '15px',
                    border: '2px dashed rgba(244, 211, 94, 0.55)',
                    textAlign: 'center'
                  }}>
                    <Upload size={28} color="#f4d35e" style={{ marginBottom: '10px' }} />
                    <div style={{ fontSize: '14px', color: '#f5f1e8', fontFamily: "'Inter', sans-serif", marginBottom: '6px' }}>
                      {paymentProof ? paymentProof.name : 'Toca aquí para subir tu comprobante'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#f5f1e8', opacity: 0.65, fontFamily: "'Inter', sans-serif" }}>
                      PNG, JPG o PDF (máx. 5MB)
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: '100%',
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
              boxShadow: '0 10px 35px rgba(200, 90, 62, 0.4)'
            }}
          >
            {isGroup ? `CONFIRMAR INSCRIPCIÓN GRUPAL (${members.length} personas)` : 'CONFIRMAR INSCRIPCIÓN'}
          </button>

          <div style={{
            textAlign: 'center',
            marginTop: '12px',
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
