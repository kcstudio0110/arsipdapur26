import { Container } from "@/components/layout/Container";

import { BACKGROUND_ALIGNMENTS } from "./Background.constants";

import { BackgroundContent } from "./BackgroundContent";
import { BackgroundImage } from "./BackgroundImage";
import { BackgroundOverlay } from "./BackgroundOverlay";

import type { BackgroundProps } from "./Background.types";

export function Background({ config }: BackgroundProps) {
    const { background, content, layout } = config;

    const alignment = layout?.alignment ?? BACKGROUND_ALIGNMENTS.START;

    return (
        <section className="relative overflow-hidden">
            <BackgroundImage config={background} />

            <BackgroundOverlay layout={layout?.overlay} />

            <div className="absolute inset-0 z-20">
                <Container className="flex h-full">
                    <BackgroundContent
                        config={content}
                        layout={layout?.content}
                        alignment={alignment}
                    />
                </Container>
            </div>
        </section>
    );
}
