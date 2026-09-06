import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SEARCH_ITEMS = [
  { id: 'home', title: 'Home / Main Expedition', category: 'Page', path: '/', keywords: 'home hero bsides dharamshala cybersecurity' },
  { id: 'team', title: 'BSides Dharamshala Team', category: 'Page', path: '/overview/team', keywords: 'team core members organizers founders volunteers' },
  { id: 'coc', title: 'Code of Conduct', category: 'Page', path: '/overview/code-of-conduct', keywords: 'rules behavior policy conduct harassment safety' },
  { id: 'sponsors', title: 'Sponsors & Partners', category: 'Page', path: '/conference/sponsors', keywords: 'sponsors gold platinum silver bronze partners sponsorship' },
  { id: 'cfp', title: 'Call for Papers (CFP)', category: 'Conference', path: '/conference/call-for-papers', keywords: 'cfp speaker submit talk presentation papers paper' },
  { id: 'cfv', title: 'Call for Volunteers (CFV)', category: 'Conference', path: '/conference/call-for-volunteers', keywords: 'cfv volunteer help staff organization join' },
  { id: 'contact', title: 'Contact Us & Dharamshala Live Weather', category: 'Page', path: '/contact', keywords: 'contact touch email dharamshala weather live snow temperature' },
  { id: 'about', title: 'About BSides Dharamshala', category: 'Section', path: '/#about', keywords: 'about mission history cybersecurity conference' },
  { id: 'ctf', title: 'Capture The Flag (CTF) Challenge', category: 'Event', path: '/#ctf', keywords: 'ctf flag challenge hacking competition puzzle' },
  { id: 'schedule', title: 'Conference Schedule', category: 'Event', path: '/#schedule', keywords: 'schedule agenda timeline tracks keynote talks' }
];

export default function CommandPaletteModal({ isOpen, onClose, onOpenRegister }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const filteredItems = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (item) => {
    onClose();
    if (item.path.startsWith('/#')) {
      const targetId = item.path.replace('/#', '');
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      navigate(item.path);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette-card" onClick={(e) => e.stopPropagation()}>
        {/* INPUT BAR */}
        <div className="palette-input-bar">
          <span className="palette-search-icon">🔍</span>
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type to search pages, speakers, schedule, CTF... (Press ESC to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <span className="palette-badge-kbd">ESC</span>
        </div>

        {/* RESULTS LIST */}
        <div className="palette-results">
          {filteredItems.length === 0 ? (
            <div className="palette-no-results">No matching results found for "{query}"</div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`palette-item ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="palette-item-left">
                  <span className="palette-item-cat">{item.category}</span>
                  <span className="palette-item-title">{item.title}</span>
                </div>
                <span className="palette-item-arrow">↵</span>
              </div>
            ))
          )}
        </div>

        {/* FOOTER HINTS */}
        <div className="palette-footer">
          <span>Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
          <span><kbd>ENTER</kbd> to select</span>
          <span><kbd>ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
