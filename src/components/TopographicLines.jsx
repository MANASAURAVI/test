import React from 'react';

export default function TopographicLines({ className = '' }) {
  return (
    <div className={`topo-overlay-svg ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Subtle organic topographic contour lines */}
        <path
          d="M-100 180 C220 120 480 320 780 240 C1080 160 1280 380 1580 280"
          stroke="rgba(130, 145, 155, 0.20)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-100 290 C260 250 440 390 740 330 C1040 270 1240 450 1580 360"
          stroke="rgba(130, 145, 155, 0.16)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 410 C180 370 380 520 680 450 C980 380 1180 560 1580 470"
          stroke="rgba(130, 145, 155, 0.12)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 540 C280 480 420 640 720 570 C1020 500 1220 670 1580 590"
          stroke="rgba(130, 145, 155, 0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M-100 680 C240 620 460 760 760 700 C1060 640 1260 800 1580 730"
          stroke="rgba(130, 145, 155, 0.18)"
          strokeWidth="1.2"
          fill="none"
        />

        {/* Tactical Elevation Marker Lines */}
        <circle cx="160" cy="240" r="3" fill="#FF1638" opacity="0.7" />
        <line x1="160" y1="240" x2="240" y2="240" stroke="rgba(255, 22, 56, 0.35)" strokeWidth="1" />
        <text x="248" y="244" fill="rgba(167, 175, 185, 0.6)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          CONTOUR 1457M
        </text>

        <circle cx="820" cy="620" r="2.5" fill="#FF1638" opacity="0.5" />
        <line x1="820" y1="620" x2="880" y2="620" stroke="rgba(255, 22, 56, 0.25)" strokeWidth="1" />
        <text x="888" y="623" fill="rgba(167, 175, 185, 0.4)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1">
          DHAULADHAR RANGE
        </text>
      </svg>
    </div>
  );
}
