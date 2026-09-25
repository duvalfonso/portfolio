"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
      <nav className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          DA<span className="text-violet-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contacto"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm transition-colors hover:border-violet-400/50 hover:bg-violet-400/10"
          >
            Contacto
          </Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
        >
          <span className="text-lg">{menuOpen ? "x" : "☰"}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#09090b] md:hidden">
          <div className="container flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full border border-white/10 px-5 py-3 text-center text-sm transition-colors hover:border-violet-400/50 hover:bg-violet-400/10"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
