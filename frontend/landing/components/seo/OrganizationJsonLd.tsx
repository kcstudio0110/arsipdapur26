import { JsonLd } from "./JsonLd";

import { ORGANIZATION_JSON_LD } from "@/lib/structured-data/organization";

export function OrganizationJsonLd() {
    return <JsonLd data={ORGANIZATION_JSON_LD} />;
}
