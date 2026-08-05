import { Link } from "@/components/ui/Link";
import { FOOTER_CONFIG } from "./Footer.config";
import { FOOTER_SPACING } from "./Footer.constants";
import { Logo, LOGO_SIZE } from "@/components/branding/Logo";
import { SITE } from "@/config/site.config";

export function Footer() {
    return (
        <footer className="border-t bg-[var(--primary)]">
            <div className="container mx-auto py-8 text-[var(--font-inverse)] lg:py-5">
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                    <Logo variant="cream" className="w-40 lg:w-52" />

                    <p className="font-script text-3xl lg:text-4xl">{SITE.tagline}</p>

                    <p className="max-w-xl px-3 text-sm leading-relaxed opacity-40">
                        {SITE.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-6 pb-3 opacity-90">
                        {FOOTER_CONFIG.socials.map((social) => (
                            <Link key={social.id} href={social.href} variant="inverse">
                                {social.label}
                            </Link>
                        ))}
                    </div>

                    <div className="w-24 border-t border-[var(--border-primary)]/40 lg:w-1/2" />

                    <div className="mt-3 text-center text-xs opacity-50">
                        © {new Date().getFullYear()} {SITE.company}
                    </div>
                </div>
            </div>
        </footer>
    );
}
