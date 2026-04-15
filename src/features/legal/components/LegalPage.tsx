/** src/features/legal/components/LegalPage.tsx */

import Container from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

type LegalPageProps = {
    titleKey: "legal.privacyTitle" | "legal.cookiesTitle" | "legal.termsTitle";
    updatedKey: "legal.privacyUpdated" | "legal.cookiesUpdated" | "legal.termsUpdated";
    children: ReactNode;
};

export default async function LegalPage({ titleKey, updatedKey, children }: LegalPageProps) {
    const t = await getTranslations();

    return (
        <>
            {/* Hero */}
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="flex flex-col gap-3 py-12 md:py-16 max-w-2xl">
                        <span className="label">{t("legal.label")}</span>
                        <h1 className="text-balance">{t(titleKey)}</h1>
                        <p className="text-xs text-muted mt-1">
                            {t("legal.lastUpdated")} {t(updatedKey)}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <div className="legal-content flex flex-col gap-10">
                            {children}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="text-xl!">{title}</h2>
            <div className="flex flex-col gap-3 text-sm text-muted leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export function LegalList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-2 pl-1">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-accent-warm">—</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
