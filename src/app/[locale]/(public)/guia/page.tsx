/** src/app/[locale]/(public)/guia/page.tsx */

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/animations/FadeUp";
import SlideInLeft from "@/components/ui/animations/SlideInLeft";
import { GuideHighlight } from "@/features/guide/components/GuideHighlight";
import { guideSectionsMeta } from "@/features/guide/data/guide";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "guide" });

    return {
        title: t("pageLabel"),
        description: t("pageDesc"),
        alternates: {
            canonical: `${siteUrl}/${locale}/guia`,
            languages: buildLanguageAlternates("guia"),
        },
        openGraph: {
            url: `${siteUrl}/${locale}/guia`,
            title: t("pageTitle"),
            description: t("pageDesc"),
        },
    };
}

export default async function GuidePage() {
    const t = await getTranslations("guide");

    return (
        <>
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="max-w-2xl flex flex-col gap-4 py-14 md:py-20">
                        <FadeUp>
                            <span className="label">{t("pageLabel")}</span>
                        </FadeUp>

                        <FadeUp delay={0.08}>
                            <h1 className="text-balance">{t("pageTitle")}</h1>
                        </FadeUp>

                        <FadeUp delay={0.16}>
                            <p className="max-w-xl text-base leading-relaxed text-muted">
                                {t("pageDesc")}
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.24}>
                            <p className="mt-1 text-xs text-muted/70">{t("disclaimer")}</p>
                        </FadeUp>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[220px_1fr]">
                    <aside className="hidden lg:block">
                        <nav className="sticky top-24 flex flex-col gap-1 py-16 pr-8">
                            <FadeUp>
                                <span className="label mb-3">{t("sidebarTitle")}</span>
                            </FadeUp>

                            {guideSectionsMeta.map((section, index) => (
                                <SlideInLeft key={section.slug} delay={index * 0.06}>
                                    <a
                                        href={`#${section.slug}`}
                                        className="group flex items-start gap-2.5 rounded-sm px-2 py-2 text-sm text-muted transition hover:bg-surface-soft/50 hover:text-foreground"
                                    >
                                        <span className="shrink-0 text-[0.6rem] tracking-widest text-accent-warm">
                                            {section.number}
                                        </span>
                                        <span>{t(section.shortKey as Parameters<typeof t>[0])}</span>
                                    </a>
                                </SlideInLeft>
                            ))}
                        </nav>
                    </aside>

                    <div className="absolute left-[220px] top-0 bottom-0 hidden w-px bg-border lg:block" />

                    <main className="flex flex-col divide-y divide-border lg:pl-16">
                        <section id="cpcv" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">01</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s1Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("cpcvIntro")}</p>
                                </FadeUp>

                                <FadeUp delay={0.18}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("cpcvMustContainTitle")}</h3>
                                </FadeUp>

                                <FadeUp delay={0.24}>
                                    <ul className="flex flex-col divide-y divide-border">
                                        {(["cpcvItem1","cpcvItem2","cpcvItem3","cpcvItem4","cpcvItem5","cpcvItem6","cpcvItem7"] as const).map((key) => (
                                            <li key={key} className="flex items-start gap-3 py-3 text-sm text-muted">
                                                <span className="mt-1 shrink-0 text-accent-warm">—</span>
                                                {t(key)}
                                            </li>
                                        ))}
                                    </ul>
                                </FadeUp>

                                <FadeUp delay={0.3}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("cpcvDepositTitle")}</h3>
                                </FadeUp>

                                <FadeUp delay={0.36}>
                                    <p className="text-base leading-relaxed text-muted">{t("cpcvDepositText")}</p>
                                </FadeUp>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <SlideInLeft>
                                        <GuideHighlight variant="warning">
                                            <strong className="text-foreground">{t("cpcvBuyerWithdraws").split("—")[0]}</strong>
                                            —{t("cpcvBuyerWithdraws").split("—")[1]}
                                        </GuideHighlight>
                                    </SlideInLeft>

                                    <SlideInLeft delay={0.08}>
                                        <GuideHighlight variant="warning">
                                            <strong className="text-foreground">{t("cpcvSellerWithdraws").split("—")[0]}</strong>
                                            —{t("cpcvSellerWithdraws").split("—")[1]}
                                        </GuideHighlight>
                                    </SlideInLeft>
                                </div>

                                <SlideInLeft delay={0.12}>
                                    <GuideHighlight>{t("cpcvHighlight")}</GuideHighlight>
                                </SlideInLeft>
                            </div>
                        </section>

                        <section id="escritura" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">02</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s2Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("escrituraIntro")}</p>
                                </FadeUp>

                                <FadeUp delay={0.18}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("escrituraDocsTitle")}</h3>
                                </FadeUp>

                                <FadeUp delay={0.24}>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <p className="mb-3 text-xs uppercase tracking-[0.12em] text-muted">{t("escrituraBuyerLabel")}</p>
                                            <ul className="flex flex-col divide-y divide-border">
                                                {(["escrituraBuyerItem1","escrituraBuyerItem2","escrituraBuyerItem3","escrituraBuyerItem4"] as const).map((key) => (
                                                    <li key={key} className="flex items-start gap-3 py-2.5 text-sm text-muted">
                                                        <span className="mt-1 shrink-0 text-accent-warm">—</span>
                                                        {t(key)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="mb-3 text-xs uppercase tracking-[0.12em] text-muted">{t("escrituraSellerLabel")}</p>
                                            <ul className="flex flex-col divide-y divide-border">
                                                {(["escrituraSellerItem1","escrituraSellerItem2","escrituraSellerItem3","escrituraSellerItem4","escrituraSellerItem5"] as const).map((key) => (
                                                    <li key={key} className="flex items-start gap-3 py-2.5 text-sm text-muted">
                                                        <span className="mt-1 shrink-0 text-accent-warm">—</span>
                                                        {t(key)}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </FadeUp>

                                <SlideInLeft>
                                    <GuideHighlight>{t("escrituraHighlight")}</GuideHighlight>
                                </SlideInLeft>
                            </div>
                        </section>

                        <section id="imt" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">03</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s3Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("imtIntro")}</p>
                                </FadeUp>

                                <FadeUp delay={0.18}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("imtTableTitle")}</h3>
                                </FadeUp>

                                <FadeUp delay={0.24}>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse text-sm">
                                            <thead>
                                                <tr className="border-b border-border">
                                                    <th className="py-3 pr-6 text-left text-xs font-medium uppercase tracking-widest text-muted">{t("imtColValue")}</th>
                                                    <th className="py-3 pr-6 text-right text-xs font-medium uppercase tracking-widest text-muted">{t("imtColRate")}</th>
                                                    <th className="py-3 text-right text-xs font-medium uppercase tracking-widest text-muted">{t("imtColDeduct")}</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {[
                                                    { range: "Até €97.064", rate: "0%", abate: "—" },
                                                    { range: "€97.064 a €132.774", rate: "2%", abate: "€1.941" },
                                                    { range: "€132.774 a €181.034", rate: "5%", abate: "€5.924" },
                                                    { range: "€181.034 a €301.688", rate: "7%", abate: "€9.545" },
                                                    { range: "€301.688 a €578.598", rate: "8%", abate: "€12.562" },
                                                    { range: "Acima de €578.598", rate: "6%", abate: "—" },
                                                ].map((row) => (
                                                    <tr key={row.range}>
                                                        <td className="py-3 pr-6 text-foreground/80">{row.range}</td>
                                                        <td className="py-3 pr-6 text-right font-medium text-accent-warm">{row.rate}</td>
                                                        <td className="py-3 text-right text-muted">{row.abate}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </FadeUp>

                                <SlideInLeft>
                                    <GuideHighlight variant="warning">{t("imtWarning")}</GuideHighlight>
                                </SlideInLeft>

                                <SlideInLeft delay={0.08}>
                                    <GuideHighlight>{t("imtDisclaimer")}</GuideHighlight>
                                </SlideInLeft>
                            </div>
                        </section>

                        <section id="imposto-de-selo" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">04</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s4Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("isIntro")}</p>
                                </FadeUp>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <SlideInLeft>
                                        <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("isDeedLabel")}</span>
                                            <span className="text-3xl font-light text-foreground">0,8%</span>
                                            <p className="text-sm leading-relaxed text-muted">{t("isDeedDesc")}</p>
                                        </div>
                                    </SlideInLeft>

                                    <SlideInLeft delay={0.08}>
                                        <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("isCreditLabel")}</span>
                                            <span className="text-3xl font-light text-foreground">0,6%</span>
                                            <p className="text-sm leading-relaxed text-muted">{t("isCreditDesc")}</p>
                                        </div>
                                    </SlideInLeft>
                                </div>
                            </div>
                        </section>

                        <section id="imi" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">05</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s5Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("imiIntro")}</p>
                                </FadeUp>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <SlideInLeft>
                                        <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("imiUrbanLabel")}</span>
                                            <span className="text-2xl font-light text-foreground">0,3% – 0,45%</span>
                                            <p className="text-xs leading-relaxed text-muted">{t("imiUrbanNote")}</p>
                                        </div>
                                    </SlideInLeft>

                                    <SlideInLeft delay={0.08}>
                                        <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("imiRuralLabel")}</span>
                                            <span className="text-2xl font-light text-foreground">0,8%</span>
                                            <p className="text-xs leading-relaxed text-muted">{t("imiRuralNote")}</p>
                                        </div>
                                    </SlideInLeft>

                                    <SlideInLeft delay={0.16}>
                                        <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("imiDevolutosLabel")}</span>
                                            <span className="text-2xl font-light text-foreground">Até 6×</span>
                                            <p className="text-xs leading-relaxed text-muted">{t("imiDevolutosNote")}</p>
                                        </div>
                                    </SlideInLeft>
                                </div>

                                <FadeUp delay={0.18}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("imiExemptionTitle")}</h3>
                                </FadeUp>

                                <FadeUp delay={0.24}>
                                    <p className="text-base leading-relaxed text-muted">{t("imiExemptionText")}</p>
                                </FadeUp>

                                <SlideInLeft>
                                    <GuideHighlight>{t("imiHighlight")}</GuideHighlight>
                                </SlideInLeft>
                            </div>
                        </section>

                        <section id="credito" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">06</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s6Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("creditIntro")}</p>
                                </FadeUp>

                                <FadeUp delay={0.18}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("creditRatesTitle")}</h3>
                                </FadeUp>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <SlideInLeft>
                                        <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("creditVariableLabel")}</span>
                                            <p className="text-sm leading-relaxed text-muted">{t("creditVariableDesc")}</p>
                                        </div>
                                    </SlideInLeft>

                                    <SlideInLeft delay={0.08}>
                                        <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                            <span className="text-xs uppercase tracking-[0.12em] text-muted">{t("creditFixedLabel")}</span>
                                            <p className="text-sm leading-relaxed text-muted">{t("creditFixedDesc")}</p>
                                        </div>
                                    </SlideInLeft>
                                </div>

                                <FadeUp delay={0.18}>
                                    <h3 className="mt-2 text-lg! font-semibold">{t("creditGlossaryTitle")}</h3>
                                </FadeUp>

                                <FadeUp delay={0.24}>
                                    <ul className="flex flex-col divide-y divide-border">
                                        {([
                                            ["creditTerm1","creditDef1"],
                                            ["creditTerm2","creditDef2"],
                                            ["creditTerm3","creditDef3"],
                                            ["creditTerm4","creditDef4"],
                                            ["creditTerm5","creditDef5"],
                                            ["creditTerm6","creditDef6"],
                                        ] as const).map(([termKey, defKey]) => (
                                            <li key={termKey} className="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:items-start sm:gap-6">
                                                <span className="shrink-0 font-semibold text-foreground sm:w-32">{t(termKey)}</span>
                                                <span className="leading-relaxed text-muted">{t(defKey)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </FadeUp>

                                <SlideInLeft>
                                    <GuideHighlight>{t("creditHighlight")}</GuideHighlight>
                                </SlideInLeft>
                            </div>
                        </section>

                        <section id="custos" className="scroll-mt-24 py-14">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <FadeUp>
                                        <span className="text-xs font-light tracking-[0.22em] text-accent-warm">07</span>
                                    </FadeUp>
                                    <FadeUp delay={0.06}>
                                        <h2>{t("s7Title")}</h2>
                                    </FadeUp>
                                </div>

                                <FadeUp delay={0.12}>
                                    <p className="text-base leading-relaxed text-muted">{t("costsIntro")}</p>
                                </FadeUp>

                                <FadeUp delay={0.18}>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse text-sm">
                                            <thead>
                                                <tr className="border-b border-border">
                                                    <th className="py-3 pr-6 text-left text-xs font-medium uppercase tracking-widest text-muted">{t("costsColItem")}</th>
                                                    <th className="py-3 pr-6 text-left text-xs font-medium uppercase tracking-widest text-muted">{t("costsColWho")}</th>
                                                    <th className="py-3 text-right text-xs font-medium uppercase tracking-widest text-muted">{t("costsColValue")}</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {([
                                                    ["cost1Item","cost1Who","cost1Value"],
                                                    ["cost2Item","cost2Who","cost2Value"],
                                                    ["cost3Item","cost3Who","cost3Value"],
                                                    ["cost4Item","cost4Who","cost4Value"],
                                                    ["cost5Item","cost5Who","cost5Value"],
                                                    ["cost6Item","cost6Who","cost6Value"],
                                                    ["cost7Item","cost7Who","cost7Value"],
                                                    ["cost8Item","cost8Who","cost8Value"],
                                                    ["cost9Item","cost9Who","cost9Value"],
                                                ] as const).map(([itemKey, whoKey, valueKey]) => (
                                                    <tr key={itemKey}>
                                                        <td className="py-3 pr-6 font-medium text-foreground/80">{t(itemKey)}</td>
                                                        <td className="py-3 pr-6 text-muted">{t(whoKey)}</td>
                                                        <td className="py-3 text-right font-medium text-accent-warm">{t(valueKey)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </FadeUp>

                                <SlideInLeft>
                                    <GuideHighlight>{t("costsHighlight")}</GuideHighlight>
                                </SlideInLeft>
                            </div>
                        </section>

                        <div className="py-14">
                            <div className="flex flex-col gap-6 rounded-sm border border-border p-8 md:p-10">
                                <FadeUp>
                                    <span className="label">{t("guideCTAEyebrow")}</span>
                                </FadeUp>

                                <FadeUp delay={0.08}>
                                    <h2 className="max-w-xl text-balance">{t("guideCTATitle")}</h2>
                                </FadeUp>

                                <FadeUp delay={0.16}>
                                    <p className="max-w-xl text-base leading-relaxed text-muted">{t("guideCTABody")}</p>
                                </FadeUp>

                                <FadeUp delay={0.24}>
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <Link
                                            href="/contacto"
                                            className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-sm font-semibold tracking-wide text-white! transition hover:opacity-85"
                                        >
                                            {t("guideCTATalk")}
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                        <Link
                                            href="/servicos"
                                            className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground transition hover:bg-surface-soft/60"
                                        >
                                            {t("guideCTAServices")}
                                        </Link>
                                    </div>
                                </FadeUp>
                            </div>
                        </div>
                    </main>
                </div>
            </Container>
        </>
    );
}