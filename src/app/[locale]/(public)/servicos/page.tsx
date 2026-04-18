/** src/app/[locale]/(public)/servicos/page.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import ServiceBlock from "@/features/services/components/ServiceBlock";
import ServicesCtaActions from "@/features/services/components/ServicesCtaActions";
import ServicesProcess from "@/features/services/components/ServicesProcess";
import { servicesMeta } from "@/features/services/data/services";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "servicesPage" });

    return {
        title: t("pageLabel"),
        description: t("pageDesc"),
        alternates: {
            canonical: `${siteUrl}/${locale}/servicos`,
            languages: buildLanguageAlternates("servicos"),
        },
        openGraph: {
            url: `${siteUrl}/${locale}/servicos`,
            title: t("pageTitle"),
            description: t("pageDesc"),
        },
    };
}

export default async function ServicesPage() {
    const t = await getTranslations("servicesPage");
    const tCommon = await getTranslations("common");

    const services = servicesMeta.map((meta, i) => ({
        number: meta.number,
        slug: meta.slug,
        title: t(`s${i + 1}Title` as Parameters<typeof t>[0]),
        tagline: t(`s${i + 1}Tagline` as Parameters<typeof t>[0]),
        description: t(`s${i + 1}Desc` as Parameters<typeof t>[0]),
        steps: [
            t(`s${i + 1}Step1` as Parameters<typeof t>[0]),
            t(`s${i + 1}Step2` as Parameters<typeof t>[0]),
            t(`s${i + 1}Step3` as Parameters<typeof t>[0]),
            t(`s${i + 1}Step4` as Parameters<typeof t>[0]),
            t(`s${i + 1}Step5` as Parameters<typeof t>[0]),
            t(`s${i + 1}Step6` as Parameters<typeof t>[0]),
        ],
    }));

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

            <section className="border-b border-border bg-background">
                <Container>
                    <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-5 lg:divide-x lg:divide-y-0">
                        {services.map((service, index) => (
                            <SlideInLeft
                                key={service.slug}
                                delay={index * 0.08}
                                className="group"
                            >
                                <a
                                    href={`#${service.slug}`}
                                    className="flex items-baseline gap-4 px-0 py-6 transition hover:bg-surface-soft/30 lg:px-5 first:lg:pl-0 last:lg:pr-0"
                                >
                                    <span className="text-xs font-light tracking-[0.22em] pl-2 text-accent-warm">
                                        {service.number}
                                    </span>
                                    <span className="text-sm font-semibold tracking-wide text-foreground transition group-hover:opacity-70">
                                        {service.title}
                                    </span>
                                </a>
                            </SlideInLeft>
                        ))}
                    </div>
                </Container>
            </section>

            {services.map((service, index) => (
                <div key={service.slug} className="border-b border-border">
                    <ServiceBlock
                        service={service}
                        soft={index % 2 !== 0}
                        contactHref="/contacto"
                        whatIncludesLabel={t("whatIncludes")}
                        talkAboutLabel={t("talkAbout")}
                    />
                </div>
            ))}

            <ServicesProcess />

            <section className="border-b border-border bg-surface-soft/40 py-20 md:py-28">
                <Container>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="flex max-w-xl flex-col gap-5">
                            <FadeUp>
                                <span className="label">{t("photoEyebrow")}</span>
                            </FadeUp>

                            <FadeUp delay={0.08}>
                                <h2 className="text-balance">{t("photoTitle")}</h2>
                            </FadeUp>

                            <FadeUp delay={0.16}>
                                <p className="text-base leading-relaxed text-muted text-pretty">
                                    {t("photoBody")}
                                </p>
                            </FadeUp>
                        </div>

                        <SlideInLeft>
                            <div className="relative min-h-[320px] overflow-hidden rounded-sm border border-border bg-surface-soft md:min-h-[480px]">
                                <Image
                                    src="/images/chanilai_castro.png"
                                    alt={t("photoAlt")}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                />
                            </div>
                        </SlideInLeft>
                    </div>
                </Container>
            </section>

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
                            <ServicesCtaActions
                                bookCallLabel={tCommon("bookCall")}
                                valuationLabel={tCommon("requestValuation")}
                            />
                        </FadeUp>
                    </div>
                </Container>
            </section>
        </>
    );
}