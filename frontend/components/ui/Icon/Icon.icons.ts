import {
    ArrowLeftIcon,
    ArrowRightIcon,
    CaretDownIcon,
    CaretRightIcon,
    EnvelopeIcon,
    ListIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    PhoneIcon,
    ShoppingCartIcon,
    XIcon,
} from "@phosphor-icons/react";

export const ICONS = {
    // Navigation
    menu: ListIcon,
    close: XIcon,

    // Arrow
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,

    chevronDown: CaretDownIcon,
    chevronRight: CaretRightIcon,

    // Action
    search: MagnifyingGlassIcon,
    cart: ShoppingCartIcon,

    // Contact
    phone: PhoneIcon,
    mail: EnvelopeIcon,
    mapPin: MapPinIcon,
} as const;
