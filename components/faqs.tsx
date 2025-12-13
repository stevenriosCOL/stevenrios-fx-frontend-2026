import Accordion from "@/components/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "¿Cuál es la diferencia entre las 4 membresías?",
      answer:
        "Academy es para principiantes (base completo, 12 meses). Professional agrega Crypto Mastery + XAUUSD + 18 meses. Master incluye Maestría 0-6 Cifras + Fibonacci institucional + 24 meses. Elite suma 10 sesiones 1-1 con Steven + 3 años de acceso.",
      active: true,
    },
    {
      question: "¿Puedo cancelar mi membresía en cualquier momento?",
      answer:
        "Sí, puedes cancelar cuando quieras. El pago es único (no hay suscripción mensual), así que no hay cargos recurrentes. Una vez pagado, el acceso es tuyo por el periodo completo de tu membresía.",
    },
    {
      question: "¿Necesito experiencia previa en trading?",
      answer:
        "No. Academy está diseñado para principiantes absolutos. Empezamos desde cero con conceptos básicos, psicología y control emocional. Si ya tienes experiencia, Professional o Master son mejores opciones.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer:
        "Academy tiene grupo privado Telegram. Professional y superiores incluyen chat directo WhatsApp con respuesta en menos de 24 horas. Master y Elite tienen sesiones en vivo mensuales. Elite incluye mentoría directa con Steven.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer:
        "Esto NO es un esquema para hacerte rico rápido. La mayoría de alumnos ven consistencia entre 3-6 meses de práctica diaria. Depende de tu dedicación, disciplina y control emocional. Te enseñamos la realidad, no fantasías.",
    },
    {
      question: "¿Incluye acceso a cuentas fondeadas?",
      answer:
        "Professional, Master y Elite incluyen el curso Financial Master que te enseña cómo pasar evaluaciones de cuentas fondeadas. No damos las cuentas, te enseñamos a conseguirlas tú mismo con estrategias probadas.",
    },
    {
      question: "¿Ofrecen garantía?",
      answer:
        "De 8 a 12 meses vas a estar operando como los profesionales, sólo debes seguir al pie de la letra la metodología y pasar las pruebas que se te asignen. Estamos tan seguros de nuestra calidad que si no cumples tus objetivos ampliamos la formación el tiempo que lo requieras.",
    },
    {
      question: "¿El contenido se actualiza?",
      answer:
        "Sí, constantemente. Los mercados cambian y nosotros también. Todas las membresías incluyen actualizaciones de contenido sin costo adicional. Elite recibe acceso anticipado a nuevo material.",
    },
    {
      question: "¿Puedo acceder desde cualquier dispositivo?",
      answer:
        "Sí, 100%. La plataforma funciona en computadora, tablet y celular. Puedes estudiar desde cualquier lugar con internet. El contenido está disponible 24/7.",
    },
    {
      question: "¿Qué pasa después de que termine mi acceso?",
      answer:
        "Puedes renovar tu membresía con descuento especial para alumnos (30-50% OFF). También puedes hacer upgrade a un nivel superior y solo pagas la diferencia. Elite tiene acceso de 3 años completos.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Resolvemos todas tus dudas sobre las membresías y el contenido.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
