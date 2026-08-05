import type { BackgroundProps } from "./Background.types";
import { BackgroundDesktop } from "./BackgroundDesktop";
import { BackgroundMobile } from "./BackgroundMobile";

export function Background({ config }: BackgroundProps) {
    return (
        <>
            <BackgroundDesktop config={config} />
            <BackgroundMobile config={config} />
        </>
    );
}
