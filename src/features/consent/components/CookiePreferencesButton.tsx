/** src/features/consent/components/CookiePreferencesButton.tsx */
"use client";

import { useTranslations } from "next-intl";

export default function CookiePreferencesButton() {
    const t = useTranslations("footer");

    function open() {
        window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }

    return (
        <button
            type="button"
            onClick={open}
            className="text-xs text-muted/70 transition hover:text-foreground"
        >
            {t("cookiePreferences")}
        </button>
    );
}
