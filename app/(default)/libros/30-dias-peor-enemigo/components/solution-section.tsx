"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "@/components/particles";
import Highlighter, { HighlighterItem } from "@/components/highlighter";
import Illustration from "@/public/images/glow-top.svg";

// Iconos
import CarouselImg01 from "@/public/images/carousel-icon-01.svg";
import CarouselImg02 from "@/public/images/carousel-icon-02.svg";
import CarouselImg03 from "@/public/images/carousel-icon-03.svg";
import CarouselImg04 from "@/public/images/carousel-icon-04.svg";

// Swiper
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SolutionSection() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper(".solution-carousel", {
      modules: [Navigation],
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next-solution",
        prevEl: ".carousel-prev-solution",
      },
    });

    setSwiperInitialized(true);

    return () => {
      carousel?.destroy?.(true, true);
    };
  }, []);

  return (
    <section
      id="solution"
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Background illustration */}
        <div
          className="absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem] pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
            <Image
              src={Illustration}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Background"
              priority={false}
            />
          </div>
        </div>

        <div className="pb-12 pt-12 md:pb-20 md:pt-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div>
              <div className="inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text pb-3 font-medium text-transparent">
                La solución que funciona
              </div>
            </div>

            <h2 className="mb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Pero cuando logras reprogramar tu respuesta emocional, todo cambia
            </h2>

            <p className="text-lg text-slate-400">
              Un sistema de 30 días diseñado para instalar automatismos de ejecución
              que reemplazan las reacciones emocionales por procesos sistemáticos.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="solution-carousel swiper-container group">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                
                {/* Card 1 - Semana 1 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative z-20 h-full min-h-[320px] overflow-hidden rounded-[inherit] bg-slate-900">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-1/3 -translate-x-1/2 translate-y-1/2 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-blue-500" />
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                        <span className="text-2xl font-bold text-blue-400">1</span>
                      </div>
                      <div className="grow">
                        <div className="mb-2 text-lg font-bold text-slate-100">
                          Semana 1 — Identificación
                        </div>
                        <div className="mb-3 text-slate-400">
                          Identificas el patrón exacto (gatillo → reacción → daño) 
                          para hacerlo visible antes de que se active.
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-800">
                        <p className="text-xs text-slate-500">
                          Días 1-7: Mapeo de patrones
                        </p>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Card 2 - Semana 2 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative z-20 h-full min-h-[320px] overflow-hidden rounded-[inherit] bg-slate-900">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-1/3 -translate-x-1/2 translate-y-1/2 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-blue-500" />
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                        <span className="text-2xl font-bold text-blue-400">2</span>
                      </div>
                      <div className="grow">
                        <div className="mb-2 text-lg font-bold text-slate-100">
                          Semana 2 — Reglas anti-impulso
                        </div>
                        <div className="mb-3 text-slate-400">
                          Instalas reglas de "no trade" que cortan el impulso 
                          antes de que se convierta en pérdida.
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-800">
                        <p className="text-xs text-slate-500">
                          Días 8-14: Construcción de barreras
                        </p>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Card 3 - Semana 3 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative z-20 h-full min-h-[320px] overflow-hidden rounded-[inherit] bg-slate-900">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-1/3 -translate-x-1/2 translate-y-1/2 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-blue-500" />
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                        <span className="text-2xl font-bold text-blue-400">3</span>
                      </div>
                      <div className="grow">
                        <div className="mb-2 text-lg font-bold text-slate-100">
                          Semana 3 — Tolerancia emocional
                        </div>
                        <div className="mb-3 text-slate-400">
                          Construyes tolerancia emocional para sostener trades 
                          ganadores sin cerrar por alivio.
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-800">
                        <p className="text-xs text-slate-500">
                          Días 15-21: Expansión de zona de confort
                        </p>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Card 4 - Semana 4 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative z-20 h-full min-h-[320px] overflow-hidden rounded-[inherit] bg-slate-900">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    <div
                      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 w-1/3 -translate-x-1/2 translate-y-1/2 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-blue-500" />
                    </div>

                    <div className="flex h-full flex-col p-6">
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                        <span className="text-2xl font-bold text-blue-400">4</span>
                      </div>
                      <div className="grow">
                        <div className="mb-2 text-lg font-bold text-slate-100">
                          Semana 4 — Identidad de ejecución
                        </div>
                        <div className="mb-3 text-slate-400">
                          Consolidación completa — ejecutas sin negociar contigo, 
                          incluso cuando sientes presión.
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-800">
                        <p className="text-xs text-slate-500">
                          Días 22-30: Automatización total
                        </p>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="mt-8 flex justify-end gap-2">
            <button
              type="button"
              className="carousel-prev-solution relative z-20 flex h-12 w-12 items-center justify-center group"
            >
              <span className="sr-only">Anterior</span>
              <svg
                className="h-4 w-4 fill-slate-500 transition duration-150 ease-in-out group-hover:fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>

            <button
              type="button"
              className="carousel-next-solution relative z-20 flex h-12 w-12 items-center justify-center group"
            >
              <span className="sr-only">Siguiente</span>
              <svg
                className="h-4 w-4 fill-slate-500 transition duration-150 ease-in-out group-hover:fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

          {/* Bottom text + CTA */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg text-slate-400 mb-6">
              Tu ejecución deja de depender del{" "}
              <strong className="text-slate-200">"ánimo del día"</strong>.
              <br className="hidden sm:block" />
              Y cuando te das cuenta, ya estás operando{" "}
              <strong className="text-slate-200">sin negociar contigo</strong>.
            </p>

            <a
              href="#preview"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
            >
              Ver cómo funciona por dentro <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


