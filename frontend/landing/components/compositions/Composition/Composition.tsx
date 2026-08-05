import { Background } from "./layouts/Background";

import type { BackgroundConfig } from "./layouts/Background";
import type { CompositionProps } from "./Composition.types";

export function Composition({ config }: CompositionProps<BackgroundConfig>) {
    return <Background config={config} />;
}
