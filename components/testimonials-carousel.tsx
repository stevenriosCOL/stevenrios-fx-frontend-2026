import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Andrea Rodríguez",
      username: "@andrea_trading",
      date: "Nov 2024",
      content:
        "La maestría de trading estuvo increíble! Los secretos de análisis técnico en GOLD son súper valiosos. Realmente Steven comparte metodología profesional que nadie más da. Vale cada peso invertido en formación de trading.",
      channel: "Maestría SR Academy",
    },
    {
      img: TestimonialImg02,
      name: "Rodrigo Calderón",
      username: "@rodri_trader",
      date: "Oct 2024",
      content:
        "El intensivo de trading profesional superó mis expectativas. Steven es un destructor de paradigmas sobre gestión de riesgo. Me hizo replantear todo lo que creía saber sobre psicología del trading y ejecución.",
      channel: "Intensivo SR Academy",
    },
    {
      img: TestimonialImg03,
      name: "Victory Restrepo",
      username: "@victory_fx",
      date: "Sep 2024",
      content:
        "80% de los análisis técnicos con Fibonacci se cumplen. No es humo, son resultados reales aplicando la metodología SR. Finalmente encontré una academia de trading que cumple lo que promete con transparencia brutal.",
      channel: "Miembro Elite SR Academy",
    },
    {
      img: TestimonialImg04,
      name: "Julián González",
      username: "@julian_gold",
      date: "Ago 2024",
      content:
        "Esto es otro nivel en formación de traders. No solo enseña patrones de price action sino CUÁNDO buscarlos con gestión de riesgo clara. Esa diferencia lo cambia todo en tu operativa profesional.",
      channel: "Intensivo SR Academy",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Lo Que Dicen Nuestros{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Traders Certificados
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Más de <strong className="text-gray-900">2,000 traders</strong> ya transformaron 
              su forma de operar con{" "}
              <strong className="text-gray-900">metodología profesional</strong>,{" "}
              <strong className="text-gray-900">análisis técnico aplicado</strong> y{" "}
              <strong className="text-gray-900">psicología del trading</strong>
            </p>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badge final (NUEVO) */}
        <div className="mx-auto max-w-3xl text-center pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Testimonios verificados • Estudiantes reales con resultados comprobables
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
