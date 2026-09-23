export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container grid items-center gap-16 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mono mb-6 text-sm text-violet-400">
            &gt; fullstack_developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
            Construyo
            <span className="block text-zinc-500">aplicaciones</span>
            <span className="block">web.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Desarrollo aplicaciones web completas, desde la interfaz hasta la
            API y la base de datos, buscando siempre soluciones claras,
            funcionales y mantenibles.
          </p>

          <div className=""></div>
        </div>
      </div>
    </section>
  );
}
