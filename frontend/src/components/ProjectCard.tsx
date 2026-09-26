import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111113] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30">
        <div className="relative aspect-16/10 overflow-hidden bg-zinc-900">
          {project.images.length > 0 && (
            <Image
              src={project.images[0].image}
              alt={`Vista previa de ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          <span className="absolute left-5 top-5 mono text-xs text-violet-300">
            0{index + 1}
          </span>

          <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-violet-300">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {project.short_description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 text-sm text-zinc-400 transition-colors group-hover:text-white">
            Ver proyecto →
          </div>
        </div>
      </article>
    </Link>
  );
}
