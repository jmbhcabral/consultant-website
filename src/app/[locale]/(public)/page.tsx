/** src/app/[locale]/(public)/page.tsx */

import ConsultantSection from "@/features/home/components/ConsultantSection";
import FinalCta from "@/features/home/components/FinalCta";
import Hero from "@/features/home/components/Hero";
import KwSection from "@/features/home/components/KwSection";
import Services from "@/features/home/components/Services";
import TrustPillars from "@/features/home/components/TrustPillars";
import { JsonLd } from "@/components/seo/JsonLd";
import {
    buildLanguageAlternates,
    consultantEmail,
    consultantPhone,
    siteUrl,
} from "@/lib/seo/config";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "seo" });

    return {
        description: t("siteDescription"),
        alternates: {
            canonical: `${siteUrl}/${locale}`,
            languages: buildLanguageAlternates(),
        },
        openGraph: {
            url: `${siteUrl}/${locale}`,
            title: t("siteTitle"),
            description: t("siteDescription"),
            images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630 }],
        },
    };
}

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: "Chanilai Castro — Consultora Imobiliária",
    url: siteUrl,
    email: consultantEmail,
    telephone: consultantPhone,
    image: `${siteUrl}/images/consultant-3.png`,
    address: {
        "@type": "PostalAddress",
        addressCountry: "PT",
        addressRegion: "Portugal",
    },
    areaServed: {
        "@type": "Country",
        name: "Portugal",
    },
    memberOf: {
        "@type": "Organization",
        name: "KW Lead — Keller Williams Portugal",
        url: "https://kwportugal.pt",
    },
    knowsAbout: [
        "Compra de imóveis",
        "Venda de imóveis",
        "Investimento imobiliário",
        "Crédito habitação",
        "Mercado imobiliário português",
    ],
    sameAs: [`${siteUrl}/pt`],
};

export default function HomePage() {
    return (
        <>
            <JsonLd data={localBusinessSchema} />
            <Hero />
            <TrustPillars />
            <Services />
            <ConsultantSection />
            <KwSection />
            <FinalCta />
        </>
    );
}

