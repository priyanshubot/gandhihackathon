import React, { useState, useEffect } from 'react';
import { soundEffects } from '../../utils/soundEffects';
import { SUPPLIED_PHOTOS } from '../../data/salluBhaiData';

export default function ImageViewerApp({
  initialIndex = 0,
  onOpenInPaint,
  onTitleChange
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const currentPhoto = SUPPLIED_PHOTOS[currentIndex] || SUPPLIED_PHOTOS[0];

  useEffect(() => {
    if (onTitleChange && currentPhoto) {
      onTitleChange(`${currentPhoto.filename} - Windows Picture Viewer`);
    }
  }, [currentIndex, currentPhoto, onTitleChange]);

  const handlePrev = () => {
    soundEffects.playClick();
    setRotation(0);
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : SUPPLIED_PHOTOS.length - 1));
  };

  const handleNext = () => {
    soundEffects.playClick();
    setRotation(0);
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev < SUPPLIED_PHOTOS.length - 1 ? prev + 1 : 0));
  };

  const handleZoomIn = () => {
    soundEffects.playClick();
    setZoomLevel((z) => Math.min(2.5, z + 0.25));
  };

  const handleZoomOut = () => {
    soundEffects.playClick();
    setZoomLevel((z) => Math.max(0.5, z - 0.25));
  };

  const handleResetZoom = () => {
    soundEffects.playClick();
    setZoomLevel(1);
    setRotation(0);
  };

  const handleRotate = () => {
    soundEffects.playClick();
    setRotation((r) => (r + 90) % 360);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item">File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
        <div className="win98-menu-item">Image</div>
        <div className="win98-menu-item">Help</div>
      </div>

      {/* Picture Viewer Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 6px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#c0c0c0'
        }}
      >
        <button
          type="button"
          className="win98-btn"
          onClick={handlePrev}
          title="Previous Image (Left Arrow)"
          style={{ minWidth: '70px', fontWeight: 'bold' }}
        >
          ◀ Previous
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={handleNext}
          title="Next Image (Right Arrow)"
          style={{ minWidth: '70px', fontWeight: 'bold' }}
        >
          Next ▶
        </button>

        <div style={{ width: '1px', height: '18px', backgroundColor: '#808080', margin: '0 4px' }} />

        <button
          type="button"
          className="win98-btn"
          onClick={handleZoomIn}
          title="Zoom In"
        >
          🔍+ Zoom In
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={handleZoomOut}
          title="Zoom Out"
        >
          🔍- Zoom Out
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={handleResetZoom}
          title="Actual Size (100%)"
        >
          100%
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={handleRotate}
          title="Rotate 90 degrees"
        >
          🔄 Rotate
        </button>

        <div style={{ flex: 1 }} />

        <button
          type="button"
          className="win98-btn"
          onClick={() => {
            soundEffects.playClick();
            onOpenInPaint && onOpenInPaint();
          }}
          title="Open in Paint"
        >
          🎨 Edit in Paint
        </button>
      </div>

      {/* Main Image Viewport */}
      <div
        className="win98-content"
        style={{
          flex: 1,
          backgroundColor: '#1e1e1e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
          padding: '12px',
          position: 'relative'
        }}
      >
        <div
          style={{
            transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
            transition: 'transform 0.15s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        >
          <img
            src={currentPhoto.path}
            alt={currentPhoto.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              boxShadow: '0 0 12px rgba(0,0,0,0.8)',
              border: '2px solid #555',
              imageRendering: 'auto'
            }}
          />
        </div>

        {/* Floating caption overlay at bottom of viewport */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '12px',
            right: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            color: '#ffffff',
            padding: '4px 8px',
            fontSize: '11px',
            fontFamily: 'var(--win-font)',
            borderRadius: '2px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none'
          }}
        >
          <span><strong>{currentPhoto.title}</strong> &bull; {currentPhoto.caption}</span>
          <span style={{ color: '#00ffaa', marginLeft: '12px', whiteSpace: 'nowrap' }}>
            {currentIndex + 1} of {SUPPLIED_PHOTOS.length}
          </span>
        </div>
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {currentPhoto.filename}
        </div>
        <div className="win98-status-section" style={{ width: '130px' }}>
          {currentPhoto.dimensions} &bull; {currentPhoto.size}
        </div>
        <div className="win98-status-section" style={{ width: '110px' }}>
          Zoom: {Math.round(zoomLevel * 100)}%
        </div>
      </div>
    </div>
  );
}
