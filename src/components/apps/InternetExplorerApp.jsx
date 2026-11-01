import React, { useState } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const SITES = {
  'http://www.abandoned-net.org/vault': {
    title: 'The Abandoned Computer - Project Omega Archive',
    render: () => (
      <div style={{ backgroundColor: '#000000', color: '#00ff66', fontFamily: '"Courier New", monospace', padding: '16px', minHeight: '100%' }}>
        <div style={{ textAlign: 'center', borderBottom: '2px dashed #00aa44', paddingBottom: '12px' }}>
          <h1 style={{ color: '#ff3333', fontSize: '20px', margin: '0 0 6px 0', textShadow: '0 0 4px #ff0000' }}>
            *** PROJECT OMEGA // ARCHIVAL MIRROR ***
          </h1>
          <marquee scrollamount="4" style={{ color: '#ffff00', background: '#330000', padding: '3px', fontWeight: 'bold' }}>
            WARNING: FACILITY EVACUATION IN PROGRESS — DO NOT CUT BACKUP GENERATOR POWER — NOVEMBER 1998
          </marquee>
        </div>

        <div style={{ marginTop: '16px', lineHeight: '1.5' }}>
          <p style={{ color: '#ffffff' }}>
            Welcome to the local intranet terminal mirror. You are logged into Terminal ID: <strong>98-B (SUBLEVEL 3)</strong>.
          </p>

          <div style={{ background: '#002200', border: '1px solid #00aa44', padding: '10px', margin: '12px 0' }}>
            <h3 style={{ color: '#ffff33', margin: '0 0 8px 0', fontSize: '13px' }}>[INCIDENT SUMMARY #4092]</h3>
            <p>At 02:40 AM, an anomaly occurred in Sector 7 research core. All personnel were ordered to leave terminals active for telemetry broadcast.</p>
            <p>If you are an investigator exploring this terminal: check <strong>My Documents</strong> for the encrypted research logs, and check the <strong>Recycle Bin</strong> for the override keys.</p>
          </div>

          <h3 style={{ color: '#33ccff', borderBottom: '1px solid #006699', paddingBottom: '4px' }}>LOGGED MESSAGES:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li><span style={{ color: '#ff8888' }}>[02:51 AM]</span> Dr. Vance: "The magnetic containment is failing. Leaving the machine on."</li>
            <li><span style={{ color: '#ff8888' }}>[03:02 AM]</span> Security: "All elevators shut down. Use emergency stairwell B."</li>
            <li><span style={{ color: '#ff8888' }}>[03:14 AM]</span> System: "Automated archive cycle engaged."</li>
          </ul>

          <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #333', paddingTop: '10px' }}>
            <p style={{ color: '#888888', fontSize: '10px' }}>
              VISITOR COUNTER: <span style={{ background: '#222', color: '#ff0000', padding: '2px 6px', border: '1px solid #555' }}>004,821</span>
            </p>
            <p style={{ color: '#666', fontSize: '10px' }}>
              Best viewed with Internet Explorer 4.0 or higher @ 800x600 resolution.
            </p>
          </div>
        </div>
      </div>
    )
  },
  'http://www.altavista.digital.com': {
    title: 'AltaVista: The Search Engine',
    render: () => (
      <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '16px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ color: '#000080', fontSize: '26px', margin: '0' }}>AltaVista<span style={{ color: '#ff0000', fontSize: '14px' }}>™</span></h2>
          <p style={{ color: '#555', fontSize: '11px' }}>Search the Web with the original fast search!</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '16px' }}>
          <input
            type="text"
            defaultValue="omega project hackathon 1998"
            style={{ width: '260px', padding: '3px', border: '1px solid #000' }}
          />
          <button className="win98-btn">Search</button>
          <button className="win98-btn">Surprise Me</button>
        </div>

        <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', fontSize: '11px' }}>
          <p><strong>Search Results:</strong> 3 matches found for "omega project 1998"</p>
          <div style={{ margin: '8px 0' }}>
            <a href="#vault" style={{ color: '#0000cc', textDecoration: 'underline' }}>Project Omega Sublevel Terminal Archives</a>
            <p style={{ margin: '2px 0', color: '#333' }}>Emergency intranet portal left operational following the 1998 incident.</p>
            <span style={{ color: '#008000', fontSize: '10px' }}>http://www.abandoned-net.org/vault - 14k - 24 Oct 1998</span>
          </div>
        </div>
      </div>
    )
  },
  'http://www.geocities.com/area51/underground': {
    title: 'GeoCities: Area51 - The Underground Truth',
    render: () => (
      <div style={{ backgroundColor: '#000033', color: '#ffff00', padding: '16px', fontFamily: '"Comic Sans MS", sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#ff00ff' }}>★ WELCOME TO MY TRUTH PAGE ★</h2>
        <p style={{ textAlign: 'center', color: '#00ffff' }}>You have reached Sector 51 - Abandoned Technology Division</p>
        <hr style={{ borderColor: '#ff00ff' }} />
        <p>They told us the 1998 facility was demolished. But the servers are still humming somewhere in the mountains.</p>
        <p>Listen closely to the desktop sounds... the machine remembers.</p>
      </div>
    )
  }
};

export default function InternetExplorerApp() {
  const [url, setUrl] = useState('http://www.abandoned-net.org/vault');
  const [history, setHistory] = useState(['http://www.abandoned-net.org/vault']);
  const [historyIndex, setHistoryIndex] = useState(0);

  const navigateTo = (targetUrl) => {
    soundEffects.playClick();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(targetUrl);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setUrl(targetUrl);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      soundEffects.playClick();
      setHistoryIndex(historyIndex - 1);
      setUrl(history[historyIndex - 1]);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      soundEffects.playClick();
      setHistoryIndex(historyIndex + 1);
      setUrl(history[historyIndex + 1]);
    }
  };

  const currentSite = SITES[url];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item">File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
        <div className="win98-menu-item">Go</div>
        <div className="win98-menu-item">Favorites</div>
        <div className="win98-menu-item">Help</div>
      </div>

      {/* Navigation Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 4px',
          borderBottom: '1px solid #808080'
        }}
      >
        <button
          type="button"
          className="win98-btn"
          disabled={historyIndex === 0}
          onClick={handleBack}
          style={{ opacity: historyIndex === 0 ? 0.5 : 1 }}
        >
          ⬅ Back
        </button>
        <button
          type="button"
          className="win98-btn"
          disabled={historyIndex >= history.length - 1}
          onClick={handleForward}
          style={{ opacity: historyIndex >= history.length - 1 ? 0.5 : 1 }}
        >
          Forward ➡
        </button>
        <button type="button" className="win98-btn" onClick={() => soundEffects.playClick()}>
          ⏹ Stop
        </button>
        <button type="button" className="win98-btn" onClick={() => soundEffects.playClick()}>
          🔄 Refresh
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={() => navigateTo('http://www.abandoned-net.org/vault')}
        >
          🏠 Home
        </button>
        <button
          type="button"
          className="win98-btn"
          onClick={() => navigateTo('http://www.altavista.digital.com')}
        >
          🔍 Search
        </button>

        <div style={{ flex: 1 }} />

        {/* Animated Windows Globe Icon in top right */}
        <div
          className="win98-inset"
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
          }}
        >
          🌐
        </div>
      </div>

      {/* Address Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '3px 6px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#c0c0c0'
        }}
      >
        <span style={{ fontSize: '11px', color: '#000' }}>Address</span>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigateTo(url);
          }}
          style={{
            flex: 1,
            height: '20px',
            border: '1px solid #808080',
            borderTopColor: '#000',
            borderLeftColor: '#000',
            padding: '2px 4px',
            fontFamily: 'var(--win-font)',
            fontSize: '11px',
            outline: 'none'
          }}
        />
        <button type="button" className="win98-btn" onClick={() => navigateTo(url)}>
          Go
        </button>
      </div>

      {/* Links Bar / Quick Bookmarks */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '2px 6px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#dfdfdf',
          fontSize: '10px'
        }}
      >
        <span style={{ color: '#666' }}>Links:</span>
        <span
          style={{ cursor: 'pointer', color: '#000080', textDecoration: 'underline' }}
          onClick={() => navigateTo('http://www.abandoned-net.org/vault')}
        >
          Project Omega Vault
        </span>
        <span
          style={{ cursor: 'pointer', color: '#000080', textDecoration: 'underline' }}
          onClick={() => navigateTo('http://www.altavista.digital.com')}
        >
          AltaVista
        </span>
        <span
          style={{ cursor: 'pointer', color: '#000080', textDecoration: 'underline' }}
          onClick={() => navigateTo('http://www.geocities.com/area51/underground')}
        >
          GeoCities Area51
        </span>
      </div>

      {/* Web Content Render Area */}
      <div className="win98-content" style={{ flex: 1, overflow: 'auto', backgroundColor: '#ffffff' }}>
        {currentSite ? (
          currentSite.render()
        ) : (
          <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#000080' }}>Internet Explorer cannot display the webpage</h2>
            <p>The page <strong>{url}</strong> is currently unreachable or offline.</p>
            <p>Most likely causes:</p>
            <ul>
              <li>The computer is offline or dial-up modem disconnected.</li>
              <li>The remote server host was abandoned in 1998.</li>
            </ul>
            <button
              className="win98-btn"
              onClick={() => navigateTo('http://www.abandoned-net.org/vault')}
              style={{ marginTop: '12px' }}
            >
              Return to Project Omega Intranet
            </button>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          Done
        </div>
        <div className="win98-status-section" style={{ width: '120px' }}>
          Internet zone
        </div>
      </div>
    </div>
  );
}
