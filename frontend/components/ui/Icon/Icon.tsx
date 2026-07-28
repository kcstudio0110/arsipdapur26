import { DEFAULT_ICON_MIRRORED, DEFAULT_ICON_SIZE, DEFAULT_ICON_WEIGHT } from "./Icon.constants";

import { ICONS } from "./Icon.icons";

import type { IconProps } from "./Icon.types";

export function Icon({
    name,
    size = DEFAULT_ICON_SIZE,
    weight = DEFAULT_ICON_WEIGHT,
    mirrored = DEFAULT_ICON_MIRRORED,
    ...props
}: IconProps) {
    const Component = ICONS[name];

    console.log(name);
    console.log(Component);

    return <Component size={size} weight={weight} mirrored={mirrored} {...props} />;
}
