import React from 'react';
import PageHero from '../components/PageHero';
import AboutSection from '../components/AboutSection';

export default function AboutPage() {
  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="01.00 // ABOUT"
        title="ABOUT BSIDES"
        highlightTitle="DHARAMSHALA."
        subtitle="A community-driven, non-profit cybersecurity conference bringing hackers, defenders, and researchers together in the Himalayas."
        breadcrumb="ABOUT / ABOUT"
      />
      <AboutSection />
    </div>
  );
}
