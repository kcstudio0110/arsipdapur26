import { SITE } from "@/config/site.config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        host: SITE.url,
        sitemap: `${SITE.url}/sitemap.xml`,
    };
}
