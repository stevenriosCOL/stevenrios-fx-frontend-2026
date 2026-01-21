import Image from "next/image";
import StevenImg from "@/public/images/team-steven-book.png";

export default function AboutAuthorSection() {
  return (
    <section id="about-author">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-16 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-24">

          {/* Header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            {/* Badge PRE-HEADLINE */}
            <div className="mb-4">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
                Quién escribió este libro
              </div>
            </div>

            <h2 className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-4xl">
              Sobre el autor
            </h2>

            <p className="text-lg text-gray-700">
              Este libro no nació por inspiración.  
              Nació porque vi el mismo error mental destruyendo traders una y otra vez.
            </p>
          </div>

          {/* Author block */}
          <div className="mx-auto max-w-3xl text-center">

            {/* Imagen */}
            <div className="relative mb-6 inline-flex">
              <Image
                className="rounded-full shadow-xl ring-2 ring-gray-100"
                src={StevenImg}
                width={230}
                height={230}
                alt="Steven Rios"
                quality={100}
                priority
              />
            </div>

            {/* Nombre */}
            <div className="mb-1 text-2xl font-bold text-gray-900 md:text-3xl">
              Steven Rios
            </div>

            <div className="mb-2 text-base font-medium text-blue-600">
              @stevenrios.fx
            </div>

            <p className="mb-6 text-base font-semibold text-gray-800">
              Trader profesional desde 2017 • Psicología aplicada al trading • Fundador SR Academy
            </p>

            {/* Bio */}
            <p className="text-lg leading-relaxed text-gray-700">
              Si hoy sientes que <strong>entiendes el análisis</strong> pero en el momento real
              te gana el miedo, el impulso o la duda… te entiendo.
              <br /><br />
              Yo pasé exactamente por ahí: entradas tardías, stops movidos, cierres por alivio
              y trades emocionales que no tenían nada que ver con un sistema.
              <br /><br />
              Con el tiempo entendí algo clave:
              <strong className="text-gray-900">
                {" "}el problema no era aprender más estrategias, era entrenar mi mente para ejecutar bajo presión.
              </strong>
              <br /><br />
              Por eso escribí <strong>30 Días para Dejar de Ser tu Peor Enemigo en el Trading</strong>:
              un proceso diario, estructurado y realista para construir disciplina operativa.
            </p>

            {/* CREDENCIALES - AGREGADAS */}
            <div className="mt-8 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6 text-left">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                Credenciales y experiencia:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-gray-900">CFA</strong> (Chartered Financial Analyst)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Gestión de <strong className="text-gray-900">$25M+</strong> en fondos institucionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-gray-900">+8 años</strong> operando en vivo con transparencia total</span>
                </li>
              </ul>
            </div>

            {/* Métricas CON HOVER MEJORADO */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">

              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-gray-900">+8</div>
                <div className="text-sm text-gray-700">Años de experiencia</div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-gray-900">+2,000</div>
                <div className="text-sm text-gray-700">Estudiantes activos</div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="text-3xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-700">Países alcanzados</div>
              </div>

            </div>

            {/* Cierre emocional */}
            <p className="mt-10 text-lg font-medium text-gray-800">
              Mi misión con este libro es simple:
              ayudarte a dejar de sabotearte y convertir tu ejecución en tu ventaja competitiva.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}


