import type { ImageOptions, ResponsiveImage } from "@/components/ui/Image";

import type { BaseCompositionConfig, CompositionProps } from "../../Composition.types";

import type { BackgroundAlignment, BackgroundAreaWidth } from "./Background.constants";

export interface BackgroundButton {
    label: string;
    href: string;
}

export interface BackgroundContentConfig {
    eyebrow?: string;
    title: string;
    description?: string;
    buttons?: BackgroundButton[];
}

export interface BackgroundImageConfig {
    image: ResponsiveImage;

    imageProps?: ImageOptions;
}

export interface BackgroundContentLayout {
    width?: BackgroundAreaWidth;
}

export interface BackgroundOverlayLayout {
    width?: BackgroundAreaWidth;
}

export interface BackgroundLayout {
    alignment?: BackgroundAlignment;

    content?: BackgroundContentLayout;

    overlay?: BackgroundOverlayLayout;
}

export interface BackgroundConfig extends BaseCompositionConfig {
    background: BackgroundImageConfig;
    content: BackgroundContentConfig;
    layout?: BackgroundLayout;
}

export type BackgroundProps = CompositionProps<BackgroundConfig>;
