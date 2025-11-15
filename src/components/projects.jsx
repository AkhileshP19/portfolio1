'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Doctor Appointment System',
      description: 'Full-stack appointment system with real-time video consultation, authentication, and modern responsive UI',
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Clerk', 'Prisma', 'Neon', 'Vonage'],
      link: 'https://docy-talks.vercel.app/',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Satej Sports Club App',
      description: 'Dynamic sports app displaying live matches, points tables, and championship history with mobile-first design',
      tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Dynamic Routing'],
      link: 'https://satej-sports-club.vercel.app/',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Quizzy Quest',
      description: 'Interactive quiz platform with category selection, difficulty levels, timer, and real-time scoring',
      tech: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'API Integration'],
      link: 'https://quizyquest.netlify.app/',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-xs font-medium rounded text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 w-full justify-center"
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
