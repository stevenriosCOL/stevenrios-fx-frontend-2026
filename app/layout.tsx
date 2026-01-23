import "./css/style.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// 🎯 IMPORTAR METADATA DESDE ARCHIVO CENTRALIZADO
import { metadata as globalMetadata } from "./metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ✅ EXPORTAR METADATA (viene del archivo metadata.ts)
export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ============================================
  // 🏢 SCHEMA.ORG (Rich Snippets Google)
  // ============================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SR Academy",
    alternateName: "Steven Rios FX",
    description:
      "Academia de trading profesional especializada en Forex, Oro (XAUUSD) y Criptomonedas. Metodología con psicología del trading y gestión de riesgo.",
    url: "https://www.stevenriosfx.com",
    logo: "https://www.stevenriosfx.com/images/logo-sr-academy-2026.svg",
    image: "https://www.stevenriosfx.com/images/og-image.jpg",
    
    // 🌍 REDES SOCIALES
    sameAs: [
      "https://instagram.com/stevenrios.fx",
      "https://instagram.com/sracademyoficial",
      "https://kick.com/stevenriosfx",
      "https://es.tradingview.com/u/StevenRiosFx",
    ],
    
    // 👤 FUNDADOR
    founder: {
      "@type": "Person",
      name: "Steven Rios",
      url: "https://www.stevenriosfx.com/about",
      sameAs: [
        "https://instagram.com/stevenrios.fx",
        "https://es.tradingview.com/u/StevenRiosFx",
      ],
    },
    
    // 📍 UBICACIÓN (si aplica, ajusta o elimina)
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    
    // ⭐ RATING (si tienes reseñas verificables)
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "487",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/* ============================================ */}
        {/* 🎯 JSON-LD SCHEMA (Rich Snippets Google)     */}
        {/* ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>

        {/* ============================================ */}
        {/* 📊 GOOGLE ANALYTICS                          */}
        {/* ============================================ */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

