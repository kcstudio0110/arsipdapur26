import { LINKS } from "@/config/links.config";
import type { QRRedirect } from "../types/qr";

export const redirects: QRRedirect[] = [
    {
        id: "QR-0001",
        slug: "ayam-suwir-woku",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0002",
        slug: "ayam-suwir-rica",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0003",
        slug: "ayam-suwir-lado-hijau",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0004",
        slug: "tongkol-cabai-hijau",
        destination: LINKS.internal.home,
        active: false,
    },
];
