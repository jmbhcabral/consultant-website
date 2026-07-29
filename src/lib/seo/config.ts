/** src/lib/seo/config.ts */
import { locales } from "@/lib/i18n/routing";

export const siteUrl = "https://chanilaicastro.pt";
export const siteName = "Chanilai Castro";

export const legalBusinessName = "CHANILAI DA MATA BORGES DE CASTRO";
export const consultantEmail = "chanilai.castro@kwportugal.pt";
export const consultantPhone = "+351931750614";

/** Builds hreflang language alternates for a given path slug (without leading slash). */
export function buildLanguageAlternates(slug: string = "") {
    const path = slug ? `/${slug}` : "";
    const entries = locales.map((l) => [l, `${siteUrl}/${l}${path}`] as const);
    return {
        ...Object.fromEntries(entries),
        "x-default": `${siteUrl}/pt${path}`,
    } as Record<string, string>;
}
