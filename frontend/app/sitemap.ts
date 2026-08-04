import { SITE } from "@/config/site.config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE.url;

    return [
        {
            url: baseUrl,
            lastModified: new Date(),

            changeFrequency: "weekly",

            priority: 1,
        },
    ];
}
