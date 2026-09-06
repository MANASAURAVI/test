import React, { useState, useEffect } from 'react';

function MountainReticleIcon() {
  return (
    <svg className="tech-loader-svg" viewBox="0 0 100 100" fill="none">
      {/* Outer Rotating Radar Dashed Ring */}
      <circle cx="50" cy="50" r="46" stroke="rgba(255, 22, 56, 0.4)" strokeWidth="1" strokeDasharray="6 4" className="spin-clockwise" />
      {/* Inner Counter-Rotating Ring */}
      <circle cx="50" cy="50" r="36" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeDasharray="18 12" className="spin-counter" />
      
      {/* Crosshair Lines */}
      <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255, 22, 56, 0.25)" strokeWidth="1" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255, 22, 56, 0.25)" strokeWidth="1" />
      
      {/* Target Reticle Corners */}
      <circle cx="50" cy="50" r="24" stroke="#FF1638" strokeWidth="2" strokeDasharray="90 10" />
      
      {/* Mountain Peak Center Icon */}
      <path d="M50 32 L62 56 L38 56 Z" fill="#FF1638" opacity="0.9" />
      <path d="M50 40 L68 66 L32 66 Z" fill="#FFFFFF" opacity="0.7" />
      <circle cx="50" cy="50" r="2" fill="#FFFFFF" />
    </svg>
  );
}

export default function TechPageLoader({ duration = 500, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [hexCode, setHexCode] = useState('0x1F');
  const [subText, setSubText] = useState('INITIALIZING SECTOR 04 RELAYS');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hexes = ['0x1F', '0x4E', '0x8A', '0xCF', '0x99', '0xFF', '0x7F', '0xB3', '0x9E', '0x5C'];
    const startTime = Date.now();
    const tickInterval = 5; // update every 5ms for ultra-fast 0.5-second progress

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(calculatedProgress);
      setHexCode(hexes[Math.floor(Math.random() * hexes.length)]);

      if (calculatedProgress < 25) {
        setSubText('INITIALIZING SECTOR 04 RELAYS');
      } else if (calculatedProgress < 50) {
        setSubText('DECRYPTING EXPEDITION DATA');
      } else if (calculatedProgress < 75) {
        setSubText('SYNCHRONIZING TACTICAL MESH');
      } else if (calculatedProgress < 100) {
        setSubText('FINALIZING SECURE LINK');
      } else {
        setSubText('SYSTEM READY // ACCESS GRANTED');
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setIsFading(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 200); // 200ms rapid fade out transition
      }
    }, tickInterval);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className={`tech-loader-viewport ${isFading ? 'loader-fade-out' : ''}`} role="status" aria-live="polite">
      <div className="tech-loader-card">
        {/* Corner Brackets */}
        <span className="bracket bracket-tl" aria-hidden="true" />
        <span className="bracket bracket-tr" aria-hidden="true" />
        <span className="bracket bracket-bl" aria-hidden="true" />
        <span className="bracket bracket-br" aria-hidden="true" />

        {/* Top Header Status */}
        <div className="tech-loader-header">
          <div className="header-left">
            <span className="pulse-red-dot" />
            <span className="header-label">SEC_LOADER // SYSTEM_INIT</span>
          </div>
          <span className="header-hex">{hexCode}</span>
        </div>

        {/* Center Radar Reticle */}
        <div className="tech-loader-reticle-wrap">
          <MountainReticleIcon />
        </div>

        {/* Status Text & Progress Bar */}
        <div className="tech-loader-status">
          <div className="status-title">BSIDES DHARAMSHALA // ESTABLISHING SIGNAL</div>
          
          {/* Tech Segmented Progress Bar */}
          <div className="tech-progress-track">
            <div className="tech-progress-fill" style={{ width: `${progress}%` }} />
            <div className="tech-progress-grid" />
          </div>

          <div className="status-meta">
            <span className="meta-left">{subText}</span>
            <span className="meta-right">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
