import React from 'react';

// SVG Icons for HUD Details & Pillars
const LayerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF1638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF1638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MountainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF1638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const CrosshairIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF1638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="1" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="1" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="23" y2="12" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 9l4 3-4 3M12 15h6" />
  </svg>
);

const BeakerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF1638" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
  </svg>
);

const MountainWireframe = () => (
  <svg width="36" height="24" viewBox="0 0 60 40" fill="none" stroke="#FFFFFF" strokeWidth="1.2">
    <path d="M5 35L20 10L35 35M20 10L35 18L50 35M20 10L10 35M35 18L25 35M35 18L42 35" />
  </svg>
);

const BoxBorderDraw = () => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="6" fill="none" stroke="#FF1638" strokeWidth="1.5" pathLength="100" />
  </svg>
);

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      {/* Dark vignette overlay for depth & readability */}
      <div className="about-bg-overlay" aria-hidden="true" />

      {/* Far Left Vertical Rotated Text */}
      <div className="about-vertical-text">
        DHARAMSHALA // HP
      </div>

      {/* ── SEPARATE TOP-RIGHT METADATA BADGE (MOVES INDEPENDENTLY) ── */}
      <div className="about-header-right">
        <div className="top-coords-group">
          <span className="coords-location">DHARAMSHALA / HP</span>
          <span className="coords-numbers">32.2198° N &nbsp; 76.3234° E</span>
        </div>
        <div className="top-mountain-badge">
          <MountainWireframe />
          <div className="top-badge-divider" />
          <div className="top-badge-text">
            <span>HIGHER</span>
            <span>IDEAS</span>
            <span>STRONGER</span>
            <span>SECURITY</span>
          </div>
        </div>
      </div>

      <div className="about-container">
        {/* ── TOP HEADER BAR ── */}
        <div className="about-header-bar">
          <div className="about-header-left">
            <div className="about-tag-row">
              <span className="tag-red-num">01</span>
              <span className="tag-slashes">//</span>
              <span className="tag-main-title">ABOUT</span>
              <span className="tag-header-line" />
            </div>
            <div className="about-sub-tags">
              PEOPLE <span className="tag-x">×</span> IDEAS <span className="tag-x">×</span> SECURITY <span className="tag-x">×</span> HIMALAYAS
            </div>
          </div>
        </div>

        {/* ── MAIN 2-COLUMN CONTENT ── */}
        <div className="about-main-content">
          {/* Left Column — Big Headline & Pull Quote */}
          <div className="about-col-left">
            <h2 className="about-hero-title">
              <span className="title-bsides">BSIDES</span>
              <span className="title-dharamshala">DHARAMSHALA</span>
            </h2>
            <div className="about-editorial-quote">
              <div className="quote-red-bar" />
              <p>
                Not another corporate expo. A community-driven security gathering where hackers, researchers, and builders come together in the Himalayas.
              </p>
            </div>
          </div>

          {/* Right Column — Body Copy & Slogan */}
          <div className="about-col-right">
            <BoxBorderDraw />
            <span className="right-col-tick tl" />
            <span className="right-col-tick tr" />
            <span className="right-col-tick bl" />
            <span className="right-col-tick br" />

            <div className="right-red-accent-line" />
            <p className="about-paragraph lead">
              BSides Dharamshala is an open, community-driven cybersecurity conference bringing together ethical hackers, security researchers, students, defenders, builders, and technology enthusiasts for open knowledge, meaningful conversations, and real-world security.
            </p>
            <p className="about-paragraph secondary">
              Built around the spirit of BSides, the conference creates a space where technical ideas are shared openly, new perspectives are challenged, and the security community grows together.
            </p>
            <div className="about-slogan-line">
              <span className="slogan-dash">——</span> DIFFERENT PEOPLE. SAME GOAL. <span className="slogan-red">STRONGER SECURITY.</span>
            </div>
          </div>
        </div>

        {/* ── EVENT DETAILS HUD PANEL ── */}
        <div className="about-event-hud">
          <BoxBorderDraw />
          {/* 4 Corner Bracket Ticks */}
          <span className="hud-tick tl" />
          <span className="hud-tick tr" />
          <span className="hud-tick bl" />
          <span className="hud-tick br" />

          <div className="hud-header-strip">
            <div className="hud-title-left">
              <span className="hud-red-square" />
              <span className="hud-title-text">EVENT DETAILS</span>
            </div>
            <div className="hud-est-right">
              EST. 2027
            </div>
          </div>

          <div className="hud-details-grid">
            {/* 1. Format */}
            <div className="hud-detail-card">
              <div className="hud-icon-wrap">
                <LayerIcon />
              </div>
              <div className="hud-text-wrap">
                <span className="hud-label">FORMAT</span>
                <span className="hud-val-bold">Community Conference</span>
              </div>
            </div>

            {/* 2. Location */}
            <div className="hud-detail-card">
              <div className="hud-icon-wrap">
                <MapPinIcon />
              </div>
              <div className="hud-text-wrap">
                <span className="hud-label">LOCATION</span>
                <span className="hud-val-bold">Dharamshala, HP</span>
                <span className="hud-val-sub">Himachal Pradesh, India</span>
              </div>
            </div>

            {/* 3. Elevation */}
            <div className="hud-detail-card">
              <div className="hud-icon-wrap">
                <MountainIcon />
              </div>
              <div className="hud-text-wrap">
                <span className="hud-label">ELEVATION</span>
                <span className="hud-val-bold">1,457 m ASL</span>
              </div>
            </div>

            {/* 4. Coordinates */}
            <div className="hud-detail-card">
              <div className="hud-icon-wrap">
                <CrosshairIcon />
              </div>
              <div className="hud-text-wrap">
                <span className="hud-label">COORDINATES</span>
                <span className="hud-val-bold">32.2190° N</span>
                <span className="hud-val-bold">76.3234° E</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM PILLARS ROW (01, 02, 03) ── */}
        <div className="about-pillars-row">
          {/* Pillar 01 */}
          <div className="about-pillar-card">
            <BoxBorderDraw />
            <span className="pillar-tick tl" />
            <span className="pillar-tick tr" />
            <span className="pillar-tick bl" />
            <span className="pillar-tick br" />
            <div className="pillar-top">
              <div className="pillar-title-group">
                <span className="pillar-num-red">01</span>
                <span className="pillar-heading">TECHNICAL DEPTH</span>
              </div>
              <TerminalIcon />
            </div>
            <div className="pillar-divider-line" />
            <p className="pillar-text">
              Explore real-world offensive & defensive research, cloud security, AI security, privacy, reverse engineering, and emerging technologies.
            </p>
          </div>

          {/* Pillar 02 */}
          <div className="about-pillar-card">
            <BoxBorderDraw />
            <span className="pillar-tick tl" />
            <span className="pillar-tick tr" />
            <span className="pillar-tick bl" />
            <span className="pillar-tick br" />
            <div className="pillar-top">
              <div className="pillar-title-group">
                <span className="pillar-num-red">02</span>
                <span className="pillar-heading">HANDS-ON LEARNING</span>
              </div>
              <BeakerIcon />
            </div>
            <div className="pillar-divider-line" />
            <p className="pillar-text">
              Go beyond presentations through practical sessions, workshops, demonstrations, and experiences designed to turn knowledge into skills.
            </p>
          </div>

          {/* Pillar 03 */}
          <div className="about-pillar-card">
            <BoxBorderDraw />
            <span className="pillar-tick tl" />
            <span className="pillar-tick tr" />
            <span className="pillar-tick bl" />
            <span className="pillar-tick br" />
            <div className="pillar-top">
              <div className="pillar-title-group">
                <span className="pillar-num-red">03</span>
                <span className="pillar-heading">COMMUNITY FIRST</span>
              </div>
              <UsersIcon />
            </div>
            <div className="pillar-divider-line" />
            <p className="pillar-text">
              Meet hackers, researchers, students, builders, and defenders. Exchange ideas, share experiences, build connections, and grow together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
