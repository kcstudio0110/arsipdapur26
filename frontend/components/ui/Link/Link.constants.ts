export const DEFAULT_LINK_PREFETCH = true;

export const LINK_BASE =
    "transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2";

export const LINK_VARIANTS = {
    default: "text-[var(--font-primary)] hover:text-[var(--primary)]",

    muted: "text-[var(--font-secondary)] hover:text-[var(--font-primary)]",

    inverse: "text-[var(--font-inverse)] hover:opacity-80",
} as const;
