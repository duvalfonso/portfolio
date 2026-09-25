import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="container pb-32">
        <div className="mb-16 max-w-3xl">
          <p className="mono text-sm text-violet-400">/ proyectos</p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
            Proyectos
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Una selección de aplicaciones y sistemas que he desarrollado
            utilizando diferentes tecnologías y arquitecturas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
