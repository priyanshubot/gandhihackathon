import React, { useState } from 'react';
import { RetroIcons } from './RetroIcons';
import WindowFrame from './WindowFrame';
import NotepadApp from './apps/NotepadApp';
import MinesweeperApp from './apps/MinesweeperApp';
import PaintApp from './apps/PaintApp';
import InternetExplorerApp from './apps/InternetExplorerApp';
import MyComputerApp from './apps/MyComputerApp';
import MyDocumentsApp from './apps/MyDocumentsApp';
import MyPicturesApp from './apps/MyPicturesApp';
import RecycleBinApp from './apps/RecycleBinApp';
import DisplayPropertiesApp from './apps/DisplayPropertiesApp';
import ContextMenu from './ContextMenu';
import { soundEffects } from '../utils/soundEffects';

const DESKTOP_SHORTCUTS = [
  { id: 'my-computer', label: 'My Computer', icon: RetroIcons.MyComputer },
  { id: 'my-documents', label: 'My Documents', icon: RetroIcons.MyDocuments },
  { id: 'my-pictures', label: 'My Pictures', icon: RetroIcons.MyPictures },
  { id: 'internet-explorer', label: 'Internet Explorer', icon: RetroIcons.InternetExplorer },
  { id: 'recycle-bin', label: 'Recycle Bin', icon: RetroIcons.RecycleBin },
  { id: 'notepad', label: 'Notepad', icon: RetroIcons.Notepad },
  { id: 'paint', label: 'Paint', icon: RetroIcons.Paint },
  { id: 'minesweeper', label: 'Minesweeper', icon: RetroIcons.Minesweeper }
];

export default function Desktop({
  windows,
  activeWindowId,
  onOpenApp,
  onFocusWindow,
  onCloseWindow,
  onMinimizeWindow,
  onMaximizeWindow,
  onMoveWindow,
  bgColor,
  onBgColorChange,
  crtScanlines,
  onToggleCrt
}) {
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [contextMenuPos, setContextMenuPos] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleDesktopClick = (e) => {
    // If clicking desktop background
    if (e.target === e.currentTarget || e.target.closest('.win98-desktop-icons')) {
      setSelectedIconId(null);
      setContextMenuPos(null);
    }
  };

  const handleContextMenu = (e) => {
    // Only show if right clicking desktop background, not inside a window
    if (e.target.closest('.win98-window')) return;

    e.preventDefault();
    soundEffects.playClick();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
  };

  const handleIconClick = (e, shortcutId) => {
    e.stopPropagation();
    soundEffects.playClick();
    setSelectedIconId(shortcutId);
    setContextMenuPos(null);
  };

  const handleIconDoubleClick = (e, shortcutId) => {
    e.stopPropagation();
    onOpenApp(shortcutId);
  };

  const handleRefresh = () => {
    setSelectedIconId(null);
    setRefreshKey((k) => k + 1);
  };

  const renderAppContent = (win) => {
    switch (win.appId) {
      case 'notepad':
        return (
          <NotepadApp
            initialContent={win.content}
            fileName={win.fileName || win.title}
          />
        );
      case 'minesweeper':
        return <MinesweeperApp />;
      case 'paint':
        return <PaintApp />;
      case 'internet-explorer':
        return <InternetExplorerApp />;
      case 'my-computer':
        return (
          <MyComputerApp
            onOpenFile={(appId, props) => onOpenApp(appId, props)}
          />
        );
      case 'my-documents':
        return (
          <MyDocumentsApp
            onOpenFile={(appId, props) => onOpenApp(appId, props)}
          />
        );
      case 'my-pictures':
        return (
          <MyPicturesApp
            onOpenInPaint={() => onOpenApp('paint')}
          />
        );
      case 'recycle-bin':
        return (
          <RecycleBinApp
            onOpenFile={(appId, props) => onOpenApp(appId, props)}
          />
        );
      case 'display-properties':
        return (
          <DisplayPropertiesApp
            currentBgColor={bgColor}
            onBgColorChange={onBgColorChange}
            crtScanlines={crtScanlines}
            onToggleCrt={onToggleCrt}
            onClose={() => onCloseWindow(win.id)}
          />
        );
      default:
        return <div style={{ padding: '16px' }}>Application content unavailable.</div>;
    }
  };

  return (
    <div
      key={refreshKey}
      className="win98-desktop"
      style={{ backgroundColor: bgColor }}
      onClick={handleDesktopClick}
      onContextMenu={handleContextMenu}
    >
      {/* Desktop Icons on the left */}
      <div className="win98-desktop-icons">
        {DESKTOP_SHORTCUTS.map((shortcut) => {
          const Icon = shortcut.icon;
          const isSelected = selectedIconId === shortcut.id;
          return (
            <div
              key={shortcut.id}
              className={`win98-desktop-icon ${isSelected ? 'selected' : ''}`}
              onClick={(e) => handleIconClick(e, shortcut.id)}
              onDoubleClick={(e) => handleIconDoubleClick(e, shortcut.id)}
            >
              <div className="icon-graphic">
                <Icon size={32} />
              </div>
              <div className="icon-label">{shortcut.label}</div>
            </div>
          );
        })}
      </div>

      {/* Render Open Windows */}
      {windows.map((win) => {
        if (win.isMinimized) return null;
        return (
          <WindowFrame
            key={win.id}
            window={win}
            isActive={win.id === activeWindowId}
            onFocus={onFocusWindow}
            onClose={onCloseWindow}
            onMinimize={onMinimizeWindow}
            onMaximize={onMaximizeWindow}
            onMove={onMoveWindow}
          >
            {renderAppContent(win)}
          </WindowFrame>
        );
      })}

      {/* Desktop Context Menu */}
      {contextMenuPos && (
        <ContextMenu
          x={contextMenuPos.x}
          y={contextMenuPos.y}
          onClose={() => setContextMenuPos(null)}
          onRefresh={handleRefresh}
          onOpenProperties={() => onOpenApp('display-properties')}
        />
      )}
    </div>
  );
}
