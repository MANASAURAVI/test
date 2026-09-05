import React from 'react';
import PageHero from '../components/PageHero';
import { conferenceData } from '../data/conferenceData';

export default function ReviewBoardPage() {
  const { reviewBoard } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="01.04 // ABOUT"
        title="TECHNICAL"
        highlightTitle="REVIEW BOARD."
        subtitle="Independent security researchers evaluating Call For Papers submissions for technical accuracy and original research."
        breadcrumb="ABOUT / REVIEW BOARD"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="team-cards-grid">
            {reviewBoard.map((member) => (
              <div key={member.id} className="tactical-card team-card">
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} className="team-photo" />
                  <span className="team-cat-badge">REVIEW BOARD</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.expertise}</span>
                  <p className="team-bio">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
