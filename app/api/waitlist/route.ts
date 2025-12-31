import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_TEMPLATE_ID = parseInt(process.env.BREVO_TEMPLATE_ID || "1");

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nombre inválido" },
        { status: 400 }
      );
    }

    // 1. Verificar si ya existe
    const { data: existingUser } = await supabase
      .from("waitlist_emails")
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "Este email ya está registrado" },
        { status: 409 }
      );
    }

    // 2. Guardar en Supabase
    const { error: insertError } = await supabase
      .from("waitlist_emails")
      .insert([
        {
          email: email.toLowerCase(),
          name: name.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

    if (insertError) {
      console.error("Error en Supabase:", insertError);
      throw new Error("Error al guardar registro");
    }

    // 3. Enviar email de bienvenida vía Brevo
    await sendWelcomeEmail(email, name);

    return NextResponse.json(
      { success: true, message: "Registro exitoso" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Error en /api/waitlist:", error);
    return NextResponse.json(
      { error: error.message || "Error interno del servidor" },
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
      console.error("Error Brevo:", errorData);
    }

    return true;
  } catch (error) {
    console.error("Error enviando email:", error);
    return false;
  }
}