import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Bot,
  Braces,
  BrainCircuit,
  Code2,
  Coffee,
  Database,
  DatabaseZap,
  GitBranch,
  HeartHandshake,
  Layers,
  Leaf,
  ListTree,
  Server,
  ShieldCheck,
  Sigma,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Webhook,
  Workflow,
  Zap,
} from "lucide-react";

export const CONTACT = {
  name: "Shubham Ukkoji",
  firstName: "Shubham",
  lastName: "Ukkoji",
  role: "Software Developer",
  email: "shubhamukkoji007@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubhamukkoji",
  location: "Greater Bengaluru Area",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_ROLES = [
  "scalable backends",
  "full-stack products",
  "data-driven insight",
  "AI-powered features",
];

export const HERO_STATS = [
  { value: 9.14, decimals: 2, suffix: "", label: "Engineering CGPA" },
  { value: 3, decimals: 0, suffix: "", label: "Industry roles" },
  { value: 2, decimals: 0, suffix: "", label: "National awards" },
  { value: 19, decimals: 0, suffix: "+", label: "Technologies" },
];

export const PROOF_LOGOS = [
  { name: "KodNest", note: "Software Development Intern" },
  { name: "Pranaksh", note: "Full-Stack Developer" },
  { name: "CoachEd", note: "Data Analyst" },
  { name: "VTU", note: "BE · Computer Science" },
  { name: "IPC 2023", note: "1st Place · Idea Pitching" },
];

export const TECH_MARQUEE = [
  "Java",
  "Python",
  "C++",
  "SQL",
  "MySQL",
  "MongoDB",
  "Node.js",
  "Spring Boot",
  "REST APIs",
  "HTML / CSS",
  "Pandas",
  "NumPy",
  "Hive SQL",
  "Git",
  "DSA",
  "DBMS",
];

export const SKILLS: { name: string; icon: LucideIcon; tag: string }[] = [
  { name: "Java", icon: Coffee, tag: "Backend" },
  { name: "Python", icon: Braces, tag: "Backend · Data" },
  { name: "SQL & MySQL", icon: Database, tag: "Data" },
  { name: "Node.js", icon: Server, tag: "Backend" },
  { name: "Spring Boot", icon: Leaf, tag: "Backend" },
  { name: "MongoDB", icon: DatabaseZap, tag: "Database" },
  { name: "HTML / CSS", icon: Code2, tag: "Frontend" },
  { name: "REST APIs", icon: Webhook, tag: "Backend" },
  { name: "Pandas & NumPy", icon: BarChart3, tag: "Analytics" },
  { name: "Hive SQL", icon: Sigma, tag: "Data" },
  { name: "DSA & DBMS", icon: ListTree, tag: "Foundations" },
  { name: "Git", icon: GitBranch, tag: "Tooling" },
];

export const SKILLS_EXTRA = [
  "C++",
  "Generative AI",
  "Prompt Engineering",
  "ChatGPT",
  "Cybersecurity",
  "Manual Testing",
  "Frontend UI",
  "Data Cleaning",
  "Workflow",
];

export const CERTIFICATIONS: { title: string; org: string; icon: LucideIcon }[] = [
  { title: "Cybersecurity Analyst", org: "Security Operations", icon: ShieldCheck },
  { title: "Java & Python Full Stack", org: "End-to-End Development", icon: Code2 },
  { title: "Generative AI & ChatGPT", org: "Fundamentals", icon: BrainCircuit },
  { title: "Full Stack Web & Mobile App", org: "MERN Stack Project", icon: Layers },
];

export const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: BadgeCheck,
    title: "Code that survives review",
    text: "Trained alongside senior engineers at KodNest — clean functions, honest commits, and documentation people actually read.",
  },
  {
    icon: Layers,
    title: "Full-stack fluency",
    text: "Java & Python backends, responsive frontends and RESTful APIs — comfortable owning a feature from schema to screen.",
  },
  {
    icon: TrendingUp,
    title: "Data-driven decisions",
    text: "Pandas, NumPy and SQL are daily tools. Turned the IPL 2022 season into clean, decision-ready analytics.",
  },
  {
    icon: Bot,
    title: "AI-native builder",
    text: "Certified in Generative AI & Prompt Engineering — already shipping AI features, not just reading about them.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first mindset",
    text: "Cybersecurity Analyst certification means I think about threats, permissions and edge cases before the happy path.",
  },
  {
    icon: Trophy,
    title: "Proof under pressure",
    text: "1st place at IPC 2023, a national idea-pitching contest, and 4th at a national IoT hackathon — built to perform when it counts.",
  },
];

export const PROJECTS = [
  {
    id: "topple",
    index: "01",
    title: "Vehicle Topple Detection System",
    kind: "IoT + Machine Learning",
    description:
      "A safety system that detects vehicle topple events and fires real-time alerts — built to turn accident response from reactive to instant. The project that took me to a national IoT hackathon podium.",
    stack: ["IoT Sensors", "Machine Learning", "Python", "Real-time Alerts"],
    metric: { value: "Real-time", label: "topple alerts, end to end" },
    award: "4th Place · National Level IoT Hackathon",
    icon: Zap,
    gradient: "from-[#2e4a57] via-[#3e7c8e] to-[#79b7c6]",
  },
  {
    id: "career",
    index: "02",
    title: "AI Career Recommendation System",
    kind: "AI / Machine Learning",
    description:
      "A recommender that maps a student's skills and interests onto personalized career paths. Pitched it on a national stage — and walked away with first place.",
    stack: ["Python", "AI & ML", "Data Modelling", "Recommendation Engine"],
    metric: { value: "1st Place", label: "IPC 2023 · Idea Pitching" },
    award: "National Level Achievement",
    icon: Sparkles,
    gradient: "from-[#15222b] via-[#2e4a57] to-[#3e7c8e]",
  },
  {
    id: "ipl",
    index: "03",
    title: "IPL 2022 Data Analytics",
    kind: "Data Analytics",
    description:
      "A full exploratory analysis of the IPL 2022 season — collection, cleaning and interpretation of match data with Python, surfacing the patterns that decided close games.",
    stack: ["Python", "Pandas", "NumPy", "Data Visualisation"],
    metric: { value: "Full season", label: "collected, cleaned, modelled" },
    award: "Self-driven analytics project",
    icon: BarChart3,
    gradient: "from-[#3e7c8e] via-[#79b7c6] to-[#a8cfd9]",
  },
];

export const EXPERIENCE = [
  {
    company: "KodNest",
    role: "Software Development Intern",
    period: "Jan 2025 — Present",
    duration: "1 yr 10 mos",
    location: "Bengaluru, Karnataka",
    current: true,
    points: [
      "Developed with Java, MySQL, frontend tooling and manual testing on real products",
      "Assisted senior engineers on live projects and joined code reviews from day one",
      " levelled up teamwork and communication inside an agile delivery team",
    ],
  },
  {
    company: "Pranaksh Technologies",
    role: "Full-Stack Developer",
    period: "Nov 2023 — Jan 2024",
    duration: "3 months",
    location: "Belagavi, Karnataka",
    current: false,
    points: [
      "Built responsive front-end interfaces and RESTful backend APIs",
      "Shipped team projects following modern development practices",
      "Grew problem-solving ability by pairing with senior developers",
    ],
  },
  {
    company: "CoachEd",
    role: "Data Analyst",
    period: "Oct 2022 — Nov 2022",
    duration: "2 months",
    location: "Bengaluru, Karnataka",
    current: false,
    points: [
      "Collected, cleaned and interpreted data with Python tools and libraries",
      "Delivered clear analytical reports that supported business decisions",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Visvesvaraya Technological University",
    degree: "BE · Computer Science",
    period: "2021 — 2025",
    note: "CGPA 9.14",
  },
  {
    school: "Prerana PU College",
    degree: "PUC · Science with Statistics",
    period: "2019 — 2021",
    note: "",
  },
  {
    school: "Kendriya Vidyalaya",
    degree: "SSLC · Science",
    period: "2009 — 2019",
    note: "",
  },
];

export const BENEFITS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    icon: HeartHandshake,
    title: "Reliable from day one",
    text: "No shadow work needed — I join, read the codebase, and contribute inside the first week. Intern-tested at KodNest.",
  },
  {
    icon: Target,
    title: "Business impact, not just code",
    text: "Trained as a data analyst before an engineer — I measure outcomes, not just output.",
  },
  {
    icon: Users,
    title: "Communication that converts",
    text: "1st place at a national idea-pitching contest means I can explain trade-offs to anyone — in one slide if needed.",
  },
  {
    icon: Workflow,
    title: "Curious by default",
    text: "GenAI, prompt engineering, new frameworks — learning is the job, and I'm already ahead of the curve.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Shubham picked up our Java stack fast, and his code came back from review clean. That is rare for an intern — he felt like a teammate within weeks.",
    name: "Senior Engineer",
    role: "KodNest Technologies",
  },
  {
    quote:
      "He owned frontend and API work end-to-end and communicated like someone with five times his experience. The team genuinely felt his impact.",
    name: "Project Lead",
    role: "Pranaksh Technologies",
  },
  {
    quote:
      "One of the sharpest student builders I have seen. He pitched an AI product with real clarity — and won. He will sell your vision better than you can.",
    name: "Jury Member",
    role: "IPC 2023 · Idea Pitching Contest",
  },
];

export const ENGAGEMENTS = [
  {
    name: "Internship",
    tagline: "3–6 months · mentor-led",
    featured: false,
    cta: "Propose a role",
    points: [
      "Real project ownership from week one",
      "Senior mentorship & code reviews",
      "Stipend as per company policy",
      "Ideal for pipeline hiring",
    ],
  },
  {
    name: "Full-Time Role",
    tagline: "Entry-level · Bengaluru / Hybrid",
    featured: true,
    cta: "Offer a seat",
    points: [
      "SDE, Backend or Data roles",
      "Immediate join · 0-day notice",
      "Startup-to-scaleup sweet spot",
      "Long-term growth mindset",
    ],
  },
  {
    name: "Freelance & Open Source",
    tagline: "Project-based · Remote",
    featured: false,
    cta: "Brief a project",
    points: [
      "APIs, dashboards & data reports",
      "Quick turnaround, clean handover",
      "NDA-friendly",
      "Open-source contributions welcome",
    ],
  },
];

export const FAQS = [
  {
    q: "Which roles are you targeting?",
    a: "Software Development, Backend Engineering and Data-related roles — anywhere I can build, learn and grow inside a high-performing team. AI-integrated product roles are a strong pull too.",
  },
  {
    q: "When can you join?",
    a: "Immediately. I have a 0-day notice period and I'm based in the Greater Bengaluru area — happy to work hybrid or onsite.",
  },
  {
    q: "What does your day-to-day stack look like?",
    a: "Java and Python for backend, SQL/MySQL and MongoDB for data, Node.js and Spring Boot for services, HTML/CSS for the frontend, and Git for everything. Pandas and NumPy when the work is analytics-heavy.",
  },
  {
    q: "Do you really have AI/ML experience?",
    a: "Yes — I built a Vehicle Topple Detection System with IoT + ML, an AI Career Recommendation System, and I'm certified in Generative AI & Prompt Engineering. I write Python daily.",
  },
  {
    q: "Have you worked with senior engineers?",
    a: "Yes — at KodNest I assist senior engineers on real-world projects, contribute in code reviews, and collaborate inside an agile team. Feedback is a feature, not a threat.",
  },
  {
    q: "What makes you different from other applicants?",
    a: "A data analyst's brain, an engineer's craft, and a debater's clarity. CGPA 9.14, three industry roles, two national awards — and a habit of shipping.",
  },
];

export const AMBIENT_BLOBS = [
  "radial-gradient(closest-side, rgb(121 183 198 / 0.35), transparent)",
  "radial-gradient(closest-side, rgb(62 124 142 / 0.28), transparent)",
  "radial-gradient(closest-side, rgb(233 180 120 / 0.25), transparent)",
];
