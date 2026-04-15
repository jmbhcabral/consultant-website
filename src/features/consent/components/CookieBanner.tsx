/** src/features/consent/components/CookieBanner.tsx */
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "cc_consent";

type ConsentValue = "all" | "essential";

function getStoredConsent(): ConsentValue | null {
    if (typeof window === "undefined") return null;
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "all" || value === "essential") return value;
    return null;
}

export default function CookieBanner() {
    const t = useTranslations("cookie");
    const [visible, setVisible] = useState(false);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        if (getStoredConsent() === null) {
            const timer = setTimeout(() => setVisible(true), 600);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        function onOpen() {
            localStorage.removeItem(CONSENT_KEY);
            setLeaving(false);
            setVisible(true);
        }
        window.addEventListener("open-cookie-preferences", onOpen);
        return () => window.removeEventListener("open-cookie-preferences", onOpen);
    }, []);

    function dismiss(value: ConsentValue) {
        setLeaving(true);
        setTimeout(() => {
            localStorage.setItem(CONSENT_KEY, value);
            setVisible(false);
            setLeaving(false);
        }, 300);
    }

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label={t("ariaLabel")}
            className={`fixed bottom-0 inset-x-0 z-50 transition-all duration-300 ${
                leaving ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
        >
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/8 to-transparent pointer-events-none" />

            <div className="relative border-t border-border bg-white/97 backdrop-blur-md">
                <div className="container-base py-4 md:py-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">

                        {/* Text */}
                        <div className="flex flex-col gap-1 md:flex-1">
                            <p className="text-xs font-medium tracking-[0.12em] uppercase text-foreground/60">
                                {t("label")}
                            </p>
                            <p className="text-sm text-muted leading-relaxed">
                                {t("text")}{" "}
                                <Link
                                    href="/privacidade"
                                    className="text-foreground underline underline-offset-4 hover:opacity-60 transition"
                                >
                                    {t("privacyLink")}
                                </Link>{" "}
                                {t("textAnd")}{" "}
                                <Link
                                    href="/cookies"
                                    className="text-foreground underline underline-offset-4 hover:opacity-60 transition"
                                >
                                    {t("cookiesLink")}
                                </Link>
                                .
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                onClick={() => dismiss("essential")}
                                className="inline-flex items-center justify-center rounded-sm border border-border px-5 py-2.5 text-xs font-medium tracking-wide text-foreground/70 transition hover:border-foreground/40 hover:text-foreground"
                            >
                                {t("essential")}
                            </button>
                            <button
                                type="button"
                                onClick={() => dismiss("all")}
                                className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-foreground px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition hover:opacity-85"
                            >
                                {t("acceptAll")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
