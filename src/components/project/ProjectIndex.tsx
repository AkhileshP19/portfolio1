"use client";
import { useState } from "react";

// The content and diagrams arrive as server-rendered slots. Only selection hydrates.
export default function ProjectIndex({
  rows,
  previews,
}: {
  rows: React.ReactNode[];
  previews: React.ReactNode[];
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="project-index">
      <div className="project-rows">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`project-entry ${index === active ? "is-active" : ""} ${index === 2 ? "secondary-project" : ""}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            {row}
            <div className="mobile-preview">{previews[index]}</div>
          </div>
        ))}
      </div>
      <div className="sticky-preview" aria-hidden="true">
        {previews.map((preview, index) => (
          <div
            key={index}
            className={`preview-layer ${index === active ? "visible" : ""}`}
          >
            {preview}
          </div>
        ))}
      </div>
    </div>
  );
}
