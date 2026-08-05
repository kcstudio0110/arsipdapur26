import NextLink from "next/link";

import { LINKS } from "@/config/links.config";
import { cn } from "@/lib/cn";

import { DEFAULT_LINK_PREFETCH, LINK_BASE, LINK_VARIANTS } from "./Link.constants";

import type { LinkProps } from "./Link.types";

const REDIRECT_ROUTES = Object.values(LINKS.redirect);

function isRedirectRoute(href: unknown): href is string {
    return typeof href === "string" && REDIRECT_ROUTES.some((route) => href.startsWith(route));
}

export function Link({
    variant = "default",
    className,
    prefetch = DEFAULT_LINK_PREFETCH,
    href,
    ...props
}: LinkProps) {
    const classes = cn(LINK_BASE, LINK_VARIANTS[variant], className);

    if (isRedirectRoute(href)) {
        return <a href={href} className={classes} {...props} />;
    }
    return <NextLink href={href} prefetch={prefetch} className={classes} {...props} />;
}
