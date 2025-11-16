'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a highly motivated Software Developer with hands-on experience in building modern, scalable, and user-centric web applications. Currently working as an Intern at 
              <span className="text-foreground font-semibold"> tCognition</span>, contributing to XseedAI, an AI-powered Applicant Tracking System.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in front-end architecture and feature modules, focusing on reusable, responsive, and accessible components. My passion lies where clean code meets beautiful UI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy traveling, reading tech blogs, and exploring new GenAI tools.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-border">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Location</h3>
                <p className="text-lg font-medium">Kolhapur, India</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Education</h3>
                <p className="text-lg font-medium">B.Tech in CS & IT</p>
                <p className="text-sm text-muted-foreground">Rajarambapu Institute of Technology</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.20</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Experience</h3>
                <p className="text-lg font-medium">Current Role</p>
                <p className="text-sm text-muted-foreground">Software Developer Intern at tCognition</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
