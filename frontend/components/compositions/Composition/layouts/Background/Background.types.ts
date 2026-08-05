import type { ImageOptions, ResponsiveImage } from "@/components/ui/Image";

import type { BaseCompositionConfig, CompositionProps } from "../../Composition.types";

import type { IconName } from "@/components/ui/Icon";

import { ButtonSize, ButtonVariant } from "@/components/ui/Button/Button.types";
import { LayoutVariant } from "../../presets";

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

export interface BackgroundConfig extends BaseCompositionConfig {
    background: BackgroundImageConfig;
    content: BackgroundContentConfig;
    layout?: LayoutVariant;
}

export type BackgroundProps = CompositionProps<BackgroundConfig>;
