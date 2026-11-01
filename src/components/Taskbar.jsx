import React, { useState, useEffect } from 'react';
import { RetroIcons } from './RetroIcons';
import { playClickSound, soundEffects } from '@/sounds';

export default function Taskbar({
  windows,
  activeWindowId,
  isStartMenuOpen,
  onToggleStartMenu,
  onTaskClick,
  crtScanlines,
  onToggleCrt
}) {
  const [timeStr, setTimeStr] = useState('');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 becomes 12
      const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
      setTimeStr(`${hours}:${minutesStr} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundEffects.muted = nextMute;
    if (!nextMute) playClickSound();
  };

  return (
    <div className="win98-taskbar">
      {/* Start Button */}
      <button
        type="button"
        className={`win98-btn win98-start-btn ${isStartMenuOpen ? 'pressed' : ''}`}
        onClick={onToggleStartMenu}
      >
        <RetroIcons.WindowsLogo size={16} />
        <span>Start</span>
      </button>

      <div className="win98-taskbar-divider" />

      {/* Taskbar open windows */}
      <div className="win98-taskbar-tasks">
        {windows.map((win) => {
          const isActive = win.id === activeWindowId && !win.isMinimized;
          const Icon = win.icon;
          return (
            <button
              key={win.id}
              type="button"
              className={`win98-btn win98-task-btn ${isActive ? 'active' : ''}`}
              onClick={() => onTaskClick(win.id)}
              title={win.title}
            >
              {Icon && <Icon size={14} />}
              <span>{win.title}</span>
            </button>
          );
        })}
      </div>

      <div className="win98-taskbar-divider" />

      {/* System Tray */}
      <div className="win98-systray">
        {/* CRT Scanline Toggle */}
        <span
          onClick={() => {
            soundEffects.playClick();
            onToggleCrt(!crtScanlines);
          }}
          title={crtScanlines ? 'Disable CRT Scanlines' : 'Enable CRT Scanlines'}
          style={{ cursor: 'pointer', fontSize: '11px', display: 'flex', alignItems: 'center' }}
        >
          📺
        </span>

        {/* Speaker Icon (Sound Mute/Unmute) */}
        <span
          onClick={handleToggleSound}
          title={isMuted ? 'Unmute PC Speaker' : 'Mute PC Speaker'}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          {isMuted ? <RetroIcons.SpeakerMuted size={14} /> : <RetroIcons.Speaker size={14} />}
        </span>

        {/* Digital Clock */}
        <span style={{ fontSize: '11px', whiteSpace: 'nowrap' }} title={new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}
