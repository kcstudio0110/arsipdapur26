import type { AffiliatePlatform } from "../types/affiliate-redirect";

export const AFFILIATE_PLATFORM_DATA: Record<
    AffiliatePlatform,
    {
        code: AffiliatePlatform;
        name: string;
        active: boolean;
    }
> = {
    sh: {
        code: "sh",
        name: "Shopee",
        active: true,
    },

    tp: {
        code: "tp",
        name: "Tokopedia",
        active: true,
    },

    tt: {
        code: "tt",
        name: "TikTok Shop",
        active: true,
    },

    web: {
        code: "web",
        name: "Arsip Dapur 26 Website",
        active: true,
    },
};
