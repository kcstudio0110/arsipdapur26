import type { ImageOptions, ResponsiveImage } from "@/components/ui/Image";

import type { BaseCompositionConfig, CompositionProps } from "../../Composition.types";

import type { BackgroundAlignment, BackgroundAreaWidth } from "./Background.constants";

import type { IconName } from "@/components/ui/Icon";

import { ButtonSize, ButtonVariant } from "@/components/ui/Button/Button.types";

export interface BackgroundButton {
    label: string;

    href: string;

    variant?: ButtonVariant;
    size?: ButtonSize;

    startIcon?: IconName;
    endIcon?: IconName;
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
