/** src/features/about/components/AboutApproach.tsx */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
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
                        <span className="label-white">{t("approachEyebrow")}</span>
                        <h2 className="text-white text-balance">{t("approachTitle")}</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {approach.map((item) => (
                            <div key={item.number} className="flex flex-col gap-4">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                    {item.number}
                                </span>
                                <div className="h-px w-full bg-white/10" />
                                <h3 className="text-xl! font-semibold text-white">{item.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
