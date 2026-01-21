import HeroBook from "./components/hero-book";
import ProblemSection from "./components/problem-section";
import AgitationSection from "./components/agitation-section";
import SolutionSection from "./components/solution-section";
import PreviewSection from "./components/preview-section";
import AboutAuthorSection from "./components/about-author-section";
import BeforeAfterSection from "./components/before-after-section";
import OfferSection from "./components/offer-section";
import FaqSection from "./components/faq-section";
import FinalCtaSection from "./components/final-cta-section";


export const metadata = {
  title: "30 Días para Dejar de Ser tu Peor Enemigo en el Trading - SR Academy",
  description:
    "Transforma tu psicología de trading en 30 días sistemáticos. Guía avanzada de reprogramación mental por Steven Ríos.",
};

export default function Book30DiasPage() {
  return (
    <>
      <HeroBook />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <PreviewSection />
      <AboutAuthorSection />
      <BeforeAfterSection />
      <OfferSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
