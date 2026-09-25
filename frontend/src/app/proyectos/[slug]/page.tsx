import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectArchitecture from "@/components/ProjectArchitecture";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Duvan Alfonso",
    };
  }

  return {
    title: `${project.title} | Duvan Alfonso`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((project) => project.slug === slug);

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="container py-20">
        <Link
          href="/proyectos"
          className="mono text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Volver a proyectos
        </Link>

        <div className="mt-12 max-w-4xl">
          <p className="mono text-sm text-violet-400">/ {project.category}</p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/2 px-4 py-2 text-sm text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen principal */}
      <section className="container">
        <ProjectGallery
          images={project.gallery ?? [project.image]}
          title={project.title}
        />
      </section>

      {/* Contenido */}
      <section className="container py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
          <div className="space-y-16">
            {project.overview && (
              <ProjectSection eyebrow="01" title="Descripción">
                <p>{project.overview}</p>
              </ProjectSection>
            )}

            {project.challenge && (
              <ProjectSection eyebrow="02" title="El desafío">
                <p>{project.challenge}</p>
              </ProjectSection>
            )}

            {project.solution && (
              <ProjectSection eyebrow="03" title="La solución">
                <p>{project.solution}</p>
              </ProjectSection>
            )}

            {project.features && (
              <ProjectSection eyebrow="04" title="Funcionalidades">
                <ul className="space-y-4">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-zinc-400">
                      <span className="mt-1 text-violet-400">✓</span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            )}

            {project.architecture && (
              <ProjectSection eyebrow="05" title="Arquitectura">
                <ProjectArchitecture items={project.architecture} />
              </ProjectSection>
            )}

            {project.learnings && (
              <ProjectSection eyebrow="06" title="Aprendizajes">
                <ul className="space-y-4">
                  {project.learnings.map((learning) => (
                    <li key={learning} className="flex gap-3 text-zinc-400">
                      <span className="text-violet-400">→</span>

                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            )}
          </div>

          {/* Sidebar */}
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
        </div>
      </section>

      {/* Navegación */}
      <section className="border-t border-white/5">
        <div className="container py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {previousProject ? (
              <Link
                href={`/proyectos/${previousProject.slug}`}
                className="group rounded-2xl border border-white/10 bg-[#111113] p-6 transition-colors hover:border-violet-400/30"
              >
                <p className="mono text-xs text-zinc-500">
                  ← Proyecto anterior
                </p>

                <p className="mt-3 text-lg font-medium transition-colors group-hover:text-violet-300">
                  {previousProject.title}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {previousProject.category}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/proyectos/${nextProject.slug}`}
                className="group rounded-2xl border border-white/10 bg-[#111113] p-6 text-left transition-colors hover:border-violet-400/30 sm:text-right"
              >
                <p className="mono text-xs text-zinc-500">
                  Siguiente proyecto →
                </p>

                <p className="mt-3 text-lg font-medium transition-colors group-hover:text-violet-300">
                  {nextProject.title}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {nextProject.category}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/proyectos"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="mono text-sm text-violet-400">
        {eyebrow} / {title.toLowerCase()}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>

      <div className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
        {children}
      </div>
    </section>
  );
}
