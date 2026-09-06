import React from 'react';
import TopographicLines from '../components/TopographicLines';
import { conferenceData } from '../data/conferenceData';
import Anime3DButton from '../components/Anime3DButton';

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
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
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

function ChevronDownIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const BoxBorderDraw = ({ rx = "6" }) => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx={rx} fill="none" stroke="#FF1638" strokeWidth="1.5" pathLength="100" />
  </svg>
);

export default function CFPPage() {
  const { callForPapers } = conferenceData;
  const [activeTrack, setActiveTrack] = React.useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveTrack(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToDetails = () => {
    const detailsElem = document.getElementById('cfp-details');
    if (detailsElem) {
      detailsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="internal-page-view cfp-page-wrapper">
      {/* Unified Base Fixed Background for CALL FOR PAPERS Page */}
      <div className="cfp-fixed-bg-wrap">
        <img
          src="/images/call.webp"
          alt="BSides Dharamshala Call For Papers Background"
          className="cfp-fixed-bg-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="cfp-fixed-bg-overlay" />
      </div>

      {/* ── HERO SECTION FOR CALL FOR PAPERS ── */}
      <section className="cfp-standalone-hero">
        <TopographicLines className="page-topo-overlay" />

        <div className="section-container cfp-hero-container">
          
          <div className="cfp-hero-center-box">
            


            {/* Tagline Badge */}
            <div className="cfp-tagline-badge">
              <span className="cfv-tag-dot" />
              <span>{callForPapers.tagline.toUpperCase()}</span>
            </div>

            {/* Main Centered Heading */}
            <h1 className="cfp-hero-main-title">
              CALL FOR <span className="title-brush text-highlight-red minimal-brush-highlight">PAPERS</span>
            </h1>

            {/* Event Name */}
            <div className="cfp-hero-event-name">
              {callForPapers.event}
            </div>

            {/* Description Paragraph */}
            <p className="cfp-hero-lead-desc">
              {callForPapers.description}
            </p>

            {/* Status Pill & Action Buttons */}
            <div className="cfp-hero-actions-wrap">
              <span className="cfv-status-pill closed">
                <span className="pulse-dot" /> {callForPapers.submitProposal.status.toUpperCase()}
              </span>

              <div className="cfv-social-actions">
                <Anime3DButton
                  href="https://x.com/BSidesDharam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cfv-social-pill"
                >
                  <SocialXIcon size={16} /> FOLLOW ON X
                </Anime3DButton>
                <Anime3DButton
                  href="https://www.linkedin.com/company/bsidesdharamshala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cfv-social-pill"
                >
                  <SocialLinkedinIcon size={16} /> LINKEDIN
                </Anime3DButton>
                <Anime3DButton
                  href="https://www.instagram.com/bsidesdharamshala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cfv-social-pill"
                >
                  <SocialInstagramIcon size={16} /> INSTAGRAM
                </Anime3DButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DETAILED SECTIONS FOR CALL FOR PAPERS ── */}
      <section id="cfp-details" className="section-block cfp-main-section">
        <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>

          {/* ── SECTION 1: ABOUT THE CALL FOR PAPERS ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">01 // ABOUT THE CALL FOR PAPERS</span>
            </div>

            <div className="cfp-editorial-wrap">
              <h2 className="cfp-editorial-heading">
                Sharing Knowledge, Research & Real-World Experiences
              </h2>

              <div className="cfp-paragraphs">
                {callForPapers.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="cfp-body-text">{p}</p>
                ))}
              </div>

              {/* Callout box */}
              <div className="cfp-callout-card">
                <BoxBorderDraw />
                <span className="card-box-tick tl" />
                <span className="card-box-tick tr" />
                <span className="card-box-tick bl" />
                <span className="card-box-tick br" />

                <span className="cfp-callout-prompt">&gt; SUBMIT YOUR WORK</span>
                <p className="cfp-callout-text">
                  {callForPapers.about.callout}
                </p>
              </div>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 2: SUBMISSION TRACKS ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">02 // SUBMISSION TRACKS</span>
            </div>

            <div className="cfp-tracks-header">
              <h2 className="cfp-section-title">
                Explore Our 12 Specialized Tracks
              </h2>
              <p className="cfp-section-sub">
                We invite comprehensive proposals across a wide range of offensive, defensive, hardware, AI, and community domains. Click any track to view scope details.
              </p>
            </div>

            <div className="cfp-tracks-grid">
              {callForPapers.tracks.map((track, idx) => {
                const trackNum = (idx + 1).toString().padStart(2, '0');
                return (
                  <div
                    key={idx}
                    className="cfp-track-card clickable"
                    style={{ animationDelay: `${idx * 45}ms` }}
                    onClick={() => setActiveTrack({ ...track, num: trackNum })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveTrack({ ...track, num: trackNum });
                      }
                    }}
                  >
                    <BoxBorderDraw />
                    <span className="card-box-tick tl" />
                    <span className="card-box-tick tr" />
                    <span className="card-box-tick bl" />
                    <span className="card-box-tick br" />

                    <div className="cfp-track-card-top">
                      <div className="cfp-track-num">{trackNum}</div>
                      <h3 className="cfp-track-title">{track.title}</h3>
                    </div>
                    <span className="cfp-track-click-hint">CLICK FOR DETAILS ↗</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 3: TOPICS OF INTEREST ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">03 // TOPICS OF INTEREST</span>
            </div>

            <h2 className="cfp-section-title">
              Key Subject Areas We Invite
            </h2>

            <div className="cfp-topics-grid">
              {callForPapers.topics.map((topic, idx) => {
                const topicTitle = typeof topic === 'string' ? topic : topic.title;
                return (
                  <div
                    key={idx}
                    className="cfp-topic-chip-simple"
                    style={{ animationDelay: `${idx * 35}ms` }}
                  >
                    <BoxBorderDraw />
                    <span className="card-box-tick tl" />
                    <span className="card-box-tick tr" />
                    <span className="card-box-tick bl" />
                    <span className="card-box-tick br" />

                    <div className="cfp-topic-header">
                      <span className="cfp-topic-bullet">▸</span>
                      <span className="cfp-topic-title">{topicTitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cfp-topics-note-card">
              <BoxBorderDraw />
              <span className="card-box-tick tl" />
              <span className="card-box-tick tr" />
              <span className="card-box-tick bl" />
              <span className="card-box-tick br" />

              <p className="cfp-topics-note-text">
                {callForPapers.topicsNote}
              </p>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 4: WHAT MAKES A STRONG SUBMISSION? ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">04 // SUBMISSION EXCELLENCE</span>
            </div>

            <h2 className="cfp-section-title">
              What Makes a Strong Submission?
            </h2>
            <p className="cfp-section-sub">
              We are particularly interested in talks that provide one or more of the following key elements:
            </p>

            <div className="cfp-pillars-grid">
              {callForPapers.strongSubmissions.map((pillar, idx) => {
                const criteriaNum = `CRITERIA 0${idx + 1}`;
                return (
                  <div
                    key={idx}
                    className="cfp-pillar-card"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <BoxBorderDraw />
                    <span className="card-box-tick tl" />
                    <span className="card-box-tick tr" />
                    <span className="card-box-tick bl" />
                    <span className="card-box-tick br" />

                    <div className="cfp-pillar-header">
                      <span className="cfp-pillar-badge">{criteriaNum}</span>
                      <h3 className="cfp-pillar-title">{pillar.title}</h3>
                    </div>
                    <p className="cfp-pillar-desc">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 5: REVIEW & SELECTION ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">05 // REVIEW & SELECTION</span>
            </div>

            <div className="cfp-split-grid">
              {/* Review Process */}
              <div className="cfp-review-card">
                <BoxBorderDraw />
                <span className="card-box-tick tl" />
                <span className="card-box-tick tr" />
                <span className="card-box-tick bl" />
                <span className="card-box-tick br" />

                <h3 className="cfp-card-main-title">{callForPapers.reviewAndSelection.process.title}</h3>
                <p className="cfp-body-text">{callForPapers.reviewAndSelection.process.text}</p>
                <p className="cfp-factors-label">{callForPapers.reviewAndSelection.process.factorsLabel}</p>
                <ul className="cfp-factors-list">
                  {callForPapers.reviewAndSelection.process.factors.map((factor, idx) => (
                    <li key={idx} className="cfp-factor-item">
                      <span className="factor-bullet">✓</span> {factor}
                    </li>
                  ))}
                </ul>
                <p className="cfp-review-footer">{callForPapers.reviewAndSelection.process.footer}</p>
              </div>

              {/* Independence & Fairness */}
              <div className="cfp-fairness-card">
                <BoxBorderDraw />
                <span className="card-box-tick tl" />
                <span className="card-box-tick tr" />
                <span className="card-box-tick bl" />
                <span className="card-box-tick br" />

                <h3 className="cfp-card-main-title">{callForPapers.reviewAndSelection.fairness.title}</h3>
                <div className="cfp-fairness-quote-box">
                  <span className="cfp-quote-icon">“</span>
                  <p className="cfp-fairness-text">
                    {callForPapers.reviewAndSelection.fairness.text}
                  </p>
                  <p className="cfp-fairness-subtext">
                    {callForPapers.reviewAndSelection.fairness.subtext}
                  </p>
                </div>
                <div className="cfp-fairness-pillars">
                  <div className="cfp-fairness-pillar">
                    <span className="fairness-bullet">✓</span>
                    <span>100% evaluated on research quality & technical merit</span>
                  </div>
                  <div className="cfp-fairness-pillar">
                    <span className="fairness-bullet">✓</span>
                    <span>Zero vendor, sponsor, or corporate affiliation bias</span>
                  </div>
                  <div className="cfp-fairness-pillar">
                    <span className="fairness-bullet">✓</span>
                    <span>Equal opportunity for first-time and veteran presenters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 6: CODE OF CONDUCT & SPEAKER RESPONSIBILITIES ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">06 // ETHICS & RESPONSIBILITIES</span>
            </div>

            <div className="cfp-split-grid">
              {/* Code of Conduct */}
              <div className="cfp-info-card">
                <BoxBorderDraw />
                <span className="card-box-tick tl" />
                <span className="card-box-tick tr" />
                <span className="card-box-tick bl" />
                <span className="card-box-tick br" />

                <h3 className="cfp-card-main-title">Code of Conduct</h3>
                <p className="cfp-info-subtitle">All speakers, participants, and staff must comply with community ethical standards:</p>
                <div className="cfp-rules-list">
                  {callForPapers.codeOfConduct.map((rule, idx) => (
                    <div key={idx} className="cfp-rule-item">
                      <span className="rule-num">0{idx + 1}</span>
                      <p className="rule-text">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speaker Responsibilities */}
              <div className="cfp-info-card">
                <BoxBorderDraw />
                <span className="card-box-tick tl" />
                <span className="card-box-tick tr" />
                <span className="card-box-tick bl" />
                <span className="card-box-tick br" />

                <h3 className="cfp-card-main-title">Speaker Responsibilities</h3>
                <p className="cfp-info-subtitle">Expected standards for technical accuracy, ethics, and presentation material:</p>
                <div className="cfp-rules-list">
                  {callForPapers.speakerResponsibilities.map((resp, idx) => (
                    <div key={idx} className="cfp-rule-item">
                      <span className="rule-num">{(idx + 1).toString().padStart(2, '0')}</span>
                      <p className="rule-text">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 7: WHAT WE DON'T WANT ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">07 // SUBMISSION GUIDELINES</span>
            </div>

            <div className="cfp-dont-want-card">
              <BoxBorderDraw />
              <span className="card-box-tick tl" />
              <span className="card-box-tick tr" />
              <span className="card-box-tick bl" />
              <span className="card-box-tick br" />

              <div className="cfp-dont-header">
                <span className="dont-badge">EXCLUSIONS</span>
                <h3 className="cfp-card-main-title">What We Don't Want</h3>
                <p className="cfp-section-sub">Please avoid submitting the following content types:</p>
              </div>

              <div className="cfp-dont-grid">
                {callForPapers.whatWeDontWant.map((item, idx) => (
                  <div key={idx} className="cfp-dont-item">
                    <span className="dont-x">✕</span>
                    <span className="dont-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cfv-section-divider" />

          {/* ── SECTION 8: FIRST-TIME SPEAKERS & SUBMIT PROPOSAL ── */}
          <div className="cfp-open-block">
            <div className="cfv-tag-row">
              <span className="cfv-tag-dot" />
              <span className="cfv-tag-label">08 // GET INVOLVED</span>
            </div>

            {/* First-time speakers banner */}
            <div className="cfp-first-time-card">
              <BoxBorderDraw />
              <span className="card-box-tick tl" />
              <span className="card-box-tick tr" />
              <span className="card-box-tick bl" />
              <span className="card-box-tick br" />

              <span className="first-time-badge">NEW PRESENTERS</span>
              <h3 className="cfp-first-time-title">{callForPapers.firstTimeSpeakers.title}</h3>
              <p className="cfp-first-time-sub">{callForPapers.firstTimeSpeakers.subtitle}</p>
              <p className="cfp-first-time-text">{callForPapers.firstTimeSpeakers.text}</p>
              <div className="cfp-first-time-callout">
                {callForPapers.firstTimeSpeakers.callout}
              </div>
            </div>

            {/* Submit proposal footer banner */}
            <div className="cfp-submit-footer-card">
              <BoxBorderDraw />
              <span className="card-box-tick tl" />
              <span className="card-box-tick tr" />
              <span className="card-box-tick bl" />
              <span className="card-box-tick br" />

              <div className="cfp-submit-left">
                <span className="cfv-status-pill closed">
                  <span className="pulse-dot" /> {callForPapers.submitProposal.status.toUpperCase()}
                </span>
                <h3 className="cfp-submit-title">{callForPapers.submitProposal.title}</h3>
                <p className="cfp-submit-sub">{callForPapers.submitProposal.subtext}</p>
              </div>

              <div className="cfp-submit-right">
                <p className="cfp-submit-heading">{callForPapers.submitProposal.calloutHeading}</p>
                <p className="cfp-submit-action-text">{callForPapers.submitProposal.callout}</p>

                <div className="cfv-social-actions" style={{ marginTop: '16px' }}>
                  <Anime3DButton
                    href="https://x.com/BSidesDharam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cfv-social-pill"
                  >
                    <SocialXIcon size={16} /> FOLLOW ON X
                  </Anime3DButton>
                  <Anime3DButton
                    href="https://www.linkedin.com/company/bsidesdharamshala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cfv-social-pill"
                  >
                    <SocialLinkedinIcon size={16} /> LINKEDIN
                  </Anime3DButton>
                  <Anime3DButton
                    href="https://www.instagram.com/bsidesdharamshala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cfv-social-pill"
                  >
                    <SocialInstagramIcon size={16} /> INSTAGRAM
                  </Anime3DButton>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── DETAILS MODAL POPUP FOR ALL CARDS ── */}
      {activeTrack && (
        <div className="cfp-modal-backdrop" onClick={() => setActiveTrack(null)}>
          <div className="cfp-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <BoxBorderDraw />
            <span className="card-box-tick tl" />
            <span className="card-box-tick tr" />
            <span className="card-box-tick bl" />
            <span className="card-box-tick br" />

            <button className="cfp-modal-close" onClick={() => setActiveTrack(null)} aria-label="Close details">
              ✕
            </button>

            <div className="cfp-modal-header">
              <span className="cfv-tag-label">{activeTrack.tagLabel || `CARD DETAILS // SCOPE GUIDANCE`}</span>
              <h3 className="cfp-modal-title">
                {activeTrack.num && <span className="cfp-track-num-badge">{activeTrack.num}</span>} {activeTrack.title}
              </h3>
            </div>

            <div className="cfp-modal-body">
              {activeTrack.desc && (
                <>
                  <p className="cfp-modal-desc-heading">Details & Guidance:</p>
                  <p className="cfp-modal-desc">{activeTrack.desc}</p>
                </>
              )}

              {activeTrack.subtext && (
                <p className="cfp-modal-desc" style={{ marginTop: '8px', color: '#94A3B8' }}>{activeTrack.subtext}</p>
              )}

              {(activeTrack.topics || activeTrack.factors || activeTrack.items || activeTrack.rules) && (
                <>
                  <h4 className="cfp-modal-desc-heading" style={{ marginTop: '16px' }}>KEY POINTS & GUIDELINES:</h4>
                  <ul className="cfp-modal-topics-list">
                    {(activeTrack.topics || activeTrack.factors || activeTrack.items || activeTrack.rules).map((item, idx) => (
                      <li key={idx} className="cfp-modal-topic-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                        <span className="bullet">▸</span> {typeof item === 'string' ? item : item.text || item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTrack.footer && (
                <p className="cfp-modal-desc" style={{ marginTop: '16px', color: '#FF1638', fontWeight: 600 }}>
                  {activeTrack.footer}
                </p>
              )}
            </div>

            <div className="cfp-modal-footer">
              <button className="cfp-modal-btn" onClick={() => setActiveTrack(null)}>
                <BoxBorderDraw rx="6" />
                <span className="card-box-tick tl" />
                <span className="card-box-tick tr" />
                <span className="card-box-tick bl" />
                <span className="card-box-tick br" />
                CLOSE DETAILS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

