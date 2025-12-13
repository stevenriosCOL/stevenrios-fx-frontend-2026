import Image from "next/image";

import StevenImg from "@/public/images/team-steven.jpg";
import ValentinaImg from "@/public/images/team-valentina.jpg";
import AlejandroImg from "@/public/images/team-alejandro.jpg";

const teamMembers = [
  {
    image: StevenImg,
    name: "Steven Rios",
    role: "Fundador & Master en Trading",
    handle: "@stevenrios.fx",
    bio: "Trader experto en forex, índices y criptomonedas desde 2017. +2,000 alumnos en 60+ países. Especializado en psicología del trading y estructuras avanzadas Fibonacci + XAUUSD.",
  },
  {
    image: ValentinaImg,
    name: "Valentina Chalarca",
    role: "Mentora & Guía de Meditación",
    handle: "@valenchalarca_",
    bio: "Especialista en control emocional y meditación aplicada al trading. Ayuda a traders a dominar su mente antes de dominar los mercados. 3 años transformando mentalidades.",
  },
  {
    image: AlejandroImg,
    name: "Alejandro Ortiz",
    role: "Master en Criptomonedas & Blockchain",
    handle: "@mr.bitcoinbusiness",
    bio: "15 años de experiencia en mercados digitales. Certificado Binance Bootcamp. Experto en futuros perpetuos, DeFi y análisis on-chain. Director de Blockchain Coin Invest.",
  },
];

export default function Team() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="mb-6 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-4xl">
              El equipo detrás de SR Academy
            </h2>
            <p className="text-lg text-gray-700">
              Expertos con experiencia real en mercados, no teóricos de escritorio. Resultados verificables, transparencia total.
            </p>
          </div>
          {/* Members */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 inline-flex">
                  <Image
                    className="rounded-full shadow-lg ring-2 ring-gray-100"
                    src={member.image}
                    width={150}
                    height={150}
                    alt={member.name}
                    quality={100}
                  />
                </div>
                <div className="mb-1 font-nacelle text-xl text-gray-900">
                  {member.name}
                </div>
                <div className="text-sm text-blue-600 mb-2">{member.handle}</div>
                <p className="text-sm font-medium text-gray-800 mb-3">{member.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}