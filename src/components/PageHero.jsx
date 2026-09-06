import React from 'react';
import TopographicLines from './TopographicLines';

export default function PageHero({ sectionCode, title, highlightTitle, subtitle, breadcrumb, rightElement, centered = false, className = '' }) {
  return (
    <div className={`page-hero-wrapper ${centered ? 'page-hero-centered' : ''} ${className}`}>
      <TopographicLines className="page-topo-overlay" />
      <div className="section-container page-hero-container">
        <div className="page-hero-flex-layout">
          <div className="page-hero-main-col">
            {breadcrumb && (
              <div className="page-breadcrumb">
                <span className="bc-root">BSIDES DHARAMSHALA</span>
                <span className="bc-slash">/</span>
                <span className="bc-curr">{breadcrumb}</span>
              </div>
            )}

            {sectionCode && (
              <div className="page-hero-tag">
                <span className="tag-num">{sectionCode}</span>
              </div>
            )}

            <h1 className="page-hero-title">
              {title}
              {title && highlightTitle && <br />}
              {highlightTitle && <span className="text-highlight-red">{highlightTitle}</span>}
            </h1>

            {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          </div>

          {rightElement && (
            <div className="page-hero-right-col">
              {rightElement}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
