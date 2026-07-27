import { IconName } from "@/components/ui/Icon";

export interface SocialItem {
    id: string;

    title: string;

    description: string;

    icon: IconName;

    action: string;

    href: string;
}

export interface SocialConfig {
    id: string;

    eyebrow?: string;

    title: string;

    description?: string;
}
