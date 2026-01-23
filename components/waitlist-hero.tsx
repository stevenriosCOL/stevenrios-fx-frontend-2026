"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { trackEvent } from "@/components/analytics/gtag";

export default function WaitlistHero() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrarse");
      }

      // ✅ TRACKING: Registro exitoso en waitlist
      trackEvent("generate_lead", {
        method: "waitlist_form",
        form_name: "waitlist_hero",
      });

      setSuccess(true);
      setEmail("");
      setName("");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Algo salió mal. Intenta de nuevo.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* ============================================ */}
            {/* 👥 AVATARES (Social Proof Visual)            */}
            {/* ============================================ */}
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Trader certificado SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Estudiante SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Trader profesional SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Alumno SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Trader SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Estudiante trading SR Academy"
                />
              </div>
            </div>

            {/* ============================================ */}
            {/* 🏷️ BADGE (Scarcity + Año)                   */}
            {/* ============================================ */}
            <div
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium"
              data-aos="zoom-y-out"
              data-aos-delay={100}
            >
              <span className="text-gray-700">SR ACADEMY 2026</span>
              <span className="text-gray-300 mx-1">·</span>
              <span className="inline-flex items-center gap-1.5 text-gray-500">
                <svg
                  className="w-3.5 h-3.5 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                ACCESO ANTICIPADO ACTIVO
              </span>
            </div>

            {/* ============================================ */}
            {/* 🎯 H1 PRINCIPAL (SEO Optimizado)             */}
            {/* ============================================ */}
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Aprende Trading Profesional:{" "}
              <br className="max-lg:hidden" />
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Metodología Comprobada
              </span>
            </h1>

            {/* ============================================ */}
            {/* 📄 SUBTITLE (Keywords + Value Proposition)   */}
            {/* ============================================ */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Domina <strong className="text-gray-900">análisis técnico</strong>,{" "}
                <strong className="text-gray-900"> psicología del trading</strong> y{" "}
                <strong className="text-gray-900">gestión de riesgo</strong> con
                nuestro sistema de 4 pilares.
                <br />
                <span className="text-gray-600">
                  Nueva plataforma 2026 con herramientas de IA, comunidad activa y
                  mentoría en vivo.
                </span>
                <br />
                <strong className="text-gray-900">
                  Acceso prioritario limitado: regístrate ahora.
                </strong>
              </p>

              {/* ============================================ */}
              {/* 📝 FORMULARIO WAITLIST                       */}
              {/* ============================================ */}
              {!success ? (
                <div
                  className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:border-gray-200 after:h-px after:w-full after:border-b after:border-gray-200 mb-8">
                    <div className="w-full max-w-xs mx-auto shrink-0">
                      <form onSubmit={handleSubmit} className="relative">
                        {/* Border con dots en esquinas */}
                        <div
                          className="absolute -inset-3 bg-gray-100 rounded-lg -z-10 
                            before:absolute before:inset-y-0 before:left-0 before:w-[15px] 
                            before:bg-[length:15px_15px] 
                            before:[background-position:top_center,bottom_center] 
                            before:bg-no-repeat 
                            before:[background-image:radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px)]
                            after:absolute after:inset-y-0 after:right-0 after:w-[15px] 
                            after:bg-[length:15px_15px] 
                            after:[background-position:top_center,bottom_center] 
                            after:bg-no-repeat 
                            after:[background-image:radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px)]"
                          aria-hidden="true"
                        />

                        <div className="space-y-3">
                          {/* 👤 CAMPO NOMBRE */}
                          <div>
                            <label className="sr-only" htmlFor="name">
                              Nombre completo
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 text-gray-500/70 pl-4 flex items-center pointer-events-none">
                                <svg
                                  className="fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                              </div>
                              <input
                                id="name"
                                className="form-input text-sm w-full pl-10 pr-4"
                                type="text"
                                placeholder="Tu nombre completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                minLength={2}
                                maxLength={80}
                                pattern="[A-Za-zÀ-ÿ\s]{2,80}"
                                title="Nombre debe tener entre 2 y 80 caracteres (solo letras)"
                              />
                            </div>
                          </div>

                          {/* ✉️ CAMPO EMAIL */}
                          <div>
                            <label className="sr-only" htmlFor="email">
                              Email
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 text-gray-500/70 pl-4 flex items-center pointer-events-none">
                                <svg
                                  className="fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={14}
                                >
                                  <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                                </svg>
                              </div>
                              <input
                                id="email"
                                className="form-input text-sm w-full pl-10 pr-4"
                                type="email"
                                placeholder="tu@email.com (privado y seguro)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                maxLength={254}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Ingresa un email válido"
                              />
                            </div>
                          </div>

                          {/* 🎯 CTA BUTTON */}
                          <div>
                            <button
                              type="submit"
                              disabled={loading}
                              className="btn w-full bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                              {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                  <svg
                                    className="animate-spin h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    />
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                  </svg>
                                  Registrando...
                                </span>
                              ) : (
                                <span className="flex items-center justify-center gap-2">
                                  Reservar Acceso Prioritario 2026
                                  <svg
                                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                  </svg>
                                </span>
                              )}
                            </button>
                          </div>

                          {/* 🔒 TRUST BADGES */}
                          <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <svg
                                className="w-3.5 h-3.5 text-emerald-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Datos 100% seguros
                            </span>
                            <span className="text-gray-300">•</span>
                            <span>Sin spam</span>
                          </div>

                          {/* ❌ ERROR MESSAGE */}
                          {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                              <p className="text-sm text-red-800 text-center flex items-center justify-center gap-2">
                                <svg
                                  className="w-4 h-4 shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {error}
                              </p>
                            </div>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                /* ✅ MENSAJE DE ÉXITO */
                <div
                  className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:border-gray-200 after:h-px after:w-full after:border-b after:border-gray-200 mb-8">
                    <div className="w-full max-w-xs mx-auto shrink-0">
                      <div className="relative">
                        <div
                          className="absolute -inset-3 bg-gray-100 rounded-lg -z-10 
                            before:absolute before:inset-y-0 before:left-0 before:w-[15px] 
                            before:bg-[length:15px_15px] 
                            before:[background-position:top_center,bottom_center] 
                            before:bg-no-repeat 
                            before:[background-image:radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px)]
                            after:absolute after:inset-y-0 after:right-0 after:w-[15px] 
                            after:bg-[length:15px_15px] 
                            after:[background-position:top_center,bottom_center] 
                            after:bg-no-repeat 
                            after:[background-image:radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,rgb(107_114_128)_1.5px,transparent_1.5px)]"
                          aria-hidden="true"
                        />

                        <div className="relative bg-white rounded-lg p-8 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 mb-4 animate-[scale-in_0.3s_ease-out]">
                            <svg
                              className="w-8 h-8 text-white animate-[check_0.5s_ease-out_0.2s_both]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            ¡Acceso Prioritario Confirmado! 🎉
                          </h3>

                          <p className="text-sm text-gray-600 mb-3">
                            <strong>Revisa tu email</strong> (incluso spam/promociones).
                            <br />
                            Te enviamos información exclusiva del lanzamiento.
                          </p>

                          <div className="bg-gray-50 rounded-lg p-3 mb-6">
                            <p className="text-xs text-gray-700 font-medium">
                              ✓ Eres de los primeros en la lista
                              <br />
                              ✓ Acceso antes que el público general
                              <br />
                              ✓ Beneficios exclusivos para early adopters
                            </p>
                          </div>

                          {/* ✅ FIX: faltaba el <a ...> */}
                          <a
                            href="https://wa.me/573006926613?text=Hola%20Steven%2C%20acabo%20de%20registrarme%20en%20la%20waitlist%20de%20SR%20Academy%202026%20%F0%9F%9A%80%20%C2%BFCu%C3%A1ndo%20es%20el%20lanzamiento%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackEvent("contact", {
                                method: "whatsapp",
                                link_url: "https://wa.me/573006926613",
                                location: "waitlist_success",
                              })
                            }
                            className="btn inline-flex items-center gap-2 bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            ¿Dudas? Escríbeme por WhatsApp
                          </a>

                          <p className="text-xs text-gray-500 mt-4">
                            Respondo personalmente 💬
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SOCIAL PROOF */}
              <div className="max-w-3xl mx-auto">
                <div className="text-center">
                  <p
                    className="text-sm text-gray-500"
                    data-aos="zoom-y-out"
                    data-aos-delay={500}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Únete a los{" "}
                      <span className="text-gray-700 font-semibold">2,000+</span>{" "}
                      traders que ya transformaron su operativa
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,theme(colors.gray.600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  www.stevenriosfx.com
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  Sistema de 4 Pilares: Análisis + Psicología + Riesgo + Estrategia
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  IA + Automatización + Mentoría en Vivo
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Plataforma 2026: Herramientas profesionales
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Comunidad activa de traders reales
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  +2,000 traders certificados esperando el lanzamiento
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Acceso prioritario limitado: regístrate ahora 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

