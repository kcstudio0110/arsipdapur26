import { Link } from "@/components/ui/Link";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import type { SocialItem } from "./Social.types";

interface SocialCardProps {
    item: SocialItem;
}

export function SocialCard({ item }: SocialCardProps) {
    return (
        <Link href={item.href}>
            <Card className="flex h-full flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Icon name={item.icon} size={48} />

                <div className="flex flex-1 flex-col gap-3">
                    <Typography variant={TYPOGRAPHY_VARIANTS.HEADING}>{item.title}</Typography>

                    <Typography variant={TYPOGRAPHY_VARIANTS.BODY}>{item.description}</Typography>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <Typography variant={TYPOGRAPHY_VARIANTS.LABEL}>{item.action}</Typography>

                    <Icon name="arrowRight" size={20} />
                </div>
            </Card>
        </Link>
    );
}
