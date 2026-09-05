import React from 'react';
import PageHero from '../components/PageHero';
import SponsorsSection from '../components/SponsorsSection';

export default function SponsorsPage() {
  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="02.01 // CONFERENCE"
        title="CONFERENCE"
        highlightTitle="SPONSORS & PARTNERS."
        subtitle="Supporting open technical research, community access, and student participation in the Himalayas."
        breadcrumb="CONFERENCE / SPONSORS"
      />

      <SponsorsSection />
    </div>
  );
}
