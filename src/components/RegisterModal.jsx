import React, { useEffect, useState } from 'react';
import { XIcon, ArrowRightIcon, ShieldCheckIcon } from './Icons';

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'researcher',
    company: '',
    agreeTerms: true
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-tactical-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close registration modal"
        >
          <XIcon size={22} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-ring">
              <ShieldCheckIcon size={40} color="#FF1638" />
            </div>
            <h3 className="success-title">REGISTRATION CONFIRMED</h3>
            <p className="success-desc">
              Welcome to BSides Dharamshala 2027! A confirmation pass and venue guide have been dispatched to <strong>{formData.email}</strong>.
            </p>
            <div className="success-badge-code">
              PASS ID: BSIDES-DHM-2027-{(Math.random() * 8999 + 1000).toFixed(0)}
            </div>
          </div>
        ) : (
          <>
            <div className="modal-header-block">
              <div className="modal-tag">01 // CONFERENCE REGISTRATION</div>
              <h3 className="modal-title" id="modal-title">
                JOIN THE EXPEDITION.
              </h3>
              <p className="modal-subtitle">
                March 14, 2027 • Dharamshala, Himachal Pradesh, India. Free community pass.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-field-group">
                <label htmlFor="reg-name">FULL NAME *</label>
                <input
                  type="text"
                  id="reg-name"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="reg-email">EMAIL ADDRESS *</label>
                <input
                  type="email"
                  id="reg-email"
                  required
                  placeholder="alex@security-research.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="reg-category">COMMUNITY CATEGORY *</label>
                <select
                  id="reg-category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="researcher">Security Researcher / Ethical Hacker</option>
                  <option value="student">Student / Academic</option>
                  <option value="professional">Industry Professional / Architect</option>
                  <option value="hobbyist">Hobbyist / Technology Enthusiast</option>
                </select>
              </div>

              <div className="form-field-group">
                <label htmlFor="reg-company">ORGANIZATION / COLLEGE (OPTIONAL)</label>
                <input
                  type="text"
                  id="reg-company"
                  placeholder="e.g. Independent / IIT / Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-hero-primary modal-submit-btn">
                COMPLETE REGISTRATION <ArrowRightIcon size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
