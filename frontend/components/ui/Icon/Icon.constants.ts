import type { IconWeight } from "@phosphor-icons/react";

export const ICON_SIZES = {
    XS: 16,
    SM: 20,
    MD: 24,
    LG: 32,
    XL: 40,
} as const;

export const DEFAULT_ICON_SIZE = ICON_SIZES.SM;

export const DEFAULT_ICON_WEIGHT: IconWeight = "regular";

export const DEFAULT_ICON_MIRRORED = false;
