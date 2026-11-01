import React, { useState } from 'react';
import { RetroIcons } from '../RetroIcons';
import { soundEffects } from '../../utils/soundEffects';

const DOCS = [
  {
    id: 'doc1',
    name: 'INCIDENT_LOG_1998.txt',
    icon: RetroIcons.FileText,
    type: 'notepad',
    size: '2 KB',
    content: `[OMEGA FACILITY - INCIDENT REPORT]
INCIDENT ID: 1998-ALPHA-77
TIMESTAMP: 1998-10-24 02:45:11 UTC

Summary:
During testing of the resonance coil in Sublevel 3, an unpredicted telemetry surge caused a cascading failure across the auxiliary cooling towers.
Dr. Vance engaged emergency shutoffs, but the magnetic field collapsed, leaving an electromagnetic residue.

Orders from Central:
1. Evacuate all human staff immediately.
2. Leave Terminal 98-B active to log continuous sensor readouts.
3. Lock all bulkhead doors.

Note added by Dr. Vance:
"If anyone ever boots this terminal back up in the future... check the internet mirror on the intranet. We weren't the only ones in the sublevel."`
  },
  {
    id: 'doc2',
    name: 'SECURITY_PASSWORDS.txt',
    icon: RetroIcons.FileText,
    type: 'notepad',
    size: '1 KB',
    content: `[DO NOT LEAVE ON DESKTOP - DR. VANCE]

Sublevel 3 Bulkhead: 4821
Generator Room: 1998
Minesweeper High Score: 14 seconds (Dr. Aris)
Server Root: *********** [DELETED BY ADMIN]`
  },
  {
    id: 'doc3',
    name: 'FACILITY_BLUEPRINT.bmp',
    icon: RetroIcons.FileImage,
    type: 'paint',
    size: '48 KB'
  },
  {
    id: 'doc4',
    name: 'PROJECT_OMEGA_SUMMARY.txt',
    icon: RetroIcons.FileText,
    type: 'notepad',
    size: '3 KB',
    content: `PROJECT OMEGA SPECIFICATION
Classification: TOP SECRET
Hardware: Dual Pentium II 450 MHz, 128 MB SDRAM, Windows 98 Second Edition Build 2222A.
Primary Objective: Sub-atomic computational simulation.
Outcome: Abandoned indefinitely.`
  }
];

export default function MyDocumentsApp({ onOpenFile }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleItemClick = (item) => {
    soundEffects.playClick();
    setSelectedId(item.id);
  };

  const handleItemDoubleClick = (item) => {
    soundEffects.playClick();
    if (item.type === 'notepad') {
      onOpenFile && onOpenFile('notepad', { title: item.name, content: item.content });
    } else if (item.type === 'paint') {
      onOpenFile && onOpenFile('paint');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item">File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
        <div className="win98-menu-item">Help</div>
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
            fontFamily: 'var(--win-font)'
          }}
        >
          C:\My Documents
        </div>
      </div>

      {/* Documents Grid */}
      <div
        className="win98-content"
        style={{
          flex: 1,
          padding: '12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: '16px',
          alignContent: 'flex-start',
          backgroundColor: '#ffffff'
        }}
        onClick={() => setSelectedId(null)}
      >
        {DOCS.map((doc) => {
          const Icon = doc.icon;
          const isSelected = selectedId === doc.id;
          return (
            <div
              key={doc.id}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(doc);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                handleItemDoubleClick(doc);
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
                  outline: isSelected ? '1px dotted #ffffff' : 'none',
                  wordBreak: 'break-word',
                  lineHeight: '1.2'
                }}
              >
                {doc.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {DOCS.length} object(s)
        </div>
        <div className="win98-status-section" style={{ width: '120px' }}>
          54.0 KB
        </div>
      </div>
    </div>
  );
}
