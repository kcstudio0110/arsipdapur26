import { redirects } from "../data/redirects";

export function getRedirect(slug: string): string | null {
    const qr = redirects.find((item) => item.slug === slug && item.active);

    return qr?.destination ?? null;
}
