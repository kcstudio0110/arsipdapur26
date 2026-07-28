import { LINKS } from "@/config/links.config";
import type { SocialConfig, SocialItem } from "./Social.types";

export const SOCIAL_CONFIG: SocialConfig = {
    id: "social",

    eyebrow: "Mulai dari Sini",

    title: "Pilih Platform Favoritmu",

    description: "Hubungi kami langsung atau belanja melalui marketplace favoritmu.",
};

export const SOCIAL_ITEMS: SocialItem[] = [
    {
        id: "instagram",
        title: "Instagram",
        description: "Temukan inspirasi, promo, dan cerita dari dapur kami.",
        icon: "instagram",
        action: "Kunjungi",
        href: LINKS.social.instagram,
    },
    {
        id: "whatsapp",
        title: "WhatsApp",
        description: "Hubungi kami langsung untuk bertanya atau melakukan pemesanan.",
        icon: "whatsapp",
        action: "Chat",
        href: LINKS.social.whatsapp,
    },
    {
        id: "tokopedia",
        title: "Tokopedia",
        description: "Belanja produk Arsip Dapur 26 melalui Tokopedia.",
        icon: "shoppingBag",
        action: "Belanja",
        href: LINKS.social.tokopedia,
    },
    {
        id: "shopee",
        title: "Shopee",
        description: "Belanja produk Arsip Dapur 26 melalui Shopee.",
        icon: "shoppingBag",
        action: "Belanja",
        href: LINKS.social.shopee,
    },
];
