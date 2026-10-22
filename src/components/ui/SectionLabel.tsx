export default function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow section-label">
      <span>{number}</span> / {children}
    </p>
  );
}
