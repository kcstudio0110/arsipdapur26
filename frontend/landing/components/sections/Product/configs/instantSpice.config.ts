import {
    SPLIT_AREA_WIDTHS,
    SPLIT_MEDIA_POSITIONS,
} from "@/components/compositions/Composition/layouts/Split";

import type { ProductConfig } from "../Product.types";

export const INSTANT_SPICE_CONFIG: ProductConfig = {
    id: "instant-spice",

    media: {
        image: {
            desktop: "/images/products/Products - Bumbu.webp",
            mobile: "/images/products//Products - Bumbu.webp",
            alt: "Bumbu Instan Arsip Dapur 26",

            width: 800,
            height: 800,
        },
    },

    content: {
        eyebrow: "Produk Kami",

        title: "Bumbu Instan",

        description:
            "Bumbu siap masak dengan cita rasa rumahan khas Arsip Dapur 26. Cukup tambahkan bahan utama, lalu masak dalam hitungan menit tanpa perlu meracik bumbu dari awal.",

        tags: [
            { label: "Woku" },
            { label: "Rica" },
            { label: "Banjar" },
            { label: "Kentang Balado" },
            { label: "Lado Hijau" },
            { label: "Nasi Goreng Kencur" },
        ],
    },

    layout: {
        position: SPLIT_MEDIA_POSITIONS.RIGHT,

        media: {
            width: SPLIT_AREA_WIDTHS.MEDIUM,
        },

        content: {
            width: SPLIT_AREA_WIDTHS.MEDIUM,
        },
    },
};
