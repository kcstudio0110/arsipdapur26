import { IconName } from "@/components/ui/Icon";

export interface FooterSocial {
    id: string;
    label: string;
    icon: IconName;
    href: string;
}

export interface FooterConfig {
    socials: FooterSocial[];
}
