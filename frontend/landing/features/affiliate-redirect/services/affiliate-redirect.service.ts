import { affiliateRedirectRepository } from "../repositories/affiliate-redirect.repository";
import {
    isAffiliatePlatform,
    normalizeAffiliateCode,
    isValidCode,
} from "../utils/affiliate-redirect.utils";

import type { AffiliateRedirectParams, AffiliateRedirectResult } from "../types/affiliate-redirect";

function isAllowedDestinationUrl(value: string | null): value is string {
    if (!value) {
        return false;
    }

    try {
        const url = new URL(value);

        return url.protocol === "https:" && !url.username && !url.password;
    } catch {
        return false;
    }
}

export function resolveAffiliateRedirect(params: AffiliateRedirectParams): AffiliateRedirectResult {
    if (!isAffiliatePlatform(params.platform)) {
        return {
            success: false,
            error: "INVALID_PLATFORM",
        };
    }

    const affiliateCode = normalizeAffiliateCode(params.affiliateCode);

    const productCode = normalizeAffiliateCode(params.productCode);

    if (!isValidCode(affiliateCode) || !isValidCode(productCode)) {
        return {
            success: false,
            error: "TARGET_NOT_FOUND",
        };
    }

    const platform = affiliateRedirectRepository.findPlatform(params.platform);

    if (!platform?.active) {
        return {
            success: false,
            error: "INVALID_PLATFORM",
        };
    }

    const affiliate = affiliateRedirectRepository.findAffiliate(affiliateCode);

    if (!affiliate) {
        return {
            success: false,
            error: "AFFILIATE_NOT_FOUND",
        };
    }

    if (!affiliate.active) {
        return {
            success: false,
            error: "AFFILIATE_INACTIVE",
        };
    }

    const product = affiliateRedirectRepository.findProduct(productCode);

    if (!product) {
        return {
            success: false,
            error: "PRODUCT_NOT_FOUND",
        };
    }

    if (!product.active) {
        return {
            success: false,
            error: "PRODUCT_INACTIVE",
        };
    }

    const target = affiliateRedirectRepository.findTarget(
        params.platform,
        affiliateCode,
        productCode,
    );

    if (!target) {
        return {
            success: false,
            error: "TARGET_NOT_FOUND",
        };
    }

    if (!target.active) {
        return {
            success: false,
            error: "TARGET_INACTIVE",
        };
    }

    if (!isAllowedDestinationUrl(target.destinationUrl)) {
        return {
            success: false,
            error: "DESTINATION_UNAVAILABLE",
        };
    }

    return {
        success: true,
        destinationUrl: target.destinationUrl,
    };
}
