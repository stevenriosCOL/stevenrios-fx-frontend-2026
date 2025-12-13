"use client";

import useMasonry from "@/utils/useMasonry";
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
import TestimonialImg10 from "@/public/images/testimonial-10.jpg";
import TestimonialImg11 from "@/public/images/testimonial-11.jpg";
import TestimonialImg12 from "@/public/images/testimonial-12.jpg";
import TestimonialImg13 from "@/public/images/testimonial-13.jpg";
import TestimonialImg14 from "@/public/images/testimonial-14.jpg";
import TestimonialImg15 from "@/public/images/testimonial-15.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Andrea Rodríguez",
    location: "Colombia",
    date: "2024",
    content:
      "La maestría estuvo increíble! Información y #TOPSECRETSGOLD super valiosos y precisos. Fue muy interesante empezar a ver el mercado como los grandes. La formación fue muy completa, nos ayuda a enfocar la atención en lo verdaderamente importante, siendo conscientes en no seguir al mercado, sino en aprender a anticiparnos.",
    program: "Maestría de Trading",
    rating: 5,
  },
  {
    img: TestimonialImg02,
    name: "Patricia Rueda",
    location: "Colombia",
    date: "2024",
    content:
      "Esta maestría es lo mejor a lo que he asistido. Nada más sencillo que el trading que tú enseñas. La forma es muy simplificada, elemental pero absolutamente precisa y ganadora. Aclaré muchos conceptos que no me dejaban avanzar. Muchísimas gracias y siempre seré tu eterna alumna.",
    program: "Maestría",
    rating: 5,
  },
  {
    img: TestimonialImg03,
    name: "Giovanny Apuy",
    location: "Costa Rica",
    date: "2024",
    content:
      "Muy agradecido, la maestría #TOPSECRETSGOLD muy buena. Se abarcaron temas para lograr precisión y rentabilidad en el mercado, muy bien explicado y la recomendaría.",
    program: "Maestría de Trading",
    rating: 5,
  },
  {
    img: TestimonialImg04,
    name: "Oscar Eneque",
    location: "Perú",
    date: "2024",
    content:
      "Su curso ha sido espectacular, me gustó muchísimo. El conocimiento de las sesiones para mí fue increíble, ver cómo ayuda a darle precisión a mis entradas. Veo que el trading lo más importante es esperar, ser un francotirador y no un mono con metralleta jajaja.",
    program: "Maestría de Trading",
    rating: 5,
  },
  {
    img: TestimonialImg05,
    name: "Yeison Flórez",
    location: "Colombia",
    date: "2024",
    content:
      "El viernes puse 3 trades con stop y take profit. Se cumplieron arriba de 100 pips las 3 operaciones. Eres un crack, gracias por todo tu esfuerzo en buscar la información correcta y transmitirla. Dicen que hacer amigos que te obliguen a subir de nivel, eres uno de ellos.",
    program: "Maestría de Trading",
    rating: 5,
  },
  {
    img: TestimonialImg06,
    name: "Victory Restrepo",
    location: "Colombia",
    date: "2024",
    content:
      "Me ayudó a ver el mercado de una manera muy diferente. Hasta el momento el 80% de los análisis que he hecho se han cumplido aplicando todo lo nuevo. Es una forma muy práctica de hacer trading. Lo más brutal es ver que no es humo sino 100% resultados reales.",
    program: "0a6cifras - Medellín",
    rating: 5,
  },
  {
    img: TestimonialImg07,
    name: "Rodrigo Calderón",
    location: "Costa Rica",
    date: "2024",
    content:
      "Gracias por la calidad del curso, superó mucho mis expectativas. Fue un verdadero destructor de paradigmas. Eliminar todo rezago de la estructura mental que me dieron los cursos anteriores ha sido clave.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg08,
    name: "Julián González",
    location: "Colombia",
    date: "2024",
    content:
      "Fue otro nivel de lo que se enseña normalmente. No es solo buscar los patrones sino cuando buscarlos. El tema de las sesiones y las áreas de trabajo me está ayudando mucho. Sin palabras, siempre ahí ayudando, mejor acompañamiento no puede haber.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg09,
    name: "Lucas Millanao",
    location: "Argentina",
    date: "2024",
    content:
      "Una de las mejores inversiones que he hecho este año fue tomar su curso. Gracias le doy a Dios por cruzarnos en mi camino de formación a TRADER MEGA RENTABLE. Lo que más me rompió la cabeza fueron los tips para las entradas y cómo anticiparme al movimiento.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg10,
    name: "Eduardo Ardila",
    location: "Chile",
    date: "2024",
    content:
      "Muchísimas gracias por tu humildad y compromiso con todos tus estudiantes. El curso fenomenal, aprendí muchas cosas que tengo que seguir practicando. Lo de las sesiones y cómo funciona cada una es algo que no sabía y estoy seguro que me servirá mucho.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg11,
    name: "Ignacio Valdez",
    location: "Argentina",
    date: "2024",
    content:
      "Superó mis expectativas. Es increíble cómo clase a clase se van acomodando las ideas para mejorar nuestra operativa, identificando con mayor claridad las zonas sensibles, los horarios y entender el porqué de cada movimiento. Muy bueno hermano, gracias.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg12,
    name: "Gustavo Mejía",
    location: "Colombia",
    date: "2024",
    content:
      "Fue espectacular hermano, información de otro nivel. Una educación totalmente disruptiva. Aprendí a identificar zonas sensibles, ciclos, poder conocer cómo se mueven los tiburones del mercado. Es un reseteo a mi cabeza.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg13,
    name: "Alfonso Ruíz",
    location: "Colombia",
    date: "2024",
    content:
      "Tu curso avanzado Excelente, información de muchísimo valor para ir mejorando mi operativa. Lo de las sesiones brutal, para operar como los bancos. También los días de recapitalización para saber que puede hacer el mercado.",
    program: "Intensivo",
    rating: 5,
  },
  {
    img: TestimonialImg14,
    name: "Stephany Suárez",
    location: "Colombia",
    date: "2024",
    content:
      "Entendí la forma de ver el mercado de acuerdo a la operatividad de los grandes inversionistas. Aprendí que el mercado siempre va a tener 5 movimientos y que al terminarlos es donde realmente debemos tener paciencia para esperar el verdadero movimiento.",
    program: "Conceptos Esenciales",
    rating: 5,
  },
  {
    img: TestimonialImg15,
    name: "Yulieth Graciano",
    location: "Colombia",
    date: "2024",
    content:
      "Increíble la información, muy valiosa. Con esta mentoría se despeja muchísimo más las dudas a la hora de operar. Ya veo el mercado mucho más claro. Sí que valió la pena una y mil veces.",
    program: "Conceptos Esenciales",
    rating: 5,
  },
];

export default function WallOfLove() {
  const masonryContainer = useMasonry();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          
          {/* Section header */}
          <div className="pb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Traders Que Ya Transformaron Su Operativa
            </h2>
            <p className="text-lg text-gray-700">
              Testimonios reales de alumnos en +60 países
            </p>
          </div>

          {/* Testimonials grid */}
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial
                  testimonial={testimonial}
                  className="w-full rotate-0 md:group-odd:!-rotate-1 md:group-even:!rotate-1"
                >
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
