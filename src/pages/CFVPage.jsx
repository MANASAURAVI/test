import React from 'react';
import PageHero from '../components/PageHero';
import { ArrowRightIcon, UsersIcon, ShieldCheckIcon } from '../components/Icons';
import { conferenceData } from '../data/conferenceData';

export default function CFVPage() {
  const { callForVolunteers } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="02.04 // CONFERENCE"
        title="CALL FOR VOLUNTEERS // CFV"
        highlightTitle="JOIN THE CREW."
        subtitle="Be an integral part of organizing BSides Dharamshala. Support speaker tracks, operations, media, and community experience."
        breadcrumb="CONFERENCE / CALL FOR VOLUNTEERS"
      />

      <section className="section-block">
        <div className="section-container">
          {/* CFV STATUS BANNER */}
          <div className="cfp-status-card">
            <div className="cfp-status-left">
              <span className="status-badge-open">VOLUNTEER APPLICATIONS: {callForVolunteers.status}</span>
              <h2 className="cfp-card-heading">APPLICATION DEADLINE: {callForVolunteers.deadline}</h2>
              <p className="cfp-card-sub">
                We invite enthusiastic students, infosec practitioners, and community members to help us deliver an unforgettable conference experience in the Himalayas.
              </p>
            </div>
            <a
              href="mailto:volunteers@bsidesdharamshala.org?subject=BSides%20Dharamshala%20Volunteer%20Application"
              className="btn-hero-primary cfp-submit-btn"
            >
              APPLY AS VOLUNTEER <ArrowRightIcon size={18} />
            </a>
          </div>

          <div className="cfp-grid-split">
            {/* VOLUNTEER ROLES */}
            <div className="tactical-card">
              <h3 className="cfp-sec-title">01 // VOLUNTEER ROLES</h3>
              <ul className="cfp-list">
                {callForVolunteers.roles.map((role, idx) => (
                  <li key={idx} className="cfp-list-item">
                    <span className="item-bullet">▸</span> {role}
                  </li>
                ))}
              </ul>
            </div>

            {/* VOLUNTEER PERKS */}
            <div className="tactical-card">
              <h3 className="cfp-sec-title">02 // VOLUNTEER PERKS</h3>
              <ul className="cfp-list">
                {callForVolunteers.perks.map((perk, idx) => (
                  <li key={idx} className="cfp-list-item">
                    <span className="item-bullet">▸</span> {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
