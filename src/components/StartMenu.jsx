import React, { useState, useEffect, useRef } from 'react';
import { RetroIcons } from './RetroIcons';
import { soundEffects } from '../utils/soundEffects';

export default function StartMenu({
  isOpen,
  onClose,
  onOpenApp,
  onOpenShutDown
}) {
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.win98-start-btn')) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleItemClick = (appId, props) => {
    soundEffects.playClick();
    onOpenApp(appId, props);
    onClose();
  };

  return (
    <div ref={menuRef} className="win98-start-menu">
      {/* Left Blue Gradient Banner */}
      <div className="win98-start-sidebar">
        <div className="win98-start-sidebar-text">
          Windows<span>98</span>
        </div>
      </div>

      {/* Start Menu Items */}
      <div className="win98-start-items" onMouseLeave={() => setHoveredSubmenu(null)}>
        {/* Programs */}
        <div
          className={`win98-start-item ${hoveredSubmenu === 'programs' ? 'active' : ''}`}
          onMouseEnter={() => setHoveredSubmenu('programs')}
          style={{ position: 'relative' }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.Programs size={20} />
            <span style={{ fontWeight: 'bold' }}>Programs</span>
          </div>
          <span style={{ fontSize: '9px' }}>▶</span>

          {/* Programs Submenu */}
          {hoveredSubmenu === 'programs' && (
            <div
              className="win98-outset"
              style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                width: '160px',
                backgroundColor: '#c0c0c0',
                padding: '2px 1px',
                boxShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                zIndex: 1000001
              }}
            >
              <div
                className="win98-start-item"
                onClick={() => handleItemClick('notepad')}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.Notepad size={16} />
                  <span>Notepad</span>
                </div>
              </div>
              <div
                className="win98-start-item"
                onClick={() => handleItemClick('paint')}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.Paint size={16} />
                  <span>Paint</span>
                </div>
              </div>
              <div
                className="win98-start-item"
                onClick={() => handleItemClick('minesweeper')}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.Minesweeper size={16} />
                  <span>Minesweeper</span>
                </div>
              </div>
              <div
                className="win98-start-item"
                onClick={() => handleItemClick('internet-explorer')}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.InternetExplorer size={16} />
                  <span>Internet Explorer</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Documents */}
        <div
          className={`win98-start-item ${hoveredSubmenu === 'documents' ? 'active' : ''}`}
          onMouseEnter={() => setHoveredSubmenu('documents')}
          onClick={() => handleItemClick('my-documents')}
          style={{ position: 'relative' }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.MyDocuments size={20} />
            <span>Documents</span>
          </div>
          <span style={{ fontSize: '9px' }}>▶</span>

          {/* Documents Submenu */}
          {hoveredSubmenu === 'documents' && (
            <div
              className="win98-outset"
              style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                width: '180px',
                backgroundColor: '#c0c0c0',
                padding: '2px 1px',
                boxShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                zIndex: 1000001
              }}
            >
              <div
                className="win98-start-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick('my-documents');
                }}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.Folder size={16} />
                  <span>(Open Folder)</span>
                </div>
              </div>
              <div
                className="win98-start-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick('notepad', { title: 'INCIDENT_LOG_1998.txt' });
                }}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.FileText size={16} />
                  <span>INCIDENT_LOG_1998</span>
                </div>
              </div>
              <div
                className="win98-start-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick('notepad', { title: 'CONFIDENTIAL.TXT' });
                }}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.FileText size={16} />
                  <span>CONFIDENTIAL_MEMO</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div
          className={`win98-start-item ${hoveredSubmenu === 'settings' ? 'active' : ''}`}
          onMouseEnter={() => setHoveredSubmenu('settings')}
          onClick={() => handleItemClick('display-properties')}
          style={{ position: 'relative' }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.Settings size={20} />
            <span>Settings</span>
          </div>
          <span style={{ fontSize: '9px' }}>▶</span>

          {/* Settings Submenu */}
          {hoveredSubmenu === 'settings' && (
            <div
              className="win98-outset"
              style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                width: '170px',
                backgroundColor: '#c0c0c0',
                padding: '2px 1px',
                boxShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                zIndex: 1000001
              }}
            >
              <div
                className="win98-start-item"
                onClick={(e) => {
                  e.stopPropagation();
                  handleItemClick('display-properties');
                }}
              >
                <div className="win98-start-item-left">
                  <RetroIcons.DisplayProps size={16} />
                  <span>Display Properties</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Find */}
        <div
          className="win98-start-item"
          onMouseEnter={() => setHoveredSubmenu(null)}
          onClick={() => {
            soundEffects.playClick();
            alert('Searching local disks: 0 results found outside classified sectors.');
            onClose();
          }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.Find size={20} />
            <span>Find</span>
          </div>
          <span style={{ fontSize: '9px' }}>▶</span>
        </div>

        {/* Help */}
        <div
          className="win98-start-item"
          onMouseEnter={() => setHoveredSubmenu(null)}
          onClick={() => {
            handleItemClick('notepad', {
              title: 'WINDOWS_HELP.TXT',
              content: `WINDOWS 98 HELP SYSTEM
=======================
PROJECT: The Abandoned Computer (Hackathon Edition)

Welcome to the abandoned computer. This machine was left active since late October 1998.
To explore:
1. Double-click any desktop icon to launch its application.
2. Check My Documents for secret notes and incident reports.
3. Check the Recycle Bin to recover purged security files.
4. Open Internet Explorer to access the mirror archive.
5. Play Minesweeper if you need a break between discoveries.
6. Right-click the desktop to change wallpaper in Display Properties.

Good luck uncovering the secrets of Omega Facility.`
            });
          }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.Help size={20} />
            <span>Help</span>
          </div>
        </div>

        {/* Run */}
        <div
          className="win98-start-item"
          onMouseEnter={() => setHoveredSubmenu(null)}
          onClick={() => {
            soundEffects.playClick();
            const cmd = prompt('Type the name of a program, folder, document, or Internet resource:', 'notepad');
            if (cmd) {
              const lower = cmd.trim().toLowerCase();
              if (lower.includes('paint') || lower.includes('pbrush')) handleItemClick('paint');
              else if (lower.includes('mine') || lower.includes('winmine')) handleItemClick('minesweeper');
              else if (lower.includes('iexplore') || lower.includes('internet')) handleItemClick('internet-explorer');
              else if (lower.includes('explorer') || lower.includes('computer')) handleItemClick('my-computer');
              else handleItemClick('notepad', { title: `${cmd}.txt` });
            }
          }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.Run size={20} />
            <span>Run...</span>
          </div>
        </div>

        <div className="win98-start-separator" />

        {/* Shut Down */}
        <div
          className="win98-start-item"
          onMouseEnter={() => setHoveredSubmenu(null)}
          onClick={() => {
            soundEffects.playClick();
            onOpenShutDown();
            onClose();
          }}
        >
          <div className="win98-start-item-left">
            <RetroIcons.ShutDown size={20} />
            <span>Shut Down...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
