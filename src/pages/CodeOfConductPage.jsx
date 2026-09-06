import React from 'react';
import { 
  ShieldIcon, 
  ShieldCheckIcon,
  UsersIcon, 
  TerminalIcon,
  MapPinIcon
} from '../components/Icons';
import SnowEffect from '../components/SnowEffect';

function AlertOctagonIcon({ size = 20, color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function MailIcon({ size = 20, color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const BoxBorderDraw = () => (
  <svg className="box-draw-svg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="10" fill="none" stroke="#FF1638" strokeWidth="1.5" pathLength="100" />
  </svg>
);

export default function CodeOfConductPage() {
  return (
    <div className="coc-page-wrapper">
      <SnowEffect />
      
      {/* ── HERO HEADER WITH BACKGROUND IMAGE ── */}
      <div className="coc-hero-wrap">
        <div className="coc-hero-bg">
          <img 
            src="/images/code_0f_con.png" 
            alt="BSides Dharamshala Code of Conduct Himalayas" 
            className="coc-hero-img" 
            fetchPriority="high"
            decoding="async"
          />
          <div className="coc-hero-overlay" />
        </div>

        <div className="section-container coc-hero-container">
          {/* Centered Top Heading Panel */}
          <div className="coc-center-top-header">
            <BoxBorderDraw />
            <span className="hud-tick tl" />
            <span className="hud-tick tr" />
            <span className="hud-tick bl" />
            <span className="hud-tick br" />

            <span className="coc-script-badge">&gt; ./event_guidelines.sh</span>
            <h1 className="coc-top-main-title">
              <span className="title-white">CODE OF</span> <span className="title-red">CONDUCT</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ── MAIN BODY CONTENT / TWO COLUMN SECTION ── */}
      <div className="section-container coc-body-container">
        <div className="coc-two-col-grid">
          {/* Left Column: OUR COMMUNITY / OUR RESPONSIBILITY */}
          <div className="coc-grid-left">
            <h2 className="coc-hero-title">
              <span className="title-white">OUR COMMUNITY</span>
              <span className="title-red">OUR RESPONSIBILITY</span>
            </h2>

            <p className="coc-hero-subtitle">
              BSides Dharamshala is committed to providing a safe, respectful, and inclusive environment for everyone. All participants—including attendees, speakers, sponsors, volunteers, and organizers—are expected to follow this Code of Conduct throughout the conference and all associated activities.
            </p>

            {/* 3 Key Pillars */}
            <div className="coc-pillars-grid">
              <div className="coc-pillar-item">
                <BoxBorderDraw />
                <span className="hud-tick tl" />
                <span className="hud-tick tr" />
                <span className="hud-tick bl" />
                <span className="hud-tick br" />
                <div className="coc-pillar-icon">
                  <UsersIcon size={20} color="#FF1638" />
                </div>
                <div className="coc-pillar-content">
                  <h4>Mutual Respect</h4>
                  <p>Inclusivity and dignity across all interactions and discussions.</p>
                </div>
              </div>

              <div className="coc-pillar-item">
                <BoxBorderDraw />
                <span className="hud-tick tl" />
                <span className="hud-tick tr" />
                <span className="hud-tick bl" />
                <span className="hud-tick br" />
                <div className="coc-pillar-icon">
                  <ShieldCheckIcon size={20} color="#FF1638" />
                </div>
                <div className="coc-pillar-content">
                  <h4>Zero Harassment</h4>
                  <p>Strict non-tolerance for discriminatory or hostile behavior.</p>
                </div>
              </div>

              <div className="coc-pillar-item">
                <BoxBorderDraw />
                <span className="hud-tick tl" />
                <span className="hud-tick tr" />
                <span className="hud-tick bl" />
                <span className="hud-tick br" />
                <div className="coc-pillar-icon">
                  <AlertOctagonIcon size={20} color="#FF1638" />
                </div>
                <div className="coc-pillar-content">
                  <h4>Prompt Action</h4>
                  <p>Immediate support and enforcement by dedicated conference staff.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Policy Cards */}
          <div className="coc-grid-right">
            <div className="coc-policy-container">
              
              {/* Section 01 */}
              <div className="coc-policy-card">
                <BoxBorderDraw />
                <span className="hud-tick tl" />
                <span className="hud-tick tr" />
                <span className="hud-tick bl" />
                <span className="hud-tick br" />
                <div className="coc-policy-header">
                  <span className="coc-section-num">01</span>
                  <div className="coc-section-title-wrap">
                    <UsersIcon size={18} color="#FF1638" />
                    <h3>Scope &amp; Community Standards</h3>
                  </div>
                </div>
                <p className="coc-right-text">
                  All attendees, speakers, sponsors, and volunteers at BSides Dharamshala are required to agree with this Code of Conduct. We expect full cooperation from all participants to maintain a safe, welcoming, and productive atmosphere for everyone.
                </p>
              </div>

              {/* Section 02 */}
              <div className="coc-policy-card">
                <BoxBorderDraw />
                <span className="hud-tick tl" />
                <span className="hud-tick tr" />
                <span className="hud-tick bl" />
                <span className="hud-tick br" />
                <div className="coc-policy-header">
                  <span className="coc-section-num">02</span>
                  <div className="coc-section-title-wrap">
                    <ShieldCheckIcon size={18} color="#FF1638" />
                    <h3>Anti-Harassment Commitment</h3>
                  </div>
                </div>
                <p className="coc-right-text">
                  We are dedicated to providing a harassment-free experience regardless of gender, sexual orientation, disability, physical appearance, body size, race, religion, or technology choices. We do not tolerate harassment of conference participants in any form, including offensive comments, deliberate intimidation, stalking, disruptive presentations, or unwelcomed physical contact.
                </p>
              </div>

              {/* Section 03 */}
              <div className="coc-policy-card">
                <BoxBorderDraw />
                <span className="hud-tick tl" />
                <span className="hud-tick tr" />
                <span className="hud-tick bl" />
                <span className="hud-tick br" />
                <div className="coc-policy-header">
                  <span className="coc-section-num">03</span>
                  <div className="coc-section-title-wrap">
                    <ShieldIcon size={18} color="#FF1638" />
                    <h3>Enforcement &amp; Incident Reporting</h3>
                  </div>
                </div>
                <p className="coc-right-text">
                  Participants violating these rules may be sanctioned or expelled from the conference without a refund, and barred from future BSides Dharamshala events at the discretion of the organizers. If you experience or observe harassment, or have concerns, please contact conference staff immediately.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
