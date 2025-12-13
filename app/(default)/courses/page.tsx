export const metadata = {
  title: "Herramientas y Recursos – SR Academy",
  description: "Accede a las herramientas oficiales de SR Academy: recursos, apps y utilidades diseñadas para mejorar tu proceso de trading y acelerar tu crecimiento.",
};

import Hero from "./hero";
import AppList from "@/components/app-list";
import Cta from "@/components/cta-alternative";

export default function Apps() {
  return (
    <>
      <Hero />
      <AppList />
      <Cta
        heading="¿Listo para transformar tu trading?"
        buttonText="Sí, quiero empezar mi transformación"
        buttonLink="/pricing"
      />
    </>
  );
}
