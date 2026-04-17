/** src/features/public/components/LanguageSwitcher.tsx */
'use client';

import { locales, localeMeta, type Locale } from "@/lib/i18n/routing";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import pathHref from "../navigation/buildPublicHref";

type LanguageSwitcherProps = {
    locale: Locale;
    variant?: "desktop" | "mobile";
};

function stripLocale(pathname: string, locale: Locale): string {
    const prefix = `/${locale}`;
    if (pathname.startsWith(prefix)) {
        const rest = pathname.slice(prefix.length);
        return rest || "/";
    }
    return "/";
}

function Flag({ src, alt }: { src: string; alt: string }) {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            width={16}
            height={12}
            className="rounded-sm shrink-0"
            style={{ width: 16, height: 12, display: "block" }}
        />
    );
}

export default function LanguageSwitcher({ locale, variant = "desktop" }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const currentPath = stripLocale(pathname, locale);
    const currentMeta = localeMeta[locale];

    useEffect(() => {
        if (variant !== "desktop") return;
        function onClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [variant]);

    /* ── Mobile: pills horizontais ── */
    if (variant === "mobile") {
        return (
            <div className="flex flex-col gap-3">
                <span className="text-xs font-light tracking-[0.2em] text-white/40 uppercase">
                    Idioma
                </span>
                <div className="flex flex-wrap gap-2">
                    {locales.map((loc) => {
                        const meta = localeMeta[loc];
                        const isActive = loc === locale;
                        return (
                            <Link
                                key={loc}
                                href={pathHref(loc, currentPath)}
                                className={`flex items-center gap-2 rounded-sm px-3 py-2 text-xs font-medium tracking-wider uppercase transition ${
                                    isActive
                                        ? "bg-white/12 text-white"
                                        : "text-white/45 hover:text-white hover:bg-white/6"
                                }`}
                            >
                                <Flag src={meta.flagSrc} alt={meta.label} />
                                {loc.toUpperCase()}
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }

    /* ── Desktop: dropdown ── */
    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-1.5 rounded-sm px-2 py-1.5 text-xs font-medium tracking-widest uppercase text-foreground/55 transition hover:text-foreground"
            >
                <Flag src={currentMeta.flagSrc} alt={currentMeta.label} />
                <span>{locale.toUpperCase()}</span>
                <span
                    aria-hidden="true"
                    className={`text-[0.55rem] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                >
                    ▾
                </span>
            </button>

            {/* Dropdown */}
            <div
                className={`absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-sm border border-border bg-surface shadow-sm transition-all duration-200 z-50 ${
                    isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                role="listbox"
                aria-label="Selecionar idioma"
            >
                {locales.map((loc) => {
                    const meta = localeMeta[loc];
                    const isActive = loc === locale;
                    return (
                        <Link
                            key={loc}
                            href={pathHref(loc, currentPath)}
                            role="option"
                            aria-selected={isActive}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-2.5 text-xs transition ${
                                isActive
                                    ? "bg-surface-soft text-foreground font-semibold"
                                    : "text-muted hover:bg-surface-soft/50 hover:text-foreground"
                            }`}
                        >
                            <Flag src={meta.flagSrc} alt="" />
                            <span>{meta.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
