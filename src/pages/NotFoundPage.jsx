import React from 'react';
import { Link } from 'react-router-dom';
import TopographicLines from '../components/TopographicLines';
import { ArrowRightIcon } from '../components/Icons';

export default function NotFoundPage() {
  return (
    <div className="not-found-viewport">
      <TopographicLines className="not-found-topo" />
      <div className="section-container not-found-container">
        <div className="not-found-code">404 // SIGNAL LOST</div>
        <h1 className="not-found-title">
          THE PAGE YOU REQUESTED <br />
          <span className="text-highlight-red">COULD NOT BE FOUND.</span>
        </h1>
        <p className="not-found-sub">
          The requested coordinate or pathway is out of reach. Check the navigation tree or return home.
        </p>

        <Link to="/" className="btn-hero-primary not-found-btn">
          RETURN HOME <ArrowRightIcon size={18} />
        </Link>
      </div>
    </div>
  );
}
