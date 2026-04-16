/** src/features/contact/services/sendContactEmail.ts */

import { Resend } from "resend";
import type { ContactFormValues } from "@/features/contact/schemas/contactFormSchema";
import { buildContactEmailHtml } from "@/features/contact/utils/buildContactEmailHtml";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormValues) {
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: [process.env.CONTACT_TO_EMAIL!],
    replyTo: data.email,
    subject: `Novo contacto: ${data.subject}`,
    html: buildContactEmailHtml(data),
  });

  if (error) {
    throw new Error(error.message || "Failed to send contact email");
  }
}