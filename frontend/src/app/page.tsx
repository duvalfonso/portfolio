import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProjectGrid from "@/components/ProjectGrid";
import SectionTitle from "@/components/SectionTitle";
import TechStack from "@/components/TechStack";
import { getProjects } from "@/lib/api";
import type { Project } from "@/types/project";

export default async function Home() {
  const projects: Project[] = await getProjects();
  return (
    <>
      <main>
        <Hero />

        <section id="proyectos" className="container py-32">
          <SectionTitle
            number="01"
            eyebrow="proyectos"
            title="Proyectos seleccionados."
            description="Aplicaciones y sistemas desarrollados durante mi proceso de aprendizaje y práctica."
          />

          <ProjectGrid projects={projects} />

          <div className="mt-10 text-center">
            <a
              href="/proyectos"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Ver todos los proyectos →
            </a>
          </div>
        </section>

        <TechStack />

        <Process />

        <About />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
