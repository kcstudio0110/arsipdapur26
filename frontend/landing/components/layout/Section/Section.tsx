import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: string;
}

export function Section({
    children,
    id,
    className = "",
    background = "bg-[var(--background)]",
}: SectionProps) {
    return (
        <section id={id} className={` ${background} py-10 ${className} `}>
            {children}
        </section>
    );
}
