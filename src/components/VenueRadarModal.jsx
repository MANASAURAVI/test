import React from 'react';

export default function VenueRadarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=32.2190,76.3234';

  return (
    <div className="radar-overlay" onClick={onClose}>
      <div className="radar-card" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="radar-header">
          <div className="radar-title">
            <span className="radar-icon">🎯</span>
            <span>VENUE RADAR // MCLEOD GANJ, DHARAMSHALA</span>
          </div>
          <button className="radar-close" onClick={onClose}>✕</button>
        </div>

        {/* BODY */}
        <div className="radar-body">
          {/* RADAR TARGET VISUAL */}
          <div className="radar-visual">
            <div className="radar-circle circle-1"></div>
            <div className="radar-circle circle-2"></div>
            <div className="radar-circle circle-3"></div>
            <div className="radar-sweep"></div>
            <div className="radar-blip"></div>
            <div className="radar-coords">
              <span>LAT: 32.2190° N</span>
              <span>LONG: 76.3234° E</span>
            </div>
          </div>

          {/* DETAILS PANEL */}
          <div className="radar-info">
            <div className="info-block">
              <span className="info-label">CONFERENCE LOCATION</span>
              <span className="info-val">McLeod Ganj, Dharamshala</span>
              <span className="info-sub">Himachal Pradesh 176219, India</span>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <span className="item-title">✈️ AIRPORT</span>
                <span className="item-detail">Gaggal Airport (DHM) — 18 km</span>
              </div>
              <div className="info-item">
                <span className="item-title">🚆 RAILWAY</span>
                <span className="item-detail">Pathankot (PTK) — 85 km</span>
              </div>
              <div className="info-item">
                <span className="item-title">🚌 BUS TERMINAL</span>
                <span className="item-detail">Dharamshala ISBT — 9 km</span>
              </div>
              <div className="info-item">
                <span className="item-title">⛰️ ELEVATION</span>
                <span className="item-detail">1,457 meters (4,780 ft)</span>
              </div>
            </div>

            <div className="radar-action-bar">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="radar-gmaps-btn"
              >
                OPEN GOOGLE MAPS NAVIGATION ↗
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="radar-footer">
          <span>PRESS <kbd>ESC</kbd> OR <kbd>SHIFT+M</kbd> TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
