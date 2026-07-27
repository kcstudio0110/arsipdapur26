export interface SocialItem {
    id: string;

    title: string;

    description: string;

    icon: string;

    href: string;
}

export interface SocialConfig {
    id: string;

    eyebrow?: string;

    title: string;

    description?: string;

    items: SocialItem[];
}
