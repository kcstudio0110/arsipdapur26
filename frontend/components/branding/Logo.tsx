import Image from "next/image";

type LogoLayout = "horizontal" | "square";
type LogoVariant = "brown" | "cream";

interface LogoProps {
    layout?: LogoLayout;
    variant?: LogoVariant;
    width?: number;
    priority?: boolean;
    className?: string;
}

export default function Logo({
    layout = "horizontal",
    variant = "brown",
    width = 180,
    priority = false,
    className = "",
}: LogoProps) {
    return (
        <Image
            src={`/images/ArsipDapur-logo-${layout}-${variant}.svg`}
            alt="Arsip Dapur 26"
            width={width}
            height={width}
            priority={priority}
            className={className}
        />
    );
}
