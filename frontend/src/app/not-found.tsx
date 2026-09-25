import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="text-center">
        <p className="mono text-sm text-violet-400">404 / no encontrado</p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
          Página inexistente.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-400">
          La página o proyecto que estás buscando no existe o ya no está
          disponible.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium transition-colors hover:bg-violet-400"
          >
            Volver al inicio
          </Link>

          <Link
            href="/proyectos"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-300 transition-colors hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
          >
            Ver proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
