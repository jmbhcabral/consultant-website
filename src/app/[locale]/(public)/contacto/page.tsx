/** src/app/[locale]/(public)/contacto/page.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import Section from "@/components/ui/Section";
import ContactForm from "@/features/contact/components/ContactForm";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "contact" });

    return {
        title: t("pageLabel"),
        description: t("pageDesc"),
        alternates: {
            canonical: `${siteUrl}/${locale}/contacto`,
            languages: buildLanguageAlternates("contacto"),
        },
        openGraph: {
            url: `${siteUrl}/${locale}/contacto`,
            title: t("pageTitle"),
            description: t("pageDesc"),
        },
    };
}

export default async function ContactPage() {
    const t = await getTranslations("contact");
    const tCommon = await getTranslations("common");

    return (
        <>
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="max-w-2xl flex flex-col gap-4 py-14 md:py-20">
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

            <Section>
                <Container>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
                        <FadeUp>
                            <div>
                                <ContactForm />
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <aside className="flex flex-col gap-8 lg:pt-1">
                                <div className="flex flex-col gap-5">
                                    <span className="label">{t("infoLabel")}</span>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs uppercase tracking-[0.12em] text-muted">
                                            {t("emailLabel")}
                                        </span>
                                        <a
                                            href="mailto:chanilai.castro@kwportugal.pt"
                                            className="text-sm text-foreground transition hover:text-foreground/70"
                                        >
                                            chanilai.castro@kwportugal.pt
                                        </a>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs uppercase tracking-[0.12em] text-muted">
                                            {t("phoneLabel")}
                                        </span>
                                        <a
                                            href="tel:+351931750614"
                                            className="text-sm text-foreground transition hover:text-foreground/70"
                                        >
                                            +351 931 750 614
                                        </a>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs uppercase tracking-[0.12em] text-muted">
                                            {t("locationLabel")}
                                        </span>
                                        <span className="text-sm text-foreground">{tCommon("portugal")}</span>
                                    </div>
                                </div>

                                <div className="h-px w-10 bg-accent-warm" />

                                <div className="flex flex-col gap-3">
                                    <p className="text-sm leading-relaxed text-muted">{t("responseNote")}</p>
                                </div>
                            </aside>
                        </FadeUp>
                    </div>
                </Container>
            </Section>
        </>
    );
}