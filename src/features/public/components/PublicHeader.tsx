/** src/features/public/components/PublicHeader.tsx */
"use client";

import Container from "@/components/ui/Container";
import { publicNavigation } from "@/features/public/navigation/publicNavigation";
import type { Locale } from "@/lib/i18n/routing";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import pathHref from "../navigation/buildPublicHref";
import LanguageSwitcher from "./LanguageSwitcher";

type PublicHeaderProps = {
    locale: Locale;
};

export default function PublicHeader({ locale }: PublicHeaderProps) {
    const t = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const homePath = "/";
    const contactPath = "/contacto";
    const links = publicNavigation;

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border/50 bg-white/95 backdrop-blur-md shadow-sm">
                <Container>
                    <div className="flex h-20 w-full items-center justify-between">

                        {/* Logo */}
                        <Link
                            href={pathHref(locale, homePath)}
                            onClick={closeMenu}
                            className="flex flex-col leading-none gap-1"
                        >
                            <span className="text-sm font-semibold tracking-[0.14em] uppercase text-foreground">
                                Chanilai Castro
                            </span>
                            <span className="text-[0.6rem] tracking-[0.22em] uppercase text-muted">
                                {t("common.realEstateConsultant")}
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav
                            className="hidden lg:flex lg:items-center lg:gap-8"
                            aria-label={t("nav.mainAriaLabel")}
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={pathHref(locale, link.href)}
                                    className="text-xs font-medium tracking-[0.14em] uppercase text-foreground/60 transition hover:text-foreground"
                                >
                                    {t(`nav.${link.key}`)}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop: language switcher + CTA */}
                        <div className="hidden lg:flex lg:items-center lg:gap-4">
                            <LanguageSwitcher locale={locale} variant="desktop" />
                            <div className="h-4 w-px bg-border" />
                            <Link
                                href={pathHref(locale, contactPath)}
                                className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-xs font-semibold tracking-wide text-white! transition hover:opacity-85"
                            >
                                {t("common.bookCall")}
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                            className="lg:hidden flex flex-col justify-center gap-[5px] p-2"
                        >
                            <span
                                className={`block h-px w-6 bg-foreground origin-center transition-all duration-300 ${
                                    isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`block h-px w-4 bg-foreground transition-all duration-300 ${
                                    isMenuOpen ? "opacity-0 scale-x-0" : ""
                                }`}
                            />
                            <span
                                className={`block h-px w-6 bg-foreground origin-center transition-all duration-300 ${
                                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                                }`}
                            />
                        </button>
                    </div>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-foreground transition-opacity duration-300 lg:hidden ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!isMenuOpen}
            >
                <Container className="flex h-full flex-col pt-28 pb-12">
                    <nav
                        className="flex flex-col divide-y divide-white/10"
                        aria-label={t("nav.mobileAriaLabel")}
                    >
                        {links.map((link, index) => (
                            <Link
                                key={link.href}
                                href={pathHref(locale, link.href)}
                                onClick={closeMenu}
                                className="flex items-baseline gap-5 py-6 group"
                            >
                                <span className="text-xs font-light tracking-[0.2em] text-accent-warm">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-2xl font-light tracking-wide text-white transition-opacity duration-200 group-hover:opacity-50">
                                    {t(`nav.${link.key}`)}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto flex flex-col gap-4 pt-8">
                        <LanguageSwitcher locale={locale} variant="mobile" />
                        <Link
                            href={pathHref(locale, contactPath)}
                            onClick={closeMenu}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-4 text-sm font-semibold tracking-wide text-white! transition hover:bg-white/8 hover:border-white/45"
                        >
                            {t("common.bookCall")}
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
}
