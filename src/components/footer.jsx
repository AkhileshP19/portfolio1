'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
              Akhilesh Patil
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer crafting modern web experiences with Next.js and React.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/AkhileshP19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/akhileshp19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:akhileshpatil69@gmail.com"
                className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Akhilesh Patil. All rights reserved.
            </p>
            {/* <p className="text-xs text-muted-foreground">
              Crafted with ✨ using Next.js, React & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
