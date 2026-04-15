/** src/features/services/components/ServiceBlock.tsx */

import Container from "@/components/ui/Container";
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

                    {/* Left — title + description */}
                    <div className="flex flex-col gap-7 lg:pr-16">
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-light tracking-[0.22em] text-accent-warm">
                                {service.number}
                            </span>
                            <h2 className="text-balance">{service.title}</h2>
                            <p className="text-sm font-medium text-muted tracking-wide">
                                {service.tagline}
                            </p>
                        </div>

                        <div className="h-px w-10 bg-accent-warm" />

                        <p className="text-base text-muted leading-relaxed text-pretty">
                            {service.description}
                        </p>

                        <a
                            href={contactHref}
                            className="self-start inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground transition hover:opacity-60"
                        >
                            {talkAboutLabel}
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    {/* Vertical divider (desktop) */}
                    <div className="hidden lg:block w-px bg-border mx-8" />

                    {/* Right — steps */}
                    <div className="flex flex-col gap-2 lg:pl-16">
                        <span className="label mb-4">{whatIncludesLabel}</span>
                        <ul className="flex flex-col divide-y divide-border">
                            {service.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-4 py-4">
                                    <span
                                        aria-hidden="true"
                                        className="mt-0.5 shrink-0 text-xs font-light tracking-widest text-accent-warm"
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-sm text-muted leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
