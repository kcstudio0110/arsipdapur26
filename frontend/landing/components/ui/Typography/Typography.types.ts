import { TYPOGRAPHY_VARIANTS } from "./Typography.constants";

export type TypographyVariant = (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

export interface TypographyProps {
    as?: React.ElementType;

    variant?: TypographyVariant;

    children: React.ReactNode;

    className?: string;
}
