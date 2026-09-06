import React from 'react';

export default function SpeakersSection() {
  const speakers = [
    {
      id: '01',
      name: 'Aisha Khan',
      role: 'Head of Red Teaming',
      company: 'Apex Cyber Solutions',
      topic: 'The Art of Social Engineering & Physical Access Exploitation',
      desc: 'Deconstructing modern red team campaigns combining OSINT, physical perimeter bypasses, and specialized hardware implants in high-security facilities.',
      img: '/images/img1.webp',
      tag: 'OFFENSIVE SECURITY'
    },
    {
      id: '02',
      name: 'Jonh Khan',
      role: 'Principal Cloud Architect',
      company: 'CloudGuard Systems',
      topic: 'Zero Trust Architecture in Multi-Cloud Environments',
      desc: 'Architecting resilient IAM policies, cross-cloud workload identity federation, and automated real-time compliance enforcement across AWS and GCP.',
      img: '/images/img2.webp',
      tag: 'CLOUD SECURITY'
    },
    {
      id: '03',
      name: 'Mani Shyaa',
      role: 'Exploit Researcher',
      company: 'Vulnerability Labs',
      topic: 'Kernel Memory Exploitation & modern Mitigation Bypass',
      desc: 'Deep dive into 64-bit Linux kernel memory corruption primitives, heap feng-shui tactics, and bypassing modern security mitigations.',
      img: '/images/img3.webp',
      tag: 'REVERSE ENGINEERING'
    },
    {
      id: '04',
      name: 'Panah Khan',
      role: 'AI Security Specialist',
      company: 'Neural Defenses',
      topic: 'Securing LLMs Against Prompt Injection & Data Poisoning',
      desc: 'Evaluating systemic risks in LLM integrations, indirect prompt injection attack vectors, and practical defensive guardrails for enterprise AI apps.',
      img: '/images/img4.webp',
      tag: 'AI & SAFETY'
    }
  ];

  return (
    <section className="section-block speakers-section" id="speakers">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-num">03</span>
            <span className="tag-slash">//</span>
            <span className="tag-title">SPEAKERS</span>
          </div>

          <h2 className="section-title">
            FEATURED <br />
            <span className="text-highlight-red">SECURITY EXPERTS.</span>
          </h2>
          <p className="section-subtitle">
            Pioneers, exploit researchers, cloud defenders, and AI safety engineers sharing technical depth in the Himalayas.
          </p>
        </div>

        {/* SPEAKERS GRID */}
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card-editorial">
              <div className="speaker-img-container">
                <img src={speaker.img} alt={speaker.name} className="speaker-photo" />
                <div className="speaker-img-overlay" />
                <div className="speaker-id-badge">{speaker.id}</div>
                <div className="speaker-tag-chip">{speaker.tag}</div>
              </div>

              <div className="speaker-info-body">
                <h3 className="speaker-name">{speaker.name}</h3>
                <div className="speaker-title-strip">
                  <span className="speaker-role">{speaker.role}</span>
                  <span className="speaker-company"> // {speaker.company}</span>
                </div>

                <div className="speaker-topic-box">
                  <span className="topic-label">TALK TITLE</span>
                  <h4 className="topic-title">{speaker.topic}</h4>
                </div>

                <p className="speaker-bio">{speaker.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
