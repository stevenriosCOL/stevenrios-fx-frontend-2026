import Image from "next/image";
import ProblemImage from "@/public/images/book-problem-scene.png";

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-20" id="problem">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Desktop: texto izquierda | imagen derecha
            Mobile: texto arriba | imagen abajo */}
        <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:gap-12">

          {/* Columna Texto (siempre primero) */}
          <div className="md:w-7/12" data-aos="fade-right">
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
                Identificación del problema
              </div>
            </div>

            {/* Pregunta gancho */}
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              ¿Te pasa que{" "}
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                sabes EXACTAMENTE qué hacer
              </span>{" "}
              … pero en el momento real haces lo contrario?
            </h2>

            {/* Validación (no es tu culpa) */}
            <p className="text-lg text-gray-700 mb-5">
              <strong className="text-gray-900">No es falta de disciplina.</strong>{" "}
              Tampoco es que "te falte un indicador".
              <br className="hidden sm:block" />
              El problema es que estás intentando ganar el juego con{" "}
              <span className="font-semibold text-gray-900">fuerza de voluntad</span>{" "}
              mientras tu cerebro activa{" "}
              <span className="font-semibold text-gray-900">modo supervivencia</span>.
            </p>

            {/* Micro-síntomas CON BORDE ROJO (más impacto visual) */}
            <div className="mb-6 space-y-3">
              <div className="flex items-start gap-3 rounded-xl border-l-4 border-l-red-500 border border-gray-200 bg-white p-4 shadow-sm">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  ×
                </span>
                <p className="text-gray-700">
                  Entras tarde por "seguridad"… y terminas{" "}
                  <span className="font-semibold text-gray-900">pagando el peor precio</span>.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl border-l-4 border-l-red-500 border border-gray-200 bg-white p-4 shadow-sm">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  ×
                </span>
                <p className="text-gray-700">
                  Ves un retroceso normal… y tu cuerpo lo interpreta como{" "}
                  <span className="font-semibold text-gray-900">peligro</span>.
                </p>
              </div>
            </div>

            {/* Metáfora universal */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Metáfora simple:</p>
              <p className="text-gray-700">
                Es como intentar conducir un carro con el{" "}
                <span className="font-semibold text-gray-900">freno de mano activado</span>.
                Puedes acelerar (más análisis, más videos, más teoría)…
                pero igual sientes que "algo" te detiene.
              </p>
            </div>

            {/* Shock stat CON NÚMERO ESPECÍFICO */}
            <div className="mb-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
              <p className="text-sm font-medium text-gray-400">La realidad brutal:</p>
              <p className="mt-1 text-2xl font-bold text-white">
                El 78% de traders pierden dinero en el primer año.
              </p>
              <p className="mt-2 text-gray-300">
                No por falta de análisis. Por{" "}
                <span className="font-semibold text-white">ejecución emocional</span>:
                decisiones rápidas para calmar ansiedad.
              </p>
            </div>

            {/* Reframing (frase martillo) */}
            <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
              <p className="text-lg text-gray-700">
                <strong className="text-gray-900">El mercado no te está "dañando".</strong>{" "}
                Lo que te daña es operar con un cerebro que confunde{" "}
                <span className="font-bold text-blue-600">incertidumbre</span>{" "}
                con{" "}
                <span className="font-bold text-blue-600">amenaza</span>.
              </p>

              {/* Puente a agitación (sin JS) */}
              <a
                href="#agitation"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Ahora sí: mira cómo se ve esto en tu día a día <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Columna Imagen (Desktop derecha, Mobile abajo) */}
          <div className="md:w-5/12 mt-8 md:mt-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={ProblemImage}
                alt="Escritorio de trader con el libro y herramientas de trading"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Caption vendedor, corto */}
            <p className="mt-4 text-sm text-gray-600">
              No necesitas "motivación". Necesitas{" "}
              <span className="font-semibold text-gray-900">un sistema</span>{" "}
              que te mantenga ejecutando cuando tu mente quiere reaccionar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


