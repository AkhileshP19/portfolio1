import Link from "next/link";
import { projects } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import ExternalLink from "@/components/ui/ExternalLink";
import ArchitectureFlow from "@/components/project/ArchitectureFlow";
import ProjectIndex from "@/components/project/ProjectIndex";
import { BookOpen, LayoutGrid } from "lucide-react";

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <SectionLabel number="01">Selected work</SectionLabel>
      <div className="section-heading">
        <h2>
          Systems I’ve
          <br />
          helped ship.
        </h2>
        <p>
          Professional ownership. Independent products.
          <br />A closer look at the engineering behind each.
        </p>
      </div>
      <ProjectIndex
        rows={projects.map((project) => (
          <article key={project.slug} className="project-row">
            <div className="project-meta eyebrow">
              <span>
                {project.number} / {project.category}
              </span>
            </div>
            <h3>
              {project.caseStudy ? (
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              ) : (
                <Link href="/projects#doctor-appointment">{project.title}</Link>
              )}
            </h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-summary">{project.summary}</p>
            <p className="project-role">{project.role}</p>
            <p className="mono project-status">{project.status}</p>
            <div className="project-links">
              {project.caseStudy && (
                <Link className="text-link" href={`/work/${project.slug}`}>
                  <BookOpen size={16} aria-hidden="true" />
                  View case study
                  <span className="sr-only">: {project.title}</span>
                </Link>
              )}
              <ExternalLink href={project.live}>Visit site</ExternalLink>
            </div>
          </article>
        ))}
        previews={projects.map((project) => (
          <ArchitectureFlow key={project.slug} project={project} compact />
        ))}
      />
      <div className="all-projects-link">
        <Link className="text-link" href="/projects">
          <LayoutGrid size={18} aria-hidden="true" />
          Browse all five projects
        </Link>
        <p>Production work, independent products and earlier experiments.</p>
      </div>
    </section>
  );
}
