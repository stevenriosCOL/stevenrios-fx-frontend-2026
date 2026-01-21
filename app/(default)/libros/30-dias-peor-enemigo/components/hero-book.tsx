"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import BookCover from "@/public/images/book-30-dias-cover.png";

export default function HeroBook() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          
          {/* Layout 2 columnas: Portada | Copy */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
            
            {/* Columna Izquierda - Portada */}
            <div 
              className="md:w-5/12 mb-8 md:mb-0"
              data-aos="fade-right"
            >
              <div className="relative">
                {/* Contenedor de la portada */}
                <div className="relative aspect-[47/75] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={BookCover}
                    alt="30 Días para Dejar de Ser tu Peor Enemigo en el Trading"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Badge de precio flotante CON URGENCIA */}
                <div className="absolute -right-4 -top-4 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-75"></div>
                   <div className="relative flex flex-col items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-500 px-6 py-3 shadow-lg text-center">
                      <p className="text-xs font-medium text-blue-100 uppercase tracking-wide">Lanzamiento</p>
                      <p className="text-xl font-bold text-white">$19.99</p>
                    </div>
                  </div>
                </div>

                {/* Urgencia temporal */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">Precio de lanzamiento</span> válido por tiempo limitado
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Copy */}
            <div className="md:w-7/12">
              
              {/* Pre-headline badge */}
              <div 
                className="mb-4"
                data-aos="fade-left"
              >
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
                  Guía Avanzada de Reprogramación Mental
                </div>
              </div>

              {/* Headline principal CON BORDER DECORATIVO */}
              <h1
                className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                data-aos="fade-left"
                data-aos-delay={150}
              >
                Descubre por qué{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                  el 95% de los traders
                </span>{" "}
                pierden dinero...
              </h1>

              {/* Subheadline */}
              <p
                className="mb-4 text-lg text-gray-700"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <strong className="text-gray-900">
                  Y cómo transformar tu psicología de trading
                </strong>{" "}
                en 30 días sistemáticos con un método completamente nuevo.
              </p>

              {/* Bullets de beneficios */}
              <div
                className="mb-8 space-y-3"
                data-aos="fade-left"
                data-aos-delay={350}
              >
                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">42 páginas</strong> de contenido ultra-condensado y ejecutable
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">30 conceptos diarios</strong> + ejercicios prácticos con tracking de progreso
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">8 años de experiencia</strong> + gestión de $25M en fondos institucionales
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">100% enfoque psicológico,</strong> no estrategias técnicas ni indicadores mágicos
                  </p>
                </div>
              </div>

              {/* Precio ancla ELEGANTE CON BACKGROUND DESTACADO */}
              <div 
                className="mb-6"
                data-aos="fade-left"
                data-aos-delay={400}
              >
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
                  <div className="flex items-end gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Precio regular</p>
                      <p className="text-xl text-gray-400 line-through">$29.99</p>
                    </div>
                    <div>
                      <p className="text-base font-bold text-blue-600 mb-1">Precio de lanzamiento</p>
                      <p className="text-6xl font-bold text-gray-900">$19<span className="text-4xl">.99</span></p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">
                    Ahorra <span className="font-bold text-blue-600">$10</span> comprando hoy
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
                data-aos="fade-left"
                data-aos-delay={450}
              >
                {/* CTA Principal */}
                <a
                  className="btn group bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                  href="https://wa.link/rmdrzg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Obtener el Libro Ahora
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>

                {/* CTA Secundario */}
                <button
                  className="btn bg-white text-gray-800 shadow hover:bg-gray-50"
                  onClick={() =>
                    document
                      .getElementById("preview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ver Vista Previa
                </button>
              </div>

              {/* Trust badges */}
              <div
                className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600 md:flex md:flex-wrap md:items-center md:gap-6"
                data-aos="fade-left"
                data-aos-delay={500}
              >
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Entrega inmediata</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pago 100% seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>PDF Digital</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

