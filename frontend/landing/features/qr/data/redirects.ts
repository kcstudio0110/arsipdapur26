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
        slug: "ayam-fillet-bakar-manis",
        destination: LINKS.internal.home,
        active: false,
    },
    {
        id: "QR-0005",
        slug: "bumbu-nasi-goreng-kencur",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0006",
        slug: "bumbu-banjar",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0007",
        slug: "bumbu-woku",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0008",
        slug: "bumbu-manis",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0009",
        slug: "bumbu-rica",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0010",
        slug: "bumbu-kentang-balado",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0011",
        slug: "bumbu-lado-hijau",
        destination: LINKS.internal.home,
        active: true,
    },
    {
        id: "QR-0012",
        slug: "packaging",
        destination: LINKS.internal.home,
        active: true,
    },
];
