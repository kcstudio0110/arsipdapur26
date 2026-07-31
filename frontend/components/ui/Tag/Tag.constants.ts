export const TAG_VARIANTS = {
    FILLED: "filled",
    OUTLINE: "outline",
} as const;

export const TAG_SIZES = {
    SM: "sm",
    MD: "md",
} as const;

export const TAG_VARIANT_CLASSES = {
    [TAG_VARIANTS.FILLED]: "bg-primary text-primary-foreground border-transparent",

    [TAG_VARIANTS.OUTLINE]: "border-border bg-background text-foreground",
};

export const TAG_SIZE_CLASSES = {
    [TAG_SIZES.SM]: "px-3 py-1 text-xs",

    [TAG_SIZES.MD]: "px-4 py-1.5 text-sm",
};
