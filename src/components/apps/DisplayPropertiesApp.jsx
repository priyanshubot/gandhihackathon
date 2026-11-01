import React, { useState } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const COLOR_SCHEMES = [
  { name: 'Teal (Default Windows 98)', value: '#008080' },
  { name: 'Hum Dil De Chuke Sanam Navy', value: '#000080' },
  { name: 'Tere Naam Radhe Black', value: '#111111' },
  { name: 'Panvel Farmhouse Green', value: '#1a3311' },
  { name: 'O O Jaane Jaana Denim Blue', value: '#104e8b' },
  { name: 'Bandra Bandstand Sunset Maroon', value: '#701020' },
  { name: 'Windows Standard Gray', value: '#808080' }
];

export default function DisplayPropertiesApp({
  currentBgColor,
  onBgColorChange,
  crtScanlines,
  onToggleCrt,
  onClose
}) {
  const [activeTab, setActiveTab] = useState('background');
  const [tempColor, setTempColor] = useState(currentBgColor || '#008080');
  const [tempCrt, setTempCrt] = useState(crtScanlines);

  const handleApply = () => {
    soundEffects.playClick();
    onBgColorChange(tempColor);
    onToggleCrt(tempCrt);
  };

  const handleOk = () => {
    soundEffects.playClick();
    onBgColorChange(tempColor);
    onToggleCrt(tempCrt);
    onClose();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0', padding: '6px' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '2px', borderBottom: '1px solid #808080', paddingBottom: '0' }}>
        {['background', 'screen saver', 'appearance', 'settings'].map((tab) => (
          <div
            key={tab}
            onClick={() => {
              soundEffects.playClick();
              setActiveTab(tab);
            }}
            style={{
              padding: '3px 8px',
              textTransform: 'capitalize',
              backgroundColor: activeTab === tab ? '#c0c0c0' : '#d4d0c8',
              borderTop: '1px solid #ffffff',
              borderLeft: '1px solid #ffffff',
              borderRight: '1px solid #000000',
              borderBottom: activeTab === tab ? '1px solid #c0c0c0' : 'none',
              marginBottom: activeTab === tab ? '-1px' : '0',
              cursor: 'default',
              fontWeight: activeTab === tab ? 'bold' : 'normal'
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Body */}
      <div
        className="win98-outset"
        style={{
          flex: 1,
          backgroundColor: '#c0c0c0',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        {/* CRT Monitor Preview Screen */}
        <div
          style={{
            width: '160px',
            height: '110px',
            backgroundColor: '#dcd6c8',
            border: '2px solid #808080',
            borderRightColor: '#ffffff',
            borderBottomColor: '#ffffff',
            boxShadow: 'inset 1px 1px 0 #000',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Monitor Screen Frame */}
          <div
            style={{
              width: '130px',
              height: '80px',
              backgroundColor: '#333333',
              borderRadius: '2px',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Screen Inner */}
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: tempColor,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Mini Windows preview */}
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  width: '60px',
                  height: '35px',
                  backgroundColor: '#c0c0c0',
                  border: '1px solid #000'
                }}
              >
                <div style={{ height: '6px', background: 'linear-gradient(90deg, #000080, #1084d0)' }} />
              </div>

              {/* Mini Taskbar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '8px',
                  backgroundColor: '#c0c0c0',
                  borderTop: '1px solid #fff'
                }}
              />
            </div>
          </div>
        </div>

        {/* Wallpaper / Color Selector */}
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px' }}>
            Desktop Wallpaper / Solid Color:
          </label>
          <select
            value={tempColor}
            onChange={(e) => {
              soundEffects.playClick();
              setTempColor(e.target.value);
            }}
            className="win98-inset"
            style={{
              width: '100%',
              padding: '3px',
              fontFamily: 'var(--win-font)',
              fontSize: '11px',
              backgroundColor: '#ffffff'
            }}
          >
            {COLOR_SCHEMES.map((scheme) => (
              <option key={scheme.value} value={scheme.value}>
                {scheme.name}
              </option>
            ))}
          </select>
        </div>

        {/* CRT Scanline Toggle */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <input
            type="checkbox"
            id="crt-toggle"
            checked={tempCrt}
            onChange={(e) => {
              soundEffects.playClick();
              setTempCrt(e.target.checked);
            }}
          />
          <label htmlFor="crt-toggle" style={{ fontSize: '11px', cursor: 'pointer' }}>
            Enable CRT Monitor Scanline Simulation
          </label>
        </div>
      </div>

      {/* Dialog Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '8px' }}>
        <button type="button" className="win98-btn" style={{ minWidth: '60px' }} onClick={handleOk}>
          OK
        </button>
        <button type="button" className="win98-btn" style={{ minWidth: '60px' }} onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="win98-btn" style={{ minWidth: '60px' }} onClick={handleApply}>
          Apply
        </button>
      </div>
    </div>
  );
}
