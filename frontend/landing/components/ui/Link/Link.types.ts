import type { AnchorHTMLAttributes } from "react";
import type { LinkProps as NextLinkProps } from "next/link";

export type LinkVariant = "default" | "muted" | "inverse";

export interface LinkProps
    extends NextLinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    variant?: LinkVariant;
}
