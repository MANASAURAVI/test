import React from 'react';
import { MapPinIcon, PlaneIcon, TrainIcon, HotelIcon } from './Icons';

export default function VenueSection() {
  return (
    <section className="section-block venue-section" id="venue">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-num">07</span>
            <span className="tag-slash">//</span>
            <span className="tag-title">VENUE & TRAVEL</span>
          </div>

          <h2 className="section-title">
            DHARAMSHALA. <br />
            <span className="text-highlight-red">HIGHER ALTITUDES. DEEPER CONVERSATIONS.</span>
          </h2>
          <p className="section-subtitle">
            Nestled in the Kangra Valley under the shadow of the mighty Dhauladhar snow range in Himachal Pradesh, India.
          </p>
        </div>

        {/* VENUE HERO CARD WITH MAP GRAPHIC */}
        <div className="venue-editorial-card">
          <div className="venue-card-bg">
            <img
              src="/images/homepage.webp"
              alt="Dharamshala Mountain Landscape"
              className="venue-bg-image"
            />
            <div className="venue-overlay-gradient" />
          </div>

          <div className="venue-card-content">
            <div className="venue-geo-badge">
              <div className="badge-row">
                <MapPinIcon size={18} color="var(--accent-red)" />
                <span className="badge-loc">DHARAMSHALA // HIMACHAL PRADESH</span>
              </div>
              <div className="badge-coords">
                32.2190° N &nbsp;|&nbsp; 76.3234° E &nbsp;|&nbsp; <span className="alt-highlight">ALT. 1,457 M</span>
              </div>
            </div>

            <div className="venue-details-block">
              <h3 className="venue-name">Himalayan Conference Center & Auditorium</h3>
              <p className="venue-address">
                Upper Dharamshala / McLeod Ganj Region, Himachal Pradesh 176215, India
              </p>
              <p className="venue-desc">
                Surrounded by pine forests and snow-capped peaks, the venue provides high-speed fiber internet, state-of-the-art keynote auditoriums, outdoor breakout decks, and fire-pit networking lounges.
              </p>
            </div>
          </div>
        </div>

        {/* TRAVEL GUIDE GRID */}
        <div className="travel-grid">
          {/* FLIGHTS */}
          <div className="travel-card">
            <div className="travel-icon-box">
              <PlaneIcon size={24} color="var(--accent-red)" />
            </div>
            <h4 className="travel-title">BY AIR</h4>
            <p className="travel-desc">
              <strong>Gaggal Airport (DHM)</strong> is 15 km from Dharamshala with daily direct flights from New Delhi (DEL) operated by Alliance Air and IndiGo.
            </p>
          </div>

          {/* TRAIN */}
          <div className="travel-card">
            <div className="travel-icon-box">
              <TrainIcon size={24} color="var(--accent-red)" />
            </div>
            <h4 className="travel-title">BY RAIL</h4>
            <p className="travel-desc">
              <strong>Pathankot Junction (PTK / PTKC)</strong> is the nearest broad-gauge railway station (85 km), connected to major Indian cities. Taxis are readily available.
            </p>
          </div>

          {/* ACCOMMODATION */}
          <div className="travel-card">
            <div className="travel-icon-box">
              <HotelIcon size={24} color="var(--accent-red)" />
            </div>
            <h4 className="travel-title">ACCOMMODATION</h4>
            <p className="travel-desc">
              Special conference rates are available at partner hotels and mountain eco-lodges around Dharamshala and McLeod Ganj. Details sent upon registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
