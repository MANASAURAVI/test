import React from 'react';
import { ArrowRightIcon, ShieldCheckIcon, MailIcon } from './Icons';

export default function SponsorsSection() {
  const platinumSponsors = [
    { name: 'SECURE_LABS', type: 'PLATINUM SPONSOR', code: '01_PLATINUM' },
    { name: 'CYBER_HIMALAYA', type: 'PLATINUM SPONSOR', code: '02_PLATINUM' }
  ];

  const goldSponsors = [
    { name: 'NORD_DEFENSE', type: 'GOLD PARTNER', code: '01_GOLD' },
    { name: 'CLOUDFORT_AI', type: 'GOLD PARTNER', code: '02_GOLD' },
    { name: 'HEX_ANALYTICS', type: 'GOLD PARTNER', code: '03_GOLD' }
  ];

  const communityPartners = [
    { name: 'Null Community', type: 'COMMUNITY PARTNER' },
    { name: 'OWASP India', type: 'COMMUNITY PARTNER' },
    { name: 'DefCon Group India', type: 'ECOSYSTEM' },
    { name: 'Infosec Girls', type: 'COMMUNITY PARTNER' }
  ];

  return (
    <section className="section-block sponsors-section" id="sponsors">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-num">06</span>
            <span className="tag-slash">//</span>
            <span className="tag-title">SPONSORS & PARTNERS</span>
          </div>

          <h2 className="section-title">
            POWERED BY <br />
            <span className="text-highlight-red">SECURITY COMMUNITY LEADERS.</span>
          </h2>
          <p className="section-subtitle">
            Our partners support open security research, free community education, and student access in the Himalayas.
          </p>
        </div>

        {/* PLATINUM SPONSORS GRID */}
        <div className="sponsor-tier-block">
          <div className="tier-label-strip">
            <span className="tier-badge-red">PLATINUM SPONSORS</span>
          </div>
          <div className="sponsors-grid platinum-grid">
            {platinumSponsors.map((sp, idx) => (
              <div key={idx} className="sponsor-card platinum-card">
                <div className="sponsor-code">{sp.code}</div>
                <div className="sponsor-name">{sp.name}</div>
                <div className="sponsor-sub">{sp.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GOLD SPONSORS GRID */}
        <div className="sponsor-tier-block">
          <div className="tier-label-strip">
            <span className="tier-badge-muted">GOLD PARTNERS</span>
          </div>
          <div className="sponsors-grid gold-grid">
            {goldSponsors.map((sp, idx) => (
              <div key={idx} className="sponsor-card gold-card">
                <div className="sponsor-code">{sp.code}</div>
                <div className="sponsor-name">{sp.name}</div>
                <div className="sponsor-sub">{sp.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* COMMUNITY & ECOSYSTEM */}
        <div className="sponsor-tier-block">
          <div className="tier-label-strip">
            <span className="tier-badge-muted">COMMUNITY & ECOSYSTEM PARTNERS</span>
          </div>
          <div className="sponsors-grid community-grid">
            {communityPartners.map((sp, idx) => (
              <div key={idx} className="sponsor-card community-card">
                <div className="sponsor-name-sm">{sp.name}</div>
                <div className="sponsor-sub">{sp.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SPONSOR CALLOUT BANNER */}
        <div className="sponsor-cta-banner">
          <div className="banner-left">
            <h3 className="banner-title">WANT TO SPONSOR BSIDES DHARAMSHALA?</h3>
            <p className="banner-desc">
              Connect your brand with security leaders, cloud architects, researchers, and emerging talent in a premier mountain conference setting.
            </p>
          </div>
          <a href="mailto:sponsors@bsidesdharamshala.org" className="btn-hero-primary sponsor-email-btn">
            BECOME A SPONSOR <MailIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
