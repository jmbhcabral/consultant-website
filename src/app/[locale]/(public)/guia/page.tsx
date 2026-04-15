/** src/app/[locale]/(public)/guia/page.tsx */

import Container from "@/components/ui/Container";
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
            {/* Hero */}
            <section className="border-b border-border bg-background">
                <Container>
                    <div className="flex flex-col gap-4 py-14 md:py-20 max-w-2xl">
                        <span className="label">{t("pageLabel")}</span>
                        <h1 className="text-balance">{t("pageTitle")}</h1>
                        <p className="text-base text-muted leading-relaxed max-w-xl">{t("pageDesc")}</p>
                        <p className="text-xs text-muted/70 mt-1">{t("disclaimer")}</p>
                    </div>
                </Container>
            </section>

            {/* Main content */}
            <Container>
                <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[220px_1fr]">

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <nav className="sticky top-24 flex flex-col gap-1 py-16 pr-8">
                            <span className="label mb-3">{t("sidebarTitle")}</span>
                            {guideSectionsMeta.map((section) => (
                                <a
                                    key={section.slug}
                                    href={`#${section.slug}`}
                                    className="flex items-baseline gap-2.5 rounded-sm px-2 py-2 text-sm text-muted transition hover:text-foreground hover:bg-surface-soft/50 group"
                                >
                                    <span className="text-[0.6rem] tracking-widest text-accent-warm shrink-0">
                                        {section.number}
                                    </span>
                                    <span>{t(section.shortKey as Parameters<typeof t>[0])}</span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Vertical divider */}
                    <div className="hidden lg:block absolute left-[220px] top-0 bottom-0 w-px bg-border" />

                    {/* Sections */}
                    <main className="flex flex-col divide-y divide-border lg:pl-16">

                        {/* 01 — CPCV */}
                        <section id="cpcv" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">01</span>
                                <h2>{t("s1Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("cpcvIntro")}</p>
                            <h3 className="text-lg! font-semibold mt-2">{t("cpcvMustContainTitle")}</h3>
                            <ul className="flex flex-col divide-y divide-border">
                                {(["cpcvItem1","cpcvItem2","cpcvItem3","cpcvItem4","cpcvItem5","cpcvItem6","cpcvItem7"] as const).map((key) => (
                                    <li key={key} className="flex items-start gap-3 py-3 text-sm text-muted">
                                        <span className="mt-1 shrink-0 text-accent-warm">—</span>
                                        {t(key)}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-lg! font-semibold mt-2">{t("cpcvDepositTitle")}</h3>
                            <p className="text-base text-muted leading-relaxed">{t("cpcvDepositText")}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <GuideHighlight variant="warning">
                                    <strong className="text-foreground">{t("cpcvBuyerWithdraws").split("—")[0]}</strong>
                                    —{t("cpcvBuyerWithdraws").split("—")[1]}
                                </GuideHighlight>
                                <GuideHighlight variant="warning">
                                    <strong className="text-foreground">{t("cpcvSellerWithdraws").split("—")[0]}</strong>
                                    —{t("cpcvSellerWithdraws").split("—")[1]}
                                </GuideHighlight>
                            </div>
                            <GuideHighlight>{t("cpcvHighlight")}</GuideHighlight>
                        </section>

                        {/* 02 — Escritura */}
                        <section id="escritura" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">02</span>
                                <h2>{t("s2Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("escrituraIntro")}</p>
                            <h3 className="text-lg! font-semibold mt-2">{t("escrituraDocsTitle")}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs text-muted uppercase tracking-[0.12em] mb-3">{t("escrituraBuyerLabel")}</p>
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
                                    <p className="text-xs text-muted uppercase tracking-[0.12em] mb-3">{t("escrituraSellerLabel")}</p>
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
                            <GuideHighlight>{t("escrituraHighlight")}</GuideHighlight>
                        </section>

                        {/* 03 — IMT */}
                        <section id="imt" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">03</span>
                                <h2>{t("s3Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("imtIntro")}</p>
                            <h3 className="text-lg! font-semibold mt-2">{t("imtTableTitle")}</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="py-3 pr-6 text-left text-xs font-medium tracking-widest uppercase text-muted">{t("imtColValue")}</th>
                                            <th className="py-3 pr-6 text-right text-xs font-medium tracking-widest uppercase text-muted">{t("imtColRate")}</th>
                                            <th className="py-3 text-right text-xs font-medium tracking-widest uppercase text-muted">{t("imtColDeduct")}</th>
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
                            <GuideHighlight variant="warning">{t("imtWarning")}</GuideHighlight>
                            <GuideHighlight>{t("imtDisclaimer")}</GuideHighlight>
                        </section>

                        {/* 04 — Imposto de Selo */}
                        <section id="imposto-de-selo" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">04</span>
                                <h2>{t("s4Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("isIntro")}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("isDeedLabel")}</span>
                                    <span className="text-3xl font-light text-foreground">0,8%</span>
                                    <p className="text-sm text-muted leading-relaxed">{t("isDeedDesc")}</p>
                                </div>
                                <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("isCreditLabel")}</span>
                                    <span className="text-3xl font-light text-foreground">0,6%</span>
                                    <p className="text-sm text-muted leading-relaxed">{t("isCreditDesc")}</p>
                                </div>
                            </div>
                        </section>

                        {/* 05 — IMI */}
                        <section id="imi" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">05</span>
                                <h2>{t("s5Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("imiIntro")}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("imiUrbanLabel")}</span>
                                    <span className="text-2xl font-light text-foreground">0,3% – 0,45%</span>
                                    <p className="text-xs text-muted leading-relaxed">{t("imiUrbanNote")}</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("imiRuralLabel")}</span>
                                    <span className="text-2xl font-light text-foreground">0,8%</span>
                                    <p className="text-xs text-muted leading-relaxed">{t("imiRuralNote")}</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("imiDevolutosLabel")}</span>
                                    <span className="text-2xl font-light text-foreground">Até 6×</span>
                                    <p className="text-xs text-muted leading-relaxed">{t("imiDevolutosNote")}</p>
                                </div>
                            </div>
                            <h3 className="text-lg! font-semibold mt-2">{t("imiExemptionTitle")}</h3>
                            <p className="text-base text-muted leading-relaxed">{t("imiExemptionText")}</p>
                            <GuideHighlight>{t("imiHighlight")}</GuideHighlight>
                        </section>

                        {/* 06 — Crédito Habitação */}
                        <section id="credito" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">06</span>
                                <h2>{t("s6Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("creditIntro")}</p>
                            <h3 className="text-lg! font-semibold mt-2">{t("creditRatesTitle")}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("creditVariableLabel")}</span>
                                    <p className="text-sm text-muted leading-relaxed">{t("creditVariableDesc")}</p>
                                </div>
                                <div className="flex flex-col gap-3 rounded-sm border border-border p-5">
                                    <span className="text-xs text-muted uppercase tracking-[0.12em]">{t("creditFixedLabel")}</span>
                                    <p className="text-sm text-muted leading-relaxed">{t("creditFixedDesc")}</p>
                                </div>
                            </div>
                            <h3 className="text-lg! font-semibold mt-2">{t("creditGlossaryTitle")}</h3>
                            <ul className="flex flex-col divide-y divide-border">
                                {([
                                    ["creditTerm1","creditDef1"],
                                    ["creditTerm2","creditDef2"],
                                    ["creditTerm3","creditDef3"],
                                    ["creditTerm4","creditDef4"],
                                    ["creditTerm5","creditDef5"],
                                    ["creditTerm6","creditDef6"],
                                ] as const).map(([termKey, defKey]) => (
                                    <li key={termKey} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 py-4 text-sm">
                                        <span className="shrink-0 font-semibold text-foreground sm:w-32">{t(termKey)}</span>
                                        <span className="text-muted leading-relaxed">{t(defKey)}</span>
                                    </li>
                                ))}
                            </ul>
                            <GuideHighlight>{t("creditHighlight")}</GuideHighlight>
                        </section>

                        {/* 07 — Cost summary */}
                        <section id="custos" className="flex flex-col gap-6 py-14 scroll-mt-24">
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-light tracking-[0.22em] text-accent-warm">07</span>
                                <h2>{t("s7Title")}</h2>
                            </div>
                            <p className="text-base text-muted leading-relaxed">{t("costsIntro")}</p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="py-3 pr-6 text-left text-xs font-medium tracking-widest uppercase text-muted">{t("costsColItem")}</th>
                                            <th className="py-3 pr-6 text-left text-xs font-medium tracking-widest uppercase text-muted">{t("costsColWho")}</th>
                                            <th className="py-3 text-right text-xs font-medium tracking-widest uppercase text-muted">{t("costsColValue")}</th>
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
                                                <td className="py-3 text-right text-accent-warm font-medium">{t(valueKey)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <GuideHighlight>{t("costsHighlight")}</GuideHighlight>
                        </section>

                        {/* CTA */}
                        <div className="py-14">
                            <div className="flex flex-col gap-6 rounded-sm border border-border p-8 md:p-10">
                                <span className="label">{t("guideCTAEyebrow")}</span>
                                <h2 className="max-w-xl text-balance">{t("guideCTATitle")}</h2>
                                <p className="max-w-xl text-base text-muted leading-relaxed">{t("guideCTABody")}</p>
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
                            </div>
                        </div>
                    </main>
                </div>
            </Container>
        </>
    );
}
