'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'
import Illustration from '@/public/images/glow-top.svg'

import CarouselImg01 from '@/public/images/carousel-icon-01.svg'
import CarouselImg02 from '@/public/images/carousel-icon-02.svg'
import CarouselImg03 from '@/public/images/carousel-icon-03.svg'
import CarouselImg04 from '@/public/images/carousel-icon-04.svg'
import CarouselImg05 from '@/public/images/carousel-icon-05.svg'

// Import Swiper
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function PainPoints() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.pain-carousel', {
      modules: [Navigation],
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Background" />
          </div>
        </div>

        <div className="pt-12 md:pt-20 pb-12 md:pb-20">

{/* Section header */}
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
  <div>
    <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-200 pb-3">
      La diferencia entre perder y ganar
    </div>
  </div>
  <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
    ¿Te suena familiar?
  </h2>
  <p className="text-lg text-slate-400">
    No estás solo. La mayoría de traders no falla por la estrategia… sino por lo que pasa en su cabeza.
  </p>
</div>

          {/* Carousel built with Swiper.js */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="pain-carousel swiper-container group">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                
                {/* Pain Point 1 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative h-full min-h-[280px] bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} /> 
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg01} width={56} height={56} alt="Icon 01" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Compraste cursos que no funcionaron</div>
                        <div className="text-slate-400 mb-3">Gastaste cientos de dólares en academias con videos grabados y cero seguimiento.</div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Pain Point 2 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative h-full min-h-[280px] bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg02} width={56} height={56} alt="Icon 02" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Perdiste dinero con señales falsas</div>
                        <div className="text-slate-400 mb-3">Seguiste gurús prometiendo 500% mensual y terminaste con la cuenta en negativo.</div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Pain Point 3 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative h-full min-h-[280px] bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg03} width={56} height={56} alt="Icon 03" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">El miedo te paraliza al ejecutar</div>
                        <div className="text-slate-400 mb-3">Analizas perfecto pero cuando llega el momento tu dedo tiembla y pierdes la entrada.</div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Pain Point 4 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative h-full min-h-[280px] bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg04} width={56} height={56} alt="Icon 04" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Cierras ganadores muy rápido</div>
                        <div className="text-slate-400 mb-3">Tomas +$50 por miedo cuando el trade podría llegar a +$500. El miedo roba ganancias.</div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Pain Point 5 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative h-full min-h-[280px] bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg05} width={56} height={56} alt="Icon 05" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Aguantas perdedores demasiado</div>
                        <div className="text-slate-400 mb-3">Esperas que regrese hasta liquidar la cuenta. La esperanza mal gestionada destruye capital.</div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

                {/* Pain Point 6 */}
                <HighlighterItem className="swiper-slide group/slide">
                  <div className="relative h-full min-h-[280px] bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} />                     
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={CarouselImg01} width={56} height={56} alt="Icon 06" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Ya no sabes en quién confiar</div>
                        <div className="text-slate-400 mb-3">Todos prometen hacerte rico rápido con sistemas secretos. ¿A quién creerle ahora?</div>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>

              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Anterior</span>
              <svg className="w-4 h-4 fill-slate-500 group-hover:fill-blue-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Siguiente</span>
              <svg className="w-4 h-4 fill-slate-500 group-hover:fill-blue-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

          {/* Bottom text */}
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-lg text-slate-400">
              Si te identificas con <strong className="text-slate-200">al menos 2 de estos puntos</strong>, el problema no es que "el trading no funcione". Es que aún no has trabajado la psicología correcta del trader.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
