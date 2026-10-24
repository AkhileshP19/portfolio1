import { projects } from "./portfolio";
export interface DirectoryProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  live: string;
  github?: string;
  caseStudy?: boolean;
}
export const allProjects: DirectoryProject[] = [
  ...projects,
  {
    slug: "satej-sports-club",
    title: "Satej Sports Club",
    category: "Sports application",
    summary:
      "A sports club application bringing live matches, points tables and championship history into a responsive, mobile-first experience.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Dynamic routing"],
    live: "https://satej-sports-club.vercel.app/",
    github: "https://github.com/akhileshp19/sports-management-frontend",
  },
  {
    slug: "quizzy-quest",
    title: "Quizzy Quest",
    category: "Interactive web application",
    summary:
      "An interactive quiz application with category selection, difficulty levels, a timer and real-time scoring. Built with browser fundamentals and an external quiz API.",
    stack: ["HTML", "CSS", "JavaScript", "Local Storage", "API integration"],
    live: "https://quizyquest.netlify.app/",
    github: "https://github.com/akhileshp19/quizzy-quest",
  },
];
