import React from 'react';
import { soundEffects } from '../utils/soundEffects';

export default function ShutDownScreen({ onPowerOn }) {
  const handlePowerOn = () => {
    soundEffects.playStartup();
    onPowerOn();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999999,
        userSelect: 'none'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '20px' }}>
        <h1
          style={{
            color: '#ff8c00',
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            fontSize: '34px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            margin: '0 0 20px 0',
            textShadow: '0 0 6px #ff4500'
          }}
        >
          It's now safe to turn off your computer.
        </h1>

        <p style={{ color: '#666666', fontFamily: 'monospace', fontSize: '13px', marginBottom: '30px' }}>
          THE ABANDONED COMPUTER // OMEGA TERMINAL 98-B
        </p>

        <button
          type="button"
          onClick={handlePowerOn}
          style={{
            backgroundColor: '#222222',
            color: '#00ff66',
            border: '2px solid #00aa44',
            padding: '8px 20px',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(0, 255, 102, 0.4)'
          }}
        >
          [ POWER ON COMPUTER ]
        </button>
      </div>
    </div>
  );
}
