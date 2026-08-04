import type { ImageProps as NextImageProps } from "next/image";

export interface ResponsiveImage {
    desktop: string;
    mobile?: string;

    alt: string;

    width: number;
    height: number;
}

export interface ImageOptions {
    /**
     * Prioritaskan loading untuk image di atas fold.
     */
    preload?: boolean;

    /**
     * Loading strategy.
     */
    loading?: "lazy" | "eager";

    /**
     * Image quality (1–100).
     */
    quality?: number;

    /**
     * Responsive image sizes.
     */
    sizes?: string;

    /**
     * Placeholder mode.
     */
    placeholder?: "blur" | "empty";

    /**
     * Blur placeholder.
     */
    blurDataURL?: string;
}

export type ImageProps = NextImageProps;
