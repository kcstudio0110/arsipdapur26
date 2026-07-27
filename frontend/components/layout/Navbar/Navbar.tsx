import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

import type { NavbarProps } from "./Navbar.types";

export function Navbar({ className = "" }: NavbarProps) {
    return (
        <>
            <NavbarDesktop className={className} />
            <NavbarMobile className={className} />
        </>
    );
}
