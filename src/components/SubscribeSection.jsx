import React, { useState, useEffect } from 'react';

const BoxBorderDraw = () => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="6" fill="none" stroke="var(--accent-red)" strokeWidth="1.5" pathLength="100" />
  </svg>
);

// Cinematic Movie Delivery Engine (Scene 1: Person -> Scene 2: Bus -> Scene 3: Plane -> Scene 4: Courier to BSides HQ)
const CinematicMailMovie = ({ movieScene }) => {
  return (
    <div className="cinematic-movie-container">
      {/* Movie HUD Header Bar */}
      <div className="movie-hud-bar">
        <span className="movie-rec-badge">
          <span className="rec-dot" /> REC • SCENE {movieScene} / 4
        </span>
        <span className="movie-scene-title">
          {movieScene === 1 && 'SCENE 1: DEPOSIT AT LOCAL POSTBOX'}
          {movieScene === 2 && 'SCENE 2: MAIL BUS EXPRESS TRANSIT'}
          {movieScene === 3 && 'SCENE 3: AIR CARGO OVER HIMALAYAN PEAKS'}
          {movieScene === 4 && 'SCENE 4: HAND DELIVERY TO BSIDES DHARAMSHALA HQ'}
        </span>
      </div>

      {/* Movie Screen Viewport */}
      <div className="movie-screen">
        {/* SCENE 1: Person Walks to Postbox, Drops Mail, Returns */}
        {movieScene === 1 && (
          <div className="movie-stage scene-fade-in" key="scene-1">
            <svg width="100%" height="100" viewBox="0 0 360 100" fill="none">
              <line x1="10" y1="88" x2="350" y2="88" stroke="rgba(var(--accent-rgb), 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Local Postbox */}
              <g className="sc1-postbox">
                <rect x="265" y="55" width="5" height="33" fill="#334155" />
                <path d="M250 32 C250 22 260 17 267 17 C274 17 284 22 284 32 V58 H250 V32 Z" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2" />
                <rect x="256" y="38" width="22" height="9" rx="1.5" fill="#050709" stroke="rgba(var(--accent-rgb), 0.6)" strokeWidth="1" />
                <g className="sc1-flag">
                  <line x1="284" y1="48" x2="284" y2="34" stroke="var(--accent-red)" strokeWidth="2" />
                  <rect x="284" y="34" width="8" height="5" fill="var(--accent-red)" rx="1" />
                </g>
              </g>

              {/* Person Walking in to Mail Slot & Returning */}
              <g className="sc1-person">
                <circle cx="20" cy="34" r="7" fill="var(--accent-red)" />
                <path d="M14 31 C14 27 18 25 23 25 C27 25 29 27 29 31 H14 Z" fill="#FFFFFF" />
                <path d="M13 43 C13 41 16 40 19 40 C22 40 25 41 25 43 V68 H13 Z" fill="#0F141C" stroke="var(--accent-red)" strokeWidth="1.5" />
                <line x1="15" y1="68" x2="11" y2="86" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" className="leg-1" />
                <line x1="23" y1="68" x2="27" y2="86" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" className="leg-2" />
                <path d="M19 48 L35 52 L48 46" fill="none" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" className="sc1-arm" />
              </g>

              {/* Envelope in Hand & Dropping in Slot */}
              <g className="sc1-envelope">
                <rect x="42" y="39" width="18" height="12" rx="1.5" fill="#FFFFFF" stroke="var(--accent-red)" strokeWidth="1" />
                <path d="M42 39 L51 45 L60 39" fill="none" stroke="var(--accent-red)" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
        )}

        {/* SCENE 2: Mail Bus Arrives, Loads Mail, Drives to Airport */}
        {movieScene === 2 && (
          <div className="movie-stage scene-fade-in" key="scene-2">
            <svg width="100%" height="100" viewBox="0 0 360 100" fill="none">
              <line x1="10" y1="88" x2="350" y2="88" stroke="rgba(var(--accent-rgb), 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Scaled roadside Postbox (Clean curb level y=82) */}
              <g className="sc2-postbox">
                <rect x="34" y="60" width="4" height="22" fill="#334155" />
                <path d="M25 44 C25 38 30 34 36 34 C42 34 47 38 47 44 V60 H25 Z" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="1.5" />
              </g>

              {/* Mail Package Loading into Bus */}
              <g className="sc2-mail-package">
                <rect x="38" y="44" width="18" height="12" rx="1.5" fill="#FFFFFF" stroke="var(--accent-red)" strokeWidth="1.2" />
                <path d="M38 44 L47 50 L56 44" fill="none" stroke="var(--accent-red)" strokeWidth="0.8" />
              </g>

              {/* Giant Cyber Mail Bus with 2 Glass Windows 100% Inside Bus Frame */}
              <g className="sc2-bus">
                {/* Headlight beam */}
                <polygon points="105,52 145,44 145,72 105,64" fill="rgba(var(--accent-rgb), 0.25)" />
                
                {/* Main Bus Body (Height: 64px, Length: 155px) */}
                <path d="M-40 18 H70 L105 42 V82 H-50 V28 Z" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2.5" />
                <path d="M-38 22 H68 L98 42 V78 H-46 V30 Z" fill="#0F141C" />

                {/* 2 Glass Windows (Safely inside flat roof section x=32 and x=-10) */}
                <rect x="32" y="24" width="32" height="20" fill="#1E293B" stroke="rgba(var(--accent-rgb), 0.85)" strokeWidth="1.5" rx="2" />
                <rect x="-10" y="24" width="32" height="20" fill="#1E293B" stroke="rgba(var(--accent-rgb), 0.85)" strokeWidth="1.5" rx="2" />

                {/* Big Cyber Bus Title */}
                <text x="-24" y="64" fill="var(--accent-red)" fontSize="10.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
                  BSIDES MAIL BUS
                </text>
                <line x1="-36" y1="70" x2="80" y2="70" stroke="var(--accent-red)" strokeWidth="1.5" strokeDasharray="6 3" />

                {/* Solid Heavy Dual Wheels (Anchored directly to bus chassis) */}
                <g>
                  <circle cx="-16" cy="83" r="9" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2.2" />
                  <circle cx="-16" cy="83" r="4" fill="#1E293B" stroke="#FFFFFF" strokeWidth="1" />
                </g>
                <g>
                  <circle cx="68" cy="83" r="9" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2.2" />
                  <circle cx="68" cy="83" r="4" fill="#1E293B" stroke="#FFFFFF" strokeWidth="1" />
                </g>
              </g>
            </svg>
          </div>
        )}

        {/* SCENE 3: Airport Runway & Jet Airplane Flight Over Himalayan Peaks */}
        {movieScene === 3 && (
          <div className="movie-stage scene-fade-in" key="scene-3">
            <svg width="100%" height="100" viewBox="0 0 360 100" fill="none">
              {/* Himalayan Mountain Range */}
              <path d="M0 75 L30 50 L65 68 L110 42 L160 62 L220 38 L275 60 L325 35 L360 55 V95 H0 Z" fill="rgba(var(--accent-rgb), 0.12)" />

              {/* Floating Sky Clouds */}
              <path d="M40 22 Q50 15 65 18 Q75 12 90 16 Q100 22 95 26 H35 Z" fill="rgba(255,255,255,0.08)" />
              <path d="M220 18 Q230 12 245 15 Q255 10 270 14 Q280 20 275 24 H215 Z" fill="rgba(255,255,255,0.08)" />

              {/* Jet Airplane Takeoff & Flight */}
              <g className="sc3-airplane">
                <path d="M0 16 L28 6 L44 16 L34 24 L8 26 Z" fill="#0F141C" stroke="var(--accent-red)" strokeWidth="1.8" />
                <path d="M16 16 L10 0 L22 14" fill="var(--accent-red)" />
                <path d="M18 20 L12 32 L26 22" fill="rgba(var(--accent-rgb), 0.7)" />
                <polygon points="28,6 36,11 30,14" fill="#FFFFFF" opacity="0.9" />
                <path d="M-4 14 L-12 16 L-4 18 Z" fill="var(--accent-red)" className="thruster-glow" />

                {/* Mail Package Container in Plane Cargo */}
                <rect x="14" y="14" width="12" height="7" rx="1" fill="#FFFFFF" stroke="var(--accent-red)" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
        )}

        {/* SCENE 4: Destination Mail Bus & Courier Hand Delivery to BSides Dharamshala HQ */}
        {movieScene === 4 && (
          <div className="movie-stage scene-fade-in" key="scene-4">
            <svg width="100%" height="100" viewBox="0 0 360 100" fill="none">
              <line x1="10" y1="88" x2="350" y2="88" stroke="rgba(var(--accent-rgb), 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Destination Giant Cyber Mail Bus arriving (Anchored wheels & windows inside frame) */}
              <g className="sc4-bus">
                <path d="M-140 18 H-30 L5 42 V82 H-150 V28 Z" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2.5" />
                <path d="M-138 22 H-32 L-2 42 V78 H-146 V30 Z" fill="#0F141C" />
                <rect x="-68" y="24" width="32" height="20" fill="#1E293B" stroke="rgba(var(--accent-rgb), 0.85)" strokeWidth="1.5" rx="2" />
                <rect x="-110" y="24" width="32" height="20" fill="#1E293B" stroke="rgba(var(--accent-rgb), 0.85)" strokeWidth="1.5" rx="2" />
                <text x="-124" y="64" fill="var(--accent-red)" fontSize="10.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
                  BSIDES MAIL BUS
                </text>
                <circle cx="-116" cy="83" r="9" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2.2" />
                <circle cx="-32" cy="83" r="9" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2.2" />
              </g>

              {/* BSides Dharamshala HQ Building (Right side) */}
              <g className="sc4-hq">
                <rect x="245" y="42" width="95" height="46" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2" rx="2" />
                <rect x="268" y="24" width="50" height="18" fill="#0F141C" stroke="rgba(var(--accent-rgb), 0.6)" strokeWidth="1" />
                <line x1="293" y1="24" x2="293" y2="12" stroke="var(--accent-red)" strokeWidth="2" />
                <circle cx="293" cy="10" r="3.5" fill="var(--accent-red)" className="hq-beacon" />

                {/* Entrance Door */}
                <rect x="280" y="64" width="26" height="24" rx="1" fill="#15050A" stroke="var(--accent-red)" strokeWidth="1.5" />

                <text x="292.5" y="52" fill="var(--accent-red)" fontSize="8" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
                  BSIDES
                </text>
                <text x="292.5" y="59" fill="#FFFFFF" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.8">
                  DHARAMSHALA
                </text>
              </g>

              {/* Local Courier carrying package to BSides HQ Entrance */}
              <g className="sc4-courier">
                <circle cx="160" cy="38" r="6" fill="var(--accent-red)" />
                <path d="M154 36 C154 33 158 31 163 31 C167 31 169 33 169 36 H154 Z" fill="#FFFFFF" />
                <path d="M153 45 C153 43 156 42 159 42 C162 42 165 43 165 45 V68 H153 Z" fill="#0F141C" stroke="var(--accent-red)" strokeWidth="1.2" />
                <line x1="155" y1="68" x2="152" y2="86" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" className="leg-1" />
                <line x1="162" y1="68" x2="165" y2="86" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" className="leg-2" />
                <path d="M159 48 L175 52 L190 46" fill="none" stroke="var(--accent-red)" strokeWidth="1.8" strokeLinecap="round" />

                {/* Mail Package in Hand */}
                <g className="sc4-package">
                  <rect x="180" y="42" width="20" height="14" rx="1.5" fill="#FFFFFF" stroke="var(--accent-red)" strokeWidth="1.2" />
                  <path d="M180 42 L190 49 L200 42" fill="none" stroke="var(--accent-red)" strokeWidth="1" />
                  <line x1="184" y1="50" x2="196" y2="50" stroke="var(--accent-red)" strokeWidth="1" strokeLinecap="round" />
                </g>
              </g>

              {/* Celebratory Sparkle Burst on HQ Landing */}
              <g className="sc4-sparkles">
                <circle cx="293" cy="35" r="3.5" fill="var(--accent-red)" className="hq-sparkle hs1" />
                <circle cx="270" cy="30" r="3" fill="#FFFFFF" className="hq-sparkle hs2" />
                <circle cx="320" cy="32" r="3" fill="var(--accent-red)" className="hq-sparkle hs3" />
                <circle cx="293" cy="20" r="2.5" fill="#22C55E" className="hq-sparkle hs4" />
              </g>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const InteractiveMailBoxScene = ({ isHovered, isSending, movieScene }) => {
  if (isSending) {
    return <CinematicMailMovie movieScene={movieScene} />;
  }

  return (
    <div className={`interactive-envelope-wrap ${isHovered ? 'is-envelope-hovered' : ''}`} aria-label="Mail Envelope">
      <svg width="76" height="60" viewBox="0 0 76 60" fill="none" className="envelope-svg">
        {/* Soft Ground Reflection */}
        <ellipse cx="38" cy="56" rx="28" ry="3" fill="rgba(var(--accent-rgb), 0.15)" filter="blur(3px)" />

        {/* Envelope Back Interior Panel */}
        <rect x="8" y="16" width="60" height="38" rx="4" fill="#07090E" stroke="rgba(var(--accent-rgb), 0.4)" strokeWidth="1.5" />

        {/* Letter Paper inside Envelope (Slides UP smoothly on Hover) */}
        <g className={`envelope-letter-paper ${isHovered ? 'letter-slide-up' : ''}`}>
          <rect x="14" y="20" width="48" height="26" rx="2.5" fill="#FFFFFF" opacity="0.96" />
          {/* Letter Text Lines & Red Cyber Badge */}
          <line x1="20" y1="26" x2="42" y2="26" stroke="var(--accent-red)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="31" x2="54" y2="31" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="20" y1="36" x2="48" y2="36" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="53" cy="26" r="2.5" fill="var(--accent-red)" />
        </g>

        {/* Envelope Front Body / V-Folds */}
        <path d="M8 16 L38 38 L68 16 V54 H8 V16 Z" fill="#0A0E14" stroke="var(--accent-red)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 54 L30 34" stroke="rgba(var(--accent-rgb), 0.4)" strokeWidth="1.5" />
        <path d="M68 54 L46 34" stroke="rgba(var(--accent-rgb), 0.4)" strokeWidth="1.5" />

        {/* Envelope Top Flap (Flips OPEN 180 deg on Hover) */}
        <g className={`envelope-top-flap ${isHovered ? 'top-flap-open' : ''}`}>
          <path d="M8 16 L38 39 L68 16 Z" fill="#0F141C" stroke="var(--accent-red)" strokeWidth="2" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
};

export default function SubscribeSection() {
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [movieScene, setMovieScene] = useState(1);
  const [isSubSubmitted, setIsSubSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [turnstileState, setTurnstileState] = useState('verifying');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTurnstileState('success');
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubSubmit = (e) => {
    e.preventDefault();
    if (!subEmail || isSending) return;

    // Trigger Slower Cinematic 4-Scene Movie Journey (3.2s per scene)
    setIsSending(true);
    setMovieScene(1);

    const t2 = setTimeout(() => setMovieScene(2), 3200);
    const t3 = setTimeout(() => setMovieScene(3), 6400);
    const t4 = setTimeout(() => setMovieScene(4), 9600);

    const tEnd = setTimeout(() => {
      setIsSending(false);
      setIsSubSubmitted(true);
      setSubName('');
      setSubEmail('');
    }, 12800);

    // Auto reset after 18 seconds for re-testing/subscribing
    setTimeout(() => {
      setIsSubSubmitted(false);
      setTurnstileState('verifying');
      setTimeout(() => setTurnstileState('success'), 1400);
    }, 18000);
  };

  return (
    <section className="subscribe-section" id="subscribe">
      <div className="subscribe-bg-overlay" aria-hidden="true" />
      
      <div className="subscribe-container">
        <div className="about-subscribe-card">
          <BoxBorderDraw />
          <span className="hud-tick tl" />
          <span className="hud-tick tr" />
          <span className="hud-tick bl" />
          <span className="hud-tick br" />

          <div className="about-sub-card-content">
            {/* Standalone Mail Logo / Cinematic Animation Stage */}
            <div
              className="about-sub-icon-wrap"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <InteractiveMailBoxScene isHovered={isHovered} isSending={isSending} movieScene={movieScene} />
            </div>

            <h3 className="about-sub-card-title cfp-hero-main-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase' }}>
              STAY IN THE <span className="title-brush text-highlight-red minimal-brush-highlight">LOOP</span>
            </h3>

            <p className="about-sub-card-desc">
              Subscribe for updates on BSides Dharamshala 2027: dates, speakers, tickets, and everything else, straight to your inbox.
            </p>

            {isSubSubmitted ? (
              <div className="about-sub-card-success">
                <span className="sub-success-icon">✓</span>
                <p className="sub-success-msg">
                  Thank you for subscribing! We'll keep you updated straight to your inbox.
                </p>
              </div>
            ) : (
              <form className="about-sub-card-form" onSubmit={handleSubSubmit}>
                <div className="about-sub-inline-row">
                  <input
                    type="text"
                    className="about-sub-card-input"
                    placeholder="Name (optional)"
                    value={subName}
                    onChange={(e) => setSubName(e.target.value)}
                    disabled={isSending}
                  />
                  <input
                    type="email"
                    className="about-sub-card-input"
                    placeholder="you@example.com"
                    required
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    disabled={isSending}
                  />
                  <button type="submit" className={`about-sub-card-btn ${isSending ? 'is-sending' : ''}`} disabled={isSending}>
                    {isSending ? (
                      <span className="sending-btn-text">
                        <span className="btn-spinner" /> Delivering Mail...
                      </span>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>

                {/* Turnstile Protection Badge */}
                <div className={`turnstile-badge ${turnstileState}`}>
                  {turnstileState === 'verifying' ? (
                    <div className="turnstile-left">
                      <span className="turnstile-spinner" />
                      <span className="turnstile-status verifying">Verifying...</span>
                    </div>
                  ) : (
                    <div className="turnstile-left">
                      <span className="turnstile-check">✓</span>
                      <span className="turnstile-status success">Success!</span>
                    </div>
                  )}
                  <a
                    href="https://www.cloudflare.com/products/turnstile/?utm_source=turnstile&utm_campaign=widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="turnstile-brand"
                    title="Learn more about Cloudflare Turnstile"
                  >
                    <svg className="cf-cloud-svg" width="20" height="15" viewBox="0 0 24 18" fill="#F97316">
                      <path d="M19.35 10.04C18.67 6.02 15.1 3 10.8 3 7.24 3 4.16 5.05 2.66 8.09 1.14 8.64 0 10.18 0 12c0 2.48 2.02 4.5 4.5 4.5h14.8c2.04 0 3.7-1.66 3.7-3.7 0-1.96-1.53-3.56-3.65-3.76z" />
                    </svg>
                    <span>CLOUDFLARE</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

