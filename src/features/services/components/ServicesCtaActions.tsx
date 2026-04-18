/** src/features/services/components/ServicesCtaActions.tsx */

"use client";

import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

type ServicesCtaActionsProps = {
    bookCallLabel: string;
    valuationLabel: string;
};

export default function ServicesCtaActions({
    bookCallLabel,
    valuationLabel,
}: ServicesCtaActionsProps) {
    return (
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-center">
            <Link
                href="/contacto"
                onClick={() =>
                    trackEvent("cta_click", {
                        cta_name: "book_call",
                        location: "services_contact",
                    })
                }
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
            >
                {bookCallLabel}
                <span aria-hidden="true">→</span>
            </Link>

            <Link
                href="/contacto"
                onClick={() =>
                    trackEvent("cta_click", {
                        cta_name: "request_valuation",
                        location: "services_valuation",
                    })
                }
                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-surface-soft/60"
            >
                {valuationLabel}
            </Link>
        </div>
    );
}