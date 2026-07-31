import { Image } from "@/components/ui/Image";

import type { SplitMediaConfig } from "./Split.types";

interface SplitMediaProps {
    config: SplitMediaConfig;
}

export function SplitImage({ config }: SplitMediaProps) {
    if (!config.image) {
        return null;
    }

    return (
        <div className="relative w-full">
            <Image
                src={config.image.desktop}
                alt={config.image.alt}
                width={config.image.width}
                height={config.image.height}
                className="block h-auto w-full rounded-2xl"
                {...config.imageProps}
            />
        </div>
    );
}
