"use client";

export default function CtaSection() {
  return (
    <section id="cta-final">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.4),transparent)1]">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-10 md:mb-12">
            <div className="inline-flex font-medium bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent mb-3">
              Última oportunidad
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para dejar de sabotearte en vivo?
            </h2>

            <p className="text-lg text-gray-700">
              No necesitas "más estrategia". Necesitas un{" "}
              <span className="font-semibold text-gray-900">sistema mental</span> para ejecutar
              igual en calma y bajo presión.
            </p>

            {/* Urgencia sutil */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Precio de lanzamiento: $19.99 (tiempo limitado)</span>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-7 md:p-9">

              {/* Bullets */}
              <div className="mx-auto max-w-2xl space-y-3 text-left">
                <MiniPoint text="30 días guiados (7–15 min al día) con estructura real y ejercicios accionables." />
                <MiniPoint text="Reprogramación de patrones mentales bajo presión (no solo teoría)." />
                <MiniPoint text="Acceso inmediato + bonus de +12 horas + WhatsApp inteligente." />
                <MiniPoint text="Compromiso SR Academy: soporte directo + actualizaciones gratuitas." />
              </div>

              {/* Social proof */}
              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-200" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-300" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-400" />
                </div>
                <span>
                  <strong className="text-gray-900">2,000+ traders</strong> ya lo están usando
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className="btn group bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                  href="https://wa.link/rmdrzg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center">
                    Comprar ahora
                    <span className="ml-1 text-blue-300 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>

                <button
                  className="btn bg-white text-gray-800 shadow hover:bg-gray-50"
                  onClick={() =>
                    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ver lo que incluye
                </button>
              </div>

              {/* Trust microcopy */}
              <p className="mt-5 text-sm text-gray-600">
                Acceso inmediato por WhatsApp. PDF Premium descargable. Sin suscripciones ni pagos recurrentes.
              </p>

              {/* Honest note */}
              <div className="mt-8 rounded-2xl border-l-4 border-gray-300 bg-gray-50 p-5 text-left">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Última nota honesta:</strong>{" "}
                  Este libro no hace el trabajo por ti. Si esperas una solución mágica, no compres.
                  Pero si estás dispuesto a trabajar tu mente 15 minutos al día durante 30 días,{" "}
                  <strong className="text-gray-900">esto cambia tu ejecución</strong>.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */
function MiniPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        ✓
      </span>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}


