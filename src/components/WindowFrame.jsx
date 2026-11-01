import React, { useRef, useState, useEffect } from 'react';

export default function WindowFrame({
  window: win,
  isActive,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onMove,
  children
}) {
  const { id, title, icon: Icon, x, y, width, height, isMaximized } = win;
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    onFocus(id);
    // Don't drag if clicking buttons
    if (e.target.closest('.win98-titlebar-btn') || isMaximized) return;

    isDraggingRef.current = true;
    dragOffsetRef.current = {
      x: e.clientX - x,
      y: e.clientY - y
    };

    const handlePointerMove = (moveEvent) => {
      if (!isDraggingRef.current) return;
      let newX = moveEvent.clientX - dragOffsetRef.current.x;
      let newY = moveEvent.clientY - dragOffsetRef.current.y;

      // Keep within bounds
      newX = Math.max(-width + 50, Math.min(window.innerWidth - 50, newX));
      newY = Math.max(0, Math.min(window.innerHeight - 50, newY));

      onMove(id, newX, newY);
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handleTitleDoubleClick = () => {
    onMaximize(id);
  };

  const windowStyle = isMaximized
    ? { zIndex: win.zIndex }
    : {
        top: `${y}px`,
        left: `${x}px`,
        width: `${width}px`,
        height: `${height}px`,
        zIndex: win.zIndex
      };

  return (
    <div
      className={`win98-window ${isActive ? 'active' : ''} ${isMaximized ? 'maximized' : ''}`}
      style={windowStyle}
      onMouseDown={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div
        className="win98-titlebar"
        onPointerDown={handlePointerDown}
        onDoubleClick={handleTitleDoubleClick}
      >
        <div className="win98-titlebar-title">
          {Icon && <Icon size={14} />}
          <span>{title}</span>
        </div>
        <div className="win98-titlebar-controls">
          <button
            type="button"
            className="win98-titlebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize(id);
            }}
            title="Minimize"
          >
            _
          </button>
          <button
            type="button"
            className="win98-titlebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              onMaximize(id);
            }}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? '❐' : '□'}
          </button>
          <button
            type="button"
            className="win98-titlebar-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Children App Body */}
      {children}
    </div>
  );
}
