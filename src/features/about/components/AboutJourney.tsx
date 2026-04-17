/** src/features/about/components/AboutJourney.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import { getTranslations } from "next-intl/server";

export default async function AboutJourney() {
    const t = await getTranslations("about");

    return (
        <section className="border-b border-border bg-surface-soft/40 py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
                    <div className="flex flex-col gap-6 lg:pr-16">
                        <FadeUp>
                            <span className="label">{t("journeyEyebrow")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h2 className="text-balance">{t("journeyTitle")}</h2>
                        </FadeUp>
                    </div>

                    <div className="mx-8 hidden w-px bg-border lg:block" />

                    <div className="flex flex-col gap-5 lg:pl-16">
                        <FadeUp delay={0.12}>
                            <p className="text-base leading-relaxed text-muted text-pretty">
                                {t("journeyP1")}
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="text-base leading-relaxed text-muted text-pretty">
                                {t("journeyP2")}
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.28}>
                            <p className="text-base leading-relaxed text-muted text-pretty">
                                {t("journeyP3")}
                            </p>
                        </FadeUp>
                    </div>
                </div>
            </Container>
        </section>
    );
}
