import React from 'react';
import { Link } from 'react-router-dom';

const SocialXIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SocialLinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const SocialInstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MountainWireframeIcon = () => (
  <svg width="22" height="15" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 35L20 10L35 35M20 10L35 18L50 35M20 10L10 35M35 18L25 35M35 18L42 35" />
  </svg>
);

const TopoBgSvg = () => (
  <svg className="footer-topo-svg" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M-100 180 C 100 130, 250 280, 450 160 C 600 80, 750 230, 950 180" stroke="rgba(var(--accent-rgb), 0.12)" strokeWidth="1.2" />
    <path d="M-100 280 C 150 200, 300 360, 500 230 C 650 130, 800 300, 950 260" stroke="rgba(var(--accent-rgb), 0.09)" strokeWidth="1.2" />
    <path d="M-100 380 C 120 300, 320 430, 520 300 C 700 200, 820 380, 950 330" stroke="rgba(var(--accent-rgb), 0.07)" strokeWidth="1.2" />
    <path d="M-100 480 C 80 380, 280 500, 480 380 C 640 280, 780 460, 950 400" stroke="rgba(var(--accent-rgb), 0.05)" strokeWidth="1.2" />
  </svg>
);

const BoxBorderDraw = () => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="6" fill="none" stroke="var(--accent-red)" strokeWidth="1.5" pathLength="100" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="technical-footer">
      {/* Background Mountain Image & Darkness Overlay */}
      <div className="footer-bg-wrap">
        <img
          src="/images/footerimage.webp"
          alt=""
          className="footer-bg-img"
          aria-hidden="true"
        />
        <TopoBgSvg />
        <div className="footer-bg-overlay" aria-hidden="true" />
      </div>

      {/* Outer HUD Corner Ticks */}
      <span className="footer-outer-tick tl" />
      <span className="footer-outer-tick tr" />
      <span className="footer-outer-tick bl" />
      <span className="footer-outer-tick br" />

      {/* ── TOP HUD STATUS BAR (FULL WIDTH) ── */}
      <div className="footer-hud-bar">
        <div className="hud-bar-item status-active">
          <span className="status-red-dot" />
          <span className="hud-label">STATUS:</span>
          <span className="hud-val">ONLINE // ACTIVE</span>
        </div>

        <div className="hud-bar-item">
          <span className="hud-label">YEAR:</span>
          <span className="hud-val">{currentYear} EDITION</span>
        </div>

        <div className="hud-bar-item">
          <span className="hud-label">COORDS:</span>
          <span className="hud-val">32.2190° N, 76.3234° E</span>
        </div>

        <div className="hud-bar-item elevation">
          <span className="hud-label">ELEVATION:</span>
          <span className="hud-val">1,457 M ASL</span>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID (FULL WIDTH) ── */}
      <div className="footer-main-grid">
        {/* 1. BRAND COLUMN */}
        <div className="footer-brand-col footer-card-box">
          <BoxBorderDraw />
          <span className="card-box-tick tl" />
          <span className="card-box-tick tr" />
          <span className="card-box-tick bl" />
          <span className="card-box-tick br" />

          <Link to="/" className="footer-logo-link" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img
              src="/logo/logo.png"
              alt="BSides Dharamshala Logo"
              className="footer-logo-img"
            />
            <span className="matrix-nav-prompt">&gt; root@bsides:~#</span>
          </Link>

          <div className="footer-motto-tag">
            HACK <span className="motto-red">//</span> LEARN <span className="motto-red">//</span> SHARE <span className="motto-red">//</span> BELONG
          </div>

          <p className="footer-mission-paragraph">
            In the lap of the Dhauladhar Himalayas, where technical ideas travel further. An open, community-driven cybersecurity conference bringing together hackers, researchers, defenders, and builders.
          </p>

          {/* Social Buttons Row */}
          <div className="footer-social-row">
            <a href="https://x.com/BSidesDharam" target="_blank" rel="noopener noreferrer" className="social-box-btn" title="X (Twitter)">
              <SocialXIcon />
            </a>
            <a href="https://www.linkedin.com/company/bsidesdharamshala/" target="_blank" rel="noopener noreferrer" className="social-box-btn" title="LinkedIn">
              <SocialLinkedinIcon />
            </a>
            <a href="https://www.instagram.com/bsidesdharamshala" target="_blank" rel="noopener noreferrer" className="social-box-btn" title="Instagram">
              <SocialInstagramIcon />
            </a>
          </div>

          {/* Sub-slogan below socials */}
          <div className="footer-sub-slogan-line">
            <span className="sub-slogan-red-dash" />
            <span className="sub-slogan-text">COMMUNITY DRIVES SECURITY FURTHER.</span>
          </div>

          {/* Bottom Left Coords */}
          <div className="footer-bottom-coords">
            <div>32.2198° N</div>
            <div>76.3234° E</div>
          </div>
        </div>

        {/* 2. OVERVIEW COLUMN */}
        <div className="footer-nav-col footer-card-box">
          <BoxBorderDraw />
          <span className="card-box-tick tl" />
          <span className="card-box-tick tr" />
          <span className="card-box-tick bl" />
          <span className="card-box-tick br" />

          <h4 className="footer-col-header">
            <span className="col-num">01</span>
            <span className="col-slash">//</span>
            <span className="col-title">ABOUT</span>
          </h4>
          <div className="col-red-line" />
          <ul className="footer-link-list">
            <li><Link to="/overview/team"><span className="red-chevron">&gt;</span> Team</Link></li>
            <li><Link to="/overview/code-of-conduct"><span className="red-chevron">&gt;</span> Code of Conduct</Link></li>
          </ul>
        </div>

        {/* 3. CONFERENCE COLUMN */}
        <div className="footer-nav-col footer-card-box">
          <BoxBorderDraw />
          <span className="card-box-tick tl" />
          <span className="card-box-tick tr" />
          <span className="card-box-tick bl" />
          <span className="card-box-tick br" />

          <h4 className="footer-col-header">
            <span className="col-num">02</span>
            <span className="col-slash">//</span>
            <span className="col-title">CONFERENCE</span>
          </h4>
          <div className="col-red-line" />
          <ul className="footer-link-list">
            <li><Link to="/conference/sponsors"><span className="red-chevron">&gt;</span> Sponsors</Link></li>
            <li><Link to="/conference/call-for-papers"><span className="red-chevron">&gt;</span> Call for Papers</Link></li>
            <li><Link to="/conference/call-for-volunteers"><span className="red-chevron">&gt;</span> Call for Volunteers</Link></li>
          </ul>
        </div>

        {/* 4. DIRECT COLUMN */}
        <div className="footer-nav-col footer-card-box">
          <BoxBorderDraw />
          <span className="card-box-tick tl" />
          <span className="card-box-tick tr" />
          <span className="card-box-tick bl" />
          <span className="card-box-tick br" />

          <h4 className="footer-col-header">
            <span className="col-num">03</span>
            <span className="col-slash">//</span>
            <span className="col-title">DIRECT</span>
          </h4>
          <div className="col-red-line" />
          <ul className="footer-link-list">
            <li><Link to="/contact"><span className="red-chevron">&gt;</span> Contact Us</Link></li>
          </ul>
        </div>

        {/* 6. FAR RIGHT OVERLAY ELEMENT */}
        <div className="footer-right-overlay footer-card-box">
          <BoxBorderDraw />
          <span className="card-box-tick tl" />
          <span className="card-box-tick tr" />
          <span className="card-box-tick bl" />
          <span className="card-box-tick br" />
          {/* Top Right Motto Stack */}
          <div className="footer-motto-stack">
            <span>HIGHER</span>
            <span>IDEAS</span>
            <span>STRONGER</span>
            <span>SECURITY</span>
            <div className="motto-stack-red-line" />
          </div>

          {/* Dharamshala Year Brush */}
          <div className="footer-brush-title">
            Dharamshala<br />{currentYear}
          </div>

          {/* Back to Top */}
          <button onClick={scrollToTop} className="footer-top-btn" title="Back to Top">
            <span className="top-btn-text">BACK TO TOP</span>
            <span className="top-btn-box">&uarr;</span>
          </button>
        </div>
      </div>

      {/* ── BOTTOM STRIP (FULL WIDTH) ── */}
      <div className="footer-bottom-bar">
        <div className="bottom-left-copy">
          &copy; {currentYear} BSides Dharamshala. Built for the global security community.
        </div>

        <div className="bottom-center-badge">
          <MountainWireframeIcon />
          <span>HIMACHAL PRADESH, INDIA</span>
        </div>

        <div className="bottom-right-tags">
          PEOPLE <span className="tag-x">&times;</span> IDEAS <span className="tag-x">&times;</span> SECURITY <span className="tag-x">&times;</span> HIMALAYAS
          <span className="tag-red-dash" />
        </div>

        {/* Mobile Back To Top Button */}
        <button onClick={scrollToTop} className="footer-mobile-top-btn" title="Back to Top">
          <span className="top-btn-text">BACK TO TOP</span>
          <span className="top-btn-box">&uarr;</span>
        </button>
      </div>
    </footer>
  );
}
