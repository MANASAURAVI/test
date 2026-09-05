import React from 'react';
import PageHero from '../components/PageHero';
import { conferenceData } from '../data/conferenceData';

export default function ExhibitionPage() {
  const { exhibition } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="03.02 // SCHEDULE"
        title="EXHIBITION &"
        highlightTitle="COMMUNITY VILLAGES."
        subtitle="Explore open-source tool pavilions, hardware hacking labs, and interactive sponsor booths."
        breadcrumb="SCHEDULE / EXHIBITION"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="exhibition-grid">
            {exhibition.map((item) => (
              <div key={item.id} className="tactical-card exhibition-card">
                <div className="ex-booth-badge">{item.booth}</div>
                <h3 className="ex-name">{item.name}</h3>
                <p className="ex-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
