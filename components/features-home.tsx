import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02-overlay-001.png";
import FeatureImg02 from "@/public/images/features-02-overlay-02.png";
import FeatureImg03 from "@/public/images/features-02-overlay-03.png";

export default function WhyDifferent() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Section header optimizado */}
          <div className="mx-auto max-w-3xl pb-24 text-center md:pb-28">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Por Qué SR Academy Es Diferente a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Otras Academias de Trading
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              No somos una academia más con videos grabados y cero seguimiento. 
              Somos la academia que enseña{" "}
              <strong className="text-gray-900">metodología real</strong>, muestra{" "}
              <strong className="text-gray-900">resultados verificables</strong> y 
              trabaja la <strong className="text-gray-900">psicología del trading</strong> antes 
              que los indicadores.
            </p>
          </div>

          {/* Illustration con testimonio */}
          <div
            className="group relative mx-auto mb-32 flex w-full max-w-[500px] justify-center md:mb-36"
            data-aos="zoom-y-out"
          >
            <div className="absolute bottom-0 -z-10" aria-hidden="true">
              <div className="h-80 w-80 rounded-full bg-blue-500 opacity-70 blur-[160px] will-change-[filter]" />
            </div>
            <div className="aspect-video w-full -rotate-1 rounded-2xl bg-gray-900 px-5 py-3 shadow-xl transition duration-300 group-hover:-rotate-0">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  Testimonio Real - Estudiante SR Academy
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 blur-xs will-change-[filter] transition duration-300 group-hover:blur-none [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  "Steven, gracias hermano"
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  El viernes puse 3 trades con tu metodología
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Se cumplieron +100 pips las 3 operaciones
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Gestión de riesgo perfecta. Eres un crack! 🔥
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  Aplicando psicología + Fibonacci. Sé que la sacaré del estadio
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  - Yeison F. Colombia | Miembro Elite
                </span>
              </div>
            </div>
            <div className="absolute top-16">
              <div className="pointer-events-none mb-[7%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  className="-rotate-2"
                  src={FeatureImg01}
                  width={500}
                  height={72}
                  alt="Testimonio trading real SR Academy"
                />
              </div>
              <div className="delay-50 pointer-events-none mb-[3.5%] translate-y-2 transition duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image 
                  src={FeatureImg02} 
                  width={500} 
                  alt="Resultado trading verificable" 
                />
              </div>
              <div className="pointer-events-none translate-y-2 transition delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-0">
                <Image
                  className="-rotate-1"
                  src={FeatureImg03}
                  width={500}
                  height={91}
                  alt="Comunidad SR Academy"
                />
              </div>
            </div>
          </div>

          {/* Grid - 3 Diferenciales optimizados */}
          <div className="grid overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gradient-to-b *:before:from-transparent *:before:via-gray-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] md:*:px-10 md:*:py-12">
            
            {/* Diferencial 1: Psicología Primero */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <path d="m15.447 6.605-.673-.336a6.973 6.973 0 0 0-.761-1.834l.238-.715a.999.999 0 0 0-.242-1.023l-.707-.707a.995.995 0 0 0-1.023-.242l-.715.238a6.96 6.96 0 0 0-1.834-.761L9.394.552A1 1 0 0 0 8.5-.001h-1c-.379 0-.725.214-.895.553l-.336.673a6.973 6.973 0 0 0-1.834.761l-.715-.238a.997.997 0 0 0-1.023.242l-.707.707a1.001 1.001 0 0 0-.242 1.023l.238.715a6.959 6.959 0 0 0-.761 1.834l-.673.336a1 1 0 0 0-.553.895v1c0 .379.214.725.553.895l.673.336c.167.653.425 1.268.761 1.834l-.238.715a.999.999 0 0 0 .242 1.023l.707.707a.997.997 0 0 0 1.023.242l.715-.238a6.959 6.959 0 0 0 1.834.761l.336.673a1 1 0 0 0 .895.553h1c.379 0 .725-.214.895-.553l.336-.673a6.973 6.973 0 0 0 1.834-.761l.715.238a1.001 1.001 0 0 0 1.023-.242l.707-.707c.268-.268.361-.664.242-1.023l-.238-.715a6.959 6.959 0 0 0 .761-1.834l.673-.336A1 1 0 0 0 16 8.5v-1c0-.379-.214-.725-.553-.895ZM8 13a5 5 0 1 1 .001-10.001 5 5 0 0 1 0 10.001Z" />
                </svg>
                <span>Psicología del Trading Primero</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                Empezamos con tu mente, no con indicadores. 
                Control emocional,{" "}
                <strong className="text-gray-900">gestión del miedo</strong>,{" "}
                <strong className="text-gray-900">disciplina operativa</strong> y 
                mentalidad ganadora. El{" "}
                <strong className="text-gray-900">80% del éxito en trading</strong> está 
                en tu cabeza. Tu mente es tu primera herramienta.
              </p>
            </article>

            {/* Diferencial 2: Mentoría Real */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={12}
                  aria-hidden="true"
                >
                  <path d="M2 0a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3Z" />
                </svg>
                <span>Mentoría Real, No Videos Grabados</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                <strong className="text-gray-900">Comunidad activa 24/7</strong> en Discord,{" "}
                <strong className="text-gray-900">sesiones en vivo semanales</strong> con 
                análisis de mercado, soporte directo y{" "}
                <strong className="text-gray-900">mentoría personalizada</strong>. 
                No estás solo: +2,000 traders te apoyan en tu camino. 
                Respondemos tus dudas en tiempo real.
              </p>
            </article>

            {/* Diferencial 3: Transparencia Brutal */}
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <path d="M14.75 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM2.5 14.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM1.25 2.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                </svg>
                <span>Transparencia Brutal y Resultados Verificables</span>
              </h3>
              <p className="text-[15px] text-gray-700">
                Mostramos wins Y losses sin filtros.{" "}
                <strong className="text-gray-900">Análisis público de errores</strong>,{" "}
                <strong className="text-gray-900">8+ años de trayectoria verificable</strong> y{" "}
                <strong className="text-gray-900">testimonios reales con nombre y foto</strong>. 
                No vendemos Lamborghinis ni sueños imposibles. 
                Enseñamos trading profesional con{" "}
                <strong className="text-gray-900">gestión de riesgo</strong> real y 
                expectativas realistas.
              </p>
            </article>

          </div>

          {/* Bottom trust statement (NUEVO) */}
          <div className="mx-auto max-w-3xl pt-12 text-center md:pt-16">
            <p className="text-base text-gray-600">
              <strong className="text-gray-900">
                No prometemos que te harás millonario en 30 días.
              </strong>{" "}
              Prometemos enseñarte un{" "}
              <strong className="text-gray-900">sistema estructurado</strong> que, 
              con disciplina y práctica, puede convertirte en un{" "}
              <strong className="text-gray-900">trader consistente</strong>.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>
                Metodología comprobada por +2,000 estudiantes en 60+ países
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
