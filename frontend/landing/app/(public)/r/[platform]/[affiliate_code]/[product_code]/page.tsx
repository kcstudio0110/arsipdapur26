import { notFound, redirect } from "next/navigation";

import { resolveAffiliateRedirect } from "@/features/affiliate-redirect/services/affiliate-redirect.service";

interface AffiliateRedirectPageProps {
    params: Promise<{
        platform: string;
        affiliate_code: string;
        product_code: string;
    }>;
}

export default async function AffiliateRedirectPage({ params }: AffiliateRedirectPageProps) {
    const { platform, affiliate_code, product_code } = await params;

    const result = resolveAffiliateRedirect({
        platform,
        affiliateCode: affiliate_code,
        productCode: product_code,
    });

    if (!result.success) {
        notFound();
    }

    redirect(result.destinationUrl);
}
