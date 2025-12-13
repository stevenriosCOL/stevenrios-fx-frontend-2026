export const metadata = {
  title: "Planes y Precios – SR Academy",
  description: "Elige el plan perfecto para tu nivel: Academy, Professional, Master y Elite. Compara beneficios y empieza tu transformación en el trading.",
};

import PricingTables from "@/components/pricing-tables";
import ComparePlans from "@/components/compare-plans";
import TestimonialsGrid from "@/components/testimonials-grid";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta-alternative";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <ComparePlans />
      <TestimonialsGrid />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="¿Listo para transformar tu trading?"
        buttonText="Si, quiero empezar mi transformación"
        buttonLink="/pricing"
      />
    </>
  );
}
