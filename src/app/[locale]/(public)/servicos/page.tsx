/** src/app/[locale]/(public)/servicos/page.tsx */

import Container from "@/components/ui/Container";
import ServiceBlock from "@/features/services/components/ServiceBlock";
import ServicesProcess from "@/features/services/components/ServicesProcess";
import { servicesMeta } from "@/features/services/data/services";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

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
            {/* Hero */}
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="flex flex-col gap-4 py-14 md:py-20 max-w-2xl">
                        <span className="label">{t("pageLabel")}</span>
                        <h1 className="text-balance">{t("pageTitle")}</h1>
                        <p className="text-base text-muted leading-relaxed max-w-xl">{t("pageDesc")}</p>
                    </div>
                </Container>
            </section>

            {/* Services index */}
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                        {services.map((service) => (
                            <a
                                key={service.slug}
                                href={`#${service.slug}`}
                                className="group flex items-baseline gap-4 px-0 sm:px-8 py-6 first:sm:pl-0 last:sm:pr-0 transition hover:bg-surface-soft/30"
                            >
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                    {service.number}
                                </span>
                                <span className="text-sm font-semibold tracking-wide text-foreground group-hover:opacity-70 transition">
                                    {service.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Detailed services */}
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

            {/* How it works */}
            <ServicesProcess />

            {/* Photo block */}
            <section className="border-b border-border bg-surface-soft/40 py-20 md:py-28">
                <Container>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="flex flex-col gap-5 max-w-xl">
                            <span className="label">{t("photoEyebrow")}</span>
                            <h2 className="text-balance">{t("photoTitle")}</h2>
                            <p className="text-base text-muted leading-relaxed text-pretty">
                                {t("photoBody")}
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-sm border border-border bg-surface-soft min-h-[320px] md:min-h-[480px]">
                            <Image
                                src="/images/chanilai_castro.png"
                                alt={t("photoAlt")}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 45vw"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="border-t border-border bg-background py-20 md:py-28">
                <Container className="flex justify-center">
                    <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                        <span className="label">{t("ctaEyebrow")}</span>

                        <h2 className="text-balance max-w-2xl">{t("ctaTitle")}</h2>

                        <p className="max-w-xl text-muted text-pretty leading-relaxed">{t("ctaBody")}</p>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
                            >
                                {tCommon("bookCall")}
                                <span aria-hidden="true">→</span>
                            </Link>

                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-surface-soft/60"
                            >
                                {tCommon("requestValuation")}
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
