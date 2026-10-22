import { experience, education } from "@/data/portfolio";
import ExperienceDuration from "@/components/ui/ExperienceDuration";
import SectionLabel from "@/components/ui/SectionLabel";
export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionLabel number="02">Experience</SectionLabel>
      <div className="section-heading">
        <h2>
          Production is
          <br />
          the proving ground.
        </h2>
      </div>
      <div className="experience-record">
        <div>
          <p className="eyebrow">{experience.period}</p>
          <h3>{experience.role}</h3>
          <p className="company">{experience.company}</p>
          <p className="mono muted">
            <ExperienceDuration /> · India
          </p>
        </div>
        <div>
          <p className="lead">{experience.description}</p>
          <ul className="outcome-list">
            {experience.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="education">
        <p className="eyebrow">Education / {education.period}</p>
        <div>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
        </div>
        <span className="mono">{education.grade}</span>
      </div>
    </section>
  );
}
