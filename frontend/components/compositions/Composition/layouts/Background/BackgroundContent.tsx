"use client";

import { Icon } from "@/components/ui/Icon";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { cn } from "@/lib/cn";

import {
    BACKGROUND_ALIGNMENT_CLASSES,
    BACKGROUND_ALIGNMENTS,
    BACKGROUND_CONTENT_WIDTH_CLASSES,
    BACKGROUND_AREA_WIDTHS,
} from "./Background.constants";

import type { BackgroundAlignment } from "./Background.constants";
import type { BackgroundContentConfig } from "./Background.types";

import type { LayoutDesktopPreset, LayoutMobilePreset } from "../../presets";
import { Button } from "@/components/ui/Button/Button";

type Props = {
    config: BackgroundContentConfig;

    layout: LayoutDesktopPreset["content"] | LayoutMobilePreset["content"];

    alignment?: BackgroundAlignment;
};

export function BackgroundContent({
    config,
    layout,
    alignment = BACKGROUND_ALIGNMENTS.START,
}: Props) {
    const width = layout.width ?? BACKGROUND_AREA_WIDTHS.DEFAULT;

    return (
        <div
            className={cn(
                "flex flex-1 flex-col justify-center gap-6",
                BACKGROUND_ALIGNMENT_CLASSES[alignment],
            )}
        >
            <div className={cn("w-full", BACKGROUND_CONTENT_WIDTH_CLASSES[width])}>
                {config.eyebrow && (
                    <Typography as="p" variant={TYPOGRAPHY_VARIANTS.OVERLINE}>
                        {config.eyebrow}
                    </Typography>
                )}

                <Typography
                    as="h1"
                    variant={TYPOGRAPHY_VARIANTS.DISPLAY}
                    className="whitespace-pre-line"
                >
                    {config.title}
                </Typography>

                {config.description && (
                    <Typography
                        as="p"
                        variant={TYPOGRAPHY_VARIANTS.BODY}
                        className="mt-3 pl-2 whitespace-pre-line italic"
                    >
                        {config.description}
                    </Typography>
                )}

                {config.buttons && config.buttons.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {config.buttons.map((button) => (
                            <Button
                                key={button.href}
                                href={button.href}
                                size={button.size ?? "sm"}
                                variant={button.variant}
                                startIcon={button.startIcon && <Icon name={button.startIcon} />}
                                endIcon={button.endIcon && <Icon name={button.endIcon} />}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
