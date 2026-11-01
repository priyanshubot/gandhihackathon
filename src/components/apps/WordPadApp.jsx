import React, { useState } from 'react';
import { playClickSound } from '@/sounds';

const SAMPLE_WORDPAD_DOC = `TERE NAAM (2003) - CLIMAX DRAFT SCENE
Working Title: Radhe Mohan Climax Sequence
Author: Salman Khan (Personal Working Copy)
Date: October 2002

SCENE 84. EXT. ASYLUM GATE / RAILWAY TRACKS - DAY

RADHE (Salman Khan) stands in the dust, chains dragging on the dry gravel. His eyes are hollow, bruised by loss. 

Nirjara's memory echoes across the empty railway junction. 

RADHE
(Voice breaking)
"Pyaar karne ki bhi ek hadd hoti hai... Lekin jab hadd paar ho jaaye, tab sirf dukh bachta hai."

He turns slowly toward the asylum van. As the doors shut, Radhe looks out of the barred window one final time toward Mumbai. 

[DIRECTOR'S NOTE: Keep Himesh's "Kyun Kisi Ko" theme running on acoustic sitar and strings. No dialogue during the final 30 seconds.]`;

export default function WordPadApp() {
  const [content, setContent] = useState(SAMPLE_WORDPAD_DOC);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  return (
    <div style={{ backgroundColor: '#c0c0c0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item" onClick={playClickSound}>File</div>
        <div className="win98-menu-item" onClick={playClickSound}>Edit</div>
        <div className="win98-menu-item" onClick={playClickSound}>View</div>
        <div className="win98-menu-item" onClick={playClickSound}>Insert</div>
        <div className="win98-menu-item" onClick={playClickSound}>Format</div>
        <div className="win98-menu-item" onClick={playClickSound}>Help</div>
      </div>

      {/* Formatting Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 6px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#c0c0c0'
        }}
      >
        <select
          style={{ fontSize: '11px', fontFamily: 'var(--win-font)', height: '20px' }}
          onChange={playClickSound}
        >
          <option>Times New Roman</option>
          <option>MS Sans Serif</option>
          <option>Courier New</option>
          <option>Arial</option>
        </select>

        <select
          style={{ fontSize: '11px', fontFamily: 'var(--win-font)', height: '20px', width: '45px' }}
          onChange={playClickSound}
        >
          <option>10</option>
          <option>12</option>
          <option>14</option>
          <option>18</option>
        </select>

        <div style={{ width: '1px', height: '16px', backgroundColor: '#808080', margin: '0 2px' }} />

        <button
          type="button"
          className={`win98-btn ${isBold ? 'active' : ''}`}
          style={{ fontWeight: 'bold', width: '24px' }}
          onClick={() => {
            playClickSound();
            setIsBold(!isBold);
          }}
        >
          B
        </button>
        <button
          type="button"
          className={`win98-btn ${isItalic ? 'active' : ''}`}
          style={{ fontStyle: 'italic', width: '24px' }}
          onClick={() => {
            playClickSound();
            setIsItalic(!isItalic);
          }}
        >
          I
        </button>
        <button
          type="button"
          className="win98-btn"
          style={{ textDecoration: 'underline', width: '24px' }}
          onClick={playClickSound}
        >
          U
        </button>

        <div style={{ flex: 1 }} />
        <span style={{ fontSize: '10px', color: '#555' }}>
          TERE_NAAM_CLIMAX_DRAFT.DOC
        </span>
      </div>

      {/* Document Editor Area */}
      <div style={{ flex: 1, padding: '12px', backgroundColor: '#808080', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="win98-inset"
          style={{
            width: '100%',
            maxWidth: '560px',
            height: '100%',
            minHeight: '260px',
            backgroundColor: '#ffffff',
            padding: '16px',
            fontSize: '12px',
            fontFamily: isItalic ? 'serif' : 'Times New Roman, serif',
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            lineHeight: '1.45',
            resize: 'none',
            outline: 'none',
            border: 'none',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
          }}
        />
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          For Help, press F1
        </div>
        <div className="win98-status-section" style={{ width: '80px' }}>
          CAPS
        </div>
        <div className="win98-status-section" style={{ width: '80px' }}>
          NUM
        </div>
      </div>
    </div>
  );
}
