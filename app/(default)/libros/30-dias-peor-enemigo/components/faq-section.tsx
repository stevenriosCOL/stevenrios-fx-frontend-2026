"use client";

import Accordion from "@/components/accordion";

export default function FaqSection() {
  const WHATSAPP_COMBO = "https://wa.link/x84llp";

  const faqs = [
    {
      question: "¿Qué estoy comprando exactamente?",
      answer:
        "Un sistema completo de reprogramación mental para trading: PDF premium con 30 días guiados, estructura diaria, ejercicios prácticos y acompañamiento para que ejecutes con disciplina bajo presión.",
      active: true,
    },
    {
      question: "¿Qué incluye el Combo Premium exactamente?",
      answer:
        "Incluye: PDF Premium + Audiolibro (MP3) + GPT SR FX Trading Brain + curso gratis 12h + ejercicios guiados + WhatsApp de estudiantes.",
    },
    {
      question: "¿El audiolibro se vende por separado?",
      answer:
        "No. El audiolibro es un beneficio exclusivo del Combo Premium. La idea es que tengas el sistema completo (leer + escuchar + ejecutar) y lo sostengas con consistencia.",
    },
    {
      question: "¿Cómo recibo el PDF y el audiolibro?",
      answer:
        "Después de la compra, te enviamos todo por correo electrónico: acceso al PDF premium y el audiolibro en formato MP3, más los recursos/bonos incluidos.",
    },
    {
      question: "¿En qué formato viene el audiolibro y en qué dispositivos funciona?",
      answer:
        "Viene en MP3. Lo puedes escuchar en celular, computadora, carro o cualquier reproductor estándar (iPhone/Android/PC/Mac).",
    },
    {
      question: "¿Qué es el GPT SR FX Trading Brain y cómo lo uso?",
      answer:
        "SR FX – Trading Brain (Hedge Fund Thinking), por Steven Andrés Ríos Chitiva. Es un asistente profesional creado para ayudarte a pensar, estructurar y ejecutar como un trader institucional: proceso, contexto, riesgo y toma de decisiones. No da señales ni predicciones. Lo usas para preparar tu plan, validar tu contexto y tomar decisiones con criterio.",
    },
    {
      question: "¿Esto sirve si ya tengo estrategia?",
      answer:
        "Sí. Está diseñado justo para ese punto: cuando la estrategia funciona, pero tú no ejecutas igual bajo presión. Aquí corriges el sabotaje mental.",
    },
    {
      question: "¿También sirve si soy principiante?",
      answer:
        "Sí. Te ayuda a construir disciplina, proceso y control emocional desde el día 1. Así no desarrollas malos hábitos desde el inicio.",
    },
    {
      question: "¿Promete ganancias rápidas?",
      answer:
        "No. Esto no es magia ni señales. Es disciplina, proceso y consistencia. Los resultados dependen de tu ejecución real, no de promesas.",
    },
    {
      question: "¿Cuánto tiempo toma al día?",
      answer:
        "Entre 7 y 15 minutos diarios. Es corto, práctico y fácil de sostener durante los 30 días completos.",
    },
    {
      question: "¿Qué incluye el bonus de +12 horas?",
      answer:
        'Acceso al curso gratuito de más de 12 horas para reforzar fundamentos y estructura profesional. Disponible en: stevenriosfx.com/curso-gratis',
    },
    {
      question: "¿Qué es el WhatsApp inteligente de estudiantes?",
      answer:
        "Un canal automatizado con IA que te acompaña, resuelve dudas frecuentes y te mantiene enfocado en el proceso.",
    },
    {
      question: "¿Funciona para cualquier mercado (Forex, Crypto, Acciones)?",
      answer:
        "Sí. El enfoque es psicológico, no técnico. Los patrones mentales (miedo, ansiedad, venganza) son los mismos en cualquier mercado.",
    },
    {
      question: "¿Qué pasa si no completo los 30 días seguidos?",
      answer:
        "Está diseñado para ser flexible. Si pierdes un día, retomas sin problema. Lo importante es el proceso acumulado, no la perfección.",
    },
    {
      question: "¿Qué compromiso ofrece SR Academy?",
      answer:
        "Si después de aplicar el sistema sientes que algo no te queda claro, tienes acceso directo al soporte para resolver cualquier duda sobre implementación. Incluye WhatsApp de estudiantes, curso complementario y actualizaciones gratuitas del contenido.",
    },
  ];

  return (
    <section id="faq">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.4),transparent)1]">
          {/* Header MEJORADO */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-flex font-medium bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent mb-3">
              Antes de comprar
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>

            <p className="text-lg text-gray-700">
              Resolvemos las dudas reales que todo trader serio se hace antes de invertir.
              <br className="hidden sm:block" />
              <span className="text-gray-600">Sin humo. Sin promesas falsas.</span>
            </p>
          </div>

          {/* Accordion container */}
          <div className="mx-auto max-w-3xl">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-blue-200 transition-colors duration-300"
                >
                  <Accordion title={faq.question} id={`faq-${index}`} active={faq.active}>
                    <span className="text-gray-700 leading-relaxed">{faq.answer}</span>
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Micro-copy antes de CTAs */}
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-6">
                ¿Todavía tienes dudas?{" "}
                <a
                  href={WHATSAPP_COMBO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Escríbeme directamente
                </a>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="btn group bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
                href={WHATSAPP_COMBO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center">
                  Comprar Combo Premium
                  <span className="ml-1 text-blue-300 transition-transform group-hover:translate cracker-x-0.5">
                    →
                  </span>
                </span>
              </a>

              <button
                className="btn bg-white text-gray-800 shadow hover:bg-gray-50"
                onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver lo que incluye
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




