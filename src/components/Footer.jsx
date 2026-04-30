import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logoImage from '../assets/logo.png';
import { Link } from 'react-router-dom';
import useMedia from '../hooks/useMedia';
import useInView from '../hooks/useInView';


const Footer = () => {
  const { isMobile, isTablet } = useMedia();
  const [colRef, colVisible] = useInView(0.1);
  const [bottomRef, bottomVisible] = useInView(0.1);

  const cols = [0, 1, 2, 3];

  return (
    <footer style={{
      backgroundColor: '#0a4a42',
      color: '#f5f1e8',
      padding: isMobile ? '60px 20px 32px' : '80px 40px 40px',
      borderTop: '2px solid rgba(244, 211, 94, 0.2)',
      width: '100%',
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes ftFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ftFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ftLineExpand {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes ftSocialPop {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ftGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(244,211,94,0); }
          50%      { box-shadow: 0 0 18px 3px rgba(244,211,94,0.18); }
        }
        .ft-link {
          color: #f5f1e8;
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.25s, color 0.25s, transform 0.25s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
        }
        .ft-link::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 1px;
          background: #f4d35e;
          transition: width 0.25s ease;
          vertical-align: middle;
        }
        .ft-link:hover {
          opacity: 1;
          color: #f4d35e;
          transform: translateX(4px);
        }
        .ft-link:hover::before {
          width: 10px;
        }
        .ft-social {
          transition: background-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .ft-social:hover {
          background-color: #f4d35e !important;
          transform: translateY(-4px) scale(1.08) !important;
          box-shadow: 0 8px 20px rgba(244,211,94,0.3) !important;
        }
        .ft-social:hover svg { color: #0a4a42 !important; stroke: #0a4a42 !important; }
        .ft-bottom-link {
          color: #f5f1e8;
          text-decoration: none;
          opacity: 0.55;
          font-size: 11px;
          letter-spacing: 1.5px;
          font-family: 'Inter', sans-serif;
          transition: opacity 0.2s, color 0.2s;
        }
        .ft-bottom-link:hover { opacity: 1; color: #f4d35e; }
      `}</style>

      {/* top ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(244,211,94,0.35), transparent)',
      }} />
      <div style={{
        position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
        width: '400px', height: '160px',
        background: 'radial-gradient(ellipse, rgba(244,211,94,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── columns ── */}
        <div
          ref={colRef}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
            gap: isMobile ? '36px' : '60px',
            marginBottom: '60px',
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(244,211,94,0.15)',
          }}
        >
          {/* ── Brand ── */}
          <div style={{
            opacity: colVisible ? 1 : 0,
            animation: colVisible ? 'ftFadeUp 0.6s 0s ease forwards' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src={logoImage} alt="Tepuy Race Logo" style={{ height: '45px', width: 'auto' }} />
              <span style={{
                fontSize: '22px', fontWeight: '700', color: '#f4d35e',
                fontFamily: "'Playfair Display', serif",
              }}>
                TEPUY RACE
              </span>
            </div>
            {/* thin accent line under brand */}
            <div style={{
              height: '2px', marginBottom: '16px', borderRadius: '2px',
              background: 'linear-gradient(90deg, #c85a3e, transparent)',
              animation: colVisible ? 'ftLineExpand 0.8s 0.3s ease forwards' : 'none',
              width: colVisible ? undefined : '0',
            }} />
            <p style={{
              fontSize: '14px', lineHeight: '1.8', opacity: 0.75,
              fontFamily: "'Inter', sans-serif", margin: 0,
              color: '#f5f1e8',
            }}>
              Desafiando límites y conectando corredores aventureros en Sudamérica desde 2016.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div style={{
            opacity: colVisible ? 1 : 0,
            animation: colVisible ? 'ftFadeUp 0.6s 0.1s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            <h4 style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '2.5px',
              marginBottom: '22px', color: '#f4d35e',
              fontFamily: "'Inter', sans-serif",
            }}>
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { to: '/',         label: 'Home' },
                { to: '/about',    label: 'About Us' },
                { to: '/projects', label: 'Our Projects' },
                { to: '/sponsors', label: 'Sponsors' },
                { to: '/register', label: 'Register' },
              ].map(({ to, label }, i) => (
                <Link
                  key={i}
                  to={to}
                  className="ft-link"
                  style={{
                    opacity: colVisible ? undefined : 0,
                    animation: colVisible ? `ftFadeUp 0.4s ${0.15 + i * 0.06}s ease forwards` : 'none',
                    animationFillMode: 'both',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Social ── */}
          <div style={{
            opacity: colVisible ? 1 : 0,
            animation: colVisible ? 'ftFadeUp 0.6s 0.2s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            <h4 style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '2.5px',
              marginBottom: '22px', color: '#f4d35e',
              fontFamily: "'Inter', sans-serif",
            }}>
              FOLLOW US
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { Icon: Instagram, link: 'https://instagram.com/tepuyrace',  label: 'Instagram' },
                { Icon: Facebook,  link: 'https://facebook.com/tepuyrace',   label: 'Facebook' },
                { Icon: Youtube,   link: 'https://youtube.com/@tepuyrace',   label: 'YouTube' },
                { Icon: Twitter,   link: 'https://twitter.com/tepuyrace',    label: 'Twitter' },
              ].map(({ Icon, link, label }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="ft-social"
                  style={{
                    width: '42px', height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(244,211,94,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(244,211,94,0.3)',
                    opacity: colVisible ? 1 : 0,
                    animation: colVisible ? `ftSocialPop 0.4s ${0.3 + i * 0.07}s ease forwards` : 'none',
                    animationFillMode: 'both',
                  }}
                >
                  <Icon size={17} color="#f4d35e" />
                </a>
              ))}
            </div>

            {/* newsletter hint */}
            <div style={{
              marginTop: '28px',
              padding: '14px 16px',
              borderRadius: '12px',
              background: 'rgba(244,211,94,0.06)',
              border: '1px solid rgba(244,211,94,0.15)',
              opacity: colVisible ? 1 : 0,
              animation: colVisible ? 'ftFadeUp 0.5s 0.55s ease forwards' : 'none',
              animationFillMode: 'both',
            }}>
              <div style={{
                fontSize: '11px', letterSpacing: '1.5px', color: '#f4d35e',
                fontWeight: '700', fontFamily: "'Inter', sans-serif", marginBottom: '6px',
              }}>
                STAY UPDATED
              </div>
              <div style={{
                fontSize: '13px', color: '#f5f1e8', opacity: 0.7,
                fontFamily: "'Inter', sans-serif", lineHeight: 1.5,
              }}>
                Síguenos para noticias y actualizaciones del evento.
              </div>
            </div>
          </div>

          {/* ── Location ── */}
          <div style={{
            opacity: colVisible ? 1 : 0,
            animation: colVisible ? 'ftFadeUp 0.6s 0.3s ease forwards' : 'none',
            animationFillMode: 'both',
          }}>
            <h4 style={{
              fontSize: '12px', fontWeight: '700', letterSpacing: '2.5px',
              marginBottom: '22px', color: '#f4d35e',
              fontFamily: "'Inter', sans-serif",
            }}>
              LOCATION
            </h4>
            <div style={{
              fontSize: '14px', lineHeight: '1.9', opacity: 0.8,
              fontFamily: "'Inter', sans-serif", color: '#f5f1e8',
            }}>
              <p style={{ margin: '0 0 6px 0' }}>Mount Tepuy National Park,</p>
              <p style={{ margin: '0 0 6px 0' }}>Gran Sabana, Venezuela</p>
              <p style={{ margin: '0 0 20px 0', color: '#f4d35e', fontWeight: '600', opacity: 1 }}>
                info@tepuyrace.com
              </p>
            </div>

            {/* map pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(200,90,62,0.12)',
              border: '1px solid rgba(200,90,62,0.3)',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '12px',
              color: '#c85a3e',
              fontWeight: '700',
              letterSpacing: '1px',
              fontFamily: "'Inter', sans-serif",
              opacity: colVisible ? 1 : 0,
              animation: colVisible ? 'ftFadeUp 0.5s 0.5s ease forwards' : 'none',
              animationFillMode: 'both',
            }}>
              <span style={{ fontSize: '14px' }}>📍</span>
              5°50′ N · 61°30′ W
            </div>
          </div>
        </div>

        {/* ── bottom bar ── */}
        <div
          ref={bottomRef}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'center',
            gap: isMobile ? '16px' : '0',
            textAlign: isMobile ? 'center' : 'left',
            opacity: bottomVisible ? 1 : 0,
            animation: bottomVisible ? 'ftFadeIn 0.7s 0s ease forwards' : 'none',
          }}
        >
          <div style={{
            fontSize: '11px', letterSpacing: '1.5px', opacity: 0.45,
            fontFamily: "'Inter', sans-serif",
          }}>
            © 2024 TEPUY RACE. ALL RIGHTS RESERVED
          </div>
          <div style={{ display: 'flex', gap: '28px' }}>
            <a href="#" className="ft-bottom-link">PRIVACY POLICY</a>
            <a href="#" className="ft-bottom-link">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
