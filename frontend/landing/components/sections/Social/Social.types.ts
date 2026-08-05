import { IconName } from "@/components/ui/Icon";
import { PlatformColorClass } from "@/constants/colors";

export interface SocialItem {
    id: string;

    title: string;

    description: string;

    icon: IconName;

    action: string;

    href: string;

    brandColorClass: PlatformColorClass;
}

export interface SocialConfig {
    id: string;

    eyebrow?: string;

    title: string;

    description?: string;
}
