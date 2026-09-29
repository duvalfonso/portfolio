"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  // Manejo de eventos de teclado (Navegación y escape)
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    // Bloquea el scroll del fondo mientras el modal está activo
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, prevSlide, nextSlide]);

  return (
    <>
      <div className="space-y-4">
        {/* Visualizador Principal (Abre el modal al hacer clic) */}
        <div
          onClick={openModal}
          className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - captura ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 50vw"
            priority
            className="object-cover transition-all duration-300 group-hover:scale-[1.01]"
          />

          {/* Indicador para ampliar */}
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>

          {/* Botones de navegación principal */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>

              <button
                onClick={nextSlide}
                aria-label="Siguiente imagen"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>

              <div className="mono absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Miniaturas en la vista general */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
            {images.map((image, index) => (
              <button
                key={image + index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-16/10 h-16 shrink-0 overflow-hidden rounded-xl border transition-all ${
                  currentIndex === index
                    ? "border-violet-400 opacity-100 ring-2 ring-violet-400/20"
                    : "border-white/10 opacity-40 hover:opacity-80"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} - miniatura ${index + 1}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* MODAL FULLSCREEN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          {/* Overlay que cierra al hacer clic fuera */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />

          {/* Botón Cerrar */}
          <button
            onClick={closeModal}
            aria-label="Cerrar modal"
            className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-lg text-white transition-all hover:bg-black/90 hover:scale-105"
          >
            ✕
          </button>

          {/* Contenido del Modal */}
          <div className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col items-center justify-center gap-4">
            {/* Imagen Ampliada */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
              <Image
                src={images[currentIndex]}
                alt={`${title} - vista ampliada ${currentIndex + 1}`}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />

              {/* Botones de navegación en Modal */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Imagen anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105 active:scale-95"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://w3.org"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      ></path>
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Siguiente imagen"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105 active:scale-95"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://w3.org"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Pie del modal: Miniaturas y contador */}
            <div className="flex w-full items-center justify-between gap-4 px-2">
              <div className="mono text-xs text-zinc-400">
                {currentIndex + 1} de {images.length}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
                  {images.map((image, index) => (
                    <button
                      key={"modal-" + image + index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border transition-all ${
                        currentIndex === index
                          ? "border-violet-400 opacity-100 ring-2 ring-violet-400/20"
                          : "border-white/10 opacity-40 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${title} - miniatura modal ${index + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
