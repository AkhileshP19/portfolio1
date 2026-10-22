import { Globe, Github, Linkedin, Mail } from "lucide-react";
export default function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const Icon = href.startsWith("mailto:")
    ? Mail
    : href.includes("github.com")
      ? Github
      : href.includes("linkedin.com")
        ? Linkedin
        : Globe;
  return (
    <a
      className={`text-link ${className}`}
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
    >
      <Icon size={16} aria-hidden="true" />
      {children}
      {!href.startsWith("mailto:") && (
        <span className="sr-only"> (opens in a new tab)</span>
      )}
    </a>
  );
}
