import {
    SPLIT_AREA_WIDTHS,
    SPLIT_MEDIA_POSITIONS,
} from "@/components/compositions/Composition/layouts/Split";

import type { ProductConfig } from "../Product.types";

export const CHOPPED_ONION_CONFIG: ProductConfig = {
    id: "chopped-onion",

    media: {
        image: {
            desktop: "/images/products/Products - Bawang.webp",
            mobile: "/images/products//Products - Bawang.webp",
            alt: "Bawang Cincang Arsip Dapur 26",

            width: 800,
            height: 800,
        },
    },

    content: {
        eyebrow: "Produk Kami",

        title: "Bawang Cincang Siap Pakai",

        description:
            "Bawang merah, bawang putih, dan bawang bombai yang telah dicincang dan disimpan dalam minyak canola sehingga lebih praktis digunakan untuk kebutuhan memasak sehari-hari.",

        tags: [{ label: "Bawang Putih" }, { label: "Bawang Merah" }, { label: "Bawang Bombai" }],
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
