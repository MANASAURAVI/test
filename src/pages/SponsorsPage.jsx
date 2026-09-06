import React, { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import TopographicLines from '../components/TopographicLines';
import { conferenceData } from '../data/conferenceData';
import Anime3DButton from '../components/Anime3DButton';

function MailIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CopyIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SparklesIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

const BoxBorderDraw = ({ rx = "8" }) => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx={rx} fill="none" stroke="#FF1638" strokeWidth="1.5" pathLength="100" />
  </svg>
);

export default function SponsorsPage() {
  const { sponsors } = conferenceData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    tier: 'Platinum Sponsor',
    message: ''
  });

  const sponsorshipEmail = "sponsors@bsidesdharamshala.org";

  // AnimeJS Mount Animations
  useEffect(() => {
    // 1. Hero Entrance
    animate('.cfp-hero-main-title', {
      translateY: [35, 0],
      opacity: [0, 1],
      duration: 850,
      ease: 'outExpo'
    });

    animate('.contact-script-badge', {
      scale: [0.75, 1],
      opacity: [0, 1],
      duration: 700,
      ease: 'outBack'
    });

    animate('.contact-header-sub', {
      translateY: [20, 0],
      opacity: [0, 1],
      delay: 150,
      duration: 800,
      ease: 'outQuad'
    });

    // 2. Stats Cards Staggered Animation
    animate('.stat-card-glass', {
      translateY: [30, 0],
      opacity: [0, 1],
      delay: stagger(90, { start: 250 }),
      duration: 700,
      ease: 'outExpo'
    });

    // 3. Pillars Cards Staggered Animation
    animate('.pillar-card-glass', {
      translateY: [30, 0],
      opacity: [0, 1],
      delay: stagger(110, { start: 400 }),
      duration: 750,
      ease: 'outExpo'
    });

    // 4. Tier Cards Staggered Animation
    animate('.tier-card-glass', {
      translateY: [40, 0],
      opacity: [0, 1],
      delay: stagger(130, { start: 550 }),
      duration: 800,
      ease: 'outExpo'
    });
  }, []);

  // AnimeJS Modal Entrance Animation
  useEffect(() => {
    if (isProspectusModalOpen) {
      animate('.prospectus-modal-card', {
        scale: [0.82, 1],
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 400,
        ease: 'outBack'
      });
    }
  }, [isProspectusModalOpen]);

  // AnimeJS Magnetic 3D Tilt for Interactive Cards
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;

    animate(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 150,
      ease: 'outQuad'
    });
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    if (!card) return;
    animate(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 550,
      ease: 'outElastic(1, 0.6)'
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsProspectusModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(sponsorshipEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setFormSubmitted(true);
    // AnimeJS feedback pop
    animate('.form-success-state', {
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 500,
      ease: 'outBack'
    });
  };

  const scrollToInquiry = (tierName) => {
    if (tierName) {
      setFormData((prev) => ({ ...prev, tier: tierName }));
    }
    const elem = document.getElementById('sponsor-inquiry-form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiersList = [
    {
      id: 'diamond',
      name: 'Diamond Title Sponsor',
      badge: 'TITLE SPONSOR',
      price: '₹5,000,000 / $60,000',
      tagline: 'Exclusive Title Partnership & Main Stage Command',
      featured: true,
      perks: [
        'Exclusive "BSides Dharamshala presented by [Your Brand]" naming right',
        'Keynote / Main Stage Opening Address (20 Mins)',
        '10 VIP All-Access Passes + Speakers Dinner Invitations',
        'Prime 20x20 Booth space at the main exhibition hall',
        'Logo on all attendee badges, stream overlays, and official website',
        'Custom social media campaign & dedicated press release inclusion'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum Sponsor',
      badge: 'PLATINUM',
      price: '₹2,500,000 / $30,000',
      tagline: 'Premier Technical Track & Workshop Host',
      featured: false,
      perks: [
        'Dedicated Track / Workshop Room Sponsorship',
        '6 VIP All-Access Passes + Speakers Reception Access',
        'Prominent 10x10 Exhibition Booth in main hall',
        'Logo placement on badge lanyards & digital signage',
        'Swag bag product insertion (stickers, hardware, coupons)',
        'Recruitment booth & resume database access'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      badge: 'GOLD',
      price: '₹1,200,000 / $15,000',
      tagline: 'Ecosystem & CTF Competition Partner',
      featured: false,
      perks: [
        'CTF Flag Hunt & Challenge Track Co-Branding',
        '4 Conference All-Access Passes',
        'Dedicated 8x8 Sponsor Table in networking lounge',
        'Logo on conference website & digital booklet',
        'Social media acknowledgement across all official channels'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      badge: 'SILVER',
      price: '₹600,000 / $7,500',
      tagline: 'Community Education & Badge Supporter',
      featured: false,
      perks: [
        '2 Conference All-Access Passes',
        'Logo on official website sponsor wall & opening slides',
        'Promotional material in digital attendee kit',
        'Community recognition during closing ceremony'
      ]
    }
  ];

  const pillarsList = [
    {
      num: '01',
      title: 'TARGETED TECHNICAL AUDIENCE',
      desc: 'Connect directly with 500+ offensive security engineers, cloud architects, incident responders, CTF competitors, and vulnerability researchers.'
    },
    {
      num: '02',
      title: 'HIGH-ALTITUDE BRANDING',
      desc: 'Differentiate your organization by supporting India\'s premier Himalayan cybersecurity conference in Dharamshala.'
    },
    {
      num: '03',
      title: 'RECRUITMENT & TALENT PIPELINE',
      desc: 'Access top-tier security engineering talent, university researchers, and proven hands-on problem solvers in real time.'
    },
    {
      num: '04',
      title: '100% COMMUNITY IMPACT',
      desc: 'Fund free community attendee passes, student travel stipends, and diversity initiatives for open security education.'
    }
  ];

  return (
    <div className="internal-page-view sponsors-page-wrapper">
      {/* ── UNIFIED BASE FIXED BACKGROUND ── */}
      <div className="sponsors-fixed-bg-wrap">
        <img
          src="/images/sponser.png"
          alt="BSides Dharamshala Conference Sponsors Background"
          className="sponsors-fixed-bg-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="sponsors-fixed-bg-overlay" />
      </div>

      {/* ── STANDALONE HERO SECTION ── */}
      <section className="sponsors-standalone-hero coc-hero-wrap">
        <TopographicLines className="page-topo-overlay" />

        <div className="section-container sponsors-hero-container">
          <div className="contact-header-panel cfp-contact-theme-panel">
            <span className="contact-script-badge">&gt; ./sponsors_portal.sh --partner-access</span>
            <h1 className="cfp-hero-main-title">
              CONFERENCE <span className="title-brush text-highlight-red minimal-brush-highlight">SPONSORS & PARTNERS</span>
            </h1>
            <div className="cfp-hero-event-name" style={{ color: '#FF1638', marginTop: '4px', marginBottom: '12px' }}>
              BSIDES DHARAMSHALA 2027 // SPONSORSHIP PORTAL
            </div>
            <p className="contact-header-sub">
              Powering open technical research, community access, diversity grants, and high-altitude security knowledge exchange in the Himalayas.
            </p>

            {/* HERO ACTIONS POWERED BY ANIME3DBUTTON */}
            <div className="sponsors-hero-actions" style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Anime3DButton 
                onClick={() => scrollToInquiry()} 
                className="btn-hero-primary"
              >
                BECOME A SPONSOR <ArrowRightIcon size={16} />
              </Anime3DButton>

              <Anime3DButton 
                onClick={() => setIsProspectusModalOpen(true)} 
                className="btn-hero-secondary"
              >
                <DownloadIcon size={16} /> DOWNLOAD PROSPECTUS
              </Anime3DButton>
            </div>
          </div>
        </div>
      </section>


      {/* ── WHY SPONSOR US (PILLARS) WITH ANIMEJS TILT ── */}
      <section className="section-block sponsors-pillars-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">
              <span className="tag-num">01</span>
              <span className="tag-slash">//</span>
              <span className="tag-title">PARTNERSHIP VALUE</span>
            </div>
            <h2 className="section-title">
              WHY SPONSOR <br />
              <span className="text-highlight-red">BSIDES DHARAMSHALA?</span>
            </h2>
            <p className="section-subtitle">
              Invest in open security research, empower community defenders, and showcase your technology in an unforgettable mountain environment.
            </p>
          </div>

          <div className="pillars-grid">
            {pillarsList.map((p, idx) => (
              <div 
                key={idx} 
                className="pillar-card-glass"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <BoxBorderDraw />
                <div className="pillar-num">{p.num}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP TIERS PACKAGES WITH ANIMEJS 3D CARDS ── */}
      <section className="section-block sponsors-tiers-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">
              <span className="tag-num">02</span>
              <span className="tag-slash">//</span>
              <span className="tag-title">TIERS & PACKAGES</span>
            </div>
            <h2 className="section-title">
              2027 SPONSORSHIP <br />
              <span className="text-highlight-red">PACKAGES & PERKS.</span>
            </h2>
            <p className="section-subtitle">
              Choose from tailored packages designed for maximum visibility, high-touch engagement, and recruiting impact.
            </p>
          </div>

          <div className="tiers-grid">
            {tiersList.map((tier) => (
              <div 
                key={tier.id} 
                className={`tier-card-glass ${tier.featured ? 'tier-featured-card' : ''}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                {tier.featured && (
                  <div className="tier-featured-ribbon">
                    <SparklesIcon size={14} /> MOST PRESTIGIOUS
                  </div>
                )}
                
                <div className="tier-card-head">
                  <span className={`tier-badge ${tier.id}-badge`}>{tier.badge}</span>
                  <h3 className="tier-card-title">{tier.name}</h3>
                  <div className="tier-price">{tier.price}</div>
                  <p className="tier-tagline">{tier.tagline}</p>
                </div>

                <div className="tier-perks-list">
                  {tier.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="tier-perk-item">
                      <div className="perk-check">
                        <CheckIcon size={14} />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="tier-card-foot">
                  <Anime3DButton 
                    onClick={() => scrollToInquiry(tier.name)} 
                    className={tier.featured ? "btn-hero-primary w-full" : "btn-hero-secondary w-full"}
                  >
                    SELECT {tier.badge} TIER <ArrowRightIcon size={16} />
                  </Anime3DButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT CONFIRMED SPONSORS SHOWCASE ── */}
      <section className="section-block sponsors-showcase-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">
              <span className="tag-num">03</span>
              <span className="tag-slash">//</span>
              <span className="tag-title">COMMUNITY LEADERS</span>
            </div>
            <h2 className="section-title">
              OUR CONFIRMED <br />
              <span className="text-highlight-red">SPONSORS & ECOSYSTEM PARTNERS.</span>
            </h2>
            <p className="section-subtitle">
              We extend our heartfelt gratitude to the organizations powering BSides Dharamshala.
            </p>
          </div>

          {/* Platinum Tier Display */}
          <div className="sponsor-tier-block">
            <div className="tier-label-strip">
              <span className="tier-badge-red">PLATINUM SPONSORS</span>
            </div>
            <div className="sponsors-grid platinum-grid">
              {sponsors.platinum.map((sp, idx) => (
                <div 
                  key={idx} 
                  className="sponsor-card platinum-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <BoxBorderDraw />
                  <div className="sponsor-code">{sp.code}</div>
                  <div className="sponsor-name">{sp.name}</div>
                  <div className="sponsor-sub">{sp.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Tier Display */}
          <div className="sponsor-tier-block" style={{ marginTop: '30px' }}>
            <div className="tier-label-strip">
              <span className="tier-badge-muted">GOLD PARTNERS</span>
            </div>
            <div className="sponsors-grid gold-grid">
              {sponsors.gold.map((sp, idx) => (
                <div 
                  key={idx} 
                  className="sponsor-card gold-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="sponsor-code">{sp.code}</div>
                  <div className="sponsor-name">{sp.name}</div>
                  <div className="sponsor-sub">{sp.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners Display */}
          <div className="sponsor-tier-block" style={{ marginTop: '30px' }}>
            <div className="tier-label-strip">
              <span className="tier-badge-muted">COMMUNITY & ECOSYSTEM PARTNERS</span>
            </div>
            <div className="sponsors-grid community-grid">
              {sponsors.community.map((sp, idx) => (
                <div 
                  key={idx} 
                  className="sponsor-card community-card"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <div className="sponsor-name-sm">{sp.name}</div>
                  <div className="sponsor-sub">{sp.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSOR INQUIRY FORM & DIRECT CONTACT ── */}
      <section className="section-block sponsors-inquiry-section" id="sponsor-inquiry-form">
        <div className="section-container">
          <div className="sponsors-inquiry-grid">
            
            {/* Left: Info & Direct Mail */}
            <div className="inquiry-info-col">
              <div className="section-tag">
                <span className="tag-num">04</span>
                <span className="tag-slash">//</span>
                <span className="tag-title">GET IN TOUCH</span>
              </div>
              <h2 className="section-title">
                BECOME A <br />
                <span className="text-highlight-red">PARTNER TODAY.</span>
              </h2>
              <p className="inquiry-lead-desc">
                Have questions about custom packages, booth specs, or diversity grants? Connect directly with our sponsorship team.
              </p>

              <div className="direct-email-card-glass">
                <div className="email-card-icon">
                  <MailIcon size={22} color="#FF1638" />
                </div>
                <div className="email-card-details">
                  <span className="email-label">DIRECT SPONSORSHIP DESK</span>
                  <a href={`mailto:${sponsorshipEmail}`} className="email-address">
                    {sponsorshipEmail}
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail} 
                  className="channel-copy-btn" 
                  title="Copy Email Address"
                >
                  {copiedEmail ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                </button>
              </div>

              <div className="inquiry-reassurance-box">
                <ShieldCheckIcon size={18} color="#FF1638" />
                <span>Fast 24-hour response time from our organizing team. Custom tailored packages available.</span>
              </div>
            </div>

            {/* Right: Glass Inquiry Form */}
            <div className="inquiry-form-col">
              <div 
                className="glass-form-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <BoxBorderDraw />
                
                {formSubmitted ? (
                  <div className="form-success-state">
                    <div className="success-icon-badge">
                      <CheckIcon size={32} />
                    </div>
                    <h3>INQUIRY DISPATCHED!</h3>
                    <p>
                      Thank you <strong>{formData.name}</strong>. Our sponsorship team at <strong>BSides Dharamshala</strong> has received your request for the <strong>{formData.tier}</strong> package. We will contact you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <Anime3DButton 
                      onClick={() => setFormSubmitted(false)} 
                      className="btn-hero-secondary"
                      style={{ marginTop: '16px' }}
                    >
                      SEND ANOTHER INQUIRY
                    </Anime3DButton>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="sponsor-form">
                    <h3 className="form-title">&gt; INQUIRE ABOUT SPONSORSHIP</h3>
                    
                    <div className="form-group-row">
                      <div className="form-field">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="form-field">
                        <label>Work Email *</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>

                    <div className="form-group-row">
                      <div className="form-field">
                        <label>Company / Organization *</label>
                        <input 
                          type="text" 
                          name="company" 
                          required 
                          placeholder="e.g. Acme Cyber Security"
                          value={formData.company}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="form-field">
                        <label>Tier Interest</label>
                        <select 
                          name="tier"
                          value={formData.tier}
                          onChange={handleFormChange}
                        >
                          <option value="Diamond Title Sponsor">Diamond Title Sponsor (₹5M / $60K)</option>
                          <option value="Platinum Sponsor">Platinum Sponsor (₹2.5M / $30K)</option>
                          <option value="Gold Partner">Gold Partner (₹1.2M / $15K)</option>
                          <option value="Silver Partner">Silver Partner (₹600K / $7.5K)</option>
                          <option value="Community & Ecosystem">Community & Ecosystem Partner</option>
                          <option value="Custom Partnership">Custom Sponsorship / Grant</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field">
                      <label>Message / Goals (Optional)</label>
                      <textarea 
                        name="message" 
                        rows="3"
                        placeholder="Tell us about your sponsorship goals, booth preferences, or specific inquiries..."
                        value={formData.message}
                        onChange={handleFormChange}
                      />
                    </div>

                    <Anime3DButton type="submit" className="btn-hero-primary w-full" style={{ marginTop: '12px' }}>
                      SUBMIT SPONSORSHIP INQUIRY <ArrowRightIcon size={16} />
                    </Anime3DButton>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROSPECTUS MODAL POWERED BY ANIMEJS ── */}
      {isProspectusModalOpen && (
        <div className="modal-backdrop-glass" onClick={() => setIsProspectusModalOpen(false)}>
          <div className="prospectus-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>BSIDES DHARAMSHALA 2027 PROSPECTUS</h3>
              <button onClick={() => setIsProspectusModalOpen(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-body">
              <p>
                Our 2027 Sponsorship Prospectus includes full demographic breakdowns, floor plans, booth dimensions, talk track schedules, and custom partnership packages.
              </p>
              <div className="prospectus-highlights">
                <div className="highlight-row"><CheckIcon size={14} /> Full Demographics & Attendee Profiles</div>
                <div className="highlight-row"><CheckIcon size={14} /> Exhibition Hall & Booth Map</div>
                <div className="highlight-row"><CheckIcon size={14} /> Branding & Media Deliverables</div>
                <div className="highlight-row"><CheckIcon size={14} /> Speakers Dinner & VIP Networking</div>
              </div>
            </div>
            <div className="modal-footer">
              <Anime3DButton 
                tag="a"
                href={`mailto:${sponsorshipEmail}?subject=Requesting%20BSides%20Dharamshala%202027%20Sponsorship%20Prospectus`} 
                className="btn-hero-primary"
                onClick={() => setIsProspectusModalOpen(false)}
              >
                REQUEST VIA EMAIL <MailIcon size={16} />
              </Anime3DButton>
              <Anime3DButton onClick={() => setIsProspectusModalOpen(false)} className="btn-hero-secondary">
                CLOSE
              </Anime3DButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
