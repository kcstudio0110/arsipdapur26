import {
    SPLIT_AREA_WIDTHS,
    SPLIT_MEDIA_POSITIONS,
} from "@/components/compositions/Composition/layouts/Split";

import type { ProductConfig } from "../Product.types";

export const FROZEN_FOOD_CONFIG: ProductConfig = {
    id: "frozen-food",

    media: {
        image: {
            desktop: "/images/products/Products - Frozen Food.webp",
            mobile: "/images/products/Products - Frozen Food.webp",
            alt: "Frozen Food Arsip Dapur 26",

            width: 800,
            height: 800,
        },
    },

    content: {
        eyebrow: "Produk Kami",

        title: "Frozen Food",

        description:
            "Ayam berbumbu khas Nusantara yang dimasak perlahan menggunakan resep keluarga Arsip Dapur 26. Tinggal panaskan dan sajikan kapan saja.",

        tags: [
            { label: "Ayam Suwir Woku" },
            { label: "Ayam Suwir Rica" },
            { label: "Ayam Suwir Lado Hijau" },
        ],
    },

    layout: {
        position: SPLIT_MEDIA_POSITIONS.LEFT,

        media: {
            width: SPLIT_AREA_WIDTHS.MEDIUM,
        },

        content: {
            width: SPLIT_AREA_WIDTHS.MEDIUM,
        },
    },
};
