import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://stevenriosfx.com'),
  title: {
    default: 'SR Academy | Trading Profesional con Psicología y Estrategia',
    template: '%s | SR Academy'
  },
  description: 'Aprende trading profesional en Forex, Oro (XAUUSD) y Crypto con metodología comprobada. +2,000 alumnos en 60+ países. Psicología + Fibonacci + Risk Management.',
  keywords: ['trading', 'forex', 'oro', 'XAUUSD', 'criptomonedas', 'fibonacci', 'psicología trading', 'SR Academy', 'Steven Rios'],
  authors: [{ name: 'Steven Rios FX' }],
  creator: 'SR Academy',
  publisher: 'SR Academy',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://stevenriosfx.com',
    title: 'SR Academy | Trading Profesional',
    description: 'Domina el trading con psicología y estrategia. +2,000 alumnos en 60+ países.',
    siteName: 'SR Academy',
    images: [{
      url: '/images/og-image.jpg', // NECESITAS CREAR ESTA IMAGEN
      width: 1200,
      height: 630,
      alt: 'SR Academy - Trading Profesional'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR Academy | Trading Profesional',
    description: 'Domina el trading con psicología y estrategia comprobada',
    images: ['/images/og-image.jpg'],
    creator: '@stevenriosfx'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'o1yixiRBB8xYhEbOGc24fEaxNcrY2mq6eMCRnUFfzUw', // Lo obtienes en Google Search Console
  },
}