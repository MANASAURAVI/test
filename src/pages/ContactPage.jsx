import React, { useState } from 'react';
import { 
  MailIcon, 
  MapPinIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon,
  UsersIcon,
  TerminalIcon
} from '../components/Icons';
import { conferenceData } from '../data/conferenceData';
import SnowEffect from '../components/SnowEffect';

function SocialXIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialLinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

function SocialInstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

function PaperBoatIcon({ size = 54 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main Hull */}
      <polygon points="6,38 22,52 42,52 58,38 12,38" fill="url(#hullGrad)" stroke="#FF1638" strokeWidth="2" strokeLinejoin="round" />
      {/* Front Sail */}
      <polygon points="32,6 32,36 52,36" fill="url(#sailFront)" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Back Sail */}
      <polygon points="32,10 32,36 16,36" fill="url(#sailBack)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Mast */}
      <line x1="32" y1="4" x2="32" y2="38" stroke="#FF1638" strokeWidth="2" strokeLinecap="round" />
      {/* Flag */}
      <polygon points="32,4 40,8 32,12" fill="#FF1638" />
      {/* Envelope Badge */}
      <rect x="28" y="24" width="8" height="6" rx="1" fill="#FFFFFF" />
      <path d="M28 24L32 27L36 24" stroke="#FF1638" strokeWidth="1" />

      <defs>
        <linearGradient id="hullGrad" x1="6" y1="38" x2="58" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1638" />
          <stop offset="1" stopColor="#990B20" />
        </linearGradient>
        <linearGradient id="sailFront" x1="32" y1="6" x2="52" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#E2E8F0" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="sailBack" x1="16" y1="10" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CBD5E1" stopOpacity="0.75" />
          <stop offset="1" stopColor="#64748B" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BoyNodeIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="17" fill="#0D1217" stroke="#FF1638" strokeWidth="1.5" />
      <circle cx="18" cy="12" r="5" fill="#FF1638" />
      <path d="M9 26C9 21.5 13 20 18 20C23 20 27 21.5 27 26" stroke="#FF1638" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HQNodeIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="17" fill="#0D1217" stroke="#10B981" strokeWidth="1.5" />
      <path d="M12 24V16L18 12L24 16V24H12Z" fill="#10B981" />
      <circle cx="18" cy="18" r="2" fill="#FFFFFF" />
      <path d="M18 9V7M23 11L24.5 9.5M13 11L11.5 9.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  const { contact, event } = conferenceData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'general',
    subject: '',
    message: ''
  });
  const [isDispatching, setIsDispatching] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDispatching(true);
    setTimeout(() => {
      setIsDispatching(false);
      setSubmitted(true);
    }, 3200);
  };

  return (
    <div className="contact-page-wrapper">
      <SnowEffect />

      {/* ── FULL PAGE HIMALAYAN BACKGROUND IMAGE ── */}
      <div className="contact-page-bg">
        <img 
          src="/images/img8.webp" 
          alt="BSides Dharamshala Contact Node" 
          className="contact-bg-img" 
          fetchPriority="high"
          decoding="async"
        />
        <div className="contact-bg-overlay" />
      </div>

      {/* ── HERO BANNER ── */}
      <div className="contact-hero-wrap">
        <div className="section-container contact-hero-container">
          <div className="contact-header-panel">
            <span className="contact-script-badge">&gt; ./connect_node.sh --encrypted</span>
            <h1 className="contact-top-main-title">
              <span className="title-white">GET IN TOUCH WITH</span>{' '}
              <span className="title-red">BSIDES DHARAMSHALA</span>
            </h1>
            <p className="contact-header-sub">
              Have questions about attending, presenting, sponsoring, or volunteering? Connect directly with our team.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="section-container contact-body-container">
        <div className="contact-main-grid">
          
          {/* ── LEFT COLUMN: COMMUNICATION CHANNELS & TELEMETRY ── */}
          <div className="contact-left-col">
            
            {/* Section Header */}
            <div className="contact-sec-tag">
              <span className="sec-tag-dot" />
              <span>DIRECT CHANNELS // COMMUNICATION HUB</span>
            </div>

            {/* Channels Grid */}
            <div className="contact-channels-list">
              
              {/* Channel 1: General Enquiries */}
              <div className="contact-channel-card">
                <div className="channel-card-top">
                  <div className="channel-icon-wrap">
                    <MailIcon size={18} color="#FF1638" />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-dept-label">GENERAL ENQUIRIES</span>
                    <span className="channel-status-dot" title="Active Channel" />
                  </div>
                </div>
                <div className="channel-card-body">
                  <a href={`mailto:${contact.email}`} className="channel-email-link">
                    {contact.email}
                  </a>
                  <button 
                    className="channel-copy-btn" 
                    onClick={() => handleCopy(contact.email)}
                    title="Copy Email"
                  >
                    {copiedEmail === contact.email ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                  </button>
                </div>
                <div className="channel-card-foot">
                  <span>Response Time: &lt; 24 Hours</span>
                </div>
              </div>

              {/* Channel 2: Sponsorships */}
              <div className="contact-channel-card">
                <div className="channel-card-top">
                  <div className="channel-icon-wrap">
                    <ShieldCheckIcon size={18} color="#FF1638" />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-dept-label">SPONSORSHIPS &amp; MEDIA</span>
                    <span className="channel-status-dot" title="Active Channel" />
                  </div>
                </div>
                <div className="channel-card-body">
                  <a href={`mailto:${contact.sponsorshipEmail}`} className="channel-email-link">
                    {contact.sponsorshipEmail}
                  </a>
                  <button 
                    className="channel-copy-btn" 
                    onClick={() => handleCopy(contact.sponsorshipEmail)}
                    title="Copy Email"
                  >
                    {copiedEmail === contact.sponsorshipEmail ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                  </button>
                </div>
                <div className="channel-card-foot">
                  <span>Partnership Deck &amp; Sponsorship Kits</span>
                </div>
              </div>

              {/* Channel 3: CFP & Speakers */}
              <div className="contact-channel-card">
                <div className="channel-card-top">
                  <div className="channel-icon-wrap">
                    <TerminalIcon size={18} color="#FF1638" />
                  </div>
                  <div className="channel-meta">
                    <span className="channel-dept-label">CALL FOR PAPERS (CFP)</span>
                    <span className="channel-status-dot" title="Active Channel" />
                  </div>
                </div>
                <div className="channel-card-body">
                  <a href={`mailto:${contact.cfpEmail}`} className="channel-email-link">
                    {contact.cfpEmail}
                  </a>
                  <button 
                    className="channel-copy-btn" 
                    onClick={() => handleCopy(contact.cfpEmail)}
                    title="Copy Email"
                  >
                    {copiedEmail === contact.cfpEmail ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                  </button>
                </div>
                <div className="channel-card-foot">
                  <span>Paper Submissions &amp; Speaker Queries</span>
                </div>
              </div>

            </div>

            {/* Location & Coordinates Telemetry Card */}
            <div className="contact-location-telemetry">
              <div className="telemetry-top">
                <MapPinIcon size={18} color="#FF1638" />
                <span className="telemetry-head">VENUE COORDINATES &amp; LOCATION</span>
              </div>
              <div className="telemetry-body">
                <div className="telemetry-city">{event.location}</div>
                <div className="telemetry-coords">{contact.coordinates} &bull; ALT. 1,457 M</div>
              </div>

              {/* Social Channels Bar */}
              <div className="telemetry-socials">
                <span className="socials-label">FOLLOW &amp; JOIN US:</span>
                <div className="socials-icons">
                  <a href="https://x.com/BSidesDharam" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="X (Twitter)">
                    <SocialXIcon size={15} />
                  </a>
                  <a href="https://www.linkedin.com/company/bsidesdharamshala/" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LinkedIn">
                    <SocialLinkedinIcon size={15} />
                  </a>
                  <a href="https://www.instagram.com/bsidesdharamshala" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Instagram">
                    <SocialInstagramIcon size={15} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: HIGH-TECH INTERACTIVE MESSAGE DISPATCHER ── */}
          <div className="contact-right-col">
            <div className="contact-form-card">
              
              {isDispatching ? (
                /* Boat Mail Dispatch Journey: Boy Node -> HQ Node */
                <div className="boat-dispatch-overlay">
                  <div className="journey-scene-container">
                    
                    {/* Node 01: Boy / Sender */}
                    <div className="journey-node boy-node">
                      <BoyNodeIcon size={42} />
                      <span className="node-label">SENDER NODE</span>
                      <span className="node-sub">{formData.name ? formData.name.split(' ')[0].toUpperCase() : 'YOU'}</span>
                    </div>

                    {/* Center Water River Scene & Boat */}
                    <div className="journey-river-wrap">
                      <div className="journey-boat-tracker">
                        <PaperBoatIcon size={46} />
                        <div className="boat-ripple-trail" />
                      </div>
                      
                      {/* River Waves SVG */}
                      <svg viewBox="0 0 300 50" className="journey-river-svg" preserveAspectRatio="none">
                        <path d="M0 25 Q 75 10, 150 25 T 300 25" fill="none" stroke="rgba(255, 22, 56, 0.55)" strokeWidth="2.5" className="wave-line-1" />
                        <path d="M0 36 Q 75 20, 150 36 T 300 36" fill="none" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="2" className="wave-line-2" />
                      </svg>
                    </div>

                    {/* Node 02: BSides Dharamshala HQ */}
                    <div className="journey-node hq-node">
                      <div className="hq-icon-wrap">
                        <HQNodeIcon size={42} />
                        <div className="hq-ping-ring" />
                      </div>
                      <span className="node-label text-green">BSIDES HQ</span>
                      <span className="node-sub">DHARAMSHALA</span>
                    </div>

                  </div>

                  <div className="boat-dispatch-status">
                    <span className="dispatch-live-badge">&gt; DISPATCHING MAIL PACKET: BOY NODE &rarr; BSIDES HQ...</span>
                    <h3 className="dispatch-title">SAILING PACKET THROUGH HIMALAYAN VALLEY</h3>
                    <div className="dispatch-progress-bar">
                      <div className="dispatch-progress-fill" />
                    </div>
                  </div>
                </div>
              ) : submitted ? (
                /* Success Dispatch State */
                <div className="contact-success-box">
                  <div className="success-icon-wrap">
                    <ShieldCheckIcon size={44} color="#FF1638" />
                  </div>
                  <h3 className="success-heading">MESSAGE DISPATCHED</h3>
                  <p className="success-sub">
                    Your transmission has been logged and routed to our team. We will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="success-details-summary">
                    <div className="summary-row">
                      <span>SENDER:</span> <strong>{formData.name}</strong>
                    </div>
                    <div className="summary-row">
                      <span>DEPARTMENT:</span> <strong className="text-red">{formData.department.toUpperCase()}</strong>
                    </div>
                    <div className="summary-row">
                      <span>TIMESTAMP:</span> <strong>{new Date().toLocaleTimeString()}</strong>
                    </div>
                  </div>
                  <button 
                    className="btn-hero-primary reset-form-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', department: 'general', subject: '', message: '' });
                    }}
                  >
                    SEND ANOTHER MESSAGE <ArrowRightIcon size={16} />
                  </button>
                </div>
              ) : (
                /* Dispatch Form */
                <form onSubmit={handleSubmit} className="contact-dispatch-form">
                  
                  <div className="form-head">
                    <div className="form-head-left">
                      <span className="form-badge">02 // DISPATCH ENCRYPTED MESSAGE</span>
                      <h3 className="form-main-heading">SEND US A MESSAGE</h3>
                    </div>
                    <span className="form-secure-dot" title="Secure SSL Form" />
                  </div>

                  <div className="form-grid-two">
                    {/* Name Input */}
                    <div className="contact-field-group">
                      <label htmlFor="name-input">FULL NAME *</label>
                      <input 
                        type="text"
                        id="name-input"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="contact-field-group">
                      <label htmlFor="email-input">EMAIL ADDRESS *</label>
                      <input 
                        type="email"
                        id="email-input"
                        required
                        placeholder="alex@example.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Department Select */}
                  <div className="contact-field-group">
                    <label htmlFor="dept-select">INQUIRY DEPARTMENT *</label>
                    <select
                      id="dept-select"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option value="general">General Inquiries &amp; Attendee Info</option>
                      <option value="sponsorship">Sponsorships &amp; Brand Partnerships</option>
                      <option value="cfp">Call for Papers (CFP) &amp; Speaking</option>
                      <option value="volunteers">Volunteers &amp; Operations Crew</option>
                      <option value="press">Press, Media &amp; Ecosystem</option>
                    </select>
                  </div>

                  {/* Subject Input */}
                  <div className="contact-field-group">
                    <label htmlFor="subject-input">SUBJECT LINE *</label>
                    <input 
                      type="text"
                      id="subject-input"
                      required
                      placeholder="e.g. Query regarding registration and accommodation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="contact-field-group">
                    <div className="field-label-flex">
                      <label htmlFor="message-input">YOUR MESSAGE *</label>
                      <span className="char-count">{formData.message.length} CHARS</span>
                    </div>
                    <textarea 
                      id="message-input"
                      required
                      rows="5"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-hero-primary dispatch-submit-btn">
                    DISPATCH MESSAGE <ArrowRightIcon size={18} />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
