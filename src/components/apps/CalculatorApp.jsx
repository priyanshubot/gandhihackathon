import React, { useState, useEffect } from 'react';
import { playClickSound, playOpenSound } from '@/sounds';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleDigit = (digit) => {
    playClickSound();
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const handleDecimal = () => {
    playClickSound();
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    playClickSound();
    setDisplay('0');
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleClearEntry = () => {
    playClickSound();
    setDisplay('0');
  };

  const handleBackspace = () => {
    playClickSound();
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleOperator = (nextOp) => {
    playClickSound();
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    }

    setWaitingForOperand(true);
    setOperator(nextOp);
  };

  // Easter Egg: Pressing '=' never displays calculation result, always triggers the 6-7 GIF popup
  const handleEqual = () => {
    playClickSound();
    playOpenSound();
    setShowEasterEgg(true);
  };

  const handleCloseEasterEgg = () => {
    playClickSound();
    setShowEasterEgg(false);
  };

  const handleSign = () => {
    playClickSound();
    const val = parseFloat(display);
    setDisplay(String(-val));
  };

  const handleSqrt = () => {
    playClickSound();
    const val = parseFloat(display);
    setDisplay(String(Math.sqrt(val)));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showEasterEgg) {
        if (e.key === 'Enter' || e.key === 'Escape') {
          handleCloseEasterEgg();
        }
        return;
      }
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(parseInt(e.key, 10));
      } else if (e.key === '.') {
        handleDecimal();
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        handleOperator(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleEqual();
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEasterEgg, display, prevValue, operator, waitingForOperand]);

  return (
    <div style={{ backgroundColor: '#c0c0c0', padding: '6px', userSelect: 'none', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Menu Bar */}
      <div className="win98-menubar" style={{ margin: '-6px -6px 6px -6px' }}>
        <div className="win98-menu-item" onClick={playClickSound}>Edit</div>
        <div className="win98-menu-item" onClick={playClickSound}>View</div>
        <div className="win98-menu-item" onClick={playClickSound}>Help</div>
      </div>

      {/* LCD Display */}
      <div
        className="win98-inset"
        style={{
          backgroundColor: '#ffffff',
          padding: '4px 8px',
          textAlign: 'right',
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          marginBottom: '8px',
          minHeight: '26px',
          overflow: 'hidden'
        }}
      >
        {display}
      </div>

      {/* Top action row */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
        <div className="win98-inset" style={{ width: '28px', backgroundColor: '#c0c0c0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#666' }}>
          {memory !== 0 ? 'M' : ''}
        </div>
        <button type="button" className="win98-btn" style={{ flex: 1, fontSize: '11px', color: '#800000' }} onClick={handleBackspace}>
          Backspace
        </button>
        <button type="button" className="win98-btn" style={{ flex: 1, fontSize: '11px', color: '#800000' }} onClick={handleClearEntry}>
          CE
        </button>
        <button type="button" className="win98-btn" style={{ flex: 1, fontSize: '11px', color: '#800000' }} onClick={handleClear}>
          C
        </button>
      </div>

      {/* Keypad Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', flex: 1 }}>
        {/* Row 1 */}
        <button type="button" className="win98-btn" style={{ color: '#800000', fontSize: '11px' }} onClick={() => { playClickSound(); setMemory(0); }}>MC</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(7)}>7</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(8)}>8</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(9)}>9</button>
        <button type="button" className="win98-btn" style={{ color: '#800000', fontWeight: 'bold' }} onClick={() => handleOperator('/')}>/</button>

        {/* Row 2 */}
        <button type="button" className="win98-btn" style={{ color: '#800000', fontSize: '11px' }} onClick={() => { playClickSound(); setDisplay(String(memory)); }}>MR</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(4)}>4</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(5)}>5</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(6)}>6</button>
        <button type="button" className="win98-btn" style={{ color: '#800000', fontWeight: 'bold' }} onClick={() => handleOperator('*')}>*</button>

        {/* Row 3 */}
        <button type="button" className="win98-btn" style={{ color: '#800000', fontSize: '11px' }} onClick={() => { playClickSound(); setMemory(parseFloat(display)); }}>MS</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(1)}>1</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(2)}>2</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(3)}>3</button>
        <button type="button" className="win98-btn" style={{ color: '#800000', fontWeight: 'bold' }} onClick={() => handleOperator('-')}>-</button>

        {/* Row 4 */}
        <button type="button" className="win98-btn" style={{ color: '#800000', fontSize: '11px' }} onClick={() => { playClickSound(); setMemory(m => m + parseFloat(display)); }}>M+</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={() => handleDigit(0)}>0</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={handleSign}>+/-</button>
        <button type="button" className="win98-btn" style={{ color: '#000080', fontWeight: 'bold' }} onClick={handleDecimal}>.</button>
        <button type="button" className="win98-btn" style={{ color: '#800000', fontWeight: 'bold' }} onClick={() => handleOperator('+')}>+</button>
      </div>

      <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
        <button type="button" className="win98-btn" style={{ flex: 1, fontSize: '11px', color: '#000080' }} onClick={handleSqrt}>sqrt</button>
        <button
          type="button"
          className="win98-btn"
          style={{ flex: 2, fontWeight: 'bold', color: '#800000' }}
          onClick={handleEqual}
          title="Calculate (=)"
        >
          =
        </button>
      </div>

      {/* Windows 98 6-7 Easter Egg Popup */}
      {showEasterEgg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={handleCloseEasterEgg}
        >
          <div
            className="win98-window"
            style={{
              width: '380px',
              maxWidth: '92vw',
              backgroundColor: '#c0c0c0',
              boxShadow: '3px 3px 12px rgba(0,0,0,0.5)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Bar */}
            <div className="win98-titlebar">
              <div className="win98-titlebar-text">
                <span>Calculator.exe</span>
              </div>
              <div className="win98-window-controls">
                <button
                  type="button"
                  className="win98-control-btn close"
                  onClick={handleCloseEasterEgg}
                  title="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Dialog Body */}
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#c0c0c0'
              }}
            >
              {/* Message Header */}
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 'bold',
                  fontFamily: 'var(--win-font)',
                  color: '#000080',
                  textAlign: 'center',
                  letterSpacing: '0.5px'
                }}
              >
                THE ANSWER IS ALWAYS 6-7
              </div>

              {/* Centered 6-7 GIF */}
              <div
                className="win98-inset"
                style={{
                  backgroundColor: '#000000',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '200px',
                  maxHeight: '280px',
                  width: '100%',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/assets/67.gif"
                  alt="6-7 Easter Egg"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.fallback) {
                      e.currentTarget.dataset.fallback = 'true';
                      e.currentTarget.src = '/assets/gif/67.gif';
                    }
                  }}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '260px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              {/* OK Button */}
              <button
                type="button"
                className="win98-btn"
                style={{ minWidth: '80px', fontWeight: 'bold', marginTop: '4px' }}
                onClick={handleCloseEasterEgg}
                autoFocus
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
