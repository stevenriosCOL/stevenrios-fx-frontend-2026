import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Rate limiting simple en memoria (para producción considerar Upstash/Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);

  if (!limit || now > limit.resetTime) {
    // Nueva ventana de 1 minuto
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }

  if (limit.count >= 5) {
    // Máximo 5 requests por minuto por IP
    return false;
  }

  limit.count++;
  return true;
}

// Validación robusta de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Sanitización básica
function sanitizeString(str: string): string {
  return str.trim().replace(/[<>]/g, '');
}

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_TEMPLATE_ID = parseInt(process.env.BREVO_TEMPLATE_ID || "1");

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting por IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Intenta de nuevo en 1 minuto." },
        { status: 429 }
      );
    }

    // 2. Validar origen (CSRF básico)
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      "https://stevenriosfx.com",
      "https://www.stevenriosfx.com",
      "http://localhost:3000" // Solo para desarrollo
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      console.warn(`⚠️  Blocked request from unauthorized origin: ${origin}`);
      return NextResponse.json(
        { error: "Origen no autorizado" },
        { status: 403 }
      );
    }

    // 3. Parsear body
    const { email: rawEmail, name: rawName } = await request.json();

    // 4. Validar y sanitizar email
    const email = String(rawEmail || "").trim().toLowerCase();
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // 5. Validar y sanitizar nombre
    const name = sanitizeString(String(rawName || ""));
    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { error: "Nombre debe tener entre 2 y 80 caracteres" },
        { status: 400 }
      );
    }

    // 6. Inicializar Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("❌ Supabase configuration missing");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 7. Verificar si ya existe
    const { data: existingUser } = await supabase
      .from("waitlist_emails")
      .select("email")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "Este email ya está registrado" },
        { status: 409 }
      );
    }

    // 8. Guardar en Supabase
    const { error: insertError } = await supabase
      .from("waitlist_emails")
      .insert([
        {
          email,
          name,
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError) {
      console.error("❌ Error en Supabase:", insertError);
      return NextResponse.json(
        { error: "Error al guardar registro" },
        { status: 500 }
      );
    }

    // 9. Enviar email de bienvenida vía Brevo
    await sendWelcomeEmail(email, name);

    console.log(`✅ Nuevo registro: ${email}`);

    return NextResponse.json(
      { success: true, message: "Registro exitoso" },
      { status: 200 }
    );

  } catch (error: any) {
    // NO exponer detalles del error al cliente
    console.error("❌ Error en /api/waitlist:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

async function sendWelcomeEmail(email: string, name: string) {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Steven Rios - SR Academy",
          email: "noreply@stevenriosfx.com",
        },
        to: [{ email, name }],
        templateId: BREVO_TEMPLATE_ID,
        params: {
          FIRSTNAME: name,
          WHATSAPP_LINK: "https://wa.me/573006926613?text=Hola%20Steven%2C%20vengo%20de%20la%20waitlist%20🚀",
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Error Brevo:", errorData);
      return false;
    }

    console.log(`📧 Email enviado a: ${email}`);
    return true;
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    return false;
  }
}