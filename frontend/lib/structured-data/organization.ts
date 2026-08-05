import { SITE } from "@/config/site.config";
import { LINKS } from "@/config/links.config";
import { LOGO } from "@/config/logo.config";

export const ORGANIZATION_JSON_LD = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: SITE.company,

    url: SITE.url,

    logo: `${SITE.url}${LOGO["horizontal-brown"]}`,

    description: SITE.description,

    sameAs: [LINKS.redirect.instagram, LINKS.redirect.shopee, LINKS.redirect.tokopedia],
};
