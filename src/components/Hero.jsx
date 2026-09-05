import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, MapPinIcon } from './Icons';


export default function Hero({ onOpenRegister }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="hero-viewport" id="hero">
      {/* Clean Static Background Container */}
      <div className="hero-bg-wrapper">
        {/* Initial High-Res Himalayan Image */}
        <img
          src="/images/homepage.png"
          alt="Dramatic Himalayan sunset at Dharamshala for BSides Cybersecurity Expedition"
          className="hero-background-img"
          fetchPriority="high"
          decoding="async"
        />

        {/* Muted Looping Video Smoothly Fading In Over Image */}
        <video
          ref={videoRef}
          src="/videos/video_home.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className={`hero-background-video ${isVideoLoaded ? 'video-active' : ''}`}
        />
      </div>





      <div className="hero-container">
        {/* LEFT PRIMARY CONTENT COLUMN (40-45% width) */}
        <div className="hero-left-column">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-accent-line">━━━━</span>
            <span className="eyebrow-text">HACK &nbsp;·&nbsp; LEARN &nbsp;·&nbsp; SHARE &nbsp;·&nbsp; BELONG</span>
          </div>

          {/* Main Title: Stencil BSIDES + Red Brush DHARAMSHALA */}
          <h1 className="hero-title">
            <span className="title-bsides">BSIDES</span>
            <span className="title-dharamshala">DHARAMSHALA</span>
          </h1>

          {/* Conference Sub-Label */}
          <div className="hero-conference-label">
            A COMMUNITY-DRIVEN SECURITY CONFERENCE
          </div>

          {/* Description Copy */}
          <p className="hero-description">
            Where hackers, builders, and security minds come together beneath the Himalayas—to break boundaries, share knowledge, and shape what’s next.
          </p>

          {/* Quick Event Details Metadata */}
          <div className="hero-quick-details">
            <div className="quick-detail-item">
              <div className="detail-icon-box">
                <CalendarIcon size={22} color="var(--accent-red)" />
              </div>
              <div className="detail-text-box">
                <span className="detail-title">Coming Soon</span>
                <span className="detail-sub">2027 (TBA)</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Dharamshala,+Himachal+Pradesh,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="quick-detail-item detail-location-btn"
              title="Open Dharamshala in Google Maps"
            >
              <div className="detail-icon-box">
                <MapPinIcon size={22} color="var(--accent-red)" />
              </div>
              <div className="detail-text-box">
                <span className="detail-title">Dharamshala</span>
                <span className="detail-sub">Himachal Pradesh, India</span>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button className="btn-hero-primary" onClick={onOpenRegister}>
              BE PART OF IT <ArrowRightIcon size={18} />
            </button>

            <Link to="/contact" className="btn-hero-secondary">
              STAY UPDATED <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
