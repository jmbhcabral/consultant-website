/** src/app/layout.tsx */
import { siteUrl, siteName } from "@/lib/seo/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${siteName} — Consultora Imobiliária`,
        template: `%s | ${siteName}`,
    },
    description:
        "Consultoria imobiliária com proximidade, rigor e transparência. Apoio especializado na compra, venda e investimento imobiliário em Portugal.",
    authors: [{ name: siteName }],
    creator: siteName,
    openGraph: {
        type: "website",
        siteName,
        locale: "pt_PT",
    },
    twitter: {
        card: "summary_large_image",
        creator: siteName,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={`${inter.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
