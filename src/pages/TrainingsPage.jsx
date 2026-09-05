import React from 'react';
import PageHero from '../components/PageHero';
import { ArrowRightIcon } from '../components/Icons';
import { conferenceData } from '../data/conferenceData';

export default function TrainingsPage({ onOpenRegister }) {
  const { trainings } = conferenceData;

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="03.01 // SCHEDULE"
        title="HANDS-ON"
        highlightTitle="TECHNICAL TRAININGS."
        subtitle="Deep-dive practical workshops led by expert security instructors."
        breadcrumb="SCHEDULE / TRAINING"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="trainings-list">
            {trainings.map((tr) => (
              <div key={tr.id} className="tactical-card training-item-card">
                <div className="tr-header">
                  <span className="tr-level-badge">{tr.level}</span>
                  <span className="tr-duration">{tr.duration}</span>
                </div>
                <h3 className="tr-title">{tr.title}</h3>
                <div className="tr-instructor-line">
                  INSTRUCTOR: <span className="instructor-val">{tr.instructor}</span>
                </div>
                <p className="tr-desc">{tr.desc}</p>

                <div className="tr-footer">
                  <button className="btn-hero-primary tr-btn" onClick={onOpenRegister}>
                    ENROLL FOR WORKSHOP <ArrowRightIcon size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
