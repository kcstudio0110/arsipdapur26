import type { LogoIconProps } from "./Logo.types";
import { ICON_SIZE } from "./Logo.constants";

export function LogoIcon({ size = ICON_SIZE.MEDIUM, className = "" }: LogoIconProps) {
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="branding/logo/ArsipDapur-icon.svg"
                alt="Arsip Dapur 26"
                width={size}
                height={size}
                className={`block h-auto ${className}`}
            />
        </>
    );
}
