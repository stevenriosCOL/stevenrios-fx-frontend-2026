"use client";

import { useEffect } from "react";
import Script from "next/script";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />

      {/* Elfsight AI Chatbot | SR ACADEMY - Chat Web IA */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-b16f2b5a-e5d8-435f-8eb7-043c8629fd71"
        data-elfsight-app-lazy
      />
    </>
  );
}

