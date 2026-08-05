import { SITE } from "@/config/site.config";

export const WEBSITE_JSON_LD = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: SITE.name,

    url: SITE.url,

    inLanguage: SITE.locale,
};
