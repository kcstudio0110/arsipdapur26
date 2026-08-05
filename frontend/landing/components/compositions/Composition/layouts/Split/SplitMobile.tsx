import { Container } from "@/components/layout/Container";

import { SplitContent } from "./SplitContent";
import { SplitImage } from "./SplitImage";

import type { SplitProps } from "./Split.types";

export function SplitMobile({ config }: SplitProps) {
    const { media, content, layout } = config;

    return (
        <section className="lg:hidden">
            <Container>
                <div className="flex flex-col gap-8 py-6">
                    <SplitImage config={media} />

                    <SplitContent config={content} layout={layout?.content} />
                </div>
            </Container>
        </section>
    );
}
