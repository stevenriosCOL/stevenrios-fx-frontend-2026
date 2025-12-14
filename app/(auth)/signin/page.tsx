'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SignInForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Accede a la plataforma SR Academy</h1>
      </div>

      {/* Error Alert */}
      {error === 'credenciales' && (
        <div className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
          Credenciales incorrectas. Verifica tu usuario y contraseña.
        </div>
      )}

      {/* Form - Submit directo a Laravel */}
<form 
  action="https://api.stevenriosfx.com/api/auth/login" 
  method="POST"
>
        <div className="space-y-4">
          
          {/* Tipo de Usuario */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              Tipo de Usuario
            </label>
            <div className="grid grid-cols-3 gap-3">
              
              {/* Estudiante */}
              <label className="group relative cursor-pointer">
                <input
                  type="radio"
                  name="user_type"
                  value="student"
                  className="peer sr-only"
                  defaultChecked
                />
                <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-white p-4 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50">
                  <svg className="h-6 w-6 text-gray-400 transition-colors peer-checked:text-blue-600 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 transition-colors peer-checked:text-blue-600 group-hover:text-gray-900">
                    Estudiante
                  </span>
                </div>
              </label>

              {/* Asesor */}
              <label className="group relative cursor-pointer">
                <input
                  type="radio"
                  name="user_type"
                  value="advisor"
                  className="peer sr-only"
                />
                <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-white p-4 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50">
                  <svg className="h-6 w-6 text-gray-400 transition-colors peer-checked:text-blue-600 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 transition-colors peer-checked:text-blue-600 group-hover:text-gray-900">
                    Asesor
                  </span>
                </div>
              </label>

              {/* Administrador */}
              <label className="group relative cursor-pointer">
                <input
                  type="radio"
                  name="user_type"
                  value="admin"
                  className="peer sr-only"
                />
                <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-white p-4 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50">
                  <svg className="h-6 w-6 text-gray-400 transition-colors peer-checked:text-blue-600 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 transition-colors peer-checked:text-blue-600 group-hover:text-gray-900">
                    Admin
                  </span>
                </div>
              </label>

            </div>
          </div>

          {/* Usuario ID */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="usuario_id">
              Usuario
            </label>
            <input
              id="usuario_id"
              name="usuario_id"
              className="form-input w-full py-2"
              type="text"
              placeholder="Tu usuario"
              autoComplete="username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              required
            />
          </div>

        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button 
            type="submit"
            className="btn w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>

      {/* Bottom links */}
      <div className="mt-6 space-y-3 text-center">
        <a className="block text-sm text-gray-700 underline hover:no-underline" href="https://stevenriosfx.com/reset-password">
          ¿Olvidaste tu contraseña?
        </a>
        <div className="text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <a className="font-medium text-blue-600 hover:text-blue-700" href="/pricing">
            Ver Planes
          </a>
        </div>
      </div>
    </>
  );
}

export default function SignIn() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SignInForm />
    </Suspense>
  );
}
