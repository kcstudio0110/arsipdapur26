import { Link } from "@/components/ui/Link";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import type { SocialItem } from "./Social.types";
import { cn } from "@/lib/cn";

interface SocialCardProps {
    item: SocialItem;
}

export function SocialCard({ item }: SocialCardProps) {
    return (
        <Link href={item.href} className="group">
            <Card className="flex h-full flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className={item.brandColorClass}>
                    <Icon name={item.icon} size={48} />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                    <div className={item.brandColorClass}>
                        <Typography variant={TYPOGRAPHY_VARIANTS.TITLE}>{item.title}</Typography>
                    </div>

                    <Typography variant={TYPOGRAPHY_VARIANTS.BODY} className="italic">
                        {item.description}
                    </Typography>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                    <Typography variant={TYPOGRAPHY_VARIANTS.LABEL}>{item.action}</Typography>

                    <Icon name="arrowRight" size={20} />
                </div>
            </Card>
        </Link>
    );
}
