import type { SocialConfig, SocialItem } from "./Social.types";

export const SOCIAL_CONFIG: SocialConfig = {
    id: "social",

    eyebrow: "Temukan Kami",

    title: "Platform Favoritmu",

    description: "Ikuti perjalanan Arsip Dapur 26 atau pesan langsung melalui platform favoritmu.",
};

export const SOCIAL_ITEMS: SocialItem[] = [
    {
        id: "instagram",
        title: "Instagram",
        description: "Ikuti resep, promo, dan cerita terbaru dari dapur kami.",
        icon: "instagram",
        action: "Kunjungi",
        href: "#",
    },
    {
        id: "whatsapp",
        title: "WhatsApp",
        description: "Hubungi kami langsung untuk bertanya atau melakukan pemesanan.",
        icon: "whatsapp",
        action: "Chat",
        href: "#",
    },
    {
        id: "tokopedia",
        title: "Tokopedia",
        description: "Belanja produk Arsip Dapur 26 melalui Tokopedia.",
        icon: "shoppingBag",
        action: "Belanja",
        href: "#",
    },
    {
        id: "shopee",
        title: "Shopee",
        description: "Belanja produk Arsip Dapur 26 melalui Shopee.",
        icon: "shoppingBag",
        action: "Belanja",
        href: "#",
    },
];
