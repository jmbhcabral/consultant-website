/** src/app/sitemap.ts */
import { locales } from "@/lib/i18n/routing";
import { buildLanguageAlternates, siteUrl } from "@/lib/seo/config";
import type { MetadataRoute } from "next";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type PageEntry = {
    slug: string;
    changeFrequency: ChangeFrequency;
    priority: number;
};

const pages: PageEntry[] = [
    { slug: "",          changeFrequency: "monthly",  priority: 1.0 },
    { slug: "sobre",     changeFrequency: "monthly",  priority: 0.8 },
    { slug: "servicos",  changeFrequency: "monthly",  priority: 0.9 },
    { slug: "guia",      changeFrequency: "weekly",   priority: 0.7 },
    { slug: "contacto",  changeFrequency: "yearly",   priority: 0.6 },
    { slug: "privacidade", changeFrequency: "yearly", priority: 0.3 },
    { slug: "cookies",   changeFrequency: "yearly",   priority: 0.3 },
    { slug: "termos",    changeFrequency: "yearly",   priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return locales.flatMap((locale) =>
        pages.map(({ slug, changeFrequency, priority }) => {
            const path = slug ? `/${slug}` : "";
            return {
                url: `${siteUrl}/${locale}${path}`,
                lastModified,
                changeFrequency,
                priority,
                alternates: {
                    languages: buildLanguageAlternates(slug),
                },
            };
        })
    );
}
