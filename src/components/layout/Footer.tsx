import { profile, socialLinks } from "@/data/portfolio";
import ExternalLink from "@/components/ui/ExternalLink";
export default function Footer() {
  return (
    <footer className="container footer">
      <div>
        <strong>{profile.name}</strong>
        <span>© {new Date().getFullYear()} · Software Engineer</span>
      </div>
      <p className="mono">Built with Next.js + TypeScript</p>
      <div className="footer-links">
        {socialLinks.map((link) => (
          <ExternalLink key={link.label} href={link.href}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </footer>
  );
}
