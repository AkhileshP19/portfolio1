import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import ExternalLink from "@/components/ui/ExternalLink";
import ArchitectureFlow from "./ArchitectureFlow";
export default function ProjectCaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <main id="main-content" className="container">
      <header className="case-hero">
        <Link className="text-link back-link" href="/#work">
          <ChevronLeft size={18} aria-hidden="true" /> Selected work
        </Link>
        <p className="eyebrow">
          {project.number} / {project.category}
        </p>
        <h1>{project.title}</h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <div className="case-meta">
          <div>
            <p className="eyebrow">My role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="eyebrow">{project.status}</p>
            <div className="project-links">
              <ExternalLink href={project.live}>Visit live site</ExternalLink>
              {project.github && (
                <ExternalLink href={project.github}>View source</ExternalLink>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="case-body">
        <section className="case-section">
          <h2>01 / Overview</h2>
          <p className="lead">{project.summary}</p>
        </section>
        <section className="case-section">
          <h2>02 / Context</h2>
          <p className="lead">{project.context}</p>
        </section>
        <section className="case-section">
          <h2>03 / What I built</h2>
          <ul className="outcome-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="case-section">
          <h2>04 / Workflow</h2>
          <ArchitectureFlow project={project} />
        </section>
        <section className="case-section">
          <h2>05 / Technical decisions</h2>
          <div>
            {project.decisions.map((decision) => (
              <article key={decision.title} className="decision">
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="case-section">
          <h2>06 / Engineering impact</h2>
          <p className="lead">{project.impact}</p>
        </section>
        <section className="case-section">
          <h2>07 / Stack</h2>
          <p className="case-stack">{project.stack.join(" / ")}</p>
        </section>
        <Link className="case-next" href={`/work/${next.slug}`}>
          <div>
            <p className="eyebrow">Next case study</p>
            <strong>{next.title}</strong>
          </div>
          <ChevronRight size={30} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
