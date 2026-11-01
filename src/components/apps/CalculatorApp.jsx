import React, { useState } from 'react';
import { playClickSound } from '@/sounds';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [memory, setMemory] = useState(0);

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
    } else if (operator) {
      const current = prevValue || 0;
      let result = 0;
      switch (operator) {
        case '+':
          result = current + inputValue;
          break;
        case '-':
          result = current - inputValue;
          break;
        case '*':
          result = current * inputValue;
          break;
        case '/':
          result = inputValue === 0 ? 'Error' : current / inputValue;
          break;
        default:
          result = inputValue;
      }
      setDisplay(String(result));
      setPrevValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOp);
  };

  const handleEqual = () => {
    playClickSound();
    if (!operator || prevValue === null) return;
    const inputValue = parseFloat(display);
    let result = 0;
    switch (operator) {
      case '+':
        result = prevValue + inputValue;
        break;
      case '-':
        result = prevValue - inputValue;
        break;
      case '*':
        result = prevValue * inputValue;
        break;
      case '/':
        result = inputValue === 0 ? 'Cannot divide by zero' : prevValue / inputValue;
        break;
      default:
        result = inputValue;
    }
    setDisplay(String(result));
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(true);
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

  return (
    <div style={{ backgroundColor: '#c0c0c0', padding: '6px', userSelect: 'none', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        <button type="button" className="win98-btn" style={{ flex: 2, fontWeight: 'bold', color: '#800000' }} onClick={handleEqual}>=</button>
      </div>
    </div>
  );
}
