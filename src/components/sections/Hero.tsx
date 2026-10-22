import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers3, MessageSquare, Mouse } from "lucide-react";
import { profile } from "@/data/portfolio";
import ExperienceDuration from "@/components/ui/ExperienceDuration";
import HomeScene from "@/components/ui/HomeScene";
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <p className="eyebrow">
          <span className="signal-dot" /> Software engineer / India
        </p>
        <span className="eyebrow dossier-label">
          Portfolio — engineering dossier
        </span>
      </div>
      <div className="hero-identity">
        <h1 id="hero-title">
          Akhilesh{" "}
          <span>
            Patil<span className="name-period">.</span>
          </span>
        </h1>
        <HomeScene />
      </div>
      <div className="hero-bottom">
        <div>
          <p className="hero-statement">{profile.statement}</p>
          <div className="hero-actions">
            <Button
              className="button"
              nativeButton={false}
              render={<Link href="#work" />}
            >
              <Layers3 size={18} aria-hidden="true" />
              Explore selected work
            </Button>
            <Link className="text-link" href="#contact">
              <MessageSquare size={17} aria-hidden="true" />
              Get in touch
            </Link>
          </div>
        </div>
        <aside className="currently">
          <p className="eyebrow">Currently</p>
          <p>
            Software Engineer <span>at tCognition</span>
          </p>
          <p>
            Building <Link href="/work/creator-os">CreatorOS</Link>
          </p>
          <div className="current-tenure">
            <ExperienceDuration />
            <span>in professional engineering</span>
          </div>
        </aside>
      </div>
      <div className="hero-footnote mono">
        <span>Frontend systems · Full-stack products · AI workflows</span>
        <span className="scroll-note" aria-hidden="true">
          <Mouse size={15} />
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
