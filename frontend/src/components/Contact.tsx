import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contacto" className="border-t border-white/5 bg-[#0d0d0f]">
      <div className="container py-32">
        <SectionTitle
          number="05"
          eyebrow="contacto"
          title="¿Tienes una idea o proyecto?"
          description="Si quieres hablar sobre una aplicación, proyecto o colaboración, puedes escribirme."
        />

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mono text-xs text-zinc-600">CONTACT</p>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:mail@example.com"
                className="block text-zinc-400 transition-colors hover:text-white"
              >
                mail@example.com
              </a>

              <a
                href="#"
                className="block text-zinc-400 transition-colors hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                className="block text-zinc-400 transition-colors hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-zinc-400"
              >
                Nombre
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-zinc-400"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-zinc-400"
              >
                Mensaje
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/2 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-violet-500 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400"
            >
              Enviar mensaje →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
