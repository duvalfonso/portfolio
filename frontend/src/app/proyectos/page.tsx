import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { getProjects } from "@/lib/api";
import type { Project } from "@/types/project";

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <main className="container py-32">
      <SectionTitle
        number="01"
        eyebrow="proyectos"
        title="Todos los proyectos."
        description="Aplicaciones y sistemas desarrollados durante mi proceso de aprendizaje y práctica."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
