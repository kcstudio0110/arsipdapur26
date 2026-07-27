import type { SocialConfig } from "./Social.types";

export const SOCIAL_CONFIG: SocialConfig = {
    id: "social",

    eyebrow: "Temukan Kami",

    title: "Platform Favoritmu",

    description: "Ikuti perjalanan Arsip Dapur 26 atau pesan langsung melalui platform favoritmu.",

    items: [
        {
            id: "instagram",
            title: "Instagram",
            description: "Lihat update terbaru, promo, dan cerita di balik dapur kami.",
            icon: "instagram",
            href: "#",
        },
        {
            id: "whatsapp",
            title: "WhatsApp",
            description: "Hubungi kami langsung untuk bertanya atau melakukan pemesanan.",
            icon: "phone",
            href: "#",
        },
        {
            id: "tokopedia",
            title: "Tokopedia",
            description: "Belanja produk Arsip Dapur 26 melalui Tokopedia.",
            icon: "cart",
            href: "#",
        },
        {
            id: "shopee",
            title: "Shopee",
            description: "Belanja produk Arsip Dapur 26 melalui Shopee.",
            icon: "cart",
            href: "#",
        },
    ],
};
