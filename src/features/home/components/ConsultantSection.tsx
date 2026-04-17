/** src/features/home/components/ConsultantSection.tsx */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const consultant = {
    url: "/images/consultant-3.png",
    name: "Chanilai Castro",
};

export default async function ConsultantSection() {
    const t = await getTranslations();

    return (
        <Section>
            <Container>
                <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
                    <div className="w-full lg:w-2/5">
                        <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-foreground/10">
                            <Image
                                src={consultant.url}
                                alt={consultant.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex w-full lg:w-3/5">
                        <div className="flex max-w-xl flex-col gap-8">
                            <span className="label">{t("consultant.eyebrow")}</span>

                            <blockquote className="flex flex-col gap-6">
                                <p className="text-2xl font-light leading-[1.55] text-foreground text-pretty">
                                    &ldquo;{t("consultant.quote")}&rdquo;
                                </p>
                                <footer className="flex flex-col gap-1">
                                    <cite className="not-italic text-sm font-semibold tracking-wide text-foreground">
                                        {consultant.name}
                                    </cite>
                                    <span className="text-xs text-muted tracking-wide">
                                        {t("consultant.role")}
                                    </span>
                                </footer>
                            </blockquote>

                            <div className="h-px w-12 bg-accent-warm" />

                            <p className="text-base text-muted text-pretty leading-relaxed">
                                {t("consultant.body")}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
