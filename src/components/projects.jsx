'use client';

import { ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Doctor Appointment System',
      description: 'Full-stack appointment system with real-time video consultation, authentication, and modern responsive UI',
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Clerk', 'Prisma', 'Neon', 'Vonage'],
      link: 'https://docy-talks.vercel.app/',
      github: 'https://github.com/akhileshp19/next-doc-appointment',
    },
    {
      title: 'Satej Sports Club App',
      description: 'Dynamic sports app displaying live matches, points tables, and championship history with mobile-first design',
      tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Dynamic Routing'],
      link: 'https://satej-sports-club.vercel.app/',
      github: 'https://github.com/akhileshp19/sports-management-frontend',
    },
    {
      title: 'Quizzy Quest',
      description: 'Interactive quiz platform with category selection, difficulty levels, timer, and real-time scoring',
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'API Integration'],
      link: 'https://quizyquest.netlify.app/',
      github: 'https://github.com/akhileshp19/quizzy-quest',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
            >
              {/* LIVE PREVIEW SECTION (Desktop Simulation) */}
              <div className="relative h-60 w-full bg-muted overflow-hidden border-b border-border/50">
                <iframe
                  src={project.link}
                  title={project.title}
                  className="absolute top-0 left-0 w-[400%] h-[400%] transform scale-[0.25] origin-top-left border-0 pointer-events-none select-none"
                  loading="lazy"
                  scrolling="no"
                  tabIndex="-1"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Skills Section - Showing ALL tags now */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-[10px] font-medium uppercase tracking-wider rounded text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Action Area */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-border/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg text-sm font-semibold transition-colors duration-300"
                  >
                    <Github size={16} /> Code
                  </a>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-semibold transition-colors duration-300"
                  >
                    <ExternalLink size={16} /> Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}