/** src/features/home/components/FinalCta.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import { getTranslations } from "next-intl/server";

export default async function FinalCta() {
    const t = await getTranslations();

    return (
        <section className="bg-foreground py-20 md:py-28">
            <Container className="flex justify-center">
                <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                    <FadeUp>
                        <span className="label-white">{t("cta.eyebrow")}</span>
                    </FadeUp>

                    <FadeUp delay={0.08}>
                        <h2 className="max-w-2xl text-balance text-white">
                            {t("cta.title")}
                        </h2>
                    </FadeUp>

                    <FadeUp delay={0.16}>
                        <p className="max-w-xl text-pretty leading-relaxed text-white/65">
                            {t("cta.body")}
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.24}>
                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
                            <a
                                href="contacto"
                                className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-white/90"
                            >
                                {t("common.bookCall")}
                                <span aria-hidden="true">→</span>
                            </a>

                            <a
                                href="contacto"
                                className="inline-flex items-center justify-center rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:border-white/55 hover:bg-white/8"
                            >
                                {t("common.requestValuation")}
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </Container>
        </section>
    );
}