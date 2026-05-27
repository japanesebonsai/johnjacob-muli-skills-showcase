export const profile = {
  name: "John Jacob Muli",
  title: "Student Developer",
  tagline: "Building clean, responsive web and software experiences.",
  email: "jacobmuli0729@gmail.com",
  profileImage: "/profile.jpg",
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

export const projects = [
  {
    title: "Project One",
    status: "Coming soon",
    description: "A placeholder project card ready to be replaced with a real build.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    status: "Coming soon",
    description: "A second editable project card for the Skills Showcase requirement.",
    tech: ["React", "shadcn/ui", "Vercel"],
  },
] as const
