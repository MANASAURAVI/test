import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animate } from 'animejs';
import TopographicLines from '../components/TopographicLines';
import Anime3DButton from '../components/Anime3DButton';

function LeftArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function CornerBrackets() {
  return (
    <div className="exped-corner-brackets" aria-hidden="true">
      <span className="bracket bracket-tl" />
      <span className="bracket bracket-tr" />
      <span className="bracket bracket-bl" />
      <span className="bracket bracket-br" />
    </div>
  );
}

const ERROR_PRESETS = {
  '404': {
    code: '404',
    digitLeft: '4',
    digitRight: '4',
    eyebrow: 'SIGNAL LOST',
    statusText: 'SYSTEM OFFLINE // ROUTE NOT FOUND',
    codeTag: 'ERR_404',
    subhead: 'THIS PAGE WENT OFFLINE',
    description: "Looks like you've taken a wrong turn. Even the best security explorers hit dead ends sometimes.",
  },
  '403': {
    code: '403',
    digitLeft: '4',
    digitRight: '3',
    eyebrow: 'PERMIT DENIED',
    statusText: 'SECURITY GATE // ACCESS RESTRICTED',
    codeTag: 'ERR_403',
    subhead: 'ACCESS FORBIDDEN',
    description: "You don't have authorization to access this sector. High-level security credentials required.",
  },
  '500': {
    code: '500',
    digitLeft: '5',
    digitRight: '0',
    eyebrow: 'CORE ANOMALY',
    statusText: 'SYSTEM OVERHEAT // RECOVERY IN PROGRESS',
    codeTag: 'ERR_500',
    subhead: 'INTERNAL SERVER FAULT',
    description: "An unexpected technical anomaly occurred in the mountain relays. Our engineers are investigating.",
  },
  '503': {
    code: '503',
    digitLeft: '5',
    digitRight: '3',
    eyebrow: 'SIGNAL BUSY',
    statusText: 'MAINTENANCE // RELAY RESET',
    codeTag: 'ERR_503',
    subhead: 'STATION TEMPORARILY DOWN',
    description: "The mountain security node is currently undergoing scheduled maintenance. Please check back shortly.",
  }
};

export default function ErrorPage({ code = '404', customSubhead, customDesc }) {
  const config = ERROR_PRESETS[code] || {
    code,
    digitLeft: String(code)[0] || '4',
    digitRight: String(code)[2] || '4',
    eyebrow: 'SIGNAL ANOMALY',
    statusText: `SYSTEM ERROR // ROUTE FAULT`,
    codeTag: `ERR_${code}`,
    subhead: customSubhead || `ERROR ${code}`,
    description: customDesc || "An error occurred while communicating with the mountain security node.",
  };

  useEffect(() => {
    animate('.exped-hud-status-bar', {
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 600,
      ease: 'outExpo'
    });

    animate('.exped-eyebrow', {
      translateX: [-30, 0],
      opacity: [0, 1],
      duration: 650,
      delay: 100,
      ease: 'outExpo'
    });

    animate('.exped-404-title-wrap', {
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 800,
      delay: 180,
      ease: 'outBack'
    });

    animate('.exped-subhead', {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 700,
      delay: 260,
      ease: 'outQuad'
    });

    animate('.exped-description', {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 700,
      delay: 340,
      ease: 'outQuad'
    });

    animate('.exped-cta-wrap', {
      scale: [0.92, 1],
      opacity: [0, 1],
      duration: 650,
      delay: 420,
      ease: 'outBack'
    });

    animate('.exped-footer-tag', {
      opacity: [0, 1],
      duration: 600,
      delay: 500,
      ease: 'linear'
    });

    animate('.exped-hud-corner-tag', {
      opacity: [0, 0.7],
      duration: 800,
      delay: 600,
      ease: 'linear'
    });
  }, [code]);

  return (
    <div className="not-found-exped-viewport">
      {/* High Resolution Expedition Background Image */}
      <img
        src="/images/404_bg.jpg"
        alt={`BSides Dharamshala Mountain Expedition ${config.code}`}
        className="exped-404-bg-img"
        fetchPriority="high"
        decoding="async"
      />

      {/* Dark Vignette & Topo Line Overlay */}
      <div className="exped-404-overlay" aria-hidden="true" />
      <TopographicLines className="exped-404-topo" />

      {/* AMBIENT CORNER HUD OVERLAYS */}
      <div className="exped-hud-corner-tag hud-top-left">
        <span className="hud-label">SEC_GATE // {config.code}</span>
        <span className="hud-val">{config.codeTag}</span>
      </div>
      <div className="exped-hud-corner-tag hud-top-right">
        <span className="hud-label">ALT // 1,457M</span>
        <span className="hud-val">DHAULADHAR RANGE</span>
      </div>
      <div className="exped-hud-corner-tag hud-bottom-left">
        <span className="hud-label">COORD</span>
        <span className="hud-val">32.2190° N, 76.3234° E</span>
      </div>
      <div className="exped-hud-corner-tag hud-bottom-right">
        <span className="hud-label">ENCRYPTION</span>
        <span className="hud-val">AES-256 ACTIVE</span>
      </div>

      <div className="section-container exped-404-container">
        {/* CENTER TACTICAL GLASS PANEL */}
        <div className="exped-404-glass-card">
          <CornerBrackets />

          {/* Top Status Bar Badge */}
          <div className="exped-hud-status-bar">
            <span className="pulse-red-dot" />
            <span className="hud-status-text">{config.statusText}</span>
            <span className="hud-code-tag">{config.codeTag}</span>
          </div>

          <div className="exped-404-left-col">
            {/* Eyebrow */}
            <div className="exped-eyebrow">
              <span className="exped-eyebrow-text">{config.eyebrow}</span>
              <span className="exped-eyebrow-line">━━━━</span>
            </div>

            {/* Big Glitch Digit [Circle Mountain + Radar Reticle] Digit Title */}
            <div className="exped-404-title-wrap">
              <span className="exped-digit exped-digit-left">{config.digitLeft}</span>
              
              {/* Center Red Zen Brush Ring with Radar Reticle & Temple Silhouette */}
              <div className="exped-red-ring">
                <div className="exped-radar-sweep" aria-hidden="true" />
                <svg className="ring-svg" viewBox="0 0 100 100" fill="none">
                  {/* Outer Radar Crosshair Reticle Lines */}
                  <circle cx="50" cy="50" r="48" stroke="rgba(var(--accent-rgb), 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(var(--accent-rgb), 0.2)" strokeWidth="0.8" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(var(--accent-rgb), 0.2)" strokeWidth="0.8" />

                  {/* Red Zen Circle */}
                  <circle cx="50" cy="50" r="42" stroke="var(--accent-red)" strokeWidth="7" strokeDasharray="250 20" strokeLinecap="round" />
                  
                  {/* Silhouette Temple & Flying Birds */}
                  <path d="M50 32 L58 44 L42 44 Z M44 44 H56 V58 H44 Z M48 58 H52 V64 H48 Z" fill="#FFFFFF" opacity="0.95" />
                  <path d="M30 64 L50 48 L70 64 Z" fill="rgba(255,255,255,0.4)" />
                  <circle cx="36" cy="38" r="1.5" fill="#FFF" />
                  <circle cx="64" cy="36" r="1.2" fill="#FFF" />
                </svg>
              </div>

              <span className="exped-digit exped-digit-right">{config.digitRight}</span>
            </div>

            {/* Subheading */}
            <div className="exped-subhead">
              {config.subhead}
            </div>

            {/* Body Paragraph */}
            <p className="exped-description">
              {config.description}
            </p>

            {/* Go Back Home Button with Tactical Details */}
            <div className="exped-cta-wrap">
              <Anime3DButton tag={Link} to="/" className="btn-hero-primary exped-btn exped-tactical-btn">
                <span className="btn-tech-bracket">[</span>
                <LeftArrowIcon size={18} />
                <span className="btn-label-text">GO BACK HOME</span>
                <span className="btn-tech-tag">// RETURN_BASE</span>
                <span className="btn-tech-bracket">]</span>
              </Anime3DButton>
            </div>
          </div>
        </div>

        {/* Footer Tagline with Cyber Lines */}
        <div className="exped-footer-tag">
          <div className="footer-tag-lines-wrap">
            <span className="footer-tag-line">SAME MOUNTAINS.</span> <br />
            <span className="footer-tag-sub">BIGGER IDEAS AHEAD.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
