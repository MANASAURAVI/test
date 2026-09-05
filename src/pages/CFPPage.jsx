import React from 'react';
import PageHero from '../components/PageHero';
import { ArrowRightIcon, MailIcon } from '../components/Icons';
import { conferenceData } from '../data/conferenceData';

export default function CFPPage() {
  const { callForPapers } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="02.03 // CONFERENCE"
        title="CALL FOR PAPERS // CFP"
        highlightTitle="SUBMIT YOUR RESEARCH."
        subtitle="Share your technical findings, exploit techniques, and defensive frameworks at BSides Dharamshala 2027."
        breadcrumb="CONFERENCE / CALL FOR PAPERS"
      />

      <section className="section-block">
        <div className="section-container">
          {/* CFP STATUS BANNER */}
          <div className="cfp-status-card">
            <div className="cfp-status-left">
              <span className="status-badge-open">CFP STATUS: {callForPapers.status}</span>
              <h2 className="cfp-card-heading">SUBMISSION DEADLINE: {callForPapers.deadline}</h2>
              <p className="cfp-card-sub">
                We invite security researchers, ethical hackers, kernel engineers, cloud architects, and students to submit original technical papers.
              </p>
            </div>
            <a
              href="mailto:cfp@bsidesdharamshala.org?subject=BSides%20Dharamshala%202027%20CFP%20Submission"
              className="btn-hero-primary cfp-submit-btn"
            >
              SUBMIT YOUR PAPER <ArrowRightIcon size={18} />
            </a>
          </div>

          <div className="cfp-grid-split">
            {/* TOPICS & TRACKS */}
            <div className="tactical-card">
              <h3 className="cfp-sec-title">01 // TOPICS & TRACKS</h3>
              <ul className="cfp-list">
                {callForPapers.tracks.map((track, idx) => (
                  <li key={idx} className="cfp-list-item">
                    <span className="item-bullet">▸</span> {track}
                  </li>
                ))}
              </ul>
            </div>

            {/* SUBMISSION REQUIREMENTS */}
            <div className="tactical-card">
              <h3 className="cfp-sec-title">02 // SUBMISSION REQUIREMENTS</h3>
              <ul className="cfp-list">
                {callForPapers.submissionRequirements.map((req, idx) => (
                  <li key={idx} className="cfp-list-item">
                    <span className="item-bullet">▸</span> {req}
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
