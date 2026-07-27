"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";

import { Logo, LOGO_WIDTH } from "@/components/branding/Logo";

import { Button } from "@/components/ui/Button";
import { Icon, ICON_SIZES } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { NAVBAR_ITEMS } from "./Navbar.constants";

import type { NavbarProps } from "./Navbar.types";

import { cn } from "@/lib/cn";

export function NavbarMobile({ className = "" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleCloseMenu() {
        setIsOpen(false);
    }

    function handleToggleMenu() {
        setIsOpen((previousState) => !previousState);
    }

    return (
        <header
            className={cn(
                "sticky top-0 z-50",
                "relative",
                "border-b border-[var(--border-primary)]",
                "bg-[var(--background)]/90",
                "backdrop-blur-md",
                "lg:hidden",
                className,
            )}
        >
            <Container>
                <div className="flex h-18 items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Logo width={LOGO_WIDTH.HEADER} />
                    </Link>

                    {/* Hamburger */}
                    <button
                        type="button"
                        onClick={handleToggleMenu}
                        aria-label={isOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-[var(--surface-secondary)]"
                    >
                        <Icon name={isOpen ? "close" : "menu"} size={ICON_SIZES.MD} />
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <nav
                id="mobile-navigation"
                className={cn(
                    "absolute top-full right-0 left-0 z-50",
                    "border-t border-[var(--border-primary)]",
                    "bg-[var(--background)]",
                    "shadow-lg",
                    "transition-all duration-300",
                    isOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0",
                )}
            >
                <Container>
                    <div className="py-6">
                        <ul className="flex flex-col gap-5">
                            {NAVBAR_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} onClick={handleCloseMenu}>
                                        <Typography as="span" variant={TYPOGRAPHY_VARIANTS.BODY}>
                                            {item.label}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Button fullWidth onClick={handleCloseMenu}>
                                Hubungi Kami
                            </Button>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
}
