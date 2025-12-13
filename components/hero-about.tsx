import Image from "next/image";

import StevenImg01 from "@/public/images/steven-mosaic-01.jpg";
import StevenImg02 from "@/public/images/steven-mosaic-02.jpg";
import StevenImg03 from "@/public/images/steven-mosaic-03.jpg";
import StevenImg04 from "@/public/images/steven-mosaic-04.jpg";

export default function HeroAbout() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              De trader frustrado a mentor de +2,000 alumnos
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                La historia de cómo Steven Rios transformó sus pérdidas en una metodología que ha cambiado vidas en 60+ países. Transparencia brutal, psicología primero, resultados reales.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-4/3 w-full">
              {/* Imagen 1 - SIN grayscale, SIN opacity reducida */}
              <figure
                className="absolute h-auto"
                style={{ top: "45%", width: "41.67%", maxWidth: 320 }}
                data-aos="fade-right"
              >
                <div className="relative -rotate-2 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={StevenImg02}
                    width={640}
                    height={480}
                    alt="Steven Rios trading"
                    quality={90}
                  />
                </div>
              </figure>
              
              {/* Imagen 2 - Principal */}
              <figure
                className="relative mx-auto"
                style={{ width: "78.13%", maxWidth: 600 }}
                data-aos="fade-down"
                data-aos-delay={100}
              >
                <div className="relative -rotate-2 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={StevenImg01}
                    width={1200}
                    height={676}
                    alt="Steven Rios"
                    quality={90}
                    priority
                  />
                </div>
              </figure>
              
              {/* Imagen 3 */}
              <figure
                className="absolute h-auto"
                style={{
                  top: "8.5%",
                  right: 0,
                  width: "32.56%",
                  maxWidth: 250,
                }}
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="relative rotate-2 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={StevenImg03}
                    width={500}
                    height={376}
                    alt="SR Academy"
                    quality={90}
                  />
                </div>
              </figure>
              
              {/* Imagen 4 - Esta sí puede tener opacidad porque es decorativa */}
              <figure
                className="absolute h-auto"
                style={{
                  bottom: 0,
                  right: "20%",
                  width: "25.53%",
                  maxWidth: 196,
                }}
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="relative rotate-2 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    className="opacity-40"
                    src={StevenImg04}
                    width={392}
                    height={392}
                    alt="Trading setup"
                    quality={85}
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}