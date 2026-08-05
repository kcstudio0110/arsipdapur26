import { Link } from "@/components/ui/Link";
import { Logo, LOGO_SIZE } from "@/components/branding/Logo";

import { SITE } from "@/config/site.config";

import { FOOTER_CONFIG } from "./Footer.config";
import { FOOTER_SPACING } from "./Footer.constants";

export function Footer() {
    return (
        <footer className="border-t bg-[var(--primary)]">
            <div className={`container mx-auto ${FOOTER_SPACING.SECTION}`}>
                <div
                    className={`mx-auto flex max-w-2xl flex-col items-center text-center ${FOOTER_SPACING.CONTENT}`}
                >
                    {/* Logo */}
                    <Logo variant="cream" className={LOGO_SIZE.FOOTER} />

                    {/* Tagline */}
                    <p className="font-script text-3xl lg:text-4xl">{SITE.tagline}</p>

                    {/* Description */}
                    <p
                        className={`max-w-xl text-sm leading-relaxed opacity-40 ${FOOTER_SPACING.DESCRIPTION}`}
                    >
                        {SITE.description}
                    </p>

                    {/* Social */}
                    <div
                        className={`flex flex-wrap justify-center gap-x-4 gap-y-2 opacity-90 ${FOOTER_SPACING.SOCIAL}`}
                    >
                        {FOOTER_CONFIG.socials.map((social) => (
                            <Link key={social.id} href={social.href} variant="inverse">
                                {social.label}
                            </Link>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className={`border-t border-[var(--border-primary)]/40 ${FOOTER_SPACING.DIVIDER}`}
                    />

                    {/* Copyright */}
                    <div className={`text-center text-xs opacity-50 ${FOOTER_SPACING.COPYRIGHT}`}>
                        <p>
                            © {new Date().getFullYear()} {SITE.company}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
