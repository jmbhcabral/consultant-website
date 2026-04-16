/** src/app/[locale]/error.tsx */
"use client";

import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
    error: Error & { digest?: string };
    unstable_retry: () => void;
};

export default function ErrorPage({ error, unstable_retry }: ErrorProps) {
    const t = useTranslations("error");

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="flex flex-1 items-center border-b border-border bg-background">
            <Container>
                <div className="flex flex-col gap-6 py-24 md:py-32 max-w-lg">
                    <span className="text-[5rem] md:text-[7rem] font-extralight leading-none tracking-tighter text-accent-warm select-none">
                        {t("code")}
                    </span>
                    <div className="h-px w-10 bg-accent-warm" />
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            {t("title")}
                        </h2>
                        <p className="text-base text-muted leading-relaxed">
                            {t("description")}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                            type="button"
                            onClick={unstable_retry}
                            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:opacity-85"
                        >
                            {t("retry")}
                        </button>
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted underline-offset-4 transition hover:text-foreground hover:underline"
                        >
                            {t("backHome")}
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
