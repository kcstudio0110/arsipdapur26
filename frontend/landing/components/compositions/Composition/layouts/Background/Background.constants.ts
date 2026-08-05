export const BACKGROUND_ALIGNMENTS = {
    START: "start",
    CENTER: "center",
    END: "end",
} as const;

export type BackgroundAlignment =
    (typeof BACKGROUND_ALIGNMENTS)[keyof typeof BACKGROUND_ALIGNMENTS];

export const BACKGROUND_ALIGNMENT_OPTIONS = [
    {
        label: "Start",
        value: BACKGROUND_ALIGNMENTS.START,
    },
    {
        label: "Center",
        value: BACKGROUND_ALIGNMENTS.CENTER,
    },
    {
        label: "End",
        value: BACKGROUND_ALIGNMENTS.END,
    },
] as const;

export const BACKGROUND_ALIGNMENT_CLASSES = {
    [BACKGROUND_ALIGNMENTS.START]: "items-start text-left",

    [BACKGROUND_ALIGNMENTS.CENTER]: "items-center text-center",

    [BACKGROUND_ALIGNMENTS.END]: "items-end text-right",
} as const;

/**
 * --------------------------------------------------------------------------
 * Background Area Width
 * --------------------------------------------------------------------------
 *
 * Controls the maximum width of an area inside the Background layout.
 *
 * Used by:
 * - Content Area
 * - Overlay Area
 */
export const BACKGROUND_AREA_WIDTHS = {
    /**
     * 40% width.
     * Ideal untuk hero dengan visual dominan.
     */
    COMPACT: "compact",

    /**
     * 50% width.
     * Standard area width.
     */
    DEFAULT: "default",

    /**
     * 60% width.
     * Untuk teks yang lebih panjang.
     */
    WIDE: "wide",

    /**
     * 100% width.
     */
    FULL: "full",
} as const;

export type BackgroundAreaWidth =
    (typeof BACKGROUND_AREA_WIDTHS)[keyof typeof BACKGROUND_AREA_WIDTHS];

export const BACKGROUND_AREA_WIDTH_OPTIONS = [
    {
        label: "Compact",
        value: BACKGROUND_AREA_WIDTHS.COMPACT,
        description: "40% (2/5) • Area sempit untuk visual yang dominan",
    },
    {
        label: "Default",
        value: BACKGROUND_AREA_WIDTHS.DEFAULT,
        description: "50% (1/2) • Area standar untuk sebagian besar layout",
    },
    {
        label: "Wide",
        value: BACKGROUND_AREA_WIDTHS.WIDE,
        description: "60% (3/5) • Area lebih luas untuk konten yang panjang",
    },
    {
        label: "Full",
        value: BACKGROUND_AREA_WIDTHS.FULL,
        description: "100% • Menggunakan seluruh area container",
    },
] as const;

export const BACKGROUND_CONTENT_WIDTH_CLASSES = {
    [BACKGROUND_AREA_WIDTHS.COMPACT]: "max-w-2/5",

    [BACKGROUND_AREA_WIDTHS.DEFAULT]: "max-w-1/2",

    [BACKGROUND_AREA_WIDTHS.WIDE]: "max-w-3/5",

    [BACKGROUND_AREA_WIDTHS.FULL]: "max-w-full",
} as const;

export const BACKGROUND_OVERLAY_WIDTH_CLASSES = {
    [BACKGROUND_AREA_WIDTHS.COMPACT]: "w-2/5",

    [BACKGROUND_AREA_WIDTHS.DEFAULT]: "w-1/2",

    [BACKGROUND_AREA_WIDTHS.WIDE]: "w-3/5",

    [BACKGROUND_AREA_WIDTHS.FULL]: "w-full",
} as const;
