/** src/features/home/components/Services.tsx */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Services() {
    const t = await getTranslations();

    const services = [
        {
            number: "01",
            slug: t("servicesHome.service1Slug"),
            title: t("servicesHome.service1Title"),
            description: t("servicesHome.service1Desc"),
        },
        {
            number: "02",
            slug: t("servicesHome.service2Slug"),
            title: t("servicesHome.service2Title"),
            description: t("servicesHome.service2Desc"),
        },
        {
            number: "03",
            slug: t("servicesHome.service3Slug"),
            title: t("servicesHome.service3Title"),
            description: t("servicesHome.service3Desc"),
        },
    ];

    return (
        <Section className="bg-surface-soft/50">
            <Container>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="flex max-w-xl flex-col gap-5">
                            <span className="label">{t("servicesHome.eyebrow")}</span>
                            <h2>{t("servicesHome.title")}</h2>
                        </div>
                        <p className="max-w-sm text-muted text-base text-pretty md:text-right">
                            {t("servicesHome.subtitle")}
                        </p>
                    </div>

                    <div className="flex flex-col divide-y divide-border">
                        {services.map((service) => (
                            <div
                                key={service.number}
                                className="grid grid-cols-1 md:grid-cols-[3rem_1fr_2fr] gap-3 md:gap-12 py-8 md:items-start"
                            >
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm pt-1">
                                    {service.number}
                                </span>
                                <Link
                                    href={`/servicos#${service.slug}`}
                                    className="group self-start"
                                >
                                    <h3 className="text-2xl! font-semibold transition group-hover:opacity-60">
                                        {service.title}
                                    </h3>
                                </Link>
                                <div className="flex flex-col gap-4">
                                    <p className="text-base text-muted text-pretty leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={`/servicos#${service.slug}`}
                                        className="self-start inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-foreground/50 transition hover:text-foreground"
                                    >
                                        {t("common.learnMore")}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
