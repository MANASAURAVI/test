import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import { Link } from 'react-router-dom';
import TopographicLines from '../components/TopographicLines';
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

function ArrowRightIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function UsersIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const BoxBorderDraw = ({ rx = "12" }) => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx={rx} fill="none" stroke="#FF1638" strokeWidth="1.5" pathLength="100" />
  </svg>
);

export default function TeamPage() {
  // Core Organizing Team (Featured Large Cards)
  const coreTeam = [
    {
      id: "c1",
      name: "ADITYA KANODIA",
      role: "FOUNDER / ORGANISER",
      tag: "CORE LEAD",
      desc: "Building the community and driving the overall vision for BSides Dharamshala.",
      img: "/images/img1.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "c2",
      name: "MEERA SEN",
      role: "LOGISTICS & OPERATIONS LEAD",
      tag: "CORE LEAD",
      desc: "Architecting venue infrastructure, mountain security ops, and emergency event flow.",
      img: "/images/img2.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "c3",
      name: "ROHAN VARMA",
      role: "TECHNICAL PROGRAM CHAIR",
      tag: "CORE LEAD",
      desc: "Directing CFP review standards, offensive security tracks, and village labs.",
      img: "/images/img3.webp",
      linkedin: "#",
      x: "#"
    }
  ];

  // Organising / Operations Team (Compact Role Cards)
  const opsTeam = [
    {
      id: "o1",
      name: "KAVITA RAO",
      role: "CLOUD SECURITY & CFP LEAD",
      img: "/images/img7.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "o2",
      name: "DR. VIKRAM SETH",
      role: "REVIEW BOARD CHAIR",
      img: "/images/img5.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "o3",
      name: "DEVANG PATEL",
      role: "OFFENSIVE RESEARCH & VILLAGES",
      img: "/images/img1.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "o4",
      name: "ANANYA KAPOOR",
      role: "COMMUNITY & OUTREACH",
      img: "/images/img4.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "o5",
      name: "SANJAY DUTTA",
      role: "SENIOR STRATEGY & ADVISORY",
      img: "/images/img3.webp",
      linkedin: "#",
      x: "#"
    },
    {
      id: "o6",
      name: "ALEX SHARMA",
      role: "CONFERENCE OPERATIONS LEAD",
      img: "/images/img2.webp",
      linkedin: "#",
      x: "#"
    }
  ];

  // Behind The Scenes Photos
  const btsGallery = [
    { id: "bts1", label: "OPS / 01", title: "Stage & AV Command Center", img: "/images/img1.webp" },
    { id: "bts2", label: "SPEAKER MANAGEMENT / 02", title: "Keynote & Speaker Briefings", img: "/images/img2.webp" },
    { id: "bts3", label: "REGISTRATION / 03", title: "Welcome & Swag Desk", img: "/images/img3.webp" },
    { id: "bts4", label: "CTF & VILLAGES / 04", title: "Hardware Village Operations", img: "/images/img5.webp" }
  ];

  // Community Contributors Pills
  const contributorPillars = [
    "RESEARCHERS",
    "VOLUNTEERS",
    "SPEAKERS",
    "PARTNERS",
    "VILLAGE LEADS",
    "CONTENT REVIEWERS"
  ];

  // AnimeJS Mount Animations
  useEffect(() => {
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

    animate('.team-section-title', {
      translateY: [30, 0],
      opacity: [0, 1],
      delay: stagger(100),
      duration: 700,
      ease: 'outQuad'
    });

    animate('.team-core-card', {
      translateY: [40, 0],
      opacity: [0, 1],
      delay: stagger(100, { start: 250 }),
      duration: 800,
      ease: 'outExpo'
    });

    animate('.team-ops-card', {
      scale: [0.95, 1],
      opacity: [0, 1],
      delay: stagger(70, { start: 400 }),
      duration: 650,
      ease: 'outBack'
    });
  }, []);

  const cardRafRef = useRef(null);

  // AnimeJS 3D Card Hover
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    if (!card || cardRafRef.current) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;

    cardRafRef.current = requestAnimationFrame(() => {
      animate(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: 1.02,
        duration: 120,
        ease: 'outQuad'
      });
      cardRafRef.current = null;
    });
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    if (!card) return;
    if (cardRafRef.current) {
      cancelAnimationFrame(cardRafRef.current);
      cardRafRef.current = null;
    }
    animate(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 500,
      ease: 'outElastic(1, 0.6)'
    });
  };

  return (
    <div className="internal-page-view team-page-wrapper">
      {/* ── UNIFIED BASE FIXED BACKGROUND ── */}
      <div className="team-fixed-bg-wrap">
        <img
          src="/images/team.png"
          alt="BSides Dharamshala Team Background"
          className="team-fixed-bg-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="team-fixed-bg-overlay" />
      </div>

      {/* ── STANDALONE HERO SECTION ── */}
      <section className="team-standalone-hero">
        <TopographicLines className="page-topo-overlay" />

        <div className="section-container team-hero-container">
          <div className="contact-header-panel cfp-contact-theme-panel team-header-compact">
            <span className="contact-script-badge">&gt; ./team_roster.sh --active-crew // TEAM / 04</span>
            <h1 className="cfp-hero-main-title team-hero-title-nowrap">
              THE PEOPLE<br />
              <span className="title-brush text-highlight-red minimal-brush-highlight">BEHIND THE SIGNAL</span>
            </h1>
            <div className="cfp-hero-event-name" style={{ color: '#FF1638', marginTop: '6px', marginBottom: '10px' }}>
              BSIDES DHARAMSHALA CREW // OPEN SECURITY KNOWLEDGE
            </div>
            <p className="contact-header-sub" style={{ marginBottom: '18px', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
              BSides Dharamshala is built by people who believe security knowledge should be shared openly.
            </p>

            <div className="team-hero-action-row">
              <Anime3DButton tag={Link} to="/conference/call-for-volunteers" className="btn-hero-primary">
                JOIN THE COMMUNITY <ArrowRightIcon size={16} />
              </Anime3DButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01: CORE ORGANISING TEAM ── */}
      <section className="section-block team-section-block">
        <div className="section-container">
          <div className="team-section-header">
            <span className="team-section-number">01</span>
            <h2 className="team-section-title">CORE ORGANISING TEAM</h2>
            <div className="team-section-line" />
          </div>

          <div className="team-core-grid">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="team-core-card team-member-card-glass"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <BoxBorderDraw />
                
                <div className="team-card-image-wrap core-image-wrap">
                  <img src={member.img} alt={member.name} className="team-card-photo" />
                  <span className="team-card-badge">{member.tag}</span>
                </div>

                <div className="team-card-body">
                  <span className="team-member-role">{member.role}</span>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-bio">{member.desc}</p>

                  <div className="team-card-socials">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-link" title="LinkedIn">
                      <SocialLinkedinIcon size={13} />
                      <span>LINKEDIN</span>
                    </a>
                    <a href={member.x} target="_blank" rel="noopener noreferrer" className="team-social-link" title="X (Twitter)">
                      <SocialXIcon size={13} />
                      <span>X</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02: ORGANISING & OPERATIONS TEAM ── */}
      <section className="section-block team-section-block">
        <div className="section-container">
          <div className="team-section-header">
            <span className="team-section-number">02</span>
            <h2 className="team-section-title">ORGANISING & OPERATIONS TEAM</h2>
            <div className="team-section-line" />
          </div>

          <div className="team-ops-grid">
            {opsTeam.map((member) => (
              <div
                key={member.id}
                className="team-ops-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <BoxBorderDraw rx="10" />
                <div className="ops-card-avatar">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="ops-card-info">
                  <span className="ops-role">{member.role}</span>
                  <h4 className="ops-name">{member.name}</h4>
                </div>
                <div className="ops-card-social">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ops-social-btn" title="LinkedIn">
                    <SocialLinkedinIcon size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03: BEHIND THE SCENES ── */}
      <section className="section-block team-section-block">
        <div className="section-container">
          <div className="team-section-header">
            <span className="team-section-number">03</span>
            <h2 className="team-section-title">BEHIND THE SCENES</h2>
            <p className="team-section-sub">Real moments from the crew in action — stage setup, speaker prep, network ops, and community hacking.</p>
            <div className="team-section-line" />
          </div>

          <div className="team-bts-grid">
            {btsGallery.map((item) => (
              <div key={item.id} className="team-bts-card">
                <BoxBorderDraw rx="10" />
                <img src={item.img} alt={item.title} className="bts-img" />
                <div className="bts-overlay">
                  <span className="bts-label">{item.label}</span>
                  <h4 className="bts-title">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04: COMMUNITY & CONTRIBUTORS ── */}
      <section className="section-block team-section-block">
        <div className="section-container">
          <div className="team-community-panel">
            <BoxBorderDraw rx="16" />
            <span className="team-section-number">04</span>
            <h2 className="community-main-heading">NOT JUST A TEAM. A COMMUNITY.</h2>
            <p className="community-lead-desc">
              BSides Dharamshala isn't built by a single organisation. It's built by researchers, practitioners, students, volunteers, speakers, partners, and everyone who shows up to share knowledge.
            </p>

            <div className="community-pill-grid">
              {contributorPillars.map((pill) => (
                <div key={pill} className="community-pill">
                  <span className="pill-dot" /> {pill}
                </div>
              ))}
            </div>

            <div className="community-quote-box">
              <span className="quote-mark">“</span>
              <span className="quote-text">Built by the community. For the community.</span>
              <span className="quote-mark">”</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05: JOIN US (CTA) ── */}
      <section className="section-block team-cta-section">
        <div className="section-container">
          <div className="team-cta-banner">
            <BoxBorderDraw rx="16" />
            <div className="team-cta-left">
              <span className="sec-tag-dot" />
              <span className="team-section-number inline-num">05</span>
              <h3 className="banner-title">WANT TO BE PART OF IT?</h3>
              <p className="banner-desc">
                BSides Dharamshala is 100% volunteer-driven. Join our crew for stage ops, village labs, CTF development, and attendee hospitality.
              </p>
            </div>
            <div className="team-cta-right">
              <Anime3DButton tag={Link} to="/conference/call-for-volunteers" className="btn-hero-primary">
                JOIN THE COMMUNITY <ArrowRightIcon size={16} />
              </Anime3DButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
