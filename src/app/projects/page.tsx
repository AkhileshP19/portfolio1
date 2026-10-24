import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Code2,
  Layers3,
  CalendarDays,
  Trophy,
  CircleHelp,
} from "lucide-react";
import { allProjects } from "@/data/project-directory";
import ExternalLink from "@/components/ui/ExternalLink";
export const metadata: Metadata = {
  title: "Projects — Products, platforms and experiments",
  description:
    "Explore all five projects by Akhilesh Patil: Xseed.AI, CreatorOS, Doctor Appointment System, Satej Sports Club and Quizzy Quest.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Akhilesh Patil",
    description:
      "Production engineering, independent products and earlier experiments.",
    url: "/projects",
    images: ["/opengraph-image"],
  },
};
const icons = [Layers3, Code2, CalendarDays, Trophy, CircleHelp];
export default function ProjectsPage() {
  return (
    <main id="main-content" className="container projects-page">
      <header className="projects-header">
        <p className="eyebrow">Project directory / 05 projects</p>
        <h1>
          Built, shipped,
          <br />
          and learned from.
        </h1>
        <p>
          From enterprise workflows to independent products and earlier
          experiments. The complete collection.
        </p>
      </header>
      <div className="directory-grid">
        {allProjects.map((project, index) => {
          const Icon = icons[index];
          return (
            <article
              id={project.slug}
              className={`directory-project ${project.caseStudy ? "featured-project" : ""}`}
              key={project.slug}
            >
              <div className="directory-art" aria-hidden="true">
                <Icon size={48} strokeWidth={1.2} />
                <span className="mono">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {project.caseStudy ? "FEATURED" : "PROJECT"}
                </span>
              </div>
              <div className="directory-content">
                <p className="eyebrow">{project.category}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <p className="directory-stack">
                  {project.stack.slice(0, 7).join(" / ")}
                </p>
                <div className="project-links">
                  {project.caseStudy && (
                    <Link className="text-link" href={`/work/${project.slug}`}>
                      <BookOpen size={16} aria-hidden="true" />
                      Case study
                      <span className="sr-only">: {project.title}</span>
                    </Link>
                  )}
                  <ExternalLink href={project.live}>Live site</ExternalLink>
                  {project.github && (
                    <ExternalLink href={project.github}>
                      Source code
                    </ExternalLink>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="directory-contact">
        <h2>Have a project in mind?</h2>
        <Button
          className="button"
          nativeButton={false}
          render={<Link href="/#contact" />}
        >
          Let’s talk
        </Button>
      </div>
    </main>
  );
}
