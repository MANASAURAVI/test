import React from 'react';
import PageHero from '../components/PageHero';
import VenueSection from '../components/VenueSection';
import { conferenceData } from '../data/conferenceData';

export default function VenuePage() {
  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="01.03 // ABOUT"
        title="CONFERENCE VENUE"
        highlightTitle="& TRAVEL GUIDE."
        subtitle="Dharamshala, Himachal Pradesh, India • 32.2190° N, 76.3234° E • Altitude 1,457 M"
        breadcrumb="ABOUT / VENUE"
      />

      <VenueSection />
    </div>
  );
}
