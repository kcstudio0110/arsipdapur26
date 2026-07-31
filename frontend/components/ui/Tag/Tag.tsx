import { cn } from "@/lib/cn";

import { TAG_SIZE_CLASSES, TAG_SIZES, TAG_VARIANT_CLASSES, TAG_VARIANTS } from "./Tag.constants";

import type { TagProps } from "./Tag.types";

export function Tag({
    label,
    variant = TAG_VARIANTS.OUTLINE,
    size = TAG_SIZES.SM,
    className,
}: TagProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center justify-center rounded-full border font-medium transition-colors",

                TAG_VARIANT_CLASSES[variant],

                TAG_SIZE_CLASSES[size],

                className,
            )}
        >
            {label}
        </span>
    );
}
