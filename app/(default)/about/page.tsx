export const metadata = {
  title: "Sobre Nosotros - SR Academy",
  description: "Conoce la historia de Steven Rios y el equipo detrás de SR Academy. 8 años transformando traders en 60+ países.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Countries from "@/components/countries";

export default function About() {
  return (
    <>
      {/* <PageIllustration /> */}
      <Hero />
      <Timeline />
      <Team />
      <Countries />
    </>
  );
}