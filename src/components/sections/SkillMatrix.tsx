import { skillGroups } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
export default function SkillMatrix() {
  return (
    <section id="stack" className="section">
      <SectionLabel number="03">Engineering stack</SectionLabel>
      <div className="section-heading">
        <h2>
          The tools.
          <br />
          And what connects them.
        </h2>
        <p>
          Frontend depth, with working knowledge
          <br />
          across the product lifecycle.
        </p>
      </div>
      <dl className="skill-matrix">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt className="eyebrow">{group.title}</dt>
            <dd>
              <p>{group.primary}</p>
              <span>{group.secondary}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
