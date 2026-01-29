"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

// Mockups
import MockupMain from "@/public/images/mockup-offer-inside.png";
import MockupBonus from "@/public/images/mockup-bonus-course.png";
import MockupWhatsApp from "@/public/images/mockup-whatsapp-access.png";
import MockupExercises from "@/public/images/mockup-book-exercises.png";

export default function OfferSection() {
  const TOTAL_SECONDS = 3600 * 6; // 6h urgency
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

  // ✅ Link COMBO
  const WHATSAPP_COMBO = "https://wa.link/x84llp";

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const { hours, minutes, seconds } = useMemo(() => {
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;
    return { hours: h, minutes: m, seconds: s };
  }, [timeLeft]);

  return (
    <section id="offer" className="relative overflow-hidden bg-slate-900">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute -bottom-56 left-1/4 h-[520px] w-[520px] rounded-full bg-blue-400/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        {/* Header CON BADGE */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-12">
          <div className="inline-flex bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-semibold mb-3">
            Oferta de lanzamiento (Combo Premium)
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Recibe todo esto hoy mismo
          </h2>

          <p className="text-lg text-slate-400">
            Esto no es “solo un libro”. Es un sistema completo para reprogramar tu mente de trader.
          </p>
        </div>

        {/* MOSAICO DE MOCKUPS */}
        <div className="mx-auto max-w-4xl mb-12 md:mb-14">
          <div className="relative aspect-[4/3] w-full">
            {/* Principal (centro) */}
            <figure className="relative mx-auto z-10" style={{ width: "82%", maxWidth: 860 }}>
              <div className="relative -rotate-2 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/30 shadow-2xl">
                <Image
                  src={MockupMain}
                  width={1600}
                  height={1000}
                  alt="Contenido completo"
                  className="h-auto w-full object-cover"
                  quality={100}
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>
            </figure>

            {/* Bonus (top-right) */}
            <figure
              className="absolute h-auto z-20"
              style={{ top: "7%", right: 0, width: "32.56%", maxWidth: 320 }}
            >
              <div className="relative rotate-2 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/30 shadow-xl">
                <Image
                  src={MockupBonus}
                  width={900}
                  height={1200}
                  alt="Bonus +12 horas"
                  className="h-auto w-full object-cover"
                  quality={100}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>
            </figure>

            {/* WhatsApp (encima del main) */}
            <figure
              className="absolute h-auto z-30"
              style={{ top: "44%", left: "7%", width: "25.53%", maxWidth: 260 }}
            >
              <div className="relative -rotate-2 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/30 shadow-xl">
                <Image
                  src={MockupWhatsApp}
                  width={900}
                  height={1200}
                  alt="WhatsApp Inteligente"
                  className="h-auto w-full object-cover"
                  quality={100}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>
            </figure>

            {/* Exercises (bottom-right) */}
            <figure
              className="absolute h-auto z-20"
              style={{ bottom: 0, right: "18%", width: "25.53%", maxWidth: 260 }}
            >
              <div className="relative rotate-2 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/30 shadow-lg">
                <Image
                  src={MockupExercises}
                  width={900}
                  height={1200}
                  alt="Ejercicios del libro"
                  className="h-auto w-full object-cover opacity-85"
                  quality={100}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>
            </figure>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-slate-700/60 bg-slate-800/40 p-7 md:p-9">
            {/* Headline */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                Esto es lo que recibes en el Combo Premium
              </h3>
              <p className="mt-2 text-slate-400">
                No es “otro PDF”. Es un sistema listo para ejecutar, medir progreso y sostener disciplina.
              </p>
            </div>

            {/* Bundle cards */}
            <div className="mt-8 grid gap-4">
              <BundleCard
                title="Libro completo (PDF Premium)"
                tag="Principal"
                text="30 días con enfoque psicológico, estructura diaria y ejercicios accionables."
                bullets={[
                  "Rutina diaria de ejecución (sin depender de motivación)",
                  "Reprogramación de hábitos bajo presión",
                  "Lectura rápida, aplicación inmediata",
                ]}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <BundleCard
                  title="BONUS: Audiolibro (Acceso inmediato)"
                  tag="Bonus"
                  text="Escúchalo cuando quieras: caminando, en el gym o antes de operar."
                  bullets={[
                    "Refuerzo diario sin esfuerzo",
                    "Ideal para interiorizar conceptos",
                  ]}
                />
                <BundleCard
                  title="BONUS: GPT SR FX Trading Brain"
                  tag="Bonus"
                  text="Asistente profesional de trading para pensar y ejecutar como institucional."
                  bullets={[
                    "Estructura de proceso (sin señales)",
                    "Checklist de riesgo y contexto",
                  ]}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <BundleCard
                  title="BONUS: Curso gratuito +12 horas"
                  tag="Bonus"
                  text={'Formación complementaria para que entiendas el "por qué" detrás del sistema.'}
                  bullets={[
                    "Refuerza criterio y claridad",
                    "Evita saltar de estrategia en estrategia",
                  ]}
                />
                <BundleCard
                  title="WhatsApp Inteligente de Estudiantes"
                  tag="Soporte"
                  text="Acceso al canal donde puedes resolver dudas y avanzar más rápido."
                  bullets={[
                    "Respuestas rápidas y guía",
                    "Para todos los compradores",
                  ]}
                />
              </div>

              <BundleCard
                title="Ejercicios prácticos guiados"
                tag="Acción"
                text="No es lectura pasiva: es implementación real con seguimiento."
                bullets={[
                  "Ejercicios diarios",
                  "Tracking de progreso",
                  "Enfoque en disciplina y ejecución",
                ]}
              />
            </div>

            {/* Precio ancla */}
            <div className="mt-8 rounded-2xl border border-slate-700/60 bg-slate-900/35 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm text-slate-400">Valor total del paquete</p>
                  <p className="text-2xl font-bold text-slate-200 line-through decoration-slate-500/60">
                    $44.98
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold text-blue-300">Hoy (lanzamiento)</p>
                  <p className="text-4xl md:text-5xl font-bold text-slate-100">
                    $29<span className="text-2xl text-slate-300">.99</span>
                  </p>
                  <p className="text-sm text-slate-400">
                    Ahorras <span className="font-semibold text-blue-300">$14.99</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/35 p-5">
              <p className="text-sm text-slate-400 mb-2 text-center">
                Precio de lanzamiento termina en:
              </p>
              <div className="flex items-center justify-center gap-3 font-bold">
                <TimePill value={hours.toString().padStart(2, "0")} />
                <span className="text-slate-500">:</span>
                <TimePill value={minutes.toString().padStart(2, "0")} />
                <span className="text-slate-500">:</span>
                <TimePill value={seconds.toString().padStart(2, "0")} />
              </div>
            </div>

            {/* COMPROMISO SR ACADEMY */}
            <div className="mt-6 rounded-2xl border border-blue-700/40 bg-blue-950/20 p-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg className="h-10 w-10 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-100 mb-1">Compromiso SR Academy</p>
                  <p className="text-slate-300">
                    Si después de aplicar el sistema sientes que algo no te queda claro,{" "}
                    <strong className="text-slate-100">tienes acceso directo al soporte</strong>{" "}
                    para resolver cualquier duda sobre implementación.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      WhatsApp de estudiantes incluido
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      +12 horas de curso complementario
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Actualizaciones gratuitas del contenido
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="btn group bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                href={WHATSAPP_COMBO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center">
                  Obtener el Combo ahora
                  <span className="ml-1 text-blue-300 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </a>

              <button
                className="btn bg-white text-gray-800 shadow hover:bg-gray-50"
                onClick={() => document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Vista Previa
              </button>
            </div>

            {/* Micro-copy */}
            <p className="mt-5 text-center text-sm text-slate-500">
              Todo es digital. Acceso inmediato tras la compra.
              <br />
              <span className="text-slate-400">No esperas envíos. Empiezas hoy mismo.</span>
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Pago seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">Entrega inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <span className="text-sm">Soporte incluido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function TimePill({ value }: { value: string }) {
  return (
    <div className="min-w-[64px] rounded-xl border border-slate-700/60 bg-slate-900/40 px-3 py-2 text-center text-xl text-blue-300 shadow-inner">
      {value}
    </div>
  );
}

function BundleCard({
  title,
  tag,
  text,
  bullets,
}: {
  title: string;
  tag: string;
  text: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg md:text-xl font-bold text-slate-100">{title}</div>
          <div className="mt-1 text-slate-400">{text}</div>
        </div>

        <div className="shrink-0">
          <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 text-xs font-semibold text-blue-200">
            {tag}
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {bullets.map((b, i) => (
          <div key={i} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
              ✓
            </span>
            <div className="text-slate-300">{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
}




