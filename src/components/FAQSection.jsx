import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is BSides Dharamshala?',
      a: 'BSides Dharamshala is an open, community-driven cybersecurity conference held in Dharamshala, Himachal Pradesh. It brings together security researchers, ethical hackers, developers, privacy advocates, and students for open technical presentations, CTF competitions, and high-altitude networking.'
    },
    {
      q: 'Who can attend?',
      a: 'Everyone! Students, security professionals, open-source contributors, independent vulnerability researchers, hobbyists, and anyone curious about cybersecurity and technology are welcome.'
    },
    {
      q: 'Is the conference free?',
      a: 'Yes, BSides Dharamshala is a community-first event with free attendee passes made possible through our generous sponsors and volunteers. Registration is required due to venue capacity.'
    },
    {
      q: 'Where is the venue?',
      a: 'The event takes place at the Himalayan Conference Center in Dharamshala, Himachal Pradesh, India (Coordinates: 32.2190° N, 76.3234° E, Altitude 1,457 m), overlooking the Dhauladhar snow range.'
    },
    {
      q: 'How can I become a speaker?',
      a: 'Our Call for Papers (CFP) is open to all original security research, offensive & defensive techniques, cloud security, AI risks, and hardware hacking talks. Submit your abstract through our CFP portal.'
    },
    {
      q: 'How can I sponsor?',
      a: 'We offer customizable sponsorship packages for companies wanting to support open security education, recruit top technical talent, and connect with the community. Contact sponsors@bsidesdharamshala.org for details.'
    },
    {
      q: 'Will there be a CTF?',
      a: 'Yes! An 8-hour Jeopardy-style Capture The Flag (CTF) tournament will run alongside the main track featuring Web, Pwn, Reverse Engineering, Crypto, OSINT, and Forensics challenges.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section-block faq-section" id="faq">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-num">08</span>
            <span className="tag-slash">//</span>
            <span className="tag-title">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="section-title">
            COMMON <br />
            <span className="text-highlight-red">INQUIRIES & ANSWERS.</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about participating, attending, presenting, or sponsoring BSides Dharamshala.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item-card ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="faq-q-num">0{idx + 1}</span>
                  <span className="faq-q-text">{faq.q}</span>
                  <ChevronDownIcon
                    size={20}
                    className={`faq-chevron ${isOpen ? 'chevron-rotated' : ''}`}
                  />
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className={`faq-answer-body ${isOpen ? 'answer-visible' : ''}`}
                >
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
