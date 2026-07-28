"use client";

import { Container } from "@/components/layout/Container";

import { Logo, LOGO_WIDTH } from "@/components/branding/Logo";

import { Button } from "@/components/ui/Button";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { NAVBAR_ITEMS } from "./Navbar.constants";

import type { NavbarProps } from "./Navbar.types";
import { Link } from "@/components/ui/Link";
import { cn } from "@/lib/cn";
import { LAYOUT_WIDTHS } from "../Layout.constants";
import { LINKS } from "@/config/links.config";
import { Icon } from "@/components/ui/Icon";

export function NavbarDesktop({ className = "" }: NavbarProps) {
    return (
        <header
            className={`sticky top-0 z-50 border-b border-[var(--border-primary)] bg-[var(--background)]/90 backdrop-blur-md ${className}`}
        >
            <Container>
                <div
                    className={cn(
                        "mx-auto hidden items-center justify-between lg:flex",
                        "h-18 lg:h-20 2xl:h-24",
                        LAYOUT_WIDTHS.CONTENT,
                    )}
                >
                    {/* Logo */}
                    <Link href="/">
                        <Logo width={LOGO_WIDTH.HEADER} />
                    </Link>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex items-center gap-6 lg:gap-8 2xl:gap-10">
                            {NAVBAR_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        <Typography as="span" variant={TYPOGRAPHY_VARIANTS.LABEL}>
                                            {item.label}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <Button
                        variant="primary"
                        size="sm"
                        startIcon={<Icon name="whatsapp" />}
                        href={LINKS.social.whatsapp}
                    >
                        Hubungi Kami
                    </Button>
                </div>
            </Container>
        </header>
    );
}
