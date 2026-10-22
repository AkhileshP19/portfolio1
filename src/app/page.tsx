import Hero from "@/components/sections/Hero";
import ImpactStrip from "@/components/sections/ImpactStrip";
import SelectedWork from "@/components/sections/SelectedWork";
import Experience from "@/components/sections/Experience";
import SkillMatrix from "@/components/sections/SkillMatrix";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main id="main-content" className="container">
      <Hero />
      <ImpactStrip />
      <SelectedWork />
      <Experience />
      <SkillMatrix />
      <About />
      <Contact />
    </main>
  );
}
