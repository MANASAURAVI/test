import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { MailIcon, MapPinIcon, ArrowRightIcon, ShieldCheckIcon } from '../components/Icons';
import { conferenceData } from '../data/conferenceData';

export default function ContactPage() {
  const { contact } = conferenceData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="internal-page-view">
      <PageHero
        sectionCode="05 // CONTACT"
        title="GET IN TOUCH WITH"
        highlightTitle="BSIDES DHARAMSHALA."
        subtitle="Have questions about attending, presenting, sponsoring, or volunteering? We are here to help."
        breadcrumb="CONTACT US"
      />

      <section className="section-block">
        <div className="section-container">
          <div className="contact-split-grid">
            {/* CONTACT CHANNELS */}
            <div className="contact-info-col">
              <div className="tactical-card contact-channel-card">
                <h3 className="channel-heading">COMMUNITY CONTACT CHANNELS</h3>

                <div className="channel-item">
                  <MailIcon size={20} color="#FF1638" />
                  <div>
                    <span className="channel-label">GENERAL INQUIRIES</span>
                    <a href={`mailto:${contact.email}`} className="channel-val">{contact.email}</a>
                  </div>
                </div>

                <div className="channel-item">
                  <MailIcon size={20} color="#FF1638" />
                  <div>
                    <span className="channel-label">SPONSORSHIPS</span>
                    <a href={`mailto:${contact.sponsorshipEmail}`} className="channel-val">{contact.sponsorshipEmail}</a>
                  </div>
                </div>

                <div className="channel-item">
                  <MailIcon size={20} color="#FF1638" />
                  <div>
                    <span className="channel-label">CALL FOR PAPERS</span>
                    <a href={`mailto:${contact.cfpEmail}`} className="channel-val">{contact.cfpEmail}</a>
                  </div>
                </div>

                <div className="channel-item">
                  <MapPinIcon size={20} color="#FF1638" />
                  <div>
                    <span className="channel-label">LOCATION & COORDINATES</span>
                    <span className="channel-val">{contact.location} ({contact.coordinates})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-col">
              <div className="tactical-card contact-form-card">
                {submitted ? (
                  <div className="contact-success-state">
                    <ShieldCheckIcon size={44} color="#FF1638" />
                    <h3 className="success-title">MESSAGE DISPATCHED</h3>
                    <p className="success-desc">
                      Thank you for reaching out! Our team will respond to <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h3 className="form-title">SEND US A MESSAGE</h3>

                    <div className="form-field-group">
                      <label htmlFor="contact-name">YOUR NAME *</label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        placeholder="alex@example.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-subject">INQUIRY TYPE *</label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="general">General Inquiries</option>
                        <option value="sponsorship">Sponsorship & Partnership</option>
                        <option value="cfp">Call for Papers & Speaking</option>
                        <option value="volunteer">Volunteer & Operations</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-message">YOUR MESSAGE *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows="5"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-hero-primary contact-submit-btn">
                      SEND MESSAGE <ArrowRightIcon size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
