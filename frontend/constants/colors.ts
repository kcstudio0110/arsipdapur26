export const PLATFORM_COLORS_CLASS = {
    instagram: "group-hover:text-[#E4405F]",
    whatsapp: "group-hover:text-[#25D366]",
    tokopedia: "group-hover:text-[#42B549]",
    shopee: "group-hover:text-[#EE4D2D]",
} as const;

export type PlatformColorClass = (typeof PLATFORM_COLORS_CLASS)[keyof typeof PLATFORM_COLORS_CLASS];
