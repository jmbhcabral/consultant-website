/** src/features/home/components/Hero.tsx */
"use client";

import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function Hero() {
    const t = useTranslations();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        videoRef.current.playbackRate = 0.65;
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <video
                ref={videoRef}
                src="/videos/couple-keys-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-black/58" />

            <div className="absolute inset-0 z-20 flex items-center">
                <Container>
                    <div className="flex max-w-2xl flex-col gap-7 py-24">
                        <div className="flex items-center gap-3">
                            <span className="block h-px w-8 bg-white/40" />
                            <span className="label-white">{t("hero.eyebrow")}</span>
                        </div>

                        <h1 className="text-white text-balance">
                            {t("hero.title")}
                        </h1>

                        <p className="text-base text-pretty text-white/75 md:text-lg max-w-xl">
                            {t("hero.description")}
                        </p>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                            <a
                                href="#contacto"
                                className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-900 transition hover:bg-white/90"
                            >
                                {t("common.bookCall")}
                                <span aria-hidden="true">→</span>
                            </a>

                            <a
                                href="#avaliacao"
                                className="inline-flex items-center justify-center rounded-sm border border-white/35 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:border-white/65 hover:bg-white/10"
                            >
                                {t("common.requestValuation")}
                            </a>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
                <span className="label-white">{t("common.scroll")}</span>
                <div className="h-8 w-px bg-white/30" />
            </div>
        </section>
    );
}
