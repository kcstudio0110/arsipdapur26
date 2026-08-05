import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/cn";
import { DEFAULT_METADATA } from "@/config/seo.config";

import { inter, playfair, handwritten, google_sans } from "@/lib/fonts";
import { SITE } from "@/config/site.config";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { WebsiteJsonLd } from "@/components/seo/WebsiteJsonLd";

export const metadata: Metadata = DEFAULT_METADATA;

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang={SITE.language}>
            <body
                className={cn(
                    inter.variable,
                    playfair.variable,
                    handwritten.variable,
                    google_sans.variable,
                )}
            >
                <OrganizationJsonLd />
                <WebsiteJsonLd />

                {children}
            </body>
        </html>
    );
}
