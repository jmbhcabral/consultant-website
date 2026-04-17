/** src/features/services/components/ServicesProcess.tsx */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import { getTranslations } from "next-intl/server";
import { processNumbers } from "../data/services";

export default async function ServicesProcess() {
    const t = await getTranslations("servicesPage");

    const steps = processNumbers.map((n, i) => ({
        number: n,
        title: t(`p${i + 1}Title` as Parameters<typeof t>[0]),
        description: t(`p${i + 1}Desc` as Parameters<typeof t>[0]),
    }));

    return (
        <Section className="bg-foreground">
            <Container>
                <div className="flex flex-col gap-14">
                    <div className="flex max-w-xl flex-col gap-5">
                        <FadeUp>
                            <span className="label-white">{t("processEyebrow")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="text-balance text-white">{t("processTitle")}</h2>
                        </FadeUp>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <SlideInLeft
                                key={step.number}
                                delay={index * 0.12}
                                className="flex flex-col gap-4"
                            >
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                    {step.number}
                                </span>
                                <div className="h-px w-full bg-white/10" />
                                <h3 className="text-xl! font-semibold text-white">{step.title}</h3>
                                <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
                            </SlideInLeft>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}