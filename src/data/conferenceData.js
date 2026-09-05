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
    status: "OPEN",
    deadline: "MARCH 01, 2027",
    tracks: [
      "Offensive Security & Red Teaming",
      "Defensive Architecture & Cloud Security",
      "Reverse Engineering & Malware Analysis",
      "AI & Machine Learning Risk Mitigation",
      "Hardware Hacking & IoT/Embedded Security",
      "Privacy, Cryptography & Open Source"
    ],
    submissionRequirements: [
      "Abstract (maximum 300 words) describing the technical core of your presentation.",
      "Detailed outline including technical prerequisites and key takeaways.",
      "Speaker biography and past presentation links (if applicable).",
      "State whether your submission is a 45-min talk, 20-min lightning talk, or 3-hour hands-on workshop."
    ]
  },

  callForVolunteers: {
    status: "OPEN",
    deadline: "FEBRUARY 28, 2027",
    roles: [
      "Track & Speaker Management",
      "Registration & Helpdesk Operations",
      "Network & AV Technical Support",
      "Design, Photography & Media Coverage",
      "Logistics & Venue Coordination",
      "Emergency Response & Attendee Care"
    ],
    perks: [
      "Exclusive BSides Dharamshala Volunteer T-Shirt & Swag Kit",
      "Full access to keynotes, talks, and networking sessions",
      "Certificate of Appreciation & LinkedIn endorsement",
      "Complimentary meals & refreshments during event days",
      "Direct networking with security speakers, researchers, and sponsors"
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
