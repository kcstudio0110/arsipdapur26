import { cn } from "@/lib/cn";

import { Link } from "@/components/ui/Link";

import { BUTTON_BASE, BUTTON_SIZES, BUTTON_VARIANTS } from "./Button.constants";

import type { ButtonProps } from "./Button.types";

export function Button({
    children,

    href,
    external = false,

    variant = "primary",
    size = "md",

    fullWidth = false,

    className,

    type = "button",

    onClick,

    ...props
}: ButtonProps) {
    const classes = cn(
        BUTTON_BASE,

        BUTTON_VARIANTS[variant],

        BUTTON_SIZES[size],

        fullWidth && "w-full",

        className,
    );

    if (href) {
        return (
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={classes}
            >
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
}
