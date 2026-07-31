import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

import {
    SPLIT_AREA_WIDTHS,
    SPLIT_AREA_WIDTH_CLASSES,
    SPLIT_MEDIA_POSITIONS,
} from "./Split.constants";

import { SplitContent } from "./SplitContent";
import { SplitImage } from "./SplitImage";

import type { SplitProps } from "./Split.types";

export function Split({ config }: SplitProps) {
    const { media, content, layout } = config;

    const hasMedia = !!media.image;

    const position = layout?.position ?? SPLIT_MEDIA_POSITIONS.LEFT;

    const mediaWidth = layout?.media?.width ?? SPLIT_AREA_WIDTHS.MEDIUM;

    return (
        <Container>
            <div
                className={cn(
                    "flex items-center gap-12 py-4",
                    position === SPLIT_MEDIA_POSITIONS.RIGHT && "flex-row-reverse",
                )}
            >
                {hasMedia && (
                    <div className={cn("flex", SPLIT_AREA_WIDTH_CLASSES[mediaWidth])}>
                        <SplitImage config={media} />
                    </div>
                )}

                <SplitContent config={content} layout={layout?.content} />
            </div>
        </Container>
    );
}
