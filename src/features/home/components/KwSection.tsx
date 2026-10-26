/** src/features/home/components/KwSection.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const stats = [
    { value: "131.000+", labelKey: "c21.stat1Label" },  // consultores globais (website oficial de Portugal)
    { value: "80+", labelKey: "c21.stat2Label" },       // países (website oficial de Portugal)
    { value: "11.000+", labelKey: "c21.stat3Label" },   // agências globais
    { value: "1971", labelKey: "c21.stat4Label" },      // ano de fundação
];

export default async function KwSection() {
    const t = await getTranslations();

    const advantages = [
        {
            number: "01",
            title: t("c21.adv1Title"),
            description: t("c21.adv1Desc"),
        },
        {
            number: "02",
            title: t("c21.adv2Title"),
            description: t("c21.adv2Desc"),
        },
        {
            number: "03",
            title: t("c21.adv3Title"),
            description: t("c21.adv3Desc"),
        },
        {
            number: "04",
            title: t("c21.adv4Title"),
            description: t("c21.adv4Desc"),
        },
    ];

    return (
        <section className="border-t border-b border-border bg-background">
            <Container>
                <div className="flex flex-col gap-14 py-16 md:py-24">
                    <div className="flex max-w-xl flex-col gap-5">
                        <FadeUp>
                            <span className="label">{t("c21.eyebrow")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="text-balance">{t("c21.title")}</h2>
                        </FadeUp>
                    </div>

                    <div className="grid grid-cols-2 divide-y divide-border rounded-sm border border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                        {stats.map((stat, index) => (
                            <SlideInLeft
                                key={stat.labelKey}
                                delay={index * 0.1}
                                className="flex flex-col gap-1 px-6 py-5"
                            >
                                <span className="text-2xl font-light tracking-tight text-foreground">
                                    {stat.value}
                                </span>
                                <span className="text-xs uppercase tracking-[0.14em] text-muted">
                                    {t(stat.labelKey as Parameters<typeof t>[0])}
                                </span>
                            </SlideInLeft>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
                        <div className="flex flex-col justify-center gap-8 lg:pr-16">
                            <FadeUp>
                                <div className="relative h-16 w-64">
                                    <Image
                                        src="/logos/c21-housemarket.png"
                                        alt={t("c21.logoAlt")}
                                        fill
                                        sizes="256px"
                                        className="object-contain object-left"
                                    />
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.08}>
                                <div className="h-px w-10 bg-accent-warm" />
                            </FadeUp>

                            <FadeUp delay={0.16}>
                                <p className="text-base leading-relaxed text-muted text-pretty">
                                    {t("c21.body")}
                                </p>
                            </FadeUp>
                        </div>

                        <div className="mx-8 hidden w-px bg-border lg:block" />

                        <div className="flex flex-col divide-y divide-border lg:pl-16">
                            {advantages.map((item, index) => (
                                <SlideInLeft
                                    key={item.number}
                                    delay={index * 0.12}
                                    className="flex flex-col gap-2 py-5"
                                >
                                    <div className="flex items-baseline gap-3">
                                        <span className="shrink-0 text-xs font-light tracking-[0.22em] text-accent-warm">
                                            {item.number}
                                        </span>
                                        <h3 className="text-base! font-semibold text-foreground">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="pl-7 text-sm leading-relaxed text-muted">
                                        {item.description}
                                    </p>
                                </SlideInLeft>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}