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
  )
};
