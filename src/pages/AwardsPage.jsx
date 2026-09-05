import React from 'react';
import PageHero from '../components/PageHero';
import { TrophyIcon } from '../components/Icons';
import { conferenceData } from '../data/conferenceData';

export default function AwardsPage() {
  const { awards } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="04 // AWARDS"
        title="COMMUNITY AWARDS"
        highlightTitle="RECOGNIZING EXCELLENCE."
        subtitle="Honoring the researchers, open-source maintainers, and community builders who move security forward."
        breadcrumb="AWARDS"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="awards-intro-banner">
            <TrophyIcon size={36} color="#FF1638" />
            <h2 className="awards-banner-title">RECOGNIZING THE PEOPLE WHO MOVE THE COMMUNITY FORWARD</h2>
            <p className="awards-banner-sub">
              Presented at the closing ceremony of BSides Dharamshala 2027 in Himachal Pradesh.
            </p>
          </div>

          <div className="awards-grid">
            {awards.map((award) => (
              <div key={award.id} className="tactical-card award-card">
                <div className="award-cat-tag">{award.category}</div>
                <h3 className="award-name">{award.title}</h3>
                <p className="award-desc">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
