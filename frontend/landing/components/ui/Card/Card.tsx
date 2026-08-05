import { cn } from "@/lib/cn";

import { CARD_BASE } from "./Card.constants";

import type { CardProps } from "./Card.types";

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div className={cn(CARD_BASE, className)} {...props}>
            {children}
        </div>
    );
}
