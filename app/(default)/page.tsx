export const metadata = {
  title: "SR Academy | Trading Profesional con Psicología y Confirmación Real",
  description:
    "Aprende trading de forma estructurada con psicología aplicada, gestión real de riesgo y estrategias probadas. +2.000 traders formados en más de 60 países.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";

// 🚀 nuevos
import SectionPainPoints from "@/components/section-pain-points";
import SectionGuarantees from "@/components/section-guarantees";


export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <SectionPainPoints />
      <LargeTestimonial />
      <FeaturesPlanet />
      <Features />
      <SectionGuarantees />
      <TestimonialsCarousel />
      <Cta />
    </>
  );
}

