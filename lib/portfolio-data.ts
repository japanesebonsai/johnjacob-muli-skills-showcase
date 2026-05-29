export const profile = {
  name: "John Jacob Muli",
  title: "Student Developer",
  tagline: "Building clean, responsive web and software experiences.",
  email: "jacobmuli0729@gmail.com",
  profileImage: "/john-jacob-muli-profile.jpeg",
  resume: "/john-jacob-muli-resume.pdf",
}

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/japanesebonsai",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-jacob-muli-3772a6293/",
  },
  {
    label: "Email",
    href: "mailto:jacobmuli0729@gmail.com",
  },
] as const

export const education = {
  school: "Cebu Institute of Technology - University",
  program: "BS Computer Science",
  year: "Third Year",
  standing: "Dean's List",
  honorsTrack: "On track for Latin honors, pending final academic requirements",
  summary:
    "Third-year BS Computer Science student at Cebu Institute of Technology - University, consistently recognized on the Dean's List / Honor Roll.",
  highlights: [
    "Huawei certifications",
    "CodeChum certification / achievements",
    "2nd Runner Up, Innovation Cup Cebu 2026",
  ],
  website: "https://cit.edu/",
  locationLabel: "Cebu City, Philippines",
  coordinates: {
    lat: 10.2949,
    lng: 123.8817,
  },
}

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    label: "Programming",
    skills: ["C", "C++", "C#", "Python", "Java", "Kotlin"],
  },
  {
    label: "Backend & Databases",
    skills: ["Spring Boot", "Django", "SQL", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Figma", "Android SDK", "Vercel"],
  },
] as const

export const experiences = [
  {
    title: "IT Student Assistant",
    organization: "Cebu Reliable and Excellent Seafarers Training Center",
    shortName: "CREST",
    period: "Jun 2024 - Aug 2024",
    type: "Experience",
    image: "/involvement/experience-crest-assessment-center.jpg",
    accent: "blue",
    summary:
      "Supported IT and operations work inside a seafarers training environment, balancing software testing with simulator readiness.",
    highlights: [
      "Tested student LMS features for functionality, responsiveness, and requirement fit.",
      "Documented bugs and UI/UX improvements for smoother student workflows.",
      "Assisted with diagnostics and system checks for a ship handling simulator.",
    ],
    impact: "Real operations exposure",
  },
  {
    title: "Community Engagement Officer",
    organization: "Google Developer Groups on Campus CIT-U",
    shortName: "GDG CIT-U",
    period: "2025 - Present",
    type: "Organization",
    image: "/involvement/involvement-gdg-citu.jpg",
    accent: "google",
    summary:
      "Helped make technical events more approachable through workshop materials, attendee engagement, and on-site support.",
    highlights: [
      "Designed interactive session materials for developer workshops.",
      "Coordinated attendee engagement during community events.",
      "Supported a campus tech culture built around learning and collaboration.",
    ],
    impact: "Developer community work",
  },
  {
    title: "Management Information Team (MIT) Developer",
    organization: "Angat Buhay",
    shortName: "Angat Buhay",
    period: "Oct 2025",
    type: "Volunteer",
    image: "/involvement/involvement-angat-buhay.jpg",
    accent: "pink",
    summary:
      "Co-developed an emergency MIS for disaster-response coordination after the 6.9M Cebu earthquake.",
    highlights: [
      "Built and shipped an emergency information system within 3 days.",
      "Centralized logistics routing and real-time data management for relief operations.",
      "Supported coordination across 245 affected barangays in Cebu Province.",
    ],
    impact: "245 barangays supported",
  },
] as const

export const projects = [
  {
    title: "Kumpas",
    eyebrow: "AI Career Guidance",
    status: "Featured build",
    description:
      "A multi-AI specialist career assessment system that turns student records and labor-market context into counselor-ready recommendations.",
    role: "Frontend, AI workflow, and deployment contributor",
    impact:
      "2nd Runner Up at Innovation Cup Cebu 2026, selected from 50 competing teams.",
    image: "/projects/project-kumpas-preview.png",
    repo: "https://github.com/jermochi/kumpas",
    repoFullName: "jermochi/kumpas",
    accent: "green",
    tech: ["Next.js", "Gemini API", "Vercel", "AI Specialists"],
  },
  {
    title: "ResQ",
    eyebrow: "Disaster Transparency",
    status: "Featured build",
    description:
      "A relief distribution concept using Cardano, cryptographic identity hashing, public audit trails, and transparent aid accountability without storing PII.",
    role:
      "Backend developer responsible for the off-chain database layer supporting aid records and system data.",
    impact:
      "Connected blockchain-backed transparency with practical off-chain data storage for disaster-response coordination.",
    image: "/projects/project-resq-preview.png",
    repo: "https://github.com/MRhagz/resQ",
    repoFullName: "MRhagz/resQ",
    accent: "blue",
    tech: ["Cardano", "Off-chain Database", "Backend", "Transparency"],
  },
  {
    title: "StepSync",
    eyebrow: "Mobile Fitness Tracker",
    status: "Android build",
    description:
      "A full-stack Android fitness tracker that logs steps, calories burned, and user activity history through phone sensors and Firebase.",
    role:
      "Built the Kotlin Android app with pedometer and gyroscope tracking plus Firebase-backed activity history.",
    impact:
      "Improved background battery efficiency by 80% with dynamic sensor polling that degrades gracefully during low-power states.",
    image: "/projects/project-stepsync-logo.png",
    repo: "https://github.com/japanesebonsai/StepSync/",
    repoFullName: "japanesebonsai/StepSync",
    accent: "blue",
    tech: ["Kotlin", "Firebase", "Android", "Sensor Tracking"],
  },
  {
    title: "Project EVA",
    eyebrow: "AI-Assisted Visualizer",
    status: "Data structures",
    description:
      "An AI-assisted data structure visualizer that helps explain arrays, stacks, queues, hash tables, deques, and binary trees in context.",
    role:
      "Implemented the chatbot module and visualization-state extraction for contextual AI explanations.",
    impact:
      "Used single-pass iteration for linear structures and recursive traversal for trees to capture the current visualization state.",
    image: "/projects/project-eva-preview.png",
    repo: "https://github.com/karlphoenixcornilla/Capstone2025",
    repoFullName: "karlphoenixcornilla/Capstone2025",
    accent: "yellow",
    tech: ["Java", "JavaFX", "OpenAI API", "MySQL"],
  },
] as const
