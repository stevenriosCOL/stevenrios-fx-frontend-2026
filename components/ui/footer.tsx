import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid grid-cols-2 gap-8 py-8 md:grid-cols-5 md:gap-10 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block - Logo (ocupa 2 columnas en mobile) */}
          <div className="col-span-2 space-y-2 md:col-span-1">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} SR Academy. Todos los derechos
              reservados.
            </div>
          </div>

          {/* 2nd block – Programas */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Programas</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Todos los programas",
                "Trading & psicología",
                "Cripto & futuros",
                "Finanzas & mentalidad",
                "Planes y precios",
              ].map((label) => (
                <li key={label}>
                  <Link
                    className="text-gray-600 transition hover:text-gray-900"
                    href="/pricing"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3rd block – Academia */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Academia</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/about"
                >
                  Sobre SR Academy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/customers"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/support"
                >
                  Soporte
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/courses"
                >
                  Cursos y recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block – Legal y recursos */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Legal &amp; recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/customers"
                >
                  Comunidad de alumnos
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/documentation/Terminos-Condiciones-y-Privacidad"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/support"
                >
                  Centro de ayuda
                </Link>
              </li>

              {/* CriptApp */}
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://criptapp.com.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Casa de Cambio
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block – Social */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://kick.com/stevenriosfx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Streaming en Kick
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://instagram.com/stevenrios.fx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram personal
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://instagram.com/sracademyoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram academia
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 transition hover:text-gray-900"
                  href="https://es.tradingview.com/u/StevenRiosFx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Analista en TradingView
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 -z-10 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['trader'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['trader'] after:[text-shadow:0_1px_0_white]" />
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]" />
        </div>
      </div>
    </footer>
  );
}





