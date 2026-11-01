import React from 'react';
import { RetroIcons } from '../RetroIcons';
import { playClickSound } from '@/sounds';

export default function AboutWindowsApp({ onClose }) {
  const handleOk = () => {
    playClickSound();
    onClose && onClose();
  };

  return (
    <div style={{ backgroundColor: '#c0c0c0', padding: '16px', height: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Banner / Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #808080', paddingBottom: '12px' }}>
        <RetroIcons.WindowsLogo size={48} />
        <div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'serif', letterSpacing: '0.5px' }}>
            Microsoft® Windows 98
          </div>
          <div style={{ fontSize: '11px', color: '#333' }}>
            Second Edition (4.10.2222 A)
          </div>
          <div style={{ fontSize: '10px', color: '#555' }}>
            Copyright © 1981–1998 Microsoft Corp.
          </div>
        </div>
      </div>

      {/* Registration Details */}
      <div style={{ fontSize: '11px', lineHeight: '1.4' }}>
        <div>This product is licensed to:</div>
        <div style={{ marginLeft: '12px', marginTop: '4px', fontWeight: 'bold' }}>
          Salman Khan
        </div>
        <div style={{ marginLeft: '12px', color: '#444' }}>
          Galaxy Apartments, Bandra (West), Mumbai
        </div>
        <div style={{ marginLeft: '12px', color: '#666', fontSize: '10px' }}>
          Product ID: 50293-OEM-0034291-89211
        </div>
      </div>

      {/* System Resources */}
      <div className="win98-inset" style={{ backgroundColor: '#ffffff', padding: '8px', fontSize: '11px' }}>
        <div>Physical memory available to Windows: <strong>130,556 KB</strong></div>
        <div>System resources: <strong>84% free</strong></div>
        <div>Audio Synthesizer: <strong>Yamaha OPL3 / Sound Blaster 16 Compatible</strong></div>
      </div>

      {/* Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
        <button
          type="button"
          className="win98-btn"
          style={{ minWidth: '76px', fontWeight: 'bold' }}
          onClick={handleOk}
          autoFocus
        >
          OK
        </button>
      </div>
    </div>
  );
}
