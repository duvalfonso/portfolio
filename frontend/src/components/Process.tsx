import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "01",
    title: "Analizar",
    description:
      "Comprender los requisitos, reglas del sistema y necesidades antes de comenzar a desarrollar.",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Definir la arquitectura, los modelos de datos, los flujos y la estructura general de la aplicación.",
  },
  {
    number: "03",
    title: "Desarrollar",
    description:
      "Construir frontend, backend y base de datos utilizando tecnologías adecuadas para cada problema.",
  },
  {
    number: "04",
    title: "Validar",
    description:
      "Probar funcionalidades, validar datos, manejar errores y controlar permisos.",
  },
  {
    number: "05",
    title: "Desplegar",
    description:
      "Preparar la aplicación para producción y dejarla disponible para usuarios reales.",
  },
];

export default function Process() {
  return (
    <section className="border-y border-white/5 bg-[#0d0d0f]">
      <div className="container py-32">
        <SectionTitle
          number="03"
          eyebrow="proceso"
          title="De la idea a una aplicación funcional."
          description="Un proceso estructurado permite convertir requisitos en soluciones mantenibles."
        />

        <div className="grid border-t border-white/10 md:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-white/10 p-6 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <span className="mono text-xs text-violet-400">
                {step.number}
              </span>

              <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
