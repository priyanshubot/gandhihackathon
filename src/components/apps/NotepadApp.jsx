import React, { useState } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const INITIAL_TEXT = `[CONFIDENTIAL MEMO - TERMINAL 98-B]
STATION: OMEGA FACILITY - SUBLEVEL 3
DATE: OCTOBER 24, 1998  03:14 AM
USER: DR. A. VANCE

If you are reading this, the emergency evacuation protocol was initiated.
We had to abandon the lab in haste when the primary cooling failed.

STATUS REPORT:
- Local drives (C:) are encrypted under emergency lockdown.
- Critical recovery codes are in the Recycle Bin.
- Do not attempt to run external dial-up connections.
- The project documentation in My Documents contains the final coordinates.

"Some secrets were meant to remain in 1998."

[END OF LOG]`;

export default function NotepadApp({ initialContent, fileName = 'CONFIDENTIAL.TXT' }) {
  const [content, setContent] = useState(initialContent || INITIAL_TEXT);
  const [currentFile, setCurrentFile] = useState(fileName);
  const [lineCol, setLineCol] = useState({ line: 1, col: 1 });

  const handleTextChange = (e) => {
    setContent(e.target.value);
    updateCursor(e);
  };

  const updateCursor = (e) => {
    const textBefore = e.target.value.substring(0, e.target.selectionStart);
    const lines = textBefore.split('\n');
    setLineCol({
      line: lines.length,
      col: lines[lines.length - 1].length + 1
    });
  };

  const handleNew = () => {
    soundEffects.playClick();
    if (confirm('Save changes to document?')) {
      handleSave();
    }
    setContent('');
    setCurrentFile('Untitled.txt');
  };

  const handleSave = () => {
    soundEffects.playClick();
    alert(`File saved as "${currentFile}" to Virtual RAM Drive.`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item" onClick={handleNew}>File</div>
        <div className="win98-menu-item" onClick={() => soundEffects.playClick()}>Edit</div>
        <div className="win98-menu-item" onClick={() => soundEffects.playClick()}>Search</div>
        <div className="win98-menu-item" onClick={() => soundEffects.playClick()}>Help</div>
      </div>

      {/* Editor Content */}
      <div className="win98-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <textarea
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            resize: 'none',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '12px',
            lineHeight: '1.4',
            padding: '6px',
            backgroundColor: '#ffffff',
            color: '#000000',
            whiteSpace: 'pre',
            overflow: 'auto'
          }}
          value={content}
          onChange={handleTextChange}
          onKeyUp={updateCursor}
          onClick={updateCursor}
          spellCheck={false}
        />
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          File: {currentFile}
        </div>
        <div className="win98-status-section" style={{ width: '90px' }}>
          Ln {lineCol.line}, Col {lineCol.col}
        </div>
        <div className="win98-status-section" style={{ width: '60px' }}>
          ANSI
        </div>
      </div>
    </div>
  );
}
