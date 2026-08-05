import type { HeroConfig } from "./Hero.types";
import { LINKS } from "@/config/links.config";
import { LAYOUTS } from "@/components/compositions/Composition/presets";

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
                href: LINKS.redirect.whatsapp,
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

    layout: LAYOUTS.HERO,
};
