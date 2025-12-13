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
        "La maestría estuvo increíble! #TOPSECRETSGOLD super valiosos. Realmente Steven comparte información que nadie más da. Vale cada peso invertido.",
      channel: "Maestría SR",
    },
    {
      img: TestimonialImg02,
      name: "Rodrigo Calderón",
      username: "@rodri_trader",
      date: "Oct 2024",
      content:
        "El intensivo superó mis expectativas. Steven es un destructor de paradigmas. Me hizo replantear todo lo que creía saber sobre trading.",
      channel: "Intensivo SR",
    },
    {
      img: TestimonialImg03,
      name: "Victory Restrepo",
      username: "@victory_fx",
      date: "Sep 2024",
      content:
        "80% de los análisis se cumplen. No es humo, son resultados reales. Finalmente encontré una academia que cumple lo que promete.",
      channel: "0a6cifras",
    },
    {
      img: TestimonialImg04,
      name: "Julián González",
      username: "@julian_gold",
      date: "Ago 2024",
      content:
        "Esto es otro nivel. No solo enseña patrones sino CUÁNDO buscarlos. Esa diferencia lo cambia todo en tu operativa.",
      channel: "Intensivo SR",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Lo que dicen nuestros alumnos
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Más de 2,000 traders ya transformaron su forma de operar
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
      </div>
    </section>
  );
}
