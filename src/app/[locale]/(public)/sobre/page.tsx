/** src/app/[locale]/(public)/sobre/page.tsx */

import Container from "@/components/ui/Container";
import AboutAdvantages from "@/features/about/components/AboutAdvantages";
import AboutApproach from "@/features/about/components/AboutApproach";
import AboutJourney from "@/features/about/components/AboutJourney";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "about" });

    return {
        title: t("pageLabel"),
        description: t("pageDesc"),
        alternates: {
            canonical: `${siteUrl}/${locale}/sobre`,
            languages: buildLanguageAlternates("sobre"),
        },
        openGraph: {
            url: `${siteUrl}/${locale}/sobre`,
            title: t("pageTitle"),
            description: t("pageDesc"),
        },
    };
}

export default async function AboutPage() {
    const t = await getTranslations("about");
    const tCommon = await getTranslations("common");

    return (
        <>
            {/* Hero */}
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="flex max-w-2xl flex-col gap-4 py-14 md:py-20">
                        <span className="label">{t("pageLabel")}</span>
                        <h1 className="text-balance">{t("pageTitle")}</h1>
                        <p className="max-w-xl text-base leading-relaxed text-muted">{t("pageDesc")}</p>
                    </div>
                </Container>
            </section>

            {/* Quick highlights */}
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        <div className="px-0 py-6 sm:px-8 first:sm:pl-0">
                            <p className="text-sm font-semibold tracking-wide text-foreground">
                                {t("highlight1")}
                            </p>
                        </div>
                        <div className="px-0 py-6 sm:px-8">
                            <p className="text-sm font-semibold tracking-wide text-foreground">
                                {t("highlight2")}
                            </p>
                        </div>
                        <div className="px-0 py-6 sm:px-8 last:sm:pr-0">
                            <p className="text-sm font-semibold tracking-wide text-foreground">
                                {t("highlight3")}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <AboutJourney />
            <AboutAdvantages />
            <AboutApproach />

            {/* CTA */}
            <section className="border-t border-border bg-background py-20 md:py-28">
                <Container className="flex justify-center">
                    <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                        <span className="label">{t("ctaEyebrow")}</span>

                        <h2 className="max-w-2xl text-balance">{t("ctaTitle")}</h2>

                        <p className="max-w-xl text-pretty leading-relaxed text-muted">
                            {t("ctaBody")}
                        </p>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
                            >
                                {tCommon("bookCall")}
                                <span aria-hidden="true">→</span>
                            </Link>

                            <Link
                                href="/servicos"
                                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-surface-soft/60"
                            >
                                {t("ctaServices")}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
