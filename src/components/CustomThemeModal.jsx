import React, { useState, useEffect } from 'react';

const PRESET_THEMES = [
  { name: 'Crimson Red (Default)', color: '#FF1638', hover: '#FF304F', glow: 'rgba(255, 22, 56, 0.4)', rgb: '255, 22, 56' },
  { name: 'Matrix Cyber Green', color: '#00FF41', hover: '#33FF66', glow: 'rgba(0, 255, 65, 0.4)', rgb: '0, 255, 65' },
  { name: 'Cyberpunk Neon Cyan', color: '#00F0FF', hover: '#33F3FF', glow: 'rgba(0, 240, 255, 0.4)', rgb: '0, 240, 255' },
  { name: 'Synthetic Violet', color: '#B026FF', hover: '#C452FF', glow: 'rgba(176, 38, 255, 0.4)', rgb: '176, 38, 255' },
  { name: 'Solar Flare Amber', color: '#FF9900', hover: '#FFAD33', glow: 'rgba(255, 153, 0, 0.4)', rgb: '255, 153, 0' },
  { name: 'Neon Pink', color: '#FF007F', hover: '#FF3399', glow: 'rgba(255, 0, 127, 0.4)', rgb: '255, 0, 127' },
  { name: 'Acid Gold', color: '#E5FE00', hover: '#EBFE33', glow: 'rgba(229, 254, 0, 0.4)', rgb: '229, 254, 0' },
];

// Helper to convert hex to rgb string 'r, g, b'
function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((char) => char + char).join('');
  }
  if (c.length !== 6) return '255, 22, 56';
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

export default function CustomThemeModal({ isOpen, onClose, currentHex, onApplyCustomTheme, onResetTheme }) {
  const [inputHex, setInputHex] = useState(currentHex || '#FF1638');

  useEffect(() => {
    if (currentHex) {
      setInputHex(currentHex);
    }
  }, [currentHex]);

  if (!isOpen) return null;

  const handleHexChange = (e) => {
    const val = e.target.value;
    setInputHex(val);
    if (/^#([0-9A-F]{3}){1,2}$/i.test(val)) {
      applyColor(val);
    }
  };

  const applyColor = (hex) => {
    const rgb = hexToRgb(hex);
    onApplyCustomTheme({
      color: hex,
      hover: hex,
      glow: `rgba(${rgb}, 0.4)`,
      rgb: rgb,
    });
  };

  const handleSelectPreset = (preset) => {
    setInputHex(preset.color);
    onApplyCustomTheme(preset);
  };

  const handleReset = () => {
    const defaultTheme = PRESET_THEMES[0];
    setInputHex(defaultTheme.color);
    onResetTheme();
  };

  return (
    <div className="custom-theme-overlay" onClick={onClose}>
      <div className="custom-theme-card" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="custom-theme-header">
          <div className="custom-theme-title">
            <span className="theme-header-icon">🎨</span>
            <span>TACTICAL THEME ENGINE // SHIFT + D</span>
          </div>
          <button className="custom-theme-close" onClick={onClose} aria-label="Close Theme Modal">
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="custom-theme-body">
          <div className="theme-section-subtitle">
            CUSTOM PRIMARY ACCENT COLOR
          </div>

          {/* COLOR PICKER & HEX INPUT */}
          <div className="color-picker-row">
            <div className="color-preview-box" style={{ backgroundColor: inputHex, boxShadow: `0 0 15px ${inputHex}` }}>
              <input
                type="color"
                className="native-color-picker"
                value={inputHex.startsWith('#') && inputHex.length === 7 ? inputHex : '#FF1638'}
                onChange={(e) => {
                  setInputHex(e.target.value);
                  applyColor(e.target.value);
                }}
              />
            </div>

            <div className="hex-input-wrapper">
              <span className="hex-prefix">HEX</span>
              <input
                type="text"
                className="hex-text-input"
                value={inputHex}
                onChange={handleHexChange}
                placeholder="#FF1638"
                maxLength={7}
              />
            </div>

            <button className="theme-apply-btn" onClick={() => applyColor(inputHex)}>
              APPLY
            </button>
          </div>

          {/* PRESETS GRID */}
          <div className="theme-section-subtitle" style={{ marginTop: '16px' }}>
            PRESET TACTICAL PALETTES
          </div>

          <div className="presets-grid">
            {PRESET_THEMES.map((preset) => (
              <button
                key={preset.name}
                className={`preset-btn ${inputHex.toLowerCase() === preset.color.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleSelectPreset(preset)}
                style={{
                  '--preset-color': preset.color,
                  '--preset-glow': preset.glow,
                }}
              >
                <span className="preset-swatch" style={{ backgroundColor: preset.color }} />
                <span className="preset-name">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="custom-theme-footer">
          <button className="theme-reset-btn" onClick={handleReset}>
            ↺ RESTORE CRIMSON RED DEFAULT
          </button>
          <span className="footer-tip">PRESS <kbd>ESC</kbd> OR <kbd>SHIFT+D</kbd> TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
