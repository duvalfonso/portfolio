export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold">
            DA<span className="text-violet-400">.</span>
          </span>

          <p className="mt-1 text-xs text-zinc-600">Fullstack Developer</p>
        </div>

        <div className="flex gap-6 text-xs text-zinc-500">
          <a href="#" className="transition-colors hover:text-white">
            GitHub
          </a>

          <a href="#" className="transition-colors hover:text-white">
            LinkedIn
          </a>

          <a
            href="mailto:tu-email@example.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>

        <p className="mono text-xs text-zinc-700">© 2026</p>
      </div>
    </footer>
  );
}
