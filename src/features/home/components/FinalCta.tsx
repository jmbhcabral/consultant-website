/** src/features/home/components/FinalCta.tsx */

import Container from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

export default async function FinalCta() {
    const t = await getTranslations();

    return (
        <section className="bg-foreground py-20 md:py-28">
            <Container className="flex justify-center">
                <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                    <span className="label-white">{t("cta.eyebrow")}</span>

                    <h2 className="text-white text-balance max-w-2xl">
                        {t("cta.title")}
                    </h2>

                    <p className="max-w-xl text-white/65 text-pretty leading-relaxed">
                        {t("cta.body")}
                    </p>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-white/90"
                        >
                            {t("common.bookCall")}
                            <span aria-hidden="true">→</span>
                        </a>

                        <a
                            href="#avaliacao"
                            className="inline-flex items-center justify-center rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:border-white/55 hover:bg-white/8"
                        >
                            {t("common.requestValuation")}
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
