import {
    BACKGROUND_ALIGNMENTS,
    BACKGROUND_AREA_WIDTHS,
} from "@/components/compositions/Composition/layouts/Background";

import type { HeroConfig } from "./Hero.types";
import { LINKS } from "@/config/links.config";

export const HERO_CONFIG: HeroConfig = {
    id: "home-hero",

    background: {
        image: {
            desktop: "/images/hero/hero.webp",
            alt: "Produk Arsip Dapur 26",

            width: 1920,
            height: 800,
        },

        imageProps: {
            preload: true,
            quality: 90,
            sizes: "100vw",
        },
    },

    content: {
        title: "Rasa Lama,\nCara Baru.",

        description:
            "Masakan Indonesia yang praktis tanpa mengorbankan cita rasa asli.\nSiap disimpan di freezer dan dinikmati kapan saja.",

        buttons: [
            {
                label: "Hubungi Kami",
                href: LINKS.social.whatsapp,
                variant: "primary",
                startIcon: "whatsapp",
            },
            {
                label: "Belanja Sekarang",
                href: LINKS.internal.social,
                variant: "outline",
                startIcon: "shoppingBag",
            },
        ],
    },

    layout: {
        alignment: BACKGROUND_ALIGNMENTS.START,

        content: {
            width: BACKGROUND_AREA_WIDTHS.COMPACT,
        },

        overlay: {
            width: BACKGROUND_AREA_WIDTHS.DEFAULT,
        },
    },
};
