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
            {/* Avatars con borde */}
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
                  alt="Trader SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Trader SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Trader SR Academy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Trader SR Academy"
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
                  alt="Trader SR Academy"
                />
              </div>
            </div>

            {/* Badge COMING SOON */}
            <div
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium"
              data-aos="zoom-y-out"
              data-aos-delay={100}
            >
              <span className="text-gray-700">SR ACADEMY 2026</span>
              <span className="text-gray-300 mx-1">·</span>
              <span className="text-gray-500">COMING SOON</span>
            </div>

            {/* Título principal */}
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              El Trading Evoluciona.{" "}
              <br className="max-lg:hidden" />
              Tú También.
            </h1>

            {/* Descripción */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Nueva plataforma. Nuevas herramientas. Nuevo sistema completo de
                dominio financiero.
                <br />
                <strong className="text-gray-900">
                  Sé de los primeros en acceder cuando lancemos oficialmente.
                </strong>
              </p>

              {/* FORMULARIO ESTILO CRUIP */}
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
                          {/* Campo Nombre */}
                          <div>
                            <label className="sr-only" htmlFor="name">
                              Nombre
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
                                placeholder="Tu nombre..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          {/* Campo Email */}
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
                                placeholder="tu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          {/* Botón - COLOR AZUL IGUAL QUE "COMENZAR" */}
                          <div>
                            <button
                              type="submit"
                              disabled={loading}
                              className="btn w-full bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {loading ? "Registrando..." : "Únete a la Waitlist"}
                            </button>
                          </div>

                          {/* Error */}
                          {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                              <p className="text-sm text-red-800 text-center">
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
                /* Mensaje de éxito - MANTIENE ESTILO DEL FORMULARIO */
                <div
                  className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:border-gray-200 after:h-px after:w-full after:border-b after:border-gray-200 mb-8">
                    <div className="w-full max-w-xs mx-auto shrink-0">
                      <div className="relative">
                        {/* Mismo border con dots en esquinas */}
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

                        {/* Contenido del mensaje */}
                        <div className="relative bg-white rounded-lg p-8 text-center">
                          {/* Check verde */}
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 mb-4">
                            <svg
                              className="w-8 h-8 text-white"
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
                            ¡Bienvenido a bordo! 🎉
                          </h3>

                          <p className="text-sm text-gray-600 mb-3">
                            Revisa tu email. Te enviamos información importante.
                          </p>

                          <p className="text-xs text-gray-500 mb-6">
                            Serás de los primeros en conocer el lanzamiento.
                          </p>

                          {/* ✅ TRACKING: Click en WhatsApp después de registro */}
                          <a
                            href="https://wa.me/573006926613?text=Hola%20Steven%2C%20me%20registré%20en%20la%20waitlist%20🚀"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackEvent("contact", {
                                method: "whatsapp",
                                link_url: "https://wa.me/573006926613",
                                location: "waitlist_success",
                              })
                            }
                            className="btn inline-flex items-center gap-2 bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Háblame por WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Social proof */}
              <div className="max-w-3xl mx-auto">
                <div className="text-center">
                  <p
                    className="text-sm text-gray-500"
                    data-aos="zoom-y-out"
                    data-aos-delay={500}
                  >
                    Únete a los{" "}
                    <span className="text-gray-700 font-medium">500+</span>{" "}
                    traders que ya están esperando.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image - MANTIENE EL CÓDIGO ANIMADO */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,theme(colors.gray.600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  stevenriosfx.com
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  SR Academy 2026: Nueva Era del Trading
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  IA + Psicología + Estrategia = Dominio Total
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Plataforma completamente reconstruida
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Herramientas que funcionan en automático
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  2,000+ traders esperando el lanzamiento
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Sé de los primeros en acceder 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
