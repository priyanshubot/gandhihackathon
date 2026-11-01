import React, { useState, useEffect, useRef } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const ROWS = 9;
const COLS = 9;
const MINES = 10;

// Number colors in classic Windows 98 Minesweeper
const NUMBER_COLORS = [
  '',
  '#0000ff', // 1: Blue
  '#008000', // 2: Green
  '#ff0000', // 3: Red
  '#000080', // 4: Dark Blue
  '#800000', // 5: Maroon
  '#008080', // 6: Teal
  '#000000', // 7: Black
  '#808080'  // 8: Gray
];

export default function MinesweeperApp() {
  const [board, setBoard] = useState([]);
  const [gameState, setGameState] = useState('idle'); // idle, playing, won, lost
  const [minesLeft, setMinesLeft] = useState(MINES);
  const [time, setTime] = useState(0);
  const [isFaceSurprised, setIsFaceSurprised] = useState(false);
  const timerRef = useRef(null);

  // Initialize board
  const initializeBoard = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setMinesLeft(MINES);
    setGameState('idle');

    let newBoard = [];
    for (let r = 0; r < ROWS; r++) {
      let row = [];
      for (let c = 0; c < COLS; c++) {
        row.push({
          row: r,
          col: c,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0
        });
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
  };

  useEffect(() => {
    initializeBoard();
    return () => clearInterval(timerRef.current);
  }, []);

  // Plant mines after first click so user never dies on first move
  const plantMines = (firstRow, firstCol, currentBoard) => {
    let placed = 0;
    while (placed < MINES) {
      let r = Math.floor(Math.random() * ROWS);
      let c = Math.floor(Math.random() * COLS);
      if (!currentBoard[r][c].isMine && !(r === firstRow && c === firstCol)) {
        currentBoard[r][c].isMine = true;
        placed++;
      }
    }

    // Calculate adjacent mine counts
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!currentBoard[r][c].isMine) {
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              let nr = r + dr;
              let nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && currentBoard[nr][nc].isMine) {
                count++;
              }
            }
          }
          currentBoard[r][c].adjacentMines = count;
        }
      }
    }
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTime((t) => Math.min(999, t + 1));
    }, 1000);
  };

  // Reveal cell
  const revealCell = (r, c) => {
    if (gameState === 'lost' || gameState === 'won') return;

    let newBoard = board.map(row => row.map(cell => ({ ...cell })));
    let cell = newBoard[r][c];

    if (cell.isRevealed || cell.isFlagged) return;

    if (gameState === 'idle') {
      plantMines(r, c, newBoard);
      setGameState('playing');
      startTimer();
    }

    if (cell.isMine) {
      // Game Over
      clearInterval(timerRef.current);
      setGameState('lost');
      soundEffects.playExplosion();
      // Reveal all mines
      newBoard.forEach(row => {
        row.forEach(c => {
          if (c.isMine) c.isRevealed = true;
        });
      });
      setBoard(newBoard);
      return;
    }

    soundEffects.playClick();

    // Flood fill empty cells
    const queue = [[r, c]];
    cell.isRevealed = true;

    while (queue.length > 0) {
      const [currR, currC] = queue.shift();
      const currCell = newBoard[currR][currC];

      if (currCell.adjacentMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            let nr = currR + dr;
            let nc = currC + dc;
            if (
              nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS &&
              !newBoard[nr][nc].isRevealed && !newBoard[nr][nc].isFlagged && !newBoard[nr][nc].isMine
            ) {
              newBoard[nr][nc].isRevealed = true;
              queue.push([nr, nc]);
            }
          }
        }
      }
    }

    // Check Win
    let unrevealedSafeCells = 0;
    newBoard.forEach(row => {
      row.forEach(c => {
        if (!c.isMine && !c.isRevealed) unrevealedSafeCells++;
      });
    });

    if (unrevealedSafeCells === 0) {
      clearInterval(timerRef.current);
      setGameState('won');
      setMinesLeft(0);
      soundEffects.playWin();
    }

    setBoard(newBoard);
  };

  // Flag cell
  const toggleFlag = (e, r, c) => {
    e.preventDefault();
    if (gameState === 'lost' || gameState === 'won') return;

    let newBoard = board.map(row => row.map(cell => ({ ...cell })));
    let cell = newBoard[r][c];

    if (cell.isRevealed) return;

    soundEffects.playClick();
    if (cell.isFlagged) {
      cell.isFlagged = false;
      setMinesLeft(m => m + 1);
    } else {
      cell.isFlagged = true;
      setMinesLeft(m => m - 1);
    }

    setBoard(newBoard);
  };

  const getSmiley = () => {
    if (gameState === 'lost') return '😵';
    if (gameState === 'won') return '😎';
    if (isFaceSurprised) return '😮';
    return '🙂';
  };

  const formatDigits = (num) => {
    const clamped = Math.max(-99, Math.min(999, num));
    if (clamped < 0) {
      return `-${String(Math.abs(clamped)).padStart(2, '0')}`;
    }
    return String(clamped).padStart(3, '0');
  };

  return (
    <div style={{ padding: '6px', backgroundColor: '#c0c0c0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Top Bar with LED Displays and Smiley */}
      <div
        className="win98-inset"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4px 6px',
          marginBottom: '6px',
          backgroundColor: '#c0c0c0'
        }}
      >
        {/* Mines Left LED */}
        <div
          style={{
            backgroundColor: '#000000',
            color: '#ff0000',
            fontFamily: '"VT323", "Courier New", monospace',
            fontSize: '22px',
            lineHeight: '1',
            padding: '2px 4px',
            border: '1px solid #808080',
            letterSpacing: '2px'
          }}
        >
          {formatDigits(minesLeft)}
        </div>

        {/* Smiley Reset Button */}
        <button
          type="button"
          className="win98-btn"
          style={{
            width: '26px',
            height: '26px',
            fontSize: '16px',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => {
            soundEffects.playClick();
            initializeBoard();
          }}
        >
          {getSmiley()}
        </button>

        {/* Timer LED */}
        <div
          style={{
            backgroundColor: '#000000',
            color: '#ff0000',
            fontFamily: '"VT323", "Courier New", monospace',
            fontSize: '22px',
            lineHeight: '1',
            padding: '2px 4px',
            border: '1px solid #808080',
            letterSpacing: '2px'
          }}
        >
          {formatDigits(time)}
        </div>
      </div>

      {/* Minesweeper Grid */}
      <div
        className="win98-inset"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 20px)`,
          gridTemplateRows: `repeat(${ROWS}, 20px)`,
          gap: '0px',
          backgroundColor: '#808080',
          padding: '2px'
        }}
        onMouseDown={() => gameState === 'playing' && setIsFaceSurprised(true)}
        onMouseUp={() => setIsFaceSurprised(false)}
      >
        {board.map((row, r) =>
          row.map((cell, c) => {
            const isRevealed = cell.isRevealed;
            return (
              <div
                key={`${r}-${c}`}
                onClick={() => revealCell(r, c)}
                onContextMenu={(e) => toggleFlag(e, r, c)}
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  fontFamily: 'sans-serif',
                  cursor: 'default',
                  userSelect: 'none',
                  backgroundColor: '#c0c0c0',
                  borderTop: isRevealed ? '1px solid #808080' : '2px solid #ffffff',
                  borderLeft: isRevealed ? '1px solid #808080' : '2px solid #ffffff',
                  borderRight: isRevealed ? 'none' : '2px solid #808080',
                  borderBottom: isRevealed ? 'none' : '2px solid #808080',
                  color: cell.isMine ? '#000000' : NUMBER_COLORS[cell.adjacentMines]
                }}
              >
                {cell.isFlagged && !isRevealed && '🚩'}
                {isRevealed && cell.isMine && '💣'}
                {isRevealed && !cell.isMine && cell.adjacentMines > 0 && cell.adjacentMines}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
