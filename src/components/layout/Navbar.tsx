"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation, profile, socialLinks } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { TextAlignJustify, X, FileText } from "lucide-react";

export default function Navbar({ hasResume }: { hasResume: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  function close() {
    setOpen(false);
  }
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          close();
          toggle.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (
          event.currentTarget.querySelector(
            '[aria-haspopup="dialog"][aria-expanded="true"]',
          )
        )
          return;
        if (
          event.relatedTarget instanceof Element &&
          event.relatedTarget.closest(
            '[data-slot="dialog-content"], [data-slot="select-content"]',
          )
        )
          return;
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={close}>
          {profile.name}
          <span>{profile.role}</span>
        </Link>
        <Button
          variant="ghost"
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <TextAlignJustify size={23} aria-hidden="true" />
          )}
        </Button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              onClick={close}
              aria-current={
                item.id === "work" && pathname.startsWith("/work/")
                  ? "location"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/projects"
            onClick={close}
            aria-current={pathname === "/projects" ? "page" : undefined}
          >
            Projects
          </Link>
          <div className="nav-social">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
          {hasResume && (
            <a className="text-link" href="/Akhilesh-Patil-Resume.pdf">
              <FileText size={16} aria-hidden="true" />
              Resume
            </a>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
