import type { Metadata } from "next";
import { SITE } from "./site.config";

export const DEFAULT_METADATA: Metadata = {
    metadataBase: new URL(SITE.url),

    title: {
        default: SITE.name,
        template: `%s | ${SITE.name}`,
    },

    description: SITE.description,

    applicationName: SITE.name,

    authors: [
        {
            name: SITE.company,
        },
    ],

    creator: SITE.company,

    publisher: SITE.company,

    category: "Food",

    keywords: [
        "Arsip Dapur 26",
        "Frozen Food",
        "Frozen Food Bandung",
        "Bumbu Instan",
        "Bumbu Masak",
        "Bumbu Woku",
        "Bumbu Rica",
        "Bumbu Banjar",
        "Bawang Cincang",
        "Ayam Woku",
        "Ayam Rica",
        "Kuliner Bandung",
        "Masakan Rumahan",
    ],

    icons: {
        icon: "/branding/favicon/favicon.ico",

        apple: "/branding/app-icons/apple-touch-icon.png",
    },

    openGraph: {
        type: "website",

        locale: SITE.locale,

        url: SITE.url,

        siteName: SITE.name,

        title: SITE.name,

        description: SITE.description,

        images: [
            {
                url: SITE.ogImage,

                width: 1200,

                height: 630,

                alt: SITE.name,
            },
        ],
    },

    manifest: "/site.webmanifest",
};
