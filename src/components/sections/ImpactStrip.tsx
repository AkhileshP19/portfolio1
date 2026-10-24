import { metrics } from "@/data/portfolio";
export default function ImpactStrip() {
  return (
    <aside
      className="impact-strip"
      aria-label="Selected engineering outcomes at Xseed.AI"
    >
      <p className="eyebrow impact-caption">
        In production
        <br />
        <span>Xseed.AI / tCognition</span>
      </p>
      <dl>
        {metrics.map((metric) => (
          <div key={metric.value}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
