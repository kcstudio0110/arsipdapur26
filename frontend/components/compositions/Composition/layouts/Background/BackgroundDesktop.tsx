import { Container } from "@/components/layout/Container";

import { BackgroundContent } from "./BackgroundContent";
import { BackgroundImage } from "./BackgroundImage";
import { BackgroundOverlay } from "./BackgroundOverlay";

import { LAYOUT_PRESETS, LAYOUTS } from "../../presets";

import type { BackgroundProps } from "./Background.types";

export function BackgroundDesktop({ config }: BackgroundProps) {
    const { background, content, layout = LAYOUTS.HERO } = config;

    const preset = LAYOUT_PRESETS[layout].desktop;

    return (
        <section className="relative hidden overflow-hidden lg:block">
            <BackgroundImage config={background} />

            <BackgroundOverlay layout={preset.overlay} />

            <div className="absolute inset-0 z-20">
                <Container className="flex h-full">
                    <BackgroundContent
                        config={content}
                        layout={preset.content}
                        alignment={preset.alignment}
                    />
                </Container>
            </div>
        </section>
    );
}
