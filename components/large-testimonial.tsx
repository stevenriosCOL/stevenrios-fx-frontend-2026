import Image from "next/image";
import TestimonialImg from "@/public/images/testimonial-01.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            {/* Imagen del testimonio con comillas decorativas */}
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Manuel Romero - Estudiante SR Academy México"
                loading="lazy"
              />
            </div>

            {/* Testimonio optimizado con keywords */}
            <p className="text-2xl font-bold text-gray-900">
              "Hace 6 meses comencé en{" "}
              <span className="text-gray-900">trading profesional</span> y sin duda 
              el haberme topado con tu{" "}
              <span className="text-gray-900">metodología de trading</span>{" "}
              <em className="italic text-gray-500">
                aceleró exponencialmente mi curva de aprendizaje
              </em>. Cuando hice el{" "}
              <span className="text-gray-900">curso intensivo de trading</span> te dije 
              que ese era el último intento... Pues resultó exactamente lo que esperaba y más. 
              Aprendí{" "}
              <em className="italic text-gray-500">
                análisis técnico real, gestión de riesgo y psicología del trading
              </em>."
            </p>

            {/* Información del testimonio optimizada */}
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700 font-semibold">Manuel Romero Álvarez</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 transition-colors"
                aria-label="Ver más sobre el programa Maestría de Trading"
              >
                México - Maestría de Trading SR Academy
              </a>
            </div>

            {/* Micro social proof (opcional pero potente) */}
            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <svg 
                className="w-4 h-4 text-yellow-400 fill-current" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span>
                Uno de los{" "}
                <strong className="text-gray-700">+2,000 traders certificados</strong>{" "}
                por SR Academy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
