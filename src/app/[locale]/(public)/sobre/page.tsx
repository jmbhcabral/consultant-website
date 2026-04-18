/** src/app/[locale]/(public)/sobre/page.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import AboutAdvantages from "@/features/about/components/AboutAdvantages";
import AboutApproach from "@/features/about/components/AboutApproach";
import AboutJourney from "@/features/about/components/AboutJourney";
import AboutCtaActions from "@/features/about/components/AboutCtaActions";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="flex max-w-2xl flex-col gap-4 py-14 md:py-20">
                        <FadeUp>
                            <span className="label">{t("pageLabel")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h1 className="text-balance">{t("pageTitle")}</h1>
                        </FadeUp>

                        <FadeUp delay={0.16}>
                            <p className="max-w-xl text-base leading-relaxed text-muted">
                                {t("pageDesc")}
                            </p>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            <section className="border-b border-border bg-background">
                <Container>
                    <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        <SlideInLeft className="px-0 py-6 sm:px-8 first:sm:pl-0">
                            <p className="text-sm font-semibold tracking-wide text-foreground">
                                {t("highlight1")}
                            </p>
                        </SlideInLeft>

                        <SlideInLeft delay={0.1} className="px-0 py-6 sm:px-8">
                            <p className="text-sm font-semibold tracking-wide text-foreground">
                                {t("highlight2")}
                            </p>
                        </SlideInLeft>

                        <SlideInLeft delay={0.2} className="px-0 py-6 sm:px-8 last:sm:pr-0">
                            <p className="text-sm font-semibold tracking-wide text-foreground">
                                {t("highlight3")}
                            </p>
                        </SlideInLeft>
                    </div>
                </Container>
            </section>

            <AboutJourney />
            <AboutAdvantages />
            <AboutApproach />

            <section className="border-t border-border bg-background py-20 md:py-28">
                <Container className="flex justify-center">
                    <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                        <FadeUp>
                            <span className="label">{t("ctaEyebrow")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="max-w-2xl text-balance">{t("ctaTitle")}</h2>
                        </FadeUp>

                        <FadeUp delay={0.16}>
                            <p className="max-w-xl text-pretty leading-relaxed text-muted">
                                {t("ctaBody")}
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.24}>
                            <AboutCtaActions
                                bookCallLabel={tCommon("bookCall")}
                                servicesLabel={t("ctaServices")}
                            />
                        </FadeUp>
                    </div>
                </Container>
            </section>
        </>
    );
}
