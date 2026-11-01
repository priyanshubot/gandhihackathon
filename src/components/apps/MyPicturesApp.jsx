import React, { useState } from 'react';
import { RetroIcons } from '../RetroIcons';
import { playClickSound, playOpenSound } from '@/sounds';
import { SUPPLIED_PHOTOS } from '../../data/salluBhaiData';

export default function MyPicturesApp({ onOpenViewer, onOpenInPaint }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const selectedPhoto = SUPPLIED_PHOTOS[selectedPhotoIndex] || SUPPLIED_PHOTOS[0];

  const handleThumbnailClick = (index) => {
    playClickSound();
    setSelectedPhotoIndex(index);
  };

  const handleThumbnailDoubleClick = (index) => {
    playOpenSound();
    setSelectedPhotoIndex(index);
    if (onOpenViewer) {
      onOpenViewer(index);
    }
  };

  const goPrev = () => {
    playClickSound();
    setSelectedPhotoIndex((s) => (s === null ? 0 : (s - 1 + SUPPLIED_PHOTOS.length) % SUPPLIED_PHOTOS.length));
  };

  const goNext = () => {
    playClickSound();
    setSelectedPhotoIndex((s) => (s === null ? 0 : (s + 1) % SUPPLIED_PHOTOS.length));
  };

  const handlePrev = goPrev;
  const handleNext = goNext;

  const handleOpenViewer = () => {
    playOpenSound();
    onOpenViewer && onOpenViewer(selectedPhotoIndex);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item" onClick={playClickSound}>File</div>
        <div className="win98-menu-item" onClick={playClickSound}>Edit</div>
        <div className="win98-menu-item" onClick={playClickSound}>View</div>
        <div className="win98-menu-item" onClick={playClickSound}>Favorites</div>
        <div className="win98-menu-item" onClick={playClickSound}>Help</div>
      </div>

      {/* Explorer Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 4px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#c0c0c0'
        }}
      >
        <button
          type="button"
          className="win98-btn"
          onClick={handlePrev}
          title="Previous Photo"
        >
          ◀ Prev
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={handleNext}
          title="Next Photo"
        >
          Next ▶
        </button>

        <div style={{ width: '1px', height: '18px', backgroundColor: '#808080', margin: '0 4px' }} />

        <button
          type="button"
          className="win98-btn"
          onClick={handleOpenViewer}
          style={{ fontWeight: 'bold' }}
          title="Open in Windows Picture Viewer"
        >
          🖼️ Open in Viewer
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={() => {
            playClickSound();
            onOpenInPaint && onOpenInPaint();
          }}
          title="Open in MS Paint"
        >
          🎨 Edit in Paint
        </button>

        <div style={{ flex: 1 }} />
        <span style={{ fontSize: '10px', color: '#555', paddingRight: '4px' }}>
          My Pictures - {SUPPLIED_PHOTOS.length} photographs
        </span>
      </div>

      {/* Address Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '2px 6px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#c0c0c0'
        }}
      >
        <span style={{ fontSize: '11px' }}>Address</span>
        <div
          className="win98-inset"
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            padding: '2px 4px',
            fontSize: '11px',
            fontFamily: 'var(--win-font)'
          }}
        >
          C:\My Documents\My Pictures
        </div>
      </div>

      {/* Main Workspace: Left Grid of Thumbnails + Right Preview/Details Pane */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Thumbnails Grid (Direct display of all supplied photos, no subfolders) */}
        <div
          className="win98-content"
          style={{
            flex: 1,
            padding: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '16px',
            alignContent: 'flex-start',
            backgroundColor: '#ffffff',
            overflow: 'auto'
          }}
        >
          {SUPPLIED_PHOTOS.map((photo, index) => {
            const isSelected = selectedPhotoIndex === index;
            return (
              <div
                key={photo.id}
                onClick={() => handleThumbnailClick(index)}
                onDoubleClick={() => handleThumbnailDoubleClick(index)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '6px 4px',
                  backgroundColor: isSelected ? '#e0f0ff' : 'transparent',
                  border: isSelected ? '1px dotted #000080' : '1px solid transparent',
                  borderRadius: '2px'
                }}
              >
                {/* 3D Beveled Thumbnail Frame */}
                <div
                  className="win98-outset"
                  style={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: '#ffffff',
                    padding: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px',
                    boxShadow: isSelected ? '0 0 4px #000080' : 'none'
                  }}
                >
                  <img
                    src={photo.path}
                    alt={photo.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Filename underneath */}
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--win-font)',
                    padding: '1px 3px',
                    backgroundColor: isSelected ? 'var(--win-blue-start)' : 'transparent',
                    color: isSelected ? '#ffffff' : '#000000',
                    outline: isSelected ? '1px dotted #ffffff' : 'none',
                    wordBreak: 'break-all',
                    lineHeight: '1.2',
                    maxWidth: '120px'
                  }}
                  title={photo.filename}
                >
                  {photo.filename}
                </span>

                <span style={{ fontSize: '9px', color: '#666', marginTop: '2px' }}>
                  {photo.size}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Details / Preview Pane */}
        <div
          className="win98-inset"
          style={{
            width: '230px',
            backgroundColor: '#c0c0c0',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            overflowY: 'auto'
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '11px', borderBottom: '1px solid #808080', paddingBottom: '3px' }}>
            Picture Preview
          </div>

          {selectedPhoto && (
            <>
              {/* Preview image */}
              <div
                className="win98-inset"
                style={{
                  width: '100%',
                  height: '140px',
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px',
                  cursor: 'pointer'
                }}
                onDoubleClick={handleOpenViewer}
                title="Double-click to open in Picture Viewer"
              >
                <img
                  src={selectedPhoto.path}
                  alt={selectedPhoto.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Photo Information */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px' }}>
                <div>
                  <strong>Filename:</strong>
                  <div style={{ wordBreak: 'break-all', fontSize: '10px', color: '#000080' }}>
                    {selectedPhoto.filename}
                  </div>
                </div>

                <div>
                  <strong>Title:</strong> {selectedPhoto.title}
                </div>

                <div>
                  <strong>Dimensions:</strong> {selectedPhoto.dimensions}
                </div>

                <div>
                  <strong>Size:</strong> {selectedPhoto.size}
                </div>

                <div>
                  <strong>Film:</strong> {selectedPhoto.film} ({selectedPhoto.year})
                </div>

                <div style={{ marginTop: '4px', borderTop: '1px dashed #808080', paddingTop: '4px' }}>
                  <div style={{ fontSize: '10px', color: '#333', lineHeight: '1.3' }}>
                    {selectedPhoto.caption}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="win98-btn"
                style={{ marginTop: 'auto', fontWeight: 'bold' }}
                onClick={handleOpenViewer}
              >
                🖼️ View Full Image
              </button>
            </>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {selectedPhoto ? selectedPhoto.filename : `${SUPPLIED_PHOTOS.length} object(s)`}
        </div>
        <div className="win98-status-section" style={{ width: '130px' }}>
          {selectedPhoto ? `${selectedPhoto.dimensions} pixels` : 'JPEG Image'}
        </div>
        <div className="win98-status-section" style={{ width: '90px' }}>
          {selectedPhoto ? selectedPhoto.size : ''}
        </div>
      </div>
    </div>
  );
}
