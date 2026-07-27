import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    children: ReactNode;

    href?: string;
    external?: boolean;

    variant?: ButtonVariant;
    size?: ButtonSize;

    fullWidth?: boolean;

    onClick?: MouseEventHandler<HTMLButtonElement>;
}
