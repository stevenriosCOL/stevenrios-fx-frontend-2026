import type { Metadata } from "next";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Countries from "@/components/countries";

// ============================================
// 🔍 METADATA OPTIMIZADA (SEO + EEAT)
// ============================================
export const metadata: Metadata = {
  title: "Sobre Steven Rios | Trader Profesional CFA y Fundador SR Academy",
  description:
    "Conoce a Steven Rios, trader profesional CFA especializado en XAUUSD y Forex. +8 años de experiencia, +2,000 alumnos en 60+ países. Metodología enfocada en psicología del trading y gestión de riesgo.",
  alternates: {
    canonical: "https://www.stevenriosfx.com/about",
  },
  openGraph: {
    type: "profile",
    url: "https://www.stevenriosfx.com/about",
    title: "Steven Rios | Trader Profesional CFA y Fundador SR Academy",
    description:
      "Trader profesional certificado CFA con 8+ años de experiencia. Fundador de SR Academy, formando traders en 60+ países con metodología de psicología + análisis técnico.",
    images: [
      {
        url: "https://www.stevenriosfx.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Steven Rios - Trader Profesional CFA SR Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Rios | Trader Profesional CFA",
    description:
      "8+ años de experiencia en Forex y XAUUSD. CFA certificado. Fundador de SR Academy con +2,000 traders formados.",
    images: ["https://www.stevenriosfx.com/images/og-image.jpg"],
    creator: "@stevenriosfx",
  },
};

export default function About() {
  // ============================================
  // 🏷️ SCHEMA PERSON (EEAT Crítico)
  // ============================================
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Steven Rios",
    jobTitle: "Trader Profesional CFA y Fundador de SR Academy",
    description:
      "Trader profesional certificado CFA especializado en Forex (XAUUSD), Oro y Criptomonedas. Fundador de SR Academy con más de 8 años de experiencia operando y formando traders profesionales.",
    url: "https://www.stevenriosfx.com/about",
    image: "https://www.stevenriosfx.com/images/og-image.jpg",
    sameAs: [
      "https://instagram.com/stevenrios.fx",
      "https://instagram.com/sracademyoficial",
      "https://kick.com/stevenriosfx",
      "https://es.tradingview.com/u/StevenRiosFx",
    ],
    knowsAbout: [
      "Trading Profesional",
      "Forex Trading",
      "XAUUSD (Oro)",
      "Psicología del Trading",
      "Gestión de Riesgo",
      "Análisis Técnico",
      "Fibonacci Trading",
      "Criptomonedas",
      "Price Action",
      "CFA (Chartered Financial Analyst)",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CFA",
      name: "Chartered Financial Analyst (CFA)",
    },
    worksFor: {
      "@type": "Organization",
      name: "SR Academy",
      url: "https://www.stevenriosfx.com",
    },
  };

  // ============================================
  // 🏷️ SCHEMA PROFILEPAGE
  // ============================================
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Sobre Steven Rios | Trader Profesional CFA",
    url: "https://www.stevenriosfx.com/about",
    mainEntity: personJsonLd,
  };

  return (
    <>
      {/* ============================================ */}
      {/* 🏷️ JSON-LD SCHEMAS (EEAT)                   */}
      {/* ============================================ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd),
        }}
      />

      <Hero />

      {/* ============================================ */}
      {/* 📊 SECCIÓN CREDENCIALES VERIFICABLES         */}
      {/* ============================================ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Header */}
            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
              <div className="inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text pb-3 font-medium text-transparent">
                Transparencia total
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Experiencia Verificable
              </h2>
              <p className="text-lg text-gray-600">
                Mi trayectoria y resultados están documentados públicamente para
                que puedas verificar mi experiencia real. Sin filtros. Sin humo.
              </p>
            </div>

            {/* Grid de Credenciales - 3 Cards */}
            <div className="mx-auto grid max-w-sm gap-4 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {/* Card 1 - CFA */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl"
                data-aos="fade-up"
              >
                {/* Glow effect */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-blue-500 opacity-20 blur-[60px]" />
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
                    CFA Certificado
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  Chartered Financial Analyst
                </h3>

                <p className="text-gray-400">
                  Certificación profesional CFA que valida conocimiento avanzado
                  en análisis financiero, gestión de inversiones y ética
                  profesional.
                </p>
              </div>

              {/* Card 2 - Experiencia */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                {/* Glow effect */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-blue-500 opacity-20 blur-[60px]" />
                </div>

                <div className="mb-4 text-5xl font-bold text-blue-400">8+</div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  Años Operando Mercados Reales
                </h3>

                <p className="mb-4 text-gray-400">
                  Desde 2017, operando Forex, Oro (XAUUSD) y Criptomonedas con
                  metodología de análisis técnico y psicología.
                </p>

                <a
                  href="https://es.tradingview.com/u/StevenRiosFx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                  Ver perfil TradingView
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Card 3 - Alumnos */}
              <div
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Glow effect */}
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 rounded-full bg-blue-500 opacity-20 blur-[60px]" />
                </div>

                <div className="mb-4 text-5xl font-bold text-blue-400">+2,000</div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  Traders Formados en 60+ Países
                </h3>

                <p className="mb-4 text-gray-400">
                  Estudiantes activos que aprendieron metodología estructurada de
                  trading profesional en SR Academy.
                </p>

                <a
                  href="/customers"
                  className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                >
                  Ver testimonios reales
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Análisis Públicos - Full Width Card */}
            <div
              className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl lg:mt-12"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              {/* Glow background */}
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-0 -z-10"
                  aria-hidden="true"
                >
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-[100px]">
                    <div className="h-40 w-96 bg-blue-500 opacity-20" />
                  </div>
                </div>

                <div className="p-8 md:p-10 lg:flex lg:items-center lg:gap-12">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4 inline-flex bg-gradient-to-r from-blue-500 to-blue-200 bg-clip-text font-medium text-transparent">
                      Análisis verificables
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                      Metodología Pública en TradingView
                    </h3>

                    <p className="mb-6 text-lg text-gray-400">
                      Todos mis análisis de mercado están publicados con timestamp
                      verificable. Transparencia total en metodología Fibonacci,
                      price action y gestión de riesgo. Sin ediciones. Sin
                      cherry-picking.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <a
                        href="https://es.tradingview.com/u/StevenRiosFx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn group bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                      >
                        <span className="relative inline-flex items-center">
                          Ver Análisis Públicos
                          <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                            -&gt;
                          </span>
                        </span>
                      </a>

                      <a
                        href="/blog"
                        className="btn bg-white text-gray-800 shadow hover:bg-gray-50"
                      >
                        Leer Artículos Educativos
                      </a>
                    </div>
                  </div>

                  {/* Stat */}
                  <div className="mt-8 flex-shrink-0 text-center lg:mt-0">
                    <div className="text-6xl font-bold text-blue-400 lg:text-7xl">
                      269+
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      Ideas Publicadas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer YMYL */}
            <div
              className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6 lg:mt-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="mb-3 text-sm font-semibold text-yellow-600">
                    Aviso Importante sobre el Trading
                  </h4>

                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      <strong>Disclaimer de Riesgo:</strong> El trading de activos
                      financieros (Forex, criptomonedas, acciones, commodities)
                      conlleva riesgos significativos, incluyendo la pérdida total
                      del capital invertido. Los resultados pasados, análisis
                      publicados o testimonios de estudiantes NO garantizan
                      rendimientos futuros ni son representativos de resultados
                      típicos.
                    </p>

                    <p>
                      SR Academy proporciona{" "}
                      <strong>educación y formación en trading</strong>, NO asesoría
                      financiera personalizada, gestión de carteras ni garantías
                      de ganancias. Toda decisión de inversión es responsabilidad
                      exclusiva del operador. Recomendamos operar solo con capital
                      que puedas permitirte perder y consultar con un asesor
                      financiero certificado antes de invertir.
                    </p>

                    <p>
                      La certificación CFA valida conocimiento académico en
                      análisis financiero, no garantiza resultados en trading ni
                      constituye licencia para operar cuentas de terceros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <Team />
      <Countries />
    </>
  );
}
