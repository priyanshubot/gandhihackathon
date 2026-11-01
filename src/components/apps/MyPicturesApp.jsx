import React, { useState } from 'react';
import { RetroIcons } from '../RetroIcons';
import { soundEffects } from '../../utils/soundEffects';
import { SALLU_PICTURES } from '../../data/salluBhaiData';

const FOLDERS = [
  'Salman_1995',
  'Salman_1996',
  'Salman_1997',
  'Salman_1998',
  'Salman_1999',
  'Salman_2000',
  'Salman_2001',
  'Salman_2002',
  'Salman_2003',
  'Aishwarya_Rai',
  'Somy_Ali',
  'Sangeeta_Bijlani',
  'Bollywood_Events'
];

export default function MyPicturesApp({ onOpenInPaint }) {
  const [selectedFolder, setSelectedFolder] = useState(null); // null means root list of folders
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleFolderClick = (folder) => {
    soundEffects.playClick();
    setSelectedFolder(folder);
    setSelectedPhoto(null);
  };

  const handleBack = () => {
    soundEffects.playClick();
    setSelectedFolder(null);
    setSelectedPhoto(null);
  };

  const filteredPhotos = selectedFolder
    ? SALLU_PICTURES.filter((p) => p.folder === selectedFolder)
    : [];

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

      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 4px',
          borderBottom: '1px solid #808080'
        }}
      >
        <button
          type="button"
          className="win98-btn"
          disabled={!selectedFolder}
          onClick={handleBack}
          style={{ opacity: !selectedFolder ? 0.5 : 1 }}
        >
          ⬆ Up
        </button>
        <button
          type="button"
          className="win98-btn"
          disabled={!selectedPhoto}
          onClick={() => {
            soundEffects.playClick();
            onOpenInPaint && onOpenInPaint();
          }}
          style={{ opacity: !selectedPhoto ? 0.5 : 1 }}
        >
          🎨 Open in Paint
        </button>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: '10px', color: '#555', paddingRight: '4px' }}>
          Period Photo Archive (1995–2003)
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
          {selectedFolder ? `C:\\My Pictures\\${selectedFolder}` : 'C:\\My Pictures'}
        </div>
      </div>

      {/* Main Content Area: Left Explorer + Right Photo Details */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Side: Folder or Photo Grid */}
        <div
          className="win98-content"
          style={{
            flex: 1,
            padding: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '14px',
            alignContent: 'flex-start',
            backgroundColor: '#ffffff',
            overflow: 'auto'
          }}
        >
          {!selectedFolder ? (
            // Folder List (The 13 requested folders)
            FOLDERS.map((folder) => {
              const count = SALLU_PICTURES.filter((p) => p.folder === folder).length;
              return (
                <div
                  key={folder}
                  onDoubleClick={() => handleFolderClick(folder)}
                  onClick={() => soundEffects.playClick()}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'default',
                    padding: '4px',
                    maxWidth: '100px'
                  }}
                >
                  <div style={{ marginBottom: '4px' }}>
                    <RetroIcons.MyPictures size={32} />
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--win-font)',
                      padding: '1px 3px',
                      wordBreak: 'break-word',
                      lineHeight: '1.2'
                    }}
                  >
                    {folder}
                  </span>
                  <span style={{ fontSize: '9px', color: '#888' }}>
                    {count} image{count !== 1 ? 's' : ''}
                  </span>
                </div>
              );
            })
          ) : filteredPhotos.length === 0 ? (
            <div style={{ color: '#888', padding: '12px', fontSize: '11px' }}>
              No images in this album.
            </div>
          ) : (
            // Photos inside selected folder
            filteredPhotos.map((photo) => {
              const isSelected = selectedPhoto?.id === photo.id;
              return (
                <div
                  key={photo.id}
                  onClick={() => {
                    soundEffects.playClick();
                    setSelectedPhoto(photo);
                  }}
                  onDoubleClick={() => {
                    soundEffects.playClick();
                    onOpenInPaint && onOpenInPaint();
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'default',
                    padding: '4px',
                    maxWidth: '100px',
                    backgroundColor: isSelected ? '#e0f0ff' : 'transparent',
                    border: isSelected ? '1px dotted #000080' : '1px solid transparent'
                  }}
                >
                  {/* Photo Thumbnail with retro border */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: photo.color,
                      border: '2px solid #333',
                      boxShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      marginBottom: '4px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>📸</span>
                    <span style={{ fontSize: '9px', fontWeight: 'bold' }}>{photo.year}</span>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        fontSize: '8px',
                        padding: '1px',
                        textAlign: 'center'
                      }}
                    >
                      .BMP
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--win-font)',
                      padding: '1px 2px',
                      backgroundColor: isSelected ? 'var(--win-blue-start)' : 'transparent',
                      color: isSelected ? '#ffffff' : '#000000',
                      wordBreak: 'break-word',
                      lineHeight: '1.2'
                    }}
                  >
                    {photo.title}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Photo Metadata & Attribution Details Panel */}
        <div
          className="win98-inset"
          style={{
            width: '210px',
            backgroundColor: '#c0c0c0',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            overflowY: 'auto'
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '11px', borderBottom: '1px solid #808080', paddingBottom: '3px' }}>
            Image Information
          </div>

          {selectedPhoto ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
              <div>
                <strong>Title:</strong>
                <div>{selectedPhoto.title}</div>
              </div>
              <div>
                <strong>Year:</strong> {selectedPhoto.year}
              </div>
              <div>
                <strong>Folder:</strong> {selectedPhoto.folder}
              </div>
              <div>
                <strong>Context:</strong>
                <div style={{ fontSize: '10px', color: '#222', marginTop: '2px', lineHeight: '1.3' }}>
                  {selectedPhoto.caption}
                </div>
              </div>
              <div style={{ marginTop: '4px', borderTop: '1px dashed #808080', paddingTop: '4px' }}>
                <strong style={{ fontSize: '10px', color: '#000080' }}>Source & Attribution:</strong>
                <div style={{ fontSize: '9px', color: '#444', marginTop: '2px' }}>
                  {selectedPhoto.source}
                </div>
              </div>
              <button
                type="button"
                className="win98-btn"
                style={{ marginTop: '8px' }}
                onClick={() => {
                  soundEffects.playClick();
                  onOpenInPaint && onOpenInPaint();
                }}
              >
                Open in MS Paint
              </button>
            </div>
          ) : (
            <div style={{ color: '#666', fontSize: '10px', textAlign: 'center', marginTop: '20px' }}>
              Select an image thumbnail to view full historical metadata, captions, and source attribution.
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {selectedFolder ? `${filteredPhotos.length} photo(s)` : `${FOLDERS.length} photo albums`}
        </div>
        <div className="win98-status-section" style={{ width: '130px' }}>
          Format: Windows 24-bit Bitmap
        </div>
      </div>
    </div>
  );
}
