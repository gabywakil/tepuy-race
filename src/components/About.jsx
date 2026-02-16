import React from 'react';
import { Heart } from 'lucide-react';

const About = () => {
  return (
    <section style={{
      padding: '120px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#0a4a42'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#c85a3e',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            marginBottom: '20px',
            fontFamily: "'Inter', sans-serif"
          }}>
            <Heart size={16} />
            PASSION TRAIL EVENT
          </div>
          
          <h2 style={{
            fontSize: '56px',
            fontWeight: '900',
            marginBottom: '30px',
            lineHeight: '1.1',
            color: '#f5f1e8'
          }}>
            The Nature's<br/>Ultimate <span style={{ 
              color: '#c85a3e',
              fontStyle: 'italic'
            }}>Adventure</span>
          </h2>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '30px',
            color: '#f5f1e8',
            opacity: 0.8,
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400'
          }}>
            Experimenta un evento de carrera inspirado en la naturaleza que empuja tus límites a través de paisajes majestuosos. Tepuy Race no es solo un maratón, es un viaje espiritual a través de las formaciones geológicas más antiguas de la Tierra.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div>
              <div style={{
                fontSize: '42px',
                fontWeight: '900',
                color: '#c85a3e',
                marginBottom: '8px'
              }}>
                2,600m
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                color: '#f5f1e8',
                opacity: 0.7,
                fontFamily: "'Inter', sans-serif"
              }}>
                Vertical gain that tests your<br/>stamina
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '42px',
                fontWeight: '900',
                color: '#c85a3e',
                marginBottom: '8px'
              }}>
                500+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                color: '#f5f1e8',
                opacity: 0.7,
                fontFamily: "'Inter', sans-serif"
              }}>
                Explosive community of elite<br/>athletes
              </div>
            </div>
          </div>
        </div>

        <div style={{
          position: 'relative',
          height: '600px',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          border: '8px solid #f4d35e'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f5f1e8 0%, #c85a3e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a4a42',
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: "'Inter', sans-serif"
          }}>
            [Imagen del Tepuy]
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;