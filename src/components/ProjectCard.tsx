import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111113] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30">
      <Link href={`/proyectos/${project.slug}`}>
        <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-zinc-900 via-zinc-900 to-violet-950/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="mono text-xs text-violet-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-3 text-2xl font-semibold tracking-tight text-white/90">
                {project.title}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-violet-500/0 transition-colors duration-300 group-hover:bg-violet-500/5" />

          <div className="absolute bottom-4 right-4 translate-y-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Ver proyecto →
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="mono text-xs text-violet-400">
            {project.category}
          </span>

          <span className="mono text-xs text-zinc-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <Link href={`/proyectos/${project.slug}`}>
          <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-violet-300">
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
