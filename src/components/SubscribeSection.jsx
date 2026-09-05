import React, { useState, useEffect } from 'react';

const BoxBorderDraw = () => (
  <svg className="box-draw-svg" width="100%" height="100%" preserveAspectRatio="none" aria-hidden="true">
    <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="6" fill="none" stroke="#FF1638" strokeWidth="1.5" pathLength="100" />
  </svg>
);

// Interactive Mail Envelope SVG (Default/Hover State) & Mail Delivery Scene (Sending State)
const InteractiveMailBoxScene = ({ isHovered, isSending }) => {
  if (isSending) {
    return (
      <div className="mail-delivery-stage" aria-label="Mail being delivered into mailbox by courier">
        <svg width="300" height="90" viewBox="0 0 300 90" fill="none" className="delivery-stage-svg">
          {/* Ground Line */}
          <line x1="10" y1="80" x2="290" y2="80" stroke="rgba(255, 22, 56, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Mailbox (Right side) */}
          <g className="delivery-mailbox">
            {/* Post */}
            <rect x="242" y="52" width="6" height="28" fill="#334155" rx="1.5" />
            <rect x="236" y="78" width="18" height="3" fill="#FF1638" rx="1" />
            {/* Main Chamber */}
            <path
              d="M224 24 C224 14 235 10 245 10 C255 10 266 14 266 24 V54 H224 V24 Z"
              fill="#0A0E14"
              stroke="#FF1638"
              strokeWidth="2"
            />
            {/* Mail Slot Interior */}
            <rect x="230" y="28" width="30" height="11" rx="2" fill="#050709" stroke="rgba(255, 22, 56, 0.6)" strokeWidth="1" />

            {/* Red Indicator Flag */}
            <g className="delivery-mailbox-flag">
              <line x1="266" y1="42" x2="266" y2="24" stroke="#FF1638" strokeWidth="2" strokeLinecap="round" />
              <rect x="266" y="24" width="10" height="7" rx="1" fill="#FF1638" />
            </g>
          </g>

          {/* Sparkles / Success Burst around Mailbox Slot */}
          <g className="delivery-sparkles">
            <circle cx="245" cy="22" r="2.5" fill="#FF1638" className="sparkle s1" />
            <circle cx="232" cy="18" r="2" fill="#FFFFFF" className="sparkle s2" />
            <circle cx="258" cy="16" r="2" fill="#FF1638" className="sparkle s3" />
          </g>

          {/* Person / Courier Character Walking across to Mailbox */}
          <g className="delivery-courier">
            {/* Head & Cyber Cap */}
            <circle cx="24" cy="22" r="7.5" fill="#FF1638" />
            <path d="M17 19 C17 15 22 13 28 13 C32 13 34 15 34 19 H17 Z" fill="#FFFFFF" />

            {/* Body / Coat */}
            <path d="M16 31 C16 29 20 28 24 28 C28 28 32 29 32 31 V58 H16 Z" fill="#0F141C" stroke="#FF1638" strokeWidth="1.5" />

            {/* Animated Walking Legs */}
            <line x1="19" y1="58" x2="15" y2="78" stroke="#FF1638" strokeWidth="2.5" strokeLinecap="round" className="courier-leg leg-1" />
            <line x1="28" y1="58" x2="32" y2="78" stroke="#FF1638" strokeWidth="2.5" strokeLinecap="round" className="courier-leg leg-2" />

            {/* Extended Arm carrying letter */}
            <path d="M24 35 L40 40 L52 34" fill="none" stroke="#FF1638" strokeWidth="2.2" strokeLinecap="round" className="courier-arm" />
          </g>

          {/* Mail Envelope (Carried by Person, then drops into slot) */}
          <g className="delivery-envelope">
            <rect x="46" y="24" width="22" height="15" rx="2" fill="#FFFFFF" stroke="#FF1638" strokeWidth="1.2" />
            <path d="M46 24 L57 32 L68 24" fill="none" stroke="#FF1638" strokeWidth="1" />
            <line x1="50" y1="33" x2="64" y2="33" stroke="#FF1638" strokeWidth="1" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className={`interactive-envelope-wrap ${isHovered ? 'is-envelope-hovered' : ''}`} aria-label="Mail Envelope">
      <svg width="76" height="60" viewBox="0 0 76 60" fill="none" className="envelope-svg">
        {/* Soft Ground Reflection */}
        <ellipse cx="38" cy="56" rx="28" ry="3" fill="rgba(255, 22, 56, 0.15)" filter="blur(3px)" />

        {/* Envelope Back Interior Panel */}
        <rect x="8" y="16" width="60" height="38" rx="4" fill="#07090E" stroke="rgba(255, 22, 56, 0.4)" strokeWidth="1.5" />

        {/* Letter Paper inside Envelope (Slides UP smoothly on Hover) */}
        <g className={`envelope-letter-paper ${isHovered ? 'letter-slide-up' : ''}`}>
          <rect x="14" y="10" width="48" height="34" rx="2.5" fill="#FFFFFF" opacity="0.96" />
          {/* Letter Text Lines & Red Cyber Badge */}
          <line x1="20" y1="17" x2="42" y2="17" stroke="#FF1638" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="23" x2="56" y2="23" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="20" y1="28" x2="50" y2="28" stroke="#334155" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="20" y1="33" x2="45" y2="33" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="53" cy="17" r="2.5" fill="#FF1638" />
        </g>

        {/* Envelope Front Body / V-Folds */}
        <path d="M8 16 L38 38 L68 16 V54 H8 V16 Z" fill="#0A0E14" stroke="#FF1638" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 54 L30 34" stroke="rgba(255, 22, 56, 0.4)" strokeWidth="1.5" />
        <path d="M68 54 L46 34" stroke="rgba(255, 22, 56, 0.4)" strokeWidth="1.5" />

        {/* Envelope Top Flap (Flips OPEN 180 deg on Hover) */}
        <g className={`envelope-top-flap ${isHovered ? 'top-flap-open' : ''}`}>
          <path d="M8 16 L38 39 L68 16 Z" fill="#0F141C" stroke="#FF1638" strokeWidth="2" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
};

export default function SubscribeSection() {
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
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

    // Trigger smooth person delivering mail into mailbox animation sequence
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSubSubmitted(true);
      setSubName('');
      setSubEmail('');
    }, 2100);

    // Auto reset after 7 seconds for re-testing/subscribing
    setTimeout(() => {
      setIsSubSubmitted(false);
      setTurnstileState('verifying');
      setTimeout(() => setTurnstileState('success'), 1400);
    }, 7000);
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
            {/* Standalone Mail Logo / Animation Area (NO BOX CONTAINER) */}
            <div
              className="about-sub-icon-wrap"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <InteractiveMailBoxScene isHovered={isHovered} isSending={isSending} />
            </div>

            <h3 className="about-sub-card-title">Stay in the Loop</h3>

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

