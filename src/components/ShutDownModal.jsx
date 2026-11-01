import React, { useState } from 'react';
import { RetroIcons } from './RetroIcons';
import { soundEffects } from '../utils/soundEffects';

export default function ShutDownModal({ onCancel, onShutDown, onRestart }) {
  const [action, setAction] = useState('shutdown');

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEffects.playClick();
    if (action === 'shutdown') {
      onShutDown();
    } else {
      onRestart();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999
      }}
      onClick={onCancel}
    >
      <div
        className="win98-window"
        style={{
          width: '320px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="win98-titlebar">
          <div className="win98-titlebar-title">
            <span>Shut Down Windows</span>
          </div>
          <div className="win98-titlebar-controls">
            <button type="button" className="win98-titlebar-btn" onClick={onCancel}>
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '12px 14px', backgroundColor: '#c0c0c0' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
            <RetroIcons.ShutDown size={32} />
            <div>
              <p style={{ margin: '0 0 10px 0', fontSize: '11px', fontWeight: 'bold' }}>
                What do you want the computer to do?
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="shutdown-action"
                    checked={action === 'shutdown'}
                    onChange={() => setAction('shutdown')}
                  />
                  Shut down
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="shutdown-action"
                    checked={action === 'restart'}
                    onChange={() => setAction('restart')}
                  />
                  Restart
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="shutdown-action"
                    checked={action === 'msdos'}
                    onChange={() => setAction('restart')}
                  />
                  Restart in MS-DOS mode
                </label>
              </form>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '16px' }}>
            <button
              type="button"
              className="win98-btn"
              style={{ minWidth: '65px' }}
              onClick={handleSubmit}
            >
              OK
            </button>
            <button
              type="button"
              className="win98-btn"
              style={{ minWidth: '65px' }}
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="win98-btn"
              style={{ minWidth: '65px' }}
              onClick={() => {
                soundEffects.playError();
                alert('Windows 98 Help is not available in shutdown mode.');
              }}
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
