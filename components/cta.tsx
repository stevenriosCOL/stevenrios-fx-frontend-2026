import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl will-change-[filter]" />
          </div>

          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image 
              className="max-w-none" 
              src={Stripes} 
              alt="Patrón de fondo SR Academy" 
            />
          </div>

          <div className="px-4 py-12 md:px-12 md:py-20">
            {/* Headline optimizado */}
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              ¿Listo Para Dominar el{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Trading Profesional?
              </span>
            </h2>

            {/* Subtitle optimizado */}
            <p className="mb-8 text-lg text-gray-400">
              En 6 meses estarás en algún lado.{" "}
              <strong className="text-gray-300">¿Dónde prefieres estar?</strong>
              <br />
              <span className="text-base text-gray-500">
                Operando con disciplina y estrategia, o siguiendo señales sin control.
              </span>
            </p>

{/* CTA Button optimizado */}
<div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
  <a
    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
    href="/pricing"
  >
    <span className="relative inline-flex items-center">
      Ver Planes de Trading Profesional{" "}
      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
        -&gt;
      </span>
    </span>
  </a>
</div>


            {/* Trust badges optimizados */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantía de formación completa
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Acceso inmediato 24/7
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                +2,000 traders certificados
              </span>
            </div>

            {/* Micro urgency (opcional pero efectivo) */}
            <p className="mt-6 text-xs italic text-gray-600">
              "El mejor momento para empezar fue hace 6 meses. El segundo mejor momento es ahora."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

