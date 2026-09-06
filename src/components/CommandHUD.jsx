import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CommandHUD({ onOpenRegister, onTogglePalette, onToggleWeather, onToggleRadar, onToggleCTF, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || document.activeElement.isContentEditable) {
        return;
      }

      const key = e.key ? e.key.toLowerCase() : '';
      const code = e.code ? e.code.toLowerCase() : '';

      if (e.shiftKey && (key === 'h' || code === 'keyh')) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="command-hud-overlay" onClick={() => setIsOpen(false)}>
      <div className="command-hud-card" onClick={(e) => e.stopPropagation()}>
        {/* HUD HEADER */}
        <div className="command-hud-header">
          <div className="command-hud-title">
            <span className="hud-icon">⌨️</span>
            <span>BSIDES DHARAMSHALA // TACTICAL COMMAND GUIDE</span>
          </div>
          <button
            className="command-hud-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close Command Guide"
          >
            ✕
          </button>
        </div>

        {/* HUD BODY */}
        <div className="command-hud-body">
          <div className="command-hud-subtitle">
            Active System Key Combos & Tactical Shortcuts:
          </div>

          <div className="command-list">
            {/* 1. SEARCH */}
            <div className="command-item" onClick={() => { setIsOpen(false); onTogglePalette?.(); }}>
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>K</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Command Palette & Search</span>
                <span className="desc-sub">Spotlight-style search bar for pages, speakers, schedule & team.</span>
              </div>
            </div>

            {/* 2. WEATHER HUD */}
            <div className="command-item" onClick={() => { setIsOpen(false); onToggleWeather?.(); }}>
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>W</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Weather & Altitude HUD</span>
                <span className="desc-sub">Live Dharamshala temperature, humidity, wind & mountain trail status.</span>
              </div>
            </div>

            {/* 3. VENUE RADAR */}
            <div className="command-item" onClick={() => { setIsOpen(false); onToggleRadar?.(); }}>
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>M</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Venue Expedition Radar</span>
                <span className="desc-sub">Tactical GPS coordinates & transit guide for McLeod Ganj, Dharamshala.</span>
              </div>
            </div>

            {/* 4. THEME CUSTOMIZER */}
            <div className="command-item" onClick={() => { setIsOpen(false); onToggleTheme?.(); }}>
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>D</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Custom Theme Engine</span>
                <span className="desc-sub">Color picker & preset tactical color palettes.</span>
              </div>
            </div>

            {/* 5. READER MODE */}
            <div className="command-item">
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>B</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Reader / High-Legibility Mode</span>
                <span className="desc-sub">Enlarges fonts & increases contrast for high legibility.</span>
              </div>
            </div>

            {/* 6. LOW POWER MODE */}
            <div className="command-item">
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>G</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Low Power / Reduced Motion</span>
                <span className="desc-sub">Pauses background particle canvas animations to save battery.</span>
              </div>
            </div>

            {/* 7. REGISTER */}
            <div className="command-item" onClick={() => { setIsOpen(false); onOpenRegister?.(); }}>
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>R</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Instant Registration Form</span>
                <span className="desc-sub">Opens the BSides Dharamshala registration modal popup.</span>
              </div>
            </div>

            {/* 8. NAVBAR LOCK */}
            <div className="command-item">
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>A</kbd> + <kbd>S</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Toggle & Lock Navbar</span>
                <span className="desc-sub">Hides navbar and locks it in hidden state until combo is repressed.</span>
              </div>
            </div>

            {/* 9. CTF CHALLENGE */}
            <div className="command-item" onClick={() => { setIsOpen(false); onToggleCTF?.(); }}>
              <div className="command-keys">
                <kbd>SHIFT</kbd> + <kbd>F</kbd> + <kbd>L</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Secret CTF Challenge</span>
                <span className="desc-sub">Interactive Base64 cipher puzzle for cybersecurity attendees.</span>
              </div>
            </div>

            {/* 10. KONAMI CODE */}
            <div className="command-item">
              <div className="command-keys">
                <kbd>↑</kbd> <kbd>↑</kbd> <kbd>↓</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>B</kbd> <kbd>A</kbd>
              </div>
              <div className="command-desc">
                <span className="desc-title">Konami Matrix Mode</span>
                <span className="desc-sub">Runs Matrix rain in background & sets theme to Black/Green. (Shift+E to exit)</span>
              </div>
            </div>
          </div>
        </div>

        {/* HUD FOOTER */}
        <div className="command-hud-footer">
          <span>PRESS <kbd>ESC</kbd> OR <kbd>SHIFT+H</kbd> TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
