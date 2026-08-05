import { Link } from "@/components/ui/Link";
import { FOOTER_CONFIG } from "./Footer.config";
import { FOOTER_SPACING } from "./Footer.constants";
import { Logo, LOGO_SIZE } from "@/components/branding/Logo";
import { SITE } from "@/config/site.config";

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
                    <p className="font-script text-4xl">{SITE.tagline}</p>

                    {/* Description */}
                    <p className="max-w-xl text-sm leading-none opacity-40">{SITE.description}</p>

                    {/* Social */}
                    <div className="flex items-center gap-3 pt-6 pb-2 opacity-90">
                        {FOOTER_CONFIG.socials.map((social) => (
                            <Link key={social.label} href={social.href} variant="inverse">
                                {social.label}
                            </Link>
                        ))}
                    </div>

                    <div className="w-1/2 border-t border-[var(--border-primary)]/40" />

                    {/* Copyright */}
                    <div className="mt-2 text-center text-xs opacity-50">
                        <p>
                            © {new Date().getFullYear()} {SITE.company}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
