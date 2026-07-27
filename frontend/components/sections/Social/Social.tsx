import { Section } from "@/components/layout/Section";

import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { SOCIAL_CONFIG, SOCIAL_ITEMS } from "./Social.config";
import { SocialCard } from "./SocialCard";

export function Social() {
    const { id, eyebrow, title, description } = SOCIAL_CONFIG;

    return (
        <Section id={id}>
            <div className="mx-auto max-w-3xl text-center">
                {eyebrow && (
                    <Typography variant={TYPOGRAPHY_VARIANTS.OVERLINE}>{eyebrow}</Typography>
                )}

                <Typography variant={TYPOGRAPHY_VARIANTS.HEADING}>{title}</Typography>

                {description && (
                    <Typography variant={TYPOGRAPHY_VARIANTS.BODY}>{description}</Typography>
                )}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {SOCIAL_ITEMS.map((item) => (
                    <SocialCard key={item.id} item={item} />
                ))}
            </div>
        </Section>
    );
}
