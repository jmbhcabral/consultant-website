/** src/features/contact/utils/buildContactEmailHtml.ts */

import type { ContactFormValues } from "@/features/contact/schemas/contactFormSchema";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildContactEmailHtml(data: ContactFormValues) {
  const rows = [
    ["Nome", data.name],
    ["Email", data.email],
    ["Telefone", data.phone || "—"],
    ["Assunto", data.subject],
    ["Mensagem", data.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;width:160px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px;border:1px solid #e5e7eb;">
            ${escapeHtml(value).replaceAll("\n", "<br />")}
          </td>
        </tr>
      `
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 16px;">Novo pedido de contacto</h2>
      <p style="margin:0 0 20px;">Entrou uma nova submissão do website.</p>

      <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:720px;">
        ${tableRows}
      </table>
    </div>
  `;
}