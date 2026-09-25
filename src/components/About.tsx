import SectionTitle from "./SectionTitle";

const principles = [
  "Código claro y mantenible",
  "Separación de responsabilidades",
  "Validación y manejo de errores",
  "Diseño orientado a la experiencia del usuario",
];

export default function About() {
  return (
    <section id="sobre-mi" className="container py-32">
      <SectionTitle
        number="04"
        eyebrow="sobre mí"
        title="Desarrollo pensando en el sistema completo."
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl">
          <p className="text-xl leading-9 text-zinc-300">
            Mi enfoque está orientado al desarrollo fullstack, trabajando tanto
            en la interfaz que utiliza el usuario como en la lógica, las APIs y
            los datos que hacen funcionar una aplicación.
          </p>

          <p className="mt-6 leading-8 text-zinc-500">
            Durante mi proceso de aprendizaje he trabajado con diferentes
            tecnologías y arquitecturas, desarrollando proyectos que abarcan
            desde aplicaciones CRUD hasta sistemas con autenticación, permisos,
            bases de datos y APIs.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111113] p-7">
          <p className="mono text-xs text-zinc-500">PRINCIPIOS</p>

          <div className="mt-6 space-y-4">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex gap-4 border-b border-white/5 pb-4 last:border-0"
              >
                <span className="mono text-xs text-violet-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-zinc-300">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
