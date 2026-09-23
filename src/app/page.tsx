import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="proyectos" className="container py-32">
          <div className="mb-12">
            <p className="mono text-sm text-violet-400">01 / proyectos</p>

            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Proyectos seleccionados
                </h2>

                <p className="mt-4 max-w-xl text-zinc-400">
                  Aplicaciones y sistemas desarrollados durante mi proceso de
                  aprendizaje y práctica.
                </p>
              </div>

              <a
                href="/proyectos"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Ver todos →
              </a>
            </div>
          </div>

          <ProjectGrid />
        </section>

        <section id="sobre-mi" className="container min-h-[50vh] py-32">
          <p className="mono text-sm text-violet-400">02 / sobre mí</p>
          <h2 className="mt-4 text-4xl font-bold">
            Desarrollo pensando en el sistema completo.
          </h2>
        </section>

        <section id="contacto" className="container min-h-[50vh] py-32">
          <p className="mono text-sm text-violet-400">03 / contacto</p>
          <h2 className="mt-4 text-4xl font-bold">Hablemos.</h2>
        </section>
      </main>
    </>
  );
}
