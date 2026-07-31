"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { cn } from "@/lib/cn";

import { SPLIT_AREA_WIDTHS, SPLIT_AREA_WIDTH_CLASSES } from "./Split.constants";

import type { SplitContentConfig, SplitAreaLayout } from "./Split.types";
import { Tag } from "@/components/ui/Tag";

interface Props {
    config: SplitContentConfig;
    layout?: SplitAreaLayout;
}

export function SplitContent({ config, layout }: Props) {
    const width = layout?.width ?? SPLIT_AREA_WIDTHS.MEDIUM;

    return (
        <div className="flex flex-1 flex-col justify-center">
            <div className={cn("space-y-2", SPLIT_AREA_WIDTH_CLASSES[width])}>
                {config.eyebrow && (
                    <Typography as="p" variant={TYPOGRAPHY_VARIANTS.OVERLINE}>
                        {config.eyebrow}
                    </Typography>
                )}

                <Typography
                    as="h2"
                    variant={TYPOGRAPHY_VARIANTS.HEADING}
                    className="whitespace-pre-line"
                >
                    {config.title}
                </Typography>

                {config.description && (
                    <Typography
                        as="p"
                        variant={TYPOGRAPHY_VARIANTS.BODY}
                        className="whitespace-pre-line italic"
                    >
                        {config.description}
                    </Typography>
                )}

                {config.buttons && config.buttons.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                        {config.buttons.map((button) => (
                            <Button
                                key={button.href}
                                href={button.href}
                                variant={button.variant}
                                size={button.size ?? "sm"}
                                startIcon={button.startIcon && <Icon name={button.startIcon} />}
                                endIcon={button.endIcon && <Icon name={button.endIcon} />}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </div>
                )}

                {config.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {config.tags.map((tag) => (
                            <Tag key={tag.label} label={tag.label} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
