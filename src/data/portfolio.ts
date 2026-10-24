export const profile = {
  name: "Akhilesh Patil",
  role: "Software Engineer",
  email: "akhileshpatil69@gmail.com",
  url: "https://akhilesh-patil.vercel.app",
  description:
    "Software Engineer building production frontend systems and full-stack AI products with React, Next.js, TypeScript, Node.js and PostgreSQL. Experience includes Xseed.AI and CreatorOS.",
  statement:
    "I build production web systems with React, Next.js and TypeScript — from complex enterprise frontend workflows to full-stack AI products.",
  about:
    "I’m a frontend-strong Software Engineer. At tCognition, my work spans enterprise recruitment workflows, reusable architecture, permissions, data fetching and production delivery. Outside work, I build CreatorOS to deepen my backend, infrastructure, automation and AI engineering experience.",
};

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/AkhileshP19" },
  { label: "LinkedIn", href: "https://linkedin.com/in/akhileshp19" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const navigation = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Stack", id: "stack" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const metrics = [
  { value: "15+", label: "Production frontend features" },
  { value: "30+", label: "Reusable UI components" },
  { value: "70+", label: "Pull requests reviewed" },
  { value: "70–80%", label: "Page-load improvement" },
];

export interface FlowStage {
  label: string;
  detail: string;
}
export interface Project {
  caseStudy?: boolean;
  slug: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  status: string;
  summary: string;
  role: string;
  context: string;
  live: string;
  github?: string;
  stack: string[];
  highlights: string[];
  decisions: { title: string; text: string }[];
  impact: string;
  flow: FlowStage[];
  flowCaption: string;
}

export const projects: Project[] = [
  {
    slug: "xseed-ai",
    caseStudy: true,
    number: "01",
    title: "Xseed.AI",
    category: "Professional work",
    subtitle: "Enterprise AI-powered applicant tracking system",
    status: "Production / tCognition",
    summary:
      "Engineering the frontend of enterprise recruitment: from schema-driven job creation to AI assessments, candidate pipelines and organizational access.",
    role: "Software Engineer at tCognition · Frontend architecture, releases and production deployments",
    context:
      "Xseed.AI manages end-to-end recruitment across job creation, candidate pipelines, AI assessments, interviews, candidate ranking, role-based access and organizational administration. My work focuses on the frontend systems that connect these workflows.",
    live: "https://xseed.ai",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Postman",
      "Swagger",
      "Mirage JS",
    ],
    highlights: [
      "Delivered 15+ production frontend features, including a drag-and-drop Kanban hiring pipeline with API-backed stage updates.",
      "Built AI assessment workflows for topic and subtopic configuration, weightage, question review, regeneration and reordering; surfaced AI-ranked candidates and job-match scores.",
      "Implemented RBAC and Super Admin interfaces across 3 organizational levels, including roles, permissions and delegation.",
      "Created shared hooks for fetching, mutations, pagination, debounced search and permission-aware UI access.",
      "Reviewed 70+ pull requests and supported quality through unit testing, API testing with Postman and Swagger, and Mirage JS mocks.",
    ],
    decisions: [
      {
        title: "Deploy the production application.",
        text: "Resolved 110+ build, TypeScript and lint issues to move a Next.js deployment from development mode to proper production builds. /-load times fell by approximately 70–80%.",
      },
      {
        title: "Share the workflow, not just the input.",
        text: "Used React Hook Form and Zod for schema-driven forms shared across create, edit and duplicate job workflows. Alongside 30+ reusable UI components, this reduced repetitive UI implementation effort by approximately 40–50%.",
      },
      {
        title: "Make server state deliberate.",
        text: "Introduced and expanded TanStack Query caching, reducing redundant API calls by up to 80% in applicable workflows. Fetching and mutation hooks provide reusable boundaries for product features.",
      },
    ],
    impact:
      "15+ features shipped. 30+ shared components. 70+ pull requests reviewed. Performance and effort figures are observed, approximate outcomes in the applicable workflows, not universal benchmarks.",
    flow: [
      {
        label: "Job creation",
        detail: "Schema-driven create, edit and duplicate workflows.",
      },
      {
        label: "AI assessment",
        detail: "Configure topics, weightage and question review.",
      },
      {
        label: "Candidate pipeline",
        detail: "Kanban stages with API-backed updates.",
      },
      {
        label: "Match / ranking",
        detail: "Candidate-job match scores and AI ranking.",
      },
      {
        label: "Interview",
        detail: "Interview workflows within the recruitment journey.",
      },
      {
        label: "RBAC / admin",
        detail: "Roles, permissions and organizational access.",
      },
    ],
    flowCaption:
      "Sanitized product workflow. A conceptual overview, not internal infrastructure.",
  },
  {
    slug: "creator-os",
    caseStudy: true,
    number: "02",
    title: "CreatorOS",
    category: "Independent product",
    subtitle: "Full-stack AI content automation platform",
    status: "Independent / building",
    summary:
      "From a content idea to a published video. Three independent services connect structured AI generation, browser automation, storage and human approval.",
    role: "Independent builder · Frontend, backend, browser worker and delivery",
    context:
      "CreatorOS manages content ideas and orchestrates structured script generation, browser-driven video generation, object storage, review, approval, scheduling and YouTube publishing. The product connects generation with the operational work required to get content reviewed and published.",
    live: "https://creator-os-hq.vercel.app/",
    github: "https://github.com/AkhileshP19/creator-os",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Clerk",
      "Node.js",
      "Express 5",
      "Prisma",
      "PostgreSQL / Neon",
      "Gemini / @google/genai",
      "Playwright",
      "Google Flow",
      "Backblaze B2",
      "YouTube API",
      "GitHub Actions",
      "Vercel",
      "Azure VMs",
    ],
    highlights: [
      "Built three independently runnable TypeScript layers: a Next.js frontend, an Express REST API and a Node.js / Express browser worker.",
      "Integrated structured Gemini script generation with persistent AI execution records tracking provider, model, input, output, status and errors.",
      "Connected Playwright browser automation to Google Flow video generation and MP4 retrieval.",
      "Added Backblaze B2 object storage and signed media URLs for generated assets.",
      "Connected review, approval and scheduling to YouTube publishing through OAuth; protected resources and ownership with Clerk.",
    ],
    decisions: [
      {
        title: "Separate the browser worker.",
        text: "The frontend, API and Playwright worker run independently. The Next.js / React frontend runs on Vercel; the backend and browser worker run on Azure VMs, with GitHub Actions supporting CI.",
      },
      {
        title: "Keep an execution record.",
        text: "AI generation persists more than the final text. Provider, model, inputs, outputs, status and error records make executions inspectable across the product lifecycle.",
      },
      {
        title: "Keep approval in the publishing path.",
        text: "Generated media moves into object storage, then review and approval before scheduled publishing. Signed media URLs support asset access, while Clerk authentication and resource ownership protect application resources.",
      },
    ],
    impact:
      "One product connects the complete content lifecycle across frontend, API, browser automation, AI providers, storage and publishing. No usage or performance metrics are claimed.",
    flow: [
      { label: "Content idea", detail: "Capture and manage a content idea." },
      {
        label: "Gemini script",
        detail: "Generate structured scripts and persist execution records.",
      },
      {
        label: "Express API",
        detail: "Coordinate application state and authenticated resources.",
      },
      {
        label: "Playwright worker",
        detail: "Run browser automation as an independent service.",
      },
      { label: "Google Flow", detail: "Drive browser-based video generation." },
      { label: "Generated video", detail: "Retrieve the generated MP4." },
      {
        label: "Backblaze B2",
        detail: "Store media and provide signed access URLs.",
      },
      {
        label: "Review / approval",
        detail: "Keep a human review step before publishing.",
      },
      {
        label: "Schedule",
        detail: "Schedule approved content for publication.",
      },
      {
        label: "YouTube",
        detail: "Publish through OAuth and the YouTube API.",
      },
    ],
    flowCaption:
      "Content lifecycle across three independently runnable services.",
  },
  {
    slug: "doctor-appointment",
    number: "03",
    title: "Doctor Appointment System",
    category: "Full-stack project",
    subtitle: "Scheduling and real-time video consultations",
    status: "Independent project",
    summary:
      "Authenticated patient and doctor scheduling, PostgreSQL persistence and real-time video consultations in one Next.js application.",
    role: "Full-stack development · Scheduling, persistence and video integration",
    context:
      "A full-stack appointment platform connecting authenticated patient and doctor scheduling workflows with real-time consultations. It brings together application identity, persistent appointment data and a third-party video service.",
    live: "https://docy-talks.vercel.app/",
    github: "https://github.com/AkhileshP19/next-doc-appointment",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Prisma",
      "PostgreSQL / Neon",
      "Vonage",
    ],
    highlights: [
      "Built authenticated patient and doctor scheduling workflows.",
      "Used Prisma with Neon PostgreSQL for application persistence.",
      "Integrated Vonage-powered real-time video consultations.",
    ],
    decisions: [
      {
        title: "Connect scheduling to persistence.",
        text: "Prisma and Neon PostgreSQL provide the persistence layer for appointment workflows within the Next.js application.",
      },
      {
        title: "Integrate real-time consultation.",
        text: "Vonage supplies the video consultation capability, connecting the scheduling experience to a live patient-doctor interaction.",
      },
    ],
    impact:
      "Demonstrates full-stack delivery across authenticated workflows, relational persistence and real-time video integration. No adoption or clinical outcome claims are made.",
    flow: [
      {
        label: "Authentication",
        detail: "Patient and doctor access through Clerk.",
      },
      { label: "Scheduling", detail: "Authenticated appointment workflows." },
      { label: "Persistence", detail: "Prisma and Neon PostgreSQL." },
      { label: "Consultation", detail: "Real-time video through Vonage." },
    ],
    flowCaption:
      "Conceptual application workflow: identity, appointments and consultation.",
  },
];

export const experience = {
  company: "tCognition",
  role: "Software Engineer",
  period: "Feb 2025 — Present",
  description:
    "Working on Xseed.AI, an enterprise AI-powered ATS, with responsibility spanning production frontend workflows, architecture, reusable systems, performance, code quality, releases and deployments.",
  outcomes: [
    "Shipped 15+ frontend features across recruitment, assessment and administration.",
    "Resolved 110+ build, TypeScript and lint issues to enable production builds.",
    "Built 30+ shared components and schema-driven forms across 3 job workflows.",
    "Reduced redundant API calls by up to 80% in applicable workflows with TanStack Query caching.",
    "Reviewed 70+ pull requests and contributed to testing, releases and deployments.",
  ],
};

export const education = {
  school: "Rajarambapu Institute of Technology",
  degree: "B.Tech — Computer Science & Information Technology",
  period: "2019–2023",
  grade: "CGPA 8.20",
};
export const skillGroups = [
  {
    title: "Core",
    primary: "React / Next.js / TypeScript",
    secondary: "JavaScript · HTML5 · CSS3",
  },
  {
    title: "Frontend systems",
    primary: "TanStack Query / React Hook Form / Zod / Tailwind CSS",
    secondary:
      "shadcn/ui · Redux Toolkit · Recharts · Context API · Data fetching & caching · Reusable components · Responsive design",
  },
  {
    title: "Backend & data",
    primary: "Node.js / Express / PostgreSQL / Prisma",
    secondary: "REST APIs · JWT authentication · MongoDB · MySQL",
  },
  {
    title: "AI & automation",
    primary: "Gemini / Structured outputs / Playwright",
    secondary:
      "@google/genai · Prompt design · Google Flow · Browser automation · AI workflow orchestration",
  },
  {
    title: "Platform & integrations",
    primary: "Clerk / Backblaze B2 / YouTube API",
    secondary: "Vonage · Object storage · Signed URLs",
  },
  {
    title: "Testing & quality",
    primary: "Unit testing / API testing / ESLint",
    secondary:
      "Vitest · React Testing Library · Postman · Swagger · Mirage JS · Core Web Vitals · Lighthouse",
  },
  {
    title: "Cloud & delivery",
    primary: "GitHub Actions / Vercel / Azure VMs",
    secondary: "CI/CD · Git · GitHub · Bitbucket",
  },
  {
    title: "AI-assisted development",
    primary: "Codex / GitHub Copilot",
    secondary: "Tools in the development workflow",
  },
];
export const principles = [
  {
    label: "Reuse",
    title: "Build systems before duplication.",
    proof: "30+ shared UI components, schema-driven forms and reusable hooks.",
  },
  {
    label: "State",
    title: "Treat server state explicitly.",
    proof:
      "Query caching, pagination and mutation abstractions across product workflows.",
  },
  {
    label: "Performance",
    title: "Optimize production behavior.",
    proof:
      "A production-build migration with an observed 70–80% reduction in page-load time.",
  },
  {
    label: "Systems",
    title: "Look beyond the component.",
    proof:
      "CreatorOS connects a backend, browser worker, object storage and publishing.",
  },
];
