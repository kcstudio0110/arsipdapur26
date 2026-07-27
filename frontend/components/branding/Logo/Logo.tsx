import type { LogoProps } from "./Logo.types";
import { LOGO_WIDTH } from "./Logo.constants";

export function Logo({
    layout = "horizontal",
    variant = "brown",
    width = LOGO_WIDTH.HEADER,
    className = "",
}: LogoProps) {
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={`branding/logo/ArsipDapur-logo-${layout}-${variant}.svg`}
                alt="Arsip Dapur 26"
                width={width}
                className={`block h-auto ${className}`}
            />
        </>
    );
}
