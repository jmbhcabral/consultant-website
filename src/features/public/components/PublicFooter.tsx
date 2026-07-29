/** src/features/public/components/PublicFooter.tsx */

import Container from "@/components/ui/Container";
import CookiePreferencesButton from "@/features/consent/components/CookiePreferencesButton";
import type { Locale } from "@/lib/i18n/routing";
import { legalBusinessName } from "@/lib/seo/config";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import pathHref from "../navigation/buildPublicHref";
import { publicNavigation } from "../navigation/publicNavigation";

type PublicFooterProps = {
    locale: Locale;
};

export default async function PublicFooter({ locale }: PublicFooterProps) {
    const t = await getTranslations();
    const year = new Date().getFullYear();
    const links = publicNavigation;

    return (
        <footer className="border-t border-border bg-background">
            <Container>
                {/* Main */}
                <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:py-16">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col leading-none gap-1">
                            <span className="text-sm font-semibold tracking-[0.14em] uppercase text-foreground">
                                Chanilai Castro
                            </span>
                            <span className="text-[0.6rem] tracking-[0.22em] uppercase text-muted">
                                {t("common.realEstateConsultant")}
                            </span>
                        </div>
                        <p className="max-w-xs text-sm text-muted leading-relaxed">
                            {t("footer.tagline")}
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav
                        className="flex flex-col gap-3"
                        aria-label={t("footer.footerNavAriaLabel")}
                    >
                        <span className="label mb-1">{t("footer.navigationLabel")}</span>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={pathHref(locale, link.href)}
                                className="text-sm text-muted transition hover:text-foreground"
                            >
                                {t(`nav.${link.key}`)}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <span className="label mb-1">{t("footer.contactLabel")}</span>
                        <a
                            href="tel:+351931750614"
                            className="text-sm text-muted transition hover:text-foreground"
                        >
                            +351 931 750 614
                        </a>
                        <a
                            href="mailto:chanilai.castro@kwportugal.pt"
                            className="text-sm text-muted transition hover:text-foreground"
                        >
                            chanilai.castro@kwportugal.pt
                        </a>
                    </div>
                </div>

                {/* Legal links */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6 pb-4">
                    {[
                        { labelKey: "legal.privacyTitle", href: "/privacidade" },
                        { labelKey: "legal.cookiesTitle", href: "/cookies" },
                        { labelKey: "legal.termsTitle", href: "/termos" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={pathHref(locale, link.href)}
                            className="text-xs text-muted/70 transition hover:text-foreground"
                        >
                            {t(link.labelKey as Parameters<typeof t>[0])}
                        </Link>
                    ))}
                    <span className="h-3 w-px bg-border" aria-hidden="true" />
                    <CookiePreferencesButton />
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-muted">
                            © {year} Chanilai Castro. {t("common.rights")}
                        </span>
                        <span className="text-xs text-muted">
                            Designação legal: {legalBusinessName}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs text-muted/60">{t("common.member")}</span>
                        <div className="h-3 w-px bg-border" />
                        <div className="relative h-5 w-24 opacity-50 grayscale transition hover:opacity-80 hover:grayscale-0">
                            <Image
                                src="/logos/KW_LEAD_COLOR.png"
                                alt={t("kw.logoAlt")}
                                fill
                                className="object-contain object-right"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
