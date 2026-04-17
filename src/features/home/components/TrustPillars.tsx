/** src/features/home/components/TrustPillars.tsx */

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import { getTranslations } from "next-intl/server";

export default async function TrustPillars() {
  const t = await getTranslations();

  const pillars = [
    {
      number: "01",
      title: t("trust.pillar1Title"),
      description: t("trust.pillar1Desc"),
    },
    {
      number: "02",
      title: t("trust.pillar2Title"),
      description: t("trust.pillar2Desc"),
    },
    {
      number: "03",
      title: t("trust.pillar3Title"),
      description: t("trust.pillar3Desc"),
    },
  ];

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-16">
          <div className="flex max-w-xl flex-col gap-5">
            <FadeUp>
              <span className="label">{t("trust.eyebrow")}</span>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2>{t("trust.title")}</h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {pillars.map((pillar, index) => (
              <SlideInLeft
                key={pillar.number}
                delay={index * 0.12}
                className="flex flex-col gap-5 py-10 md:px-10 md:py-0 first:md:pl-0 last:md:pr-0"
              >
                <span className="text-sm font-light tracking-[0.2em] text-accent-warm">
                  {pillar.number}
                </span>

                <h3 className="text-xl! font-semibold">{pillar.title}</h3>

                <p className="text-base leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}