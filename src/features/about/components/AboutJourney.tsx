/** src/features/about/components/AboutJourney.tsx */

import Container from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

export default async function AboutJourney() {
    const t = await getTranslations("about");

    return (
        <section className="py-16 md:py-24 bg-surface-soft/40 border-b border-border">
            <Container>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
                    <div className="flex flex-col gap-6 lg:pr-16">
                        <span className="label">{t("journeyEyebrow")}</span>
                        <h2 className="text-balance">{t("journeyTitle")}</h2>
                    </div>

                    <div className="hidden lg:block w-px bg-border mx-8" />

                    <div className="flex flex-col gap-5 lg:pl-16">
                        <p className="text-base text-muted leading-relaxed text-pretty">{t("journeyP1")}</p>
                        <p className="text-base text-muted leading-relaxed text-pretty">{t("journeyP2")}</p>
                        <p className="text-base text-muted leading-relaxed text-pretty">{t("journeyP3")}</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
