import React, { useEffect, useRef } from 'react';
import { playErrorSound, playClickSound } from '@/sounds';
import { RetroIcons } from './RetroIcons';

// Emotional Error Popup - Section 2.A
export function EmotionalErrorPopup({ onClose, title = 'KERNEL32.DLL - Fatal Emotional Exception', message }) {
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!hasPlayedRef.current) {
      hasPlayedRef.current = true;
      playErrorSound();
    }
  }, []);

  const handleClose = () => {
    playClickSound();
    onClose && onClose();
  };

  const defaultMsg =
    'A fatal emotional exception 0E has occurred at 0028:C0011E36 in Sallu_Heart.vxd. ' +
    'Memories from 1999–2002 cannot be accessed without deep remorse and legal counsel.\n\n' +
    '* Press OK to acknowledge and return to Galaxy Apartments.\n' +
    '* Press CTRL+ALT+DEL to restart emotional subsystem.';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={handleClose}
    >
      <div
        className="win98-window"
        style={{
          width: '420px',
          maxWidth: '90vw',
          backgroundColor: '#c0c0c0',
          boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
          cursor: 'default'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="win98-titlebar">
          <div className="win98-titlebar-text">
            <span>{title}</span>
          </div>
          <div className="win98-window-controls">
            <button
              type="button"
              className="win98-control-btn close"
              onClick={handleClose}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dialog Body */}
        <div style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0, marginTop: '2px' }}>
            <RetroIcons.CriticalError size={34} />
          </div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--win-font)', lineHeight: '1.4', whiteSpace: 'pre-line', color: '#000000' }}>
            {message || defaultMsg}
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            padding: '10px 16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: '#c0c0c0'
          }}
        >
          <button
            type="button"
            className="win98-btn"
            style={{ minWidth: '76px', fontWeight: 'bold' }}
            onClick={handleClose}
            autoFocus
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// Corrupted File Popup - Section 2.A
export function CorruptedFilePopup({ onClose, fileName = 'HIT_AND_RUN_CASE_DIARY_SEPT_2002.DOC', details }) {
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!hasPlayedRef.current) {
      hasPlayedRef.current = true;
      playErrorSound();
    }
  }, []);

  const handleClose = () => {
    playClickSound();
    onClose && onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={handleClose}
    >
      <div
        className="win98-window"
        style={{
          width: '420px',
          maxWidth: '90vw',
          backgroundColor: '#c0c0c0',
          boxShadow: '3px 3px 10px rgba(0,0,0,0.5)',
          cursor: 'default'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="win98-titlebar">
          <div className="win98-titlebar-text">
            <span>Cannot Read File - Sector Corrupted</span>
          </div>
          <div className="win98-window-controls">
            <button
              type="button"
              className="win98-control-btn close"
              onClick={handleClose}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dialog Body */}
        <div style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0, marginTop: '2px' }}>
            <RetroIcons.CriticalError size={34} />
          </div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--win-font)', lineHeight: '1.4', color: '#000000' }}>
            <div>
              An error occurred while reading <strong>{fileName}</strong>.
            </div>
            <div style={{ marginTop: '8px', color: '#333' }}>
              {details ||
                'The sector is corrupted or has been impounded by legal counsel (Bandra Metropolitan Magistrate Court). CRC verification failed: 0x80004005.'}
            </div>
            <div style={{ marginTop: '8px', fontSize: '10px', color: '#666' }}>
              Ensure the 3.5" Floppy Disk is inserted in Drive A: and write-protect tab is enabled.
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            padding: '10px 16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: '#c0c0c0'
          }}
        >
          <button
            type="button"
            className="win98-btn"
            style={{ minWidth: '76px', fontWeight: 'bold' }}
            onClick={handleClose}
            autoFocus
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

// Application Error Popup for Unsupported Apps
export function ApplicationErrorPopup({ appName, errorText, onClose }) {
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!hasPlayedRef.current) {
      hasPlayedRef.current = true;
      playErrorSound();
    }
  }, []);

  const handleClose = () => {
    playClickSound();
    onClose && onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={handleClose}
    >
      <div
        className="win98-window"
        style={{
          width: '430px',
          maxWidth: '92vw',
          backgroundColor: '#c0c0c0',
          boxShadow: '3px 3px 12px rgba(0,0,0,0.5)',
          cursor: 'default'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="win98-titlebar">
          <div className="win98-titlebar-text">
            <span>{appName}.exe - Application Error</span>
          </div>
          <div className="win98-window-controls">
            <button
              type="button"
              className="win98-control-btn close"
              onClick={handleClose}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dialog Body */}
        <div style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0, marginTop: '2px' }}>
            <RetroIcons.CriticalError size={34} />
          </div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--win-font)', lineHeight: '1.4', color: '#000000' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              Cannot run {appName}
            </div>
            <div>{errorText}</div>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            padding: '10px 16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: '#c0c0c0'
          }}
        >
          <button
            type="button"
            className="win98-btn"
            style={{ minWidth: '76px', fontWeight: 'bold' }}
            onClick={handleClose}
            autoFocus
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
