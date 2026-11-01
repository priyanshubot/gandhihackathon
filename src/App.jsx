import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import ShutDownModal from './components/ShutDownModal';
import ShutDownScreen from './components/ShutDownScreen';
import { RetroIcons } from './components/RetroIcons';
import { soundEffects } from './utils/soundEffects';
import './retro98.css';

const APP_CONFIGS = {
  'notepad': {
    title: 'Notepad - GALAXY_APARTMENTS_NOTES.TXT',
    icon: RetroIcons.Notepad,
    width: 500,
    height: 360
  },
  'minesweeper': {
    title: 'Minesweeper',
    icon: RetroIcons.Minesweeper,
    width: 220,
    height: 300
  },
  'paint': {
    title: 'Paint - [canvas_sketch.bmp]',
    icon: RetroIcons.Paint,
    width: 580,
    height: 440
  },
  'internet-explorer': {
    title: 'Microsoft Internet Explorer - Bollywood 2003 Portal',
    icon: RetroIcons.InternetExplorer,
    width: 660,
    height: 470
  },
  'my-computer': {
    title: 'My Computer',
    icon: RetroIcons.MyComputer,
    width: 460,
    height: 320
  },
  'my-documents': {
    title: 'My Documents',
    icon: RetroIcons.MyDocuments,
    width: 480,
    height: 340
  },
  'my-pictures': {
    title: 'My Pictures - Salman Khan Archive (1995–2003)',
    icon: RetroIcons.MyPictures,
    width: 620,
    height: 430
  },
  'recycle-bin': {
    title: 'Recycle Bin',
    icon: RetroIcons.RecycleBin,
    width: 480,
    height: 320
  },
  'display-properties': {
    title: 'Display Properties',
    icon: RetroIcons.DisplayProps,
    width: 390,
    height: 410
  }
};

const INITIAL_SALLU_NOTE = `[PERSONAL NOTE - BANDRA RESIDENCE]
LOCATION: Galaxy Apartments, Bandstand, Bandra (West), Mumbai 400050
DATE: 4 November 2002

Dad (Salim Khan) was saying this morning: "A man's character is tested when the storms hit, not on sunny afternoons."
The press has been crowding the gate at Bandstand all week. Can't even step out onto the balcony without seeing telephoto lenses.

Notes for the week:
1. Panvel Farmhouse: Go there on Friday night. Need to ride the horses and clear my mind.
2. Arbaaz and Sohail's new script discussion on Sunday.
3. Call Mom (Salma Khan) and Helen Aunty before evening.
4. Painting canvas: Pick up more linseed oil and charcoal pencils from Fort art shop. Working on the large Lord Shiva portrait in the study.

[THIS PERSONAL COMPUTER CONTAINS ARCHIVES, LEGAL NOTES, RELATIONSHIPS & DIARIES FROM 1995-2003]`;

export default function App() {
  // Start with a notepad window open displaying Sallu Bhai's personal diary note
  const [windows, setWindows] = useState([
    {
      id: 'win-initial-notepad',
      appId: 'notepad',
      title: 'Notepad - GALAXY_APARTMENTS_NOTES.TXT',
      icon: RetroIcons.Notepad,
      x: 110,
      y: 50,
      width: 500,
      height: 360,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      content: INITIAL_SALLU_NOTE,
      fileName: 'GALAXY_APARTMENTS_NOTES.TXT'
    }
  ]);

  const [activeWindowId, setActiveWindowId] = useState('win-initial-notepad');
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isShutDownModalOpen, setIsShutDownModalOpen] = useState(false);
  const [isPoweredOff, setIsPoweredOff] = useState(false);
  const [bgColor, setBgColor] = useState('#008080'); // Classic Teal
  const [crtScanlines, setCrtScanlines] = useState(false);

  // Focus a window
  const focusWindow = (id) => {
    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);
    setActiveWindowId(id);
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, zIndex: newZ, isMinimized: false } : win
      )
    );
  };

  // Open an app window
  const openApp = (appId, customProps = {}) => {
    soundEffects.playClick();
    const config = APP_CONFIGS[appId] || {
      title: 'Application',
      icon: RetroIcons.Programs,
      width: 400,
      height: 300
    };

    // If opening without custom props and window already exists, bring to front
    const existingWindow = windows.find((w) => w.appId === appId && !customProps.content);
    if (existingWindow) {
      focusWindow(existingWindow.id);
      return;
    }

    const newZ = maxZIndex + 1;
    setMaxZIndex(newZ);

    const offset = (windows.length % 6) * 24;
    const newWindow = {
      id: `win-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      appId,
      title: customProps.title || config.title,
      icon: config.icon,
      x: Math.min(Math.max(60, 80 + offset), window.innerWidth - config.width - 20),
      y: Math.min(Math.max(40, 50 + offset), window.innerHeight - config.height - 50),
      width: config.width,
      height: config.height,
      isMinimized: false,
      isMaximized: false,
      zIndex: newZ,
      ...customProps
    };

    setWindows((prev) => [...prev, newWindow]);
    setActiveWindowId(newWindow.id);
  };

  // Close window
  const closeWindow = (id) => {
    soundEffects.playClick();
    setWindows((prev) => {
      const remaining = prev.filter((w) => w.id !== id);
      if (activeWindowId === id && remaining.length > 0) {
        // Find highest z-index remaining window
        const highest = remaining.reduce((max, w) => (w.zIndex > max.zIndex ? w : max), remaining[0]);
        setActiveWindowId(highest.id);
      } else if (remaining.length === 0) {
        setActiveWindowId(null);
      }
      return remaining;
    });
  };

  // Minimize window
  const minimizeWindow = (id) => {
    soundEffects.playClick();
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
    );

    if (activeWindowId === id) {
      const available = windows.filter((w) => w.id !== id && !w.isMinimized);
      if (available.length > 0) {
        const highest = available.reduce((max, w) => (w.zIndex > max.zIndex ? w : max), available[0]);
        setActiveWindowId(highest.id);
      } else {
        setActiveWindowId(null);
      }
    }
  };

  // Maximize / Restore window
  const maximizeWindow = (id) => {
    soundEffects.playClick();
    focusWindow(id);
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMaximized: !win.isMaximized } : win))
    );
  };

  // Move window
  const moveWindow = (id, x, y) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, x, y } : win))
    );
  };

  // Taskbar button click handler
  const handleTaskClick = (id) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      focusWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  // If powered off
  if (isPoweredOff) {
    return (
      <ShutDownScreen
        onPowerOn={() => {
          setIsPoweredOff(false);
          setIsShutDownModalOpen(false);
        }}
      />
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {/* CRT Scanline Simulation Overlay */}
      {crtScanlines && <div className="crt-overlay" />}

      {/* Windows 98 Desktop */}
      <Desktop
        windows={windows}
        activeWindowId={activeWindowId}
        onOpenApp={openApp}
        onFocusWindow={focusWindow}
        onCloseWindow={closeWindow}
        onMinimizeWindow={minimizeWindow}
        onMaximizeWindow={maximizeWindow}
        onMoveWindow={moveWindow}
        bgColor={bgColor}
        onBgColorChange={setBgColor}
        crtScanlines={crtScanlines}
        onToggleCrt={setCrtScanlines}
      />

      {/* Start Menu */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenApp={openApp}
        onOpenShutDown={() => setIsShutDownModalOpen(true)}
      />

      {/* Taskbar */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        isStartMenuOpen={isStartMenuOpen}
        onToggleStartMenu={() => setIsStartMenuOpen(!isStartMenuOpen)}
        onTaskClick={handleTaskClick}
        crtScanlines={crtScanlines}
        onToggleCrt={setCrtScanlines}
      />

      {/* Shut Down Modal */}
      {isShutDownModalOpen && (
        <ShutDownModal
          onCancel={() => setIsShutDownModalOpen(false)}
          onShutDown={() => {
            setIsShutDownModalOpen(false);
            setIsPoweredOff(true);
          }}
          onRestart={() => {
            setIsShutDownModalOpen(false);
            setWindows([]);
            setTimeout(() => {
              openApp('notepad');
              soundEffects.playStartup();
            }, 300);
          }}
        />
      )}
    </div>
  );
}
