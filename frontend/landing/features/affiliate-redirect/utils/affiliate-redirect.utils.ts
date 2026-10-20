import { AFFILIATE_PLATFORMS, type AffiliatePlatform } from "../types/affiliate-redirect";

const CODE_PATTERN = /^[A-Z0-9-]+$/;

export function normalizeAffiliateCode(value: string): string {
    return value.trim().toUpperCase();
}

export function isAffiliatePlatform(value: string): value is AffiliatePlatform {
    return AFFILIATE_PLATFORMS.includes(value as AffiliatePlatform);
}

export function isValidCode(value: string): boolean {
    return CODE_PATTERN.test(value);
}

export function buildAffiliateRedirectPath(params: {
    platform: AffiliatePlatform;
    affiliateCode: string;
    productCode: string;
}): string {
    const affiliateCode = normalizeAffiliateCode(params.affiliateCode);

    const productCode = normalizeAffiliateCode(params.productCode);

    if (!isValidCode(affiliateCode) || !isValidCode(productCode)) {
        throw new Error("Invalid affiliate redirect code");
    }

    return [
        "",
        "r",
        params.platform,
        encodeURIComponent(affiliateCode),
        encodeURIComponent(productCode),
    ].join("/");
}
