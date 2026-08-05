import { TYPOGRAPHY_VARIANTS } from "./Typography.constants";

export const TYPOGRAPHY_STYLES = {
    [TYPOGRAPHY_VARIANTS.DISPLAY]:
        "font-heading text-3xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight",

    [TYPOGRAPHY_VARIANTS.HEADING]: "text-3xl lg:text-4xl 2xl:text-5xl font-bold",

    [TYPOGRAPHY_VARIANTS.TITLE]: "text-xl lg:text-2xl 2xl:text-3xl font-semibold",

    [TYPOGRAPHY_VARIANTS.BODY]: "text-base lg:text-md 2xl:text-lg leading-tight font-semibold",

    [TYPOGRAPHY_VARIANTS.CAPTION]: "text-sm lg:text-base",

    [TYPOGRAPHY_VARIANTS.LABEL]: "text-sm lg:text-base font-medium",

    [TYPOGRAPHY_VARIANTS.OVERLINE]: "text-xs lg:text-sm uppercase tracking-[0.2em]",
} as const;
