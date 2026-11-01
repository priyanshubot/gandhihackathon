import React, { useState } from 'react';
import { soundEffects } from '../../utils/soundEffects';
import { IE_SEEDED_HISTORY, IE_BOOKMARKS } from '../../data/salluBhaiData';

const SEARCH_RESULTS = {
  'Salman Khan Aishwarya Rai relationship': {
    source: 'GENUINE HISTORICAL RECORDS & MEDIA CHRONOLOGY',
    title: 'Rediff Search: Salman Khan Aishwarya Rai relationship',
    results: [
      {
        title: 'Hum Dil De Chuke Sanam: The Beginning of an Epic Collaboration (June 1999)',
        url: 'http://www.rediff.com/movies/1999/jun/18hddcs.htm',
        date: '18 June 1999',
        snippet: 'Sanjay Leela Bhansali brings together Salman Khan and Aishwarya Rai in a lavish musical spectacle across Rajasthan and Europe. The film won 5 Filmfare Awards and widespread commercial acclaim.'
      },
      {
        title: 'Aishwarya Rai Issues Public Statement Confirming Separation (September 2002)',
        url: 'http://www.timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/2002/sep/aish_statement.htm',
        date: '27 September 2002',
        snippet: 'In a formal two-page press release, Aishwarya Rai confirmed that she has permanently parted ways with Salman Khan, stating she will not be working with him on any future cinema projects.'
      },
      {
        title: 'Salman Khan on Past Chapters: "I Wish Her Every Happiness and Success" (November 2002)',
        url: 'http://www.filmfare.indiatimes.com/features/salman_interview_nov2002.htm',
        date: '10 November 2002',
        snippet: 'In an exclusive conversation from Galaxy Apartments, Salman Khan requested the media to respect boundaries, expressing only positive wishes for his former co-star.'
      }
    ]
  },
  'Aishwarya Rai photographs 2002': {
    source: 'GENUINE HISTORICAL MEDIA ARCHIVE',
    title: 'Rediff Search: Aishwarya Rai photographs 2002',
    results: [
      {
        title: 'Cannes Film Festival 2002 Gallery: Aishwarya Rai & Shah Rukh Khan',
        url: 'http://www.filmfare.indiatimes.com/gallery/cannes2002_devdas.htm',
        date: '23 May 2002',
        snippet: 'Photographs of Aishwarya Rai wearing a golden Neeta Lulla saree at the Palais des Festivals for the world premiere of Sanjay Leela Bhansali\'s \'Devdas\'.'
      },
      {
        title: 'Time Magazine Global Feature: The Faces of Asian Cinema',
        url: 'http://www.time.com/time/magazine/asia/2002/aishwarya_profile.htm',
        date: '15 August 2002',
        snippet: 'Time covers the global rise of former Miss World Aishwarya Rai as Indian cinema expands its international distribution footprint.'
      }
    ]
  },
  'Salman Khan Somy Ali': {
    source: 'GENUINE HISTORICAL RECORDS & MEDIA ARCHIVE',
    title: 'Rediff Search: Salman Khan Somy Ali',
    results: [
      {
        title: 'Somy Ali Returns to United States After Eight-Year Bollywood Stint (1999)',
        url: 'http://www.stardust-india.com/archive/1999/somy_farewell.htm',
        date: '14 April 1999',
        snippet: 'After dating Salman Khan from 1991 to early 1999, Somy Ali has relocated to Florida to pursue university degrees in psychology and broadcast journalism. Both families remain on respectful terms.'
      },
      {
        title: 'Remembering \'Buland\': The Unreleased Salman-Somy 1990s Action Feature',
        url: 'http://www.indiafm.com/features/unreleased_classics_buland.htm',
        date: '02 March 2001',
        snippet: 'A look back at the partially shot 1993 thriller filmed in Kathmandu and Mumbai.'
      }
    ]
  },
  'Salman Khan Sangeeta Bijlani': {
    source: 'GENUINE HISTORICAL RECORDS & MEDIA ARCHIVE',
    title: 'Rediff Search: Salman Khan Sangeeta Bijlani',
    results: [
      {
        title: 'Sangeeta Bijlani: Miss India 1980 and the Long Courtship (1986–1994)',
        url: 'http://www.filmfare.indiatimes.com/retrospective/sangeeta_salman.htm',
        date: '19 November 1998',
        snippet: 'Retrospective on Bollywood\'s prominent 1980s romance, the planned May 1994 nuptials, and their transition into enduring family friends following her marriage to cricketer Azharuddin in 1996.'
      }
    ]
  },
  'Salman Khan blackbuck case 1998': {
    source: 'GENUINE LEGAL CASE PUBLIC RECORD',
    title: 'Rediff Search: Salman Khan blackbuck case 1998',
    results: [
      {
        title: 'State of Rajasthan vs. Salman Khan & Others: October 1998 Incident Summary',
        url: 'http://www.rajasthanjudiciary.gov.in/archives/case206_1998.htm',
        date: '05 October 1998',
        snippet: 'FIR registered under Sections 9, 39, 51, 52 of Wildlife (Protection) Act, 1972 at Luni Police Station, Jodhpur district. Investigation ongoing regarding alleged poaching during \'Hum Saath-Saath Hain\' shoot.'
      },
      {
        title: 'Jodhpur Sessions Court Grants Bail to Bollywood Stars (October 1998)',
        url: 'http://www.timesofindia.indiatimes.com/1998/oct/17/jodhpur_bail_order.htm',
        date: '17 October 1998',
        snippet: 'The Sessions Judge, Jodhpur, admitted the accused persons to regular bail on personal bonds and sureties. Regular trial proceedings scheduled for 2000–2003.'
      }
    ]
  },
  'Jodhpur blackbuck incident news': {
    source: 'GENUINE HISTORICAL RECORDS',
    title: 'Rediff Search: Jodhpur blackbuck incident news',
    results: [
      {
        title: 'Bishnoi Community\'s Historical Role in Rajasthan Wildlife Conservation',
        url: 'http://www.rediff.com/news/1998/oct/06bishnoi.htm',
        date: '06 October 1998',
        snippet: 'An in-depth report on the 500-year-old ecological tenets of Guru Jambheshwar and the Bishnoi community\'s legendary dedication to protecting blackbucks and Khejri trees.'
      }
    ]
  },
  'Salman Khan court case updates': {
    source: 'GENUINE LEGAL CHRONOLOGY (AS OF DEC 2003)',
    title: 'Rediff Search: Salman Khan court case updates',
    results: [
      {
        title: 'Jodhpur Court Records Witness Testimonies in Arms & Wildlife Act Trial (2003)',
        url: 'http://www.thehindu.com/2003/11/04/jodhpur_trial_update.htm',
        date: '04 November 2003',
        snippet: 'Trial continues before the Chief Judicial Magistrate, Jodhpur. Defence counsel cross-examines forest rangers on evidence storage seals. Next hearing scheduled for January 2004.'
      }
    ]
  },
  'Best criminal lawyers in India': {
    source: 'LEGAL DIRECTORY ARCHIVE (2000–2003)',
    title: 'Rediff Search: Best criminal lawyers in India',
    results: [
      {
        title: 'Prominent Senior Advocates of Supreme Court & Bombay High Court (2003 Edition)',
        url: 'http://www.barcouncilofindia.org/directories/senior_advocates_2003.htm',
        date: '12 January 2003',
        snippet: 'Directory of notable senior criminal appellate counsels including Ram Jethmalani, Ashok Mundargi, Hastimal Saraswat (Rajasthan), and Dipesh Mehta.'
      }
    ]
  },
  'Famous lawyers in Rajasthan': {
    source: 'LEGAL DIRECTORY ARCHIVE (2000–2003)',
    title: 'Rediff Search: Famous lawyers in Rajasthan',
    results: [
      {
        title: 'Rajasthan High Court Bar Association: Jodhpur Principal Seat Advocates',
        url: 'http://www.rajasthanhighcourt.nic.in/bar/jodhpur_members.htm',
        date: '18 August 2002',
        snippet: 'Roster of senior criminal trial counsels practicing at the Principal Seat in Jodhpur and Sessions Courts.'
      }
    ]
  },
  'Bollywood gossip 2002': {
    source: 'FILM JOURNALISM ARCHIVE (2002)',
    title: 'Rediff Search: Bollywood gossip 2002',
    results: [
      {
        title: 'Filmfare Gossip Column: Stars on the Move (July 2002)',
        url: 'http://www.filmfare.indiatimes.com/scoops/july2002.htm',
        date: '20 July 2002',
        snippet: 'Salman Khan spotted training late at night at Gold\'s Gym Bandra. Sanjay Leela Bhansali announces new historical projects. Shah Rukh Khan celebrates Devdas triumph.'
      }
    ]
  },
  'Salman Khan upcoming movies': {
    source: 'BOX OFFICE INDIA ARCHIVE (LATE 2003)',
    title: 'Rediff Search: Salman Khan upcoming movies',
    results: [
      {
        title: 'Trade Preview 2004: David Dhawan\'s \'Mujhse Shaadi Karogi\' Sets Summer Date',
        url: 'http://www.boxofficeindia.com/previews/2004/mujhse_shaadi_karogi.htm',
        date: '02 December 2003',
        snippet: 'Sajid Nadiadwala produces high-budget comedy starring Salman Khan, Akshay Kumar, and Priyanka Chopra. Music by Sajid-Wajid.'
      },
      {
        title: 'Puneet Issar\'s Cop Drama \'Garv\' Completes Post-Production (Expected Mid-2004)',
        url: 'http://www.indiafm.com/news/2003/garv_wrap.htm',
        date: '19 November 2003',
        snippet: 'Salman steps into the boots of ACP Arjun Ranawat alongside Shilpa Shetty and Arbaaz Khan.'
      }
    ]
  },
  'Hum Saath Saath Hain news': {
    source: 'FILM ARCHIVE 1999',
    title: 'Rediff Search: Hum Saath Saath Hain news',
    results: [
      {
        title: 'Rajshri Productions Celebrates Golden Jubilee Run of \'Hum Saath-Saath Hain\'',
        url: 'http://www.indiafm.com/boxoffice/1999/hssh_50days.htm',
        date: '28 December 1999',
        snippet: 'Sooraj Barjatya\'s family saga emerges as one of the top earners of 1999, playing to packed family audiences across multiplexes and single screens.'
      }
    ]
  }
};

export default function InternetExplorerApp() {
  const [url, setUrl] = useState('http://www.indiafm.com/archive/2003');
  const [historyList, setHistoryList] = useState(['http://www.indiafm.com/archive/2003']);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [showHistoryPanel, setShowHistoryPanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (newUrl) => {
    soundEffects.playClick();
    const updated = historyList.slice(0, historyIdx + 1);
    updated.push(newUrl);
    setHistoryList(updated);
    setHistoryIdx(updated.length - 1);
    setUrl(newUrl);
    setShowHistoryPanel(false);
  };

  const handleBack = () => {
    if (historyIdx > 0) {
      soundEffects.playClick();
      setHistoryIdx(historyIdx - 1);
      setUrl(historyList[historyIdx - 1]);
    }
  };

  const handleForward = () => {
    if (historyIdx < historyList.length - 1) {
      soundEffects.playClick();
      setHistoryIdx(historyIdx + 1);
      setUrl(historyList[historyIdx + 1]);
    }
  };

  const handleExecuteSearch = (query) => {
    soundEffects.playClick();
    const targetQuery = query || searchQuery || 'Salman Khan upcoming movies';
    navigateTo(`search://rediff.com?q=${encodeURIComponent(targetQuery)}`);
  };

  // Helper to render current web page
  const renderWebContent = () => {
    // 1. Search Result Pages
    if (url.startsWith('search://')) {
      const match = url.match(/q=([^&]+)/);
      const decoded = match ? decodeURIComponent(match[1]) : '';
      const resultData = SEARCH_RESULTS[decoded] || {
        source: 'HISTORICAL ARCHIVE SEARCH',
        title: `Search: ${decoded}`,
        results: [
          {
            title: `Archives on "${decoded}" (1995–2003)`,
            url: `http://www.rediff.com/news/archive/${encodeURIComponent(decoded)}.htm`,
            date: 'Dec 2003',
            snippet: `Historical records from 1995–2003 regarding ${decoded}. Detailed case documents and interviews accessible in My Documents folder.`
          }
        ]
      };

      return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '16px', fontFamily: 'Arial, sans-serif' }}>
          {/* Rediff Vintage Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #cc0000', paddingBottom: '8px', marginBottom: '12px' }}>
            <div>
              <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#cc0000' }}>rediff</span>
              <span style={{ fontSize: '22px', color: '#000000' }}>.com</span>
              <span style={{ fontSize: '11px', color: '#666', marginLeft: '10px' }}>Search Results (Year 2003 Archive)</span>
            </div>
            <span style={{ fontSize: '10px', backgroundColor: '#eef', color: '#000080', padding: '2px 6px', border: '1px solid #99c' }}>
              {resultData.source}
            </span>
          </div>

          <div style={{ fontSize: '12px', color: '#333', marginBottom: '12px' }}>
            Results for: <strong>"{decoded}"</strong>
          </div>

          {/* Search Result Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {resultData.results.map((res, i) => (
              <div key={i} style={{ borderBottom: '1px dotted #ccc', paddingBottom: '8px' }}>
                <a
                  href={`#${res.url}`}
                  onClick={(e) => {
                    e.preventDefault();
                    soundEffects.playClick();
                    alert(`Navigating to archive: ${res.url}`);
                  }}
                  style={{ fontSize: '13px', color: '#0000cc', textDecoration: 'underline', fontWeight: 'bold' }}
                >
                  {res.title}
                </a>
                <p style={{ margin: '4px 0', fontSize: '11px', color: '#333', lineHeight: '1.4' }}>
                  {res.snippet}
                </p>
                <div style={{ fontSize: '10px', color: '#008000' }}>
                  {res.url} &bull; <span>{res.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Seeded Searches Footer */}
          <div style={{ marginTop: '24px', backgroundColor: '#f5f5f5', border: '1px solid #ddd', padding: '10px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '11px', marginBottom: '6px', color: '#444' }}>
              Seeded Searches in Browser Memory:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {IE_SEEDED_HISTORY.map((q) => (
                <button
                  key={q}
                  type="button"
                  className="win98-btn"
                  style={{ fontSize: '10px' }}
                  onClick={() => handleExecuteSearch(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // 2. Secret Easter Egg: Bhai Personal Vault
    if (url.includes('bhai-personal-vault.internal')) {
      return (
        <div style={{ backgroundColor: '#000022', color: '#00ffaa', fontFamily: '"Courier New", monospace', padding: '16px', minHeight: '100%' }}>
          <div style={{ textAlign: 'center', borderBottom: '2px solid #00aa77', paddingBottom: '10px' }}>
            <h2 style={{ color: '#ffcc00', margin: '0 0 4px 0', fontSize: '18px' }}>
              [CONFIDENTIAL INTERNAL MEMORY // GALAXY VAULT]
            </h2>
            <div style={{ color: '#ffffff', fontSize: '11px' }}>
              TERMINAL ID: SALMAN_KHAN_DESK_BANDRA // SYSTEM YEAR: 2003
            </div>
          </div>

          <div style={{ margin: '16px 0', lineHeight: '1.5', fontSize: '12px' }}>
            <p style={{ color: '#ffff33' }}>
              ★ EASTER EGG UNLOCKED: "IMPORTANT" BOOKMARK ENTRY
            </p>
            <p>
              "They called this machine 'The Abandoned Computer' because in late 2003, when shoots shifted to Mauritius for Mujhse Shaadi Karogi, the hard drive stayed on my desk at Galaxy Apartments with all my 90s memories, court notes, gym routines, and unsent drafts."
            </p>
            <div style={{ backgroundColor: '#001a1a', border: '1px dashed #00ffaa', padding: '10px', margin: '12px 0' }}>
              <div style={{ color: '#ff9900', fontWeight: 'bold' }}>HINT FOR ENCRYPTED ARCHIVE:</div>
              <p style={{ margin: '4px 0 0 0', color: '#ffffff' }}>
                Check <code>C:\My Documents\Downloads\secret_archive_2003.zip</code>. The password is the character name that started it all in Maine Pyar Kiya: <strong>prem</strong>.
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 3. IndiaFM / Bollywood Portal 2003
    if (url.includes('indiafm.com')) {
      return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000', padding: '14px', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ borderBottom: '2px solid #e02020', paddingBottom: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{ color: '#e02020', margin: 0, fontSize: '24px', letterSpacing: '-0.5px' }}>
              IndiaFM<span style={{ color: '#000', fontSize: '14px' }}>.com</span>
            </h1>
            <span style={{ fontSize: '11px', color: '#666' }}>Bollywood\'s Premiere Online Destination (Dec 2003)</span>
          </div>

          <div style={{ backgroundColor: '#fff8f0', border: '1px solid #ffd0a0', padding: '10px', marginBottom: '14px' }}>
            <h3 style={{ margin: '0 0 6px 0', color: '#b01010', fontSize: '14px' }}>
              FLASH REPORT: 'TERE NAAM' COMPLETES 100 DAYS IN SINGLE SCREENS
            </h3>
            <p style={{ margin: 0, fontSize: '11px', lineHeight: '1.4' }}>
              Satish Kaushik\'s tragic romantic drama starring Salman Khan has completed a monumental 100-day run in northern circuits. The soundtrack by Himesh Reshammiya remains the top-selling audio cassette of 2003 across Mumbai and Delhi.
            </p>
          </div>

          <h3 style={{ fontSize: '12px', borderBottom: '1px solid #ccc', paddingBottom: '4px', color: '#000080' }}>
            TOP BOLLYWOOD DISPATCHES (1995–2003):
          </h3>
          <ul style={{ fontSize: '11px', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>
              <a href="#search" onClick={() => handleExecuteSearch('Salman Khan upcoming movies')} style={{ color: '#0000cc' }}>
                Preview 2004: David Dhawan pairs Salman and Akshay Kumar in 'Mujhse Shaadi Karogi'
              </a>
            </li>
            <li>
              <a href="#search" onClick={() => handleExecuteSearch('Salman Khan blackbuck case 1998')} style={{ color: '#0000cc' }}>
                Legal Updates: Jodhpur Sessions Court trial witness cross-examinations proceed
              </a>
            </li>
            <li>
              <a href="#search" onClick={() => handleExecuteSearch('Aishwarya Rai photographs 2002')} style={{ color: '#0000cc' }}>
                Aishwarya Rai Cannes 2002 retrospective: Global recognition for Sanjay Leela Bhansali's 'Devdas'
              </a>
            </li>
          </ul>
        </div>
      );
    }

    // 4. Default / Other URL Fallback
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff' }}>
        <h3 style={{ color: '#000080' }}>Historical Page Archive</h3>
        <p style={{ fontSize: '12px' }}>URL: <code>{url}</code></p>
        <p style={{ fontSize: '11px', color: '#555' }}>
          This page represents an authentic archival record from Salman Khan\'s 1995–2003 personal computer.
        </p>
        <button
          type="button"
          className="win98-btn"
          onClick={() => navigateTo('http://www.indiafm.com/archive/2003')}
        >
          Return to IndiaFM 2003 Portal
        </button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item">File</div>
        <div className="win98-menu-item">Edit</div>
        <div className="win98-menu-item">View</div>
        <div className="win98-menu-item">Favorites</div>
        <div
          className={`win98-menu-item ${showHistoryPanel ? 'active' : ''}`}
          onClick={() => setShowHistoryPanel(!showHistoryPanel)}
        >
          History
        </div>
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
          disabled={historyIdx === 0}
          onClick={handleBack}
          style={{ opacity: historyIdx === 0 ? 0.5 : 1 }}
        >
          ⬅ Back
        </button>
        <button
          type="button"
          className="win98-btn"
          disabled={historyIdx >= historyList.length - 1}
          onClick={handleForward}
          style={{ opacity: historyIdx >= historyList.length - 1 ? 0.5 : 1 }}
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
          onClick={() => navigateTo('http://www.indiafm.com/archive/2003')}
        >
          🏠 Home
        </button>
        <button
          type="button"
          className={`win98-btn ${showHistoryPanel ? 'pressed' : ''}`}
          onClick={() => setShowHistoryPanel(!showHistoryPanel)}
        >
          📜 History ({IE_SEEDED_HISTORY.length})
        </button>

        <div style={{ flex: 1 }} />

        {/* Animated Windows Globe */}
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

      {/* Bookmarks Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '2px 6px',
          borderBottom: '1px solid #808080',
          backgroundColor: '#dfdfdf',
          fontSize: '10px',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        <span style={{ color: '#666', fontWeight: 'bold' }}>Bookmarks:</span>
        {IE_BOOKMARKS.map((bm) => (
          <span
            key={bm.title}
            onClick={() => navigateTo(bm.url)}
            style={{
              cursor: 'pointer',
              color: bm.title === 'IMPORTANT' ? '#cc0000' : '#000080',
              fontWeight: bm.title === 'IMPORTANT' ? 'bold' : 'normal',
              textDecoration: 'underline'
            }}
          >
            {bm.title}
          </span>
        ))}
      </div>

      {/* Main Area: Optional History Sidebar + Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Seeded History Panel */}
        {showHistoryPanel && (
          <div
            className="win98-inset"
            style={{
              width: '240px',
              backgroundColor: '#c0c0c0',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #808080', paddingBottom: '3px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '11px' }}>Seeded History (1995–2003)</span>
              <span
                style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '10px' }}
                onClick={() => setShowHistoryPanel(false)}
              >
                ✕
              </span>
            </div>

            <div style={{ fontSize: '10px', color: '#444', marginBottom: '4px' }}>
              Click any search query to load historical results:
            </div>

            {IE_SEEDED_HISTORY.map((query, idx) => (
              <div
                key={idx}
                onClick={() => handleExecuteSearch(query)}
                style={{
                  fontSize: '11px',
                  padding: '3px 4px',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                  border: '1px solid #999',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
                title={query}
              >
                🔍 {query}
              </div>
            ))}
          </div>
        )}

        {/* Web Render Content */}
        <div className="win98-content" style={{ flex: 1, overflow: 'auto', backgroundColor: '#ffffff' }}>
          {renderWebContent()}
        </div>
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          Done
        </div>
        <div className="win98-status-section" style={{ width: '140px' }}>
          Zone: Bollywood Archive (2003)
        </div>
      </div>
    </div>
  );
}
