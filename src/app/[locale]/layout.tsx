/** src/app/[locale]/layout.tsx */

import CookieBanner from "@/features/consent/components/CookieBanner";
import PublicFooter from "@/features/public/components/PublicFooter";
import PublicHeader from "@/features/public/components/PublicHeader";
import { isLocale, locales } from "@/lib/i18n/routing";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";

type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "seo" });

    return {
        title: {
            default: t("siteTitle"),
            template: `%s | Chanilai Castro`,
        },
        description: t("siteDescription"),
        alternates: {
            canonical: `${siteUrl}/${locale}`,
            languages: buildLanguageAlternates(),
        },
        openGraph: {
            locale,
        },
    };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!isLocale(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <PublicHeader locale={locale} />
            {children}
            <PublicFooter locale={locale} />
            <CookieBanner />
        </NextIntlClientProvider>
    );
}
