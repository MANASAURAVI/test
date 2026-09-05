import React from 'react';
import { CalendarIcon, MapPinIcon, UsersIcon, ShieldIcon } from './Icons';

export default function EventInfoBar() {
  return (
    <div className="event-info-bar" role="region" aria-label="Event Key Details">
      {/* COLUMN 1: DATE */}
      <div className="info-column">
        <div className="info-icon-box">
          <CalendarIcon size={22} color="#FF1638" strokeWidth={1.75} />
        </div>
        <div className="info-details">
          <span className="info-label">DATE</span>
          <span className="info-value">MAR 14, 2027</span>
          <span className="info-subtext">9:00 AM — 6:00 PM</span>
        </div>
      </div>

      {/* COLUMN 2: LOCATION */}
      <div className="info-column">
        <div className="info-icon-box">
          <MapPinIcon size={22} color="#FF1638" strokeWidth={1.75} />
        </div>
        <div className="info-details">
          <span className="info-label">LOCATION</span>
          <span className="info-value">DHARAMSHALA, HP</span>
          <span className="info-subtext">Himachal Pradesh, India</span>
        </div>
      </div>

      {/* COLUMN 3: COMMUNITY */}
      <div className="info-column">
        <div className="info-icon-box">
          <UsersIcon size={22} color="#FF1638" strokeWidth={1.75} />
        </div>
        <div className="info-details">
          <span className="info-label">COMMUNITY</span>
          <span className="info-value">COMMUNITY DRIVEN</span>
          <span className="info-subtext">By the community, for the community</span>
        </div>
      </div>

      {/* COLUMN 4: ACCESS */}
      <div className="info-column">
        <div className="info-icon-box">
          <ShieldIcon size={22} color="#FF1638" strokeWidth={1.75} />
        </div>
        <div className="info-details">
          <span className="info-label">ACCESS</span>
          <span className="info-value">ALL ARE WELCOME</span>
          <span className="info-subtext">Students · Researchers · Professionals · Hackers</span>
        </div>
      </div>
    </div>
  );
}
