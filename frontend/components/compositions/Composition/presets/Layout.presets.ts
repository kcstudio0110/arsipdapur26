import { BACKGROUND_ALIGNMENTS, BACKGROUND_AREA_WIDTHS } from "../layouts/Background";

import { LAYOUTS } from "./Layout.constants";

import type { LayoutPreset } from "./Layout.types";

export const LAYOUT_PRESETS: Record<(typeof LAYOUTS)[keyof typeof LAYOUTS], LayoutPreset> = {
    [LAYOUTS.HERO]: {
        desktop: {
            alignment: BACKGROUND_ALIGNMENTS.START,

            content: {
                width: BACKGROUND_AREA_WIDTHS.COMPACT,
            },

            overlay: {
                width: BACKGROUND_AREA_WIDTHS.DEFAULT,
            },
        },

        mobile: {
            alignment: BACKGROUND_ALIGNMENTS.START,

            content: {
                width: BACKGROUND_AREA_WIDTHS.FULL,
            },
        },
    },

    [LAYOUTS.SPLIT]: {
        desktop: {
            alignment: BACKGROUND_ALIGNMENTS.START,

            content: {
                width: BACKGROUND_AREA_WIDTHS.DEFAULT,
            },

            overlay: {
                width: BACKGROUND_AREA_WIDTHS.DEFAULT,
            },
        },

        mobile: {
            alignment: BACKGROUND_ALIGNMENTS.START,

            content: {
                width: BACKGROUND_AREA_WIDTHS.DEFAULT,
            },
        },
    },

    [LAYOUTS.CENTER]: {
        desktop: {
            alignment: BACKGROUND_ALIGNMENTS.CENTER,

            content: {
                width: BACKGROUND_AREA_WIDTHS.WIDE,
            },

            overlay: {
                width: BACKGROUND_AREA_WIDTHS.DEFAULT,
            },
        },

        mobile: {
            alignment: BACKGROUND_ALIGNMENTS.CENTER,

            content: {
                width: BACKGROUND_AREA_WIDTHS.DEFAULT,
            },
        },
    },
};
