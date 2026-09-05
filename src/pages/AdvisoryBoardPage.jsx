import React from 'react';
import PageHero from '../components/PageHero';
import { conferenceData } from '../data/conferenceData';

export default function AdvisoryBoardPage() {
  const { advisoryBoard } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="01.05 // ABOUT"
        title="CONFERENCE"
        highlightTitle="ADVISORY BOARD."
        subtitle="Industry leaders advising BSides Dharamshala on strategic governance, ethics, and community impact."
        breadcrumb="ABOUT / ADVISORY BOARD"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="team-cards-grid">
            {advisoryBoard.map((member) => (
              <div key={member.id} className="tactical-card team-card">
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} className="team-photo" />
                  <span className="team-cat-badge">ADVISORY COUNCIL</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
