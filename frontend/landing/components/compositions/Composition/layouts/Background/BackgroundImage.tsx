import { Image } from "@/components/ui/Image";

import type { BackgroundImageConfig } from "./Background.types";

interface BackgroundImageProps {
    config: BackgroundImageConfig;
}

export function BackgroundImage({ config }: BackgroundImageProps) {
    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src={config.image.desktop}
                alt={config.image.alt}
                width={config.image.width}
                height={config.image.height}
                className="block h-auto w-full"
                {...config.imageProps}
            />
        </div>
    );
}
