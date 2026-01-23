'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Particles from './particles'
import Illustration from '@/public/images/glow-top.svg'

export default function Guarantees() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Compromiso SR Academy - Garantía de formación en trading" />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">

          <div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

              {/* Content optimizado */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                {/* Badge */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200 pb-3">
                    Compromiso SR Academy: Formación Real, Sin Excusas
                  </div>
                </div>
                
                {/* Headline optimizado */}
                <h3 className="mb-4 text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                  Garantía de Formación Completa en{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    Trading Profesional
                  </span>
                </h3>
                
                {/* Description optimizada */}
                <p className="text-lg text-slate-400 mb-8">
                  Sigue al pie de la letra la{" "}
                  <strong className="text-slate-200">metodología de trading</strong>, 
                  completa las{" "}
                  <strong className="text-slate-200">pruebas asignadas</strong>, 
                  y en <strong className="text-slate-200">8-12 meses</strong> estarás 
                  operando con{" "}
                  <strong className="text-slate-200">análisis técnico profesional</strong> y{" "}
                  <strong className="text-slate-200">gestión de riesgo estructurada</strong>. 
                  Estamos tan seguros de nuestra{" "}
                  <strong className="text-slate-200">calidad educativa</strong> que 
                  si cumples con tu parte y no alcanzas competencia operativa,{" "}
                  <strong className="text-slate-200">
                    ampliamos la formación sin costo adicional
                  </strong>.
                </p>

                {/* Disclaimer YMYL-safe (NUEVO) */}
                <div className="mb-8 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <p className="text-sm text-slate-400">
                    <strong className="text-slate-300">⚠️ Importante:</strong>{" "}
                    Esta garantía cubre la{" "}
                    <strong className="text-slate-300">formación y acceso</strong>, 
                    NO resultados financieros. El trading tiene riesgo de pérdida. 
                    Los resultados dependen de tu{" "}
                    <strong className="text-slate-300">disciplina</strong>,{" "}
                    <strong className="text-slate-300">práctica</strong> y{" "}
                    <strong className="text-slate-300">gestión de capital</strong>.
                  </p>
                </div>

                {/* Tabs optimizados */}
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                  
                  <button 
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 1 ? 'border-slate-700 opacity-50' : 'border-blue-700 shadow-sm shadow-blue-500/25'}`} 
                    onClick={() => setTab(1)}
                    aria-label="Ver garantía de resultados educativos"
                  >
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm3.5 5.5-4 4a.7.7 0 0 1-1 0l-2-2a.7.7 0 1 1 1-1L7 8l3.5-3.5a.7.7 0 1 1 1 1Z" />
                    </svg>
                    <span>Garantía de Formación Completa</span>
                  </button>

                  <button 
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 2 ? 'border-slate-700 opacity-50' : 'border-blue-700 shadow-sm shadow-blue-500/25'}`} 
                    onClick={() => setTab(2)}
                    aria-label="Ver contenido completo de formación"
                  >
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span>Contenido Estructurado Completo</span>
                  </button>

                  <button 
                    className={`flex items-center text-sm font-medium text-slate-50 rounded-sm border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 3 ? 'border-slate-700 opacity-50' : 'border-blue-700 shadow-sm shadow-blue-500/25'}`} 
                    onClick={() => setTab(3)}
                    aria-label="Ver mentoría y soporte directo"
                  >
                    <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" />
                    </svg>
                    <span>Mentoría y Soporte Activo</span>
                  </button>
                </div>

                {/* Explicación del tab seleccionado (NUEVO) */}
                <div className="mt-6 p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg">
                  <Transition
                    show={tab === 1}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="text-sm text-slate-300">
                      <strong className="text-slate-100 block mb-2">
                        📋 Garantía Educativa SR Academy
                      </strong>
                      <p>
                        Si cumples con el{" "}
                        <strong className="text-slate-200">100% del programa</strong> 
                        (clases + ejercicios + evaluaciones) y no alcanzas competencia 
                        operativa en 8-12 meses, extendemos tu acceso hasta que lo logres. 
                        Sin pagos extra. Requiere evidencia de{" "}
                        <strong className="text-slate-200">
                          journaling de trades y asistencia
                        </strong> a sesiones.
                      </p>
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 2}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="text-sm text-slate-300">
                      <strong className="text-slate-100 block mb-2">
                        📚 Formación Completa Paso a Paso
                      </strong>
                      <p>
                        <strong className="text-slate-200">500+ horas</strong> de contenido 
                        estructurado: Psicología del trader, análisis técnico con Fibonacci, 
                        gestión de riesgo matemática, estrategia de ejecución. 
                        Incluye plantillas, checklists y{" "}
                        <strong className="text-slate-200">
                          material descargable
                        </strong>. Actualizaciones futuras incluidas de por vida.
                      </p>
                    </div>
                  </Transition>

                  <Transition
                    show={tab === 3}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="text-sm text-slate-300">
                      <strong className="text-slate-100 block mb-2">
                        💬 Soporte Directo y Comunidad Activa
                      </strong>
                      <p>
                        Acceso a Discord 24/7 con{" "}
                        <strong className="text-slate-200">+2,000 traders activos</strong>,{" "}
                        <strong className="text-slate-200">
                          sesiones en vivo semanales
                        </strong> con análisis de mercado, mentoría grupal y 
                        respuestas directas a tus dudas operativas. No estás solo: 
                        construimos tu consistencia en comunidad.
                      </p>
                    </div>
                  </Transition>
                </div>
              </div>

              {/* Image - Sin cambios visuales */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div className="relative py-32 md:py-24 md:-mt-12">

                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex justify-center items-center">
                      {/* Halo effect - AZUL */}
                      <svg className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md" width="480" height="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="pulse-guarantee" x1="50%" x2="50%" y1="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="76.382%" stopColor="#DBEAFE" />
                            <stop offset="100%" stopColor="#2563EB" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path className="pulse" fill="url(#pulse-guarantee)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                          <path className="pulse pulse-1" fill="url(#pulse-guarantee)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                          <path className="pulse pulse-2" fill="url(#pulse-guarantee)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                        </g>
                      </svg>
                      {/* Grid - AZUL */}
                      <div className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                        <div className="h-[200%] animate-endless">
                          <div className="absolute inset-0 [background:repeating-linear-gradient(transparent,transparent_48px,var(--color-white)_48px,var(--color-white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:repeating-linear-gradient(transparent,transparent_48px,var(--color-blue-500)_48px,var(--color-blue-500)_49px)]" />
                          <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent,transparent_48px,var(--color-white)_48px,var(--color-white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,transparent,transparent_48px,var(--color-blue-500)_48px,var(--color-blue-500)_49px)]" />
                        </div>
                      </div>
                      
                      {/* Icons - Sin cambios */}
                      <Transition
                        as="div"
                        show={tab === 1}
                        className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
                        unmount={false}
                        appear={true}
                      >                      
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg className="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M12 0 2 4v8c0 5.5 3.8 10.7 9.4 12 .2 0 .4 0 .6 0s.4 0 .6 0C18.2 22.7 22 17.5 22 12V4L12 0Zm8 12c0 4.6-3.1 8.9-7.4 10.2l-.6.1-.6-.1C7.1 20.9 4 16.6 4 12V5.5l8-3.2 8 3.2V12Z" />
                            <path d="m10.5 12.6-2-2L7 12l3.5 3.5L17 9l-1.4-1.4-5.1 5Z" />
                          </svg>
                        </div>
                      </Transition>
                      
                      <Transition
                        as="div"
                        show={tab === 2}
                        className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
                        unmount={false}
                        appear={true}
                      >    
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg className="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                            <path d="M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z" />
                          </svg>
                        </div>
                      </Transition>
                      
                      <Transition
                        as="div"
                        show={tab === 3}
                        className="transform transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-closed:absolute data-enter:data-closed:-rotate-[60deg] data-leave:data-closed:rotate-[60deg] data-closed:opacity-0 duration-700"
                        unmount={false}
                        appear={true}
                      >    
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg className="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" width="26" height="14">
                            <path fillRule="nonzero" d="m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z" />
                          </svg>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
