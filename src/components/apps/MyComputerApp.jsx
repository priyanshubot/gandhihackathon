import React, { useState } from 'react';
import { RetroIcons } from '../RetroIcons';
import { soundEffects } from '../../utils/soundEffects';

export default function MyComputerApp({ onOpenFile }) {
  const [currentPath, setCurrentPath] = useState('My Computer');
  const [selectedItem, setSelectedItem] = useState(null);

  const drives = [
    { id: 'a', name: '3½ Floppy (A:)', icon: RetroIcons.DriveFloppy, type: 'drive', desc: '3.5-Inch Floppy Disk Drive' },
    { id: 'c', name: 'Local Disk (C:)', icon: RetroIcons.DriveHard, type: 'drive', desc: 'Primary System Drive (6.4 GB)' },
    { id: 'd', name: 'Compact Disc (D:)', icon: RetroIcons.DriveCD, type: 'drive', desc: 'CD-ROM Drive' },
    { id: 'settings', name: 'Control Panel', icon: RetroIcons.Settings, type: 'system', desc: 'System Settings & Hardware' }
  ];

  const cDriveContents = [
    { id: 'f1', name: 'WINDOWS', icon: RetroIcons.Folder, type: 'dir' },
    { id: 'f2', name: 'PROGRAM FILES', icon: RetroIcons.Folder, type: 'dir' },
    { id: 'f3', name: 'MY DOCUMENTS', icon: RetroIcons.MyDocuments, type: 'app', target: 'my-documents' },
    { id: 'f4', name: 'MY PICTURES', icon: RetroIcons.MyPictures, type: 'app', target: 'my-pictures' },
    { id: 'f5', name: 'PANVEL_FARM_LOGS', icon: RetroIcons.Folder, type: 'file', content: '[PANVEL FARM LOG - 2003]\nStables: 8 thoroughbred horses in good health.\nFruit plantation: Mango & chikoo trees harvested.\nWell water levels: High.\nBonfire wood ready for New Year 2004 gathering.' },
    { id: 'doc1', name: 'AUTOEXEC.BAT', icon: RetroIcons.FileText, type: 'file', content: '@ECHO OFF\nPROMPT $P$G\nPATH C:\\WINDOWS;C:\\WINDOWS\\COMMAND\nSET SOUND=C:\\SB16\nREM GALAXY APARTMENTS TERMINAL' }
  ];

  const handleItemClick = (item) => {
    soundEffects.playClick();
    setSelectedItem(item.id);
  };

  const handleItemDoubleClick = (item) => {
    soundEffects.playClick();
    if (item.id === 'c') {
      setCurrentPath('My Computer\\Local Disk (C:)');
      setSelectedItem(null);
    } else if (item.id === 'a') {
      soundEffects.playError();
      alert('Drive A: is not ready. The door may be open. Please check drive A: and make sure that a floppy disk is inserted.');
    } else if (item.id === 'd') {
      soundEffects.playError();
      alert('Please insert a compact disc into drive D:.');
    } else if (item.id === 'settings') {
      onOpenFile && onOpenFile('display-properties');
    } else if (item.type === 'app') {
      onOpenFile && onOpenFile(item.target);
    } else if (item.type === 'file') {
      onOpenFile && onOpenFile('notepad', { title: item.name, content: item.content });
    }
  };

  const handleUp = () => {
    soundEffects.playClick();
    setCurrentPath('My Computer');
    setSelectedItem(null);
  };

  const items = currentPath === 'My Computer' ? drives : cDriveContents;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item">File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
        <div className="win98-menu-item">Help</div>
      </div>

      {/* Explorer Toolbar */}
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
          disabled={currentPath === 'My Computer'}
          onClick={handleUp}
          style={{ opacity: currentPath === 'My Computer' ? 0.5 : 1 }}
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
        <button type="button" className="win98-btn" onClick={() => soundEffects.playClick()}>
          Properties
        </button>
      </div>

      {/* Address / Path Bar */}
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
          {currentPath}
        </div>
      </div>

      {/* Drive / Item List */}
      <div
        className="win98-content"
        style={{
          flex: 1,
          padding: '12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
          gap: '16px',
          alignContent: 'flex-start',
          backgroundColor: '#ffffff'
        }}
        onClick={() => setSelectedItem(null)}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedItem === item.id;
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
                maxWidth: '90px'
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
                  outline: isSelected ? '1px dotted #ffffff' : 'none'
                }}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {items.length} object(s)
        </div>
        <div className="win98-status-section" style={{ width: '120px' }}>
          4.12 GB Free
        </div>
      </div>
    </div>
  );
}
