import { Image } from "@/components/ui/Image";

import type { BackgroundImageConfig } from "./Background.types";

interface BackgroundImageProps {
    config: BackgroundImageConfig;

    mode?: "desktop" | "mobile";
}

export function BackgroundImage({ config, mode = "desktop" }: BackgroundImageProps) {
    const src =
        mode === "mobile" ? (config.image.mobile ?? config.image.desktop) : config.image.desktop;

    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src={src}
                alt={config.image.alt}
                width={config.image.width}
                height={config.image.height}
                className={
                    mode === "mobile"
                        ? "block h-[220px] w-full object-cover object-center"
                        : "block h-auto w-full"
                }
                {...config.imageProps}
            />
        </div>
    );
}
