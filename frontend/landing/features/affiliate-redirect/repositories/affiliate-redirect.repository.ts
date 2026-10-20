import { AFFILIATE_DATA } from "../data/affiliates";
import { AFFILIATE_PLATFORM_DATA } from "../data/platforms";
import { AFFILIATE_PRODUCT_DATA } from "../data/products";
import { AFFILIATE_REDIRECT_TARGETS } from "../data/redirect-targets";

import type {
    Affiliate,
    AffiliatePlatform,
    AffiliateProduct,
    AffiliateRedirectTarget,
} from "../types/affiliate-redirect";

export const affiliateRedirectRepository = {
    findPlatform(platform: string) {
        if (!Object.prototype.hasOwnProperty.call(AFFILIATE_PLATFORM_DATA, platform)) {
            return null;
        }

        return AFFILIATE_PLATFORM_DATA[platform as AffiliatePlatform];
    },

    findAffiliate(code: string): Affiliate | null {
        return AFFILIATE_DATA.find((affiliate) => affiliate.code === code) ?? null;
    },

    findProduct(code: string): AffiliateProduct | null {
        return AFFILIATE_PRODUCT_DATA.find((product) => product.code === code) ?? null;
    },

    findTarget(
        platform: AffiliatePlatform,
        affiliateCode: string,
        productCode: string,
    ): AffiliateRedirectTarget | null {
        return (
            AFFILIATE_REDIRECT_TARGETS.find(
                (target) =>
                    target.platform === platform &&
                    target.affiliateCode === affiliateCode &&
                    target.productCode === productCode,
            ) ?? null
        );
    },
};
