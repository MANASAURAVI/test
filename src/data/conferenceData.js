const currentYear = new Date().getFullYear();

// Centralized Conference Data for BSides Dharamshala
export const conferenceData = {
  event: {
    name: "BSides Dharamshala",
    edition: String(currentYear),
    date: `MAR 14, ${currentYear}`,
    time: "9:00 AM — 6:00 PM",
    city: "Dharamshala",
    state: "Himachal Pradesh",
    country: "India",
    location: "Dharamshala, HP",
    fullLocation: "Himachal Pradesh, India",
    coordinates: "32.2190° N, 76.3234° E",
    latitude: "32.2190° N",
    longitude: "76.3234° E",
    altitude: "ALT. 1,457 M",
    tagline: "HACK // LEARN // SHARE // BELONG",
    subtitle: "A COMMUNITY-DRIVEN SECURITY CONFERENCE",
    description: "In the lap of the Himalayas, where ideas travel further. BSides Dharamshala brings together curious minds, breakers, builders, and the security community for open knowledge and real conversations.",
    registrationUrl: "#register"
  },

  team: [
    {
      id: "t1",
      name: "Aarav Sharma",
      role: "Lead Organizer",
      category: "Organizers",
      bio: "Cybersecurity researcher and community advocate with 10+ years experience in vulnerability research.",
      img: "/images/img1.png"
    },
    {
      id: "t2",
      name: "Meera Sen",
      role: "Operations & Logistics Lead",
      category: "Operations",
      bio: "Event manager specialized in high-altitude technical summits and open-source tech communities.",
      img: "/images/img2.png"
    },
    {
      id: "t3",
      name: "Rohan Varma",
      role: "Technical Program Chair",
      category: "Security",
      bio: "Red teamer and exploit researcher dedicated to promoting technical depth in Indian infosec.",
      img: "/images/img3.png"
    },
    {
      id: "t4",
      name: "Ananya Kapoor",
      role: "Community Outreach",
      category: "Community",
      bio: "Advocate for diversity in cybersecurity and mentor for student security researchers.",
      img: "/images/img4.png"
    }
  ],

  codeOfConduct: {
    title: "CODE OF CONDUCT",
    lastUpdated: "January 2027",
    introduction: "BSides Dharamshala is committed to providing a safe, inclusive, and welcoming environment for all participants regardless of gender, sexual orientation, disability, physical appearance, body size, race, religion, or background.",
    sections: [
      {
        heading: "01 // EXPECTED BEHAVIOR",
        content: [
          "Be respectful, empathetic, and constructive in all interactions.",
          "Exercise consideration and respect in your speech and actions.",
          "Attempt collaboration before conflict.",
          "Refrain from demeaning, discriminatory, or harassing behavior and speech.",
          "Respect privacy, boundaries, and venue policies at all times."
        ]
      },
      {
        heading: "02 // UNACCEPTABLE BEHAVIOR",
        content: [
          "Harassment, intimidation, stalking, or inappropriate physical contact.",
          "Offensive verbal or written comments related to gender, identity, or background.",
          "Unwelcome sexual attention, crude imagery, or sexually explicit talk material.",
          "Sustained disruption of talks, workshops, or community events.",
          "Unauthorized recording or photography of attendees who request privacy."
        ]
      },
      {
        heading: "03 // REPORTING & ENFORCEMENT",
        content: [
          "If you are subject to or witness unacceptable behavior, please notify a conference staff member immediately.",
          "Staff members can be identified by dedicated red lanyard badges.",
          "Participants asked to stop any harassing behavior are expected to comply immediately.",
          "Organizers reserve the right to revoke conference access without refund for violations."
        ]
      }
    ]
  },

  venue: {
    name: "Himalayan Conference Center & Auditorium",
    region: "Upper Dharamshala / McLeod Ganj Region",
    address: "Himachal Pradesh 176215, India",
    coordinates: "32.2190° N, 76.3234° E",
    altitude: "1,457 Meters",
    overview: "Set against the dramatic backdrop of the snow-capped Dhauladhar range, the venue offers high-speed fiber connectivity, modern keynote halls, outdoor discussion decks, and mountain fireside lounges.",
    travel: [
      {
        mode: "BY AIR",
        detail: "Gaggal Airport (DHM) is located 15 km from Dharamshala with daily flights connecting to New Delhi (DEL)."
      },
      {
        mode: "BY RAIL",
        detail: "Pathankot Railway Station (PTK) is the nearest broad-gauge hub (85 km) with direct connections across India."
      },
      {
        mode: "BY ROAD",
        detail: "Overnight Volvo buses operate daily between New Delhi / Chandigarh and Dharamshala."
      }
    ]
  },

  reviewBoard: [
    {
      id: "rb1",
      name: "Dr. Vikram Seth",
      role: "Review Board Member",
      expertise: "Cryptography & Hardware Security",
      affiliation: "Institute of Information Security",
      img: "/images/img1.png"
    },
    {
      id: "rb2",
      name: "Kavita Rao",
      role: "Review Board Member",
      expertise: "Cloud Native & Microservices Defense",
      affiliation: "Cloud Security Alliance",
      img: "/images/img2.png"
    },
    {
      id: "rb3",
      name: "Devang Patel",
      role: "Review Board Member",
      expertise: "Kernel Exploitation & Reverse Engineering",
      affiliation: "Kernel Labs",
      img: "/images/img3.png"
    }
  ],

  advisoryBoard: [
    {
      id: "ab1",
      name: "Sanjay Dutta",
      role: "Advisory Board Member",
      focus: "Global Infosec Strategy & Governance",
      img: "/images/img4.png"
    },
    {
      id: "ab2",
      name: "Pooja Malhotra",
      role: "Advisory Board Member",
      focus: "Community Leadership & Academic Alliances",
      img: "/images/img5.png"
    }
  ],

  sponsors: {
    platinum: [
      { name: "SECURE_LABS", type: "PLATINUM SPONSOR", code: "01_PLATINUM" },
      { name: "CYBER_HIMALAYA", type: "PLATINUM SPONSOR", code: "02_PLATINUM" }
    ],
    gold: [
      { name: "NORD_DEFENSE", type: "GOLD PARTNER", code: "01_GOLD" },
      { name: "CLOUDFORT_AI", type: "GOLD PARTNER", code: "02_GOLD" },
      { name: "HEX_ANALYTICS", type: "GOLD PARTNER", code: "03_GOLD" }
    ],
    community: [
      { name: "Null Community", type: "COMMUNITY PARTNER" },
      { name: "OWASP India", type: "COMMUNITY PARTNER" },
      { name: "DefCon Group India", type: "ECOSYSTEM" },
      { name: "Infosec Girls", type: "COMMUNITY PARTNER" }
    ]
  },

  speakers: [
    {
      id: "sp1",
      name: "Aisha Khan",
      role: "Head of Red Teaming",
      organization: "Apex Cyber Solutions",
      topic: "The Art of Social Engineering & Physical Access Exploitation",
      category: "OFFENSIVE SECURITY",
      bio: "Deconstructing modern red team campaigns combining OSINT, physical perimeter bypasses, and specialized hardware implants.",
      img: "/images/img1.png"
    },
    {
      id: "sp2",
      name: "Jonh Khan",
      role: "Principal Cloud Architect",
      organization: "CloudGuard Systems",
      topic: "Zero Trust Architecture in Multi-Cloud Environments",
      category: "CLOUD SECURITY",
      bio: "Architecting resilient IAM policies, cross-cloud workload identity federation, and automated real-time compliance enforcement.",
      img: "/images/img2.png"
    },
    {
      id: "sp3",
      name: "Mani Shyaa",
      role: "Exploit Researcher",
      organization: "Vulnerability Labs",
      topic: "Kernel Memory Exploitation & Mitigation Bypass",
      category: "REVERSE ENGINEERING",
      bio: "Deep dive into 64-bit Linux kernel memory corruption primitives, heap feng-shui tactics, and bypassing modern security mitigations.",
      img: "/images/img3.png"
    },
    {
      id: "sp4",
      name: "Panah Khan",
      role: "AI Security Specialist",
      organization: "Neural Defenses",
      topic: "Securing LLMs Against Prompt Injection & Poisoning",
      category: "AI & SAFETY",
      bio: "Evaluating systemic risks in LLM integrations, indirect prompt injection attack vectors, and practical defensive guardrails.",
      img: "/images/img4.png"
    }
  ],

  callForPapers: {
    title: "CALL FOR PAPERS",
    tagline: "Submit your work to",
    event: "BSides Dharamshala 2027",
    status: "CLOSED",
    statusText: "CFP is currently closed",
    description: "BSides Dharamshala is a community-driven information security conference bringing together security researchers, practitioners, developers, students, and curious minds to share knowledge, research, and real-world experiences.",
    about: {
      paragraphs: [
        "BSides Dharamshala invites security researchers, practitioners, developers, students, educators, and industry professionals to submit original, technical, experience-driven, and community-focused talks.",
        "Our goal is to create a space where people can share practical knowledge, new research, lessons from the field, failures, discoveries, tools, and ideas that move the security community forward.",
        "We welcome both experienced speakers and first-time presenters. You do not need to be a well-known researcher or industry veteran to contribute. If you have something valuable to teach, demonstrate, or discuss, we want to hear from you."
      ],
      callout: "Whether you have discovered an interesting vulnerability, built a security tool, investigated an incident, conducted original research, learned something the hard way, or explored an emerging attack surface — submit it."
    },
    tracks: [
      {
        title: "Main Technical Track",
        desc: "Deep technical sessions covering real-world vulnerabilities, attack techniques, security research, exploitation, defenses, and practical lessons."
      },
      {
        title: "Offensive Security & Red Teaming",
        desc: "Penetration testing, red teaming, adversary simulation, exploitation techniques, attack chains, OPSEC, and offensive tooling."
      },
      {
        title: "Bug Bounty & Vulnerability Research",
        desc: "Bug hunting methodologies, vulnerability discovery, novel exploitation techniques, automation, research workflows, and responsible disclosure experiences."
      },
      {
        title: "Web, API & Application Security",
        desc: "Web applications, APIs, authentication, authorization, business logic, mobile applications, application architectures, and secure-by-design practices."
      },
      {
        title: "Cloud & Infrastructure Security",
        desc: "Cloud environments, containers, Kubernetes, identity and access management, network security, infrastructure attacks, and cloud-native defense."
      },
      {
        title: "Blue Team, Detection & Incident Response",
        desc: "SOC operations, detection engineering, threat hunting, digital forensics, incident response, security monitoring, and defensive engineering."
      },
      {
        title: "Malware & Threat Research",
        desc: "Malware analysis, reverse engineering, threat intelligence, intrusion analysis, attack campaigns, and emerging threats."
      },
      {
        title: "Hardware, IoT & Embedded Security",
        desc: "IoT devices, embedded systems, firmware analysis, hardware attacks, automotive security, radio security, and physical attack surfaces."
      },
      {
        title: "AI & Emerging Security",
        desc: "AI/ML security, LLM security, AI-assisted attacks and defense, prompt injection, agent security, model abuse, and security challenges created by emerging technologies."
      },
      {
        title: "Secure Engineering & DevSecOps",
        desc: "Secure software development, security architecture, DevSecOps, CI/CD security, supply-chain security, secure coding, and building resilient systems."
      },
      {
        title: "Workshops & Hands-on Sessions",
        desc: "Interactive sessions where participants learn through practical exercises, demonstrations, labs, or controlled environments."
      },
      {
        title: "Community, Career & Security Culture",
        desc: "Security career journeys, education, research methodology, community building, mentorship, learning paths, and experiences that help strengthen the wider security community."
      }
    ],
    topics: [
      {
        title: "Web & API Security",
        desc: "Vulnerability research, business logic flaws, OAuth/JWT bypasses, GraphQL/REST API security, authentication, and secure web application frameworks."
      },
      {
        title: "Cloud, Container & Kubernetes Security",
        desc: "Cloud misconfigurations, IAM privilege escalation, container escapes, K8s cluster security, serverless risks, and multi-cloud defenses."
      },
      {
        title: "Mobile Security — Android & iOS",
        desc: "Application reverse engineering, IPC exploitation, binary protections, runtime manipulation (Frida/Objection), and mobile OS security models."
      },
      {
        title: "IoT, Embedded & Hardware Security",
        desc: "Hardware hacking, JTAG/UART debugging, firmware analysis, side-channel attacks, radio/SDR security, and physical attack surfaces."
      },
      {
        title: "Network & Infrastructure Security",
        desc: "Core protocol vulnerabilities, perimeter defense, active directory domain attacks, VPN/edge device exploitation, and network architecture security."
      },
      {
        title: "Red Teaming & Adversary Simulation",
        desc: "Advanced attack chains, C2 infrastructure, EDR evasion, OPSEC strategies, initial access vectors, and real-world adversary emulation."
      },
      {
        title: "Penetration Testing & Exploitation",
        desc: "Practical offensive methodologies, zero-day research, privilege escalation techniques, exploit development, and weaponization."
      },
      {
        title: "Bug Bounty & Vulnerability Research",
        desc: "Unique bug hunting workflows, novel vulnerability patterns, disclosure experiences, automated scanning tools, and bug bounty methodologies."
      },
      {
        title: "Blue Teaming & Detection Engineering",
        desc: "SIEM/XDR rule creation, threat hunting frameworks, Sigma/YARA rules, behavioral detection, and defensive engineering."
      },
      {
        title: "Incident Response & Digital Forensics",
        desc: "Compromise investigations, root cause analysis, memory forensics, artifact extraction, crisis management, and post-breach remediation."
      },
      {
        title: "Threat Intelligence & Malware Research",
        desc: "APT campaign analysis, ransomware breakdown, indicator extraction (IOCs), C2 telemetry, and threat actor profiling."
      },
      {
        title: "Reverse Engineering",
        desc: "Binary decompilation, disassembly analysis, obfuscation bypassing, packer unpacking, and deep protocol dissection."
      },
      {
        title: "Identity & Access Management",
        desc: "Zero Trust architectures, PAM, SAML/SSO vulnerabilities, directory service security, and identity governance challenges."
      },
      {
        title: "DevSecOps & Software Supply Chain Security",
        desc: "CI/CD pipeline security, dependency risk management, SAST/DAST integration, SBOM enforcement, and secure coding practices."
      },
      {
        title: "AI, ML & LLM Security",
        desc: "Prompt injection, model inversion, agent security, training data poisoning, AI-assisted attack vectors, and LLM defensive guardrails."
      },
      {
        title: "Privacy & Data Protection",
        desc: "Data anonymization, cryptographic privacy protocols, regulatory technical compliance (GDPR), and user data protection systems."
      },
      {
        title: "Web3, Blockchain & Smart Contract Security",
        desc: "Smart contract auditing, reentrancy/logic exploits, DeFi protocol security, bridge attacks, and cryptographic vulnerabilities."
      },
      {
        title: "Automotive & OT/ICS Security",
        desc: "CAN bus hacking, SCADA/ICS network defense, industrial control safety, critical infrastructure protection, and embedded vehicular security."
      },
      {
        title: "Security Automation & Tooling",
        desc: "Open-source security tools, custom script automation, workflow orchestration, and scalable scanning infrastructure."
      },
      {
        title: "Emerging Attack Surfaces & Novel Research",
        desc: "Experimental security domains, cross-disciplinary research, unconventional vectors, and novel security discoveries."
      }
    ],
    topicsNote: "This list is not exhaustive. Original, unconventional, cross-disciplinary, and experimental submissions are strongly encouraged.",
    strongSubmissions: [
      {
        title: "Original Research",
        desc: "New techniques, findings, vulnerabilities, attack methods, defensive approaches, or security research."
      },
      {
        title: "Real-World Experience",
        desc: "Lessons learned from incidents, assessments, bug bounty programs, security operations, engineering, or research."
      },
      {
        title: "Technical Depth",
        desc: "Practical demonstrations, technical walkthroughs, methodology, tooling, and meaningful technical detail."
      },
      {
        title: "Actionable Knowledge",
        desc: "Things attendees can take back to their teams, projects, labs, or research."
      },
      {
        title: "Honest Failures & Lessons Learned",
        desc: "Security does not always go according to plan. We welcome responsible discussions about failed approaches, unexpected results, and what you learned from them."
      }
    ],
    reviewAndSelection: {
      process: {
        title: "Review Process",
        text: "Each submission will be evaluated by the BSides Dharamshala CFP/review team.",
        factorsLabel: "Submissions may be assessed on factors including:",
        factors: [
          "Originality and novelty",
          "Technical depth",
          "Practical relevance",
          "Clarity of the proposal",
          "Educational value",
          "Relevance to the security community",
          "Quality and feasibility of the proposed session"
        ],
        footer: "We welcome submissions from both experienced speakers and people presenting at a security conference for the first time."
      },
      fairness: {
        title: "Independence & Fairness",
        text: "The CFP process is designed to evaluate proposals based on the quality and value of the submitted content.",
        subtext: "Speaker popularity, employer, job title, social-media following, or organisational affiliation should not be the deciding factor in whether a proposal is valuable to the community."
      }
    },
    codeOfConduct: [
      "All speakers and participants must comply with the BSides Dharamshala Code of Conduct.",
      "We do not accept talks whose primary purpose is harassment, discrimination, intimidation, or promoting harmful or unethical behaviour.",
      "Security research involving vulnerabilities, systems, or third-party infrastructure must be conducted responsibly and within appropriate legal and ethical boundaries.",
      "Where applicable, researchers should follow responsible/coordinated vulnerability disclosure practices and avoid exposing sensitive information that could unnecessarily put users, organisations, or infrastructure at risk."
    ],
    speakerResponsibilities: [
      "Present content that is substantially their own work or clearly identify external material.",
      "Provide accurate information and avoid intentionally misleading claims.",
      "Respect applicable laws, disclosure requirements, and ethical boundaries.",
      "Avoid turning educational sessions into sales pitches or promotional presentations.",
      "Notify the organisers as early as possible about significant changes to the proposed talk.",
      "Obtain appropriate permission before presenting confidential, proprietary, or sensitive information.",
      "Ensure demonstrations do not unnecessarily expose real users, credentials, personal information, or production systems."
    ],
    whatWeDontWant: [
      "Pure product or company marketing",
      "Sales pitches disguised as technical talks",
      "Content with little or no educational value",
      "Talks based primarily on publicly available material without meaningful original contribution",
      "Unauthorized exploitation of real-world systems",
      "Research that exposes sensitive information without appropriate disclosure",
      "Content that violates the BSides Dharamshala Code of Conduct"
    ],
    firstTimeSpeakers: {
      title: "First-Time Speakers Welcome",
      subtitle: "Never spoken at a conference before? That's okay.",
      text: "BSides Dharamshala is interested in ideas and experiences — not just speaker résumés.",
      callout: "If you have something technically interesting, useful, or thought-provoking to share, submit your proposal."
    },
    submitProposal: {
      title: "Submit Your Proposal",
      status: "CFP is currently closed",
      subtext: "Follow our social channels or subscribe to updates for the next Call for Papers.",
      calloutHeading: "Have something worth sharing with the community?",
      callout: "We want to hear it."
    }
  },

  callForVolunteers: {
    title: "OPS CREW",
    status: "CLOSED",
    statusText: "Volunteer applications are currently closed",
    nextCallText: "Follow our social channels or subscribe to updates for the next call for volunteers.",
    thankYou: {
      heading: "Thank You, OPS CREW.",
      paragraphs: [
        "BSides Dharamshala 2026 happened because of you. Every badge handed over, every session ushered in, every question answered, every problem solved quietly before anyone noticed it existed — that was you. The OPS CREW.",
        "Dharamshala came alive with security researchers, hackers, developers, students, and curious minds coming together to learn, share, and connect. None of that energy would have been possible without the people working behind the scenes. You gave your time, your energy, and your weekends to make something meaningful for the community.",
        "On behalf of every speaker, every attendee, and every organiser: thank you.",
        "BSides Dharamshala belongs to the community, and the OPS CREW is a huge part of what makes that community special. We are incredibly proud of everything you helped make happen, and we cannot wait to build the next chapter with you."
      ]
    },
    roles: [
      {
        title: "Registration Desk",
        desc: "The first faces our attendees met. You welcomed everyone, handled registrations, and set the tone for the entire event."
      },
      {
        title: "Exhibition Support",
        desc: "You kept the exhibition area organised, welcoming, and running smoothly while helping exhibitors and attendees connect."
      },
      {
        title: "Stage Host",
        desc: "You kept sessions on schedule, speakers comfortable, and the energy in the room alive."
      },
      {
        title: "Control Room",
        desc: "The nerve centre of BSides Dharamshala. You coordinated the moving parts behind the scenes and made sure nothing slipped through the cracks."
      },
      {
        title: "Event Runners",
        desc: "Always moving, always ready. You delivered what was needed, where it was needed, before anyone had to ask."
      },
      {
        title: "Party & Networking",
        desc: "You helped create an open, welcoming environment where attendees could relax, meet new people, and build connections beyond the sessions."
      },
      {
        title: "Photography & Media",
        desc: "You captured the people, moments, ideas, and energy that made BSides Dharamshala memorable long after the event ended."
      },
      {
        title: "Hygiene & Facilities",
        desc: "You helped keep the venue clean, comfortable, accessible, and ready for the community throughout the event."
      }
    ]
  },

  trainings: [
    {
      id: "tr1",
      title: "Advanced Linux Kernel Exploitation",
      instructor: "Mani Shyaa",
      duration: "4 Hours",
      level: "ADVANCED",
      desc: "Hands-on workshop covering kernel heap manipulation, ROP chains, and exploit construction in Linux 6.x environments."
    },
    {
      id: "tr2",
      title: "Practical AI & LLM Red Teaming",
      instructor: "Panah Khan",
      duration: "4 Hours",
      level: "INTERMEDIATE",
      desc: "Simulating adversarial attacks against production AI agents, automated prompt extraction, and input validation bypasses."
    }
  ],

  exhibition: [
    {
      id: "ex1",
      booth: "BOOTH 01",
      name: "Open Source Tool Pavilion",
      description: "Live demonstrations of open-source security utilities built by Indian security researchers."
    },
    {
      id: "ex2",
      booth: "BOOTH 02",
      name: "Hardware Hacking Village",
      description: "Interactive village featuring soldering stations, SDR equipment, and microcontroller inspection tools."
    }
  ],

  schedule: [
    { time: "09:00 AM", duration: "60 MIN", title: "REGISTRATION & HIMALAYAN WELCOME COFFEE", track: "KEYNOTE HALL", tag: "WELCOME" },
    { time: "10:00 AM", duration: "50 MIN", title: "OPENING CEREMONY & KEYNOTE ADDRESS", track: "KEYNOTE HALL", tag: "KEYNOTE" },
    { time: "11:00 AM", duration: "55 MIN", title: "KERNEL MEMORY EXPLOITATION & MITIGATION BYPASS", track: "TRACK 01 // OFFENSE", tag: "EXPLOITATION" },
    { time: "12:00 PM", duration: "55 MIN", title: "SECURING LLMS AGAINST PROMPT INJECTION", track: "TRACK 02 // AI DEFENSE", tag: "AI SECURITY" },
    { time: "01:00 PM", duration: "60 MIN", title: "COMMUNITY LUNCH & HIGH-ALTITUDE NETWORKING", track: "OUTDOOR TERRACE", tag: "NETWORKING" },
    { time: "02:00 PM", duration: "55 MIN", title: "ZERO TRUST ARCHITECTURE IN MULTI-CLOUD", track: "TRACK 01 // CLOUD", tag: "ARCHITECTURE" },
    { time: "03:00 PM", duration: "55 MIN", title: "PHYSICAL PERIMETER BYPASS & HARDWARE IMPLANTS", track: "TRACK 02 // HARDWARE", tag: "RED TEAM" },
    { time: "04:00 PM", duration: "120 MIN", title: "COMMUNITY LIGHTNING TALKS & TECHNICAL DEMOS", track: "MAIN HALL", tag: "COMMUNITY" },
    { time: "06:00 PM", duration: "ONWARDS", title: "CLOSING REMARKS & FIRESIDE NETWORKING", track: "FIRESIDE LOUNGE", tag: "SOCIAL" }
  ],

  awards: [
    {
      id: "aw1",
      title: "Himalayan Security Researcher of the Year",
      category: "RESEARCH EXCELLENCE",
      desc: "Recognizing outstanding technical vulnerability research and responsible disclosure impact."
    },
    {
      id: "aw2",
      title: "Open Source Tool Innovation Award",
      category: "COMMUNITY BUILDER",
      desc: "Honoring open-source security tools that empower defenders and security practitioners globally."
    },
    {
      id: "aw3",
      title: "Rising Infosec Talent Award",
      category: "STUDENT & EMERGING",
      desc: "Acknowledging exceptional promise and contributions from student researchers in security."
    }
  ],

  contact: {
    email: "info@bsidesdharamshala.org",
    sponsorshipEmail: "sponsors@bsidesdharamshala.org",
    cfpEmail: "cfp@bsidesdharamshala.org",
    location: "Dharamshala, Himachal Pradesh, India",
    coordinates: "32.2190° N, 76.3234° E"
  }
};
