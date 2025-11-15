'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frontend',
      skills: ['Next.js', 'React.js', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Prisma ORM'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
    {
      title: 'Other',
      skills: ['JWT Auth', 'Responsive Design', 'Custom Hooks', 'Recoil'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-secondary/50 rounded-lg p-6 border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background rounded-full text-sm font-medium text-accent-foreground border border-border hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
