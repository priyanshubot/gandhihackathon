import React, { useState, useRef, useEffect } from 'react';
import { playClickSound, playErrorSound } from '@/sounds';

export default function DosPromptApp({ onClose }) {
  const [history, setHistory] = useState([
    'Microsoft(R) Windows 98',
    '   (C)Copyright Microsoft Corp 1981-1998.',
    '',
    'C:\\SALLU>type GALAXY_README.TXT',
    'Salman Khan Personal Computer - Bandra Residence (1995-2003)',
    'Type "HELP" or "DIR" for available MS-DOS commands.',
    ''
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim();
      playClickSound();
      const newHistory = [...history, `C:\\SALLU>${inputVal}`];

      const lower = cmd.toLowerCase();
      if (lower === 'cls') {
        setHistory([]);
      } else if (lower === 'ver') {
        newHistory.push('Windows 98 [Version 4.10.2222 A]');
        setHistory(newHistory);
      } else if (lower === 'dir') {
        newHistory.push(
          ' Volume in drive C is SALLU_DRIVE',
          ' Volume Serial Number is 1999-2002',
          ' Directory of C:\\SALLU',
          '',
          '04-11-2002  04:20p      <DIR>          .',
          '04-11-2002  04:20p      <DIR>          ..',
          '12-08-1999  10:14a             142,884 HDDCS_STILLS.BMP',
          '02-14-2001  09:30p              28,400 ASH_LETTERS.TXT',
          '09-28-2002  03:15a              12,940 LEGAL_NOTES.WPD',
          '05-10-2003  11:55a              64,120 TERE_NAAM_SCRIPT.DOC',
          '               4 File(s)        248,344 bytes',
          '               2 Dir(s)   1,420,950,528 bytes free'
        );
        setHistory(newHistory);
      } else if (lower === 'bhai' || lower === 'salman') {
        newHistory.push(
          'SALMAN KHAN (Born Dec 27, 1965)',
          'Residence: Galaxy Apartments, Bandra (West), Mumbai',
          'Motto: "Zindagi mein teen cheezein kabhi underestimate mat karna..."'
        );
        setHistory(newHistory);
      } else if (lower === 'exit') {
        onClose && onClose();
        return;
      } else if (lower === 'help') {
        newHistory.push(
          'Available commands:',
          '  DIR     - Lists files in current directory',
          '  VER     - Displays Windows 98 version',
          '  CLS     - Clears the terminal screen',
          '  BHAI    - Displays biographical notes',
          '  DATE    - Shows system timestamp (Nov 2002)',
          '  EXIT    - Closes MS-DOS Prompt window'
        );
        setHistory(newHistory);
      } else if (lower === 'date') {
        newHistory.push('Current date is Mon 11-04-2002');
        setHistory(newHistory);
      } else if (cmd) {
        playErrorSound();
        newHistory.push(`Bad command or file name: "${cmd}"`);
        setHistory(newHistory);
      }

      setInputVal('');
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#000000',
        color: '#c0c0c0',
        fontFamily: 'Consolas, "Courier New", monospace',
        fontSize: '12px',
        height: '100%',
        padding: '8px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.3'
      }}
      onClick={() => document.getElementById('dos-input')?.focus()}
    >
      {history.map((line, idx) => (
        <div key={idx} style={{ whiteSpace: 'pre-wrap' }}>
          {line}
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#ffffff', marginRight: '6px' }}>C:\SALLU&gt;</span>
        <input
          id="dos-input"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#00ff00',
            fontFamily: 'Consolas, "Courier New", monospace',
            fontSize: '12px',
            flex: 1
          }}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
