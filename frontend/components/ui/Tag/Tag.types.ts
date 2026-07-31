import type { TAG_SIZES, TAG_VARIANTS } from "./Tag.constants";

export type TagVariant = (typeof TAG_VARIANTS)[keyof typeof TAG_VARIANTS];

export type TagSize = (typeof TAG_SIZES)[keyof typeof TAG_SIZES];

export interface TagProps {
    label: string;

    variant?: TagVariant;

    size?: TagSize;

    className?: string;
}
