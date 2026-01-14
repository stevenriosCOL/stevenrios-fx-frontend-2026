import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Página no encontrada
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Esta página fue movida o ya no existe
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            Volver al inicio
          </Link>
          <Link 
            href="/support"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-all"
          >
            Contactar soporte
          </Link>
        </div>
      </div>
    </div>
  )
}