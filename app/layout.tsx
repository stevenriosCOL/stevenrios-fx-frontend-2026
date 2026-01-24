import "./css/style.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// 🎯 METADATA CENTRALIZADA
import { metadata as globalMetadata } from "./metadata";

// 🏢 SCHEMA REUTILIZABLE
import { organizationSchema } from "@/utils/schemas/organization";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ✅ EXPORTAR METADATA
export const metadata = globalMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ============================================
  // 🏢 SCHEMA.ORG (ahora viene de utils/schemas)
  // ============================================
  const jsonLd = organizationSchema();

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

