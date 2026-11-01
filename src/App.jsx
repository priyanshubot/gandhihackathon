import React, { useState, useCallback } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import ShutDownModal from './components/ShutDownModal';
import ShutDownScreen from './components/ShutDownScreen';
import { RetroIcons } from './components/RetroIcons';
import {
  playOpenSound,
  playClickSound,
  playCloseSound,
  playMinimizeSound,
  playMaximizeSound,
  soundEffects
} from '@/sounds';
import './retro98.css';

const APP_CONFIGS = {
  'notepad': {
    title: 'Notepad - GALAXY_APARTMENTS_NOTES.TXT',
    icon: RetroIcons.Notepad,
    width: 500,
    height: 360
  },
  'wordpad': {
    title: 'WordPad - TERE_NAAM_CLIMAX_DRAFT.DOC',
    icon: RetroIcons.WordPad,
    width: 600,
    height: 420
  },
  'calculator': {
    title: 'Calculator',
    icon: RetroIcons.Calculator,
    width: 250,
    height: 270
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
  'image-viewer': {
    title: 'Windows Picture Viewer',
    icon: RetroIcons.MyPictures,
    width: 660,
    height: 520
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
  },
  'msdos-prompt': {
    title: 'MS-DOS Prompt',
    icon: RetroIcons.MSDOSPrompt,
    width: 560,
    height: 350
  },
  'sound-recorder': {
    title: 'Sound - Sound Recorder',
    icon: RetroIcons.SoundRecorder,
    width: 340,
    height: 240
  },
  'about-windows': {
    title: 'About Windows 98',
    icon: RetroIcons.AboutWindows,
    width: 420,
    height: 320
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
  const focusWindow = useCallback((id) => {
    setMaxZIndex((prevZ) => {
      const newZ = prevZ + 1;
      setWindows((prev) =>
        prev.map((win) =>
          win.id === id ? { ...win, zIndex: newZ, isMinimized: false } : win
        )
      );
      return newZ;
    });
    setActiveWindowId(id);
  }, []);

  // Open an app window - Section 2.C
  const openApp = useCallback((appId, customProps = {}) => {
    const config = APP_CONFIGS[appId] || {
      title: 'Application',
      icon: RetroIcons.Programs,
      width: 400,
      height: 300
    };

    // If opening without custom props and window already exists, bring to front and play click
    const existingWindow = windows.find((w) => w.appId === appId && !customProps.content && appId !== 'image-viewer');
    if (existingWindow) {
      focusWindow(existingWindow.id);
      playClickSound();
      return;
    }

    // For image-viewer, if already open, update photoIndex and title and bring to front
    const existingViewer = windows.find((w) => w.appId === 'image-viewer');
    if (appId === 'image-viewer' && existingViewer) {
      focusWindow(existingViewer.id);
      setWindows((prev) =>
        prev.map((win) =>
          win.id === existingViewer.id
            ? {
                ...win,
                photoIndex: customProps.photoIndex ?? win.photoIndex,
                title: customProps.title || win.title,
                isMinimized: false
              }
            : win
        )
      );
      playClickSound();
      return;
    }

    // New window: play opening chime!
    playOpenSound();

    setMaxZIndex((prevZ) => {
      const newZ = prevZ + 1;
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
      return newZ;
    });
  }, [windows, focusWindow]);

  // Close window - Section 2.C
  const closeWindow = useCallback((id) => {
    setWindows((prev) => {
      const remaining = prev.filter((w) => w.id !== id);
      if (activeWindowId === id && remaining.length > 0) {
        const highest = remaining.reduce((max, w) => (w.zIndex > max.zIndex ? w : max), remaining[0]);
        setActiveWindowId(highest.id);
      } else if (remaining.length === 0) {
        setActiveWindowId(null);
      }
      return remaining;
    });
    playCloseSound();
  }, [activeWindowId]);

  // Minimize window - Section 2.C
  const minimizeWindow = useCallback((id) => {
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
    playMinimizeSound();
  }, [windows, activeWindowId]);

  // Maximize / Restore window - Section 2.C
  const toggleMaximize = useCallback((id) => {
    focusWindow(id);
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMaximized: !win.isMaximized } : win))
    );
    playMaximizeSound();
  }, [focusWindow]);

  // Move window
  const moveWindow = useCallback((id, x, y) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, x, y } : win))
    );
  }, []);

  // Update window title dynamically (for Picture Viewer filename)
  const updateWindowTitle = useCallback((id, newTitle) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, title: newTitle } : win))
    );
  }, []);

  // Taskbar button click handler - Section 2.D
  const handleTaskClick = useCallback((id) => {
    const w = windows.find((x) => x.id === id);
    if (!w) return;

    if (w.isMinimized || activeWindowId !== id) {
      focusWindow(id);
      playClickSound();
    } else {
      minimizeWindow(id);
    }
  }, [windows, activeWindowId, focusWindow, minimizeWindow]);

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
        onMaximizeWindow={toggleMaximize}
        onMoveWindow={moveWindow}
        onUpdateWindowTitle={updateWindowTitle}
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

      {/* Taskbar - Section 2.E */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        isStartMenuOpen={isStartMenuOpen}
        onToggleStartMenu={() => {
          playClickSound();
          setIsStartMenuOpen((v) => !v);
        }}
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
