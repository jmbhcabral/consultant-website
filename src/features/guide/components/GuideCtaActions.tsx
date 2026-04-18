/** src/features/guide/components/GuideCtaActions.tsx */

"use client";

import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

type GuideCtaActionsProps = {
    talkLabel: string;
    servicesLabel: string;
};

export default function GuideCtaActions({
    talkLabel,
    servicesLabel,
}: GuideCtaActionsProps) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
                href="/contacto"
                onClick={() =>
                    trackEvent("cta_click", {
                        cta_name: "guide_talk",
                        location: "guide_final_cta",
                    })
                }
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
            >
                {talkLabel}
                <span aria-hidden="true">→</span>
            </Link>

            <Link
                href="/servicos"
                onClick={() =>
                    trackEvent("cta_click", {
                        cta_name: "guide_services",
                        location: "guide_final_cta",
                    })
                }
                className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-surface-soft/60"
            >
                {servicesLabel}
            </Link>
        </div>
    );
}