import SectionTitle from "./SectionTitle";

const categories = [
  {
    name: "Frontend",
    description: "Interfaces modernas y experiencias responsive.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    description: "APIs, lógica de negocio y servicios web.",
    technologies: ["Python", "Django", "Django REST", "Node.js", "Express"],
  },
  {
    name: "Database",
    description: "Modelado, consultas y persistencia de datos.",
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "Django ORM"],
  },
  {
    name: "Tools",
    description: "Herramientas utilizadas durante el desarrollo.",
    technologies: ["Git", "GitHub", "REST API", "Docker"],
  },
];

export default function TechStack() {
  return (
    <section className="container py-32">
      <SectionTitle
        number="02"
        eyebrow="stack"
        title="Tecnologías con las que trabajo."
        description="Herramientas y tecnologías utilizadas para construir aplicaciones web y sistemas completos."
      />

      <div className="grid border-t border-white/10 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="border-b border-white/10 p-8 md:even:border-l"
          >
            <div className="flex items-start justify-between gap-6">
              <h3 className="text-xl font-semibold">{category.name}</h3>

              <span className="mono text-xs text-zinc-600">
                {String(categories.indexOf(category) + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
              {category.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {category.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/2 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-violet-400/30 hover:text-violet-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
