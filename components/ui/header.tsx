import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Nosotros
                </Link>
              </li>

              <li className="px-3 py-1">
                <Link
                  href="/pricing"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Programas
                </Link>
              </li>

              <li className="px-3 py-1">
                <Link
                  href="/customers"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Testimonios
                </Link>
              </li>

              <li className="px-3 py-1">
                <Link
                  href="/blog"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>

              {/* Dropdown */}
              <Dropdown title="Recursos">
                <li>
                  <Link
                    href="/support"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Soporte
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cursos
                  </Link>
                </li>

                {/* NUEVO: CriptApp (externo) */}
                <li>
                  <a
                    href="https://criptapp.com.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span>Casa de Cambio</span>

                  </a>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Sign in buttons */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Acceder
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Comenzar
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}


