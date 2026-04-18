/** src/features/about/components/AboutCtaActions.tsx */

"use client";

import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

type AboutCtaActionsProps = {
    bookCallLabel: string;
    servicesLabel: string;
};

export default function AboutCtaActions({
    bookCallLabel,
    servicesLabel,
}: AboutCtaActionsProps) {
    return (
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
            <Link
                href="/contacto"
                onClick={() =>
                    trackEvent("cta_click", {
                        cta_name: "book_call",
                        location: "about_contact",
                    })
                }
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
            >
                {bookCallLabel}
                <span aria-hidden="true">→</span>
            </Link>

            <Link
                href="/servicos"
                onClick={() =>
                    trackEvent("cta_click", {
                        cta_name: "see_services",
                        location: "about_services",
                    })
                }
                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-surface-soft/60"
            >
                {servicesLabel}
            </Link>
        </div>
    );
}