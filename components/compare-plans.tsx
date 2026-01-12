import Tooltip from "@/components/tooltip";

export default function ComparePlans() {
  return (
    <section>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Compara las membresías
            </h2>
            <p className="text-lg text-gray-700">
              Todas incluyen psicología del trading. Elige según tu nivel y
              objetivos.
            </p>
          </div>

          <div className="mx-auto grid max-w-sm max-md:gap-6 md:-mx-6 md:max-w-none md:grid-cols-5">
            {/* Column with labels */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              {/* Empty cell */}
              <div />

              {/* # Contenido Base */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-1"
                aria-hidden="true"
              >
                <div className="mb-2 mt-5 font-bold text-gray-900">
                  Contenido Base
                </div>
              </div>

              {/* Escuela GOLD */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-2"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Escuela GOLD + Fundamentos
                </div>
              </div>

              {/* Psicología */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-3"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Psicología + Mindset
                </div>
              </div>

              {/* Finanzas */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-4"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Finanzas + Fintech + Crypto básico
                </div>
              </div>

              {/* # Trading Avanzado */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-5"
                aria-hidden="true"
              >
                <div className="mb-2 mt-5 font-bold text-gray-900">
                  Trading Avanzado
                </div>
              </div>

              {/* Crypto Mastery */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-6"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Crypto Mastery avanzado
                </div>
              </div>

              {/* Trading PRO */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-7"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Trading PRO avanzado
                </div>
              </div>

              {/* Estrategia completa */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-8"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Maestría 0-6 Cifras + 2025
                </div>
              </div>

              {/* Prop Firms */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-9"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Prop Firm PRO (fondeo real)
                </div>
              </div>

              {/* # Mentoría y Soporte */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-10"
                aria-hidden="true"
              >
                <div className="mb-2 mt-5 font-bold text-gray-900">
                  Mentoría y Soporte
                </div>
              </div>

              {/* Sesiones grupales */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-11"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Sesiones grupales en vivo
                </div>
              </div>

              {/* Chat WhatsApp */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-12"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Chat WhatsApp soporte
                </div>
              </div>

              {/* Sesiones 1-1 */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-13"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Sesiones 1-1 con Steven
                </div>
              </div>

              {/* Duración */}
              <div
                className="flex flex-col justify-end px-6 max-md:hidden md:order-14"
                aria-hidden="true"
              >
                <div className="border-b border-gray-200 py-4 text-sm text-gray-700">
                  Duración acceso
                </div>
              </div>
            </section>
            {/* End: Column with labels */}

            {/* ACADEMY table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium text-gray-900">Academy</div>
                  <div>
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
              </div>

              {/* # Contenido Base */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Contenido Base
                </div>
              </div>

              {/* Escuela */}
              <div className="flex flex-col justify-end px-6 md:order-2">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Escuela</span>
                </div>
              </div>

              {/* Psicología */}
              <div className="flex flex-col justify-end px-6 md:order-3">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Psicología</span>
                </div>
              </div>

              {/* Finanzas */}
              <div className="flex flex-col justify-end px-6 md:order-4">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                  <span className="md:sr-only">Finanzas</span>
                </div>
              </div>

              {/* # Trading Avanzado */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Trading Avanzado
                </div>
              </div>

              {/* Crypto */}
              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">Crypto</span>
                </div>
              </div>

              {/* Trading PRO */}
              <div className="flex flex-col justify-end px-6 md:order-7">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">Trading PRO</span>
                </div>
              </div>

              {/* Maestría */}
              <div className="flex flex-col justify-end px-6 md:order-8">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">Maestría</span>
                </div>
              </div>

              {/* Prop Firms */}
              <div className="flex flex-col justify-end px-6 md:order-9">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">Prop Firms</span>
                </div>
              </div>

              {/* # Mentoría */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Mentoría
                </div>
              </div>

              {/* Grupales */}
              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">Grupales</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col justify-end px-6 md:order-12">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">WhatsApp</span>
                </div>
              </div>

              {/* 1-1 */}
              <div className="flex flex-col justify-end px-6 md:order-13">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only">
                  <span className="md:sr-only">1-1</span>
                </div>
              </div>

              {/* Duración */}
              <div className="flex flex-col justify-end px-6 md:order-14">
                <div className="h-full border-b border-gray-200 py-4 text-sm text-gray-700">
                  12 meses
                </div>
              </div>
            </section>
            {/* End: ACADEMY table */}

            {/* PROFESSIONAL table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium text-gray-900">
                    Professional
                  </div>
                  <div>
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
              </div>

              {/* # Contenido Base */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Contenido Base
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-2">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-3">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-4">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              {/* # Trading Avanzado */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Trading Avanzado
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-7">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only" />
              </div>

              <div className="flex flex-col justify-end px-6 md:order-8">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only" />
              </div>

              <div className="flex flex-col justify-end px-6 md:order-9">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only" />
              </div>

              {/* # Mentoría */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Mentoría
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-12">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-13">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700 max-md:sr-only" />
              </div>

              <div className="flex flex-col justify-end px-6 md:order-14">
                <div className="h-full border-b border-gray-200 py-4 text-sm text-gray-700">
                  18 meses
                </div>
              </div>
            </section>
            {/* End: PROFESSIONAL table */}

            {/* MASTER table - DESTACADA */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl [&>div]:bg-gray-800">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium text-gray-200">Master</div>
                  <div>
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
              </div>

              {/* # Contenido Base */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                  Contenido Base
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-2">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-3">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-4">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              {/* # Trading Avanzado */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                  Trading Avanzado
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-6">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-7">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-8">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-9">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm max-md:sr-only" />
              </div>

              {/* # Mentoría */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="mb-2 mt-5 font-bold text-gray-200 md:sr-only">
                  Mentoría
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-11">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-12">
                <div className="flex h-full items-center border-b border-gray-600 py-4 text-sm">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-13">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  18 (3/mes x 6 meses)
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 text-gray-300 md:order-14">
                <div className="h-full border-b border-gray-600 py-4 text-sm">
                  24 meses
                </div>
              </div>
            </section>
            {/* End: MASTER table */}

            {/* ELITE table */}
            <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-5 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
              <div className="relative flex flex-col justify-end px-6">
                <div className="grow">
                  <div className="mb-5 font-medium text-gray-900">Elite</div>
                  <div>
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

              {/* # Contenido Base */}
              <div className="flex flex-col justify-end px-6 md:order-1">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Contenido Base
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-2">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-3">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-4">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              {/* # Trading Avanzado */}
              <div className="flex flex-col justify-end px-6 md:order-5">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Trading Avanzado
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-6">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-7">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-8">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-9">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              {/* # Mentoría */}
              <div className="flex flex-col justify-end px-6 md:order-10">
                <div className="mb-2 mt-5 font-bold text-gray-900 md:sr-only">
                  Mentoría
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-11">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-12">
                <div className="flex h-full items-center border-b border-gray-200 py-4 text-sm text-gray-700">
                  <svg
                    className="mr-3 shrink-0 fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={9}
                  >
                    <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-13">
                <div className="h-full border-b border-gray-200 py-4 text-sm text-gray-700">
                  48 (4/mes x 12 meses)
                </div>
              </div>

              <div className="flex flex-col justify-end px-6 md:order-14">
                <div className="h-full border-b border-gray-200 py-4 text-sm text-gray-700">
                  3 años
                </div>
              </div>
            </section>
            {/* End: ELITE table */}
          </div>
        </div>
      </div>
    </section>
  );
}

