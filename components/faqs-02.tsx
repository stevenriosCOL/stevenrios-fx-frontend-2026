import Accordion from "@/components/accordion";

export default function Faqs() {
  const faqs01 = [
    {
      question: "¿Qué necesito para tomar los programas de formación?",
      answer:
        "Solo necesitas una conexión estable a Internet y un computador o dispositivo móvil. El resto lo ponemos nosotros: metodología, contenido y acompañamiento para que avances paso a paso.",
    },
    {
      question: "Soy totalmente nuevo en trading, ¿puedo empezar desde cero?",
      answer:
        "Sí. La Escuela de Trading está diseñada para personas que no saben nada de mercados financieros. Empezamos desde lo más básico (conceptos, plataformas, psicología) hasta temas avanzados, con un lenguaje sencillo y aplicado.",
    },
    {
      question: "Soy un trader con experiencia, ¿aún así puedo mejorar mi trading?",
      answer:
        "Claro que sí. Muchos estudiantes llegan con años de experiencia, incluso con sus propias academias, pero sin precisión ni resultados consistentes. En SR Academy se enfocan en pulir su entendimiento del mercado, mejorar entradas y salidas, y corregir errores de gestión de riesgo y psicología.",
    },
    {
      question: "¿Por dónde empiezo dentro de SR Academy?",
      answer:
        "Depende de tu nivel. Si eres principiante, lo ideal es empezar por la Escuela de Trading (membresía Gold/Silver). Si ya tienes base y quieres algo avanzado, puedes ir a Intensivo de Trading Pro o Maestría 0A6Cifras. Y si quieres todo el recorrido completo, el Paquete Master incluye la ruta completa de formación.",
    },
    {
      question: "¿En cuánto tiempo puedo ver resultados si sigo la metodología?",
      answer:
        "Si sigues la metodología al pie de la letra, aplicas las evaluaciones y mantienes disciplina, el objetivo es que en 8 a 12 meses estés operando como los profesionales. No es magia ni promesa de enriquecimiento rápido: es un proceso serio de formación.",
    },
  ];

  const faqs02 = [
    {
      question: "¿Qué es exactamente Steven Rios FX Academy (SR Academy)?",
      answer:
        "SR Academy es una academia de formación en trading, criptomonedas, finanzas personales, meditación y mentalidad. No somos asesores financieros ni damos recomendaciones de inversión; todo el contenido tiene fines educativos para que tú mismo tomes decisiones informadas.",
    },
    {
      question: "¿Cómo funcionan las membresías y programas (Escuela, Maestría, Paquete Master, etc.)?",
      answer:
        "Cada programa tiene un alcance y duración específica. Por ejemplo, la Escuela de Trading es una membresía de largo plazo donde ves desde básico hasta avanzado; la Maestría 0A6Cifras y los programas de Crypto se enfocan en niveles más avanzados; el Paquete Master reúne los programas principales en una sola experiencia completa. En la página de membresías verás el detalle de acceso, precio y beneficios de cada uno.",
    },
    {
      question: "¿Pueden hacerme un reembolso si ya no quiero seguir?",
      answer:
        "Al comprar un programa de formación obtienes acceso inmediato a la plataforma y a material educativo, por lo que se considera un servicio ya iniciado. Solo se contemplan devoluciones en casos de fuerza mayor (por ejemplo, enfermedad grave que imposibilite continuar o fallecimiento del estudiante), y sobre la parte no recibida del proceso de formación. En otros casos, puedes optar por aplazar el curso, cambiar de modalidad o usar el saldo en otro programa, según las políticas vigentes.",
    },
    {
      question: "¿Puedo pagar una membresía por partes o hacer abonos?",
      answer:
        "Sí. Puedes hacer abonos parciales para una membresía y completar el pago en el plazo acordado. Esos abonos no se pierden: si no puedes completar el 100% a tiempo, puedes usar el saldo abonado para otra membresía de igual, mayor o menor valor, coordinándolo con el equipo de soporte.",
    },
    {
      question: "¿Puedo compartir mi cuenta o membresía con otra persona?",
      answer:
        "En membresías individuales no está permitido compartir usuario y contraseña. El sistema puede detectar inicios de sesión inusuales y bloquear la cuenta por seguridad. En planes tipo team, si están habilitados, se permite compartir con otra persona bajo las condiciones de ese plan. Revisa siempre los términos y condiciones de tu membresía.",
    },
  ];

  const faqs03 = [
    {
      question: "¿Cómo accedo al campus virtual y a las clases?",
      answer:
        "Después de confirmar tu pago, recibirás las instrucciones de acceso a la plataforma educativa y, según el programa, los enlaces a sesiones en vivo. Desde el campus podrás ver grabaciones, materiales, módulos de finanzas, meditación y recursos extra.",
    },
    {
      question: "¿Cuánto tiempo tendré acceso a los cursos y materiales?",
      answer:
        "La duración del acceso depende del programa que compres. Algunos tienen acceso por meses específicos (por ejemplo, 6 meses), otros por 1 año o más. En la sección de membresías y en la descripción de cada programa se indica claramente el tiempo de acceso incluido.",
    },
    {
      question: "¿Recibo acompañamiento o solo son videos pregrabados?",
      answer:
        "SR Academy combina contenido pregrabado con sesiones en vivo, seguimiento y chats de soporte según la membresía. Por ejemplo, programas avanzados incluyen sesiones en vivo, grupos privados y, en algunos casos, chat directo para preguntas puntuales.",
    },
    {
      question: "¿Qué hago si tengo problemas con mi acceso o mi cuenta se bloquea?",
      answer:
        "Si notas bloqueos, errores de inicio de sesión o mensajes por actividad inusual, escríbenos a soporte con tu nombre completo, correo registrado y detalle del problema. Nuestro equipo revisará tu caso, verificará la seguridad de la cuenta y restablecerá el acceso si corresponde.",
    },
    {
      question: "¿Cuál es el horario y canal oficial de soporte de SR Academy?",
      answer:
        "Nuestro horario de atención es de lunes a sábado de 8:00 a.m. a 4:00 p.m. (hora Colombia), a través de los canales oficiales indicados en la página de contacto (correo y/o WhatsApp). Fuera de ese horario puedes dejar tu mensaje y será atendido en la siguiente jornada.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Getting started */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Comenzando en SR Academy</h2>
              <div className="space-y-2">
                {faqs01.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-01-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Profile & plans */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Planes, pagos y reembolsos</h2>
              <div className="space-y-2">
                {faqs02.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-02-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
            {/* Accounts */}
            <div>
              <h2 className="mb-5 text-xl font-bold">Acceso, cuentas y soporte</h2>
              <div className="space-y-2">
                {faqs03.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.question}
                    id={`faqs-03-${index}`}
                  >
                    {faq.answer}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

