import React, { useEffect, useRef, useState } from 'react';
import { Mountain, Users, TrendingUp } from 'lucide-react';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';



/* animated number counter */
const Counter = ({ value, visible }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const raw = parseInt(value.replace(/\D/g, ''), 10);
    let cur = 0;
    const steps = 55;
    const step = Math.ceil(raw / steps);
    const iv = setInterval(() => {
      cur += step;
      if (cur >= raw) { setDisplay(raw); clearInterval(iv); }
      else setDisplay(cur);
    }, 22);
    return () => clearInterval(iv);
  }, [visible, value]);

  /* rebuild original string with animated number */
  const formatted = value.replace(/[\d,]+/, display.toLocaleString());
  return <>{formatted}</>;
};

const InfoHub = () => {
  const { isMobile } = useMedia('(max-width: 768px)');
  const [sectionRef, visible] = useInView(0.15);

  const stats = [
    { number: '2,600', label: 'Metros de Elevación', icon: Mountain, delay: '0s',    suffix: '' },
    { number: '500+',  label: 'Corredores Esperados', icon: Users,    delay: '0.12s', suffix: '' },
    { number: '10K',   label: 'Distancia Máxima',     icon: TrendingUp, delay: '0.24s', suffix: '' },
  ];

  return (
    <section style={{
      padding: isMobile ? '52px 18px' : '90px 40px',
      backgroundColor: 'transparent',
      color: '#f5f1e8',
      width: '100%',
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes ihFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ihIconPop {
          0%   { transform: scale(0.6) rotate(-8deg); opacity: 0; }
          70%  { transform: scale(1.12) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes ihGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(244,211,94,0); }
          50%      { box-shadow: 0 0 28px 6px rgba(244,211,94,0.12); }
        }
        @keyframes ihDivider {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        .ih-card:hover .ih-icon-wrap {
          transform: translateY(-3px) scale(1.08);
        }
        .ih-card:hover {
          background: rgba(244,211,94,0.07) !important;
          border-color: rgba(244,211,94,0.28) !important;
        }
      `}</style>

      {/* ambient top glow */}
      <div style={{
        position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
        width: '500px', height: '120px',
        background: 'radial-gradient(ellipse, rgba(244,211,94,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div
        ref={sectionRef}
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: isMobile ? '16px' : '0',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
        }}
      >
        {stats.map(({ number, label, icon: Icon, delay }, index) => (
          <React.Fragment key={index}>
            {/* card */}
            <div
              className="ih-card"
              style={{
                flex: isMobile ? '1 1 140px' : '1',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: isMobile ? '12px' : '18px',
                padding: isMobile ? '24px 16px' : '40px 32px',
                borderRadius: '20px',
                border: '1px solid rgba(244,211,94,0.12)',
                background: 'rgba(244,211,94,0.04)',
                transition: 'background 0.3s ease, border-color 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                animation: visible ? `ihFadeUp 0.65s ${delay} ease forwards` : 'none',
                animationFillMode: 'both',
              }}
            >
              {/* top shimmer line */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(244,211,94,0.3), transparent)',
                opacity: visible ? 1 : 0,
                transition: `opacity 0.4s ease ${delay}`,
              }} />

              {/* icon wrapper */}
              <div
                className="ih-icon-wrap"
                style={{
                  width: isMobile ? '52px' : '64px',
                  height: isMobile ? '52px' : '64px',
                  borderRadius: '50%',
                  background: 'rgba(244,211,94,0.1)',
                  border: '1.5px solid rgba(244,211,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  opacity: visible ? 1 : 0,
                  animation: visible ? `ihIconPop 0.55s ${parseFloat(delay) + 0.1}s cubic-bezier(0.34,1.56,0.64,1) forwards` : 'none',
                  animationFillMode: 'both',
                  flexShrink: 0,
                }}
              >
                <Icon size={isMobile ? 24 : 28} color="#f4d35e" strokeWidth={2} />
              </div>

              {/* number */}
              <div style={{
                fontSize: isMobile ? '42px' : '58px',
                fontWeight: '900',
                color: '#f4d35e',
                lineHeight: 1,
                letterSpacing: '-1px',
                fontFamily: "'Playfair Display', serif",
              }}>
                <Counter value={number} visible={visible} />
              </div>

              {/* label */}
              <div style={{
                fontSize: isMobile ? '12px' : '13px',
                fontWeight: '700',
                letterSpacing: isMobile ? '1px' : '1.5px',
                opacity: 0.75,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.35,
                color: '#f5f1e8',
                maxWidth: '140px',
              }}>
                {label}
              </div>
            </div>

            {/* vertical divider between cards (desktop only) */}
            {!isMobile && index < stats.length - 1 && (
              <div style={{
                width: '1px',
                alignSelf: 'stretch',
                background: 'linear-gradient(to bottom, transparent, rgba(244,211,94,0.2), transparent)',
                flexShrink: 0,
                transformOrigin: 'top',
                transform: visible ? 'scaleY(1)' : 'scaleY(0)',
                transition: `transform 0.6s ${parseFloat(delay) + 0.3}s ease`,
              }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default InfoHub;
