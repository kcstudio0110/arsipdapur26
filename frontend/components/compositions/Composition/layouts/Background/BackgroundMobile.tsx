import { Container } from "@/components/layout/Container";

import { BACKGROUND_ALIGNMENTS } from "./Background.constants";

import { BackgroundContent } from "./BackgroundContent";
import { BackgroundImage } from "./BackgroundImage";

import type { BackgroundProps } from "./Background.types";

export function BackgroundMobile({ config }: BackgroundProps) {
    const { background, content, layout } = config;

    const alignment = layout?.alignment ?? BACKGROUND_ALIGNMENTS.START;

    return (
        <section className="lg:hidden">
            <BackgroundImage config={background} mode="mobile" />

            <Container>
                <div className="py-8">
                    <BackgroundContent
                        config={content}
                        layout={layout?.content}
                        alignment={alignment}
                    />
                </div>
            </Container>
        </section>
    );
}
