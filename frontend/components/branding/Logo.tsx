type LogoLayout = "horizontal" | "square";
type LogoVariant = "brown" | "cream";

interface LogoProps {
    layout?: LogoLayout;
    variant?: LogoVariant;
    width?: number;
    className?: string;
}

export default function Logo({
    layout = "horizontal",
    variant = "brown",
    width = 180,
    className = "",
}: LogoProps) {
    return (
        <img
            src={`/images/ArsipDapur-logo-${layout}-${variant}.svg`}
            alt="Arsip Dapur 26"
            width={width}
            className={`block h-auto ${className}`}
        />
    );
}
