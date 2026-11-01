import React from 'react';

// Authentic Windows 98 retro pixel-art SVG icons
export const RetroIcons = {
  // My Computer: Classic beige CRT monitor with blue screen + desktop tower unit
  MyComputer: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Monitor Outer Casing (Beige) */}
      <rect x="2" y="2" width="22" height="18" fill="#dcd6c8" stroke="#000000" strokeWidth="1" />
      <rect x="3" y="3" width="20" height="1" fill="#ffffff" />
      <rect x="3" y="4" width="1" height="15" fill="#ffffff" />
      <rect x="23" y="3" width="1" height="17" fill="#808080" />
      <rect x="3" y="19" width="21" height="1" fill="#808080" />
      
      {/* Monitor Bezel */}
      <rect x="4" y="4" width="18" height="14" fill="#a0a0a0" />
      <rect x="4" y="4" width="18" height="1" fill="#808080" />
      <rect x="4" y="4" width="1" height="14" fill="#808080" />
      <rect x="21" y="4" width="1" height="14" fill="#ffffff" />
      <rect x="4" y="17" width="18" height="1" fill="#ffffff" />

      {/* Screen (Teal/Cyan Windows Desktop) */}
      <rect x="6" y="6" width="14" height="10" fill="#008080" />
      <rect x="7" y="7" width="4" height="3" fill="#ffffff" opacity="0.6" />
      <rect x="7" y="12" width="12" height="3" fill="#000080" />

      {/* Power LED on Monitor */}
      <rect x="20" y="18" width="2" height="1" fill="#00ff00" />

      {/* Monitor Neck & Base */}
      <rect x="10" y="20" width="6" height="2" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
      <polygon points="7,22 19,22 21,24 5,24" fill="#dcd6c8" stroke="#000000" strokeWidth="0.5" />

      {/* Tower PC behind / to the right */}
      <rect x="18" y="7" width="12" height="23" fill="#dcd6c8" stroke="#000000" strokeWidth="1" />
      <rect x="19" y="8" width="10" height="1" fill="#ffffff" />
      <rect x="19" y="9" width="1" height="20" fill="#ffffff" />
      <rect x="29" y="8" width="1" height="22" fill="#808080" />
      <rect x="19" y="29" width="11" height="1" fill="#808080" />

      {/* CD-ROM Slot */}
      <rect x="21" y="10" width="7" height="2" fill="#808080" />
      <rect x="22" y="11" width="4" height="1" fill="#000000" />
      <rect x="27" y="11" width="1" height="1" fill="#00ff00" />

      {/* 3.5 Floppy Slot */}
      <rect x="21" y="14" width="7" height="2" fill="#808080" />
      <rect x="22" y="15" width="4" height="1" fill="#000000" />
      <rect x="27" y="15" width="1" height="1" fill="#ffbf00" />

      {/* Power / Reset Buttons */}
      <rect x="22" y="20" width="2" height="2" fill="#808080" />
      <rect x="25" y="20" width="3" height="3" fill="#a0a0a0" stroke="#000000" strokeWidth="0.5" />
      <rect x="22" y="25" width="2" height="1" fill="#00ff00" />
      <rect x="25" y="25" width="2" height="1" fill="#ff0000" />
    </svg>
  ),

  // My Documents: Classic yellow folder with documents inside
  MyDocuments: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Folder Back Tab */}
      <path d="M 3 6 L 12 6 L 15 9 L 27 9 L 27 13 L 3 13 Z" fill="#d8a038" stroke="#000000" strokeWidth="1" />
      
      {/* Document sticking out */}
      <polygon points="12,5 24,5 26,7 26,17 12,17" fill="#ffffff" stroke="#000000" strokeWidth="1" />
      <line x1="14" y1="8" x2="22" y2="8" stroke="#808080" strokeWidth="1" />
      <line x1="14" y1="11" x2="24" y2="11" stroke="#000080" strokeWidth="1" />
      <line x1="14" y1="14" x2="20" y2="14" stroke="#808080" strokeWidth="1" />
      
      {/* Folder Front Face (Isometric open flap) */}
      <polygon points="2,13 13,13 17,16 29,16 26,28 1,28" fill="#fcd764" stroke="#000000" strokeWidth="1" />
      <polygon points="3,14 13,14 16,17 28,17 25,27 2,27" fill="#ffe988" />
      <polygon points="4,15 13,15 16,18 27,18 25,26 3,26" fill="#f6ca45" />

      {/* Front edge highlight */}
      <line x1="2" y1="14" x2="13" y2="14" stroke="#ffffff" strokeWidth="1" />
      <line x1="1" y1="14" x2="1" y2="28" stroke="#ffffff" strokeWidth="1" />
      <line x1="1" y1="28" x2="26" y2="28" stroke="#806010" strokeWidth="1" />
    </svg>
  ),

  // Internet Explorer: Classic Windows 98 Blue "e" with gold orbital ring
  InternetExplorer: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Gold orbital swoosh ring (back part) */}
      <path d="M 5 24 C 2 20 6 13 15 9 C 23 5 28 6 29 8" fill="none" stroke="#e0a000" strokeWidth="3" />
      <path d="M 5 24 C 2 20 6 13 15 9 C 23 5 28 6 29 8" fill="none" stroke="#fff060" strokeWidth="1" />

      {/* Classic Lowercase "e" */}
      {/* Outer Circle */}
      <ellipse cx="16" cy="16" rx="11" ry="11" fill="#0066cc" stroke="#002266" strokeWidth="1" />
      {/* Inner cutout */}
      <ellipse cx="16" cy="16" rx="6.5" ry="6.5" fill="#008080" />
      {/* Re-fill center */}
      <path d="M 8 15 L 24 15 L 24 17 L 8 17 Z" fill="#0066cc" />
      <path d="M 8 14 L 23 14 L 23 16 L 8 16 Z" fill="#4499ff" />
      
      {/* Inner hole top */}
      <ellipse cx="16" cy="12.5" rx="5" ry="3.5" fill="#008080" />
      {/* Gap cutout at lower right */}
      <path d="M 17 17 L 27 19 L 25 24 L 16 20 Z" fill="#008080" />

      {/* Modern gradient shine on "e" */}
      <path d="M 7 14 C 7 9 11 6 16 6 C 21 6 24 9 24 12" fill="none" stroke="#88ccff" strokeWidth="1.5" />

      {/* Gold orbital ring (front part) */}
      <path d="M 29 9 C 31 12 28 19 19 24 C 10 29 4 28 3 25" fill="none" stroke="#b07000" strokeWidth="3.5" />
      <path d="M 29 9 C 31 12 28 19 19 24 C 10 29 4 28 3 25" fill="none" stroke="#ffcc00" strokeWidth="2.5" />
      <path d="M 28 10 C 30 13 27 19 19 23.5 C 11 28 5 27 4 25" fill="none" stroke="#ffffff" strokeWidth="1" />
    </svg>
  ),

  // Recycle Bin: Silver wire basket with papers & green recycle symbol
  RecycleBin: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Bin rim (oval) */}
      <ellipse cx="16" cy="7" rx="11" ry="3" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
      <ellipse cx="16" cy="7" rx="9" ry="2" fill="#505050" />
      
      {/* Crumpled paper inside */}
      <polygon points="12,4 17,2 20,5 17,7 13,6" fill="#ffffff" stroke="#808080" strokeWidth="0.5" />
      <polygon points="9,5 14,3 15,6 10,7" fill="#e0e0e0" />

      {/* Bin body */}
      <polygon points="5,7 9,28 23,28 27,7" fill="#b0b0b0" stroke="#000000" strokeWidth="1" />
      
      {/* Wire mesh lines */}
      <line x1="8" y1="9" x2="11" y2="27" stroke="#ffffff" strokeWidth="1" />
      <line x1="12" y1="10" x2="14" y2="27" stroke="#ffffff" strokeWidth="1" />
      <line x1="16" y1="10" x2="16" y2="27" stroke="#ffffff" strokeWidth="1" />
      <line x1="20" y1="10" x2="18" y2="27" stroke="#606060" strokeWidth="1" />
      <line x1="24" y1="9" x2="21" y2="27" stroke="#606060" strokeWidth="1" />

      <line x1="6" y1="13" x2="26" y2="13" stroke="#808080" strokeWidth="1" />
      <line x1="7" y1="18" x2="25" y2="18" stroke="#808080" strokeWidth="1" />
      <line x1="8" y1="23" x2="24" y2="23" stroke="#808080" strokeWidth="1" />

      {/* Green 3-arrow recycle badge on front */}
      <circle cx="16" cy="18" r="5" fill="#ffffff" stroke="#008000" strokeWidth="0.5" />
      <path d="M 13 16 L 16 14 L 19 16" fill="none" stroke="#009900" strokeWidth="1.5" />
      <path d="M 19 17 L 17 21 L 14 20" fill="none" stroke="#009900" strokeWidth="1.5" />
      <path d="M 13 20 L 12 17 L 15 17" fill="none" stroke="#009900" strokeWidth="1.5" />

      {/* Bin Base */}
      <ellipse cx="16" cy="28" rx="7" ry="2" fill="#808080" stroke="#000000" strokeWidth="1" />
    </svg>
  ),

  // Notepad: Blue spiral notebook with lined yellow paper & pencil
  Notepad: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Notebook Cover (Blue) */}
      <rect x="5" y="4" width="22" height="25" fill="#1c5ca8" stroke="#000000" strokeWidth="1" />
      <rect x="6" y="5" width="20" height="23" fill="#2b75cc" />

      {/* Notepad Page (Yellowish-white) */}
      <rect x="8" y="7" width="17" height="20" fill="#ffffea" stroke="#808080" strokeWidth="0.5" />
      
      {/* Note Text Lines */}
      <line x1="10" y1="10" x2="22" y2="10" stroke="#3377bb" strokeWidth="1" />
      <line x1="10" y1="13" x2="23" y2="13" stroke="#99aacc" strokeWidth="1" />
      <line x1="10" y1="16" x2="21" y2="16" stroke="#99aacc" strokeWidth="1" />
      <line x1="10" y1="19" x2="23" y2="19" stroke="#99aacc" strokeWidth="1" />
      <line x1="10" y1="22" x2="18" y2="22" stroke="#99aacc" strokeWidth="1" />

      {/* Spiral wire bindings on top */}
      {[7, 11, 15, 19, 23].map((x) => (
        <g key={x}>
          <rect x={x} y="2" width="2" height="4" fill="#d0d0d0" stroke="#000000" strokeWidth="0.5" />
          <rect x={x} y="3" width="1" height="2" fill="#ffffff" />
        </g>
      ))}

      {/* Pencil across the pad */}
      <polygon points="18,26 28,14 30,16 20,28" fill="#ffcc00" stroke="#000000" strokeWidth="0.5" />
      <polygon points="28,14 30,16 31,14 29,12" fill="#ff8080" stroke="#000000" strokeWidth="0.5" />
      <polygon points="18,26 20,28 17,29" fill="#dcd6c8" stroke="#000000" strokeWidth="0.5" />
      <polygon points="17,29 18,28.5 17.5,28" fill="#000000" />
    </svg>
  ),

  // Paint: Artist wooden palette with dollops of colored paint & wooden brush
  Paint: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Wooden Palette shape */}
      <path
        d="M 6 12 C 4 19 8 27 16 27 C 22 27 28 23 27 16 C 26 10 22 5 15 5 C 9 5 7 8 6 12 Z"
        fill="#e6b36a"
        stroke="#5a3d1b"
        strokeWidth="1"
      />
      {/* Inner wood highlight */}
      <path
        d="M 8 13 C 6 18 10 25 16 25 C 21 25 26 22 25 16 C 24 11 21 7 15 7"
        fill="none"
        stroke="#fadc9c"
        strokeWidth="1"
      />

      {/* Thumb Hole */}
      <ellipse cx="22" cy="18" rx="2.5" ry="3.5" fill="#008080" stroke="#5a3d1b" strokeWidth="1" />

      {/* Paint Blobs */}
      <circle cx="10" cy="10" r="2.2" fill="#ff0000" stroke="#880000" strokeWidth="0.5" />
      <circle cx="15" cy="8" r="2.2" fill="#ffcc00" stroke="#997700" strokeWidth="0.5" />
      <circle cx="19" cy="9" r="2.2" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      <circle cx="10" cy="16" r="2.2" fill="#0066ff" stroke="#002288" strokeWidth="0.5" />
      <circle cx="12" cy="22" r="2.2" fill="#cc00cc" stroke="#660066" strokeWidth="0.5" />

      {/* Paint Brush */}
      <polygon points="5,28 23,8 25,10 7,30" fill="#a0522d" stroke="#000000" strokeWidth="0.5" />
      <polygon points="21,10 24,7 26,9 23,12" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
      <polygon points="24,7 28,3 30,5 26,9" fill="#111111" />
      <circle cx="28" cy="4" r="1" fill="#0066ff" />
    </svg>
  ),

  // Minesweeper: Classic spiked naval mine with yellow smiley
  Minesweeper: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Background beveled square tile */}
      <rect x="2" y="2" width="28" height="28" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
      <line x1="2" y1="2" x2="30" y2="2" stroke="#ffffff" strokeWidth="2" />
      <line x1="2" y1="2" x2="2" y2="30" stroke="#ffffff" strokeWidth="2" />
      <line x1="2" y1="29" x2="30" y2="29" stroke="#808080" strokeWidth="2" />
      <line x1="29" y1="2" x2="29" y2="30" stroke="#808080" strokeWidth="2" />

      {/* Spikes / Fuses */}
      {/* Horizontal */}
      <rect x="4" y="15" width="24" height="2" fill="#000000" />
      {/* Vertical */}
      <rect x="15" y="4" width="2" height="24" fill="#000000" />
      {/* Diagonals */}
      <line x1="8" y1="8" x2="24" y2="24" stroke="#000000" strokeWidth="2" />
      <line x1="24" y1="8" x2="8" y2="24" stroke="#000000" strokeWidth="2" />

      {/* Main Mine Sphere */}
      <circle cx="16" cy="16" r="8" fill="#000000" />
      
      {/* Shading / 3D highlight on bomb */}
      <ellipse cx="14" cy="13" rx="3.5" ry="2.5" fill="#ffffff" />
      <circle cx="13" cy="13" r="1.5" fill="#ffffff" />

      {/* Little red detonator light */}
      <circle cx="16" cy="16" r="2" fill="#ff0000" />
    </svg>
  ),

  // Classic Windows 98 Flying Flag Logo
  WindowsLogo: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Top Left: Red */}
      <polygon points="1,2 7,1 7,7 1,8" fill="#ff3300" />
      {/* Top Right: Green */}
      <polygon points="8,1 15,3 14,9 8,7" fill="#33cc33" />
      {/* Bottom Left: Blue */}
      <polygon points="1,9 7,8 7,14 1,15" fill="#0066ff" />
      {/* Bottom Right: Yellow */}
      <polygon points="8,8 14,10 15,15 8,14" fill="#ffcc00" />
      
      {/* Trailing yellow/orange dots/sparks */}
      <rect x="14" y="1" width="1" height="1" fill="#ffcc00" />
      <rect x="15" y="2" width="1" height="1" fill="#ff9900" />
    </svg>
  ),

  // Drive Icons for Explorer
  DriveFloppy: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <rect x="1" y="2" width="14" height="12" fill="#505050" stroke="#000" strokeWidth="0.5" />
      <rect x="4" y="2" width="8" height="5" fill="#a0a0a0" />
      <rect x="6" y="3" width="2" height="3" fill="#000" />
      <rect x="3" y="9" width="10" height="4" fill="#ffffff" />
      <line x1="4" y1="11" x2="11" y2="11" stroke="#0000ff" strokeWidth="0.5" />
    </svg>
  ),

  DriveHard: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <rect x="1" y="4" width="14" height="8" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <line x1="2" y1="5" x2="14" y2="5" stroke="#fff" strokeWidth="0.5" />
      <line x1="2" y1="11" x2="14" y2="11" stroke="#808080" strokeWidth="0.5" />
      <rect x="3" y="7" width="2" height="2" fill="#00ff00" />
      <line x1="8" y1="8" x2="12" y2="8" stroke="#000" strokeWidth="1" />
    </svg>
  ),

  DriveCD: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="8" r="7" fill="#d0d8e0" stroke="#404040" strokeWidth="0.5" />
      <circle cx="8" cy="8" r="4" fill="none" stroke="#a0b0d0" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" fill="#ffffff" stroke="#404040" strokeWidth="0.5" />
    </svg>
  ),

  // File & Folder Icons
  Folder: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <path d="M 1 3 L 6 3 L 8 5 L 14 5 L 14 13 L 1 13 Z" fill="#d8a038" stroke="#000" strokeWidth="0.5" />
      <polygon points="1,6 15,6 13,14 1,14" fill="#fcd764" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  FileText: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <polygon points="2,1 10,1 14,5 14,15 2,15" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <polygon points="10,1 10,5 14,5" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <line x1="4" y1="5" x2="8" y2="5" stroke="#000080" strokeWidth="0.5" />
      <line x1="4" y1="8" x2="12" y2="8" stroke="#808080" strokeWidth="0.5" />
      <line x1="4" y1="10" x2="12" y2="10" stroke="#808080" strokeWidth="0.5" />
      <line x1="4" y1="12" x2="10" y2="12" stroke="#808080" strokeWidth="0.5" />
    </svg>
  ),

  FileImage: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <polygon points="2,1 10,1 14,5 14,15 2,15" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="4" y="5" width="8" height="7" fill="#80c0ff" />
      <circle cx="6" cy="7" r="1" fill="#ffff00" />
      <polygon points="4,12 8,8 10,10 12,7 12,12" fill="#208020" />
    </svg>
  ),

  // Start Menu Icons
  Programs: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <rect x="1" y="2" width="6" height="5" fill="#000080" />
      <rect x="9" y="2" width="6" height="5" fill="#008080" />
      <rect x="1" y="9" width="6" height="5" fill="#800000" />
      <rect x="9" y="9" width="6" height="5" fill="#808000" />
    </svg>
  ),

  Settings: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="8" r="6" fill="#808080" stroke="#000" strokeWidth="0.5" />
      <circle cx="8" cy="8" r="2.5" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <rect x="7" y="1" width="2" height="3" fill="#808080" />
      <rect x="7" y="12" width="2" height="3" fill="#808080" />
      <rect x="1" y="7" width="3" height="2" fill="#808080" />
      <rect x="12" y="7" width="3" height="2" fill="#808080" />
    </svg>
  ),

  Find: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <circle cx="7" cy="7" r="5" fill="#e0f0ff" stroke="#000" strokeWidth="1" />
      <line x1="11" y1="11" x2="15" y2="15" stroke="#603010" strokeWidth="2.5" />
    </svg>
  ),

  Help: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <rect x="2" y="2" width="12" height="12" fill="#4d79ff" stroke="#000080" strokeWidth="0.5" />
      <text x="8" y="12" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">?</text>
    </svg>
  ),

  Run: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <rect x="1" y="3" width="13" height="10" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <polygon points="4,6 8,8 4,10" fill="#008000" />
      <line x1="8" y1="10" x2="12" y2="10" stroke="#000" strokeWidth="1" />
    </svg>
  ),

  ShutDown: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="8" r="6" fill="#ff4444" stroke="#880000" strokeWidth="0.5" />
      <line x1="8" y1="4" x2="8" y2="9" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="4" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="18 6" />
    </svg>
  ),

  // Tray Icons
  Speaker: ({ size = 14, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <polygon points="2,6 5,6 8,3 8,13 5,10 2,10" fill="#000000" />
      <path d="M 10 5 C 12 7 12 9 10 11" fill="none" stroke="#000000" strokeWidth="1.2" />
      <path d="M 12 3 C 15 6 15 10 12 13" fill="none" stroke="#000000" strokeWidth="1.2" />
    </svg>
  ),

  SpeakerMuted: ({ size = 14, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <polygon points="2,6 5,6 8,3 8,13 5,10 2,10" fill="#808080" />
      <line x1="10" y1="5" x2="14" y2="11" stroke="#ff0000" strokeWidth="1.5" />
      <line x1="14" y1="5" x2="10" y2="11" stroke="#ff0000" strokeWidth="1.5" />
    </svg>
  ),

  DisplayProps: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
      <rect x="2" y="2" width="12" height="9" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <rect x="4" y="3" width="8" height="6" fill="#008080" />
      <rect x="6" y="11" width="4" height="2" fill="#808080" />
      <rect x="4" y="13" width="8" height="1" fill="#000" />
    </svg>
  ),

  // My Pictures Icon
  MyPictures: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M 3 6 L 12 6 L 15 9 L 27 9 L 27 13 L 3 13 Z" fill="#d8a038" stroke="#000000" strokeWidth="1" />
      {/* Photograph sticking out */}
      <rect x="10" y="4" width="16" height="12" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="12" y="6" width="12" height="8" fill="#80c0ff" />
      <circle cx="15" cy="8" r="1.5" fill="#ffcc00" />
      <polygon points="12,14 16,10 18,12 21,9 24,14" fill="#008000" />
      {/* Folder front */}
      <polygon points="2,13 13,13 17,16 29,16 26,28 1,28" fill="#fcd764" stroke="#000000" strokeWidth="1" />
      <polygon points="3,14 13,14 16,17 28,17 25,27 2,27" fill="#ffe988" />
    </svg>
  ),

  // Zip Archive Icon
  ZipFile: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M 4 4 L 20 4 L 28 12 L 28 28 L 4 28 Z" fill="#f0e080" stroke="#000" strokeWidth="1" />
      <polygon points="20,4 20,12 28,12" fill="#d0c060" stroke="#000" strokeWidth="0.5" />
      {/* Zipper down the center */}
      <rect x="14" y="8" width="4" height="18" fill="#a0a0a0" stroke="#000" strokeWidth="0.5" />
      {[10, 13, 16, 19, 22].map((y) => (
        <rect key={y} x="14" y={y} width="4" height="1.5" fill="#ffffff" />
      ))}
      <rect x="13" y="22" width="6" height="5" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // Secret Folder with Lock
  SecretFolder: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      <path d="M 3 6 L 12 6 L 15 9 L 27 9 L 27 13 L 3 13 Z" fill="#b02020" stroke="#000" strokeWidth="1" />
      <polygon points="2,13 13,13 17,16 29,16 26,28 1,28" fill="#d83030" stroke="#000" strokeWidth="1" />
      {/* Padlock */}
      <rect x="12" y="18" width="8" height="7" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
      <path d="M 14 18 L 14 15 C 14 13 18 13 18 15 L 18 18" fill="none" stroke="#606060" strokeWidth="1.5" />
      <circle cx="16" cy="21" r="1" fill="#000" />
    </svg>
  ),

  // Disk Defragmenter: Hard drive with multicolored data cluster blocks
  DiskDefragmenter: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Drive Casing */}
      <rect x="3" y="5" width="26" height="22" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
      <rect x="4" y="6" width="24" height="1" fill="#ffffff" />
      <rect x="4" y="7" width="1" height="19" fill="#ffffff" />
      <rect x="28" y="6" width="1" height="21" fill="#808080" />
      <rect x="4" y="26" width="25" height="1" fill="#808080" />

      {/* Cluster Window / Grid */}
      <rect x="6" y="8" width="20" height="16" fill="#000000" stroke="#808080" strokeWidth="1" />
      {/* Clusters */}
      <rect x="7" y="9" width="3" height="3" fill="#0000ff" />
      <rect x="11" y="9" width="3" height="3" fill="#0000ff" />
      <rect x="15" y="9" width="3" height="3" fill="#ff0000" />
      <rect x="19" y="9" width="3" height="3" fill="#ffff00" />

      <rect x="7" y="13" width="3" height="3" fill="#ff0000" />
      <rect x="11" y="13" width="3" height="3" fill="#0000ff" />
      <rect x="15" y="13" width="3" height="3" fill="#0000ff" />
      <rect x="19" y="13" width="3" height="3" fill="#ffffff" />

      <rect x="7" y="17" width="3" height="3" fill="#00ff00" />
      <rect x="11" y="17" width="3" height="3" fill="#ffff00" />
      <rect x="15" y="17" width="3" height="3" fill="#0000ff" />
      <rect x="19" y="17" width="3" height="3" fill="#ff0000" />

      <rect x="7" y="21" width="3" height="2" fill="#0000ff" />
      <rect x="11" y="21" width="3" height="2" fill="#0000ff" />
      <rect x="15" y="21" width="3" height="2" fill="#00ff00" />
      <rect x="19" y="21" width="3" height="2" fill="#0000ff" />

      {/* Drive Status LED */}
      <rect x="25" y="24" width="2" height="2" fill="#00ff00" />
    </svg>
  ),

  // Calculator: Classic retro desktop pocket calculator
  Calculator: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Calculator Body (Beige) */}
      <rect x="6" y="3" width="20" height="26" rx="1" fill="#d4d0c8" stroke="#000000" strokeWidth="1" />
      <rect x="7" y="4" width="18" height="1" fill="#ffffff" />
      <rect x="7" y="5" width="1" height="23" fill="#ffffff" />
      <rect x="25" y="4" width="1" height="25" fill="#808080" />
      <rect x="7" y="28" width="19" height="1" fill="#808080" />

      {/* LCD Screen */}
      <rect x="8" y="6" width="16" height="5" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <rect x="9" y="7" width="14" height="3" fill="#c0dcc0" />
      <rect x="20" y="8" width="2" height="2" fill="#000000" />

      {/* Keypad Buttons */}
      {/* Row 1 */}
      <rect x="8" y="13" width="3" height="2" fill="#ff0000" stroke="#000" strokeWidth="0.5" />
      <rect x="12" y="13" width="3" height="2" fill="#d4d0c8" stroke="#000" strokeWidth="0.5" />
      <rect x="16" y="13" width="3" height="2" fill="#d4d0c8" stroke="#000" strokeWidth="0.5" />
      <rect x="20" y="13" width="4" height="2" fill="#0000ff" stroke="#000" strokeWidth="0.5" />

      {/* Row 2 */}
      <rect x="8" y="17" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="12" y="17" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="16" y="17" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="20" y="17" width="4" height="2" fill="#0000ff" stroke="#000" strokeWidth="0.5" />

      {/* Row 3 */}
      <rect x="8" y="21" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="12" y="21" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="16" y="21" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="20" y="21" width="4" height="2" fill="#0000ff" stroke="#000" strokeWidth="0.5" />

      {/* Row 4 */}
      <rect x="8" y="25" width="7" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="16" y="25" width="3" height="2" fill="#ffffff" stroke="#000" strokeWidth="0.5" />
      <rect x="20" y="25" width="4" height="2" fill="#0000ff" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // Microsoft Chat: Classic Comic Chat character speech balloon
  MicrosoftChat: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* White Comic Speech Bubble */}
      <path d="M 4 5 L 28 5 L 28 20 L 16 20 L 10 26 L 11 20 L 4 20 Z" fill="#ffffff" stroke="#000000" strokeWidth="1.2" />
      
      {/* Comic character face inside */}
      <circle cx="16" cy="12" r="5.5" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
      {/* Eyes */}
      <circle cx="14" cy="11" r="1" fill="#000" />
      <circle cx="18" cy="11" r="1" fill="#000" />
      {/* Smiling Mouth */}
      <path d="M 14 14 Q 16 16 18 14" fill="none" stroke="#000" strokeWidth="0.8" />
      {/* Comic Hair / Cap */}
      <path d="M 11 10 C 13 7 19 7 21 10" fill="none" stroke="#603010" strokeWidth="1.2" />
      
      {/* Tiny companion bubble */}
      <circle cx="27" cy="24" r="3" fill="#80c0ff" stroke="#000" strokeWidth="0.8" />
    </svg>
  ),

  // NetMeeting: Beige monitor with globe and yellow meeting silhouettes
  NetMeeting: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* CRT Monitor */}
      <rect x="4" y="3" width="22" height="17" fill="#dcd6c8" stroke="#000000" strokeWidth="1" />
      <rect x="6" y="5" width="18" height="13" fill="#000080" />
      {/* Blue Globe on screen */}
      <circle cx="15" cy="11" r="5" fill="#0080ff" />
      <path d="M 11 11 Q 15 13 19 11" fill="none" stroke="#00ff00" strokeWidth="1" />
      <path d="M 15 6 Q 16 11 15 16" fill="none" stroke="#00ff00" strokeWidth="1" />

      {/* Monitor Base */}
      <rect x="12" y="20" width="6" height="3" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <polygon points="9,23 21,23 23,25 7,25" fill="#dcd6c8" stroke="#000" strokeWidth="0.5" />

      {/* Yellow Meeting People Silhouette in foreground */}
      <circle cx="23" cy="18" r="3" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
      <path d="M 19 27 C 19 23 27 23 27 27" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // Network Neighborhood: Two desktop PCs connected by a blue network wire
  NetworkNeighborhood: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Top Left PC */}
      <rect x="2" y="3" width="14" height="11" fill="#d4d0c8" stroke="#000" strokeWidth="1" />
      <rect x="4" y="5" width="10" height="7" fill="#008080" />
      <rect x="7" y="14" width="4" height="2" fill="#808080" />

      {/* Bottom Right PC */}
      <rect x="16" y="16" width="14" height="11" fill="#d4d0c8" stroke="#000" strokeWidth="1" />
      <rect x="18" y="18" width="10" height="7" fill="#008080" />
      <rect x="21" y="27" width="4" height="2" fill="#808080" />

      {/* Network Connecting Cable with hub / world */}
      <path d="M 9 16 L 9 20 L 23 20 L 23 16" fill="none" stroke="#0000ff" strokeWidth="1.5" />
      <rect x="14" y="18" width="4" height="4" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // WordPad: Lined yellow notepad with blue cover and fountain pen
  WordPad: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Lined Paper sheet */}
      <rect x="4" y="4" width="22" height="25" fill="#ffffff" stroke="#000000" strokeWidth="1" />
      <rect x="5" y="5" width="20" height="1" fill="#ffffea" />
      
      {/* Blue Header Stripe */}
      <rect x="5" y="5" width="20" height="4" fill="#000080" />
      
      {/* Document text lines */}
      <line x1="7" y1="12" x2="21" y2="12" stroke="#808080" strokeWidth="1" />
      <line x1="7" y1="15" x2="23" y2="15" stroke="#808080" strokeWidth="1" />
      <line x1="7" y1="18" x2="19" y2="18" stroke="#808080" strokeWidth="1" />
      <line x1="7" y1="21" x2="22" y2="21" stroke="#808080" strokeWidth="1" />
      <line x1="7" y1="24" x2="16" y2="24" stroke="#808080" strokeWidth="1" />

      {/* Fountain Pen (angled) */}
      <polygon points="14,28 27,11 29,13 16,30" fill="#111111" stroke="#000" strokeWidth="0.5" />
      <polygon points="26,10 28,8 30,10 28,12" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
      <polygon points="14,28 12,31 16,30" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      <circle cx="14" cy="29" r="0.5" fill="#000" />
    </svg>
  ),

  // ICQ: Iconic 1990s green daisy flower with 7 green petals, 1 red petal, yellow center
  ICQ: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Petals */}
      {/* Top (Red petal) */}
      <circle cx="16" cy="7" r="4" fill="#ff0000" stroke="#880000" strokeWidth="0.5" />
      {/* Top Right (Green) */}
      <circle cx="23" cy="10" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      {/* Right (Green) */}
      <circle cx="25" cy="16" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      {/* Bottom Right (Green) */}
      <circle cx="23" cy="22" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      {/* Bottom (Green) */}
      <circle cx="16" cy="25" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      {/* Bottom Left (Green) */}
      <circle cx="9" cy="22" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      {/* Left (Green) */}
      <circle cx="7" cy="16" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />
      {/* Top Left (Green) */}
      <circle cx="9" cy="10" r="4" fill="#00cc00" stroke="#006600" strokeWidth="0.5" />

      {/* Center disk */}
      <circle cx="16" cy="16" r="5" fill="#ffea00" stroke="#cc9900" strokeWidth="1" />
      <circle cx="16" cy="16" r="2" fill="#ffffff" />
    </svg>
  ),

  // Solitaire: Card deck with Ace of Spades and blue patterned back
  Solitaire: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Back card (blue pattern) */}
      <rect x="9" y="3" width="18" height="24" rx="1" fill="#0044aa" stroke="#000" strokeWidth="1" />
      <rect x="11" y="5" width="14" height="20" fill="#002277" />
      <line x1="11" y1="5" x2="25" y2="25" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />

      {/* Front card (Ace of Spades) */}
      <rect x="5" y="6" width="18" height="24" rx="1" fill="#ffffff" stroke="#000" strokeWidth="1" />
      {/* 'A' top left */}
      <text x="7" y="11" fill="#000000" fontSize="6" fontWeight="bold" fontFamily="monospace">A</text>
      
      {/* Spade symbol in center */}
      <path d="M 14 17 C 14 15 11 13 14 9 C 17 13 14 15 14 17 Z" fill="#000000" />
      <circle cx="12.5" cy="16" r="2" fill="#000000" />
      <circle cx="15.5" cy="16" r="2" fill="#000000" />
      <polygon points="13.5,17 14.5,17 15,20 13,20" fill="#000000" />
    </svg>
  ),

  // Registry Editor: 3D Registry cubes / keys breaking apart
  RegistryEditor: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Base Cube 1 (Left) */}
      <polygon points="5,14 11,10 17,14 11,18" fill="#88ccff" stroke="#000" strokeWidth="0.5" />
      <polygon points="5,14 11,18 11,26 5,22" fill="#0066cc" stroke="#000" strokeWidth="0.5" />
      <polygon points="11,18 17,14 17,22 11,26" fill="#004499" stroke="#000" strokeWidth="0.5" />

      {/* Base Cube 2 (Right) */}
      <polygon points="15,19 21,15 27,19 21,23" fill="#88ccff" stroke="#000" strokeWidth="0.5" />
      <polygon points="15,19 21,23 21,29 15,25" fill="#0066cc" stroke="#000" strokeWidth="0.5" />
      <polygon points="21,23 27,19 27,25 21,29" fill="#004499" stroke="#000" strokeWidth="0.5" />

      {/* Floating Top Cube */}
      <polygon points="11,7 17,3 23,7 17,11" fill="#ffff88" stroke="#000" strokeWidth="0.5" />
      <polygon points="11,7 17,11 17,18 11,14" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
      <polygon points="17,11 23,7 23,14 17,18" fill="#cc9900" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // Outlook Express: White envelope with blue globe and red/blue speed streaks
  OutlookExpress: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Blue Globe in background */}
      <circle cx="21" cy="12" r="8" fill="#0080ff" stroke="#000080" strokeWidth="0.5" />
      <ellipse cx="21" cy="12" rx="4" ry="8" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
      <line x1="13" y1="12" x2="29" y2="12" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />

      {/* White Envelope in front */}
      <rect x="3" y="10" width="22" height="16" fill="#ffffff" stroke="#000" strokeWidth="1" />
      <polygon points="3,10 14,19 25,10" fill="#ffffea" stroke="#000" strokeWidth="0.5" />
      <line x1="3" y1="26" x2="11" y2="17" stroke="#808080" strokeWidth="0.5" />
      <line x1="25" y1="26" x2="17" y2="17" stroke="#808080" strokeWidth="0.5" />

      {/* Red/Gold Speed streaks */}
      <path d="M 2 12 L 8 12" stroke="#ff0000" strokeWidth="1.5" />
      <path d="M 1 15 L 6 15" stroke="#ffcc00" strokeWidth="1.5" />
      <path d="M 2 18 L 5 18" stroke="#0000ff" strokeWidth="1.5" />
    </svg>
  ),

  // FreeCell: Fan of 4 playing cards
  FreeCell: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* 4 Overlapping cards */}
      <rect x="3" y="8" width="13" height="19" rx="1" fill="#ffffff" stroke="#000" strokeWidth="0.8" />
      <text x="4" y="13" fill="#ff0000" fontSize="5" fontWeight="bold">K</text>
      <circle cx="9" cy="17" r="1.5" fill="#ff0000" />

      <rect x="8" y="6" width="13" height="19" rx="1" fill="#ffffff" stroke="#000" strokeWidth="0.8" />
      <text x="9" y="11" fill="#000000" fontSize="5" fontWeight="bold">Q</text>
      <path d="M 14 15 L 15 17 L 13 17 Z" fill="#000000" />

      <rect x="13" y="4" width="13" height="19" rx="1" fill="#ffffff" stroke="#000" strokeWidth="0.8" />
      <text x="14" y="9" fill="#ff0000" fontSize="5" fontWeight="bold">J</text>
      <polygon points="19,13 21,15 19,17 17,15" fill="#ff0000" />

      <rect x="17" y="2" width="13" height="19" rx="1" fill="#ffffff" stroke="#000" strokeWidth="0.8" />
      <text x="18" y="7" fill="#000000" fontSize="5" fontWeight="bold">A</text>
      <circle cx="23" cy="11" r="1.5" fill="#000000" />
    </svg>
  ),

  // Control Panel: Folder with sliders / controls and gears
  ControlPanel: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Folder Back Tab */}
      <path d="M 3 6 L 12 6 L 15 9 L 27 9 L 27 13 L 3 13 Z" fill="#d8a038" stroke="#000000" strokeWidth="1" />
      
      {/* Gear / Sliders sheet */}
      <rect x="8" y="5" width="18" height="12" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
      {/* Gear */}
      <circle cx="16" cy="10" r="3" fill="#808080" stroke="#000" strokeWidth="0.5" />
      <circle cx="16" cy="10" r="1" fill="#ffffff" />
      
      {/* Folder Front */}
      <polygon points="2,13 13,13 17,16 29,16 26,28 1,28" fill="#fcd764" stroke="#000000" strokeWidth="1" />
      {/* 2 Slider Trackers on front */}
      <line x1="6" y1="20" x2="22" y2="20" stroke="#806010" strokeWidth="1" />
      <rect x="10" y="18" width="4" height="4" fill="#dcd6c8" stroke="#000" strokeWidth="0.5" />
      <line x1="6" y1="24" x2="22" y2="24" stroke="#806010" strokeWidth="1" />
      <rect x="17" y="22" width="4" height="4" fill="#dcd6c8" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // About Windows: Windows 98 Flying Flag with circular Info badge
  AboutWindows: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Blue Certificate/Shield Background */}
      <rect x="3" y="3" width="26" height="26" rx="2" fill="#dcd6c8" stroke="#000" strokeWidth="1" />
      <rect x="4" y="4" width="24" height="24" fill="#ffffff" />

      {/* Windows Flying Flag in Center */}
      <polygon points="8,9 14,8 14,14 8,15" fill="#ff3300" />
      <polygon points="15,8 22,10 21,16 15,14" fill="#33cc33" />
      <polygon points="8,16 14,15 14,21 8,22" fill="#0066ff" />
      <polygon points="15,15 21,17 22,22 15,21" fill="#ffcc00" />

      {/* Blue circular Info 'i' badge */}
      <circle cx="23" cy="23" r="6" fill="#000080" stroke="#ffffff" strokeWidth="1" />
      <text x="23" y="27" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="serif">i</text>
    </svg>
  ),

  // Hearts: Playing card with large red heart
  Hearts: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Card body */}
      <rect x="6" y="3" width="20" height="26" rx="1" fill="#ffffff" stroke="#000" strokeWidth="1" />
      {/* 'Q' top left */}
      <text x="8" y="9" fill="#ff0000" fontSize="6" fontWeight="bold" fontFamily="monospace">Q</text>
      
      {/* Center Heart */}
      <path d="M 16 14 C 16 11 11 11 11 15 C 11 19 16 23 16 23 C 16 23 21 19 21 15 C 21 11 16 11 16 14 Z" fill="#ff0000" stroke="#880000" strokeWidth="0.5" />
    </svg>
  ),

  // MS-DOS Prompt: Black CRT screen with C:\_
  MSDOSPrompt: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Black Window frame */}
      <rect x="3" y="4" width="26" height="24" fill="#000000" stroke="#808080" strokeWidth="1" />
      <rect x="4" y="5" width="24" height="4" fill="#000080" />
      {/* MS-DOS Text */}
      <text x="5" y="8" fill="#ffffff" fontSize="3" fontFamily="monospace">MS-DOS</text>
      
      {/* Prompt C:\_ */}
      <text x="6" y="16" fill="#ffaa00" fontSize="7" fontWeight="bold" fontFamily="monospace">C:\_</text>
      <rect x="20" y="14" width="4" height="2" fill="#00ff00" />
    </svg>
  ),

  // Sound Recorder: Silver microphone with green audio wave
  SoundRecorder: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Tape Cassette / Wave Box */}
      <rect x="3" y="5" width="26" height="22" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="5" y="7" width="22" height="11" fill="#000000" />
      {/* Green Sound Wave */}
      <path d="M 6 12 L 9 12 L 11 8 L 13 16 L 15 9 L 17 15 L 19 10 L 21 13 L 25 12" fill="none" stroke="#00ff00" strokeWidth="1.2" />

      {/* Microphone in bottom right */}
      <rect x="8" y="21" width="3" height="3" fill="#ff0000" stroke="#000" strokeWidth="0.5" />
      <rect x="13" y="21" width="3" height="3" fill="#000000" stroke="#000" strokeWidth="0.5" />
      <polygon points="18,21 21,22.5 18,24" fill="#008000" />
    </svg>
  ),

  // Mouse Properties: Beige 2-button mouse with cord and trackball
  MouseProperties: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Mouse Cable */}
      <path d="M 16 7 Q 16 2 21 3" fill="none" stroke="#808080" strokeWidth="1.2" />

      {/* Mouse Body (Beige) */}
      <rect x="9" y="7" width="14" height="21" rx="6" fill="#dcd6c8" stroke="#000" strokeWidth="1" />
      <rect x="10" y="8" width="12" height="1" fill="#ffffff" />
      
      {/* Left/Right Button divider */}
      <line x1="16" y1="7" x2="16" y2="15" stroke="#000000" strokeWidth="1" />
      <line x1="9" y1="15" x2="23" y2="15" stroke="#808080" strokeWidth="1" />

      {/* Highlight on left click button */}
      <rect x="11" y="9" width="3" height="4" fill="#ffffff" opacity="0.6" />
    </svg>
  ),

  // QBasic: Blue DOS textbook / executable with bold yellow letter "Q"
  QBasic: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Book Cover (Blue) */}
      <polygon points="5,5 23,2 28,6 28,26 10,29 5,26" fill="#0000aa" stroke="#000" strokeWidth="1" />
      <polygon points="23,2 28,6 28,26 23,22" fill="#000088" />
      <polygon points="6,6 22,3 22,22 6,25" fill="#0055ff" />

      {/* Yellow Letter Q */}
      <text x="13" y="18" textAnchor="middle" fill="#ffff00" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Q</text>
      {/* BASIC Subtitle */}
      <text x="14" y="22" textAnchor="middle" fill="#ffffff" fontSize="4" fontFamily="monospace">BASIC</text>
    </svg>
  ),

  // FrontPage Express: Web document with yellow construction crane
  FrontPageExpress: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Web Document */}
      <rect x="4" y="4" width="20" height="24" fill="#ffffff" stroke="#000" strokeWidth="1" />
      <rect x="6" y="6" width="16" height="3" fill="#000080" />
      <line x1="6" y1="12" x2="18" y2="12" stroke="#808080" strokeWidth="1" />
      <line x1="6" y1="15" x2="20" y2="15" stroke="#808080" strokeWidth="1" />
      
      {/* Yellow Construction Crane */}
      <polygon points="16,28 20,10 24,10 28,28" fill="#ffcc00" stroke="#000" strokeWidth="0.5" />
      <line x1="20" y1="10" x2="12" y2="16" stroke="#ffcc00" strokeWidth="2" />
      <line x1="12" y1="16" x2="12" y2="22" stroke="#000000" strokeWidth="1" />
      <rect x="10" y="22" width="4" height="4" fill="#ff0000" />
    </svg>
  ),

  // Game Center: Retro arcade joystick / gamepad
  GameCenter: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      {/* Joystick Base (Dark Gray) */}
      <polygon points="5,22 10,16 22,16 27,22 24,28 8,28" fill="#404040" stroke="#000" strokeWidth="1" />
      <polygon points="6,22 10,17 22,17 26,22" fill="#707070" />

      {/* Joystick Shaft */}
      <line x1="16" y1="16" x2="16" y2="8" stroke="#a0a0a0" strokeWidth="3" />
      <line x1="16" y1="16" x2="16" y2="8" stroke="#ffffff" strokeWidth="1" />

      {/* Red Ball Top */}
      <circle cx="16" cy="7" r="5" fill="#ff0000" stroke="#880000" strokeWidth="0.5" />
      <circle cx="14" cy="5" r="1.5" fill="#ffffff" />

      {/* Buttons on Base */}
      <circle cx="21" cy="22" r="2" fill="#ffff00" stroke="#000" strokeWidth="0.5" />
      <circle cx="24" cy="25" r="2" fill="#00ff00" stroke="#000" strokeWidth="0.5" />
    </svg>
  ),

  // Critical Error Icon: Red circle with thick white X
  CriticalError: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      <circle cx="16" cy="16" r="14" fill="#cc0000" stroke="#660000" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="22" y2="22" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="22" y1="10" x2="10" y2="22" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="square" />
    </svg>
  ),

  // Warning Icon: Yellow triangle with black exclamation
  WarningIcon: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      <polygon points="16,3 30,28 2,28" fill="#ffcc00" stroke="#000000" strokeWidth="1.5" />
      <line x1="16" y1="11" x2="16" y2="20" stroke="#000000" strokeWidth="2.5" />
      <circle cx="16" cy="24" r="1.5" fill="#000000" />
    </svg>
  ),

  // Information Icon: Blue circle with white i
  InfoIcon: ({ size = 32, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} style={{ imageRendering: 'pixelated' }}>
      <circle cx="16" cy="16" r="14" fill="#0055dd" stroke="#002288" strokeWidth="1.5" />
      <circle cx="16" cy="10" r="2" fill="#ffffff" />
      <rect x="14.5" y="14" width="3" height="9" fill="#ffffff" />
    </svg>
  )
};
