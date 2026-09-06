import React from 'react';
import PageHero from '../components/PageHero';
import { conferenceData } from '../data/conferenceData';

function SocialXIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialLinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

function SocialInstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function CFVPage() {
  const { callForVolunteers } = conferenceData;

  return (
    <div className="internal-page-view cfv-page-view">
      {/* ── FIXED BACKGROUND SYSTEM ── */}
      {/* Base Fixed Image: ops.png for ALL sections across the entire page */}
      <div className="cfv-page-bg-fixed">
        <img 
          src="/images/ops.png" 
          alt="BSides Dharamshala OPS Crew Backdrop" 
          className="cfv-base-img" 
          fetchPriority="high"
          decoding="async"
        />
        <div className="cfv-base-overlay" />
      </div>

      {/* First Top Image: Volunteer.png for top hero section */}
      <div className="cfv-hero-top-bg">
        <img 
          src="/images/Volunteer.png" 
          alt="BSides Dharamshala Volunteer Hero Backdrop" 
          className="cfv-top-img" 
          fetchPriority="high"
          decoding="async"
        />
        <div className="cfv-top-overlay" />
      </div>

      <PageHero
        title={
          <span className="minimal-heading-wrap">
            OPS <span className="title-brush text-highlight-red minimal-brush-highlight">CREW</span>
          </span>
        }
        subtitle="BSides Dharamshala belongs to the community, and the OPS CREW is a huge part of what makes that community special."
        centered
      />

      <section className="section-block cfv-main-section">
        <div className="section-container">

          {/* ── SECTION 1: JOIN THE CREW ── */}
          <div className="cfv-open-block cfv-status-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">JOIN THE CREW</span>
            </div>

            <div className="cfv-status-header-wrap">
              <span className="cfv-status-pill closed">
                <span className="pulse-dot" /> VOLUNTEER APPLICATIONS ARE CURRENTLY CLOSED
              </span>
              
              <h2 className="cfv-status-title minimal-animated-heading">
                Volunteer for <span className="title-white">BSides Dharamshala</span> <span className="title-brush text-highlight-red minimal-brush-highlight">2027</span>
              </h2>

              <p className="cfv-status-description">
                Follow our social channels or subscribe to updates for the next call for volunteers.
              </p>

              {/* Social Channels Buttons */}
              <div className="cfv-social-actions">
                <a 
                  href="https://x.com/BSidesDharam" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cfv-social-pill"
                >
                  <SocialXIcon size={16} /> FOLLOW ON X
                </a>
                <a 
                  href="https://www.linkedin.com/company/bsidesdharamshala/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cfv-social-pill"
                >
                  <SocialLinkedinIcon size={16} /> LINKEDIN
                </a>
                <a 
                  href="https://www.instagram.com/bsidesdharamshala" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cfv-social-pill"
                >
                  <SocialInstagramIcon size={16} /> INSTAGRAM
                </a>
              </div>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 2: FROM THE ORGANISING TEAM ── */}
          <div className="cfv-open-block cfv-thankyou-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">FROM THE ORGANISING TEAM</span>
            </div>

            <div className="cfv-thankyou-editorial">
              <span className="cfv-cmd-prompt">&gt; ./thank_you_ops_crew.sh</span>
              
              <h2 className="cfv-thankyou-heading minimal-animated-heading">
                Thank You, <span className="title-brush text-highlight-red minimal-brush-highlight">OPS CREW.</span>
              </h2>

              <div className="cfv-letter-grid">
                <div className="cfv-letter-col-main">
                  <p className="cfv-lead-p">
                    {callForVolunteers.thankYou.paragraphs[0]}
                  </p>
                  <p className="cfv-body-p">
                    {callForVolunteers.thankYou.paragraphs[1]}
                  </p>
                </div>

                <div className="cfv-letter-highlight-quote">
                  <span className="cfv-quote-mark">“</span>
                  <p className="cfv-quote-text">
                    {callForVolunteers.thankYou.paragraphs[2]}
                  </p>
                </div>
              </div>

              <div className="cfv-letter-closing">
                <p className="cfv-closing-p">
                  {callForVolunteers.thankYou.paragraphs[3]}
                </p>
              </div>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 3: ROLES THAT MADE IT HAPPEN ── */}
          <div className="cfv-open-block cfv-roles-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">ROLES THAT MADE IT HAPPEN</span>
            </div>

            <div className="cfv-roles-heading-wrap">
              <h2 className="cfv-roles-main-title minimal-animated-heading">
                Every Role <span className="title-brush text-highlight-red minimal-brush-highlight">Mattered.</span>
              </h2>
              
              <p className="cfv-roles-main-sub">
                Every position in the OPS CREW contributed directly to making BSides Dharamshala seamless, welcoming, and impactful.
              </p>
            </div>

            {/* Open Editorial Roles Grid */}
            <div className="cfv-open-roles-grid">
              {callForVolunteers.roles.map((role, idx) => (
                <div key={idx} className="cfv-open-role-item">
                  <div className="cfv-role-header-row">
                    <span className="cfv-role-num">0{idx + 1}</span>
                    <span className="cfv-role-line" />
                  </div>
                  <h3 className="cfv-role-title">{role.title}</h3>
                  <p className="cfv-role-desc">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

