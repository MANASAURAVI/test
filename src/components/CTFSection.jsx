import React from 'react';
import { TerminalIcon, TrophyIcon, ArrowRightIcon } from './Icons';

export default function CTFSection({ onOpenRegister }) {
  const ctfCategories = [
    { code: 'WEB', name: 'Web Exploitation', desc: 'SSRF, GraphQL vulnerabilities, JWT bypasses, and modern auth zero-days.' },
    { code: 'PWN', name: 'Binary Exploitation', desc: 'Buffer overflows, ROP chain synthesis, format string flaws, and heap corruption.' },
    { code: 'REV', name: 'Reverse Engineering', desc: 'Decompiling obfuscated binaries, malware analysis, and custom protocol dissecting.' },
    { code: 'CRYPTO', name: 'Cryptography', desc: 'RSA key recovery attacks, ECC implementation flaws, and weak PRNG exploitation.' },
    { code: 'OSINT', name: 'Open Source Intelligence', desc: 'Geolocation challenges, digital footprinting, metadata extraction, and satellite data.' },
    { code: 'FORENSICS', name: 'Digital Forensics', desc: 'Memory dump analysis, PCAP packet inspection, filesystem recovery, and steganography.' }
  ];

  return (
    <section className="section-block ctf-section" id="ctf">
      <div className="section-container">
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-num">05</span>
            <span className="tag-slash">//</span>
            <span className="tag-title">CTF COMPETITION</span>
          </div>

          <h2 className="section-title">
            BREAK THE SYSTEM. <br />
            <span className="text-highlight-red">UNDERSTAND WHY.</span>
          </h2>
          <p className="section-subtitle">
            8 hours of intense Jeopardy-style Capture The Flag competition designed for hackers of all skill levels.
          </p>
        </div>

        {/* TERMINAL-STYLE WRAPPER */}
        <div className="ctf-terminal-box">
          {/* Terminal Titlebar */}
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="terminal-title">
              ctf@bsides-dharamshala:~/challenges # ./start_flag_hunt.sh
            </div>
            <div className="terminal-status">LIVE SCOREBOARD ACTIVE</div>
          </div>

          {/* Terminal Output */}
          <div className="terminal-body">
            <div className="term-prompt">
              <span className="term-user">root@dharamshala</span>:<span className="term-path">~/ctf</span># cat welcome_banner.txt
            </div>
            <p className="term-text">
              Welcome to the BSides Dharamshala 2027 CTF. Compete individually or in teams of up to 4. Solve challenges across 6 categories, unlock flags, and climb the mountain leaderboard.
            </p>

            {/* CATEGORIES GRID */}
            <div className="ctf-categories-grid">
              {ctfCategories.map((cat, idx) => (
                <div key={idx} className="ctf-cat-card">
                  <div className="cat-header">
                    <span className="cat-code">{cat.code}</span>
                    <span className="cat-status">ACTIVE</span>
                  </div>
                  <h4 className="cat-name">{cat.name}</h4>
                  <p className="cat-desc">{cat.desc}</p>
                </div>
              ))}
            </div>

            {/* CTF DETAILS & PRIZES */}
            <div className="ctf-meta-footer">
              <div className="ctf-prize-box">
                <TrophyIcon size={28} color="#FF1638" className="prize-icon" />
                <div>
                  <span className="prize-title">REWARDS & HARDWARE PRIZES</span>
                  <span className="prize-sub">Specialized hacking hardware, trophies, certificates & security gear for top 3 teams.</span>
                </div>
              </div>

              <button className="btn-hero-primary ctf-register-btn" onClick={onOpenRegister}>
                REGISTER FOR CTF <ArrowRightIcon size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
