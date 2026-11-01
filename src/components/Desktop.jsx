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
import ImageViewerApp from './apps/ImageViewerApp';
import RecycleBinApp from './apps/RecycleBinApp';
import DisplayPropertiesApp from './apps/DisplayPropertiesApp';
import CalculatorApp from './apps/CalculatorApp';
import DosPromptApp from './apps/DosPromptApp';
import SoundRecorderApp from './apps/SoundRecorderApp';
import AboutWindowsApp from './apps/AboutWindowsApp';
import WordPadApp from './apps/WordPadApp';
import ContextMenu from './ContextMenu';
import { ApplicationErrorPopup } from './ErrorPopups';
import { playClickSound } from '@/sounds';
import { SUPPLIED_PHOTOS } from '../data/salluBhaiData';

const DESKTOP_SHORTCUTS = [
  // Column 1: System & Network Essentials
  { id: 'my-computer', label: 'My Computer', icon: RetroIcons.MyComputer, isSupported: true },
  { id: 'network-neighborhood', label: 'Network Neighborhood', icon: RetroIcons.NetworkNeighborhood, isSupported: false, appName: 'NetHood', errorText: 'The network is not accessible. The network adapter is not responding or no IPX/NetBIOS protocol is bound to the adapter.' },
  { id: 'my-documents', label: 'My Documents', icon: RetroIcons.MyDocuments, isSupported: true },
  { id: 'my-pictures', label: 'My Pictures', icon: RetroIcons.MyPictures, isSupported: true },
  { id: 'internet-explorer', label: 'Internet Explorer', icon: RetroIcons.InternetExplorer, isSupported: true },
  { id: 'outlook-express', label: 'Outlook Express', icon: RetroIcons.OutlookExpress, isSupported: false, appName: 'MSIMN', errorText: 'The connection to the mail server POP3.GALAXYAPARTMENTS.COM has failed. Account: "Sallu", Server Error: 0x800CCC0E.' },
  { id: 'recycle-bin', label: 'Recycle Bin', icon: RetroIcons.RecycleBin, isSupported: true },

  // Column 2: Productivity & Utilities
  { id: 'notepad', label: 'Notepad', icon: RetroIcons.Notepad, isSupported: true },
  { id: 'wordpad', label: 'WordPad', icon: RetroIcons.WordPad, isSupported: true },
  { id: 'calculator', label: 'Calculator', icon: RetroIcons.Calculator, isSupported: true },
  { id: 'paint', label: 'Paint', icon: RetroIcons.Paint, isSupported: true },
  { id: 'sound-recorder', label: 'Sound Recorder', icon: RetroIcons.SoundRecorder, isSupported: true },
  { id: 'msdos-prompt', label: 'MS-DOS Prompt', icon: RetroIcons.MSDOSPrompt, isSupported: true },
  { id: 'disk-defragmenter', label: 'Disk Defragmenter', icon: RetroIcons.DiskDefragmenter, isSupported: false, appName: 'Defrag', errorText: 'Drive C: cannot be defragmented. Emotional fragmentation from 1999–2002 is locked in memory. Close background thoughts and try again.' },

  // Column 3: Communication & System Settings
  { id: 'icq', label: 'ICQ', icon: RetroIcons.ICQ, isSupported: false, appName: 'ICQ99b', errorText: 'Connection failed. VSNL Mumbai dial-up server timed out. Last seen user: Nandini_1999 (Offline since 2001).' },
  { id: 'microsoft-chat', label: 'Microsoft Chat', icon: RetroIcons.MicrosoftChat, isSupported: false, appName: 'ComicChat', errorText: 'Cannot connect to IRC server undernet.org. Modem disconnected on COM2 (Bandra MTNL Exchange).' },
  { id: 'netmeeting', label: 'NetMeeting', icon: RetroIcons.NetMeeting, isSupported: false, appName: 'Conf', errorText: 'Could not find an ILS directory server or video capture card. Dial-up interface offline.' },
  { id: 'frontpage-express', label: 'FrontPage Express', icon: RetroIcons.FrontPageExpress, isSupported: false, appName: 'FPXpress', errorText: 'Server Extensions not detected on host localhost. Cannot publish Bhai personal homepage.' },
  { id: 'registry-editor', label: 'Registry Editor', icon: RetroIcons.RegistryEditor, isSupported: false, appName: 'RegEdit', errorText: 'Registry editing has been disabled by your System Administrator [SALMAN_KHAN]. Access is denied.' },
  { id: 'control-panel', label: 'Control Panel', icon: RetroIcons.ControlPanel, isSupported: false, appName: 'Control', errorText: 'Control Panel configuration is locked by Administrator policy [GALAXY_SECURE].' },
  { id: 'display-properties', label: 'Display Properties', icon: RetroIcons.DisplayProps, isSupported: true },

  // Column 4: Entertainment & Extras
  { id: 'solitaire', label: 'Solitaire', icon: RetroIcons.Solitaire, isSupported: false, appName: 'Sol', errorText: '16-bit card graphics library CARDS.DLL failed to initialize. Insufficient video memory on 256-color display adapter.' },
  { id: 'freecell', label: 'FreeCell', icon: RetroIcons.FreeCell, isSupported: false, appName: 'FreeCell', errorText: 'Failed to allocate card memory array. Game #11988 aborted by system.' },
  { id: 'hearts', label: 'Hearts', icon: RetroIcons.Hearts, isSupported: false, appName: 'Mshearts', errorText: 'Network game partner table empty. No other players connected on local IPX network.' },
  { id: 'minesweeper', label: 'Minesweeper', icon: RetroIcons.Minesweeper, isSupported: true },
  { id: 'game-center', label: 'Game Center', icon: RetroIcons.GameCenter, isSupported: false, appName: 'Zone', errorText: 'Dial-up matchmaking server unavailable. Internet Gaming Zone server has been archived.' },
  { id: 'qbasic', label: 'QBasic', icon: RetroIcons.QBasic, isSupported: false, appName: 'QBASIC', errorText: 'MS-DOS Subsystem - Conventional memory exhausted. 512K EMS required to execute QBasic.' },
  { id: 'mouse-properties', label: 'Mouse Properties', icon: RetroIcons.MouseProperties, isSupported: false, appName: 'Main.cpl', errorText: 'PS/2 Trackball Mouse driver loaded in compatibility mode. Advanced tabs unavailable.' },
  { id: 'about-windows', label: 'About Windows', icon: RetroIcons.AboutWindows, isSupported: true }
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
  onUpdateWindowTitle,
  bgColor,
  onBgColorChange,
  crtScanlines,
  onToggleCrt
}) {
  const [selectedIconId, setSelectedIconId] = useState(null);
  const [contextMenuPos, setContextMenuPos] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [errorDialog, setErrorDialog] = useState(null);

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
    playClickSound();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
  };

  const handleIconClick = (e, shortcutId) => {
    e.stopPropagation();
    playClickSound();
    setSelectedIconId(shortcutId);
    setContextMenuPos(null);
  };

  const handleIconDoubleClick = (e, shortcut) => {
    e.stopPropagation();
    if (shortcut.isSupported) {
      onOpenApp(shortcut.id);
    } else {
      // Display authentic Windows 98 error popup for unsupported apps
      setErrorDialog({
        appName: shortcut.appName || shortcut.label,
        errorText: shortcut.errorText || `Cannot run ${shortcut.label}: This application is not supported or required files are missing.`
      });
    }
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
      case 'wordpad':
        return <WordPadApp />;
      case 'calculator':
        return <CalculatorApp />;
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
            onOpenViewer={(index) => {
              const photo = SUPPLIED_PHOTOS[index] || SUPPLIED_PHOTOS[0];
              onOpenApp('image-viewer', {
                photoIndex: index,
                title: `${photo.filename} - Windows Picture Viewer`
              });
            }}
            onOpenInPaint={() => onOpenApp('paint')}
          />
        );
      case 'image-viewer':
        return (
          <ImageViewerApp
            initialIndex={win.photoIndex || 0}
            onOpenInPaint={() => onOpenApp('paint')}
            onTitleChange={(newTitle) => onUpdateWindowTitle && onUpdateWindowTitle(win.id, newTitle)}
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
      case 'msdos-prompt':
        return <DosPromptApp onClose={() => onCloseWindow(win.id)} />;
      case 'sound-recorder':
        return <SoundRecorderApp />;
      case 'about-windows':
        return <AboutWindowsApp onClose={() => onCloseWindow(win.id)} />;
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
      {/* Desktop Icons in neat Windows 98 multi-column grid */}
      <div className="win98-desktop-icons">
        {DESKTOP_SHORTCUTS.map((shortcut) => {
          const Icon = shortcut.icon;
          const isSelected = selectedIconId === shortcut.id;
          return (
            <div
              key={shortcut.id}
              className={`win98-desktop-icon ${isSelected ? 'selected' : ''}`}
              onClick={(e) => handleIconClick(e, shortcut.id)}
              onDoubleClick={(e) => handleIconDoubleClick(e, shortcut)}
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

      {/* Unsupported Application Error Dialog */}
      {errorDialog && (
        <ApplicationErrorPopup
          appName={errorDialog.appName}
          errorText={errorDialog.errorText}
          onClose={() => setErrorDialog(null)}
        />
      )}
    </div>
  );
}
