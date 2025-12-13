export const metadata = {
  title: "Soporte y Ayuda – SR Academy",
  description:
    "Encuentra respuestas, soporte técnico, ayuda con tus cursos, accesos, pagos y todo lo relacionado con tu formación en trading y finanzas.",
};

import Hero from "./hero";
import Faqs from "@/components/faqs-02";
import Cta from "@/components/cta-alternative";

export default function Support() {
  return (
    <>
      <Hero />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="¿No encontraste lo que buscabas?"
        buttonText="Hablar con Soporte"
        buttonLink="https://wa.link/t9ntsl"
      />
    </>
  );
}


