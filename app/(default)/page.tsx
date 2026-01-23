import type { Metadata } from "next";
import WaitlistHero from "@/components/waitlist-hero";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Cta from "@/components/cta";
import SectionPainPoints from "@/components/section-pain-points";
import SectionGuarantees from "@/components/section-guarantees";

// ============================================
// 🎯 METADATA ESPECÍFICO DE HOME
// ============================================
export const metadata: Metadata = {
  title: "SR Academy: Curso Trading Profesional | +2,000 Traders Certificados",
  description:
    "Aprende trading profesional con metodología estructurada: análisis técnico, psicología del trading y gestión de riesgo. +2,000 alumnos. Mentoría en vivo, comunidad activa y sistema comprobado. Sin promesas vacías, solo ejecución real.",
  
  // 🔗 CANONICAL ESPECÍFICO PARA HOME
  alternates: {
    canonical: "https://www.stevenriosfx.com",
  },
  
  // 🌍 OPEN GRAPH ESPECÍFICO (opcional, sobrescribe el global)
  openGraph: {
    title: "SR Academy: Aprende Trading Profesional Sin Promesas Vacías",
    description:
      "Metodología de 4 pilares: análisis técnico + gestión de riesgo + psicología + estrategia. +2,000 traders formados. Sistema real, sin humo.",
    url: "https://www.stevenriosfx.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SR Academy - Curso de Trading Profesional",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <WaitlistHero />
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

