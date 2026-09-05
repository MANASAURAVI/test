import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { conferenceData } from '../data/conferenceData';

export default function SpeakersPage() {
  const { speakers } = conferenceData;
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'OFFENSIVE SECURITY', 'CLOUD SECURITY', 'REVERSE ENGINEERING', 'AI & SAFETY'];

  const filteredSpeakers = filter === 'ALL'
    ? speakers
    : speakers.filter(s => s.category === filter);

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="02.02 // CONFERENCE"
        title="CONFERENCE"
        highlightTitle="KEYNOTE & SPEAKERS."
        subtitle="Exploring technical depth, vulnerability research, and security engineering in Dharamshala."
        breadcrumb="CONFERENCE / SPEAKERS"
      />

      <section className="section-block">
        <div className="section-container">
          {/* CATEGORY FILTER BAR */}
          <div className="filter-bar-strip">
            <span className="filter-label">FILTER BY TRACK:</span>
            <div className="filter-chips-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* SPEAKERS GRID */}
          <div className="speakers-grid">
            {filteredSpeakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card-editorial">
                <div className="speaker-img-container">
                  <img src={speaker.img} alt={speaker.name} className="speaker-photo" />
                  <div className="speaker-img-overlay" />
                  <div className="speaker-id-badge">{speaker.id}</div>
                  <div className="speaker-tag-chip">{speaker.category}</div>
                </div>

                <div className="speaker-info-body">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <div className="speaker-title-strip">
                    <span className="speaker-role">{speaker.role}</span>
                    <span className="speaker-company"> // {speaker.organization}</span>
                  </div>

                  <div className="speaker-topic-box">
                    <span className="topic-label">TALK TITLE</span>
                    <h4 className="topic-title">{speaker.topic}</h4>
                  </div>

                  <p className="speaker-bio">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
