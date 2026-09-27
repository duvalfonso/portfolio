import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="container grid items-center gap-16 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 text-xs font-medium text-violet-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
            </span>
            <span className="mono">&gt; Hola, soy Duvan Alfonso</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Desarrollador <span className="text-zinc-500">Fullstack.</span>
            <span className="mt-2 block bg-linear-to-r from-white via-zinc-200 to-violet-400 bg-clip-text text-transparent">
              Construyo aplicaciones web.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Diseño y desarrollo soluciones de software completas, desde
            interfaces de usuario accesibles e intuitivas hasta APIs robustas y
            bases de datos escalables.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#proyectos"
              className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
            >
              Ver proyectos
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:border-violet-400/30 hover:bg-white/10 hover:text-white active:scale-95"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-2xl border border-white/10 bg-[#111113]/80 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="mono ml-2 text-xs text-zinc-500">
                duvan.config.ts
              </span>
            </div>

            <pre className="mono mt-4 overflow-x-auto text-xs leading-relaxed text-zinc-300">
              <code>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-white">developer</span> = &#123;{"\n"}
                {"  "}name:{" "}
                <span className="text-emerald-400">
                  &quot;Duvan Alfonso&quot;
                </span>
                ,{"\n"}
                {"  "}role:{" "}
                <span className="text-emerald-400">
                  &quot;Fullstack Developer&quot;
                </span>
                ,{"\n"}
                {"  "}skills: [
                <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                <span className="text-emerald-400">&quot;TypeScript&quot;</span>
                ,{" "}
                <span className="text-emerald-400">
                  &quot;TailwindCSS&quot;
                </span>
                ],{"\n"}
                {"  "}status:{" "}
                <span className="text-violet-400">
                  &quot;Disponible para proyectos&quot;
                </span>
                {"\n"}
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
