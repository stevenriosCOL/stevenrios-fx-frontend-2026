export default function AgitationSection() {
  return (
    <section id="agitation" className="relative bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-12 md:pb-20 md:pt-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            {/* Badge */}
            <div className="mb-4">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200">
                La diferencia entre saber y ejecutar
              </div>
            </div>

            {/* Headline con border */}
            <h2 className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-4xl">
              Así se ve cuando el miedo toma el control
            </h2>

            <p className="text-lg text-gray-700">
              No es un "mal día". Es una cadena:{" "}
              <span className="font-semibold text-gray-900">
                una emoción pequeña → una micro-decisión → daño acumulado
              </span>
              . Y lo peor… es que tú lo ves mientras pasa.
            </p>
          </div>

          {/* Timeline Items */}
          <div className="-my-4 mx-auto max-w-3xl md:-my-6" data-aos-id-timeline="">
            
            {/* Item 1 */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  El inicio del patrón
                </div>

                <div className="mb-2 flex items-center">
                  {/* Badge numerado */}
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    Paso 1
                  </div>

                  {/* Línea vertical */}
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-slate-300 px-px"
                    aria-hidden="true"
                  />

                  {/* Dot */}
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />

                  <h4 className="text-xl font-semibold text-gray-900">
                    Dudas de tu entrada… aunque era correcta según tu análisis
                  </h4>
                </div>

                <p className="text-gray-700">
                  Lo sientes en el pecho: <em>"¿y si me equivoco?"</em>. Entonces esperas,
                  confirmas, vuelves a confirmar… y cuando finalmente entras,{" "}
                  <span className="font-semibold text-gray-900">
                    ya no es tu trade ideal
                  </span>
                  . Empieza con duda, y esa duda exige control.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  La micro-decisión que cuesta caro
                </div>

                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    Paso 2
                  </div>

                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-slate-300 px-px"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />

                  <h4 className="text-xl font-semibold text-gray-900">
                    Empiezas a tocar lo que prometiste no tocar
                  </h4>
                </div>

                <p className="text-gray-700">
                  Mueves el stop <em>"solo un poquito"</em>. Recortas ganancias por alivio.
                  Sales antes <em>"por si acaso"</em>. No lo haces por estrategia…{" "}
                  <span className="font-semibold text-gray-900">
                    lo haces para calmar la ansiedad
                  </span>
                  . Y ahí el trade deja de ser un plan: se vuelve una reacción emocional.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  El "casi" se vuelve tu vida
                </div>

                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    Paso 3
                  </div>

                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-slate-300 px-px"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />

                  <h4 className="text-xl font-semibold text-gray-900">
                    "Casi" ejecutas bien… pero no sostienes bajo presión
                  </h4>
                </div>

                <p className="text-gray-700">
                  Casi dejas correr. Casi respetas el riesgo. Casi no operas por impulso.
                  Y eso duele porque sabes que sí puedes… pero{" "}
                  <span className="font-semibold text-gray-900">
                    no cuando hay dinero real en juego
                  </span>
                  . El problema no es tu análisis. Es tu control emocional bajo presión.
                </p>
              </div>
            </div>

            {/* Item 4 - CON CIERRE */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  El golpe más fuerte
                </div>

                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    Paso 4
                  </div>

                  {/* Sin línea en el último item */}
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />

                  <h4 className="text-xl font-semibold text-gray-900">
                    Empiezas a desconfiar de ti frente al gráfico
                  </h4>
                </div>

                <p className="text-gray-700 mb-5">
                  No por el dinero perdido. Por la sensación de{" "}
                  <span className="font-semibold text-gray-900">
                    no saber quién vas a ser cuando el precio se mueva
                  </span>
                  . Ahí nace el círculo vicioso: dudas → control → error → culpa → más presión.
                </p>

                {/* Cierre + puente a solución */}
                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
                  <p className="text-gray-700 mb-3">
                    Si esto te suena familiar, respira:
                    <strong className="text-gray-900"> no estás "roto".</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    Estás operando con un cerebro diseñado para{" "}
                    <span className="font-semibold text-gray-900">sobrevivir</span>, no para{" "}
                    <span className="font-semibold text-gray-900">ejecutar bajo incertidumbre</span>.
                  </p>

                  <a
                    href="#solution"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Ok… ¿cómo se arregla esto? <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Mini refuerzo final */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-gray-600">
              La solución no es{" "}
              <span className="font-semibold text-gray-900">"motivarte más"</span>.
              Es instalar un{" "}
              <span className="font-semibold text-gray-900">proceso automático</span>{" "}
              que te haga ejecutar incluso cuando tu mente quiera reaccionar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



