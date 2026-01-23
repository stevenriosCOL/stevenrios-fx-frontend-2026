import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-001.png";
import PlanetTagImg02 from "@/public/images/planet-tag-002.png";
import PlanetTagImg03 from "@/public/images/planet-tag-003.png";
import PlanetTagImg04 from "@/public/images/planet-tag-004.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Todo Lo Que Necesitas Para Dominar el{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Trading Profesional
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Plataforma completa con{" "}
              <strong className="text-gray-300">contenido estructurado</strong>,{" "}
              <strong className="text-gray-300">comunidad activa</strong> y{" "}
              <strong className="text-gray-300">mentoría en vivo</strong>. Todo en un solo lugar.
            </p>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Ecosistema completo SR Academy - Plataforma de trading profesional"
                  priority
                />

                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt=""
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Contenido premium trading"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Comunidad de traders"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Análisis en vivo"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Mentoría personalizada"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {/* Feature 1 - Contenido Premium */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Contenido Premium Estructurado</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                <strong className="text-gray-300">500+ horas de formación</strong> estructurada en{" "}
                <strong className="text-gray-300">psicología del trading</strong>, Fibonacci,{" "}
                <strong className="text-gray-300">gestión de riesgo</strong> (risk management) y
                ejecución. Actualizaciones constantes con nuevas estrategias y análisis del mercado.
              </p>
            </article>

            {/* Feature 2 - Comunidad */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Comunidad Activa de Traders</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Acceso a Telegram exclusivo con{" "}
                <strong className="text-gray-300">+2,000 traders reales</strong>, sesiones de análisis
                en vivo y soporte directo. No estás solo en este camino: construimos juntos,
                compartimos setups y nos apoyamos.
              </p>
            </article>

            {/* Feature 3 - Análisis en Vivo */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Análisis en Vivo con Steven</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                <strong className="text-gray-300">Sesiones semanales de análisis</strong> del mercado
                en tiempo real. Ves cómo aplico la metodología en vivo, identifico{" "}
                <strong className="text-gray-300">setups de trading</strong> y gestiono operaciones
                reales con <strong className="text-gray-300">análisis técnico aplicado</strong>.
              </p>
            </article>

            {/* Feature 4 - Material Descargable */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>Material Descargable y Herramientas</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                PDFs educativos, plantillas de <strong className="text-gray-300">análisis técnico</strong>,
                checklists de operativa, calculadoras de <strong className="text-gray-300">gestión de riesgo</strong> y
                herramientas exclusivas para que tengas todo lo necesario offline y siempre a mano.
              </p>
            </article>

            {/* Feature 5 - Acceso Global */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <span>Acceso Global 24/7</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                <strong className="text-gray-300">Alumnos en 60+ países</strong> operando con la misma
                metodología. Plataforma disponible 24/7 desde cualquier dispositivo (móvil, tablet, PC),
                adaptada a tu zona horaria. Aprende a tu ritmo, desde donde estés.
              </p>
            </article>

            {/* Feature 6 - Acceso Inmediato */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}>
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <span>Acceso Inmediato de Por Vida</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                <strong className="text-gray-300">Un solo pago, acceso inmediato</strong> y para siempre.
                Todas las actualizaciones futuras incluidas sin costo adicional. Tu inversión crece con cada
                nueva clase, análisis y herramienta que agregamos. Sin mensualidades ocultas.
              </p>
            </article>
          </div>

          {/* CTA Button optimizado */}
          <div className="mt-12 text-center md:mt-16">
            <h3 className="mb-4 text-2xl font-bold text-gray-200 md:text-3xl">
              ¿Listo Para Acceder a Todo Esto?
            </h3>
            <p className="mb-8 text-lg text-gray-400">
              Elige el plan que se adapte a tu nivel y objetivos.{" "}
              <strong className="text-gray-300">Desde $297.</strong>
            </p>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="/pricing"
              >
                <span className="relative inline-flex items-center">
                  Ver Planes y Precios de Trading{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>

            {/* Trust badges optimizados */}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                4 planes desde $297
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Acceso extendido si lo necesitas
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Acceso inmediato
              </span>
            </div>

            {/* Micro testimonial (opcional pero efectivo) */}
            <p className="mt-4 text-xs italic text-gray-600">
              "La mejor inversión que hice en mi formación como trader" - Carlos M., Elite Member
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


