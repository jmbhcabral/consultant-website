/** src/features/about/components/AboutAdvantages.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import { getTranslations } from "next-intl/server";

export default async function AboutAdvantages() {
    const t = await getTranslations("about");

    const advantages = [
        { number: "01", title: t("adv1Title"), description: t("adv1Desc") },
        { number: "02", title: t("adv2Title"), description: t("adv2Desc") },
        { number: "03", title: t("adv3Title"), description: t("adv3Desc") },
    ];

    return (
        <section className="border-b border-border bg-background py-16 md:py-24">
            <Container>
                <div className="flex flex-col gap-12">
                    <div className="flex max-w-2xl flex-col gap-4">
                        <FadeUp>
                            <span className="label">{t("advEyebrow")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="text-balance">{t("advTitle")}</h2>
                        </FadeUp>

                        <FadeUp delay={0.16}>
                            <p className="max-w-xl text-base leading-relaxed text-muted">
                                {t("advBody")}
                            </p>
                        </FadeUp>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {advantages.map((item, index) => (
                            <SlideInLeft key={item.number} delay={index * 0.12} className="flex flex-col gap-4">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                    {item.number}
                                </span>
                                <div className="h-px w-full bg-border" />
                                <h3 className="text-xl! font-semibold text-foreground">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                            </SlideInLeft>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}