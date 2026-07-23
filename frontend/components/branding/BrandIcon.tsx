import Image from "next/image";

interface BrandIconProps {
    size?: number;
    priority?: boolean;
    className?: string;
}

export default function BrandIcon({ size = 48, priority = false, className = "" }: BrandIconProps) {
    return (
        <Image
            src="/images/ArsipDapur-icon.svg"
            alt="Arsip Dapur 26"
            width={size}
            height={size}
            priority={priority}
            className={className}
        />
    );
}
