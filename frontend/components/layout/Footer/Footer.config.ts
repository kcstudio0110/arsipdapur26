import { LINKS } from "@/config/links.config";
import type { FooterConfig } from "./Footer.types";

export const FOOTER_CONFIG: FooterConfig = {
    socials: [
        {
            id: "whatsapp",
            label: "WhatsApp",
            icon: "whatsapp",
            href: LINKS.social.whatsapp,
        },
        {
            id: "instagram",
            label: "Instagram",
            icon: "instagram",
            href: LINKS.social.instagram,
        },
        {
            id: "shopee",
            label: "Shopee",
            icon: "shoppingBag",
            href: LINKS.social.shopee,
        },
        {
            id: "tokopedia",
            label: "Tokopedia",
            icon: "shoppingBag",
            href: LINKS.social.tokopedia,
        },
    ],
};
