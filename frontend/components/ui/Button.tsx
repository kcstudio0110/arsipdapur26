import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
    children: ReactNode;

    href?: string;
    external?: boolean;

    variant?: ButtonVariant;
    size?: ButtonSize;

    fullWidth?: boolean;
    disabled?: boolean;

    className?: string;

    onClick?: () => void;
}

export default function Button({
    children,

    href,
    external = false,

    variant = "primary",
    size = "md",

    fullWidth = false,
    disabled = false,

    className = "",

    onClick,
}: ButtonProps) {
    const variantClasses = {
        primary:
            "bg-[var(--button-primary)] text-[var(--font-inverse)] hover:bg-[var(--button-primary-hover)]",

        secondary:
            "bg-[var(--button-secondary)] text-[var(--font-inverse)] hover:bg-[var(--button-secondary-hover)]",

        outline:
            "border border-[var(--border-primary)] bg-transparent text-[var(--font-primary)] hover:bg-[var(--surface-secondary)]",

        ghost: "bg-transparent text-[var(--font-primary)] hover:bg-[var(--surface-secondary)]",

        danger: "bg-[var(--danger)] text-[var(--font-inverse)] hover:opacity-90",
    };

    const sizeClasses = {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-6 text-base",

        lg: "h-14 px-8 text-lg",
    };

    const classes = `
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-medium
        transition-all
        duration-300

        ${variantClasses[variant]}
        ${sizeClasses[size]}

        ${fullWidth ? "w-full" : ""}

        ${disabled ? "pointer-events-none opacity-50" : ""}

        ${className}
    `;

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
        <button type="button" onClick={onClick} disabled={disabled} className={classes}>
            {children}
        </button>
    );
}
