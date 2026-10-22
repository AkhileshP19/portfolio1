import { profile, socialLinks } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";
import ExternalLink from "@/components/ui/ExternalLink";
import CopyEmail from "@/components/ui/CopyEmail";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionLabel number="05">Contact</SectionLabel>
      <div className="contact-heading">
        <h2>
          Let’s build something
          <br />
          worth shipping.
        </h2>
      </div>
      <a className="email-link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-bottom">
        <CopyEmail />
        <div className="footer-links">
          {socialLinks.slice(0, 2).map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
