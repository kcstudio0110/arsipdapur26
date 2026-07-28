"use client";

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
    ShoppingBagIcon,
    XIcon,
    InstagramLogoIcon,
    WhatsappLogoIcon,
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
    shoppingBag: ShoppingBagIcon,

    // Social
    instagram: InstagramLogoIcon,
    whatsapp: WhatsappLogoIcon,

    // Contact
    phone: PhoneIcon,
    mail: EnvelopeIcon,
    mapPin: MapPinIcon,
} as const;
