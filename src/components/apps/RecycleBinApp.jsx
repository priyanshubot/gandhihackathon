import React, { useState } from 'react';
import { RetroIcons } from '../RetroIcons';
import { soundEffects } from '../../utils/soundEffects';

const INITIAL_TRASH = [
  {
    id: 'trash1',
    name: 'Draft_Lyrics_O_O_Jaane_Jaana_1997.txt',
    icon: RetroIcons.FileText,
    originalLoc: 'C:\\My Documents\\Film Projects',
    dateDeleted: '04/18/1998 02:15 AM',
    size: '1 KB',
    content: `[ROUGH SONG NOTES - SOHAIL & JATIN-LALIT]
SONG: O O Jaane Jaana
SINGER: Kamaal Khan
FILM: Pyaar Kiya To Darna Kya (1998)

"I told Sohail: I won't wear any shirt in this song. Just torn jeans, boots, and the electric guitar.
Let's make it a high-energy anthem for the youth.
Chorus: O O Jaane Jaana, Dhoonde Tujhe Deewana..."`
  },
  {
    id: 'trash2',
    name: 'Old_Phone_Directory_1995.txt',
    icon: RetroIcons.FileText,
    originalLoc: 'C:\\My Documents\\Personal',
    dateDeleted: '09/01/1999 11:40 PM',
    size: '2 KB',
    content: `[OLD BANDRA LANDLINE DIRECTORY - 1995]
- Salim Khan Saab Study: 022-2642xxxx
- Mehboob Studio Reception: 022-2642xxxx
- Film City Goregaon Gate: 022-2840xxxx
- Bandra Gymkhana Desk: 022-2640xxxx
- Sajid Nadiadwala Office: 022-2634xxxx`
  },
  {
    id: 'trash3',
    name: 'Deleted_Rough_Script_2001.txt',
    icon: RetroIcons.FileText,
    originalLoc: 'C:\\My Documents\\Film Projects',
    dateDeleted: '07/11/2001 04:30 PM',
    size: '2 KB',
    content: `[SCRAPPED SCENE DRAFT - CHORI CHORI CHUPKE CHUPKE]
Raj Malhotra dialogue revision:
"Family comes first, no matter what sacrifices have to be made."`
  }
];

export default function RecycleBinApp({ onOpenFile }) {
  const [items, setItems] = useState(INITIAL_TRASH);
  const [selectedId, setSelectedId] = useState(null);

  const handleEmptyBin = () => {
    soundEffects.playClick();
    if (items.length === 0) return;
    if (confirm('Are you sure you want to permanently delete these 2 items?')) {
      soundEffects.playClick();
      setItems([]);
      setSelectedId(null);
    }
  };

  const handleItemClick = (item) => {
    soundEffects.playClick();
    setSelectedId(item.id);
  };

  const handleItemDoubleClick = (item) => {
    soundEffects.playClick();
    onOpenFile && onOpenFile('notepad', { title: item.name, content: item.content });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#c0c0c0' }}>
      {/* Menu Bar */}
      <div className="win98-menubar">
        <div className="win98-menu-item" onClick={handleEmptyBin}>
          Empty Recycle Bin
        </div>
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
          Recycle Bin
        </div>
      </div>

      {/* Items Details List View (Classic Windows 98 Details table) */}
      <div className="win98-content" style={{ flex: 1, backgroundColor: '#ffffff' }}>
        {items.length === 0 ? (
          <div style={{ padding: '24px', textAlign: 'center', color: '#808080' }}>
            Recycle Bin is empty.
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px', fontFamily: 'var(--win-font)' }}>
            <thead>
              <tr style={{ backgroundColor: '#c0c0c0', borderBottom: '1px solid #808080' }}>
                <th style={{ textAlign: 'left', padding: '3px 6px', borderRight: '1px solid #dfdfdf', fontWeight: 'normal' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '3px 6px', borderRight: '1px solid #dfdfdf', fontWeight: 'normal' }}>Original Location</th>
                <th style={{ textAlign: 'left', padding: '3px 6px', borderRight: '1px solid #dfdfdf', fontWeight: 'normal' }}>Date Deleted</th>
                <th style={{ textAlign: 'left', padding: '3px 6px', fontWeight: 'normal' }}>Size</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <tr
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    onDoubleClick={() => handleItemDoubleClick(item)}
                    style={{
                      backgroundColor: isSelected ? 'var(--win-blue-start)' : 'transparent',
                      color: isSelected ? '#ffffff' : '#000000',
                      cursor: 'default'
                    }}
                  >
                    <td style={{ padding: '3px 6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <RetroIcons.FileText size={16} />
                      <span>{item.name}</span>
                    </td>
                    <td style={{ padding: '3px 6px' }}>{item.originalLoc}</td>
                    <td style={{ padding: '3px 6px' }}>{item.dateDeleted}</td>
                    <td style={{ padding: '3px 6px' }}>{item.size}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Status Bar */}
      <div className="win98-statusbar">
        <div className="win98-status-section" style={{ flex: 1 }}>
          {items.length} object(s)
        </div>
        <div className="win98-status-section" style={{ width: '100px' }}>
          {items.length > 0 ? '3.0 KB' : '0 bytes'}
        </div>
      </div>
    </div>
  );
}
