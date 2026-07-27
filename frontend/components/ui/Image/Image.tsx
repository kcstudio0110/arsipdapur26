import NextImage from "next/image";

import { cn } from "@/lib/cn";

import {
    DEFAULT_IMAGE_PRELOAD,
    DEFAULT_IMAGE_QUALITY,
    DEFAULT_IMAGE_SIZES,
} from "./Image.constants";
import type { ImageProps } from "./Image.types";

export function Image({
    quality = DEFAULT_IMAGE_QUALITY,
    preload = DEFAULT_IMAGE_PRELOAD,
    sizes = DEFAULT_IMAGE_SIZES,
    className,
    ...props
}: ImageProps) {
    return (
        <NextImage
            quality={quality}
            preload={preload}
            sizes={sizes}
            className={cn(className)}
            {...props}
        />
    );
}
