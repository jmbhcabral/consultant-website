/** src/features/services/components/ServiceBlock.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import type { Service } from "../data/services";

type ServiceBlockProps = {
    service: Service;
    soft?: boolean;
    contactHref: string;
    whatIncludesLabel: string;
    talkAboutLabel: string;
};

export default function ServiceBlock({
    service,
    soft = false,
    contactHref,
    whatIncludesLabel,
    talkAboutLabel,
}: ServiceBlockProps) {
    return (
        <section
            id={service.slug}
            className={`scroll-mt-20 ${soft ? "bg-surface-soft/40 py-16 md:py-24" : "py-16 md:py-24"}`}
        >
            <Container>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1px_1fr] lg:gap-0">
                    <FadeUp className="flex flex-col gap-7 lg:pr-16">
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                {service.number}
                            </span>
                            <h2 className="text-balance">{service.title}</h2>
                            <p className="text-sm font-medium tracking-wide text-muted">
                                {service.tagline}
                            </p>
                        </div>

                        <div className="h-px w-10 bg-accent-warm" />

                        <p className="text-base leading-relaxed text-muted text-pretty">
                            {service.description}
                        </p>

                        <a
                            href={contactHref}
                            className="inline-flex self-start items-center gap-2 text-sm font-semibold tracking-wide text-foreground transition hover:opacity-60"
                        >
                            {talkAboutLabel}
                            <span aria-hidden="true">→</span>
                        </a>
                    </FadeUp>

                    <div className="mx-8 hidden w-px bg-border lg:block" />

                    <div className="flex flex-col gap-2 lg:pl-16">
                        <FadeUp>
                            <span className="label mb-4">{whatIncludesLabel}</span>
                        </FadeUp>

                        <ul className="flex flex-col divide-y divide-border">
                            {service.steps.map((step, i) => (
                                <SlideInLeft key={i} delay={i * 0.08}>
                                    <li className="flex items-start gap-4 py-4">
                                        <span
                                            aria-hidden="true"
                                            className="mt-0.5 shrink-0 text-xs font-light tracking-widest text-accent-warm"
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-sm leading-relaxed text-muted">{step}</span>
                                    </li>
                                </SlideInLeft>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}