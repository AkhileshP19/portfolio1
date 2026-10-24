import { principles, profile } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
export default function About() {
  return (
    <section id="about" className="section">
      <SectionLabel number="04">Profile & principles</SectionLabel>
      <div className="profile-grid">
        <h2>
          Engineering products,
          <br />
          not just interfaces.
        </h2>
        <p className="lead">{profile.about}</p>
      </div>
      <div className="principles">
        {principles.map((principle, index) => (
          <article key={principle.label}>
            <p className="eyebrow">
              0{index + 1} / {principle.label}
            </p>
            <h3>{principle.title}</h3>
            <p>{principle.proof}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
