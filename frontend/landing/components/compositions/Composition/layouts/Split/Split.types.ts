import type { ImageOptions, ResponsiveImage } from "@/components/ui/Image";

import type { BaseCompositionConfig, CompositionProps } from "../../Composition.types";

import type { SplitAreaWidth, SplitMediaPosition } from "./Split.constants";

import type { IconName } from "@/components/ui/Icon";

import type { ButtonSize, ButtonVariant } from "@/components/ui/Button/Button.types";

export interface SplitTag {
    label: string;
}

export interface SplitButton {
    label: string;

    href: string;

    variant?: ButtonVariant;
    size?: ButtonSize;

    startIcon?: IconName;
    endIcon?: IconName;
}

export interface SplitContentConfig {
    eyebrow?: string;

    title: string;

    description?: string;

    tags?: SplitTag[];

    buttons?: SplitButton[];
}

export interface SplitMediaConfig {
    image?: ResponsiveImage;

    imageProps?: ImageOptions;
}

export interface SplitAreaLayout {
    width?: SplitAreaWidth;
}

export interface SplitLayout {
    position?: SplitMediaPosition;

    media?: SplitAreaLayout;

    content?: SplitAreaLayout;
}

export interface SplitConfig extends BaseCompositionConfig {
    media: SplitMediaConfig;

    content: SplitContentConfig;

    layout?: SplitLayout;
}

export type SplitProps = CompositionProps<SplitConfig>;
