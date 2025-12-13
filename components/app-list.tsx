import Link from "next/link";
import AppCard from "@/components/app-card";
import CourseImg from "@/public/images/logo-001.svg"; // Imagen genérica para todos los cursos

export default function AppList() {
  const cursosTrading = [
    {
      name: "Escuela de Trading",
      description:
        "Aprende desde cero qué es el trading y construye una base sólida, incluso si hoy no tienes experiencia ni conocimientos previos.",
      image: CourseImg,
      link: "/pricing",
      badge: true,
    },
    {
      name: "Mentorías de Conceptos Esenciales",
      description:
        "Perfecto si llevas poco tiempo operando y quieres entender los fundamentos clave con una metodología simple, directa y aplicable.",
      image: CourseImg,
      link: "/pricing",
    },
    {
      name: "Intensivo de Trading Pro",
      description:
        "Para traders que buscan leer mejor la estructura del mercado y tomar decisiones con un criterio más sólido y profesional.",
      image: CourseImg,
      link: "/pricing",
      badge: true,
    },
    {
      name: "Maestría de Trading 0 a 6 Cifras",
      description:
        "Programa avanzado para alinear mentalidad, estrategia y gestión del riesgo al nivel de un trader que apunta a vivir del trading.",
      image: CourseImg,
      link: "/pricing",
    },
    {
      name: "Maestría 2023 Actualizada",
      description:
        "Formación completa puesta al día, con contenido actualizado y enfoque en lo que realmente funciona hoy en los mercados.",
      image: CourseImg,
      link: "/pricing",
      badge: true,
    },
    {
      name: "CRÉATE: Recupera tu poder y cree en ti",
      description:
        "Curso de meditación y trabajo interno para soltar la aprobación externa y reconectar con tu seguridad y poder personal.",
      image: CourseImg,
      link: "/pricing",
    },
  ];

  const cursosCripto = [
    {
      name: "Mundo Crypto",
      description:
        "Introducción clara al universo de Bitcoin y otras criptomonedas, para entender cómo funcionan y cómo empezar a usarlas.",
      image: CourseImg,
      link: "/pricing",
      badge: true,
    },
    {
      name: "Crypto Mastery",
      description:
        "Programa avanzado donde pasas de lo básico a estrategias más profundas para operar el mercado cripto con estructura.",
      image: CourseImg,
      link: "/pricing",
    },
    {
      name: "Maestría de Cryptofuturos",
      description:
        "Aprende a usar apalancamiento en futuros de criptomonedas con reglas claras, gestión de riesgo y enfoque profesional.",
      image: CourseImg,
      link: "/pricing",
    },
  ];

  const cursosFinanzasYPro = [
    {
      name: "Finanzas Pro",
      description:
        "Formación para ordenar tus finanzas, tomar mejores decisiones con tu dinero y construir una mentalidad de abundancia.",
      image: CourseImg,
      link: "/pricing",
    },
    {
      name: "Bancos",
      description:
        "Entiende cómo funciona el sistema bancario, cómo ser un buen cliente y cómo usar los bancos a tu favor, no en tu contra.",
      image: CourseImg,
      link: "/pricing",
      badge: true,
    },
    {
      name: "Financial Master",
      description:
        "Curso centrado en práctica real de trading, con procesos explicados paso a paso para pulir tu criterio frente al mercado.",
      image: CourseImg,
      link: "/pricing",
    },
    {
      name: "Bootcamp Presencial",
      description:
        "Entrenamiento intensivo presencial con seguimiento posterior y material extra para consolidar lo aprendido en vivo.",
      image: CourseImg,
      link: "/pricing",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Categorías */}
          <div className="pb-12 md:pb-20">
            <div className="flex flex-wrap justify-center gap-2">
              <button className="btn-sm bg-gray-800 font-normal text-gray-200 shadow-sm hover:bg-gray-900">
                <svg
                  className="mr-2 fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M6.669.715a1 1 0 0 1-.673 1.244 6.014 6.014 0 0 0-4.037 4.037 1 1 0 0 1-1.917-.571A8.014 8.014 0 0 1 5.425.042a1 1 0 0 1 1.244.673ZM7.71 4.71a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM9.996.042a1 1 0 1 0-.57 1.917 6.014 6.014 0 0 1 4.037 4.037 1 1 0 0 0 1.917-.571A8.015 8.015 0 0 0 9.996.042Zm4.71 8.71a1 1 0 0 1 .674 1.243 8.015 8.015 0 0 1-5.384 5.384 1 1 0 0 1-.57-1.917 6.014 6.014 0 0 0 4.037-4.037 1 1 0 0 1 1.243-.673ZM1.96 9.425a1 1 0 1 0-1.917.57 8.014 8.014 0 0 0 5.383 5.384 1 1 0 0 0 .57-1.917A6.014 6.014 0 0 1 1.96 9.425Z" />
                </svg>
                Todos los programas
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H2Zm0 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm1-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H3Z" />
                </svg>
                Trading
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M0 6a6 6 0 0 1 6-6c1.077 0 2.062.304 2.912.78a1 1 0 1 1-.976 1.745A3.945 3.945 0 0 0 6 2a4 4 0 0 0-4 4c0 .693.194 1.344.525 1.936a1 1 0 1 1-1.746.976A5.944 5.944 0 0 1 0 6Z" />
                  <path d="M10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
                </svg>
                Cripto
              </button>
              <button className="btn-sm bg-white font-normal text-gray-800 shadow-sm hover:bg-gray-50">
                <svg
                  className="mr-2 fill-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H2Z" />
                </svg>
                Finanzas & Mentalidad
              </button>
            </div>
          </div>

          <div className="space-y-10">
            {/* Section #1 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">
                  Formaciones de Trading
                </h2>
                <Link
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="/pricing"
                >
                  Ver programas
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {cursosTrading.map((curso, index) => (
                  <div key={index} className="group">
                    <AppCard app={curso}>{curso.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #2 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">Cripto & Futuros</h2>
                <Link
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="/pricing"
                >
                  Ver programas
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {cursosCripto.map((curso, index) => (
                  <div key={index} className="group">
                    <AppCard app={curso}>{curso.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>

            {/* Section #3 */}
            <section>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <h2 className="truncate text-xl font-bold">
                  Finanzas, Bancos & Presencial
                </h2>
                <Link
                  className="shrink-0 text-sm font-medium text-blue-500 transition hover:text-blue-600"
                  href="/pricing"
                >
                  Ver programas
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {cursosFinanzasYPro.map((curso, index) => (
                  <div key={index} className="group">
                    <AppCard app={curso}>{curso.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Load more → Ver planes y precios */}
          <div className="mt-12 text-center">
            <Link
              className="btn-sm min-w-[220px] bg-gray-800 py-1.5 text-gray-200 shadow-sm hover:bg-gray-900 inline-flex justify-center"
              href="/pricing"
            >
              Ver planes y precios
              <span className="ml-2 tracking-normal text-gray-500">↓</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


