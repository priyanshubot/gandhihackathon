import React, { useEffect, useRef } from 'react';
import { soundEffects } from '../utils/soundEffects';

export default function ContextMenu({
  x,
  y,
  onClose,
  onRefresh,
  onOpenProperties
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handlePointerDownOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    // Delay listener to next tick so current event doesn't trigger it
    const timer = setTimeout(() => {
      window.addEventListener('pointerdown', handlePointerDownOutside);
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pointerdown', handlePointerDownOutside);
    };
  }, [onClose]);

  // Clamp within viewport
  const adjustedX = Math.min(x, window.innerWidth - 160);
  const adjustedY = Math.min(y, window.innerHeight - 200);

  return (
    <div
      ref={menuRef}
      className="win98-context-menu"
      style={{
        left: `${adjustedX}px`,
        top: `${adjustedY}px`
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="win98-context-item"
        onClick={() => {
          soundEffects.playClick();
          onClose();
        }}
      >
        <span>Arrange Icons</span>
        <span style={{ fontSize: '9px' }}>▶</span>
      </div>
      <div
        className="win98-context-item"
        onClick={() => {
          soundEffects.playClick();
          onClose();
        }}
      >
        <span>Line up Icons</span>
      </div>

      <div className="win98-start-separator" />

      <div
        className="win98-context-item"
        onClick={() => {
          soundEffects.playClick();
          onRefresh();
          onClose();
        }}
      >
        <span>Refresh</span>
      </div>

      <div className="win98-start-separator" />

      <div className="win98-context-item disabled">
        <span>Paste</span>
      </div>
      <div className="win98-context-item disabled">
        <span>Paste Shortcut</span>
      </div>

      <div className="win98-start-separator" />

      <div
        className="win98-context-item"
        onClick={() => {
          soundEffects.playClick();
          onClose();
        }}
      >
        <span>New</span>
        <span style={{ fontSize: '9px' }}>▶</span>
      </div>

      <div className="win98-start-separator" />

      <div
        className="win98-context-item"
        onClick={() => {
          soundEffects.playClick();
          onOpenProperties();
          onClose();
        }}
        style={{ fontWeight: 'bold' }}
      >
        <span>Properties</span>
      </div>
    </div>
  );
}
