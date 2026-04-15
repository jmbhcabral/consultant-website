/** src/features/guide/data/guide.ts */

export type GuideSectionMeta = {
    number: string;
    slug: string;
    shortKey: string;
    titleKey: string;
};

/** Structural data only — text comes from translations */
export const guideSectionsMeta: GuideSectionMeta[] = [
    { number: "01", slug: "cpcv",              shortKey: "s1Short", titleKey: "s1Title" },
    { number: "02", slug: "escritura",         shortKey: "s2Short", titleKey: "s2Title" },
    { number: "03", slug: "imt",               shortKey: "s3Short", titleKey: "s3Title" },
    { number: "04", slug: "imposto-de-selo",   shortKey: "s4Short", titleKey: "s4Title" },
    { number: "05", slug: "imi",               shortKey: "s5Short", titleKey: "s5Title" },
    { number: "06", slug: "credito",           shortKey: "s6Short", titleKey: "s6Title" },
    { number: "07", slug: "custos",            shortKey: "s7Short", titleKey: "s7Title" },
];
