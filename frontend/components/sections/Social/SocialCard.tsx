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
        <Link href={item.href} className="group">
            <Card className="flex h-full flex-col gap-3 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:gap-4 lg:p-6">
                {/* Icon */}
                <div className={item.brandColorClass}>
                    <Icon name={item.icon} size={40} />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-1 lg:gap-2">
                    <div className={item.brandColorClass}>
                        <Typography variant={TYPOGRAPHY_VARIANTS.TITLE}>{item.title}</Typography>
                    </div>

                    <Typography variant={TYPOGRAPHY_VARIANTS.BODY} className="italic">
                        {item.description}
                    </Typography>
                </div>

                {/* CTA */}
                <div className="mt-2 flex items-center justify-between border-t border-[var(--border-primary)] pt-3 lg:mt-3 lg:pt-4">
                    <Typography variant={TYPOGRAPHY_VARIANTS.LABEL}>{item.action}</Typography>

                    <Icon name="arrowRight" size={18} />
                </div>
            </Card>
        </Link>
    );
}
