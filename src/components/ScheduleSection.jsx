import React, { useState } from 'react';

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState('main');

  const scheduleEvents = [
    {
      time: '09:00 AM',
      duration: '60 MIN',
      title: 'REGISTRATION & HIMALAYAN WELCOME COFFEE',
      speaker: 'Organizing Committee',
      track: 'KEYNOTE HALL',
      tag: 'WELCOME',
      desc: 'Check-in, collect your tactical badge and welcome kit, grab fresh local mountain tea or coffee, and network with early arrivals.'
    },
    {
      time: '10:00 AM',
      duration: '50 MIN',
      title: 'OPENING CEREMONY: HIGHER ALTITUDES, DEEPER CONVERSATIONS',
      speaker: 'BSides Dharamshala Team',
      track: 'KEYNOTE HALL',
      tag: 'KEYNOTE',
      desc: 'Welcome address detailing the conference mission, community guidelines, CTF platform rules, and introducing our keynote speakers.'
    },
    {
      time: '11:00 AM',
      duration: '55 MIN',
      title: 'KERNEL MEMORY EXPLOITATION & MODERN MITIGATION BYPASS',
      speaker: 'Mani Shyaa',
      track: 'TRACK 01 // OFFENSE',
      tag: 'EXPLOITATION',
      desc: 'Deep technical analysis of Linux kernel heap corruption vulnerabilities, exploitation primitives, and bypasses for modern memory safety mitigations.'
    },
    {
      time: '12:00 PM',
      duration: '55 MIN',
      title: 'SECURING LLMS AGAINST PROMPT INJECTION & POISONING',
      speaker: 'Panah Khan',
      track: 'TRACK 02 // AI DEFENSE',
      tag: 'AI SECURITY',
      desc: 'Evaluating real-world prompt injection attack vectors in LLM-powered applications, data poisoning risks, and structural defense patterns.'
    },
    {
      time: '01:00 PM',
      duration: '60 MIN',
      title: 'COMMUNITY LUNCH & HIGH-ALTITUDE NETWORKING',
      speaker: 'All Attendees & Speakers',
      track: 'OUTDOOR TERRACE',
      tag: 'NETWORKING',
      desc: 'Traditional Himachali lunch provided on the outdoor mountain terrace overlooking the Dhauladhar snow peaks.'
    },
    {
      time: '02:00 PM',
      duration: '55 MIN',
      title: 'ZERO TRUST ARCHITECTURE IN MULTI-CLOUD ENVIRONMENTS',
      speaker: 'Jonh Khan',
      track: 'TRACK 01 // CLOUD',
      tag: 'ARCHITECTURE',
      desc: 'Practical strategies for cross-cloud identity federation, zero-trust network micro-segmentation, and real-time posture enforcement.'
    },
    {
      time: '03:00 PM',
      duration: '55 MIN',
      title: 'PHYSICAL PERIMETER BYPASS & SPECIALIZED HARDWARE IMPLANTS',
      speaker: 'Aisha Khan',
      track: 'TRACK 02 // HARDWARE',
      tag: 'RED TEAM',
      desc: 'Live demonstration of custom hardware implants, RF signal analysis, and covert physical entry techniques used in red team engagements.'
    },
    {
      time: '04:00 PM',
      duration: '120 MIN',
      title: 'LIVE CTF COMPETITION & LIGHTNING COMMUNITY TALKS',
      speaker: 'CTF Committee & Speakers',
      track: 'CTF ARENA',
      tag: 'COMPETITION',
      desc: 'Live scoreboard showdown for the CTF tournament alongside 5-minute community lightning presentations.'
    },
    {
      time: '06:00 PM',
      duration: 'ONWARDS',
      title: 'CLOSING REMARKS & AFTER-HOURS MOUNTAIN FIRESIDE',
      speaker: 'BSides Crew & Community',
      track: 'FIRESIDE LOUNGE',
      tag: 'SOCIAL',
      desc: 'Awarding CTF prize winners, thanking sponsors, and gathering around outdoor fire pits for evening conversations.'
    }
  ];

  return (
    <section className="section-block schedule-section" id="schedule">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-num">04</span>
            <span className="tag-slash">//</span>
            <span className="tag-title">SCHEDULE</span>
          </div>

          <h2 className="section-title">
            TECHNICAL <br />
            <span className="text-highlight-red">EVENT TIMELINE.</span>
          </h2>
          <p className="section-subtitle">
            March 14, 2027 — Full day of high-density technical sessions, CTF battles, and open knowledge sharing.
          </p>
        </div>

        {/* TIMELINE LIST */}
        <div className="timeline-wrapper">
          {scheduleEvents.map((item, index) => (
            <div key={index} className="timeline-row">
              {/* Left Time Column */}
              <div className="timeline-time-col">
                <span className="time-value">{item.time}</span>
                <span className="time-duration">{item.duration}</span>
                <span className="timeline-indicator-dot" />
              </div>

              {/* Right Content Card */}
              <div className="timeline-content-card">
                <div className="card-meta-bar">
                  <span className="track-badge">{item.track}</span>
                  <span className="tag-badge">{item.tag}</span>
                </div>

                <h3 className="timeline-item-title">{item.title}</h3>

                <div className="timeline-speaker-line">
                  <span className="by-label">PRESENTER:</span>
                  <span className="speaker-name-val">{item.speaker}</span>
                </div>

                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
