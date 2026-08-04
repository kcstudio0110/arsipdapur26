import { WEBSITE_JSON_LD } from "@/lib/structured-data/website";
import { JsonLd } from "./JsonLd";

export function WebsiteJsonLd() {
    return <JsonLd data={WEBSITE_JSON_LD} />;
}
