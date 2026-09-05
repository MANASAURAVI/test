import React from 'react';
import PageHero from '../components/PageHero';
import ScheduleSection from '../components/ScheduleSection';

export default function SchedulePage() {
  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="03.03 // SCHEDULE"
        title="CONFERENCE"
        highlightTitle="FULL SCHEDULE."
        subtitle="March 14, 2027 • Dharamshala, Himachal Pradesh, India • All technical sessions, keynote talks, and networking."
        breadcrumb="SCHEDULE / FULL SCHEDULE"
      />

      <ScheduleSection />
    </div>
  );
}
