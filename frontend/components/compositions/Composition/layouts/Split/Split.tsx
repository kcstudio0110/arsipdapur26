import { SplitDesktop } from "./SplitDesktop";

import type { SplitProps } from "./Split.types";
import { SplitMobile } from "./SplitMobile";

export function Split({ config }: SplitProps) {
    return (
        <>
            <SplitDesktop config={config} />
            <SplitMobile config={config} />
        </>
    );
}
