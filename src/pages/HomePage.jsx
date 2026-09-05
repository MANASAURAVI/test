import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SubscribeSection from '../components/SubscribeSection';

export default function HomePage({ onOpenRegister }) {
  return (
    <div className="home-page-view">
      <Hero onOpenRegister={onOpenRegister} />
      <AboutSection />
      <SubscribeSection />
    </div>
  );
}
