import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectArchitecture from "@/components/ProjectArchitecture";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectBySlug, getProjects } from "@/lib/api";
import type { Project } from "@/types/project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project: Project | null = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Duvan Alfonso",
    };
  }

  return {
    title: `${project.title} | Duvan Alfonso`,
    description: project.short_description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project: Project | null = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projects: Project[] = await getProjects();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="pt-20">
      <section className="container pt-20 pb-10">
        <Link
          href="/proyectos"
          className="mono text-xs text-zinc-500 transition-colors hover:text-violet-400"
        >
          ← volver a proyectos
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="mono text-sm text-violet-400">{project.category}</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.short_description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <ProjectGallery
          images={project.images.map((item) => item.image)}
          title={project.title}
        />
      </section>

      <section className="container grid gap-16 py-20 lg:grid-cols-[1fr_320px]">
        <div className="space-y-16">
          <ProjectSection eyebrow="01 / description" title="Sobre el proyecto">
            <p>{project.description}</p>
          </ProjectSection>

          {project.overview && (
            <ProjectSection eyebrow="02 / overview" title="Resumen">
              <p>{project.overview}</p>
            </ProjectSection>
          )}

          {project.challenge && (
            <ProjectSection eyebrow="03 / challenge" title="Desafío">
              <p>{project.challenge}</p>
            </ProjectSection>
          )}

          {project.solution && (
            <ProjectSection eyebrow="04 / solution" title="Solución">
              <p>{project.solution}</p>
            </ProjectSection>
          )}

          {project.features.length > 0 && (
            <ProjectSection eyebrow="05 / features" title="Características">
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <span className="text-violet-400">+</span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {project.architecture.length > 0 && (
            <ProjectSection eyebrow="06 / architecture" title="Arquitectura">
              <ProjectArchitecture items={project.architecture} />
            </ProjectSection>
          )}

          {project.learnings.length > 0 && (
            <ProjectSection eyebrow="07 / learnings" title="Aprendizajes">
              <ul className="space-y-3">
                {project.learnings.map((learning) => (
                  <li
                    key={learning}
                    className="flex gap-3 text-sm leading-7 text-zinc-400"
                  >
                    <span className="text-violet-400">+</span>

                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </ProjectSection>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-white/10 bg-[#111113] p-6">
            <p className="mono text-xs text-violet-400">STACK</p>

            <div className="mt-5 space-y-3">
              {project.technologies.map((technology) => (
                <div
                  key={technology}
                  className="border-b border-white/5 pb-3 text-sm text-zinc-400 last:border-0"
                >
                  {technology}
                </div>
              ))}
            </div>

            {(project.github || project.demo) && (
              <div className="mt-8 space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-white/10 px-4 py-3 text-center text-sm transition-colors hover:border-violet-400/40 hover:bg-violet-400/10"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-violet-500 px-4 py-3 text-center text-sm font-medium transition-colors hover:bg-violet-400"
                  >
                    Ver demo
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="container border-t border-white/10 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {previousProject ? (
            <Link
              href={`/proyectos/${previousProject.slug}`}
              className="group rounded-2xl border border-white/10 p-6 transition-colors hover:border-violet-400/30"
            >
              <p className="mono text-xs text-zinc-500">proyecto anterior</p>

              <p className="mt-3 text-lg font-medium transition-colors group-hover:text-violet-300">
                ← {previousProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/proyectos/${nextProject.slug}`}
              className="group rounded-2xl border border-white/10 p-6 text-left sm:text-right transition-colors hover:border-violet-400/30"
            >
              <p className="mono text-xs text-zinc-500">siguiente proyecto</p>

              <p className="mt-3 text-lg font-medium transition-colors group-hover:text-violet-300">
                {nextProject.title} →
              </p>
            </Link>
          ) : null}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/proyectos"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    </main>
  );
}

type ProjectSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function ProjectSection({ eyebrow, title, children }: ProjectSectionProps) {
  return (
    <section>
      <p className="mono text-xs text-violet-400">{eyebrow}</p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h2>

      <div className="mt-5 text-sm leading-8 text-zinc-400">{children}</div>
    </section>
  );
}
