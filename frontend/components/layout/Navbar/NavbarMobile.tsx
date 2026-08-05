"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/layout/Container";

import { Logo, LOGO_SIZE } from "@/components/branding/Logo";

import { Button } from "@/components/ui/Button";
import { Icon, ICON_SIZES } from "@/components/ui/Icon";
import { Link } from "@/components/ui/Link";
import { Typography, TYPOGRAPHY_VARIANTS } from "@/components/ui/Typography";

import { LINKS } from "@/config/links.config";

import { NAVBAR_ITEMS } from "./Navbar.constants";

import type { NavbarProps } from "./Navbar.types";

import { cn } from "@/lib/cn";

export function NavbarMobile({ className = "" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    function handleCloseMenu() {
        setIsOpen(false);
    }

    function handleToggleMenu() {
        setIsOpen((previous) => !previous);
    }

    return (
        <>
            <header
                className={cn(
                    "sticky inset-x-0 top-0 z-50",
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
                        <Link href="/" onClick={handleCloseMenu}>
                            <Logo className={LOGO_SIZE.HEADER} />
                        </Link>

                        {/* Hamburger */}
                        <button
                            type="button"
                            onClick={() => {
                                handleToggleMenu();
                            }}
                            aria-label={isOpen ? "Close navigation" : "Open navigation"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            className="flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-[var(--surface-secondary)]"
                        >
                            <Icon name={isOpen ? "close" : "menu"} size={ICON_SIZES.MD} />
                        </button>
                    </div>
                </Container>
            </header>

            {/* Backdrop */}
            <div
                onClick={handleCloseMenu}
                className={cn(
                    "fixed inset-0 top-18 z-40 bg-black/25 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0",
                )}
            />

            {/* Mobile Navigation */}
            <nav
                id="mobile-navigation"
                className={cn(
                    "fixed inset-x-0 top-18 z-50 lg:hidden",
                    "border-b border-[var(--border-primary)]",
                    "bg-[var(--background)]",
                    "shadow-xl",
                    "transition-all duration-300",

                    isOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0",
                )}
            >
                <Container>
                    <div className="pb-3">
                        <ul className="flex flex-col gap-6">
                            {NAVBAR_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={handleCloseMenu}
                                        className="block rounded-lg py-2"
                                    >
                                        <Typography as="span" variant={TYPOGRAPHY_VARIANTS.BODY}>
                                            {item.label}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-2 border-t border-[var(--border-primary)] pt-4">
                            <Button
                                fullWidth
                                size="md"
                                href={LINKS.redirect.whatsapp}
                                onClick={handleCloseMenu}
                            >
                                Hubungi Kami
                            </Button>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
}
