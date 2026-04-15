/**src/lib/i18n/config.ts */ 

export const locales = ['pt', 'en', 'es', 'de', 'it', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

// UI meta (flags + labels)
export const localeMeta: Record<Locale, { label: string; flagSrc: string }> = {
  pt: { label: 'Português', flagSrc: '/flags/pt.svg' },
  en: { label: 'English', flagSrc: '/flags/en.svg' },
  es: { label: 'Español', flagSrc: '/flags/es.svg' },
  de: { label: 'Deutsch', flagSrc: '/flags/de.svg' },
  fr: { label: 'Français', flagSrc: '/flags/fr.svg' },
  it: { label: 'Italiano', flagSrc: '/flags/it.svg' },
};