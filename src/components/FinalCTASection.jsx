import React from 'react';
import { ArrowRightIcon } from './Icons';

export default function FinalCTASection({ onOpenRegister }) {
  return (
    <section className="final-cta-section">
      <div className="final-cta-bg">
        <img src="/images/homepage.png" alt="Himalayan Sunset Backdrop" className="final-bg-img" />
        <div className="final-overlay-gradient" />
      </div>

      <div className="section-container final-cta-container">
        <div className="final-cta-content">
          <div className="final-motto-tag">
            <span className="motto-accent">━━━━</span>
            <span className="motto-text">HACK &nbsp;&nbsp; // &nbsp;&nbsp; LEARN &nbsp;&nbsp; // &nbsp;&nbsp; SHARE &nbsp;&nbsp; // &nbsp;&nbsp; BELONG</span>
          </div>

          <h2 className="final-title">
            SEE YOU <br />
            <span className="text-highlight-red">IN THE HIMALAYAS.</span>
          </h2>

          <p className="final-description">
            March 14, 2027 • Dharamshala, Himachal Pradesh, India. <br />
            Join the cybersecurity community where ideas travel further.
          </p>

          <div className="final-btn-wrap">
            <button className="btn-hero-primary final-cta-btn" onClick={onOpenRegister}>
              BE PART OF IT <ArrowRightIcon size={20} />
            </button>
          </div>

          <div className="final-coords-footer">
            32.2190° N &nbsp; 76.3234° E &nbsp; // &nbsp; ALT. 1,457 M
          </div>
        </div>
      </div>
    </section>
  );
}
