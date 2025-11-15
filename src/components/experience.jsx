'use client';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'tCognition',
      period: 'Feb 2025 – Present',
      location: 'Kolhapur',
      description: [
        'Contributed to UI development of XseedAI, an AI-powered ATS platform',
        'Developed Video Resume Module with upload functionality',
        'Built AI Assessment interfaces with video and technical assessment components',
        'Designed Super Admin Module with organizational tree view',
        'Created reusable UI components using shadcn/ui',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-lg p-8 border border-border hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm font-semibold text-accent mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Introduction to Frontend Development (Coursera)',
              'Programming in JavaScript (Coursera)',
              'Version Control (Coursera)',
              'HTML & CSS in Depth (Coursera)',
              'React Basics (Coursera)',
              'Advanced React (Coursera)',
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
