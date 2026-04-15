/** src/features/public/navigation/buildPublicHref.ts */

import type { Locale } from "@/lib/i18n/routing";

export default function pathHref(locale: Locale, path: string) {
  if (path === "/") return `/${locale}`;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `/${locale}${normalizedPath}`;
}