export default function Timeline() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-4xl">
              El camino de SR Academy
            </h2>
            <p className="text-lg text-gray-700">
              De las pérdidas personales a transformar la vida de miles de traders. Una historia de transparencia, persistencia y psicología aplicada.
            </p>
          </div>
          {/* Items */}
          <div
            className="-my-4 mx-auto max-w-3xl md:-my-6"
            data-aos-id-timeline=""
          >
            {/* 1st item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  Los inicios
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    2017
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-slate-300 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-900">
                    Empecé a operar perdiendo más de $5,000
                  </h4>
                </div>
                <p className="text-[1rem] text-gray-700">
                  Los primeros 6 meses fueron brutales. Perdí dinero siguiendo señales, usando indicadores complicados y sin control emocional. Fue ahí donde descubrí que la psicología es el 80% del trading.
                </p>
              </div>
            </div>
            {/* 2nd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  El punto de quiebre
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    2020
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-slate-300 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-900">
                    Nace SR Academy con transparencia brutal
                  </h4>
                </div>
                <p className="text-[1rem] text-gray-700">
                  Después de 3 años dominando mi mente y perfeccionando Fibonacci en XAUUSD, decidí enseñar lo que nadie me enseñó: la verdad sin filtros. Mostrando wins Y losses desde el día uno.
                </p>
              </div>
            </div>
            {/* 3rd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  Expansión global
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    2023
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-slate-300 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-900">
                    Alcanzamos 2,000 estudiantes en 60+ países
                  </h4>
                </div>
                <p className="text-[1rem] text-gray-700">
                  La metodología psicología-primero resonó globalmente. Traders de México, Colombia, España, Argentina y 56 países más transformaron su forma de operar. La transparencia nos diferencia.
                </p>
              </div>
            </div>
            {/* 4th item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="mb-1 text-xs font-semibold uppercase text-blue-600">
                  El futuro
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-600">
                    2025
                  </div>
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-900">
                    Nueva plataforma, mismo compromiso
                  </h4>
                </div>
                <p className="text-[1rem] text-gray-700">
                  Tecnología mejorada, contenido actualizado, pero la esencia sigue: tu miedo es tu peor trade. El objetivo para 2027 es impactar 10,000 vidas con trading psicológicamente inteligente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
