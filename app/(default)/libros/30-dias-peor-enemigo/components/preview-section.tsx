"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";

// ✅ CORREGIR: Usar 3 imágenes diferentes
import Preview01 from "@/public/images/preview-01.png";
import Preview02 from "@/public/images/preview-01.png";
import Preview03 from "@/public/images/preview-01.png";

import Illustration from "@/public/images/glow-top.svg";

export default function PreviewSection() {
  const [tab, setTab] = useState<number>(1);

  return (
    <section
      id="preview"
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Background illustration */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem]"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
            <Image
              src={Illustration}
              className="max-w-none opacity-80"
              width={1404}
              height={658}
              alt="Background"
              priority={false}
            />
          </div>
        </div>

        <div className="pb-12 pt-12 md:pb-20 md:pt-20">
          
          {/* Header CON BADGE ARRIBA */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-16">
            {/* Badge pre-headline */}
            <div className="mb-4">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
                La solución que funciona
              </div>
            </div>

            <h2 className="mb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Esto no es "motivación".
              <br className="hidden sm:block" />
              Es entrenamiento para ejecutar bajo presión.
            </h2>

            <p className="text-lg text-slate-400">
              Cada día tiene un foco específico: pensamiento, regla, acción y cierre.
              Menos teoría. Más control.
            </p>
          </div>

          {/* Layout: 2 columnas */}
          <div className="mx-auto max-w-xl lg:max-w-6xl">
            <div className="lg:flex lg:items-start lg:gap-12 xl:gap-24">
              
              {/* LEFT: Tabs + Copy */}
              <div className="lg:w-[480px] xl:w-[600px]">
                <div className="mb-6">
                  <div className="inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text pb-2 font-medium text-transparent">
                    Lo que verás por dentro
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200 md:text-3xl">
                    Una estructura diaria que te obliga a ser consistente
                  </h3>
                  <p className="mt-3 text-slate-400">
                    En vez de "leer por leer", vas a trabajar un patrón mental por día.
                    El objetivo es que la ejecución deje de depender del ánimo.
                  </p>
                </div>

                {/* Tabs buttons MEJORADOS */}
                <div className="space-y-2">
                  <button
                    className={`w-full text-left flex items-start gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                      tab === 1
                        ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10"
                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(1);
                    }}
                    type="button"
                  >
                    <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      tab === 1 ? "bg-blue-500/20" : "bg-slate-800/70"
                    }`}>
                      <svg
                        className={`transition-colors ${tab === 1 ? "fill-blue-400" : "fill-slate-500"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 11H7V11h6V5h2v8Z" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-lg font-semibold text-slate-200 mb-1">
                        Semana 1 — Identificas el patrón
                      </div>
                      <div className="text-slate-400">
                        Dejas de "adivinar" por qué fallas y lo haces visible: gatillo → reacción → daño.
                      </div>
                    </div>
                  </button>

                  <button
                    className={`w-full text-left flex items-start gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                      tab === 2
                        ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10"
                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(2);
                    }}
                    type="button"
                  >
                    <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      tab === 2 ? "bg-blue-500/20" : "bg-slate-800/70"
                    }`}>
                      <svg
                        className={`transition-colors ${tab === 2 ? "fill-blue-400" : "fill-slate-500"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v2H4V4Zm0 6h16v2H4v-2Zm0 6h10v2H4v-2Z" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-lg font-semibold text-slate-200 mb-1">
                        Semana 2 — Reglas anti-impulso
                      </div>
                      <div className="text-slate-400">
                        Reglas de "no trade" para cortar el error antes de que se convierta en pérdida.
                      </div>
                    </div>
                  </button>

                  <button
                    className={`w-full text-left flex items-start gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                      tab === 3
                        ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10"
                        : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(3);
                    }}
                    type="button"
                  >
                    <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      tab === 3 ? "bg-blue-500/20" : "bg-slate-800/70"
                    }`}>
                      <svg
                        className={`transition-colors ${tab === 3 ? "fill-blue-400" : "fill-slate-500"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2 1 7l11 5 9-4.09V17h2V7L12 2Zm0 11L3.5 9.09 12 5l8.5 4.09L12 13Z" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-lg font-semibold text-slate-200 mb-1">
                        Semana 4 — Identidad de ejecución
                      </div>
                      <div className="text-slate-400">
                        Consolidación: pasas de reaccionar a ejecutar. Sin negociar contigo en vivo.
                      </div>
                    </div>
                  </button>
                </div>

                {/* Mini CTA */}
                <div className="mt-8">
                  <a
                    href="#solution"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
                  >
                    Ok… ¿cómo se ve la solución completa? <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              {/* RIGHT: Images */}
              <div className="relative mt-10 lg:mt-0 lg:flex-1">
                <div className="relative flex flex-col">
                  <Transition show={tab === 1}>
                    <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                      <Image
                        className="mx-auto rounded-2xl shadow-2xl ring-1 ring-slate-700/50"
                        src={Preview01}
                        width={800}
                        height={620}
                        alt="Vista previa semana 1"
                        priority={false}
                      />
                    </div>
                  </Transition>

                  <Transition show={tab === 2}>
                    <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                      <Image
                        className="mx-auto rounded-2xl shadow-2xl ring-1 ring-slate-700/50"
                        src={Preview02}
                        width={800}
                        height={620}
                        alt="Vista previa semana 2"
                      />
                    </div>
                  </Transition>

                  <Transition show={tab === 3}>
                    <div className="transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:translate-x-8 data-closed:absolute data-leave:duration-300 data-leave:data-closed:-translate-x-8">
                      <Image
                        className="mx-auto rounded-2xl shadow-2xl ring-1 ring-slate-700/50"
                        src={Preview03}
                        width={800}
                        height={620}
                        alt="Vista previa semana 4"
                      />
                    </div>
                  </Transition>
                </div>
              </div>

            </div>
          </div>

          {/* Bloques inferiores CON MÁS ESPACIO */}
          <div className="mx-auto mt-20 md:mt-24 max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <h3 className="font-semibold text-slate-200">
                    1 idea por día
                  </h3>
                </div>
                <p className="text-sm text-slate-400">
                  Sin saturarte. Lo lees, lo entiendes, lo aplicas.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <h3 className="font-semibold text-slate-200">
                    1 acción por día
                  </h3>
                </div>
                <p className="text-sm text-slate-400">
                  Para que el cambio ocurra en ejecución, no en teoría.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <h3 className="font-semibold text-slate-200">
                    1 cierre por día
                  </h3>
                </div>
                <p className="text-sm text-slate-400">
                  Reforzamiento mental: el cerebro aprende consistencia.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-lg text-slate-400">
                El objetivo no es "operar más".
                <br className="hidden sm:block" />
                Es <strong className="text-slate-200">operar igual</strong> incluso cuando sientes presión.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



