import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { buildConfig, site } from "@/config/site";
import { buildLocale, configuredLocale, getCopy, localePendingScript } from "@/i18n";
import { LocaleSync } from "@/i18n/use-copy";
import { fontSans } from "./fonts";

const { ogLocale, owner, t } = getCopy(buildLocale, buildConfig.owner);

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    description: t.description,
    // The page is meant to be sent by link, not found through a search
    robots: { index: false, follow: false },
    authors: [{ name: owner }],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        locale: ogLocale,
        url: "/",
        title: t.title,
        description: t.description,
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
};

export const viewport: Viewport = {
    themeColor: "#0d1a16",
    colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        // The language can be switched before hydration: see localePendingScript
        <html lang={buildLocale} className={fontSans.variable} suppressHydrationWarning>
            <body>
                {/* Without JavaScript, nothing would reveal the conversation */}
                <noscript>
                    <style>
                        {"[data-reveal]{opacity:1;transform:none}[data-demo-full]{visibility:visible}[data-demo-summary]{opacity:1}"}
                    </style>
                </noscript>
                {!configuredLocale && <script dangerouslySetInnerHTML={{ __html: localePendingScript }} />}
                <LocaleSync />
                {children}
                {/* Vercel's scripts only exist on Vercel: builds elsewhere leave them out */}
                {process.env.VERCEL && (
                    <>
                        <Analytics />
                        <SpeedInsights />
                    </>
                )}
            </body>
        </html>
    );
}
