export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "SR Academy",
  alternateName: "Steven Rios FX",
  description:
    "Academia de trading profesional especializada en Forex, Oro (XAUUSD) y Criptomonedas. Metodología con psicología del trading y gestión de riesgo.",
  url: "https://www.stevenriosfx.com",
  logo: "https://www.stevenriosfx.com/images/logo-sr-academy-2026.svg",
  image: "https://www.stevenriosfx.com/images/og-image.jpg",
  
  sameAs: [
    "https://instagram.com/stevenrios.fx",
    "https://instagram.com/sracademyoficial",
    "https://kick.com/stevenriosfx",
    "https://es.tradingview.com/u/StevenRiosFx",
  ],
  
  founder: {
    "@type": "Person",
    name: "Steven Rios",
    url: "https://www.stevenriosfx.com/about",
    jobTitle: "Trader Profesional y Fundador de SR Academy",
    sameAs: [
      "https://instagram.com/stevenrios.fx",
      "https://es.tradingview.com/u/StevenRiosFx",
    ],
  },
  
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
  
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "487",
    bestRating: "5",
    worstRating: "1",
  },
})