/** src/app/not-found.tsx — root fallback for fully unmatched routes */

import { defaultLocale } from "@/lib/i18n/routing";
import { siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "404 — Page not found",
        robots: { index: false },
    };
}

export default async function RootNotFound() {
    let locale: string = defaultLocale;
    let homeHref = `${siteUrl}/${defaultLocale}`;

    try {
        locale = await getLocale();
        homeHref = `/${locale}`;
    } catch {
        homeHref = `/${defaultLocale}`;
    }

    let title = "Page not found";
    let description = "The page you are looking for does not exist or has been moved.";
    let backHome = "Back to home";

    try {
        const t = await getTranslations({ locale, namespace: "notFound" });
        title = t("title");
        description = t("description");
        backHome = t("backHome");
    } catch {
        // fallback to default strings above
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "4rem 2rem",
                fontFamily: "var(--font-inter, system-ui, sans-serif)",
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
            }}
        >
            <div style={{ maxWidth: "32rem" }}>
                <span
                    style={{
                        display: "block",
                        fontSize: "7rem",
                        fontWeight: 200,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        color: "hsl(var(--accent-warm))",
                        userSelect: "none",
                        marginBottom: "1rem",
                    }}
                >
                    404
                </span>
                <div
                    style={{
                        width: "2.5rem",
                        height: "1px",
                        background: "hsl(var(--accent-warm))",
                        marginBottom: "1.5rem",
                    }}
                />
                <h1
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.01em",
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontSize: "1rem",
                        color: "hsl(var(--muted-foreground))",
                        lineHeight: 1.6,
                        marginBottom: "2rem",
                    }}
                >
                    {description}
                </p>
                <Link
                    href={homeHref}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "hsl(var(--foreground))",
                        color: "hsl(var(--background))",
                        padding: "0.875rem 1.75rem",
                        borderRadius: "2px",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        letterSpacing: "0.03em",
                        textDecoration: "none",
                    }}
                >
                    {backHome}
                </Link>
            </div>
        </div>
    );
}
