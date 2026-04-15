/** src/features/home/components/KwSection.tsx */

import Container from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const stats = [
    { value: "+190.000", labelKey: "kw.stat1Label" },
    { value: "55+", labelKey: "kw.stat2Label" },
    { value: "#1", labelKey: "kw.stat3Label" },
    { value: "1983", labelKey: "kw.stat4Label" },
];

export default async function KwSection() {
    const t = await getTranslations();

    const advantages = [
        {
            number: "01",
            title: t("kw.adv1Title"),
            description: t("kw.adv1Desc"),
        },
        {
            number: "02",
            title: t("kw.adv2Title"),
            description: t("kw.adv2Desc"),
        },
        {
            number: "03",
            title: t("kw.adv3Title"),
            description: t("kw.adv3Desc"),
        },
        {
            number: "04",
            title: t("kw.adv4Title"),
            description: t("kw.adv4Desc"),
        },
    ];

    return (
        <section className="border-t border-b border-border bg-background">
            <Container>
                <div className="flex flex-col gap-14 py-16 md:py-24">

                    {/* Header */}
                    <div className="flex flex-col gap-5 max-w-xl">
                        <span className="label">{t("kw.eyebrow")}</span>
                        <h2 className="text-balance">{t("kw.title")}</h2>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border rounded-sm">
                        {stats.map((stat) => (
                            <div key={stat.labelKey} className="flex flex-col gap-1 px-6 py-5">
                                <span className="text-2xl font-light tracking-tight text-foreground">
                                    {stat.value}
                                </span>
                                <span className="text-xs text-muted uppercase tracking-[0.14em]">
                                    {t(stat.labelKey as Parameters<typeof t>[0])}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Logo + advantages */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">

                        {/* Logo + description */}
                        <div className="flex flex-col justify-center gap-8 lg:pr-16">
                            <div className="relative h-16 w-56">
                                <Image
                                    src="/logos/KW_LEAD_COLOR.png"
                                    alt={t("kw.logoAlt")}
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>

                            <div className="h-px w-10 bg-accent-warm" />

                            <p className="text-base text-muted leading-relaxed text-pretty">
                                {t("kw.body")}
                            </p>
                        </div>

                        {/* Vertical divider */}
                        <div className="hidden lg:block w-px bg-border mx-8" />

                        {/* Advantages */}
                        <div className="flex flex-col divide-y divide-border lg:pl-16">
                            {advantages.map((item) => (
                                <div key={item.number} className="flex flex-col gap-2 py-5">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm shrink-0">
                                            {item.number}
                                        </span>
                                        <h3 className="text-base! font-semibold text-foreground">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="pl-7 text-sm text-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
