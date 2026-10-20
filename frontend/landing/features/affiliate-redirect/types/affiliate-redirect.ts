export const AFFILIATE_PLATFORMS = ["sh", "tp", "tt", "web"] as const;

export type AffiliatePlatform = (typeof AFFILIATE_PLATFORMS)[number];

export interface Affiliate {
    code: string;
    name: string;
    active: boolean;
}

export interface AffiliateProduct {
    code: string;
    name: string;
    active: boolean;
}

export interface AffiliateRedirectTarget {
    platform: AffiliatePlatform;
    affiliateCode: string;
    productCode: string;
    destinationUrl: string | null;
    active: boolean;
}

export interface AffiliateRedirectParams {
    platform: string;
    affiliateCode: string;
    productCode: string;
}

export type AffiliateRedirectError =
    | "INVALID_PLATFORM"
    | "AFFILIATE_NOT_FOUND"
    | "AFFILIATE_INACTIVE"
    | "PRODUCT_NOT_FOUND"
    | "PRODUCT_INACTIVE"
    | "TARGET_NOT_FOUND"
    | "TARGET_INACTIVE"
    | "DESTINATION_UNAVAILABLE";

export type AffiliateRedirectResult =
    | {
          success: true;
          destinationUrl: string;
      }
    | {
          success: false;
          error: AffiliateRedirectError;
      };
