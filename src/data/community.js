import { FiUsers, FiAward, FiBookOpen } from "react-icons/fi";

export const categories = [
  { id: "bucc", label: "BUCC Projects", icon: FiUsers },
  { id: "community", label: "Community & Events", icon: FiAward },
  { id: "career", label: "Student & Career", icon: FiBookOpen },
];

export const communityProjects = [
  // ── BUCC Projects ──
  {
    id: 1,
    category: "bucc",
    title: "BUCC Website",
    description:
      "Developed and maintained the official website for Babcock University Computer Club, serving as the digital front door for the community.",
    tags: ["Web Development", "Maintenance"],
    accent: "indigo",
  },
  {
    id: 2,
    category: "bucc",
    title: "BUCC Helpdesk",
    description:
      "Created a support platform for handling member inquiries, complaints, and requests — streamlining communication across the club.",
    tags: ["Support Systems", "Fullstack"],
    accent: "violet",
  },
  {
    id: 3,
    category: "bucc",
    title: "BUCC Valentine Special",
    description:
      "Designed and developed a themed engagement platform for a club-wide Valentine's campaign, driving member participation.",
    tags: ["Engagement", "UI/UX", "Themed"],
    accent: "rose",
  },
  {
    id: 4,
    category: "bucc",
    title: "BUCC Dinner Platform",
    description:
      "Built an event management and registration system for the annual BUCC Dinner, handling ticketing and attendee coordination.",
    tags: ["Event Management", "Registration"],
    accent: "amber",
  },
  {
    id: 5,
    category: "bucc",
    title: "BUCC Wrapped",
    description:
      "Developed a personalized year-in-review experience highlighting member participation and achievements throughout the year.",
    tags: ["Data Visualization", "Personalization"],
    accent: "emerald",
  },
  {
    id: 6,
    category: "bucc",
    title: "BUCC Certificate Platform (Tool Box)",
    description:
      "Automated certificate generation and distribution for events and programs, eliminating manual workflows.",
    tags: ["Automation", "PDF Generation"],
    accent: "cyan",
  },
  {
    id: 7,
    category: "bucc",
    title: "BUCC Web App",
    description:
      "Developed a centralized web application providing digital services for BUCC members — a one-stop hub for club activities.",
    tags: ["Web App", "Centralized Services"],
    accent: "indigo",
  },
  {
    id: 8,
    category: "bucc",
    title: "BUCC Ballot App",
    description:
      "Built a secure digital voting system for club elections and decision-making processes, ensuring transparency and integrity.",
    tags: ["Elections", "Security", "Voting"],
    accent: "violet",
  },

  // ── Community & Events ──
  {
    id: 9,
    category: "community",
    title: "Responsible AI Use Seminar/Workshop",
    description:
      "Organized and facilitated awareness sessions on ethical and responsible AI adoption, educating peers on emerging tech risks and best practices.",
    tags: ["AI Ethics", "Workshop", "Public Speaking"],
    accent: "rose",
  },
  {
    id: 10,
    category: "community",
    title: "Femme Tech Invite Platform",
    description:
      "Built a platform for managing registrations and invitations for women-focused technology events, promoting diversity in tech.",
    tags: ["Diversity", "Event Platform", "Women in Tech"],
    accent: "fuchsia",
  },

  // ── Student & Career ──
  {
    id: 11,
    category: "career",
    title: "Babcock SIWES Website",
    description:
      "Developed a platform to streamline SIWES (Student Industrial Work Experience Scheme) processes, submissions, and information management for students and administrators.",
    tags: ["EdTech", "Process Automation", "University"],
    accent: "emerald",
  },
];

export const impactStats = [
  { value: 11, label: "Digital Products", suffix: "" },
  { value: 3, label: "Impact Domains", suffix: "" },
  { value: 8, label: "BUCC Platforms", suffix: "" },
];
