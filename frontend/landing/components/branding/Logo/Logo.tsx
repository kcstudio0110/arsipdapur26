import type { LogoProps } from "./Logo.types";
import { LOGO } from "@/config/logo.config";

export function Logo({
    layout = "horizontal",
    variant = "brown",
    width,
    className = "",
}: LogoProps) {
    const logoKey = `${layout}-${variant}` as keyof typeof LOGO;
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={LOGO[logoKey]}
                alt="Arsip Dapur 26"
                width={width}
                className={`block h-auto ${className}`}
            />
        </>
    );
}
