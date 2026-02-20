import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, Heart } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      name: 'Instagram', 
      handle: '@tepuyrace',
      followers: '12.5K',
      color: '#E1306C',
      link: 'https://instagram.com/tepuyrace'
    },
    { 
      icon: Facebook, 
      name: 'Facebook', 
      handle: '/tepuyrace',
      followers: '8.3K',
      color: '#1877F2',
      link: 'https://facebook.com/tepuyrace'
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      handle: '@TepuyRace',
      followers: '5.2K',
      color: '#FF0000',
      link: 'https://youtube.com/@tepuyrace'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      handle: '@tepuyrace',
      followers: '4.1K',
      color: '#1DA1F2',
      link: 'https://twitter.com/tepuyrace'
    }
  ];

  const stats = [
    { number: '15K+', label: 'Fotos compartidas' },
    { number: '30K+', label: 'Seguidores totales' },
    { number: '1.2M+', label: 'Impresiones mensuales' }
  ];

  return (
    <section style={{
      padding: '100px 40px',
      backgroundColor: '#0a4a42',
      width: '100%',
      margin: 0,
      borderTop: '1px solid rgba(244, 211, 94, 0.2)',
      borderBottom: '1px solid rgba(244, 211, 94, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '70px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(244, 211, 94, 0.1)',
            padding: '10px 24px',
            borderRadius: '30px',
            marginBottom: '25px',
            border: '1px solid rgba(244, 211, 94, 0.3)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: '600',
            color: '#f4d35e',
            letterSpacing: '1.5px'
          }}>
            <Heart size={16} fill="#f4d35e" />
            SÍGUENOS
          </div>

          <h2 style={{
            fontSize: '56px',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.1',
            color: '#f5f1e8',
            fontFamily: "'Playfair Display', serif"
          }}>
            Únete a Nuestra <span style={{ color: '#f4d35e', fontStyle: 'italic' }}>Comunidad</span>
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: '#f5f1e8',
            opacity: 0.8,
            maxWidth: '650px',
            margin: '0 auto',
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.6'
          }}>
            Comparte tu pasión, inspírate con otros runners y mantente al día 
            con todas las novedades de Tepuy Race
          </p>
        </div>

        {/* Social Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '25px',
          marginBottom: '60px'
        }}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '35px 25px',
                  backgroundColor: 'rgba(245, 241, 232, 0.08)',
                  borderRadius: '20px',
                  border: '2px solid rgba(244, 211, 94, 0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'block'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.backgroundColor = `${social.color}15`;
                  e.currentTarget.style.boxShadow = `0 15px 40px ${social.color}30`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(244, 211, 94, 0.3)';
                  e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: `${social.color}20`,
                  border: `3px solid ${social.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <Icon size={28} color={social.color} strokeWidth={2} />
                </div>

                {/* Name */}
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#f5f1e8',
                  marginBottom: '8px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {social.name}
                </div>

                {/* Handle */}
                <div style={{
                  fontSize: '14px',
                  color: '#f5f1e8',
                  opacity: 0.7,
                  marginBottom: '15px',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {social.handle}
                </div>

                {/* Followers */}
                <div style={{
                  fontSize: '20px',
                  fontWeight: '900',
                  color: social.color,
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {social.followers}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#f5f1e8',
                  opacity: 0.6,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '1px'
                }}>
                  SEGUIDORES
                </div>
              </a>
            );
          })}
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '30px',
              backgroundColor: 'rgba(244, 211, 94, 0.08)',
              borderRadius: '20px',
              border: '2px solid rgba(244, 211, 94, 0.3)'
            }}>
              <div style={{
                fontSize: '42px',
                fontWeight: '900',
                color: '#f4d35e',
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#f5f1e8',
                opacity: 0.8,
                letterSpacing: '1px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hashtag CTA */}
        <div style={{
          textAlign: 'center',
          padding: '50px',
          backgroundColor: 'rgba(200, 90, 62, 0.12)',
          borderRadius: '25px',
          border: '2px solid #c85a3e'
        }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#f5f1e8',
            marginBottom: '15px',
            fontFamily: "'Inter', sans-serif",
            opacity: 0.9
          }}>
            Comparte tu experiencia con
          </div>
          
          <div style={{
            fontSize: '48px',
            fontWeight: '900',
            color: '#f4d35e',
            marginBottom: '20px',
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic'
          }}>
            #TepuyRace
          </div>

          <p style={{
            fontSize: '15px',
            color: '#f5f1e8',
            opacity: 0.7,
            fontFamily: "'Inter', sans-serif",
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Etiquétanos en tus fotos y videos. Las mejores publicaciones 
            serán compartidas en nuestras redes oficiales
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
