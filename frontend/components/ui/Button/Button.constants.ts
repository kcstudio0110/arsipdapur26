import type { ButtonSize, ButtonVariant } from "./Button.types";

export const BUTTON_BASE =
    "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap select-none cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";
export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
    primary:
        "bg-[var(--button-primary)] text-[var(--font-inverse)] hover:bg-[var(--button-primary-hover)]",

    secondary:
        "bg-[var(--button-secondary)] text-[var(--font-inverse)] hover:bg-[var(--button-secondary-hover)]",

    outline:
        "border border-[var(--border-primary)] bg-transparent text-[var(--font-primary)] hover:bg-[var(--surface-secondary)]",

    ghost: "bg-transparent text-[var(--font-primary)] hover:bg-[var(--surface-secondary)]",

    danger: "bg-[var(--danger)] text-[var(--font-inverse)] hover:opacity-90",
};

export const BUTTON_SIZES: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-xs lg:h-10 lg:px-5 lg:text-sm",

    md: "h-11 px-5 text-sm lg:h-12 lg:px-6 lg:text-base 2xl:h-13 2xl:px-7",

    lg: "h-12 px-6 text-base lg:h-14 lg:px-8 lg:text-lg 2xl:h-16 2xl:px-10 2xl:text-xl",
};
