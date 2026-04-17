/** src/features/about/components/AboutApproach.tsx */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import { getTranslations } from "next-intl/server";

export default async function AboutApproach() {
    const t = await getTranslations("about");

    const approach = [
        { number: "01", title: t("approach1Title"), description: t("approach1Desc") },
        { number: "02", title: t("approach2Title"), description: t("approach2Desc") },
        { number: "03", title: t("approach3Title"), description: t("approach3Desc") },
    ];

    return (
        <Section className="bg-foreground">
            <Container>
                <div className="flex flex-col gap-14">
                    <div className="flex max-w-xl flex-col gap-5">
                        <FadeUp>
                            <span className="label-white">{t("approachEyebrow")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="text-balance text-white">{t("approachTitle")}</h2>
                        </FadeUp>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {approach.map((item, index) => (
                            <SlideInLeft key={item.number} delay={index * 0.12} className="flex flex-col gap-4">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                    {item.number}
                                </span>
                                <div className="h-px w-full bg-white/10" />
                                <h3 className="text-xl! font-semibold text-white">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                            </SlideInLeft>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}