/** /src/lib/i18n/get-locale-from-pathname.ts */
import { locales, type Locale } from '@/lib/i18n/routing';

const LOCALE_REGEX = /^[a-z]{2}(-[A-Z]{2})?$/;

export function getLocaleFromPathname(pathname: string | Locale | null | undefined) {
  if (!pathname) return null;

  const seg = pathname.split('/')[1];

  if (seg && LOCALE_REGEX.test(seg) && locales.includes(seg as Locale)) {
    return seg as Locale;
  }

  return null;
}
