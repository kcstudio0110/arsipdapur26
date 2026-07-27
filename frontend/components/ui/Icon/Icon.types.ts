import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";

import { ICONS } from "./Icon.icons";

export type IconName = keyof typeof ICONS;

export interface IconProps extends PhosphorIconProps {
    name: IconName;
}
