import { Container } from "@/components/layout/Container";

import { BackgroundContent } from "./BackgroundContent";
import { BackgroundImage } from "./BackgroundImage";

import { LAYOUT_PRESETS, LAYOUTS } from "../../presets";

import type { BackgroundProps } from "./Background.types";

export function BackgroundMobile({ config }: BackgroundProps) {
    const { background, content, layout = LAYOUTS.HERO } = config;

    const preset = LAYOUT_PRESETS[layout].mobile;

    return (
        <section className="lg:hidden">
            <BackgroundImage config={background} />

            <Container>
                <div className="py-8">
                    <BackgroundContent
                        config={content}
                        layout={preset.content}
                        alignment={preset.alignment}
                    />
                </div>
            </Container>
        </section>
    );
}
