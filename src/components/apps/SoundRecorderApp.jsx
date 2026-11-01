import React, { useState, useEffect } from 'react';
import { playClickSound, soundEffects } from '@/sounds';

export default function SoundRecorderApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const duration = 12.5;

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setPosition((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return Number((prev + 0.1).toFixed(2));
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePlay = () => {
    playClickSound();
    soundEffects.playStartup();
    setIsPlaying(true);
  };

  const handleStop = () => {
    playClickSound();
    setIsPlaying(false);
  };

  const handleRewind = () => {
    playClickSound();
    setPosition(0);
    setIsPlaying(false);
  };

  const handleFastForward = () => {
    playClickSound();
    setPosition(duration);
    setIsPlaying(false);
  };

  return (
    <div style={{ backgroundColor: '#c0c0c0', padding: '8px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', userSelect: 'none' }}>
      {/* Menu Bar */}
      <div className="win98-menubar" style={{ margin: '-8px -8px 0 -8px' }}>
        <div className="win98-menu-item" onClick={playClickSound}>File</div>
        <div className="win98-menu-item" onClick={playClickSound}>Edit</div>
        <div className="win98-menu-item" onClick={playClickSound}>Effects</div>
        <div className="win98-menu-item" onClick={playClickSound}>Help</div>
      </div>

      {/* Waveform Visualizer Display */}
      <div
        className="win98-inset"
        style={{
          backgroundColor: '#000000',
          height: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Horizontal center line */}
        <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: '#004400' }} />

        {/* Animated Green Oscillogram */}
        <svg width="100%" height="80" style={{ position: 'absolute' }}>
          <path
            d={
              isPlaying
                ? `M 0 40 Q 30 ${20 + Math.sin(position * 5) * 20}, 60 40 T 120 40 T 180 ${10 + Math.cos(position * 8) * 25} T 240 40 T 300 40`
                : 'M 0 40 L 320 40'
            }
            fill="none"
            stroke="#00ff00"
            strokeWidth="1.5"
          />
        </svg>

        <div style={{ position: 'absolute', top: '4px', left: '6px', fontSize: '10px', color: '#00aa00', fontFamily: 'monospace' }}>
          {isPlaying ? 'PLAYING: BOLLYWOOD_SYNTH_TAPE.WAV' : 'READY - 22.050 kHz, 16 Bit, Mono'}
        </div>
      </div>

      {/* Position display & slider */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--win-font)' }}>
        <span>Position: {position.toFixed(2)} sec.</span>
        <span>Length: {duration.toFixed(2)} sec.</span>
      </div>

      <input
        type="range"
        min="0"
        max={duration}
        step="0.1"
        value={position}
        onChange={(e) => setPosition(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: '#000080' }}
      />

      {/* Transport Controls */}
      <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '4px' }}>
        <button
          type="button"
          className="win98-btn"
          style={{ width: '44px', fontWeight: 'bold' }}
          onClick={handleRewind}
          title="Seek to Start"
        >
          |◀◀
        </button>
        <button
          type="button"
          className="win98-btn"
          style={{ width: '44px', fontWeight: 'bold' }}
          onClick={handleFastForward}
          title="Seek to End"
        >
          ▶▶|
        </button>
        <button
          type="button"
          className="win98-btn"
          style={{ width: '56px', fontWeight: 'bold', color: '#008000' }}
          onClick={handlePlay}
          title="Play"
        >
          ▶ Play
        </button>
        <button
          type="button"
          className="win98-btn"
          style={{ width: '56px', fontWeight: 'bold' }}
          onClick={handleStop}
          title="Stop"
        >
          ■ Stop
        </button>
        <button
          type="button"
          className="win98-btn"
          style={{ width: '60px', fontWeight: 'bold', color: '#ff0000' }}
          onClick={() => {
            playClickSound();
            soundEffects.playClick();
          }}
          title="Record"
        >
          ● Rec
        </button>
      </div>
    </div>
  );
}
