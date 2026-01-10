import "./css/style.css";

import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SR Academy | Trading, Cripto y Finanzas",
  description:
    "Formación completa en trading, criptomonedas, psicología del trader y finanzas personales. Más de 2,000 estudiantes en 60+ países.",
  // ✅ AGREGADO: Verificación de Google Search Console
  verification: {
    google: "o1yixiRBB8xYhEbOGc24fEaxNcrY2mq6eMCRnUFfzUw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SR Academy",
    description:
      "Academia de trading profesional especializada en Forex, Oro y Criptomonedas",
    url: "https://stevenriosfx.com",
    logo: "https://stevenriosfx.com/images/logo-sr-academy-2026.svg",
    sameAs: [
      "https://instagram.com/stevenrios.fx",
      "https://instagram.com/sracademyoficial",
      "https://kick.com/stevenriosfx",
      "https://es.tradingview.com/u/StevenRiosFx",
    ],
    founder: {
      "@type": "Person",
      name: "Steven Rios",
    },
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/* JSON-LD Schema (Rich Snippets) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}

