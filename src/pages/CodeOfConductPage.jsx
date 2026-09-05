import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldIcon, 
  UsersIcon, 
  MapPinIcon, 
  TerminalIcon,
  ArrowRightIcon 
} from '../components/Icons';
import RainEffect from '../components/RainEffect';

// Custom icons for Section 02 & Mountain graphic
function ChatIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="14" y2="13" />
    </svg>
  );
}

function UserIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BanIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

function MountainIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function CodeOfConductPage() {
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  React.useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const top = entry.boundingClientRect.top;
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          entry.target.classList.remove('is-exited-above');
        } else {
          entry.target.classList.remove('is-revealed');
          if (top < 0) {
            entry.target.classList.add('is-exited-above');
          } else {
            entry.target.classList.remove('is-exited-above');
          }
        }
      });
    };

    const observerOptions = {
      threshold: 0.12,
      rootMargin: '-20px 0px -20px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.coc-reveal-left, .coc-reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="coc-page-wrapper">
      <RainEffect />
      
      {/* ── HERO HEADER WITH BACKGROUND IMAGE ── */}
      <div className="coc-hero-wrap">
        <div className="coc-hero-bg">
          <img 
            src="/images/code_0f_con.png" 
            alt="BSides Dharamshala Code of Conduct Himalayas" 
            className="coc-hero-img" 
          />
          <div className="coc-hero-overlay" />
        </div>

        <div className="section-container coc-hero-container">
          <div className="coc-hero-flex">
            
            {/* Left Content */}
            <div className="coc-hero-left">
              <div className="page-breadcrumb">
                <Link to="/" className="bc-root bc-link">BSIDES DHARAMSHALA</Link>
                <span className="bc-slash">/</span>
                <a href="/#about" onClick={handleAboutClick} className="bc-root bc-link">ABOUT</a>
                <span className="bc-slash">/</span>
                <span className="bc-curr">CODE OF CONDUCT</span>
              </div>

              <div className="page-hero-tag">
                <span className="tag-num red-text">04</span>
                <span className="tag-slash">//</span>
                <span className="tag-title">CODE OF CONDUCT</span>
              </div>

              <h1 className="coc-hero-title">
                <span className="title-white">OUR COMMUNITY</span><br />
                <span className="title-red">OUR RESPONSIBILITY</span>
              </h1>

              <p className="coc-hero-subtitle">
                BSides Dharamshala is committed to creating a safe, respectful, and welcoming environment for everyone. All attendees, speakers, sponsors, volunteers, organizers, and other participants are expected to follow this Code of Conduct throughout the conference and at all official conference activities.
              </p>

              <div className="coc-sub-tags">
                PEOPLE &nbsp;×&nbsp; IDEAS &nbsp;×&nbsp; SECURITY &nbsp;×&nbsp; HIMALAYAS
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MAIN BODY CONTENT WITH MARGIN SIDEBAR NUMBERS ── */}
      <div className="section-container coc-body-container">
        
        {/* ── 01 // OUR STANDARD ── */}
        <div className="coc-section-row">
          <div className="coc-left-col coc-reveal-left">
            <div className="coc-num-tag">
              <span className="num-red">01</span>
              <span className="num-slash">//</span>
            </div>
            <div className="coc-red-bar-vertical" />
            <div className="coc-sidebar-meta">
              <span>DIFFERENT</span>
              <span>PEOPLE</span>
              <span>STRONGER</span>
              <span>COMMUNITY</span>
            </div>
          </div>

          <div className="coc-right-col coc-reveal-right">
            <div className="coc-text-block">
              <h2 className="coc-heading">OUR STANDARD</h2>
              <p>
                BSides Dharamshala welcomes people from different backgrounds, experiences, and perspectives. We believe security communities are stronger when people can participate without fear of harassment, discrimination, intimidation, or unwanted behavior.
              </p>
              <p>
                We expect everyone to communicate respectfully, act professionally, and contribute to an environment where people can learn, collaborate, and share ideas openly.
              </p>
              <div className="coc-inner-note-box">
                <p className="coc-highlight-red-text">
                  Respect people. Challenge ideas. Keep the community safe.
                </p>
              </div>
            </div>
            <div className="watermark-sidebar-text">
              A COMMUNITY STRONGER MORE OPEN TOGETHER COMMUNITY
            </div>
          </div>
        </div>

        <div className="coc-section-divider" />

        {/* ── 02 // UNACCEPTABLE BEHAVIOR ── */}
        <div className="coc-section-row">
          <div className="coc-left-col coc-reveal-left">
            <div className="coc-num-tag">
              <span className="num-red">02</span>
              <span className="num-slash">//</span>
            </div>
            <div className="coc-red-bar-vertical" />
            <div className="coc-sidebar-meta">
              <span>NO</span>
              <span>HARASSMENT</span>
              <span>NO HATE</span>
              <span>NO EXCEPTIONS</span>
            </div>
          </div>

          <div className="coc-right-col coc-reveal-right">
            <div className="coc-section-header-box">
              <h2 className="coc-heading">UNACCEPTABLE BEHAVIOR</h2>
              <p className="coc-subheading-text">
                Harassment or abusive behavior is not tolerated at BSides Dharamshala. This includes, but is not limited to:
              </p>
            </div>

            <div className="coc-4cards-grid">
              {/* Card 01 */}
              <div className="coc-tactical-card coc-reveal-left">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">SYS::MODULE_01</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="card-top-header">
                  <div className="card-icon-wrap">
                    <ChatIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">01</span>
                </div>
                <h3 className="card-title">HARASSMENT & COMMENTS</h3>
                <p className="card-desc">
                  Offensive, discriminatory, or derogatory comments. Harassing photography, recording, or publishing someone's personal information (doxxing).
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>

              {/* Card 02 */}
              <div className="coc-tactical-card coc-reveal-right">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">SYS::MODULE_02</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="card-top-header">
                  <div className="card-icon-wrap">
                    <ShieldIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">02</span>
                </div>
                <h3 className="card-title">THREATS & INTIMIDATION</h3>
                <p className="card-desc">
                  Verbal or physical threats, stalking, unwanted following, intimidation, or retaliation against anyone who reports a concern.
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>

              {/* Card 03 */}
              <div className="coc-tactical-card coc-reveal-left">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">SYS::MODULE_03</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="card-top-header">
                  <div className="card-icon-wrap">
                    <UserIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">03</span>
                </div>
                <h3 className="card-title">UNWELCOME CONTACT</h3>
                <p className="card-desc">
                  Unwelcome sexual attention, physical contact, or sharing and displaying sexualized or offensive material in inappropriate spaces.
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>

              {/* Card 04 */}
              <div className="coc-tactical-card coc-reveal-right">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">SYS::MODULE_04</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="card-top-header">
                  <div className="card-icon-wrap">
                    <BanIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">04</span>
                </div>
                <h3 className="card-title">DISRUPTION & ABUSE</h3>
                <p className="card-desc">
                  Sustained disruption of talks, workshops, or activities, repeated unwanted communication, or any behavior that makes someone feel unsafe.
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>
            </div>

            <div className="coc-disclaimer-banner coc-reveal-right">
              <span className="disclaimer-alert-icon font-mono">[ ! ]</span>
              <p className="disclaimer-msg">
                Technology choices, technical skill level, professional background, appearance, identity, or personal characteristics are never an excuse for harassment or disrespect.
              </p>
            </div>
          </div>
        </div>

        <div className="coc-section-divider" />

        {/* ── 03 // DURING THE CONFERENCE ── */}
        <div className="coc-section-row">
          <div className="coc-left-col coc-reveal-left">
            <div className="coc-num-tag">
              <span className="num-red">03</span>
              <span className="num-slash">//</span>
            </div>
            <div className="coc-red-bar-vertical" />
            <div className="coc-sidebar-meta">
              <span>SAME VALUES</span>
              <span>EVERY SPACE</span>
              <span>ALWAYS</span>
            </div>
          </div>

          <div className="coc-right-col coc-reveal-right">
            <div className="coc-section-header-box">
              <h2 className="coc-heading">DURING THE CONFERENCE</h2>
              <p className="coc-subheading-text">
                Our Code of Conduct applies across all event touchpoints:
              </p>
            </div>

            <div className="coc-3spaces-grid">
              <div className="coc-tactical-card space-card coc-reveal-left">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">LOC::PHYSICAL_01</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="space-top">
                  <div className="card-icon-wrap">
                    <MapPinIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">01</span>
                </div>
                <h3 className="space-title">THE VENUE</h3>
                <p className="space-desc">
                  Talks, workshops, networking areas, exhibitions, and other conference spaces.
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>

              <div className="coc-tactical-card space-card coc-reveal-right">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">LOC::SOCIAL_02</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="space-top">
                  <div className="card-icon-wrap">
                    <UsersIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">02</span>
                </div>
                <h3 className="space-title">OFFICIAL EVENTS</h3>
                <p className="space-desc">
                  Social events, meetups, dinners, parties, and activities organized as part of BSides Dharamshala.
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>

              <div className="coc-tactical-card space-card coc-reveal-right">
                <div className="card-scan-line" />
                <div className="card-top-edge-line" />
                <div className="card-corner-tick">──┐</div>

                <div className="card-sys-status-row">
                  <span className="sys-module-id">LOC::DIGITAL_03</span>
                  <span className="sys-status-txt">
                    STATUS::ACTIVE <span className="status-dot-hover">●</span>
                  </span>
                </div>

                <div className="space-top">
                  <div className="card-icon-wrap">
                    <TerminalIcon size={18} color="#FF1638" />
                  </div>
                  <span className="card-num-badge">03</span>
                </div>
                <h3 className="space-title">ONLINE SPACES</h3>
                <p className="space-desc">
                  Official conference communication channels and online spaces associated with the event.
                </p>
                <div className="card-bottom-footer">
                  <div className="card-footer-line" />
                  <span className="card-explore-tag">
                    <span className="explore-arrow">→</span> EXPLORE
                  </span>
                </div>
              </div>
            </div>

            <p className="coc-footnote-text">
              Participants are expected to follow the same standard of respectful conduct across all of these spaces.
            </p>
          </div>
        </div>

        <div className="coc-section-divider" />

        {/* ── 04 // IF SOMETHING HAPPENS ── */}
        <div className="coc-section-row">
          <div className="coc-left-col coc-reveal-left">
            <div className="coc-num-tag">
              <span className="num-red">04</span>
              <span className="num-slash">//</span>
            </div>
            <div className="coc-red-bar-vertical" />
            <div className="coc-sidebar-meta">
              <span>SEE SOMETHING</span>
              <span>SAY SOMETHING</span>
              <span>WE'RE HERE</span>
            </div>
          </div>

          <div className="coc-right-col split-reporting-layout">
            <div className="reporting-left coc-reveal-left">
              <h2 className="coc-heading">IF SOMETHING HAPPENS</h2>
              <p className="coc-subheading-text">
                If you experience harassment, witness inappropriate behavior, or have a concern about someone's safety, please contact the conference organizers or staff as soon as possible.
              </p>
              <p className="coc-highlight-red-text">
                You do not need to handle the situation yourself.
              </p>

              <div className="reporting-steps-box">
                <div className="steps-label">
                  WHEN REPORTING AN INCIDENT, PROVIDE AS MUCH INFORMATION AS YOU ARE COMFORTABLE SHARING:
                </div>
                <div className="reporting-5steps-row">
                  <div className="step-box">
                    <span className="step-num">01</span>
                    <span className="step-txt">What happened</span>
                  </div>
                  <div className="step-box">
                    <span className="step-num">02</span>
                    <span className="step-txt">When and where it happened</span>
                  </div>
                  <div className="step-box">
                    <span className="step-num">03</span>
                    <span className="step-txt">Who was involved</span>
                  </div>
                  <div className="step-box">
                    <span className="step-num">04</span>
                    <span className="step-txt">Any witnesses</span>
                  </div>
                  <div className="step-box span-2">
                    <span className="step-num">05</span>
                    <span className="step-txt">Any relevant evidence or context</span>
                  </div>
                </div>
                <p className="steps-footer-note">
                  We will handle reports seriously and respectfully.
                </p>
              </div>
            </div>

            <div className="reporting-right-card coc-reveal-right">
              <div className="confidential-badge">CONFIDENTIAL REPORTING</div>
              <h3 className="card-report-title">REPORT AN INCIDENT</h3>
              <p className="card-report-desc">
                Reach out directly to our safety team. All reports are handled with strict confidentiality.
              </p>

              <div className="report-email-group">
                <span className="lbl">DIRECT EMAIL</span>
                <span className="val">info@bsidesdharamshala.in</span>
              </div>

              <a href="mailto:info@bsidesdharamshala.in" className="btn-contact-red">
                CONTACT THE ORGANIZERS <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="coc-section-divider" />

        {/* ── 05 // CONSEQUENCES ── */}
        <div className="coc-section-row">
          <div className="coc-left-col coc-reveal-left">
            <div className="coc-num-tag">
              <span className="num-red">05</span>
              <span className="num-slash">//</span>
            </div>
            <div className="coc-red-bar-vertical" />
            <div className="coc-sidebar-meta">
              <span>ACCOUNTABILITY</span>
              <span>BUILDS</span>
              <span>TRUST</span>
            </div>
          </div>

          <div className="coc-right-col split-consequences-layout">
            <div className="consequences-left coc-reveal-left">
              <h2 className="coc-heading">CONSEQUENCES</h2>
              <p className="coc-subheading-text">
                Participants who violate this Code of Conduct may be subject to appropriate action by the conference organizers. Depending on the circumstances, this may include:
              </p>

              <ul className="consequences-list">
                <li><span className="chevron">&gt;</span> A warning</li>
                <li><span className="chevron">&gt;</span> Being asked to stop the behavior</li>
                <li><span className="chevron">&gt;</span> Removal from a specific activity or conference space</li>
                <li><span className="chevron">&gt;</span> Removal from the conference without refund</li>
                <li><span className="chevron">&gt;</span> Restriction from future BSides Dharamshala events</li>
                <li><span className="chevron">&gt;</span> Referral to appropriate authorities where necessary</li>
              </ul>

              <p className="coc-footnote-text">
                The organizers will determine the appropriate response based on the circumstances of each incident.
              </p>
            </div>

            <div className="keep-community-open-card coc-reveal-right">
              <div className="mountain-icon-header">
                <MountainIcon size={32} color="#FFFFFF" />
              </div>
              <h3 className="open-title">KEEP THE COMMUNITY OPEN.</h3>
              <p className="open-desc">
                BSides Dharamshala exists because people choose to share knowledge, challenge assumptions, and help one another become better at security.
              </p>
              <p className="open-highlight">Protect that culture.</p>
              <div className="open-motto-tag">
                HACK // LEARN // SHARE // BELONG
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM TACTICAL BAR ── */}
        <div className="coc-bottom-bar coc-reveal-left">
          <div className="bar-left">
            <MountainIcon size={16} color="#FF1638" />
            <span>BSIDES DHARAMSHALA {new Date().getFullYear()}</span>
          </div>
          <div className="bar-center">
            PEOPLE &nbsp;×&nbsp; IDEAS &nbsp;×&nbsp; SECURITY &nbsp;×&nbsp; HIMALAYAS
          </div>
          <div className="bar-right">
            32.2198° N, 76.3234° E ━━━━
          </div>
        </div>

      </div>
    </div>
  );
}
