/** src/app/api/contact/route.ts */

import { NextResponse } from "next/server";
import { contactFormSchema } from "@/features/contact/schemas/contactFormSchema";
import { sendContactEmail } from "@/features/contact/services/sendContactEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Dados inválidos." },
        { status: 400 }
      );
    }

    await sendContactEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { success: false, message: "Não foi possível enviar o formulário." },
      { status: 500 }
    );
  }
}