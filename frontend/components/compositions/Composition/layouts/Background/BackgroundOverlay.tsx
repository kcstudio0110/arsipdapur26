import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

import { BACKGROUND_OVERLAY_WIDTH_CLASSES, BACKGROUND_AREA_WIDTHS } from "./Background.constants";

import type { BackgroundOverlayLayout } from "./Background.types";

type Props = {
    layout?: BackgroundOverlayLayout;
};

export function BackgroundOverlay({ layout }: Props) {
    const width = layout?.width ?? BACKGROUND_AREA_WIDTHS.DEFAULT;

    return (
        <div className="absolute inset-0 z-10">
            <div
                className={cn(
                    "h-full bg-gradient-to-r from-[var(--background)]/90 via-[var(--background)]/80 to-transparent",
                    BACKGROUND_OVERLAY_WIDTH_CLASSES[width],
                )}
            />
        </div>
    );
}
