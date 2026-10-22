import type { Project } from "@/data/portfolio";
import { Workflow } from "lucide-react";
export default function ArchitectureFlow({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <figure className={`architecture ${compact ? "compact" : ""}`}>
      <div className="diagram-heading">
        <span className="eyebrow">
          {project.title} / {project.number}
        </span>
        <span className="diagram-mark" aria-hidden="true">
          <Workflow size={23} />
        </span>
      </div>
      <p className="diagram-title">
        {project.slug === "creator-os"
          ? "From idea to published."
          : project.slug === "xseed-ai"
            ? "The recruitment lifecycle."
            : "From booking to consultation."}
      </p>
      {project.slug === "creator-os" && (
        <div className="service-layers">
          <span>01 / Frontend</span>
          <span>02 / API</span>
          <span>03 / Worker</span>
        </div>
      )}
      <ol className="flow-list">
        {project.flow.map((stage, index) => (
          <li key={stage.label}>
            <span className="node-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <strong>{stage.label}</strong>
              <p>{stage.detail}</p>
            </div>
            {index < project.flow.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption>{project.flowCaption}</figcaption>
    </figure>
  );
}
