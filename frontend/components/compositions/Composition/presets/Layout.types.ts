import type { BackgroundAlignment, BackgroundAreaWidth } from "../layouts/Background";

import type { LAYOUTS } from "./Layout.constants";

export type LayoutVariant = (typeof LAYOUTS)[keyof typeof LAYOUTS];

export interface LayoutDesktopPreset {
    alignment: BackgroundAlignment;

    content: {
        width: BackgroundAreaWidth;
    };

    overlay: {
        width: BackgroundAreaWidth;
    };
}

export interface LayoutMobilePreset {
    alignment: BackgroundAlignment;

    content: {
        width: BackgroundAreaWidth;
    };
}

export interface LayoutPreset {
    desktop: LayoutDesktopPreset;

    mobile: LayoutMobilePreset;
}
