import type { Project } from "@/types/project";
import { getProjects } from "@/lib/api";

export default async function PruebaApiPage() {
  const projects: Project[] = await getProjects();

  return (
    <main className="container py-32">
      <p className="mono text-sm text-violet-400">/ prueba-api</p>

      <h1 className="mt-4 text-4xl font-bold">Proyectos desde Django</h1>

      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-white/10 bg-[#111113] p-6"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>

            <p className="mt-2 text-zinc-400">{project.short_description}</p>

            <p className="mt-4 text-sm text-zinc-500">Slug: {project.slug}</p>

            <p className="mt-2 text-sm text-zinc-500">
              Categoría: {project.category}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
