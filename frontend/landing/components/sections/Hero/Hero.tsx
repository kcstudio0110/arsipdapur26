import { Background } from "@/components/compositions/Composition/layouts/Background";

import { HERO_CONFIG } from "./Hero.constants";

export function Hero() {
    return <Background config={HERO_CONFIG} />;
}
