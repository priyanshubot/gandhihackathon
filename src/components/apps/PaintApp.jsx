import React, { useRef, useState, useEffect } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const PALETTE = [
  '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
  '#808040', '#004040', '#0080ff', '#004080', '#8000ff', '#804000',
  '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff',
  '#ffff80', '#00ff80', '#80ffff', '#7f7fff', '#ff0080', '#ff8040'
];

export default function PaintApp() {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('pencil'); // pencil, brush, eraser, fill, rect
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(2);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    // Fill with white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initial sketch: "OMEGA LAB - 1998" blueprint / retro smiley
    ctx.fillStyle = '#000080';
    ctx.font = 'bold 12px "Courier New"';
    ctx.fillText('FACILITY BLUEPRINT // 1998', 15, 25);
    ctx.strokeStyle = '#c0c0c0';
    ctx.lineWidth = 1;
    ctx.strokeRect(15, 35, 120, 80);
    ctx.fillStyle = '#ff0000';
    ctx.fillText('[RESTRICTED AREA]', 20, 60);
  }, []);

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.floor(e.clientX - rect.left),
      y: Math.floor(e.clientY - rect.top)
    };
  };

  const handlePointerDown = (e) => {
    const { x, y } = getCanvasCoords(e);
    isDrawingRef.current = true;
    lastPosRef.current = { x, y };

    const ctx = canvasRef.current.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (tool === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.fillStyle = '#ffffff';
      ctx.lineWidth = brushSize * 4;
    } else if (tool === 'brush') {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = brushSize * 3;
    } else if (tool === 'pencil') {
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1;
    } else if (tool === 'fill') {
      // Clear or flood fill canvas with current color
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      soundEffects.playClick();
      return;
    }

    ctx.beginPath();
    ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const handlePointerMove = (e) => {
    const { x, y } = getCanvasCoords(e);
    setCoords({ x, y });

    if (!isDrawingRef.current) return;
    const ctx = canvasRef.current.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPosRef.current = { x, y };
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
  };

  const clearCanvas = () => {
    soundEffects.playClick();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item" onClick={clearCanvas}>File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
        <div className="win98-menu-item">Image</div>
        <div className="win98-menu-item">Colors</div>
        <div className="win98-menu-item">Help</div>
      </div>

      {/* Main Workspace: Left Tool Toolbar + Canvas Area */}
      <div style={{ display: 'flex', flex: 1, padding: '3px', gap: '3px', overflow: 'hidden' }}>
        {/* Left Toolbar */}
        <div
          className="win98-inset"
          style={{
            width: '56px',
            backgroundColor: '#c0c0c0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3px',
            gap: '3px'
          }}
        >
          {/* Tool Buttons Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 22px)', gap: '2px' }}>
            <button
              type="button"
              className={`win98-btn ${tool === 'pencil' ? 'pressed' : ''}`}
              style={{ width: '22px', height: '22px', padding: 0 }}
              onClick={() => { soundEffects.playClick(); setTool('pencil'); }}
              title="Pencil"
            >
              ✏️
            </button>
            <button
              type="button"
              className={`win98-btn ${tool === 'brush' ? 'pressed' : ''}`}
              style={{ width: '22px', height: '22px', padding: 0 }}
              onClick={() => { soundEffects.playClick(); setTool('brush'); }}
              title="Brush"
            >
              🖌️
            </button>
            <button
              type="button"
              className={`win98-btn ${tool === 'eraser' ? 'pressed' : ''}`}
              style={{ width: '22px', height: '22px', padding: 0 }}
              onClick={() => { soundEffects.playClick(); setTool('eraser'); }}
              title="Eraser"
            >
              🧽
            </button>
            <button
              type="button"
              className={`win98-btn ${tool === 'fill' ? 'pressed' : ''}`}
              style={{ width: '22px', height: '22px', padding: 0 }}
              onClick={() => { soundEffects.playClick(); setTool('fill'); }}
              title="Fill Bucket"
            >
              🪣
            </button>
          </div>

          <div style={{ width: '100%', height: '1px', background: '#808080', margin: '4px 0' }} />

          {/* Line Width / Size Selector */}
          <div
            className="win98-inset"
            style={{ width: '46px', padding: '3px', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}
          >
            {[1, 2, 4, 6].map((s) => (
              <div
                key={s}
                onClick={() => setBrushSize(s)}
                style={{
                  width: '36px',
                  height: `${s * 2 + 2}px`,
                  backgroundColor: brushSize === s ? '#000080' : '#000000',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          <button
            type="button"
            className="win98-btn"
            style={{ marginTop: 'auto', fontSize: '9px', padding: '2px 4px' }}
            onClick={clearCanvas}
          >
            Clear
          </button>
        </div>

        {/* Canvas Area with scroll */}
        <div
          className="win98-inset"
          style={{
            flex: 1,
            backgroundColor: '#808080',
            overflow: 'auto',
            display: 'flex',
            padding: '4px'
          }}
        >
          <canvas
            ref={canvasRef}
            width={480}
            height={320}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{
              backgroundColor: '#ffffff',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.4)',
              cursor: tool === 'eraser' ? 'cell' : 'crosshair'
            }}
          />
        </div>
      </div>

      {/* Color Palette at Bottom */}
      <div
        className="win98-inset"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 6px',
          backgroundColor: '#c0c0c0',
          margin: '0 3px 3px 3px'
        }}
      >
        {/* Active Color Preview Box */}
        <div
          className="win98-inset"
          style={{ width: '30px', height: '30px', position: 'relative', backgroundColor: '#c0c0c0' }}
        >
          <div
            style={{
              position: 'absolute',
              top: '4px',
              left: '4px',
              width: '14px',
              height: '14px',
              backgroundColor: color,
              border: '1px solid #000000',
              zIndex: 2
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              width: '14px',
              height: '14px',
              backgroundColor: '#ffffff',
              border: '1px solid #000000',
              zIndex: 1
            }}
          />
        </div>

        {/* 28-Color Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: 'repeat(2, 12px)',
            gridTemplateColumns: 'repeat(14, 12px)',
            gap: '1px'
          }}
        >
          {PALETTE.map((c, i) => (
            <div
              key={i}
              onClick={() => {
                soundEffects.playClick();
                setColor(c);
              }}
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: c,
                border: color === c ? '2px solid #000080' : '1px solid #808080',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          For Help, click Help Topics on the Help Menu.
        </div>
        <div className="win98-status-section" style={{ width: '100px' }}>
          {coords.x}, {coords.y} px
        </div>
      </div>
    </div>
  );
}
