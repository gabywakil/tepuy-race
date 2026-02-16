import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 12,
    minutes: 45,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      gap: '30px',
      justifyContent: 'center',
      marginTop: '80px',
      padding: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(162, 67, 45, 0.1)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)'
    }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '56px',
            fontWeight: '900',
            color: '#a2432d',
            lineHeight: '1',
            marginBottom: '8px'
          }}>
            {String(value).padStart(2, '0')}
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '2px',
            color: '#0d4037',
            opacity: 0.7,
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif"
          }}>
            {unit}
          </div>
        </div>
      ))}
      <div style={{
        borderLeft: '2px solid rgba(162, 67, 45, 0.2)',
        margin: '0 20px'
      }}></div>
      <div style={{ 
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#0d4037',
          opacity: 0.7,
          marginBottom: '5px',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '1px'
        }}>
          UNTIL RACE DAY
        </div>
        <div style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#a2432d',
          fontFamily: "'Inter', sans-serif"
        }}>
          October 15, 2024
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;