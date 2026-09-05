import React from 'react';
import PageHero from '../components/PageHero';
import { conferenceData } from '../data/conferenceData';

export default function TeamPage() {
  const { team } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="01.01 // ABOUT"
        title="THE PEOPLE"
        highlightTitle="BEHIND BSIDES DHARAMSHALA."
        subtitle="Meet the community organizers, volunteers, and security researchers bringing the conference to the Himalayas."
        breadcrumb="ABOUT / TEAM"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="team-cards-grid">
            {team.map((member) => (
              <div key={member.id} className="tactical-card team-card">
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} className="team-photo" />
                  <span className="team-cat-badge">{member.category}</span>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
