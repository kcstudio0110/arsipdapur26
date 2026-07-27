export type LogoLayout = "horizontal" | "square";

export type LogoVariant = "brown" | "cream";

export interface LogoProps {
    layout?: LogoLayout;
    variant?: LogoVariant;
    width?: number;
    className?: string;
}

export interface LogoIconProps {
    size?: number;
    className?: string;
}
