"use client";

import Image from "next/image";

export default function BeforeAfterSection() {
  return (
    <section id="before-after" className="relative bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <div className="inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text pb-3 font-medium text-transparent">
              Transformación real (sin humo)
            </div>

            <h2 className="mb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Antes vs Después de reprogramar tu ejecución
            </h2>

            <p className="text-lg text-slate-400">
              No se trata de "saber más". Se trata de ejecutar mejor bajo presión.
            </p>
          </div>

          {/* TABLA COMPARATIVA (Desktop y Tablet) */}
          <div className="mx-auto max-w-4xl mb-12 md:mb-16">
            <div className="overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/50 shadow-2xl">
              
              {/* Header de tabla */}
              <div className="grid grid-cols-2 border-b border-slate-800/60">
                <div className="bg-red-950/20 px-4 py-4 text-center md:px-6">
                  <h3 className="text-base md:text-lg font-bold text-red-400">❌ Sin el libro</h3>
                  <p className="text-xs text-slate-400 mt-1">Reacción emocional</p>
                </div>
                <div className="bg-blue-950/20 px-4 py-4 text-center border-l border-slate-800/60 md:px-6">
                  <h3 className="text-base md:text-lg font-bold text-blue-400">✅ Con el libro</h3>
                  <p className="text-xs text-slate-400 mt-1">Ejecución sistemática</p>
                </div>
              </div>

              {/* Filas de comparación */}
              <div className="divide-y divide-slate-800/60">
                
                {/* Fila 1 */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-4 bg-slate-950/30 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Dudas <strong className="text-slate-100">cada entrada</strong> aunque sea tu plan
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-slate-900/30 border-l border-slate-800/60 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Ejecutas <strong className="text-slate-100">sin dudar</strong> porque ya entrenaste el patrón
                    </p>
                  </div>
                </div>

                {/* Fila 2 */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-4 bg-slate-950/30 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Mueves stops <strong className="text-slate-100">por ansiedad</strong>
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-slate-900/30 border-l border-slate-800/60 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Respetas el stop <strong className="text-slate-100">sin negociar</strong>
                    </p>
                  </div>
                </div>

                {/* Fila 3 */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-4 bg-slate-950/30 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Cierras ganadores <strong className="text-slate-100">por alivio</strong>, no por plan
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-slate-900/30 border-l border-slate-800/60 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Sostienes hasta <strong className="text-slate-100">tu objetivo real</strong>
                    </p>
                  </div>
                </div>

                {/* Fila 4 */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-4 bg-slate-950/30 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Operas por <strong className="text-slate-100">impulso emocional</strong> después de perder
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-slate-900/30 border-l border-slate-800/60 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Tienes <strong className="text-slate-100">reglas anti-venganza</strong> instaladas
                    </p>
                  </div>
                </div>

                {/* Fila 5 */}
                <div className="grid grid-cols-2">
                  <div className="px-4 py-4 bg-slate-950/30 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Tu ejecución depende del <strong className="text-slate-100">"ánimo del día"</strong>
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-slate-900/30 border-l border-slate-800/60 md:px-6 md:py-5">
                    <p className="text-sm md:text-base text-slate-300">
                      Operas <strong className="text-slate-100">igual</strong> incluso cuando sientes presión
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* IMÁGENES (Refuerzo visual) */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/50 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] md:p-6">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[38rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
            />

            {/* Desktop image (hidden on mobile) */}
            <div className="hidden md:block">
              <div className="relative mx-auto w-full max-w-5xl">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/20">
                  <Image
                    src="/images/before-after-desktop.png"
                    alt="Antes vs Después - Desktop"
                    width={1920}
                    height={1080}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">Antes:</span>{" "}
                    emoción + caos.{" "}
                    <span className="font-semibold text-slate-200">Después:</span>{" "}
                    sistema + ejecución.
                  </p>

                  <a
                    href="#offer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
                  >
                    Quiero ese cambio <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile image (hidden on desktop) */}
            <div className="md:hidden">
              <div className="relative mx-auto w-full max-w-[420px]">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/20">
                  <Image
                    src="/images/before-after-mobile.png"
                    alt="Antes vs Después - Mobile"
                    width={1080}
                    height={1920}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">Antes:</span>{" "}
                    reactivo.{" "}
                    <span className="font-semibold text-slate-200">Después:</span>{" "}
                    disciplinado.
                  </p>

                  <a
                    href="#offer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
                  >
                    Muéstrame la oferta <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Extra micro-copy */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-base text-slate-400">
              Este libro no te promete dinero. Te da{" "}
              <strong className="text-slate-200">control</strong>. Y con control,
              aparece la consistencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

