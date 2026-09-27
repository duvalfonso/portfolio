"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        const firstError = Object.values(data)[0];

        if (Array.isArray(firstError)) {
          setErrorMessage(String(firstError[0]));
        } else {
          setErrorMessage("No se pudo enviar el mensaje.");
        }

        setStatus("error");
        return;
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage(
        "No se pudo conectar con el servidor. Inténtalo nuevamente.",
      );
    }
  }

  return (
    <section id="contacto" className="container py-32">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mono text-xs text-violet-400">04 / contacto</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Hablemos.
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">
            Si tienes una idea, proyecto o propuesta, puedes escribirme mediante
            el siguiente formulario.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
              Nombre
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-[#111113] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-[#111113] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-zinc-300"
            >
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full resize-none rounded-xl border border-white/10 bg-[#111113] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400/50"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          {status === "error" && (
            <p role="alert" className="text-sm text-red-400">
              {errorMessage}
            </p>
          )}

          {status === "success" && (
            <p role="status" className="text-sm text-emerald-400">
              Mensaje enviado correctamente. Gracias por contactarme.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium transition-colors hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje →"}
          </button>
        </form>
      </div>
    </section>
  );
}
