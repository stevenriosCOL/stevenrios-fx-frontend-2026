import type { Metadata } from "next";

export const metadata: Metadata = {
  // ============================================
  // 🔗 BASE URL (CON WWW)
  // ============================================
  metadataBase: new URL("https://www.stevenriosfx.com"),

  // ============================================
  // 🔍 SEO BÁSICO
  // ============================================
  title: {
    default: "SR Academy: Curso Trading Profesional | +2,000 Traders Certificados",
    template: "%s | SR Academy",
  },
  description:
    "Aprende trading profesional con metodología estructurada: análisis técnico, psicología del trading y gestión de riesgo. +2,000 alumnos. Mentoría en vivo, comunidad activa y sistema comprobado. Sin promesas vacías, solo ejecución real.",

  // ============================================
  // 🏷️ KEYWORDS
  // ============================================
  keywords: [
    "trading profesional",
    "curso trading",
    "psicología del trading",
    "análisis técnico",
    "gestión de riesgo",
    "trading forex",
    "trading oro XAUUSD",
    "trading criptomonedas",
    "academia trading",
    "SR Academy",
    "Steven Rios",
    "fibonacci trading",
    "mentoría trading",
    "curso trading Colombia",
  ],

  // ============================================
  // ✍️ AUTORÍA
  // ============================================
  authors: [{ name: "Steven Rios", url: "https://www.stevenriosfx.com/about" }],
  creator: "Steven Rios",
  publisher: "SR Academy",

  // ============================================
  // 🌍 OPEN GRAPH
  // ============================================
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.stevenriosfx.com",
    siteName: "SR Academy",
    title: "SR Academy: Aprende Trading Profesional Sin Promesas Vacías",
    description:
      "Metodología de 4 pilares: análisis técnico + gestión de riesgo + psicología + estrategia. +2,000 traders formados. Sistema real, sin humo.",
    images: [
      {
        url: "/images/og-image.jpg", // ✅ Existe en /public/images/og-image.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "SR Academy - Curso de Trading Profesional con Steven Rios",
        type: "image/jpeg",
      },
    ],
  },

  // ============================================
  // 🐦 TWITTER / X
  // ============================================
  twitter: {
    card: "summary_large_image",
    site: "@stevenriosfx",
    creator: "@stevenriosfx",
    title: "SR Academy: Trading Profesional | +2,000 Traders Formados",
    description:
      "Metodología estructurada con análisis técnico, psicología del trading y gestión de riesgo. Sin promesas vacías.",
    images: ["/images/og-image.jpg"],
  },

  // ============================================
  // 🤖 ROBOTS
  // ============================================
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ============================================
  // 🔗 CANONICAL + LANG (forzar WWW)
  // ============================================
  alternates: {
    canonical: "https://www.stevenriosfx.com",
    languages: {
      "es-CO": "https://www.stevenriosfx.com",
    },
  },

  // ============================================
  // ✅ VERIFICACIÓN GOOGLE SEARCH CONSOLE
  // ============================================
  verification: {
    google: "o1yixiRBB8xYhEbOGc24fEaxNcrY2mq6eMCRnUFfzUw",
  },

  // ============================================
  // 🧩 ICONS (favicons)
  // ============================================
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ============================================
  // 🎨 BRANDING / PWA
  // ============================================
  applicationName: "SR Academy",
  category: "Education",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SR Academy",
  },
  formatDetection: { telephone: false },
};
