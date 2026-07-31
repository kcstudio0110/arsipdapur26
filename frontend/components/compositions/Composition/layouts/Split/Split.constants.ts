/**
 * -----------------------------------------------------------------------------
 * Split Media Position
 * -----------------------------------------------------------------------------
 *
 * Determines which side the media appears.
 */

export const SPLIT_MEDIA_POSITIONS = {
    LEFT: "left",

    RIGHT: "right",
} as const;

export type SplitMediaPosition = (typeof SPLIT_MEDIA_POSITIONS)[keyof typeof SPLIT_MEDIA_POSITIONS];

export const SPLIT_MEDIA_POSITION_OPTIONS = [
    {
        label: "Left",
        value: SPLIT_MEDIA_POSITIONS.LEFT,
    },
    {
        label: "Right",
        value: SPLIT_MEDIA_POSITIONS.RIGHT,
    },
] as const;

/**
 * -----------------------------------------------------------------------------
 * Split Area Width
 * -----------------------------------------------------------------------------
 *
 * Controls the maximum width of Media & Content.
 */

export const SPLIT_AREA_WIDTHS = {
    SMALL: "small",

    MEDIUM: "medium",

    LARGE: "large",

    FULL: "full",
} as const;

export type SplitAreaWidth = (typeof SPLIT_AREA_WIDTHS)[keyof typeof SPLIT_AREA_WIDTHS];

export const SPLIT_AREA_WIDTH_OPTIONS = [
    {
        label: "Small",
        value: SPLIT_AREA_WIDTHS.SMALL,
    },
    {
        label: "Medium",
        value: SPLIT_AREA_WIDTHS.MEDIUM,
    },
    {
        label: "Large",
        value: SPLIT_AREA_WIDTHS.LARGE,
    },
    {
        label: "Full",
        value: SPLIT_AREA_WIDTHS.FULL,
    },
] as const;

/**
 * -----------------------------------------------------------------------------
 * Width Classes
 * -----------------------------------------------------------------------------
 */

export const SPLIT_AREA_WIDTH_CLASSES = {
    [SPLIT_AREA_WIDTHS.SMALL]: "basis-2/5",

    [SPLIT_AREA_WIDTHS.MEDIUM]: "basis-1/2",

    [SPLIT_AREA_WIDTHS.LARGE]: "basis-3/5",

    [SPLIT_AREA_WIDTHS.FULL]: "basis-full",
} as const;
