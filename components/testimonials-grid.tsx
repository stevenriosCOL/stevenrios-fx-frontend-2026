import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

export default function TestimonialsGrid() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Carlos Méndez",
      username: "@carlostrader_mx",
      date: "Nov 15, 2024",
      content:
        "La psicología del trading cambió mi vida. Antes perdía por miedo, ahora opero con disciplina. En 6 meses pasé de $500 a $3,200 en mi cuenta. Steven no vende humo, muestra la realidad.",
      channel: "Instagram",
    },
    {
      img: TestimonialImg02,
      name: "María Rodríguez",
      username: "@maria_trading",
      date: "Oct 28, 2024",
      content:
        "Crypto Mastery fue exactamente lo que necesitaba. Aprendí a operar futuros sin miedo y ahora tengo consistencia. El grupo privado es oro puro, todos nos apoyamos.",
      channel: "Instagram",
    },
    {
      img: TestimonialImg03,
      name: "Diego Silva",
      username: "@diegoFX_pro",
      date: "Oct 12, 2024",
      content:
        "Probé 3 academias antes de SR Academy. La diferencia es brutal: aquí hablan de pérdidas, de psicología real, no de Lamborghinis. Mi win rate subió de 40% a 68% en 4 meses.",
      channel: "TikTok",
    },
    {
      img: TestimonialImg04,
      name: "Ana Torres",
      username: "@anatorres_trader",
      date: "Sep 25, 2024",
      content:
        "El centro de meditación parecía raro al principio, pero ahora entiendo. Controlar mis emociones fue la clave. Ya no cierro mis operaciones por pánico. Gracias Steven.",
      channel: "Instagram",
    },
    {
      img: TestimonialImg05,
      name: "Roberto Gómez",
      username: "@roberto_xauusd",
      date: "Sep 08, 2024",
      content:
        "La estrategia XAUUSD de Steven es impresionante. Fibonacci institucional cambió mi forma de ver el oro. En 3 meses recuperé todo lo que había perdido en 2 años.",
      channel: "Instagram",
    },
    {
      img: TestimonialImg06,
      name: "Laura Fernández",
      username: "@laura_cryptotrader",
      date: "Ago 20, 2024",
      content:
        "SR Academy es transparencia pura. Steven muestra sus losses sin vergüenza y eso genera confianza real. Pasé mi primera evaluación de cuenta fondeada gracias al curso Financial Master.",
      channel: "TikTok",
    },
    {
      img: TestimonialImg07,
      name: "Miguel Ángel Castro",
      username: "@migueltrading_",
      date: "Ago 05, 2024",
      content:
        "La Maestría 0-6 Cifras es BRUTAL. Manipulación institucional, liquidez bancaria, todo lo que no enseñan en YouTube. Mi cuenta creció 340% en 5 meses operando solo 2 horas al día.",
      channel: "Instagram",
    },
    {
      img: TestimonialImg08,
      name: "Sofía Ramírez",
      username: "@sofi_forexgirl",
      date: "Jul 18, 2024",
      content:
        "Las sesiones en vivo son ORO. Ver a Steven analizar el mercado en tiempo real y explicar su psicología es mejor que cualquier libro. El chat de WhatsApp responde en minutos.",
      channel: "Instagram",
    },
    {
      img: TestimonialImg09,
      name: "Javier Morales",
      username: "@javi_trader87",
      date: "Jul 02, 2024",
      content:
        "Invertí $997 en Professional y ya recuperé la inversión 5 veces. No es magia, es trabajo duro + psicología + estrategia. Steven te dice la verdad: esto no es fácil, pero funciona.",
      channel: "TikTok",
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div
        className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Traders reales, resultados reales
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              +2,000 alumnos transformados en +60 países. Sin promesas falsas, solo transparencia y trabajo.
            </p>
          </div>
          {/* Testimonials grid */}
          <div className="grid gap-4 [mask-image:linear-gradient(to_top,theme(colors.white/.3),black_800px)] sm:grid-cols-3 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                testimonial={testimonial}
                className="w-[22rem]"
              >
                {testimonial.content}
              </Testimonial>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
