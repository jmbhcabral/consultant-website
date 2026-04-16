/** src/app/[locale]/not-found.tsx */

import Container from "@/components/ui/Container";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("notFound");
    return {
        title: `${t("code")} — ${t("title")}`,
        robots: { index: false },
    };
}

export default async function NotFound() {
    const t = await getTranslations("notFound");

    return (
        <section className="flex flex-1 items-center border-b border-border bg-background">
            <Container>
                <div className="flex flex-col gap-6 py-24 md:py-32 max-w-lg">
                    <span className="text-[5rem] md:text-[7rem] font-extralight leading-none tracking-tighter text-accent-warm select-none">
                        {t("code")}
                    </span>
                    <div className="h-px w-10 bg-accent-warm" />
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            {t("title")}
                        </h1>
                        <p className="text-base text-muted leading-relaxed">
                            {t("description")}
                        </p>
                    </div>
                    <div className="pt-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
                        >
                            {t("backHome")}
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
