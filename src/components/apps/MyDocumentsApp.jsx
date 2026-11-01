import React, { useState } from 'react';
import { RetroIcons } from '../RetroIcons';
import { soundEffects } from '../../utils/soundEffects';
import { SALLU_DOCUMENTS_TREE } from '../../data/salluBhaiData';

export default function MyDocumentsApp({ onOpenFile, onUnlockZip }) {
  const [folderPath, setFolderPath] = useState([SALLU_DOCUMENTS_TREE]);
  const [selectedId, setSelectedId] = useState(null);

  const currentFolder = folderPath[folderPath.length - 1];

  const handleItemClick = (item) => {
    soundEffects.playClick();
    setSelectedId(item.id);
  };

  const handleItemDoubleClick = (item) => {
    soundEffects.playClick();
    if (item.type === 'folder') {
      if (item.isSecret) {
        soundEffects.playError();
        const proceed = confirm("WARNING: This directory contains private reflections from 2002.\nDo you wish to enter?");
        if (!proceed) return;
      }
      setFolderPath((prev) => [...prev, item]);
      setSelectedId(null);
    } else if (item.type === 'text' || item.type === 'doc') {
      onOpenFile && onOpenFile('notepad', { title: item.name, content: item.content });
    } else if (item.type === 'zip') {
      onUnlockZip ? onUnlockZip(item) : handleZipClick(item);
    } else if (item.type === 'audio') {
      soundEffects.playStartup();
      alert(`Playing: ${item.name}\n(Synthesized 1990s Bollywood MIDI playback)`);
    }
  };

  const handleZipClick = (zipItem) => {
    const input = prompt(
      `WinZip (Evaluation Version)\nEnter password for ${zipItem.name}:\n\n${zipItem.hint}`
    );
    if (!input) return;
    const clean = input.trim().toLowerCase();
    if (clean === 'prem' || clean === 'radhe' || clean === 'turquoise') {
      soundEffects.playWin();
      alert('Password accepted! Extracting vault file...');
      onOpenFile && onOpenFile('notepad', {
        title: 'UNLOCKED_BHAI_MOTTO.TXT',
        content: zipItem.secretContent
      });
    } else {
      soundEffects.playError();
      alert('Error: CRC Check Failed. Incorrect password.');
    }
  };

  const handleUp = () => {
    if (folderPath.length > 1) {
      soundEffects.playClick();
      setFolderPath((prev) => prev.slice(0, prev.length - 1));
      setSelectedId(null);
    }
  };

  const getFullAddressPath = () => {
    const parts = folderPath.map((f) => f.name);
    return `C:\\${parts.join('\\')}`;
  };

  const getItemIcon = (item) => {
    if (item.type === 'folder') {
      return item.isSecret ? RetroIcons.SecretFolder : RetroIcons.Folder;
    }
    if (item.type === 'zip') {
      return RetroIcons.ZipFile;
    }
    if (item.type === 'doc' || item.type === 'text') {
      return RetroIcons.FileText;
    }
    return RetroIcons.FileText;
  };

  const items = currentFolder.children || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item">File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
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
          disabled={folderPath.length <= 1}
          onClick={handleUp}
          style={{ opacity: folderPath.length <= 1 ? 0.5 : 1 }}
        >
          ⬆ Up
        </button>
        <button type="button" className="win98-btn" onClick={() => soundEffects.playClick()}>
          Cut
        </button>
        <button type="button" className="win98-btn" onClick={() => soundEffects.playClick()}>
          Copy
        </button>
        <button type="button" className="win98-btn" onClick={() => soundEffects.playClick()}>
          Paste
        </button>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: '10px', color: '#555', paddingRight: '4px' }}>
          Personal PC - Bandra 1995-2003
        </span>
      </div>

      {/* Explorer Address Bar */}
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
            fontFamily: 'var(--win-font)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {getFullAddressPath()}
        </div>
      </div>

      {/* Documents Grid */}
      <div
        className="win98-content"
        style={{
          flex: 1,
          padding: '12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))',
          gap: '16px',
          alignContent: 'flex-start',
          backgroundColor: '#ffffff'
        }}
        onClick={() => setSelectedId(null)}
      >
        {items.length === 0 ? (
          <div style={{ color: '#888', padding: '10px', fontSize: '11px' }}>This folder is empty.</div>
        ) : (
          items.map((item) => {
            const Icon = getItemIcon(item);
            const isSelected = selectedId === item.id;
            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick(item);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  handleItemDoubleClick(item);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'default',
                  padding: '4px',
                  maxWidth: '92px'
                }}
              >
                <div style={{ marginBottom: '4px' }}>
                  <Icon size={32} />
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--win-font)',
                    padding: '1px 3px',
                    backgroundColor: isSelected ? 'var(--win-blue-start)' : 'transparent',
                    color: isSelected ? '#ffffff' : '#000000',
                    outline: isSelected ? '1px dotted #ffffff' : 'none',
                    wordBreak: 'break-word',
                    lineHeight: '1.2'
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {items.length} object(s)
        </div>
        <div className="win98-status-section" style={{ width: '130px' }}>
          Galaxy HD (C:)
        </div>
      </div>
    </div>
  );
}
