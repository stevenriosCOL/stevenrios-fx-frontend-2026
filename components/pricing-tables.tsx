"use client";

import PageIllustration from "@/components/page-illustration";

export default function PricingTables() {
  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Elige tu nivel de transformación
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-700">
                4 programas diseñados para llevarte de principiante a trader
                profesional. Todos incluyen psicología del trading como pilar
                fundamental.
              </p>
            </div>
          </div>

          {/* Pricing tables */}
          <div>
            <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
              {/* Pricing table 1 - ACADEMY */}
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mb-1 font-medium text-gray-900 underline decoration-gray-300 underline-offset-4">
                    Academy
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold text-gray-900">$</span>
                    <span className="text-4xl font-bold tabular-nums text-gray-900">
                      497
                    </span>
                    <span className="pl-1 text-sm text-gray-600">
                      /pago único
                    </span>
                  </div>
                  <div className="mb-3 grow text-sm text-gray-700">
                    <strong>Domina tu mente antes de tocar el mercado.</strong>
                    <br />
                    Acceso 12 meses. Ideal para principiantes.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Escuela GOLD completa (básico a avanzado)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Psicología del trading + control emocional</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Centro de meditación (técnicas completas)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Finanzas personales básicas</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Grupo privado Telegram</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Actualizaciones incluidas</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Certificado de finalización</span>
                  </li>
                </ul>
                <div className="mt-6">
<a
  className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
  href="https://wa.me/573006926613?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20Plan%20Academy"
  target="_blank"
  rel="noopener noreferrer"
>
  Comenzar Ahora
</a>

                </div>
              </div>

              {/* Pricing table 2 - PROFESSIONAL */}
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mb-1 font-medium text-gray-900 underline decoration-gray-300 underline-offset-4">
                    Professional
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold text-gray-900">$</span>
                    <span className="text-4xl font-bold tabular-nums text-gray-900">
                      997
                    </span>
                    <span className="pl-1 text-sm text-gray-600">
                      /pago único
                    </span>
                  </div>
                  <div className="mb-3 grow text-sm text-gray-700">
                    <strong>De inconsistente a rentable.</strong>
                    <br />
                    Acceso 18 meses. Incluye Crypto + XAUUSD.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <strong>Todo de Academy +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Crypto Mastery completo (básico a avanzado)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Futuros de criptomonedas</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Financial Master (cuentas fondeadas)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Estrategia XAUUSD completa</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Fibonacci intermedio</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>2 sesiones en vivo mensuales</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Chat directo WhatsApp soporte</span>
                  </li>
                </ul>
                <div className="mt-6">
<a
  className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
  href="https://wa.me/573006926613?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20Plan%20Professional"
  target="_blank"
  rel="noopener noreferrer"
>
  Comenzar Ahora
</a>

                </div>
              </div>

              {/* Pricing table 3 - MASTER */}
              <div className="relative flex h-full flex-col rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-700 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mb-1 font-medium text-gray-200 underline decoration-gray-600 underline-offset-4">
                    Master
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-600 pb-4">
                    <span className="text-2xl font-bold text-gray-200">$</span>
                    <span className="text-4xl font-bold tabular-nums text-gray-200">
                      1,997
                    </span>
                    <span className="pl-1 text-sm text-gray-400">
                      /pago único
                    </span>
                  </div>
                  <div className="mb-3 text-sm text-gray-300">
                    <strong className="text-gray-100">
                      Formación completa para trader profesional.
                    </strong>
                    <br />
                    Acceso 24 meses. Volúmenes institucionales.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span className="text-gray-300">
                      <strong>Todo de Professional +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Maestría 0-6 Cifras (volúmenes grandes)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Fibonacci avanzado institucional</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>E-book exclusivo Fibonacci</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Manipulación de mercado institucional</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Liquidez bancaria (timing perfecto)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>4 sesiones en vivo mensuales</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>3 sesiones personalizadas grupales</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Certificado SR Academy</span>
                  </li>
                </ul>
                <div className="mt-6">
<a
  className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
  href="https://wa.me/573006926613?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20Plan%20Master"
  target="_blank"
  rel="noopener noreferrer"
>
  Comenzar Ahora
</a>

                </div>
              </div>

              {/* Pricing table 4 - ELITE */}
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-lg shadow-black/[0.03] backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mb-1 font-medium text-gray-900 underline decoration-gray-300 underline-offset-4">
                    Elite
                  </div>
                  <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                    <span className="text-2xl font-bold text-gray-900">$</span>
                    <span className="text-4xl font-bold tabular-nums text-gray-900">
                      2,997
                    </span>
                    <span className="pl-1 text-sm text-gray-600">
                      /pago único
                    </span>
                  </div>
                  <div className="mb-3 grow text-sm text-gray-700">
                    <strong>Mentoría directa con Steven.</strong>
                    <br />
                    Acceso 3 años. Atención personalizada 1-1.
                  </div>
                </div>
                <ul className="grow space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>
                      <strong>Todo de Master +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Maestría 2025 Actualizada</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>10 sesiones 1-1 privadas con Steven</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Mentoría WhatsApp directa (3 meses)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Revisión de tus trades personales</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Plan de trading personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Red privada traders ÉLITE</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Descuentos futuros programas (50%)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-3 w-3 shrink-0 fill-current text-emerald-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Certificación avanzada</span>
                  </li>
                </ul>
                <div className="mt-6">
<a
  className="btn-sm w-full rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-1.5 text-white shadow-sm hover:bg-[length:100%_150%]"
  href="https://wa.me/573006926613?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20el%20Plan%20Elite"
  target="_blank"
  rel="noopener noreferrer"
>
  Comenzar Ahora
</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


