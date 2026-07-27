import NextLink from "next/link";

import { cn } from "@/lib/cn";

import { DEFAULT_LINK_PREFETCH, LINK_BASE, LINK_VARIANTS } from "./Link.constants";

import type { LinkProps } from "./Link.types";

export function Link({
    variant = "default",

    className,

    prefetch = DEFAULT_LINK_PREFETCH,

    ...props
}: LinkProps) {
    return (
        <NextLink
            prefetch={prefetch}
            className={cn(LINK_BASE, LINK_VARIANTS[variant], className)}
            {...props}
        />
    );
}
