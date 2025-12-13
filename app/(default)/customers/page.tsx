export const metadata = {
  title: "Testimonios Reales – SR Academy",
  description: "Descubre historias reales de estudiantes que transformaron su trading con SR Academy. Resultados, experiencias y opiniones verificadas.",
};

import Hero from "./hero";
import WallOfLove from "@/components/wall-of-love";
import Cta from "@/components/cta-alternative";

export default function Customers() {
  return (
    <>
      <Hero />
      <WallOfLove />
      <Cta
        heading="¿Listo para transformar tu trading?"
        buttonText="Sí, quiero empezar mi transformación"
        buttonLink="/pricing"
      />
    </>
  );
}
